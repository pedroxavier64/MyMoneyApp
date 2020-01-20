import axios from 'axios'
const BASE_URL = 'https://my-json-server.typicode.com/pedroxavier64/json'

export function getSummary() {
    const request = axios.get(`${BASE_URL}/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}