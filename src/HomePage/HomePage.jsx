import React from 'react';

import { userService, authenticationService } from '@/_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            userInformation: null
        };
    }

    componentDidMount() {
        userService.getUserInformation().then(userInformation => this.setState({ userInformation: userInformation }));
    }

    render() {
        const { userInformation } = this.state;
        return (
            (userInformation &&
            <div>
                <h1>Hi {userInformation.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
            </div>)
        );
    }
}

export { HomePage };