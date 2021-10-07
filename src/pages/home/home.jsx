import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import "../../App.css";
import "./home.css";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Cards from "../../components/card/cards";
import Loader from "../../components/loader/loader";
import axios from "axios";
import moment from "moment";

const Home = () => {
  const [responseData, setResponseData] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(() => {
    axios({
      method: "GET",
      url: "https://eventsflw.herokuapp.com/v1/events",
      headers: {
        // "content-type": "application/octet-stream",
        // "x-rapidapi-host": "quotes15.p.rapidapi.com",
        // "x-rapidapi-key": process.env.REACT_APP_API_KEY
      },
      params: {
        language_code: "en",
      },
    })
    
    .then((response) => {
      setLoading(true)
  setResponseData(response.data);


      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() =>  setLoading(false));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = (data) => {
    history.push(`/event/${data.id}`, {data});
  }

  return (
    <div>
      <Navbar />

      <div className="home_header_container">
        <div className="home_header_wrapper">
          <h4 className="home_header">The best events happening now. </h4>
        </div>
      </div>
     
      
      <div className="home_container">
        
     
     <div className="event-content">
        {responseData !== null &&
         responseData?.data?.events?.map((items, id) => (

          <Cards
            
            img_link={items.image}
            date={moment(items.start_time).format('LL')}
            title={items.name}
            status={items.is_free}
            clickFunction={() => handleClick(items)}
          />

          
        ))}
        </div>

{loading && <Loader/>}
      </div>
            

      <Footer />
    </div>
  );
};

export default Home;
