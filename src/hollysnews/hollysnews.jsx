import React, { Component } from 'react';
import Footer from "../footer";
import styles from "./hollysnews.module.css";


function Hollysnews() {
    return (
        <div>
            <div className={styles.contents_wrap}>
                <div className={styles.customer_fix}>
                    <img src={require("../images/customer_fix.png")} />
                </div>
                <div className={styles.contents}>
                    <div className={styles.menu_list}>
                        <ul className={styles.banner_list01}>
                            <li><img src={require("../images/notice_on.gif")} /></li>
                            <li className={styles.tea}>
                                <img src={require("../images/event.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/event_on.gif")} />
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
                            Home &gt; HOLLYS News &gt; Notice
                        </div>
                        <h2>
                            <img src={require("../images/notice_title.gif")} />
                        </h2>
                        <div>
                            <div className={styles.select}>
                                <select name="" id="">
                                    <option value="">??????</option>
                                    <option value="">??????</option>
                                    <option value="">????????? ??????</option>
                                </select>
                            </div>
                            <div className={styles.tableType}>
                                <table>
                                    <colgroup>
                                        <col width="7%" />
                                        <col />
                                        <col width="12%" />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope='col'>??????</th>
                                            <th scope='col'>??????</th>
                                            <th scope='col'>?????????</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>??????</td>
                                            <td>???3??? ?????? ???????????? ???????????? ??????</td>
                                            <td>2022-05-03</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>[?????? ??????] SKT ?????? VIP ?????? ?????? ??????</td>
                                            <td>2022-09-14</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>??????????????? ???????????? ?????? ??????</td>
                                            <td>2022-05-20</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>[?????? ??????] KT 'VVIP ????????? ??? ?????? ????????? ??????</td>
                                            <td>2022-03-29</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>[?????? ??????] ????????? x KT '????????? ??????' ????????? ??????</td>
                                            <td>2022-03-29</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>??? 17??? ???????????? ????????????????????? ????????????</td>
                                            <td>2022-03-16</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>[?????? ??????] ????????? x LG???????????? '????????????' ????????? ??????</td>
                                            <td>2022-02-14</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>???????????????????????? ?????? ??????</td>
                                            <td>2021-12-23</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>????????? ???????????? ?????? ??????</td>
                                            <td>2021-09-23</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>'?????? ????????????' ?????? ??????</td>
                                            <td>2021-08-05</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>???????????????????????? ?????? ??????</td>
                                            <td>2021-08-02</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.paging}>
                                <img src={require("../images/btn_prev.gif")} />&nbsp;&nbsp;
                                <a href=''><strong>1</strong></a>&nbsp;&nbsp;
                                <a href=''>2</a>&nbsp;&nbsp;
                                <a href=''>3</a>&nbsp;&nbsp;
                                <a href=''>4</a>&nbsp;&nbsp;
                                <a href=''>5</a>&nbsp;&nbsp;
                                <a href=''>6</a>&nbsp;&nbsp;
                                <a href=''>7</a>&nbsp;&nbsp;
                                <a href=''>8</a>&nbsp;&nbsp;
                                <a href=''>9</a>&nbsp;&nbsp;
                                <a href=''>10</a>&nbsp;&nbsp;
                                <img src={require("../images/btn_next.gif")} />
                            </div>
                            <div className={styles.search_box}>
                                <select name="" id="">
                                    <option value="">???????????????</option>
                                    <option value="">??????</option>
                                    <option value="">??????</option>
                                    <option value="">??????+??????</option>
                                </select>
                                <input type="text" className={styles.search_In} />
                                <a href=''>
                                    <img src={require("../images/search_icon.gif")} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Hollysnews;