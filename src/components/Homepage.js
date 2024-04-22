import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import '../assets/css/main.css';
import '../assets/css/fontawesome-all.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Homepage = () => {
  const [recentAnime, setRecentAnime] = useState([])
  const [popularAnime4, setPopularAnime4] = useState([])
  const [popularAnime2, setPopularAnime2] = useState([])
  const [popularAnime3, setPopularAnime3] = useState([])
  const [popularAnime1, setPopularAnime1] = useState([])
  const baseUrl = process.env.REACT_APP_URL
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_URL}/home/`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecentAnime(data['Latest Subbed']);
      } catch (error) {
        console.error('Failed to fetch trending anime:', error);
      }
    };
    fetchData();
  }, [])

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_URL}/popular?page=1`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPopularAnime1(data);
      } catch (error) {
        console.error('Failed to fetch trending anime:', error);
      }
    };
    fetchData();
  }, [])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_URL}/popular?page=2`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPopularAnime2(data);
      } catch (error) {
        console.error('Failed to fetch trending anime:', error);
      }
    };
    fetchData();
  }, [])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_URL}/popular?page=3`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPopularAnime3(data);
      } catch (error) {
        console.error('Failed to fetch trending anime:', error);
      }
    };
    fetchData();
  }, [])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_URL}/popular?page=4`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPopularAnime4(data);
      } catch (error) {
        console.error('Failed to fetch trending anime:', error);
      }
    };
    fetchData();
  }, [])

  return (
    <main>
      <Swiper spaceBetween={30} centeredSlides={true} autoplay={{delay: 2500,disableOnInteraction: false,}} pagination={{clickable: true,}}
        navigation={false} modules={[Autoplay, Pagination]}
        className="" style={{height:'400px'}}>
        {recentAnime.map((item, index)=>(
          <SwiperSlide className="swiper-slide" key={index} style={{backgroundImage: `url(${item.image})`,backgroundSize:'cover',backgroundRepeat: 'no-repeat'}}>
            <div>
              <h1>{item.title}</h1>
              <p>Now Streaming</p>
              <br />
              <p>
                <button class="green-btn"><Link to="#">Play Now</Link></button><button class="gray-btn">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div class="trending">
        {popularAnime1.map((item, index)=>(
          <div key={index} class="trending-card">
            <Link to={`/details${item.url.substring(9)}`}>
              <img src={item.image} alt="" />
            </Link>
          </div>
        ))}
        {popularAnime2.map((item, index)=>(
          <div key={index} class="trending-card">
            <Link to={`/details${item.url.substring(9)}`}>
              <img src={item.image} alt="" />
            </Link>
          </div>
        ))}
        {popularAnime3.map((item, index)=>(
          <div key={index} class="trending-card">
            <Link to={`/details${item.url.substring(9)}`}>
              <img src={item.image} alt="" />
            </Link>
          </div>
        ))}
        {popularAnime4.map((item, index)=>(
          <div key={index} class="trending-card">
            <Link to={`/details${item.url.substring(9)}`}>
              <img src={item.image} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Homepage
