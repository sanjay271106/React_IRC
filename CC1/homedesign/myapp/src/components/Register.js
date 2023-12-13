import { FaFacebook, FaGooglePlus, FaGooglePlusG, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const Register =()=> {
   
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    // signUpButton.addEventListener('click', () => {
    //     container.classList.add("right-panel-active");
    // });
    
    // signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");
    // });

    return(
        <>
        
        <div className="body">
        {/* <h2>Weekly Coding Challenge #1: Sign in/up Form</h2> */}
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><FaInstagram/></a>
                        <a href="#" class="social"><FaTwitter/></a>
                        <a href="#" class="social"><FaLinkedin/></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                   
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><FaGooglePlusG/></a>
                        <a href="#" class="social"><FaFacebook/></a>
                        <a href="#" class="social"><FaLinkedin/></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text"  placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Again! </h1>
                        <p>Connect with us !</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Let's Join</p>
                        <button class="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        
        </div>
        </>
    )
}

export default Register;