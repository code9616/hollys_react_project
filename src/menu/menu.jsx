import React, { Component, useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Footer from "../footer";
import styles from "./menu.module.css";


function Menu() {
    const [status, setStatus, btnState] = React.useState(false);

    function Click() {
        setStatus(btnState => !btnState);
    }

    let toggleClassCheck = btnState ? 'active' : '';

    return (
        <div>
            <div className={styles.contents_wrap}>
                <div className={styles.customer_fix}>
                    <img src={require("../images/customer_fix.png")} />
                </div>
                <div className={styles.contents}>
                    <div className={styles.menu_list}>
                        <ul className={styles.banner_list01}>
                            <li><img src={require("../images/coffee_on.gif")} /></li>
                            <li className={styles.tea}>
                                <img src={require("../images/tea.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/tea_on.gif")} />
                                </ul>
                            </li>
                            <li className={styles.tea}>
                                <img src={require("../images/halachino.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/halachino_on.gif")} />
                                </ul>
                            </li>
                            <li className={styles.tea}>
                                <img src={require("../images/sparkling.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/sparkling_on.gif")} />
                                </ul>
                            </li>
                            <li className={styles.tea}>
                                <img src={require("../images/food.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/food_on.gif")} />
                                </ul>
                            </li>
                            <li className={styles.tea}>
                                <img src={require("../images/mdproduct.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/mdproduct_on.gif")} />
                                </ul>
                            </li>
                            <li className={styles.tea}>
                                <img src={require("../images/mdfood.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/mdfood_on.gif")} />
                                </ul>
                            </li>
                        </ul>
                        <ul className={styles.banner_list02}>
                            <li>
                                <img src={require("../images/membership.gif")} />
                            </li>
                            <li>
                                <img src={require("../images/membership_explain.gif")} />
                            </li>
                            <li>
                                <img src={require("../images/membership_img.gif")} />
                            </li>
                        </ul>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.location}>
                            Home &gt; Menu &gt; COFFEE
                        </div>
                        <h2>
                            <img src={require("../images/coffee_ko.jpg")} />
                        </h2>
                        <div className={styles.menu_view}>
                            <img src={require("../images/Black Sesame Cream Latte.png")} width="400px" height="340px" />
                            <div className={styles.menu_detail}>
                                <div>
                                    <img src={require("../images/facebook.gif")} />
                                    <img src={require("../images/twitter.gif")} />
                                    <img src={require("../images/season_menu.gif")} />
                                </div>
                                <p>
                                    <span>????????? ?????? ??????</span>
                                    Black Sesame Cream Latte
                                </p>
                                <p className={styles.menu_info01}>
                                    ???????????? ????????? ????????? ?????? ????????? ????????? ????????? ?????? ????????? ????????????
                                    <br />
                                    <br />
                                    *'???????????? ??????' ???????????? ?????????, ?????????, ????????? ???????????? ????????? ???????????? ????????? ????????????
                                </p>
                            </div>
                        </div>
                        <div className={styles.menu_info02}>
                            <div className={styles.table_info}>
                                <span>?????????????????? (1??? ????????? / Regular / 354ml ??????(Grande / 472ml))</span>
                            </div>
                            <div className={styles.table_type}>
                                <thead>
                                    <tr>
                                        <th scope='col' className={styles.noline}></th>
                                        <th scope='col'>?????????</th>
                                        <th scope='col'>??????</th>
                                        <th scope='col'>?????????</th>
                                        <th scope='col'>????????????</th>
                                        <th scope='col'>?????????</th>
                                        <th scope='col'>?????????</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>ICED</th>
                                        <td className={styles.figure}>282kcal</td>
                                        <td className={styles.figure}>27g/27%</td>
                                        <td className={styles.figure}>3g/5%</td>
                                        <td className={styles.figure}>8.8g/59%</td>
                                        <td className={styles.figure}>134mg/7%</td>
                                        <td className={styles.figure}>111mg</td>
                                    </tr>
                                </tbody>
                            </div>
                            <div className={styles.allergy_box}>
                                <p className={styles.allergy_item}>
                                    ???????????? ???????????? :
                                    <span>??????, ??????</span>
                                </p>
                                <p className={styles.allergy_notice}>
                                    ??? ?????? ?????? ?????? ?? ????????? ?????? ????????? ???????????? ???????????? ??????????????? ???????????? ?????????
                                </p>
                            </div>
                            <ul className={styles.menu_small}>
                                <li>
                                    <Link>
                                        <img src={require("../images/Black Sesame Cream Latte_small.png")} width="98px" height="83px" />
                                        ????????? ?????? ??????
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img src={require("../images/Americano (Decaf blend)_small.png")} width="98px" height="83px" />
                                        ???????????? ???????????????
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img src={require("../images/Caffe Latte (Decaf blend)_small.png")} width="98px" height="83px" />
                                        ???????????? ????????????
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img src={require("../images/Vanilla Delight (Decaf blend)_small.png")} width="98px" height="83px" />
                                        ???????????? ????????? ????????????
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img src={require("../images/Premium Blend Americano_small.png")} width="98px" height="83px" />
                                        ???????????? ????????? ???????????????
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img src={require("../images/Premium Blend Deep Latte_small.png")} width="98px" height="83px" />
                                        ???????????? ????????? ?????????
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <img src={require("../images/Cold Brew Delight_small.png")} width="98px" height="83px" />
                                        ???????????? ????????????
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    {
                        status ?
                            <div>
                                <ul className={styles.deepmenu_small}>
                                    <li>
                                        <Link>
                                            <img src={require("../images/Cold Brew Latte_small.png")} width="98px" height="83px" />
                                            ???????????? ??????
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={require("../images/Cold Brew_small.png")} width="98px" height="83px" />
                                            ????????????
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={require("../images/Vanilla Delight_small.png")} width="98px" height="83px" />
                                            ?????????????????????
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={require("../images/Ristretto Delight_small.png")} width="98px" height="83px" />
                                            ??????????????? ????????????
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={require("../images/Caramel Macchiato_small.png")} width="98px" height="83px" />
                                            ????????? ????????????
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={require("../images/Caffe Mocha_small.png")} width="98px" height="83px" />
                                            ????????????
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={require("../images/Cappuccino_small.png")} width="98px" height="83px" />
                                            ????????????
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={require("../images/Caffe Latte_small.png")} width="98px" height="83px" />
                                            ????????????
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={require("../images/Caffe Americano_small.png")} width="98px" height="83px" />
                                            ???????????????
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={require("../images/Affogato_small.png")} width="98px" height="83px" />
                                            ????????????
                                        </Link>
                                    </li>
                                    <li>
                                        <Link>
                                            <img src={require("../images/Espresso_small.png")} width="98px" height="83px" />
                                            ???????????????
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            : null
                    }
                </div>
                <div onClick={() => setStatus(!status)} className={styles.close_btn}></div>
                {/* <div onClick={() => setStatus(true)} className={styles.open_btn}></div> */}
            </div>
            <Footer />
        </div >
    );
}


export default Menu;