import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd, showAdd}) => {
   const handleClick = ()=>{ console.log('clicked')}
   return (
      <>
      <header className='header'>
         <h1>{title}</h1>
         <Button text={showAdd ? 'Close':'Add'} color='#ff144f' onClick={onAdd}/>
      </header>
      </>
   )
}

Header.defaultProps ={
   title: 'Task Tracker'
}

Header.propTypes ={
   title: PropTypes.string.isRequired
}

export default Header
