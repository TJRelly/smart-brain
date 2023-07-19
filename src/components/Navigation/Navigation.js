import brain from "../Logo/brain.png"

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        id="navigation"
        className="flex justify-between bg-white border-b-2 border-blue-400 px-8"
      >
        <section className="flex gap-1 self-center">
          <img src={brain} alt="brain" className="h-14 self-center" />
          <p
            onClick={() => onRouteChange("signout")}
            className="text-2xl link blue py-4 pointer"
          >
            Smart Brain
          </p>
        </section>

        <p
          onClick={() => onRouteChange("signout")}
          className="f5 blue link dim px-6 pointer py-3 rounded self-center"
        >
          Log out
        </p>
      </nav>
    )
  } else {
    return (
      <nav
        id="navigation"
        className="flex justify-between bg-white border-b-2 border-blue-400 px-12"
      >
        <section className="flex gap-1 self-center">
          <img src={brain} alt="brain" className="h-14 self-center" />
          <p
            onClick={() => onRouteChange("signout")}
            className="text-2xl link blue py-4 pointer"
          >
            Smart Brain
          </p>
        </section>

        <section className="flex gap-4 self-center">
          <p
            onClick={() => onRouteChange("signin")}
            className="f5 link dim blue px-2 pointer m-auto"
          >
            Log in
          </p>
          <button
            onClick={() => onRouteChange("register")}
            className="f5 white font-semibold tracking-wide link dim px-6 pointer bg-blue-500 text-white py-3 rounded"
          >
            Sign up
          </button>
        </section>
      </nav>
    )
  }
}

export default Navigation
