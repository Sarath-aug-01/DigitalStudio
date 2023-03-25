import React,{useState, useEffect} from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {Link} from 'react-router-dom'
import { Pagination } from "swiper";
import "swiper/css/pagination";
import axios from "axios";


const Testimonial = () => {

  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:4000/products/get");
      setData(response.data);
  };

  useEffect(() => {
      loadData();
  }, []);

  



  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Customize </span>
        <span>Gift </span>
        <span>Products</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <h1>Sent the pictures need to custimize your gift in</h1>
                <h1>whats'up number- 9875642313</h1>
                <br></br>
                <img src={require(`../../Admin/image/${client.P_image}`)} alt="" />
                <h1><center>
                  <br></br>
                <span>{client.P_name}</span>
                <br></br>
                
                <span>{client.P_description}</span>
    
    <br></br>
    </center>
                <span><center>₹{client.P_price}</center></span></h1>

                <Link  to="/Ordering">
            <button className="button s-button">Make Order</button>
          </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
