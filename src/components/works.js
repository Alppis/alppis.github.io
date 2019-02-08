import React from "react"

export default props => (
    <div className="workShowcase">
        <img src={props.showcaseImg}/>
        <div className="workShowcaseContainer">
            <h4><b>{props.showcaseHeadline}</b></h4>
            <p>{props.showcaseDesc}</p>
        </div>
    </div>
)