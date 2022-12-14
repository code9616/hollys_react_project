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
                            Home &gt; HOLLYS Mall &gt; ????????????
                        </div>
                        <h2>
                            <img src={require("../images/hollys_con.gif")} />
                        </h2>
                        <ul className={styles.mall_list}>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Winter_tiramisu_latte.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ???????????? ??????</span>
                                </a>
                                <span className={styles.cost}> 6,300 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/EarlGrey_Chocolate_Milk.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????? ?????? ??????</span>
                                </a>
                                <span className={styles.cost}> 4,000 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Jeju_YoungTangerine_LemonTea.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ?????? ?????? ???</span>
                                </a>
                                <span className={styles.cost}> 6,100 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Our_sweetpotato_latte.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ????????? ??????</span>
                                </a>
                                <span className={styles.cost}> 5,800 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Jeju_Matcha_Latte.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ?????? ??????</span>
                                </a>
                                <span className={styles.cost}> 5,800 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Grilled_chicken_breast.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ??????????????????</span>
                                </a>
                                <span className={styles.cost}> 5,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/decaffeinated_vanilla.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????? ????????? ???????????? 10T</span>
                                </a>
                                <span className={styles.cost}>6,700 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Sweetpotato_cheesecake.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ?????? ?????????</span>
                                </a>
                                <span className={styles.cost}>5,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Cookie_and_cream.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????? ?????? ??? ??????</span>
                                </a>
                                <span className={styles.cost}> 6,200 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Triple_chocolate_round.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ?????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 7,200 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Heart_pie.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????????</span>
                                </a>
                                <span className={styles.cost}> 4,000 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Matcha_jalachino.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ?????? ????????????</span>
                                </a>
                                <span className={styles.cost}>  6,300 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Basque_cheese.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ????????? ??????</span>
                                </a>
                                <span className={styles.cost}> 7,200 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Chocolate_Whinnangsi.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ????????????</span>
                                </a>
                                <span className={styles.cost}>  2,300 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Classic_Whinnangsi.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ????????????</span>
                                </a>
                                <span className={styles.cost}>  2,300 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Delight_Cake.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ???????????? ?????????</span>
                                </a>
                                <span className={styles.cost}>  5,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Pouch_Americano.png")} width="140px" height="127px" />
                                    <span className={styles.named}>(?????????) ??????????????? </span>
                                </a>
                                <span className={styles.cost}>  15,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Pouch_peach_earlgrey.png")} width="140px" height="127px" />
                                    <span className={styles.named}>(?????????) ?????????????????????</span>
                                </a>
                                <span className={styles.cost}> 15,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Pouch_Vanilla_Delight.png")} width="140px" height="127px" />
                                    <span className={styles.named}>(?????????) ?????????????????????</span>
                                </a>
                                <span className={styles.cost}>  17,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/DoubleBerryForest_CheeseCake.png")} width="140px" height="127px" />
                                    <span className={styles.named}>??????????????? ?????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 39,000 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/TripleBerry_Whipped_Cream.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ?????? ?????????</span>
                                </a>
                                <span className={styles.cost}>  5,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Triple_chocolatecookies.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ?????? ??????</span>
                                </a>
                                <span className={styles.cost}> 2,800 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/cranberrywhite_chocolatecookie.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????? ????????? ????????????</span>
                                </a>
                                <span className={styles.cost}> 2,800 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/EarlGrey_ChiffonCake.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????? ?????? ?????????</span>
                                </a>
                                <span className={styles.cost}>  36,000 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/GreenTea_SandWafers.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ?????? ?????????</span>
                                </a>
                                <span className={styles.cost}>  2,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Strawberry_SandWafers.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ?????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 2,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Milk_SandWafers.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ?????? ????????? </span>
                                </a>
                                <span className={styles.cost}>  2,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Soft_Jambongvor.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ????????????</span>
                                </a>
                                <span className={styles.cost}>  6,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Hamcheese_scrambled_toast.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ???????????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 4,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/EasyShake_Grain.png")} width="140px" height="127px" />
                                    <span className={styles.named}>??????????????? ?????????</span>
                                </a>
                                <span className={styles.cost}>  2,700 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/EasyShake_Choco.png")} width="140px" height="127px" />
                                    <span className={styles.named}>??????????????? ??????</span>
                                </a>
                                <span className={styles.cost}> 2,700 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/truffle_mushroom_soupbowl.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????????????????????</span>
                                </a>
                                <span className={styles.cost}> 6,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Cream_cheese_scone.png")} width="140px" height="127px" />
                                    <span className={styles.named}>??????????????????&?????????</span>
                                </a>
                                <span className={styles.cost}> 3,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Bacon_Potato_Denish.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ???????????? ?????????</span>
                                </a>
                                <span className={styles.cost}>  4,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/CornCheese_Denish.png")} width="140px" height="127px" />
                                    <span className={styles.named}>??? ?????? ?????????</span>
                                </a>
                                <span className={styles.cost}>  4,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Doublechocolate_fatcaron.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ?????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 2,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Strawberry_cheesecake_fatcaron.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ???????????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 2,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Vanilla_Delight_FatCaron.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ???????????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 2,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/NewYork_Cheesecake.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ?????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 5,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/BELT_Club_Sandwich.png")} width="140px" height="127px" />
                                    <span className={styles.named}>BELT ?????? ????????????</span>
                                </a>
                                <span className={styles.cost}> 6,000 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/cranberry_chicken_sandwich.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????? ?????? ????????????</span>
                                </a>
                                <span className={styles.cost}> 6,000 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Grilled_Chicken_Salad.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ?????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 6,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/dark_mascarpone_tiramis.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ??????????????? ????????????</span>
                                </a>
                                <span className={styles.cost}> 6,200 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Honey_baguetteball.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ????????????</span>
                                </a>
                                <span className={styles.cost}> 6,300 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Crispy Bulgogi & Triple Cheese Chicken Quesadilla.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????????&????????????????????? ????????????</span>
                                </a>
                                <span className={styles.cost}> 5,800 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Egg_mayo.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????????</span>
                                </a>
                                <span className={styles.cost}> 4,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/souffle_omelet_rice.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ????????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 6,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Cafe_Americano.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????????????????????</span>
                                </a>
                                <span className={styles.cost}> 4,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Americano (Decaf blend)_small.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????? ???????????????</span>
                                </a>
                                <span className={styles.cost}> 4,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Caffe Latte (Decaf blend)_small.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????? ????????????</span>
                                </a>
                                <span className={styles.cost}> 5,400 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Orange_carrot_juice.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ?????? ?????? ??????</span>
                                </a>
                                <span className={styles.cost}> 5,700 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Apple_beet_juice.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ?????? ?????? ??????</span>
                                </a>
                                <span className={styles.cost}> 5,700 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Peach_strawberry_crush.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ?????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 5,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Strawberry_smoothie.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 6,300 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Strawberry_cheesecake_Halichino.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ???????????? ????????????</span>
                                </a>
                                <span className={styles.cost}> 6,100 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Mint_chocolatechip_Halichino.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ????????? ????????????</span>
                                </a>
                                <span className={styles.cost}> 6,100 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Vanilla_Delight.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ????????????</span>
                                </a>
                                <span className={styles.cost}> 5,800 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/ColdBrew_Delight.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????? ????????????</span>
                                </a>
                                <span className={styles.cost}> 6,200 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Col Brew_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????? R</span>
                                </a>
                                <span className={styles.cost}>  4,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/ColdBrew_Latte_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????????????????? R</span>
                                </a>
                                <span className={styles.cost}> 5,400 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Listretto_Delight_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????????<br />???????????? R</span>
                                </a>
                                <span className={styles.cost}> 5,800 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Premium_blend_Americano.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????????????????? ???????????????</span>
                                </a>
                                <span className={styles.cost}> 4,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Ristretto Delight_small.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????????????????? ?????????</span>
                                </a>
                                <span className={styles.cost}> 5,400 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Cafe_latte_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????? R</span>
                                </a>
                                <span className={styles.cost}>5,000 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/citron_chamomile_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>?????? ???????????? R</span>
                                </a>
                                <span className={styles.cost}> 5,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Peach_EarlGrey_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????? ???????????? R</span>
                                </a>
                                <span className={styles.cost}> 5,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Jeju_HallabongTangerineTea_R.jpg")} width="140px" height="127px" />
                                    <span className={styles.named}>????????????????????????R</span>
                                </a>
                                <span className={styles.cost}> 4,800 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Caramel_macchiato_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>????????????????????? R</span>
                                </a>
                                <span className={styles.cost}> 5,900 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Cafe_mocha_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????? R</span>
                                </a>
                                <span className={styles.cost}> 5,500 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/Milktea_latte.jpg")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????????R</span>
                                </a>
                                <span className={styles.cost}> 5,800 ???</span>
                            </li>
                            <li>
                                <a href=''>
                                    <img src={require("../images/White_chocolate_R.png")} width="140px" height="127px" />
                                    <span className={styles.named}>???????????????R</span>
                                </a>
                                <span className={styles.cost}> 5,800 ???</span>
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