import axios from "axios";
import {getAccessToken} from "./Token";
import {GET_ALL_ANNOUNCEMENT, GET_ALL_USER} from "./ApiUrl";

const authOptions = {
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









