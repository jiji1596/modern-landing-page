import PropTypes from 'prop-types';

export const Button = ({children, onClick, className = ""}) => {
  return (
    <button onClick={onClick} className={`px-6 py-3 outline-none rounded-full relative cursor-pointer overflow-hidden border-transparent bg-violet-600 ${className}`} >
      {children}
    </button>
  )
}


Button.PropTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.function
}
