import React from 'react';

import { userService } from '@/_services';

class UserInformationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInformation: null
        };
    }

    componentDidMount() {
        this.userInformation = userService.currentUserInformationValue;
        this.setState({userInformation: this.userInformation});
    }

    render() {
        const { userInformation } = this.state;
        return (
            <div>
                {userInformation &&               
                    <div>
                        <h1>view your user information</h1>
                        <p></p>
                        <p>First Name: {userInformation.firstName}</p>
                        <p>Last Name: {userInformation.lastName}</p>
                        <p>email: {userInformation.email}</p>
                        <p>groups: {userInformation.groups}</p>
                    </div>
                }
            </div>
        );
    }
}

export { UserInformationPage };