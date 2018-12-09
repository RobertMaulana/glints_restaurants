import React from 'react'
import {SignupContainer} from './signup.style'

class Signup extends React.Component {
    signin = () => {
        window.location.href = `${process.env.REACT_APP_API_ENDPOINT}/signin`
    }
    render() {
        return (
            <SignupContainer>
                <form action="" style={{border: '1px solid #ccc'}}>
                    <div className="container">
                        <h1>Sign Up</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr />
                        <label htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input type="text" placeholder="Enter Email" name="email" required />
                        <label htmlFor="psw">
                            <b>Password</b>
                        </label>
                        <input type="password" placeholder="Enter Password" name="psw" required />
                        <label htmlFor="psw-repeat">
                            <b>Repeat Password</b>
                        </label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                        <label>
                            <input type="checkbox" defaultChecked="checked" name="remember" style={{marginBottom: 15}} /> Remember me
                        </label>
                        <p>Already have an account? <span style={{color: 'dodgerblue', cursor: 'pointer'}} onClick={this.signin}>Signin</span>.</p>
                        <div className="clearfix">
                            <button type="submit" className="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </SignupContainer>
        )
    }
}

export default Signup