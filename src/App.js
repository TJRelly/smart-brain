import React, { Component } from "react"
import "./App.css"
import Navigation from "./components/Navigation/Navigation"
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm"
import Rank from "./components/Rank/Rank"
import FaceRecognition from "./components/FaceRecognition/FaceRecognition"
import ParticlesBg from "particles-bg"
import SignIn from "./components/SignIn/SignIn"
import Register from "./components/Register/Register"

const initialState = {
  input: "",
  imageUrl: "",
  boxes: [],
  route: "signin",
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    })
  }

  componentDidMount() {
    fetch("https://real-pink-tuna-hem.cyclic.cloud").then((response) =>
      response.json()
    )
  }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState)
    } else if (route === "home") {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  calculateFaceLocation = (data) => {
    const image = document.getElementById("inputimage")
    const width = Number(image.width)
    const height = Number(image.height)
    return JSON.parse(data, null, 2).outputs[0].data.regions.map((face) => {
      const clarifaiFace = face.region_info.bounding_box
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - clarifaiFace.right_col * width,
        bottomRow: height - clarifaiFace.bottom_row * height,
      }
    })
  }

  displayFaceBox = (boxes) => {
    this.setState({ boxes: boxes })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input })

    const returnClarifaiRequestOptions = (imageUrl) => {
      const raw = JSON.stringify({
        user_app_id: {
          user_id: "clarifai",
          app_id: "main",
        },
        inputs: [
          {
            data: {
              image: {
                url: imageUrl,
              },
            },
          },
        ],
      })
  
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Key dc909b76df6646348782f475407e883b",
        },
        body: raw,
      }

      return requestOptions
    }

    fetch(
      `https://api.clarifai.com/v2/models/face-detection/outputs`,
      returnClarifaiRequestOptions(this.state.input)
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result)
        this.displayFaceBox(this.calculateFaceLocation(result))
        if (result) {
          fetch("https://real-pink-tuna-hem.cyclic.cloud/image", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id,
            }),
          })
            .then((result) => result.json())
            .then((count) => {
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
        }
      })
      .catch((error) => console.log("error", error))
  }

  render() {
    const { isSignedIn, imageUrl, route, boxes } = this.state
    return (
      <div className="App">
        <ParticlesBg color="#FFFFFF" num={100} type="cobweb" bg={true} />
        <Navigation
          isSignedIn={isSignedIn}
          onRouteChange={this.onRouteChange}
        />
        {route === "home" ? (
          <>
            <Logo />
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            />
            <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
          </>
        ) : route !== "register" ? (
          <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    )
  }
}

export default App
