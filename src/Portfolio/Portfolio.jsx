import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Pagination } from "swiper";
import 'swiper/css/pagination'

const Portfolio = () => {
  return (
    <div className="portfolio" id='Portfolio'>
        <span>Recent Project</span>
        <span>Portfolio</span>


        <Swiper
        // spaceBetween={30}
        // slidesPerView={3}
        // grabCursor={true}
        // className='portfolio-slider'
        modules={[Pagination]}
        slidesPerView={2}
        pagination={{clickable:true}}
        >
           <div>
           <SwiperSlide>
                <div>
                    <h2>Online IDE</h2>
                    <p>Created a online Coding IDE by using React <br/>  with various functionality provided as below-</p>
                    <ul>
                        <li>Supported for java,Javascript,cpp,Python</li>
                        <li>
                            used Stylish Theme of Github
                        </li>
                        <li>Create Edit of delete folder & completely Resposive</li>
                    </ul>
                    <a href='https://abhi-9572.github.io/code-deck/'> 
                  <button className='p-button'>Link</button>
                  </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='allProject'>
                    <h2>E-commerce website</h2>
                   
                    <p>Create the basic structure of responsive E-commerce <br/>website usingCreate the basic structure of responsive<br/> E-commerce website using HTML CSS Javascript having<br/>functionality-</p>
                    <ul>
                        <li>Add to cart button on every item</li>
                        <li>
                            Price increases and decreses a/c to the quantity
                        </li>
                    </ul>
                    <a href='https://abhi-9572.github.io/EcommerceWebsite/'> 
                  <button className='p-button'>Link</button>
                  </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                <h2>ToDo List App</h2>
                   
                   <p>ToDo List App is a kind of app that generally used to maintain<br/> our day-to- day tasks or list everything that we have to do.<br/>In this project i use React
Hook USESTATE & USEEFFECT<br/>and having functionality-
</p>
                   <ul>
                       <li>Edit your task</li>
                       <li>
                           Delete your task
                       </li>
                       <li>Also show the start and end Date</li>
                   </ul>
                  <a href=''> 
                  <button className='p-button'>Link</button>
                  </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                <h2>Snake Game in java</h2>
                   
                   <p>Snake game in java is a computer action game, whose goal<br/> is to control a
snake to move and collect food in a map.,<br/> Make this project for just
implementing the DSA concepts.</p>
                 
                   <a href='https://github.com/Abhi-9572/SnakeGame.git'> 
                  <button className='p-button'>Link</button>
                  </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                
            </SwiperSlide>
           </div>
            
        </Swiper>
    </div>
  )
}

export default Portfolio