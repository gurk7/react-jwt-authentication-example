import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { authenticationService, missionService } from '@/_services';

class CreateMissionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            response: null
        };
    }

    componentDidMount() {
        this.currentUser = authenticationService.currentUserValue;
        this.setState({currentUser: this.currentUser});
    }

    handleResponse(response)
    {
        this.setState({response: response});
    }

    render() {
        const { currentUser, response } = this.state;
        return (
            <div>
                <h1>Create a Mission!</h1>
                {currentUser &&               
                    <Formik
                        initialValues={{
                            missionName: '',
                            priority: ''
                        }}
                        validationSchema={Yup.object().shape({
                            missionName: Yup.string().required('missionName is required'),
                            priority: Yup.string().required('priority is required')
                        })}
                        onSubmit={({ missionName, priority }, { setStatus, setSubmitting }) => {
                            setStatus();
                            missionService.createMission({missionName, priority})
                                .then(
                                    response => {
                                        setSubmitting(false);
                                        this.handleResponse(response);
                                    },
                                    error => {
                                        setSubmitting(false);
                                        setStatus(error);
                                    }
                                );
                        }}
                        render={({ errors, status, touched, isSubmitting }) => (
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="missionName">missionName</label>
                                    <Field name="missionName" type="text" className={'form-control' + (errors.missionName && touched.missionName ? ' is-invalid' : '')} />
                                    <ErrorMessage name="missionName" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="priority">priority</label>
                                    <Field name="priority" type="priority" className={'form-control' + (errors.priority && touched.priority ? ' is-invalid' : '')} />
                                    <ErrorMessage name="priority" component="div" className="invalid-feedback" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>Create</button>
                                    {isSubmitting &&
                                        <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                    }
                                </div>
                                {status &&
                                    <div className={'alert alert-danger'}>{status}</div>
                                }
                            </Form>
                        )}
                    />
                }
                {response && 
                    <div>
                        <h4>Response</h4>
                        <p>success: {`${response.success}`}</p>
                        <p>message: {response.message}</p>
                    </div>
                }
            </div>
        );
    }
}

export { CreateMissionPage };