import { Component } from "react"
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
    state = {
      change: false
    }
  
    onToggle = () => {
      this.setState(prevState => ({change: !prevState.change}))
    }
  
    render(){
      const {change} = this.state
      const changeColor = change ? 'dark' : 'project'
      return(
            <div className = {changeColor}> {/* navbar */}
      <nav className="navbar">
        <div className="logo-section">
        <h1 className="logo">CSP</h1>
        </div>
        <p className="title-logo">B-12</p>
        <div className="navbar-contents">
          <Link to = "/home" className="nav-link">Home</Link>
          <Link to = "/project" className="nav-link">Project</Link>
          <Link to = "/about-us" className="nav-link">About Us</Link>
          <div className="dark-mode">
            <div onClick={this.onToggle}>
              <img src = "https://andrewchallis.co.uk/img/night-mode.png" alt = "moon" className="dark-mode"/>
            </div>
          </div>
        </div>
      </nav>
      <div className="main-theme-container">
        <h1 className="main-theme-title">A Tree Plantation Initiative</h1><br/>
        <p className="main-theme-caption">Planting the seeds of a greener future with empowering communities through tree plantation</p><br/>
        <div className="buttons-container">
          <div className="button-container">
            <button class="btn btn-two">
              <span>Learn more</span>
            </button>
                <span><a href = "https://en.wikipedia.org/wiki/Tree_plantation" className="wiki-link"><button className="btn btn-one">Visit Wikipedia</button></a></span>
              
          </div>
        </div>
      </div>
    </div>
      )
    }
  }

  export default Header