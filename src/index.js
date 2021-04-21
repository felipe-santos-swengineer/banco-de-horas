import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './components/button_upload'
import UploadButtons from './components/button_upload';
import 'bootstrap/dist/css/bootstrap.min.css';


function primeiroJSX(){
  return "Upload de HC";
}

/*
const App = () => {

  const name = "Felipe Santos"

  return <div className="App">
      {name}
      </div>
}
*/

ReactDOM.render(
  <React.StrictMode>
    {<App />}
    {/*primeiroJSX()*/}
    {/*UploadButtons*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
