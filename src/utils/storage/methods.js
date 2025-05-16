import { values } from 'ramda'
import { loadState } from './storage'

const getStorageByName = (name) => {
  const localData = loadState(name)
  const result = !localData || !values(localData).length ? '' : localData.epic
  return result
}

export { getStorageByName }
