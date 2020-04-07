import React from 'react';

import { userService, authenticationService } from '@/_services';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInformation: null
        };

        if(this.userInformation == null)
        {
            userService.getUserInformation().then(userInformation => this.setState({ userInformation: userInformation }));
        }
        else
        {
            this.setState({userInformation: this.userInformation});
        }
    }

    componentDidMount() {
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