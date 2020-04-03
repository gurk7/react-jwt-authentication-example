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
                        <h1>{userInformation.firstName}!</h1>
                        <h1>{userInformation.lastName}</h1>
                    </div>
                }
            </div>
        );
    }
}

export { UserInformationPage };