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
                        <h4>First Name: {userInformation.firstName}</h4>
                        <h4>Last Name: {userInformation.lastName}</h4>
                        <h4>email: {userInformation.email}</h4>
                        <h4>groups: {userInformation.groups}</h4>
                    </div>
                }
            </div>
        );
    }
}

export { UserInformationPage };