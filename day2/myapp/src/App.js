import'./assets/cssfiles/home.css'
function App(){
    return(
        
        <div className="container shadow">
            <h1>Register</h1>
            <form>
            <input type="text" name="" id="uname" placeholder="username" className="sam"/>
            <input type="email" name="" id="email" placeholder="email"  className="sam"/>
            <input type="password" name="" id="pass"  placeholder="password" className="sam"/>
            <input type="submit" value="submit" className="saam"/>
            <a href="/index.html">register</a>
        </form>
        </div>
    )
}
export default App