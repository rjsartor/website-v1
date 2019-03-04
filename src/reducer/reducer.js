import { SHOW_NORTHEASTERN_INFO, SHOW_THINKFUL_INFO, SHOW_LEWAGON_INFO } from "../actions/experience";

const initialState = {
  showNortheastern: false,
  showThinkful: false,
  showLewagon: false,
}

const portfolioReducer = (state=initialState, action) => {
  if (action.type === SHOW_NORTHEASTERN_INFO) {
    return Object.assign({}, state, {
      showNortheastern: !state.showNortheastern,
    })
  } else if (action.type === SHOW_THINKFUL_INFO) {
    return Object.assign({}, state, {
      showThinkful: !state.showThinkful,
    })
  } else if (action.type === SHOW_LEWAGON_INFO) {
    return Object.assign({}, state, {
      showLewagon: !state.showLewagon,
    })
  }
  return state
}

export default portfolioReducer;