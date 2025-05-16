const projectOptions = [
  { id: 'ee', value: 'ee', label: 'Emergency Expense', active: false, index: 1 },
  { id: 'sn', value: 'sn', label: 'Specific Needs', active: false, index: 2 },
  { id: 'crbd', value: 'crbd', label: 'Customer Recovery Bank Details', active: false, index: 3 },
  { id: 'ccf', value: 'ccf', label: 'Customer Care Forms', active: false, index: 4 },
  { id: 'vivr', value: 'vivr', label: 'IVR Widget', active: false, index: 5 },
  { id: 'gw', value: 'gw', label: 'Guided Workflows', active: false, index: 6 },
]

const teamOptions = [
  {
    id: 'dcc',
    value: 'dcc',
    label: 'Digital Customer Connections (dcc)',
    active: false,
    index: 0,
  },
]

const changeTypeOptions = [
  {
    id: 'feat',
    value: 'feat',
    label: 'Feature (feat)',
    active: false,
    index: 0,
  },
  { id: 'fix', value: 'fix', label: 'Fix (fix)', active: false, index: 1 },
  { id: 'docs', value: 'docs', label: 'Docs (docs)', active: false, index: 2 },
  {
    id: 'chore',
    value: 'chore',
    label: 'Chore (chore)',
    active: false,
    index: 3,
  },
  {
    id: 'refactor',
    value: 'refactor',
    label: 'Refactor (refactor)',
    active: false,
    index: 4,
  },
  { id: 'test', value: 'test', label: 'Test (test)', active: false, index: 5 },
  { id: 'ci', value: 'ci', label: 'CI (ci)', active: false, index: 6 },
  { id: 'perf', value: 'perf', label: 'Perf (perf)', active: false, index: 7 },
]

export { projectOptions, teamOptions, changeTypeOptions }
