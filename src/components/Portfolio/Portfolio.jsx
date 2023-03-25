import React, { useContext,useState, useEffect } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
import axios from "axios";

const Portfolio = () => {

  const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/art/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    console.log(data);

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  
  return (
   
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Memories</span>
      <span>Our Top 5 Memories</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {/* <SwiperSlide>
        <img src={require(`../../Admin/image/${client.art_image}`)} alt="" />
        </SwiperSlide> */}
        {data.map((art,index)=>{
          return(
            <div key={index}>
                <SwiperSlide>
                  <img src={require(`../../Admin/image/${art.art_image}`)} alt=""/>
                </SwiperSlide>
            </div>
          )
        })}
        {/* <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={S4} alt="" />
        </SwiperSlide> */}
      
      </Swiper>
    </div>
  );
  
};

export default Portfolio;
