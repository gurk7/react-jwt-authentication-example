import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const currentUserInformationSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('userInformation')));

export const userService = {
    getUserInformation,
    logout,
    get currentUserInformationValue () { return currentUserInformationSubject.value }
};

function getUserInformation() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    
    return fetch(`${config.apiUrl}/user/information`, requestOptions).then(handleResponse)
    .then(userInformation => {
        localStorage.setItem('userInformation', JSON.stringify({userInformation}));
        currentUserInformationSubject.next(userInformation);

        return userInformation;
    });
}

function logout()
{        
    localStorage.removeItem('userInformation');
    currentUserInformationSubject.next(null);
}