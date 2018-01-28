export const GET_USER_INFO_REQUEST = 'userInfo/GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'userInfo/GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAIL = 'userInfo/GET_USER_INFO_FAIL'

function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  }
}

function getUserInfoSuccess(userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo
  }
}

function getUserInfoFail() {
  return {
    type: GET_USER_INFO_FAIL
  }
}

export function getUserInfo() {
  return function(dispatch) {
    dispatch(getUserInfoRequest())

    return fetch('/api/user.json').then(respone => {
      return respone.json()
    }).then(json => {
      dispatch(getUserInfoSuccess(json))
    }).catch(() => {
      dispatch(getUserInfoFail())
    })
  }
}