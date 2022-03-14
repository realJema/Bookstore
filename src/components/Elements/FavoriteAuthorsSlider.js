import React, { Component } from "react";
import Slider from "react-slick";
import { Col } from "reactstrap";
import { useStoreState } from "easy-peasy";

function FavoriteAuthorsSlider() {

    const data = useStoreState((state) => state.users);

    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
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
      <div>
        <Slider {...settings}>
          {data.map((item) => (
            <AuthorCard
              key={item.id}
              full_name={item.full_name}
              phone={item.phone}
              profile={item.profile}
            />
          ))}
        </Slider>
      </div>
    );
}

class AuthorCard extends React.Component {
  render() {
    return (
      <Col lg={this.props.size ? this.props.size : "12"}>
        <center>
          <img
            alt="..."
            className="img-fluid rounded-circle shadow"
            src={require("assets/img/users/" + this.props.profile + ".jpg")}
            style={{ width: "150px" }}
          />
          <h6 className="mt-4 mb-0">{this.props.full_name}</h6>
          <small className="d-block">{this.props.phone}</small>
        </center>
      </Col>
    );
  }
}


export default FavoriteAuthorsSlider;
