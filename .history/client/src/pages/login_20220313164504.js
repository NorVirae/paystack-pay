import { useState } from "react";



const Login = () =>  {
    const [forcus, setFocus] = useState({
        username:false,
        password:false
    })

    const [values, setValues] = useState({
        username:null,
        password:null
    })
    return <div className="login"> 
            <p className="login__page-header">
               <center> <h3>Login</h3></center>
                <h6>User Name: admin</h6>
                <h6>Password: vyrae</h6>

            </p>
            <form className="login__form">
                <fieldset className="form-group">
                    <input value={values.username} onFocus={e=>setFocus({...forcus,user:true })} className="form-control" />
                    <span className="form-placeholder">User Name</span>

                </fieldset>

                <fieldset className="form-group">
                    <input value={values.password} className="form-control" />
                    <span className="form-placeholder">Password</span>
                </fieldset>

                <fieldset className="form-group">
                    <button className="product__detail--button" > Login </button>
                </fieldset>
            </form>
    </div>
}

export default Login;