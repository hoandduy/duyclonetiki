import { TURN_ON } from "./modalTypes"

export const turnOn = payload => {
  return {
    type: TURN_ON,
    payload
  }
}