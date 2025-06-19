import PropTypes from 'prop-types';

export const BtnLink = ({text, href, className = ""}) => {
  return (
    <a href={href} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 cursor-pointer translate transform duration-300 ${className}`} >
      <span className="relative z-10 text-white">{text}</span>
    </a>
  )
}


BtnLink.PropTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string
}
