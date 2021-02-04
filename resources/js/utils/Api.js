import axios from "axios";
import {getAccessToken} from "./Token";
import {GET_ALL_ANNOUNCEMENT, GET_ALL_USER, GET_ANNOUNCEMENT_BY_USER, UPDATE_DISPLAY} from "./ApiUrl";

export const authOptions = {
    headers: {
        'Authorization': `Bearer ${getAccessToken}`
    }
}

export function getAllAnnouncement () {
    return axios.get(GET_ALL_ANNOUNCEMENT, authOptions)
}

export function getAllUser(){
    return axios.get(GET_ALL_USER, authOptions)
}










