

function Login() {
    return (
      <div>
          <form action="/">
                <div>
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username"></input>
                </div>
                <div>
                    <label for="password"> Password</label>
                    <input type="password" id="password" name="password"></input>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <div>
                    <button type="reset">Reset</button>
                </div>
          </form>
      </div>
    );
  }
  
  export default Login;