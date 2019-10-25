import React from 'react'

import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton.js'
import './SignIn.scss'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        console.log(name)
        console.log(value)
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign__in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        label='email'
                        required />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='password'
                        required />
                    <CustomButton type='submit'>
                        Submit
                    </CustomButton>
                </form>

            </div>
        )
    }
}

export default SignIn;