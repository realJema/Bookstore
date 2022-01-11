import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Card, CardImg, Container, Row, Col } from "reactstrap";
import ReactPlayer from "react-player";

class Jumbo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // extracts video id from link
  _getThumbnail(link) {
    var video_id = link.split("v=")[1];
    var ampersandPosition = video_id.indexOf("&");
    if (ampersandPosition !== -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
  }

  render() {
    return (
      <>
        <section className="section pt-lg-7">
          {/* Top Section  */}
          <Container>
            {/* other sections pills  */}
            <Row className="justify-content-center text-center mb-3">
              <Button
                outline
                className="pl-2 categories rounded-pill"
                color="default"
                type="button"
                lg="2"
                size="sm"
              >
                Billboard 200
              </Button>
              <Button
                outline
                className="pl-2 categories rounded-pill"
                color="default"
                type="button"
                lg="2"
                size="sm"
              >
                Artist 100
              </Button>
              <Button
                outline
                className="pl-2 categories rounded-pill"
                color="default"
                type="button"
                lg="2"
                size="sm"
                to="/producers"
                tag={Link}
              >
                Producers 100
              </Button>
              <Button
                outline
                className="pl-2 categories rounded-pill"
                color="default"
                type="button"
                lg="2"
                size="sm"
              >
                Video Makers 100
              </Button>
            </Row>
            {/* end other sections pills  */}
            <Row className="justify-content-center text-center mb-5">
              <Col lg="8">
                <h1 className="display-1 top-title">
                  THE HOT {this.props.hot}
                </h1>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="row-grid align-items-center dsdf">
              <ReactPlayer
                className="topVideo-player trending-charts"
                url={"https://www.youtube.com/watch?v=" + this.props.top + ""}
              />
            </Row>
            <Row className="row-grid align-items-center">
              {this.props.others
                .sort(
                  (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
                )
                .map((item, i) => {
                  return (
                    <Col key={i} md="2">
                      <Card className="bg-default shadow border-0">
                        <CardImg
                          className="topVideos"
                          alt="..."
                          src={
                            "https://img.youtube.com/vi/" +
                            this._getThumbnail(item.link) +
                            "/1.jpg"
                          }
                          top
                        />
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Container>
          {/* end Top Section  */}
        </section>
      </>
    );
  }
}

export default Jumbo;
