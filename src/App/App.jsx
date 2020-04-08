import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

import { history } from '@/_helpers';
import { authenticationService } from '@/_services';
import { userService } from '@/_services';
import { PrivateRoute } from '@/_components';
import { HomePage } from '@/HomePage';
import { LoginPage } from '@/LoginPage';
import { UserInformationPage }  from '@/UserInformationPage';
import { CreateMissionPage } from '@/CreateMissionPage';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { Tooltip } from '@material-ui/core';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({ currentUser: x }));
    }

    logout() {
        authenticationService.logout();
        userService.logout();
        history.push('/login');
    }
    getUserInformation(){
        history.push('/userInformation');
    }

    render() {
        const { currentUser } = this.state;
        return (
            <Router history={history}>
                <div>
                    {currentUser &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Tooltip title="User Information">
                                    <PersonPinIcon style={{color: "white", cursor: 'pointer'}} 
                                    fontSize="large" 
                                    onClick={this.getUserInformation}/>
                                </Tooltip>
                                <Link to="/createMission" className="nav-item nav-link">Mission</Link>
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            </div>
                        </nav>
                    }
                    <div className="jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <Route path="/login" component={LoginPage} />
                                    <Route path="/userInformation" component={UserInformationPage} />
                                    <Route path="/createMission" component={CreateMissionPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export { App }; 