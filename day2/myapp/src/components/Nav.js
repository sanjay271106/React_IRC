import'./assets/cssfiles/nav.css'
function Nav(){
    return (
        <div className="navbar">
        <div className="left">
            <h3>navbar</h3>
        </div>
        <div className="right">
            <ul>
                <li><a href="/login.html"> sign in</a></li>
                <li><a href="/index.html"> sign up</a></li>
            </ul>
        </div>
    </div>
    )
}
export default Nav