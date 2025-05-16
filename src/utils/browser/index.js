// Required by: client/src/utils/browser/index.js
import UAParser from 'ua-parser-js'
import { lensPath, view } from 'ramda'
import { uuid } from '@utils/uuid'

let parser = new UAParser(window.navigator.userAgent)
let parsedUA = parser.getResult()

const getBrowser = () => {
  return parser.getBrowser()
}

const getOS = () => {
  return parser.getOS()
}

const getDevice = () => {
  return {
    ...parser.getDevice(),
    ...generateDeviceId(),
  }
}

const isMobile = () => {
  const deviceData = getDevice()
  const { type: deviceType } = deviceData

  return deviceType.includes(['mobile', 'tablet'])
}

const getDeviceDetail = () => {
  let deviceDetail = null
  const vendor = view(lensPath(['details', 'device', 'vendor']))(parsedUA)
  const model = view(lensPath(['details', 'device', 'model']))(parsedUA)
  let deviceType = view(lensPath(['device', 'type']))(parsedUA)
  deviceType =
    deviceType === 'mobile' || deviceType === 'tablet' ? 'tablet' : 'PC'

  if (vendor) {
    deviceDetail = vendor + '|'
  }

  if (model) {
    deviceDetail += model
  }

  if (!deviceDetail) {
    // no detail device type information in user agent, use the device type metadata
    deviceDetail = deviceType
  }

  return deviceDetail
}

const getParsedUA = () => parsedUA

const generateDeviceId = () => {
  if (window && window.localStorage) {
    const key = 'deviceId'
    let deviceId = window.localStorage.getItem(key)
    if (!deviceId) {
      deviceId = uuid()
      window.localStorage.setItem(key, deviceId)
    }
    return { deviceId }
  }

  // Fallback to new uuid if window or window.localStorage not available
  return { deviceId: uuid() }
}

export { getBrowser, getOS, getDevice, isMobile, getDeviceDetail, getParsedUA }
