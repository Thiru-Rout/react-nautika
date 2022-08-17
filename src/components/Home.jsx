import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="overflow-hide">
        <div className="bannerwrap">
          <Carousel>
            <Carousel.Item>
              <img
                className="anim w-100"
                src={require("../assets/images/carousel-5.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="anim w-100"
                src={require("../assets/images/carousel-3.jpg")}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="anim w-100"
                src={require("../assets/images/carousel-6.jpg")}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="anim w-100"
                src={require("../assets/images/carousel-4.jpg")}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="anim w-100"
                src={require("../assets/images/carousel-7.jpg")}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="container-fluid fixed-bkg">
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-7"></div>
            <div className="col-sm-1">
              <a className="btn btn-primary m-3 form-control" routerlink="/login">
                Login
              </a>
            </div>
            <div className="col-sm-1">
              <a
                className="btn btn-primary m-3 form-control"
                routerlink="/register"
              >
                Register
              </a>
            </div>
            <div className="col-sm-2"></div>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 mt-2">
              <div className="book-now-wrapper d-none d-lg-block">
                <div className="container mt-2">
                  <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-9 trip-selection">
                      <span className="pg-title pt-3">One Way</span>
                      <span className="pg-title ml-4 pt-3">Round Trip</span>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row mt-3">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                      From
                      <select className="mb-3 form-control"></select>
                    </div>

                    <div className="col-sm-2">
                      To
                      <select className="mb-3 form-control"></select>
                    </div>

                    <div className="col-sm-3 text-left">
                      Travel Date
                      <div className="input-group">
                        <div className="input-group">
                          <input
                            className="form-control"
                            placeholder="dd-mm-yyyy"
                            name="dp"
                          />
                          <input type="text" className="form-control" disabled />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-secondary calendar"
                              type="button"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-1">
                      <span>Adults</span>
                      <input
                        className="form-control"
                        type="number"
                        min="1"
                        max="100"
                      />
                    </div>
                    <div className="col-sm-1">
                      <span>Infants</span>
                      <input
                        className="form-control"
                        type="number"
                        min="0"
                        max="10"
                      />
                    </div>
                    <div className="col-sm-2 pt-4">
                      <button className="btn btn-primary">Book Now</button>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <br />
              <br />
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12">
              <p className="text-center mono font-size-20">
                Shimmering blue waters, mirror-like sand, nostalgic huts and
                forest adventures are what makes Andaman a dream destination.
                The awe struck beaches in these pristine Islands are just
                magical for the travellers.Experience picturesque Islands with
                the Andamans youngest cruise liner.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row mb-1">
            <div className="col-12 text-center bg-secondary">
              <p className="text-center p-4 text-white h4">
                Schedule Open Till 30-06-2023
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center bg-secondary">
              <p className="text-center p-4 text-white h4">Daily Scheduled Trips</p>
            </div>
          </div>
        </div>

        <div className="container d-none d-lg-block">
          <div className="row">
            <div className="col-lg-12">
              <table className="table table-bordered table-striped text-center">
                <thead>
                  <tr>
                    <th>From</th>
                    <th>To</th>
                    <th>Dep - Arr</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Port Blair</td>
                    <td>
                      Swaraj Dweep
                      <br /> (Havelock)
                    </td>
                    <td>07:30 - 08:45</td>
                  </tr>
                  <tr>
                    <td>
                      Swaraj Dweep <br /> (Havelock)
                    </td>
                    <td>
                      Shaheed Dweep <br /> (Neil)
                    </td>
                    <td>09:00 - 10:00</td>
                  </tr>
                  <tr>
                    <td>
                      Shaheed Dweep <br /> (Neil)
                    </td>
                    <td>Port Blair</td>
                    <td>10:15 - 11:30</td>
                  </tr>
                  <tr>
                    <td>Port Blair</td>
                    <td>
                      Swaraj Dweep <br /> (Havelock)
                    </td>
                    <td>11:45 - 13:00</td>
                  </tr>
                  <tr>
                    <td>
                      Swaraj Dweep <br /> (Havelock)
                    </td>
                    <td>Port Blair</td>
                    <td>15:30 - 16:45</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="container mt-5 p-0">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="text-center fleet">Our Fleet</h1>
            </div>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-6">
              <a
                href="https://andaman.gonautika.com/nautika-ferry-in-andaman"
                target="_blank"
              >
                <div className="img-wrapper">
                  <img
                    className="img-fluid"
                    src={require("../assets/images/nautika-2.1.jpg")}
                  />
                </div>
                <p className="img-naut text-center mt-1">Nautika</p>
              </a>
            </div>

            <div className="col-6">
              <a
                href="https://andaman.gonautika.com/sealink-ferry-in-andaman"
                target="_blank"
              >
                <div className="img-wrapper">
                  <img
                    className="img-fluid"
                    src={require("../assets/images/sealink-24.jpg")}
                  />
                </div>
                <p className="text-center mt-1">Sealink</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
