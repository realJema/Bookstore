import React, { Component } from "react";
import Slider from "react-slick";
import BookCard from "./BookCard";
import { useStoreState, useStoreActions } from "easy-peasy";

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
function RecommendedBooks() {
  const books = useStoreState((state) => state.books);
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
      <div className="book-card-container">
        <Slider {...settings}>
          {books.map((item) => (
            <BookCard
              key={item.id}
              title={item.title}
              price={item.price}
              cover={item.cover}
              size="12"
            />
          ))}
        </Slider>
      </div>
    );
}


export default RecommendedBooks;
