import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Row, Col } from '@common/Grid'
import { Input } from '@common/Input'
import { Select } from '@common/Select'
import { Button } from '@common/Button'
import { generateBranch } from './utils'
import { PopupSelect } from '@common/PopupSelect'
import { Icon } from '@common/Icon'
import { colors } from '@common/Theme'
import { Section, SectionContent, SectionFooter, SectionHeader, Panel } from './BranchBuilder.styled'
import { loadState, saveState } from './utils/storage'
import { projectOptions, teamOptions, changeTypeOptions } from './constants'
import { css } from 'styled-components'
import CodeWriter from '@common/CodeWriter'
import { uuid } from '@utils/uuid'

const LOCAL_STORAGE_KEY = 'BranchBuilderState'
const HISTORY_STORAGE_KEY = 'BranchBuilderHistory'
const LOCAL_CONFIG_KEY = 'BranchBuilderConfig'

const defaultState = {
  changeType: 'feat',
  team: 'dcc',
  project: 'gw',
  jiraId: '',
  description: '',
}

const getPrefix =
  ({ prefix, suffix }) =>
  (value) => {
    if (!value || !value.length) return ''
    return `${prefix} ${value} ${suffix}`
  }

const BranchBuilder = () => {
  const [state, setState] = useState(defaultState)
  const [activePage, setActivePage] = useState('a')
  const [prevState, setPrevState] = useState(null)
  const [history, setHistory] = useState([])
  const [justCopiedBranch, setJustCopiedBranch] = useState(false)
  const [justCopied, setJustCopied] = useState(false)
  const timerRefBranch = useRef(null)
  const timerRef = useRef(null)
  const [config, setConfig] = useState({
    enableGitCommand: true,
  })

  useEffect(() => {
    ;(async () => {
      const savedState = await loadState(LOCAL_STORAGE_KEY)
      const savedHistory = await loadState(HISTORY_STORAGE_KEY)
      const savedConfig = await loadState(LOCAL_CONFIG_KEY)
      if (savedState) {
        setPrevState(savedState)
        setState(savedState)
      }
      if (Array.isArray(savedHistory)) {
        setHistory(savedHistory)
      }
      if (savedConfig) {
        setConfig(savedConfig)
      }
    })()

    // cleanup on unmount
    return () => clearTimeout(timerRefBranch.current)
  }, [])

  const onChangeField = (name, value) => {
    setState((s) => ({ ...s, [name]: value }))
  }

  // Build branchName with 5-step curry
  const branchName = generateBranch(state.changeType)(state.team)(state.project)(state.jiraId)(
    state.description
  )

  const prevBranchName = prevState
    ? generateBranch(prevState.changeType)(prevState.team)(prevState.project)(prevState.jiraId)(
        prevState.description
      )
    : ''

  const handleSave = useCallback(async () => {
    try {
      // copy & persist
      await navigator.clipboard.writeText(branchName)
      await saveState(LOCAL_STORAGE_KEY, state)
      setPrevState(state)

      const newEntry = {
        id: uuid(),
        value: branchName,
        label: branchName,
        timestamp: Date.now(),
      }
      setHistory((h) => {
        const updated = [...h, newEntry]
        saveState(HISTORY_STORAGE_KEY, updated)
        return updated
      })
      setJustCopiedBranch(true)
      clearTimeout(timerRefBranch.current)
      timerRefBranch.current = setTimeout(() => {
        setJustCopiedBranch(false)
      }, 1500)
    } catch (err) {
      console.error('Copy or save failed', err)
    }
  }, [branchName, state])

  const base = [
    {
      action: 'CONFIG',
      label: 'Enable Git Command',
      value: false,
      position: 'TOP',
      icon: 'TERMINAL',
      order: 0,
    },
    { action: 'SHOW_HISTORY', label: 'History', value: false, position: 'BOTTOM', icon: 'HISTORY', order: 0 },
    { action: 'SHOW_EDITOR', label: 'Editor', value: false, position: 'BOTTOM', icon: 'EDIT', order: 1 },
    { action: 'SAVE', label: 'Save', value: false, position: 'BOTTOM', icon: 'SAVE', order: 2 },
    { action: 'RESET', label: 'Reset', value: false, position: 'BOTTOM', icon: 'REFRESH', order: 3 },
  ]

  function getValueForAction(action, state) {
    const lookup = {
      ['CONFIG']: state.enableGitCommand,
    }
    return lookup[action]
  }

  function getOptions(items, state) {
    return items.map((item) => ({
      ...item,
      value: getValueForAction(item.action, state),
    }))
  }

  const getOptionsByPanel = (options) => {
    if (activePage === 'a') {
      // on “page a” only show History, Save and Reset
      return options.filter((opt) => ['SHOW_HISTORY', 'SAVE', 'RESET', 'CONFIG'].includes(opt.action))
    }

    if (activePage === 'b') {
      // on “page b” only show Editor and Reset
      return options.filter((opt) => ['SHOW_EDITOR', 'RESET'].includes(opt.action))
    }

    // fallback: show all
    return options
  }

  // usage:
  const contrivedOptions = getOptionsByPanel(base)

  const options = getOptions(contrivedOptions, {
    enableGitCommand: config.enableGitCommand,
  })

  const handleReset = useCallback(() => {
    setState(defaultState)
    setPrevState(null)
    saveState(LOCAL_STORAGE_KEY, defaultState)
    setHistory([])
    saveState(HISTORY_STORAGE_KEY, [])
    setJustCopiedBranch(false)
    clearTimeout(timerRefBranch.current)
    timerRefBranch.current = null
  }, [])

  const handleShowHistory = () => {
    setActivePage('b')
  }

  const handleConfig = () => {
    setConfig((prev) => ({
      ...prev,
      enableGitCommand: !prev.enableGitCommand,
    }))
    saveState(LOCAL_CONFIG_KEY, {
      enableGitCommand: !config.enableGitCommand,
    })
  }

  const handleSelect = useCallback(
    ({ action }) => {
      switch (action) {
        case 'SHOW_HISTORY':
          handleShowHistory()
          break
        case 'SHOW_EDITOR':
          setActivePage('a')
          break
        case 'SAVE':
          handleSave()
          break
        case 'CONFIG':
          handleConfig()
          break
        case 'RESET':
          handleReset()
          break
        default:
          break
      }
    },
    [handleSave, handleReset]
  )

  const handleCodeWriter = useCallback(
    ({ action, data }) => {
      if (action === 'DELETE') {
        const updatedHistory = history.filter((item) => item.id !== data.id)
        setHistory(updatedHistory)
        saveState(HISTORY_STORAGE_KEY, updatedHistory)
      }
    },
    [history]
  )

  const getComputedGitCommand = getPrefix({
    prefix: 'git checkout -b',
    suffix: '',
  })(branchName)

  return (
    <div>
      <Section>
        <SectionContent>
          <SectionHeader>
            <h2>Branch Builder</h2>
            <PopupSelect options={options} callback={handleSelect} />
          </SectionHeader>

          <Panel isActive={activePage === 'a'} minHeight={250} gap={16}>
            <Row>
              <Col md={12}>
                <Select
                  name="changeType"
                  label="Change Type"
                  options={changeTypeOptions}
                  value={state.changeType}
                  callback={({ name, value }) => onChangeField(name, value)}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Select
                  name="team"
                  label="Team"
                  options={teamOptions}
                  value={state.team}
                  callback={({ name, value }) => onChangeField(name, value)}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Select
                  name="project"
                  label="Project"
                  options={projectOptions}
                  value={state.project}
                  callback={({ name, value }) => onChangeField(name, value)}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Input
                  name="jiraId"
                  label="Jira Ticket ID"
                  placeholder="e.g. 1234"
                  value={state.jiraId}
                  onChange={(e) => onChangeField('jiraId', e.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Input
                  name="description"
                  label="Short Description"
                  placeholder="e.g. export-csv"
                  value={state.description}
                  onChange={(e) => onChangeField('description', e.target.value)}
                />
              </Col>
            </Row>
          </Panel>

          <Panel isActive={activePage === 'b'} minHeight={250}>
            <CodeWriter
              label="Branch History"
              callback={handleCodeWriter}
              config={{
                maxHeight: '300px',
                showState: false,
                enableDrag: false,
                enableView: false,
                enableDateView: false,
              }}
              data={history}
            />
          </Panel>
        </SectionContent>
      </Section>

      <SectionFooter>
        <Panel
          isActive={activePage === 'a'}
          flexDirection={config?.enableGitCommand ? 'column' : 'row'}
          justifyContent={config?.enableGitCommand ? 'flex-start' : 'center'}
        >
          <Button
            mt={8}
            width="100%"
            extend={css`
              justify-content: space-between;
              span.label {
                font-size: 16px;
              }
              &:focus {
                &:before {
                  display: none;
                }
                background-color: rgba(58, 238, 184, 0.09);
              }
            `}
            // swap variant based on justCopiedBranch
            variant={justCopiedBranch ? 'gold' : 'green'}
            onClick={handleSave}
          >
            <span className="label">{justCopiedBranch ? 'Copied' : branchName || 'Save & Copy'}</span>
            <Icon name="COPY" stroke={justCopiedBranch ? colors.yellow : colors.green} />
          </Button>
          {config?.enableGitCommand && (
            <Button
              mt={8}
              width="100%"
              extend={css`
                justify-content: space-between;
                span.label {
                  font-size: 16px;
                }
                &:focus {
                  &:before {
                    display: none;
                  }
                  background-color: rgba(58, 238, 184, 0.09);
                }
              `}
              // swap variant based on justCopiedBranch
              variant={justCopied ? 'gold' : 'purple'}
              onClick={async () => {
                await navigator.clipboard.writeText(getComputedGitCommand)
                setJustCopied(true)
                setJustCopied(true)
                clearTimeout(timerRef.current)
                timerRef.current = setTimeout(() => {
                  setJustCopied(false)
                }, 1500)
              }}
            >
              <span className="label">
                {justCopied ? 'Copied' : getComputedGitCommand || 'Git command w/ branch'}
              </span>
              <Icon name="COPY" stroke={justCopied ? colors.yellow : colors.purple} />
            </Button>
          )}
        </Panel>

        <Panel isActive={activePage === 'b'} flexDirection="row" justifyContent="center">
          <Button
            mt={8}
            width="100%"
            extend={css`
              justify-content: space-between;
              span.label {
                font-size: 16px;
              }
              &:focus {
                &:before {
                  display: none;
                }
                background-color: rgba(58, 238, 184, 0.09);
              }
            `}
            variant="blue"
            onClick={() => setActivePage('a')}
          >
            <span className="label">Back</span>
            <Icon name="RETURN" stroke={colors.blue} />
          </Button>
        </Panel>
      </SectionFooter>
    </div>
  )
}

export default BranchBuilder
