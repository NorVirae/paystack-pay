


const Login = () =>  {
    return <div className="login"> 
            <p c>Login</p>
            <form className="login__form">
                <fieldset className="form-group">
                    <input className="form-control" />
                    <span className="form-placeholder">User Name</span>

                </fieldset>

                <fieldset className="form-group">
                    <input  className="form-control" />
                    <span className="form-placeholder">Password</span>
                </fieldset>

                <fieldset className="form-group">
                    <button className="product__detail--button" > Login </button>
                </fieldset>
            </form>
    </div>
}

export default Login;