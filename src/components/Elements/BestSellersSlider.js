import React, { Component } from "react";
import Slider from "react-slick";
import BookCard from "./BookCard";


export default class BestSellersSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
        swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="book-card-container">
        <Slider {...settings}>
          <BookCard size="12" />
          <BookCard size="12" />
          <BookCard size="12" />
          <BookCard size="12" />
          <BookCard size="12" />
          <BookCard size="12" />
          <BookCard size="12" />
          <BookCard size="12" />
          <BookCard size="12" />
          <BookCard size="12" />
        </Slider>
      </div>
    );
  }
}
