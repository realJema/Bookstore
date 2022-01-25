import React, { Component } from "react";
import Slider from "react-slick";
import BookCard from "./BookCard";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}
export default class RecommendedBooks extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      autoplay: true,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
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
      <div className="">
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
