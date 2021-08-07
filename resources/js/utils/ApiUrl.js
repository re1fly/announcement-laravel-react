export const BASE_URL = 'http://localhost:8000/api'

export const GET_ALL_ANNOUNCEMENT = BASE_URL + "/announcement"
export const GET_ALL_USER = BASE_URL + "/auth/user-all"
export const CREATE_ANNOUNCEMENT = BASE_URL + "/announcement/create"
export const LOGIN = BASE_URL + "/auth/login"
export const REGISTER = BASE_URL + "/auth/signup"
export const GET_USER_LOGIN = BASE_URL + "/auth/user"
export const LOGOUT = BASE_URL + "/auth/logout"

export const DELETE_ANNOUNCEMENT = (id) => {
    return BASE_URL + "/announcement/delete/" + id;
}
export const UPDATE_DISPLAY = (id) => {
    return BASE_URL + "/display/edit/" + id;
}
export const ADD_DISPLAY_ANNOUNCEMENT = (id) => {
    return BASE_URL + "/display/add-display-announcement/" + id;
}
export const REMOVE_DISPLAY_ANNOUNCEMENT = (id) => {
    return BASE_URL + "/display/multiple-delete/" + id;
}
export const GET_ID_ANNOUNCEMENT = (id) => {
    return BASE_URL + "/announcement/" + id;
}
export const GET_ANNOUNCEMENT_BY_USER = (getUserId) => {
    return BASE_URL + "/announcement/get-by-user/" + getUserId;
}
export const UPDATE_ANNOUNCEMENT = (id) => {
    return BASE_URL + "/announcement/edit/" + id;
}
export const UPDATE_IS_ACTIVE = (id) => {
    return BASE_URL + "/update-user/" + id;
}
export const UPDATE_DELAY = (id) => {
    return BASE_URL + "/update-delay/" + id;
}

