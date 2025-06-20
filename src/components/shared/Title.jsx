import PropTypes from 'prop-types';

export const Title = ({children}) => {
  return (
    <h1 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:tex-4xl">{children}</h1>
  )
}

Title.PropTypes = {
  children: PropTypes.node.isRequired
};
