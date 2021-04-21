import React, { Fragment} from "react"
import ReactDOM from "react-dom"
import "./index.css"

const App = () => {
    return <div className="App">
        Hello World
        Sla
        </div>
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)