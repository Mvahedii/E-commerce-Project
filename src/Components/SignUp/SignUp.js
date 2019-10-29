import React from 'react'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { auth, createUserProfileDocument } from '../../Firebase/Firebase'

import './SIgnUp.scss'

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign__up'>
                <h2 className='title'>I don't have any account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={displayName}
                        onChange={this.handleChange}
                        label='name' />
                    <FormInput
                        name='email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        label='E-mail' />
                    <FormInput
                        name='password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password' />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password' />
                    <CustomButton
                        type='submit'>
                        SIGNUP
                        </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;