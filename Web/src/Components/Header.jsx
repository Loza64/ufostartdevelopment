import PropTypes from 'prop-types'
import { FaChevronDown } from "react-icons/fa";

Header.propTypes = {
  Title: PropTypes.string
}

export default function Header({ Title }) {

  const scrollBottom = () => {
    window.scrollTo({
      top: 640,
      behavior: "smooth"
    })
  }

  return (
    <>
    <br />
      <header className='header-light'>
        <h1>{Title}</h1>
        <FaChevronDown onClick={scrollBottom} className="btn-scroll" />
      </header>
    </>
  )
}