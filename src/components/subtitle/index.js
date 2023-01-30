import './style.css'
import PropTypes from 'prop-types'

export function Subtitle({text}){
    return(
        <div className='title-container'>
            <h2 style={{color: 'rgb(57,255,20)'}}>{text}</h2>
        </div>
    )
}

Subtitle.propTypes = {
    text: PropTypes.string
}

Subtitle.defaultProps = {
    text: 'Usuário'
}