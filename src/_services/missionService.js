import { BehaviorSubject } from 'rxjs';

import config from 'config';
import { authHeader, handleResponse } from '@/_helpers';

export const missionService = {
    createMission
};

function createMission(mission) {
    const requestOptions = { 
        method: 'POST', 
        headers: authHeader(),
        body: JSON.stringify(mission)
    };
    
    return fetch(`${config.apiUrl}/mission`, requestOptions).then(handleResponse)
    .then(creatingRespnse => {
        return creatingRespnse;
    });
}