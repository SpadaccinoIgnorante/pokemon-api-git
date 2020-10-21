import React from 'react'
import Style from '../Css/ContainerText.css'

function ContainerText(props) {
    const {text} = props
    return (
        <h2 className='ContainerTytle'>
            {text}
        </h2>
    )
}

export default ContainerText
