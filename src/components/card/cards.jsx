import React from 'react';
// import CardItem from './card_item';

import './cards.css';


const Cards = ({ img_link, date, title, status, clickFunction }) => {

    // cardDetails = {
    //     status: 'August',
    //     status: 'Alibaba'
    // }
            

    return (
        <>
                <div className="cards" onClick={clickFunction}>
                    <div className="card_container">
                        <div className="card_container_image">
                            <img className="img_event" src={img_link} alt="Event" />
                        </div>
                        <div className="card_container_info">
                            <div className="info_date">{date}</div>
                            <div className="info_title">{title}</div>
                            <div className="info_status">{status}</div>
                        </div>
                    </div>
                </div>
        </>



        /* // <div className="cards">
        //     <h1>The best events happening now.</h1>
        //     <div className="cards__container">
        //         <div className="cards__wrapper">
        //             <ul className="cards__items">
        //                 <CardItem */

        //                 date="25 August 2020"
        //                 text="the Nathan cole experience"
        //                 status="50,000 - 200,000"
        //                 />
        //                 <CardItem
        //                 date="25 August 2020"
        //                 text="one mic - by alibaba"
        //                 status="50,000 - 200,000" />
        //                 <CardItem
        //                 date="25 August 2020"
        //                 text="mitch24"
        //                 status="50,000 - 200,000" />
        //             </ul>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Cards
