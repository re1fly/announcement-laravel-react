import axios from "axios";
import {accessToken} from "./tokens";

const authOptions = {
    headers: {
        'Authorization': `Bearer ${accessToken}`
    }
}

export function getAnnouncementByUserId () {
    return axios.get(GET_ANNOUNCEMENT_BY_USER_ID, authOptions)
}









export const BASE_URL = "http://localhost:8000/api"
export const GET_ANNOUNCEMENT_BY_USER_ID = BASE_URL + "/announcement"
