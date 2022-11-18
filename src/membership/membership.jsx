import React, { Component } from 'react';
import Footer from "../footer";
import styles from "./membership.module.css";


function Membership() {
    return (
        <div>
            <div className={styles.contents_wrap}>
                <div className={styles.customer_fix}>
                    <img src={require("../images/customer_fix.png")} />
                </div>
                <div className={styles.contents}>
                    <div className={styles.menu_list}>
                        <ul className={styles.banner_list01}>
                            <li className={styles.tea}>
                                <img src={require("../images/smart_order.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/smart_order_on.gif")} />
                                </ul>
                            </li>
                            <li>
                                <img src={require("../images/membership_benefit_on.gif")} />
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
                            Home &gt; Membership  &gt; 멤버십 혜택
                        </div>
                        <h2>
                            <img src={require("../images/membership_benefit.jpg")} />
                        </h2>
                        <div>
                            <ul className={styles.membership_benefit}>
                                <li className={styles.membership_list}>
                                    <div className={styles.membership_img}>
                                        <img src={require("../images/img_membership_silver1.png")} />
                                    </div>
                                    <p className={styles.benefit_title}>
                                        SILVER
                                        <span>멤버십 회원 가입 시</span>
                                    </p>
                                    <ul>
                                        <li>
                                            크라운 12개 적립 시<br />
                                            아메리카노 (R) 무료쿠폰<br />
                                        </li>
                                        <li>
                                            3만원 이상 자동충전<br />
                                            설정 후 발생 시 마다<br />
                                            아메리카노 1+1 쿠폰<br />
                                            즉시 발행 (1일 1회 한정)
                                        </li>
                                        <li>
                                            멤버십에 현금영수증<br />
                                            정보 등록 후 할리스카드<br />
                                            이용 시 자동 소득공제
                                        </li>
                                    </ul>
                                </li>
                                <li className={styles.membership_list}>
                                    <div className={styles.membership_img}>
                                        <img src={require("../images/img_membership_gold1.png")} />
                                    </div>
                                    <p className={styles.benefit_title_gold}>
                                        GOLD
                                        <span>CROWN 12개 적립 시</span>
                                    </p>
                                    <div className={styles.benefit_tag_gold}>
                                        SILVER 혜택 모두 포함
                                    </div>
                                    <ul>
                                        <li>
                                            크라운12개 적립 시<br />
                                            아메리카노 (R) 무료쿠폰<br />
                                        </li>
                                        <li>
                                            커피음료 무료 사이즈업<br />
                                            또는 샷 / 시럽 무료 추가<br />
                                            중 택 1 (1일 1회 1잔 한정)
                                        </li>
                                    </ul>
                                </li>
                                <li className={styles.membership_list}>
                                    <div className={styles.membership_img}>
                                        <img src={require("../images/img_membership_red1.png")} />
                                    </div>
                                    <p className={styles.benefit_title_red}>
                                        RED
                                        <span>CROWN 48개 적립 시</span>
                                    </p>
                                    <div className={styles.benefit_tag_red}>
                                        GOLD 혜택 모두 포함
                                    </div>
                                    <ul>
                                        <li>
                                            크라운12개 적립 시 제조<br />
                                            음료 (R) 무료 쿠폰<br />
                                        </li>
                                        <li>
                                            생일 축하 미니 라운드<br />
                                            케이크 무료 쿠폰 증정
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div className={styles.membership_img}>
                                        <img src={require("../images/img_membership_dia1.png")} />
                                    </div>
                                    <div className={styles.benefit_content}>
                                        <p className={styles.benefit_title_dia}>
                                            DIAMOND
                                            <span>연간 구매금액 상위 1%</span>
                                        </p>
                                        <div className={styles.benefit_tag_dia}>
                                            <span>RED </span>
                                            혜택 모두 포함
                                        </div>
                                        <ul>
                                            <li>
                                                <strong>홀케이크 무료 쿠폰 증정</strong><br />
                                                (겨울 시즌 출시 기간<br /> 개별 알림)
                                            </li>
                                            <li>
                                                <strong>플래너 무료 쿠폰 증정</strong><br />
                                                (출시 여부 및 일정에 따라<br /> 개별 알림)
                                            </li>
                                            <li>
                                                <strong>시즌 스페셜 혜택 제공</strong><br />
                                                (이벤트 일정에 따라 개별<br /> 알림)
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <ul className={styles.list_type}>
                                <span>유의사항</span>
                                <li>
                                    영수증 1개당 결제금액 기준으로 적립됩니다.<br />
                                    - (4천원 이상 ~ 1만원 미만일 시 1개 적립, 1만원 이상부터 5천원 단위로 1개씩 적립)<br />
                                    - 추후 적립의 경우 결제일 포함 7일 이내 가능하며, 해당 매장에 영수증 지참하여 방문 바랍니다.<br />
                                    - 크라운 유효기간은 적립일로부터 1년간 유지되며 기간 만료 시 소멸됩니다.
                                </li>
                                <li>
                                    멤버십 등급 안내<br />
                                    - 골드 / 레드 등급은 조건 달성 시 즉시 반영되며, 승급일로부터 1년간 유지됩니다.<br />
                                    - 다이아몬드 등급은 전년도 1월 1일 ~ 12월 31일 구매 금액 기준 상위 1%에 한해 선정되며,<br />
                                    승급일로부터 1년간 유지됩니다.<br />
                                </li>
                                <li>
                                    기타 안내<br />
                                    - 자동 충전이란 ? 할리스카드의 잔액이 설정하신 기준 잔액보다 낮아지면 즉시 자동충전이 되는 기능입니다.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Membership;