import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

function Login(props) {

    const [errors, setErrors] = useState({});
    const [values, setValues] = useState({
        username: '',
        password: '',
    })

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, result) {
            props.history.push('/')
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values
    })


    const onSubmit = (e) => {
        e.preventDefault();
        loginUser()
    }

    return (
        <div className="form-container">
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                <h1>Login</h1>
                <Form.Input
                    label="Username"
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange={onChange}
                />
                <Form.Input
                    label="Password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    error={errors.password ? true : false}
                    value={values.password}
                    onChange={onChange}
                />
                <Button type="submit" primary>Login</Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className="list">
                        {Object.values(errors).map(value => (
                            <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

const LOGIN_USER = gql`
    mutation login(
        $username : String!
        $password : String!
    ) {
        login(        
            username :$username
            password: $password         
        ){
            id
            email
            username
            createdAt
            token
        }
    }
`
export default Login;