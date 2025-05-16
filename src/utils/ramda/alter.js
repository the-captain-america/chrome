import {
  curry,
  propEq,
  map,
  assoc,
  when,
  lensPath,
  findIndex,
  prop,
} from 'ramda'

// 'active' is the property in which that will be replaced by whatever the state is set to.
const alter = curry((value, property, items) =>
  map(when(propEq('id', property), assoc('active', value)), items),
)

/** Set Value by Index
 * Returns an array
 *
 * @param id The id to lookup within the provided list (partial application)
 * @param label The value in which to set the label property
 * @returns {array} The result
 */

const setValueByIndex = (id, label) => (list) =>
  set(lensPath([findIndex(prop('id', id), list), 'label']), label)(list)

export { alter, setValueByIndex }
