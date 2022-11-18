import React, { Component } from 'react';
import Footer from "../footer";
import styles from "./hollysis.module.css";


function Hollysis() {
    return (
        <div>
            <div className={styles.contents_wrap}>
                <div className={styles.customer_fix}>
                    <img src={require("../images/customer_fix.png")} />
                </div>
                <div className={styles.contents}>
                    <div className={styles.menu_list}>
                        <ul className={styles.banner_list01}>
                            <li><img src={require("../images/hollys_on.gif")} /></li>
                            <li className={styles.tea}>
                                <img src={require("../images/hollys_info.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/hollys_info_on.gif")} />
                                </ul>
                            </li>
                            <li className={styles.tea}>
                                <img src={require("../images/recruitment.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/recruitment_on.gif")} />
                                </ul>
                            </li>
                            <li className={styles.tea}>
                                <img src={require("../images/procedure.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/procedure_on.gif")} />
                                </ul>
                            </li>
                            <li className={styles.tea}>
                                <img src={require("../images/b2b_business.gif")} />
                                <ul className={styles.tea_on}>
                                    <img src={require("../images/b2b_business_on.gif")} />
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
                            Home &gt; HOLLYS is &gt; HOLLYS &gt; About HOLLYS
                        </div>
                        <h2>
                            <img src={require("../images/about_hollys.gif")} />
                        </h2>
                        <div>
                            <div className={styles.about_hollys_img}>
                                <ul className={styles.hidden}>
                                    <li>
                                        커피의 즐거움을 만드는<br />
                                        <strong>'작은 차이의 미학'</strong>
                                    </li>
                                    <li>
                                        할리스는 ‘의미 있는 작은 차이가 <br />
                                        평범함과 특별함을 가르는 기준이 된다’고 생각합니다.
                                    </li>
                                </ul>
                            </div>
                            <p className={styles.about_hollys_explain01}>
                                다양한 토양과 기후에서 자란 커피 원두는 그 속에 각기 다른 맛과 향의 비밀을 숨기고 있습니다.
                                <br />
                                생두를 로스팅하여 에스프레소를 만드는 과정은 단순하고 평범해 보이지만, 사실은 로스팅과 추출법 등의 미묘하고 작은 차이가
                                <br />
                                커피 맛을 변화시킵니다.
                                <br /><br />
                                원두에 숨겨진 이러한 커피의 비밀을 하나 하나 밝혀가면서 많은 사람들이 커피와 함께 소중한 순간을 즐기도록 해주는 것이
                                <br />
                                바로 할리스가 추구하는 ‘커피의 즐거움’입니다.
                                <br /><br />
                                오늘도 할리스는 전세계의 커피 산지를 연구하고, 원두 본연의 맛을 살리기 위한 수많은 블랜딩을 개발하는 등 다양한
                                <br />
                                노력을 지속하고 있습니다. 커피가 주는 아름다움을 보다 많은 고객들이 즐길 수 있도록, 매 순간 의미 있는 작은 차이를
                                <br />
                                만들어가는 할리스가 되겠습니다.
                            </p>
                            <div className={styles.about_hollys_explain02}>
                                <h3>하나, 커피를 알아가는 즐거움</h3>
                                <p className={styles.floatleft}>
                                    세상에 같은 사람이 존재할 수 없듯이 똑같은 원두도 존재하지 않습니다.
                                    숙련된 바리스타는 산지에 따라 각기 다른 원두의 비밀을 밝혀내고 고객의 입맛과 성향을 이해한 후 자신만의 커피 미학으로 섬세하게 커피를 내립니다. 그 결과 커피가 줄 수 있는 최상의 즐거움을 제공합니다.
                                    <br /><br />
                                    이 즐거움을 위해 할리스는 1998년 국내 최초 에스프레소 커피 전문점의 문을 연 이래 지속적으로 커피 시장을 이끄는 새로운 시도를 해왔습니다.
                                    할리스연구소에서는 국제공인인증 커피 감별사인 큐그레이더가 커핑 테스트를 통해 생두를 엄선하고, 자체 로스팅 공장에서는 각 원산지의 특성을 고려한 프로파일로 로스팅하여 맛의 차이를 만듭니다.
                                    <br /><br />
                                    더불어 원두를 태워 강한 맛을 내는 강배전 로스팅으로 그저 진하기만 한 커피를 만드는 대신, 할리스 고유의 로스팅 기법과 더블샷을 적용하여
                                </p>
                                <p className={styles.floatright}>
                                    원두 고유의 풍부한 향미를 살리고 있습니다. 이로써 할리스는 모두의 일상 깊숙이 들어온 커피 한 잔의 가치를 높입니다.
                                    <br /><br />
                                    또한 2011년 업계 최초로 학원 인가를 취득, 운영 중인 할리스 아카데미는 많은 커피 애호가 및 창업 희망자를 위한 프로그램으로 수준 높은 커피 문화를 만드는 데 기여하고 있습니다.
                                    <br /><br />
                                    지식은 쉽게 얻지만, 지혜를 얻는 데는 시간이 필요한 법입니다.
                                    1998년 이후 이렇듯 성실하게 한 길만 걸으며 체득한 커피에 대한 지혜는 무엇과도 바꿀 수 없는 할리스의 소중한 자산임을 자부합니다.
                                </p>
                            </div>
                            <div className={styles.about_hollys_img02}>
                                <img src={require("../images/about_hollys_img02.jpg")} />
                            </div>
                            <div className={styles.about_hollys_explain02}>
                                <h3>둘, 커피를 함께하는 즐거움</h3>
                                <p className={styles.floatleft}>
                                    커피는 혼자 즐길 때, 또는 사람들과 함께 할 때 각기 다른 즐거움을 줍니다. 할리스에서는 친구, 연인, 가족과 함께 일상 속 즐거운 순간들을 만끽하셔도 좋고, 가끔은 혼자만의 시간을 누리셔도 좋습니다. 이를 위해 할리스는 편안하고 여유로운 공간에 그 이상의 가치를 담으려 다양한 노력을 하고 있습니다.
                                    <br /><br />
                                    할리스는 강연 프로그램인 ‘School in HOLLYS’를 여는 등 점차 문화와 예술의 공간으로 확장되고 있습니다. 책을 가까이 즐길 수 있는 합정 북카페 매장, 자연과 어우러져 이색적인 풍경을 즐길 수 있는 부산 달맞이 매장과 경주 보불로 매장 등은 새로운 공간으로의 변화를 시도하는 할리스의 열정과 의지를 보여줍니다.
                                </p>
                                <p className={styles.floatright}>
                                    공간뿐만 아니라 커피와 어우러져 즐거움을 주는 요소로서 엄선된 재료로 만든 다양한 디저트 메뉴 또한 할리스의 자랑입니다. 100% 국내산 고구마와 고흥 유자 등의 과일, 마다가스카르산 바닐라, 스리랑카산 딤블라 홍차 등 커피와 어우러지는 디저트의 재료 역시 커피 원두만큼 깐깐하게 관리되기에 믿을 수 있습니다.
                                    <br />
                                    이 디저트들은 개발단계에서부터 할리스의 음료와의 조화로움을 염두에 둔 덕분에 함께할 때 더욱 풍부한 맛을 즐기실 수 있습니다.
                                    <br /><br />
                                    이처럼 할리스는 고객님께 최고의 즐거움과 특별함을 선사하기 위한 노력을 멈추지 않을 것입니다. 특별함을 위한 작은 차이는 이러한 노력에서 비롯됩니다.
                                </p>
                            </div>
                            <div className={styles.about_hollys_img03}>
                                <img src={require("../images/about_hollys_img03.jpg")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Hollysis;