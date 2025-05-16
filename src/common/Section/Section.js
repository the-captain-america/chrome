import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Provider } from './Provider'
import { FileLocation } from '@common/FileLocation'
import useDisableBodyScroll from '@hooks/useDisableBodyScroll'
import {
  SectionContainer,
  SectionControl,
  SectionDragger as Dragger,
  SectionFooter,
} from './Section.styled'
import SectionContent from './SectionContent'
import { useHorizontalResize } from '@hooks/useHorizontalResize'
import { Icon } from '@common/Icon'
import { useSection } from './Provider'
import { StateView } from '@common/StateView'
import getClassName from './utils/getClassName'
import getComponentId from './utils/getComponentId'

const Section = (props) => (
  <Provider>
    <SectionComponent {...props} />
  </Provider>
)

const SectionComponent = ({
  children,
  title = '',
  id = '',
  portalId = '',
  path = '',
  config,
  extend,
  ...props
}) => {
  const { width, resizableRef, startResizing } = useHorizontalResize('100%')
  const { priority, bgColor, enableMaxWidth, maxWidth, mt, mb, enableExpand } =
    config || {}
  const {
    state: { isExpanded, currentWidth, enableCodeView = false },
    actions,
  } = useSection()
  const [hasMeasured, setHasMeasured] = useState(false)
  const isDragEnabled = false

  useDisableBodyScroll(isExpanded)

  const handleCallback = ({ action }) => {
    if (action === 'EXPAND') {
      actions.setExpanded(!isExpanded)
    }
  }

  const componentId = getComponentId(title)

  // useEffect(() => {
  //   const measureParentWidth = () => {
  //     if (resizableRef.current) {
  //       const parentWidth = resizableRef.current.getBoundingClientRect().width
  //       const paddingLeftRight = 32
  //       const widthBar = 80
  //       const sideBarWidth = 559
  //       actions.setSectionWidth(parentWidth)
  //       setHasMeasured(true)
  //     }
  //   }

  //   // Use requestAnimationFrame to wait until the next frame after paint.
  //   const animationFrameId = requestAnimationFrame(measureParentWidth)

  //   return () => cancelAnimationFrame(animationFrameId)
  // }, [resizableRef, actions])

  return (
    <SectionContainer
      priority={priority}
      ref={resizableRef}
      className={getClassName(isExpanded, title)}
      id={componentId}
      mt={mt}
      mb={mb}
      bgColor={bgColor}
      $width={width}
      extend={extend}
      isExpanded={isExpanded}
      data-width={currentWidth ?? width}
      tabIndex={0}
      {...(enableMaxWidth && { maxWidth: maxWidth })}
      {...props}
    >
      {/* Optionally, show a dragger if conditions apply */}
      {!isExpanded && isDragEnabled && (
        <Dragger className="Dragger" onMouseDown={startResizing}>
          <Icon name="DETAILS" rotate={270} size={20} />
        </Dragger>
      )}

      <SectionControl>
        <FileLocation
          id="file-section"
          title={title}
          path={path}
          enableExpand={enableExpand}
          isExpanded={isExpanded}
          callback={handleCallback}
        />

        <>
          {children}
          {enableCodeView && (
            <SectionContent mt={16}>
              <StateView
                state={{
                  currentWidth: currentWidth,
                  isExpanded: isExpanded,
                }}
              />
            </SectionContent>
          )}
        </>
      </SectionControl>
      {!isExpanded && <SectionFooter className="SectionFooter" />}
    </SectionContainer>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  portalId: PropTypes.string,
  path: PropTypes.string,
  id: PropTypes.string,
  config: PropTypes.shape({
    priority: PropTypes.string,
    bgColor: PropTypes.string,
  }),
}

export default Section
