import './style.css'
import PropTypes from 'prop-types'

export const Link = ({text, destiny}) => {
    return(
        <a href={destiny} target='_blank' rel="noopener noreferrer">{text}</a>
    )
}

Link.propTypes ={
    text: PropTypes.string,
    destiny: PropTypes.func,
}