import axios from 'axios'
const BASE_URL = 'https://my-json-server.typicode.com/pedroxavier64/json/summary'

export function getSummary() {
    const request = axios.get(`${BASE_URL}`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}