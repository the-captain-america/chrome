const loadState = (name = 'state') => {
  try {
    const savedState = localStorage.getItem(name)
    if (savedState === null) {
      return undefined
    }

    return JSON.parse(savedState)
  } catch (err) {
    return undefined
  }
}

const saveState = (state, name = 'state') => {
  try {
    const workingState = JSON.stringify(state)

    localStorage.setItem(name, workingState)
  } catch (err) {
    console.warn(err)
  }
}

const clearState = (name) => {
  if (!name || !name.length) {
    console.warn('No name was provided in order to clear.')
  }
  try {
    localStorage.removeItem(name)
  } catch (err) {
    console.warn(err)
  }
}

export { loadState, saveState, clearState }
