


const Login = () =>  {
    return <div className="login"> 
            <form className="login__form">
                <fieldset className="form-group">
                    <input placeholder={"User Name"} className="form-control" />
                </fieldset>

                <fieldset className="form-group">
                    <input placeholder={"Password"} className="form-control" />
                    <span className=""
                </fieldset>

                <fieldset className="form-group">
                    <button className="product__detail--button" > Login </button>
                </fieldset>
            </form>
    </div>
}

export default Login;