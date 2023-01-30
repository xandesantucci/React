import './style.css'
import PropTypes from 'prop-types'

export function Title({text}){
    const Uptext = text.toUpperCase()
    return(
        <div className='title-container'>
            <h2>{Uptext}</h2>
        </div>
    )
}

Title.propTypes = {
    text: PropTypes.string
}