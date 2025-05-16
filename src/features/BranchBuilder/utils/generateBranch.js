/**
 * @param {string} changeType  e.g. "feat", "fix", "docs"
 * @returns {Function}         next step: team ⇒ project ⇒ jiraId ⇒ description ⇒ branchName
 */
const generateBranch = (changeType) => (team) => (project) => (jiraId) => (description) => {
  const clean = (str = '') => str.replaceAll(',', ' ').replace(/\s+/g, '-').replaceAll('/', '-').toLowerCase()

  // build the JIRA–desc part only if both exist
  const ticketSegment = jiraId && description ? `/${jiraId}-${clean(description)}` : ''

  // join everything with slashes
  return (
    [changeType, team, project]
      .filter(Boolean) // drop any empty parts
      .join('/') + ticketSegment
  )
}

export { generateBranch }
