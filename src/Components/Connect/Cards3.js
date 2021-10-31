import React, { Component } from "react";
import "./Cards.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonials_card_2_img from "../../assets/Testimonials/Christy.png";
import testimonials_card_3_img from "../../assets/Testimonials/Joe.png";
import testimonials_card_1_img from "../../assets/Testimonials/Robert.png";
import testimonials_card_4_img from "../../assets/Testimonials/Joe.png";
import testimonials_card_9_img from "../../assets/Testimonials/Christy.png";
import testimonials_card_5_img from "../../assets/Testimonials/Joe.png";
import testimonials_card_7_img from "../../assets/Testimonials/Christy.png";
import testimonials_card_6_img from "../../assets/Testimonials/Joe.png";
import testimonials_card_8_img from "../../assets/Testimonials/Robert.png";




export default class Testimonials extends Component {
 
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      autoplay: false,
      arrows: false,
      dotsClass: "slick-dotsdup",
      responsive: [
        {
          breakpoint: 4000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 1360,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
       
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows: false
          },
        },
        {
          breakpoint: 440,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false
          },
        },
       
        
      ],
    };

    const posts = [
      {
        content:
          "I’m a software developer at google. Currently engaged in serving rural kids and making them learn new tchnoligies and make better india.",
        pic: testimonials_card_1_img,
        name: "Viezh Robert",
        text: "Shanxi, China",
       
      },
      {
        content:
          "I’m a software developer at google. Currently engaged in serving rural kids and making them learn new tchnoligies and make better india.",
        pic: testimonials_card_2_img,
        name: "Yessica Christy",
        text: "Shanxi, China",
        
      },

      {
        content:
          "I’m a software developer at google. Currently engaged in serving rural kids and making them learn new tchnoligies and make better india.",
        pic: testimonials_card_3_img,
        name: "Yessica Christy",
        text: "Shanxi, China",
        
      },

      {
        content:
          "I’m a software developer at google. Currently engaged in serving rural kids and making them learn new tchnoligies and make better india.",
        pic: testimonials_card_4_img,
        name: "Yessica Christy",
        text: "Shanxi, China",
      
      },
      {
        content:
          "I’m a software developer at google. Currently engaged in serving rural kids and making them learn new tchnoligies and make better india.",
        pic: testimonials_card_5_img,
        name: "Yessica Christy",
        text: "Shanxi, China",
      },
      {
        content:
          "I’m a software developer at google. Currently engaged in serving rural kids and making them learn new tchnoligies and make better india.",
        pic: testimonials_card_6_img,
        name: "Yessica Christy",
        text: "Shanxi, China",
       
      },
      {
        content:
          "I’m a software developer at google. Currently engaged in serving rural kids and making them learn new tchnoligies and make better india.",
        pic: testimonials_card_7_img,
        name: "Yessica Christy",
        text: "Shanxi, China",
        
      },
      {
        content:
          "I’m a software developer at google. Currently engaged in serving rural kids and making them learn new tchnoligies and make better india.",
        pic: testimonials_card_8_img,
        name: "Yessica Christy",
        text: "Shanxi, China",
       
      },
      {
        content:
          "I’m a software developer at google. Currently engaged in serving rural kids and making them learn new tchnoligies and make better india.",
        pic: testimonials_card_9_img,
        name: "Yessica Christy",
        text: "Shanxi, China",
        
      },
    ];
    return (
      <div className="testimonials-maincontainer"> 
      <div className="testimonials-container">
          <p className="testimonials-heading-bro">Technical Advisors</p>
      
        <div className="testimonials-slider">
      
          <Slider  {...settings}>   
          {posts.map((post) => {
              return (
                <div className="testimonials-cards">
                  <div className="testimonials-each-card">
                    <div className="testimonials-card-flex">
        
                      <div className="testimonials-card-start">
                        <div className="testimonials-card-image">
                          <img
                            src={post.pic}
                            alt="profile image1"
                            className="testimonials-profile-pic"
                          />
                        </div>

                        <div className="testimonials-card-end">
                          <div className="testimonials-card-name">
                            {post.name}
                          </div>
                          <div className="testimonials-card-status">
                            {post.text}
                          </div>
                        </div>
                      </div>
                       {/* This is card content div */}
                      <div className="testimonials-card-content">
                        &#8220;{post.content}&#8221;
                      </div>
                    
                    </div>
                  </div>
                </div>
              );
            })}           
           
          </Slider>
          </div>
          </div>
        
      </div>
    );
  }
}