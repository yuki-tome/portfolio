import React from 'react'

const SkillItem = ({img, title, text}) => {
    return (
        <div class="col-md-4 services">
        <img src={img} alt={title}/>
        <h4>{title}</h4>
        <p>{text}</p>
        </div>
    );
}

export default SkillItem