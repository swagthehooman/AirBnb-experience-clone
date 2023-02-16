import React from "react";
import star from "/images/star.png"

function Card(props){
    let badgeText
    if(props.openSpots===0)
        badgeText='SOLD OUT'
    else if(props.location==='Online')
        badgeText='ONLINE'


    return <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={`/images/${props.coverImg}`} alt="" className="card-img"/>
        <div className="rating"> 
            <img src={star} alt="" className="card-star"/>
            <span>{props.rating}</span>
            <span className="grey">({props.reviewCount}).</span>
            <span className="grey">{props.location}</span>
        </div>
        <p className="title">{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
}

export default Card