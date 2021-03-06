import React from 'react'

export default props => (
    <div className='skillWrap'>
        <span className='skillIcon'>
            <i className={props.skillIcon}></i>
        </span>
        <h3>{props.skillName}</h3>
    </div>
)
