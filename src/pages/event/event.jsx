import React from "react";
import Footer from "./../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import "./event.css";
import Button from "../../components/button/button";
// import event1 from "../../assets/img/event1.png";
import map from "../../assets/img/map.png";
import { useHistory } from "react-router";
import moment from "moment";
const Event = () => {
const history = useHistory();

const data = history.location.state;
console.log(data.data);

  return (
    <>
    <Navbar />
    {data && 
    <>
      <div className="event_container">
      <div className="event__up">
        <div className="event__up__left">
          <h4 className="event__date">{moment(data.data.end_time).format('LL')}</h4>
          <h3 className="event__header">{data.data.name}</h3>
          <p className="event__description">{data.data.description}</p>
          <div className="event__status">N 5,000 - # 200,000</div>
          <Button 
          type="button"
          buttonSize="btn_large"
         > BUY TICKETS </Button>
        </div>

        <div className="event__up__right">
  
          <img style={{width: "260px", height: "230px"}} src={data.data.image} alt="" className="event__card" />
        </div>
      </div>
      <hr></hr>
      <div className="event__down">
        <div className="event__down__left">
          <div className="event__venue__wrapper">
            <h4 className="event__venue">{data.data.venue}</h4>
            <p className="event__descrip">
              Eko atlantic beach, off <br /> bello way, victoria island,
              <br /> lagos.
            </p>
            <img src={map} alt="" className="map__item" />
            <span className="map__text">View map for directions </span>
          </div>
        </div>

        <div className="event__down__right">
          <div className="event__date__up">
            <h3 className="event__date__time">Date and time</h3>
            <p className="event__dt">{moment(data.data.end_time).format('LLLL')}</p>
          </div>

          <div className="event__date__down">
            <div className="event__social">social links</div>
            <p className="event__social__link">http://www.nathanielcole.com</p>
            <p className="event__social__link">
              https://twitter.com/www.nathanielcole
            </p>
            <p className="event__social__link">
              https://instagram.com/www.nathanielcole
            </p>
          </div>
        </div>
      </div>
      </div>
      </>
      }

      <Footer />
    </>
  );
}

export default Event;
