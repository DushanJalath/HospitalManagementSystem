import React from 'react';
import Slider from "react-slick";
import '../App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import belly from './images/belly.jpg';
import doctor from './images/doctor-watching.jpg';
import preg from './images/pregnant-woman.jpg';
import heart from './images/heart.jpg';
import eye from './images/eye.jpg';
import ear from './images/ear.jpg';
function ImageSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true, // Add this line
        autoplaySpeed: 1200, // And this line (2 seconds per slide, adjust as needed)
    };


    const imageStyle = {
        width: '470px',
        height: '350px',
        objectFit: 'cover',
        marginTop: '30px'
    };

    const containerStyle = {
        overflowX: 'hidden'
    };

    const textStyle = {
        fontWeight: 'bold',
        color: '#3876BF',
        fontsize: '5em',


    };

    // const buttonStyle = {
    //     fontWeight: 'bold',
    //     color: 'white',
    //     borderRadius: '5px',
    //     background: '#3876BF',
    //     borderColor: '#3876BF'
    //
    // };

    return (
        <div style={containerStyle}>
        <div  style={{marginTop: "320px"}}>

            <h2 style={{color: "darkblue", fontFamily: 'lucida grande', fontWeight: 'bold', marginTop: '-20px',fontSize:'40px', textAlign:'center'}}>Our Critical Care Services</h2>
            <Slider {...settings}>
                <div>
                    <img style={imageStyle} src={belly} alt="Gynae Lap"/>
                    <p style={textStyle} style={{textAlign:'center', fontWeight: 'bold', color: '#3876BF', fontSize:'20px'}}>Pregnancy</p>
                    <button className="buttonStyle">View Details</button>
                </div>
                <div>
                    <img style={imageStyle} style={imageStyle} src={doctor} alt="Maternity"/>
                    <p style={textStyle} style={{textAlign:'center', fontWeight: 'bold', color: '#3876BF', fontSize:'20px'}}>Maternity</p>
                    <button className="buttonStyle">View Details</button>
                </div>
                <div>
                    <img style={imageStyle} src={preg} alt="Childcare"/>
                    <p style={textStyle} style={{textAlign:'center', fontWeight: 'bold', color: '#3876BF', fontSize:'20px'}}>Childcare</p>
                    <button className="buttonStyle">View Details</button>
                </div>
                <div>
                    <img style={imageStyle} src={heart} alt="Gynae Lap"/>
                    <p style={textStyle} style={{textAlign:'center', fontWeight: 'bold', color: '#3876BF', fontSize:'20px'}}>Cardio</p>
                    <button className="buttonStyle">View Details</button>
                </div>

                <div>
                    <img style={imageStyle} src={eye} alt="Gynae Lap"/>
                    <p style={textStyle} style={{textAlign:'center', fontWeight: 'bold', color: '#3876BF', fontSize:'20px'}}>Eye Diseases</p>
                    <button className="buttonStyle" >View Details</button>
                </div>

                <div>
                    <img style={imageStyle} src={ear} alt="Gynae Lap"/>
                    <p style={textStyle} style={{textAlign:'center', fontWeight: 'bold', color: '#3876BF', fontSize:'20px'}}>Ear Infection</p>
                    <button className="buttonStyle">View Details</button>
                </div>

            </Slider>
        </div>
        </div>
    );
}

export default ImageSlider;
