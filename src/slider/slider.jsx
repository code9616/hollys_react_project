import React, { Component } from 'react';
import Slider from 'react-slick';
import { Route, Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../slider/slider.module.css";
// yarn 일때
// yarn add react-slick
// npm install slick-carousel
// npm install react-slick @types/react-slick slick-carousel


const Carousel = () => {

    const settings = {
        dots: true,//이미지순서를 알려줌
        infinite: true,//loop 사용유뮤
        speed: 1000,//지나가는 속도
        autoplay: true,//자동실행유뮤
        autoplaySpeed: 6000,//자동실행되는속도
        slideToShow: 1,// 한번에 보여줄 슬라이드쇼의 갯수
        slideToScroll: 1,// 슬라이드로 넘길 갯수
        dotsClass: "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
        arrows: true,
        appendDots: (dots) => (
            <div
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: '4px',
                    right: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'

                }}
            >
                <ul> {dots} </ul>
            </div>
        )
    }

    return (
        <div>
            <Slider {...settings}>
                <div className={styles.slider_one}>
                    <Link to=''>
                        <img src={require("../images/main_slider04.jpg")} />
                    </Link>
                </div>
                <div className={styles.slider_one}>
                    <Link to=''>
                        <img src={require("../images/main_slider01.jpg")} />
                    </Link>
                </div>
                <div className={styles.slider_two}>
                    <Link to=''>
                        <img src={require("../images/main_slider02.jpg")} />
                    </Link>
                </div>
                <div className={styles.slider_three}>
                    <Link to=''>
                        <img src={require("../images/main_slider03.jpg")} />
                    </Link>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel;
