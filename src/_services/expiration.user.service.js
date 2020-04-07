
import { authenticationService } from '@/_services';
import jwt from 'jsonwebtoken';

export const expirationUserService = {
    expired: isExpired(authenticationService.currentUserValue)
};

function isExpired(currentUser)
{
    console.log("got here");
    if(currentUser) {
        console.log(currentUser.token);
        var decodedToken=jwt.decode(currentUser.token, {complete: true});
        var dateNow = new Date();
        console.log(decodedToken);
        console.log(decodedToken.payload.exp);
        console.log(dateNow.getTime());
        if(decodedToken && decodedToken.payload.exp < dateNow.getTime()/1000)
        {
            console.log("expired");
            return true;
        }
        console.log("not expired");
        return false;
    }
    return undefined;
}