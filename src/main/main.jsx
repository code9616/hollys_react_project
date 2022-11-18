import React, { Component } from 'react';
import Footer from "../footer";
import styles from "./main.module.css";


import Slider from '../slider/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Main() {
    return (
        <div>
            <div className={styles.slider}>
                <Slider />
            </div>
            <div className={styles.contents}>
                <div className={styles.main_list01}>
                    <div className={styles.list_left}>
                        <img src={require("../images/franchise.gif")} />
                        <a href=''>
                            <img src={require("../images/enquiries_membership.gif")} width="225px" height="223px" />
                        </a>
                    </div>
                    <div className={styles.list_center}>
                        <p>
                            <img src={require("../images/hollys_mall.gif")} />
                        </p>
                        <span>
                            <img src={require("../images/hollys_mall_explain.png")} />
                        </span>
                        <ul>
                            <li>
                                <span>
                                    <img src={require("../images/Winter_tiramisu_latte.png")} width="86px" height="80px" />
                                </span>
                                <span>윈터 티라미수 라떼</span>
                            </li>
                            <li>
                                <span>
                                    <img src={require("../images/EarlGrey_Chocolate_Milk.png")} width="86px" height="80px" />
                                </span>
                                <span>얼그레이 초코 밀크</span>

                            </li>
                            <li>
                                <span>
                                    <img src={require("../images/Jeju_YoungTangerine_LemonTea.png")} width="86px" height="80px" />
                                </span>
                                <span>제주 영귤 레몬 티</span>

                            </li>
                        </ul>
                    </div>
                    <div className={styles.list_right}>
                        <img src={require("../images/point_store.gif")} />
                        <a href=''>
                            <img src={require("../images/location_store.jpg")} />
                        </a>
                    </div>
                </div>
                <div className={styles.main_list02}>
                    <div className={styles.banner_membership}>
                        <a href=''>
                            <img src={require("../images/banner_membership.jpg")} />
                        </a>
                    </div>
                    <div className={styles.banner_gift}>
                        <a href=''>
                            <img src={require("../images/banner_gift.jpg")} />
                        </a>
                    </div>
                </div>
                <div className={styles.main_list03}>
                    <ul>
                        <a href=''>
                            <li>
                                <img src={require("../images/coffee_academy.gif")} />
                            </li>
                            <li>
                                할리스 아카데미와 함께하는 즐거운 커피 여행!
                            </li>
                            <li className={styles.going}>
                                바로가기
                            </li>
                        </a>
                    </ul>
                    <ul>
                        <a href=''>
                            <li>
                                <img src={require("../images/b2b_solution.gif")} />
                            </li>
                            <li>
                                할리스 F&B는 20년의 커피 노하우를<br />
                                기반으로 한 할리스 B2B 솔루션을<br />
                                소개합니다.
                            </li>
                            <li className={styles.going}>
                                바로가기
                            </li>
                        </a>
                    </ul>
                    <ul className={styles.news_list}>
                        <li className={styles.title01}>
                            <a href=''>
                                <img src={require("../images/news.gif")} />
                                <img src={require("../images/play_arrow.gif")} className={styles.new_play} />
                            </a>
                        </li>
                        <li className={styles.title02}>
                            <a href=''>
                                <span>
                                    <nobr>
                                        제3자 배정 유상증자 신주발행 공고
                                    </nobr>
                                </span>
                                <span>05-03</span>
                            </a>
                        </li>
                        <li className={styles.title02}>
                            <a href=''>
                                <span>
                                    <nobr>
                                        개인정보처리방침 변경 안내
                                    </nobr>
                                </span>
                                <span>10-06</span>
                            </a>
                        </li>
                        <li className={styles.title02}>
                            <a href=''>
                                <span>
                                    <nobr>
                                        중간배당 기준일 공고
                                    </nobr>
                                </span>
                                <span>10-14</span>
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.content_list}>
                        <li>
                            <a href=''>
                                <span className={styles.content_list_img01}>
                                    <img src={require("../images/startup_information.gif")} />
                                </span>
                                <span>창업안내</span>
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <span className={styles.content_list_img02}>
                                    <img src={require("../images/academy_class.gif")} />
                                </span>
                                <span>아카데미<br />강좌</span>
                            </a>
                        </li>
                        <li>
                            <a href=''>
                                <span className={styles.content_list_img03}>
                                    <img src={require("../images/startup_information.gif")} />
                                </span>
                                <span>고객문의</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.sns_wrap}>
                    <p className={styles.sns_title}>
                        <img src={require("../images/hollys_live.gif")} />
                        <a href=''>
                            <img src={require("../images/facebook.gif")} />
                        </a>
                        <a href=''>
                            <img src={require("../images/instagram.gif")} />
                        </a>
                        <a href=''>
                            <img src={require("../images/blog.gif")} />
                        </a>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Main;