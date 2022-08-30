import logo from "../img/logo_main.png"
import social_icon from "./social";
function Login(isAdmin,title,h1){

    return(
        <div class="d-flex flex-column align-items-center">
            <div className={isAdmin ? 'admin-login top-login' : 'user-login top-login'}>
                <h1>{title}</h1>
            </div>
            <img class="logo-main" src={logo} alt="" />
            <form class="container d-flex flex-column login-form" >
                <h1>{h1}</h1>
                <div class="form-outline mb-4">
                    <input type="text" id="email-input" class="form-control"  placeholder="Username"/>
                </div>

                <div class="form-outline mb-4">
                    <input type="password" id="password-input" class="form-control" placeholder="Password"/>
                </div>

                <button type="button" id="sign-in-button"class="btn btn-primary btn-block mb-4">Sign in</button>
                <div class="col">
                    <a href="#!">Forgot password?</a>
                </div>
                
            </form>
            <div className={isAdmin ? 'admin-login bottom-login d-flex justify-content-between align-items-center' : 'user-login bottom-login d-flex justify-content-between align-items-center'}>
                <div class="left">
                    <span>Find us on {social_icon()} </span>
                </div>
                <div class="right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c1.179 0 2.31-.529 3.136-1.669l1.857 1.218c-1.27 1.811-3.112 2.67-4.993 2.67-3.308 0-6-2.692-6-6s2.691-6 6-6c1.861 0 3.713.844 4.994 2.67l-1.857 1.218c-.832-1.146-1.966-1.669-3.137-1.669-2.084 0-3.781 1.696-3.781 3.781s1.696 3.781 3.781 3.781z"/></svg>
                    <span>2022 Powered by EC01-02 shop</span>
                </div>
            </div>
        </div>
    );
}

export default Login;