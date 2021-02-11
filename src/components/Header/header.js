import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

// The Header creates links that can be used to navigate
// between routes.




class Header extends Component {
  constructor() {
    super();
this.state={
    time:""
}
  }

  componentDidMount() {
    this.props.socket.emit("initial_data");

    this.props.socket.on("time",(time) => {
        this.setState({time})
        
        });
  }

  
  render() {
    return (
      <header>
        <nav>
          <ul className="NavClass">
            <li>
              <NavLink exact to="/">
                test link
              </NavLink>
            </li>
            <li>{this.state.time}</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
