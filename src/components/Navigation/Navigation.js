const Navigation = ({ onRouteChange, isSignedIn }) => {

    if (isSignedIn) {
        return (
            <nav id='navigation' className='bg-white border-b-2 border-blue-400' style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signout')} className="f5 link dim blue underline pa3 pointer">Log Out</p>
            </nav>
        )
    } else {
        return (
            <nav id='navigation' className='bg-white border-b-2 border-blue-400' style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signin')} className="f5 link dim blue underline pa3 pointer">Log In</p>
                <p onClick={() => onRouteChange('register')} className="f5 link dim blue underline pa3 pointer">Create Account</p>
            </nav>
        )
    }
}

export default Navigation;