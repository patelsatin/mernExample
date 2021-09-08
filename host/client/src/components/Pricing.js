import React from "react";
import "../layouts/css/pricing.css"
import {NavLink} from "react-router-dom";
const Pricing=()=>{
    return (
       
 <section className="price_plan_area section_padding_130_80" id="pricing">
      <div className="container">
      <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            
            <div className="section-heading text-center pri wow fadeInUp" data-wow-delay="0.2s" >
              
              <h3>join Us</h3>
          
            
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="single_price_plan pri wow fadeInUp" data-wow-delay="0.2s">
              <div className="title">
                <h3>Basic</h3>
             
                <div className="line"></div>
              </div>
              <div className="price">
                <h4>$0</h4>
              </div>
              <div className="description">
                <p><i className="lni lni-checkmark-circle"></i>Duration: 7days</p>
                <p><i className="lni lni-checkmark-circle"></i>10 Features</p>
                <p><i className="lni lni-close"></i>No Hidden Fees</p>
                <p><i className="lni lni-close"></i>100+ Video Tuts</p>
                <p><i className="lni lni-close"></i>No Tools</p>
              </div>
              <div className="button"><NavLink className="btn btn-info" to="/contact">Get Started</NavLink></div>
            </div>
          </div>
          
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="single_price_plan active pri wow fadeInUp" data-wow-delay="0.2s" >
              
              <div className="side-shape"><img src="https://bootdey.com/img/popular-pricing.png" /></div>
              <div className="title"><span>Popular</span>
                <h3>Gold</h3>
    
                <div className="line"></div>
              </div>
              <div className="price">
                <h4>$9.99</h4>
              </div>
              <div className="description">
                <p><i className="lni lni-checkmark-circle"></i>Duration: 3 Month</p>
                <p><i className="lni lni-checkmark-circle"></i>50 Features</p>
                <p><i className="lni lni-checkmark-circle"></i>No Hidden Fees</p>
                <p><i className="lni lni-checkmark-circle"></i>150+ Video Tuts</p>
                <p><i className="lni lni-close"></i>5 Tools</p>
              </div>
              <div className="button"><NavLink className="btn btn-info" to="/contact">Get Started</NavLink></div>
            </div>
          </div>
          
          <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <div className="single_price_plan pri wow fadeInUp" data-wow-delay="0.2s" >
              <div className="title">
                <h3>Premium</h3>
         
                <div className="line"></div>
              </div>
              <div className="price">
                <h4>$49.99</h4>
              </div>
              <div className="description">
                <p><i className="lni lni-checkmark-circle"></i>Duration: 1 year</p>
                <p><i className="lni lni-checkmark-circle"></i>Unlimited Features</p>
                <p><i className="lni lni-checkmark-circle"></i>No Hidden Fees</p>
                <p><i className="lni lni-checkmark-circle"></i>Unlimited Video Tuts</p>
                <p><i className="lni lni-checkmark-circle"></i>Unlimited Tools</p>
              </div>
              <div className="button"><NavLink className="btn btn-info" to="/contact">Get Started</NavLink></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}
export default Pricing;