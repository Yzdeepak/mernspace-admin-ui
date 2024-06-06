

const Login = () => {
  return (
   <>
    <h1>Sign in</h1>
    <input type="text"  placeholder="Username"/>
    <input type="Password"  placeholder="Password"/>
    <button>Log in</button>
    <label htmlFor="remember-me">Remember me</label>
    <input type="checkbox" id="remember-me"></input>
    <a href="#">Forgot password</a>


    </>
  )
}

export default Login