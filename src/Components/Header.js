import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAddButton, showAddStat }) => {
  const location = useLocation()

  return (
    <header className='header'>
        <h1 style={color}>{ title }</h1>

        {location.pathname === '/' && (
          <Button 
          color={!showAddStat ? 'green' : 'red'} 
          text={!showAddStat ? 'Add' : 'Close'} 
          onAddButton={ onAddButton } 
          /> 
        )}
    
    </header>
  )
}

const color = {
    color:'gray'
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header