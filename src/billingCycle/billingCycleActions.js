import axios from 'axios'
const BASE_URL = 'changelog.insomnia.rest/changelog.json'

export function getList() {
    const request = axios.get(`${BASE_URL}`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}
