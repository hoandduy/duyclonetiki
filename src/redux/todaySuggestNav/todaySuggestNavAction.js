import { CHANGE_OPTION } from "./todaySuggestNavTypes"

export const changeOption = payload => (
  {
    type: CHANGE_OPTION,
    payload
  }
)