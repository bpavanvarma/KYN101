import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header'
import { Switch, Route } from "react-router-dom";
import socketIOClient from "socket.io-client";


function App() {

  var sockettest = socketIOClient();;

  return (
    <div className="App">
<Header  socket={sockettest} />
{/* <Switch>
          <Route exact path="/" component={} />
        </Switch> */}
    </div>
  );
}

export default App;
