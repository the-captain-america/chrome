const deactivateAllObjects = (arr) =>
  arr.map((obj) => ({
    ...obj,
    active: false,
  }))

export { deactivateAllObjects }
