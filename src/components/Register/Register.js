const Register = ({ onRouteChange }) => {
    return (
        <article className="br3 shadow-5 ba dark-gray b--black-10 mv3 w-100 w-50-m w-25-l mw5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlfor="name">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100" type="text" name="name" id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f5" htmlfor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100" type="email" name="email-address" id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f5" htmlfor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={() => onRouteChange('home')}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent hover-bg-white hover-black grow pointer f5 dib w-100"
                            type="submit"
                            value="Register"
                        />
                    </div>
                </div>
            </main>
        </article>
    )
}

export default Register;