// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar-container">
              <h1 className="content">Left Navbar Menu</h1>
              <ul className="list-container">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="content">Content</h1>
              <p className="description">Lorem ipsum dolor sit amet,</p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="left-navbar-container">
              <h1 className="content">Right Navbar </h1>
              <p className="bg">Ad 1</p>
              <p className="bg">Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
