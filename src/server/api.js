import {
    requestPostTest
} from './common'
export function postRequest(url, data) {
    return new Promise((resolve, reject) => {
        requestPostTest(url, data).then(res => resolve(res)).catch(error => reject(error))
    })
}