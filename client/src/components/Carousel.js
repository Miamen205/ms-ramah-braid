import React, { Component}  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import ReactPlayer from "react-player";

class Carouselpage extends React.Component {
    constructor(props) {
        super(props);
        this.state={}
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
    slideNext=()=>{
      this.slider.slideNext();
    }
    slidePrev=()=>{
      this.slider.slidePrev();
    }
    goToSlide=()=>{
      this.slider.goToSlide(4);
    }
    _changeIcon=()=>{
      let {leftIcon,rightIcon}=this.state;
      if(leftIcon && rightIcon){
        this.setState({
          leftIcon:undefined,
          rightIcon:undefined
        });
      }
      else{
        this.setState({
          leftIcon:<span className="glyphicon glyphicon-glass"></span>,
          rightIcon:<span className="glyphicon glyphicon-music"></span>
        });
      }
    }
    render() {
      let {leftIcon,rightIcon}=this.state;
      return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <button type="button" className="btn btn-default" onClick={this._changeIcon}>
                Change Icon
              </button>
              <button type="button" className="btn btn-default" onClick={this.slidePrev}>
                Slider prev
              </button>
              <button type="button" className="btn btn-default" onClick={this.slideNext}>
                Slider next
              </button>
              <button type="button" className="btn btn-default" onClick={this.goToSlide}>
                Go to slide 4
              </button>
            </div>
            <div className="col-md-12">
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={7000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                onSelect={this.onSelect}
                ref={r=>this.slider=r}
                className="carousel-fade"
              >
                <div style={{height:600}}>
                  <img
                  className="carousel-center" controls style={{width:"75%"}} height="500" 
                    src='https://i.imgur.com/RNeDxKa.jpg'
                  />
                  <div className="carousel-caption">
                   
                  </div>
                  <span>
                  Nice Hair Style
                  </span>
                </div>
                <div style={{height:600,width:"100%",backgroundColor:""}}>
                  <video className="carousel-center" controls style={{width:"75%"}} height="250">
                  <ReactPlayer
                  url="https://youtu.be/Cmzy_4_5RpM?list=PLsku1uRDq-TEJUrh-dbulbngvAK4uzSBl&t=23"
                  playing
                />
                  </video>
                  <img className="carousel-center" controls style={{width:"75%"}} height="500" src='https://i.imgur.com/FDxpWdz.jpg' />
                  <div className="carousel-caption">
                 
                  </div>
                  <span>
                  Nice Hair Style
                  </span>
                </div>
                <div style={{height:600,width:"100%",backgroundColor:""}}>
                <img className="carousel-center" controls style={{width:"75%"}} height="500"  src='https://i.imgur.com/eiE1ox1.jpg' />
                  <div className="carousel-center">
                 
                  </div>
                  <span>
                  Nice Hair Style
                  </span>
                  <div className="carousel-caption">
                 
                  </div>
                </div>
                <div style={{height:600,width:"100%",backgroundColor:""}}>
                <img className="carousel-center" controls style={{width:"75%"}} height="500"  src='https://i.imgur.com/nUvraEh.jpg' />
                  <span>
                  Nice Hair Style
                  </span>
                  <div className="carousel-caption">
                 
                  </div>
                </div>
                <div style={{height:600,width:"100%",backgroundColor:''}}>
                  <div className="carousel-center">
                    
                  </div>
                  <img className="carousel-center" controls style={{width:"75%"}} height="500" src='https://i.imgur.com/ZkmdHWD.jpg'
                    />
                  <div className="carousel-caption"> 
                  </div>
                  <span>
                  Nice Hair Style
                  </span>
                </div>
              </React_Bootstrap_Carousel>
            </div>
          </div>
        </div>
      );
    }
};
export default Carouselpage;
