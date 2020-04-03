import React from 'react';

import { userService, authenticationService } from '@/_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInformation: null
        };
    }

    componentDidMount() {
        userService.getUserInformation().then(userInformation => this.setState({ userInformation: userInformation }));
    }

    render() {
        const { userInformation } = this.state;
        return (
            <div>
                <div>welcome!</div>
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