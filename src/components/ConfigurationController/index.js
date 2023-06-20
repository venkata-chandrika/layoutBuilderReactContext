// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContentCheckbox = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeLeftNavCheckbox = event => {
        onToggleShowLeftNavbar(event.target.value)
        console.log(event.target.value)
      }

      const onChangeRightNavCheckbox = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="container">
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="content"
              onChange={onChangeContentCheckbox}
              checked={showContent}
            />
            <label htmlFor="content">Content</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="leftNav"
              onChange={onChangeLeftNavCheckbox}
              checked={showLeftNavbar}
            />
            <label htmlFor="leftNav">Left Navbar</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="rightNav"
              onChange={onChangeRightNavCheckbox}
              checked={showRightNavbar}
            />
            <label htmlFor="rightNav">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
