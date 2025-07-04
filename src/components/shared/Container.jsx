import PropTypes from 'prop-types';

export const Container = ({children, className}) => {
  return <div className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`}>{children}</div>

}


Container.PropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
