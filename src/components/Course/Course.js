import React from 'react';
import'./Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {img,name,creater,price,star} = props.product;
    return (
        <div className="product">
<div className="img">
    <img src={img} alt="" srcset=""/>
</div>


<div className="course-name">
    
 <h3 id="headline">{name}</h3>
<br/>
<p>Rating : {star} ★</p>
<p>Created By: {creater}</p>
<p>$ {price}</p>
<br/>
<button className="btn-success" onClick={()=>props.addproduct(props.product)}//use bootstarp class "btn-success"

>
<FontAwesomeIcon icon={faHeart} /> Enroll Now</button>

    </div>
           
        </div>
    );
};

export default Course;