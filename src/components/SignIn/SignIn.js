import React from 'react';
import './Siginin.css'
import LoadingScreen from 'react-loading-screen'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            loading: false
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value.toLowerCase() })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        this.setState({ loading: true })
        fetch('https://smart-brain-api-z87p.onrender.com/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                }
                this.setState({ loading: false })
            })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.onSubmitSignIn()
    };

    render() {
        const { onRouteChange } = this.props
        return (
            <LoadingScreen
                loading={this.state.loading}
                bgColor='transparent'
                spinnerColor='#ffffff'
                textColor='#ffffff'
                logoSrc=''
                text='Loading your content...'
            >
                <form onSubmit={this.onFormSubmit} id='signin-form' className="bg-grey-lighter flex flex-col sm:w-full h-auto m-auto">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="px-6 py-8 rounded shadow-xl text-black w-full">
                            <h1 className="text-white mb-0 text-3xl text-center"> - Smart Brain - </h1>
                            <h1 className="text-white mb-8 mt-0 text-2xl text-center">Face-Recognition App</h1>
                            <input
                                onChange={this.onEmailChange}
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email" />

                            <input
                                onChange={this.onPasswordChange}
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password" />

                            <button
                                id='submit-form'
                                type="submit"
                                className="white w-full text-center py-3 rounded bg-blue-600 text-gray-800 hover:text-white focus:text-white hover:bg-green-dark focus:outline-none my-1"
                            >{this.state.loading ? <>Logging in . . .</> : <>Log in</>}
                            </button>
                            <p className='development'>- Guest Log in -</p>
                            <p className='development'>email: guest@gmail.com &nbsp;&nbsp; Password: 123</p>
                        </div>

                        <div className="text-grey-dark mt-6 bg-white px-2 py-5 rounded-lg shadow-md text-black w-full">
                            Don't have an account?
                            <button
                                className="text-lg no-underline border-b text-blue-700 transition duration-200 hover:border-blue-700 text-blue ml-2"
                                href="../login/"
                                onClick={() => onRouteChange('register')}>
                                Create one!
                            </button>
                        </div>
                    </div>
                </form >
            </LoadingScreen>
        )
    }
}

export default SignIn;