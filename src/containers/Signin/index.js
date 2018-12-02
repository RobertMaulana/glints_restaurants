import React from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {Form, Button, Input} from 'antd'
import {SigninContainer} from './signin.style'
import AuthActions from '../../redux/auth/actions'

const FormItem = Form.Item

const {signIn, checkAuthorization} = AuthActions

class Signin extends React.Component {
    state = {
        redirectToReferrer: false
    }
    componentWillReceiveProps(nextProps) {
        const { isLoggedIn } = nextProps
        if (isLoggedIn === true) {
            this.setState({ redirectToReferrer: true })
        }
    }
    componentWillMount() {
        this.props.checkAuthorization()
    }
    async validateForm () {
        return new Promise((resolve) => {
            this.props.form.validateFields((error, values) => {
                resolve(!error)
            })
        })
    }
    handleSubmit = async e => {
        e.preventDefault()
        const valid = await this.validateForm()
        if (!valid) {
            return
        }
        const {form} = this.props
        const payload = form.getFieldsValue()
        this.props.signIn(payload)
    }
    signup = () => {
        window.location.href = 'http://localhost:3000/signup'
    }
    render() {
        const { getFieldDecorator } = this.props.form
        const from = { pathname: '/' }
        const { redirectToReferrer } = this.state
        if (redirectToReferrer) {
            return <Redirect to={from} />
        }
        return (
            <SigninContainer>
                <Form 
                    style={{border: '1px solid #ccc'}} 
                    onSubmit={this.handleSubmit}
                    id="myForm"
                >
                    <div className="container">
                        <h1>Sign In</h1><hr />
                        <label htmlFor="email">
                            <b>Email</b>
                        </label>
                        <FormItem>
                            {getFieldDecorator('email', {
                                rules: [{ required: true }]
                            })(
                                <Input 
                                    type="email" 
                                    placeholder="Enter Email" 
                                    name="email" required />
                            )}
                        </FormItem>
                        <label htmlFor="psw">
                            <b>Password</b>
                        </label>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true }]
                            })(
                                <Input 
                                    type="password" 
                                    placeholder="Enter Password" 
                                    name="psw" required />
                            )}
                        </FormItem>
                        <p>Dont have an account yet? <span style={{color: 'dodgerblue', cursor: 'pointer'}} onClick={this.signup}>Signup</span>.</p>
                        <div className="clearfix">
                            <Button 
                                type="submit" 
                                className="signupbtn"
                                htmlType='submit'
                            >Sign in</Button>
                        </div>
                    </div>
                </Form>
            </SigninContainer>
        )
    }
}

const WrappedSignin = Form.create()(Signin)
export default connect(
    state => ({
        isLoggedIn: state.Auth.idToken !== null,
        auth: state.Auth
    }),
    {signIn, checkAuthorization}
)(WrappedSignin)
