import PropTypes from 'prop-types';

export const NavItem = ({text, href}) => {
  return (
    <li>
      <a href={href} className="duration-300 font-medium ease-linear hover:text-primary py-3">
        {text}
      </a>
    </li>
  )
}


NavItem.PropTypes = {
  href: PropTypes.string,
  text: PropTypes.string
}
