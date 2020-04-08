import React from 'react';

import { userService } from '@/_services';

class HomePage extends React.Component {
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
                        <h1>Hi {userInformation.firstName}!</h1>
                        <p>You're logged in with React & JWT!!</p>
                    </div>
                }
            </div>
        )
    }
}

export { HomePage };