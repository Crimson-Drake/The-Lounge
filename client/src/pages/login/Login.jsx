import './login.css';

export default function Login() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">The Lounge</h3>
                    <span className="loginDesc">
                        Bringing people together on a single platform.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Login</button>
                        <span className="loginForgot">Forgot your password</span>
                        <button className="loginRegisterButton">
                            Create a new account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
