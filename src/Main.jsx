import React, { useEffect, useState } from 'react';
import './Main.css';
import Mentors from './Mentors';

function Main() {
    const [items, setItems] = useState(Mentors);
    const [count, setCount] = useState(1);

    const nextFn = () => {
        setCount(count + 1);
        if (count == 5) {
            setCount(1);
        }
    };
    const filterData = Mentors.filter((mentor) => {
        if (count == mentor.id) {
            return mentor;
        }
    });
    const mentor = filterData[0];

    function prevFn() {
        setCount(count - 1);
        if (count == 1) {
            setCount(5);
        }
    }
    return (
        <div className='main'>
            <div>
                <div className="background"><img src="./images/bgEllipse.png" alt="star" /></div>
                <div className="sideDetails">
                    <p className='rating'>{mentor.rating}</p>
                    <div className="star">
                        <img className='fullstar' src="./images/Fstar.png" alt="star" />
                        <img className='fullstar' src="./images/Fstar.png" alt="star" />
                        <img className='fullstar' src="./images/Fstar.png" alt="star" />
                        <img className='fullstar' src="./images/Fstar.png" alt="star" />
                        {mentor.rating == 5 ?
                            <img className='fullstar' src="./images/Fstar.png" alt="star" />
                            :
                            <img className='halfstar' src="./images/Hstar.png" alt="star" />
                        }

                    </div>
                    <p className='name'>{mentor.name}</p>
                    <p className='role'>{mentor.role}</p>
                    <p className='description'>{mentor.description}</p>
                    <button className='book-btn'>Book a session</button>
                </div>
                <div className="rightside">
                    <button className='arrow-btn' onClick={prevFn}><img src="./images/downArrow.png" alt="" /></button>
                    <img className='mainImage' src={mentor.image} alt="mainIMG" />
                    <button className='name-btn'>{mentor.name}</button>
                    <button className='arrow-btn2' onClick={nextFn}><img src="./images/downArrow.png" alt="" /></button>
                </div>


            </div>
        </div>
    )
}

export default Main;