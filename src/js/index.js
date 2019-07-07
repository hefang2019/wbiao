import {
    httpRequest
} from '../utils/httpRequest'
import {
    requestUrl
} from '../utils/requesturl'

httpRequest(requestUrl.vi, (data) => {
    console.log(data);
});