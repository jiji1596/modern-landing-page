import PropTypes from 'prop-types';

export const Paragraph = ({children, className}) => {
  return (
    <p className={`text-heading-3 md:tex-lg ${className}`}>{children}</p>
  )
}


Paragraph.PropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
