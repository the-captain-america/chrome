// pick storage backend: real chrome.storage.local or a localStorage-based shim
const storageBackend = window.chrome?.storage?.local ?? {
  get: (keys) =>
    new Promise((resolve) => {
      const result = Array.isArray(keys)
        ? keys.reduce((o, k) => ({ ...o, [k]: localStorage.getItem(k) }), {})
        : { [keys]: localStorage.getItem(keys) }
      resolve(result)
    }),
  set: (items) =>
    new Promise((resolve) => {
      Object.entries(items).forEach(([k, v]) => {
        localStorage.setItem(k, v)
      })
      resolve()
    }),
}

const loadState = (key) =>
  storageBackend.get(Array.isArray(key) ? key : [key]).then((res) => res[key] ?? null)

const saveState = (key, value) => storageBackend.set({ [key]: value })

export { loadState, saveState }
