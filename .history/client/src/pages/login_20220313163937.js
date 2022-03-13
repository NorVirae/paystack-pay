


const Login = () =>  {
    return <div className="login"> 
            <p className="login__page-header">
               <center> <h3>Login</h3></center>
                <h6>User Name: admin</h6>
                <h6>Password: vyrae</h6>

            </p>
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