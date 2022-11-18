import React, { Component } from 'react';
import Footer from "../footer";
import styles from "./hollysmall.module.css";


function Hollysmall() {
    return (
        <div>
            <div className={styles.contents_wrap}>
                <div className={styles.customer_fix}>
                    <img src={require("../images/customer_fix.png")} />
                </div>
                <div className={styles.contents}>
                    <div className={styles.menu_list}>
                        <ul className={styles.banner_list01}>
                            <li><img src={require("../images/hollys_content_on.gif")} /></li>
                            <li className={styles.tea}>
                                <img src={require("../images/hollys_card.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/hollys_card_on.gif")} />
                                </ul>
                            </li>
                            <li className={styles.tea}>
                                <img src={require("../images/e-store.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/e-store_on.gif")} />
                                </ul>
                            </li>
                            <li className={styles.tea}>
                                <img src={require("../images/purchase.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/purchase_on.gif")} />
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
                            Home &gt; HOLLYS Mall &gt; 할리스콘
                        </div>
                        <h2>
                            <img src={require("../images/hollys_con.gif")} />
                        </h2>
                        <ul className={styles.mall_list}>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Winter_tiramisu_latte.png")} width="140px" height="127px" />
                                    <span className={styles.named}>윈터 티라미수 라떼</span>
                                </a>
                                <span className={styles.cost}> 6,300 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/EarlGrey_Chocolate_Milk.png")} width="140px" height="127px" />
                                    <span className={styles.named}>얼그레이 초코 밀크</span>
                                </a>
                                <span className={styles.cost}> 4,000 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Jeju_YoungTangerine_LemonTea.png")} width="140px" height="127px" />
                                    <span className={styles.named}>제주 영귤 레몬 티</span>
                                </a>
                                <span className={styles.cost}> 6,100 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Our_sweetpotato_latte.png")} width="140px" height="127px" />
                                    <span className={styles.named}>우리 고구마 라떼</span>
                                </a>
                                <span className={styles.cost}> 5,800 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Jeju_Matcha_Latte.png")} width="140px" height="127px" />
                                    <span className={styles.named}>제주 말차 라떼</span>
                                </a>
                                <span className={styles.cost}> 5,800 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Grilled_chicken_breast.png")} width="140px" height="127px" />
                                    <span className={styles.named}>할리스 그릴닭가슴살</span>
                                </a>
                                <span className={styles.cost}> 5,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/decaffeinated_vanilla.png")} width="140px" height="127px" />
                                    <span className={styles.named}>디카페인 바닐라 딜라이트 10T</span>
                                </a>
                                <span className={styles.cost}>6,700 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Sweetpotato_cheesecake.png")} width="140px" height="127px" />
                                    <span className={styles.named}>고구마 치즈 케이크</span>
                                </a>
                                <span className={styles.cost}>5,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Cookie_and_cream.png")} width="140px" height="127px" />
                                    <span className={styles.named}>부드러운 쿠키 앤 크림</span>
                                </a>
                                <span className={styles.cost}> 6,200 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Triple_chocolate_round.png")} width="140px" height="127px" />
                                    <span className={styles.named}>트리플 초코 라운드</span>
                                </a>
                                <span className={styles.cost}> 7,200 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Heart_pie.png")} width="140px" height="127px" />
                                    <span className={styles.named}>하트파이</span>
                                </a>
                                <span className={styles.cost}> 4,000 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Matcha_jalachino.png")} width="140px" height="127px" />
                                    <span className={styles.named}>제주 말차 할리치노</span>
                                </a>
                                <span className={styles.cost}>  6,300 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Basque_cheese.png")} width="140px" height="127px" />
                                    <span className={styles.named}>단호박 바스크 치즈</span>
                                </a>
                                <span className={styles.cost}> 7,200 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Chocolate_Whinnangsi.png")} width="140px" height="127px" />
                                    <span className={styles.named}>초콜릿 휘낭시에</span>
                                </a>
                                <span className={styles.cost}>  2,300 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Classic_Whinnangsi.png")} width="140px" height="127px" />
                                    <span className={styles.named}>클래식 휘낭시에</span>
                                </a>
                                <span className={styles.cost}>  2,300 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Delight_Cake.png")} width="140px" height="127px" />
                                    <span className={styles.named}>바닐라 딜라이트 케이크</span>
                                </a>
                                <span className={styles.cost}>  5,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Pouch_Americano.png")} width="140px" height="127px" />
                                    <span className={styles.named}>(파우치) 아메리카노 </span>
                                </a>
                                <span className={styles.cost}>  15,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Pouch_peach_earlgrey.png")} width="140px" height="127px" />
                                    <span className={styles.named}>(파우치) 복숭아얼그레이</span>
                                </a>
                                <span className={styles.cost}> 15,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Pouch_Vanilla_Delight.png")} width="140px" height="127px" />
                                    <span className={styles.named}>(파우치) 바닐라딜라이트</span>
                                </a>
                                <span className={styles.cost}>  17,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/DoubleBerryForest_CheeseCake.png")} width="140px" height="127px" />
                                    <span className={styles.named}>더블베리숲 치즈 케이크</span>
                                </a>
                                <span className={styles.cost}> 39,000 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/TripleBerry_Whipped_Cream.png")} width="140px" height="127px" />
                                    <span className={styles.named}>트리플 베리 생크림</span>
                                </a>
                                <span className={styles.cost}>  5,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Triple_chocolatecookies.png")} width="140px" height="127px" />
                                    <span className={styles.named}>트리플 초코 쿠키</span>
                                </a>
                                <span className={styles.cost}> 2,800 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/cranberrywhite_chocolatecookie.png")} width="140px" height="127px" />
                                    <span className={styles.named}>크랜베리 화이트 초코쿠키</span>
                                </a>
                                <span className={styles.cost}> 2,800 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/EarlGrey_ChiffonCake.png")} width="140px" height="127px" />
                                    <span className={styles.named}>얼그레이 쉬폰 케이크</span>
                                </a>
                                <span className={styles.cost}>  36,000 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/GreenTea_SandWafers.png")} width="140px" height="127px" />
                                    <span className={styles.named}>녹차 샌드 웨이퍼</span>
                                </a>
                                <span className={styles.cost}>  2,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Strawberry_SandWafers.png")} width="140px" height="127px" />
                                    <span className={styles.named}>딸기 샌드 웨이퍼</span>
                                </a>
                                <span className={styles.cost}> 2,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Milk_SandWafers.png")} width="140px" height="127px" />
                                    <span className={styles.named}>밀크 샌드 웨이퍼 </span>
                                </a>
                                <span className={styles.cost}>  2,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Soft_Jambongvor.png")} width="140px" height="127px" />
                                    <span className={styles.named}>소프트 잠봉뵈르</span>
                                </a>
                                <span className={styles.cost}>  6,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Hamcheese_scrambled_toast.png")} width="140px" height="127px" />
                                    <span className={styles.named}>햄치즈 스크램블 토스트</span>
                                </a>
                                <span className={styles.cost}> 4,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/EasyShake_Grain.png")} width="140px" height="127px" />
                                    <span className={styles.named}>이지쉐이크 그레인</span>
                                </a>
                                <span className={styles.cost}>  2,700 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/EasyShake_Choco.png")} width="140px" height="127px" />
                                    <span className={styles.named}>이지쉐이크 초코</span>
                                </a>
                                <span className={styles.cost}> 2,700 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/truffle_mushroom_soupbowl.png")} width="140px" height="127px" />
                                    <span className={styles.named}>트러플머쉬룸수프볼</span>
                                </a>
                                <span className={styles.cost}> 6,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Cream_cheese_scone.png")} width="140px" height="127px" />
                                    <span className={styles.named}>크림치즈스콘&딸기잼</span>
                                </a>
                                <span className={styles.cost}> 3,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Bacon_Potato_Denish.png")} width="140px" height="127px" />
                                    <span className={styles.named}>베이컨 포테이토 데니쉬</span>
                                </a>
                                <span className={styles.cost}>  4,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/CornCheese_Denish.png")} width="140px" height="127px" />
                                    <span className={styles.named}>콘 치즈 데니쉬</span>
                                </a>
                                <span className={styles.cost}>  4,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Doublechocolate_fatcaron.png")} width="140px" height="127px" />
                                    <span className={styles.named}>더블 초코 뚱카롱</span>
                                </a>
                                <span className={styles.cost}> 2,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Strawberry_cheesecake_fatcaron.png")} width="140px" height="127px" />
                                    <span className={styles.named}>딸기 치즈케익 뚱카롱</span>
                                </a>
                                <span className={styles.cost}> 2,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Vanilla_Delight_FatCaron.png")} width="140px" height="127px" />
                                    <span className={styles.named}>바닐라 딜라이트 뚱카롱</span>
                                </a>
                                <span className={styles.cost}> 2,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/NewYork_Cheesecake.png")} width="140px" height="127px" />
                                    <span className={styles.named}>뉴욕 치즈 케이크</span>
                                </a>
                                <span className={styles.cost}> 5,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/BELT_Club_Sandwich.png")} width="140px" height="127px" />
                                    <span className={styles.named}>BELT 클럽 샌드위치</span>
                                </a>
                                <span className={styles.cost}> 6,000 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/cranberry_chicken_sandwich.png")} width="140px" height="127px" />
                                    <span className={styles.named}>크랜베리 치킨 샌드위치</span>
                                </a>
                                <span className={styles.cost}> 6,000 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Grilled_Chicken_Salad.png")} width="140px" height="127px" />
                                    <span className={styles.named}>그릴드 치킨 샐러드</span>
                                </a>
                                <span className={styles.cost}> 6,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/dark_mascarpone_tiramis.png")} width="140px" height="127px" />
                                    <span className={styles.named}>진한 마스카포네 티라미스</span>
                                </a>
                                <span className={styles.cost}> 6,200 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Honey_baguetteball.png")} width="140px" height="127px" />
                                    <span className={styles.named}>허니 바게트볼</span>
                                </a>
                                <span className={styles.cost}> 6,300 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Crispy Bulgogi & Triple Cheese Chicken Quesadilla.png")} width="140px" height="127px" />
                                    <span className={styles.named}>바삭불고기&트리플치즈치킨 퀘사디아</span>
                                </a>
                                <span className={styles.cost}> 5,800 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Egg_mayo.png")} width="140px" height="127px" />
                                    <span className={styles.named}>에그마요</span>
                                </a>
                                <span className={styles.cost}> 4,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/souffle_omelet_rice.png")} width="140px" height="127px" />
                                    <span className={styles.named}>수플레 오믈렛 라이스</span>
                                </a>
                                <span className={styles.cost}> 6,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Cafe_Americano.png")} width="140px" height="127px" />
                                    <span className={styles.named}>카페아메리카노</span>
                                </a>
                                <span className={styles.cost}> 4,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Americano (Decaf blend)_small.png")} width="140px" height="127px" />
                                    <span className={styles.named}>디카페인 아메리카노</span>
                                </a>
                                <span className={styles.cost}> 4,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Caffe Latte (Decaf blend)_small.png")} width="140px" height="127px" />
                                    <span className={styles.named}>디카페인 카페라떼</span>
                                </a>
                                <span className={styles.cost}> 5,400 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Orange_carrot_juice.png")} width="140px" height="127px" />
                                    <span className={styles.named}>오렌지 당근 착즙 주스</span>
                                </a>
                                <span className={styles.cost}> 5,700 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Apple_beet_juice.png")} width="140px" height="127px" />
                                    <span className={styles.named}>사과 비트 착즙 주스</span>
                                </a>
                                <span className={styles.cost}> 5,700 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Peach_strawberry_crush.png")} width="140px" height="127px" />
                                    <span className={styles.named}>피치 딸기 크러쉬</span>
                                </a>
                                <span className={styles.cost}> 5,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Strawberry_smoothie.png")} width="140px" height="127px" />
                                    <span className={styles.named}>딸기 스무디</span>
                                </a>
                                <span className={styles.cost}> 6,300 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Strawberry_cheesecake_Halichino.png")} width="140px" height="127px" />
                                    <span className={styles.named}>딸기 치즈케익 할리치노</span>
                                </a>
                                <span className={styles.cost}> 6,100 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Mint_chocolatechip_Halichino.png")} width="140px" height="127px" />
                                    <span className={styles.named}>민트 초코칩 할리치노</span>
                                </a>
                                <span className={styles.cost}> 6,100 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Vanilla_Delight.png")} width="140px" height="127px" />
                                    <span className={styles.named}>바닐라 딜라이트</span>
                                </a>
                                <span className={styles.cost}> 5,800 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/ColdBrew_Delight.png")} width="140px" height="127px" />
                                    <span className={styles.named}>콜드브루 딜라이트</span>
                                </a>
                                <span className={styles.cost}> 6,200 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Col Brew_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>콜드브루 R</span>
                                </a>
                                <span className={styles.cost}>  4,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/ColdBrew_Latte_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>콜드브루라떼 R</span>
                                </a>
                                <span className={styles.cost}> 5,400 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Listretto_Delight_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>리스트레또<br />딜라이트 R</span>
                                </a>
                                <span className={styles.cost}> 5,800 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Premium_blend_Americano.png")} width="140px" height="127px" />
                                    <span className={styles.named}>프리미엄블렌드 아메리카노</span>
                                </a>
                                <span className={styles.cost}> 4,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Ristretto Delight_small.png")} width="140px" height="127px" />
                                    <span className={styles.named}>프리미엄블렌드 딥라떼</span>
                                </a>
                                <span className={styles.cost}> 5,400 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Cafe_latte_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>카페라떼 R</span>
                                </a>
                                <span className={styles.cost}>5,000 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/citron_chamomile_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>유자 캐모마일 R</span>
                                </a>
                                <span className={styles.cost}> 5,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Peach_EarlGrey_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>복숭아 얼그레이 R</span>
                                </a>
                                <span className={styles.cost}> 5,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Jeju_HallabongTangerineTea_R.jpg")} width="140px" height="127px" />
                                    <span className={styles.named}>제주한라봉감귤차R</span>
                                </a>
                                <span className={styles.cost}> 4,800 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Caramel_macchiato_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>카라멜마끼아또 R</span>
                                </a>
                                <span className={styles.cost}> 5,900 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Cafe_mocha_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>카페모카 R</span>
                                </a>
                                <span className={styles.cost}> 5,500 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Milktea_latte.jpg")} width="140px" height="127px" />
                                    <span className={styles.named}>밀크티라떼R</span>
                                </a>
                                <span className={styles.cost}> 5,800 원</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/White_chocolate_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>화이트초코R</span>
                                </a>
                                <span className={styles.cost}> 5,800 원</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Hollysmall;