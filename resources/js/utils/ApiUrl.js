export const BASE_URL = 'http://localhost:8000/api'

export const GET_ALL_ANNOUNCEMENT = BASE_URL + "/announcement"
export const GET_ALL_USER = BASE_URL + "/auth/user-all"
export const CREATE_ANNOUNCEMENT = BASE_URL + "/announcement/create"
export const LOGIN = BASE_URL + "/auth/login"
export const REGISTER = BASE_URL + "/auth/signup"

//get url with id
export const DELETE_ANNOUNCEMENT = (id) => {
    return BASE_URL + "/announcement/delete/" + id
}

export const UPDATE_DISPLAY = (id) => {
    return BASE_URL + "/display/edit/" + id
}

export const GET_ID_ANNOUNCEMENT = (id) => {
    return BASE_URL + "/announcement/" + id
}

export const GET_ANNOUNCEMENT_BY_USER = (getUserId) => {
    return BASE_URL + "/announcement/get-by-user/" + getUserId
}



