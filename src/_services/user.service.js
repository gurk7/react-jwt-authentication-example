import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const userService = {
    getUserInformation
};

function getUserInformation() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/user/information`, requestOptions).then(handleResponse);
}