import React from "react";
import "../Card/Card.css";

const Card = ({ arrObj }) => {
  return (
    <>
      <div className="container">
        <p className="text-center mb-3 text-light title">Subscription Card</p>
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 g-2 m-1 align-items-center justify-content-center">
          {arrObj.map((element, index) => {
            return (
              <div key={index}>
                <div className="col-12">
                  <div className="card rounded-4 m-2 mb-3">
                    <div className="card-body text-center">
                      <h6 className={element.text1}>{element.plan}</h6>
                      <h1 className="mb-4">{element.cost}</h1>
                      <hr />
                      <div className="text-start p-4 pb-0">
                        <p>
                          <i className={element.icon1}></i>
                          {element.user}
                        </p>
                        <p>
                          <i className={element.icon1}></i>
                          {element.storage}
                        </p>
                        <p>
                          <i className={element.icon1}></i>
                          {element.public}
                        </p>
                        <p>
                          <i className={element.icon1}></i>
                          {element.access}
                        </p>
                        <p className={element.text2}>
                          <i className={element.icon2}></i>
                          {element.private}
                        </p>
                        <p className={element.text2}>
                          <i className={element.icon2}></i>
                          {element.support}
                        </p>
                        <p className={element.text2}>
                          <i className={element.icon2}></i>
                          {element.subdomain}
                        </p>
                        <p className={element.text3}>
                          <i className={element.icon3}></i>
                          {element.report}
                        </p>
                      </div>
                      <button className="btn btn-primary rounded-5">
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
