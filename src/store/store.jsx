import React, { Component, useState } from 'react';
import Footer from "../footer";
import styles from "./store.module.css";


function Store() {
    const selectList = ["시/도", "서울특별시", "인천광역시", "대전광역시", "광주광역시", "대구광역시", "울산광역시", "부산광역시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상북도", "경상남도", "제주도"];
    const [Selected, setSelected] = useState("");

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };
    return (
        <div>
            <div className={styles.contents_wrap}>
                <div className={styles.customer_fix}>
                    <img src={require("../images/customer_fix.png")} />
                </div>
                <div className={styles.contents}>
                    <div className={styles.menu_list}>
                        <ul className={styles.banner_list01}>
                            <li><img src={require("../images/Search_store_on.gif")} /></li>
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
                            Home &gt; Store  &gt; 매장검색
                        </div>
                        <h2>
                            <img src={require("../images/Search_store_title.jpg")} />
                        </h2>
                        <div className={styles.store_view}>
                            <div className={styles.store_map}>
                                <img src={require("../images/map_search.gif")} />
                            </div>
                            <div className={styles.store_detail}>
                                <p>
                                    <img src={require("../images/map_search_small.gif")} />

                                </p>
                                <ul>
                                    <li>
                                        <strong >지역검색</strong>
                                    </li>
                                    <li>
                                        <select onChange={handleSelect} value={Selected} className={styles.select_box01}>
                                            {selectList.map((item) => (
                                                <option value={item} key={item}>
                                                    {item}
                                                </option>
                                            ))}
                                        </select>
                                    </li>
                                    <li>
                                        <select className={styles.select_box02}>
                                            <option value="">구/군</option>
                                        </select>
                                    </li>
                                    <li className={styles.map_search} >
                                        <strong >매장검색</strong>
                                    </li>
                                    <li className={styles.map_search_btn}>
                                        <input type="text" className={styles.search_info} />
                                        <a href=''>검색</a>
                                    </li>
                                    <li>
                                        <p>
                                            <strong >서비스별 매장검색</strong>
                                        </p>
                                        <ul className={styles.store_service}>
                                            <li>
                                                <img src={require("../images/img_store01.gif")} />
                                                <div>
                                                    <input type="checkbox" />
                                                    <label>DT 매장</label>
                                                </div>
                                            </li>
                                            <li>
                                                <img src={require("../images/img_store02.gif")} />
                                                <div>
                                                    <input type="checkbox" />
                                                    <label>테라스</label>
                                                </div>
                                            </li>
                                            <li>
                                                <img src={require("../images/img_store06.gif")} />
                                                <div>
                                                    <input type="checkbox" />
                                                    <label>24시간</label>
                                                </div>
                                            </li>
                                            <li>
                                                <img src={require("../images/img_store04.gif")} />
                                                <div>
                                                    <input type="checkbox" />
                                                    <label>흡연시설</label>
                                                </div>
                                            </li>
                                            <li>
                                                <img src={require("../images/img_store08.png")} />
                                                <div>
                                                    <input type="checkbox" />
                                                    <label>주차</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className={styles.precautions}>
                            * 할리스 전 매장에서 무선인터넷 서비스 이용이 가능합니다 (단, 휴게소 및 특수매장 제외)
                        </p>
                        <div className={styles.tableType}>
                            <table>
                                <colgroup>
                                    <col width="13%" />
                                    <col width="18%" />
                                    <col width="9%" />
                                    <col width="26%" />
                                    <col width="16%" />
                                    <col width="18%" />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th scope='col'>지역</th>
                                        <th scope='col'>매장명</th>
                                        <th scope='col'>현황</th>
                                        <th scope='col'>주소</th>
                                        <th scope='col'>매장 서비스</th>
                                        <th scope='col'>전화번호</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className={styles.table_line}>경기 고양시 덕양구</td>
                                        <td className={styles.table_line}>원흥역점</td>
                                        <td className={styles.table_line}>영업중</td>
                                        <td className={styles.table_line}>경기 고양시 덕양구 권율대로 690 원흥동 635번지 201동 108호~111호</td>
                                        <td className={styles.table_line}>
                                            <img src={require("../images/img_store08.png")} width="16px" height="16px" />
                                        </td>
                                        <td className={styles.table_line}>.</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table_line}>제주 제주시</td>
                                        <td className={styles.table_line}>제주도두해안DT점</td>
                                        <td className={styles.table_line}>영업중</td>
                                        <td className={styles.table_line}>제주특별자치도 제주시 도두일동 1686 .</td>
                                        <td className={styles.table_line}>
                                            <img src={require("../images/img_store01.gif")} width="16px" height="16px" />
                                            <img src={require("../images/img_store02.gif")} width="16px" height="16px" />
                                            <img src={require("../images/img_store08.png")} width="16px" height="16px" />
                                        </td>
                                        <td className={styles.table_line}>064-745-7301</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table_line}>부산 북구</td>
                                        <td className={styles.table_line}>부산화명점</td>
                                        <td className={styles.table_line}>영업중</td>
                                        <td className={styles.table_line}>	부산광역시 북구 금곡대로285번길 13 (화명동, 스포렉스) 스포렉스 106호,107호,108호</td>
                                        <td className={styles.table_line}>
                                            <img src={require("../images/img_store08.png")} width="16px" height="16px" />
                                        </td>
                                        <td className={styles.table_line}>070-8884-1101</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table_line}>광주 북구</td>
                                        <td className={styles.table_line}>광주북구청점</td>
                                        <td className={styles.table_line}>영업중</td>
                                        <td className={styles.table_line}>광주광역시 북구 서방로 2 (중흥동) .</td>
                                        <td className={styles.table_line}></td>
                                        <td className={styles.table_line}>062-511-8002</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table_line}>강원 홍천군</td>
                                        <td className={styles.table_line}>(상)홍천휴게소R점</td>
                                        <td className={styles.table_line}>영업중</td>
                                        <td className={styles.table_line}>강원도 홍천군 화촌면 서울양양고속도로 83 .</td>
                                        <td className={styles.table_line}>
                                            <img src={require("../images/img_store08.png")} width="16px" height="16px" />
                                        </td>
                                        <td className={styles.table_line}>010-4668-2505</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table_line}>부산 부산진구</td>
                                        <td className={styles.table_line}>부산시민공원점</td>
                                        <td className={styles.table_line}>영업중</td>
                                        <td className={styles.table_line}>부산 부산진구 시민공원로 73, 푸드코트피크닉 범전동 200</td>
                                        <td className={styles.table_line}>
                                            <img src={require("../images/img_store08.png")} width="16px" height="16px" />
                                        </td>
                                        <td className={styles.table_line}>.</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table_line}>충남 홍성군</td>
                                        <td className={styles.table_line}>충남도청점</td>
                                        <td className={styles.table_line}>영업중</td>
                                        <td className={styles.table_line}>충청남도 홍성군 홍북읍 신경리 553 .</td>
                                        <td className={styles.table_line}>
                                            <img src={require("../images/img_store08.png")} width="16px" height="16px" />
                                        </td>
                                        <td className={styles.table_line}>041-631-4725</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table_line}>경기 성남시 중원구</td>
                                        <td className={styles.table_line}>성남모란역점</td>
                                        <td className={styles.table_line}>영업중</td>
                                        <td className={styles.table_line}>경기도 성남시 중원구 성남대로1148번길 8 1층, 성남동 3453</td>
                                        <td className={styles.table_line}></td>
                                        <td className={styles.table_line}>031-758-5953</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table_line}>서울 강남구</td>
                                        <td className={styles.table_line}>강남역2점</td>
                                        <td className={styles.table_line}>영업중</td>
                                        <td className={styles.table_line}>서울특별시 강남구 강남대로 422 (역삼동) 역삼동816,816-7,816-8</td>
                                        <td className={styles.table_line}>
                                            <img src={require("../images/img_store02.gif")} width="16px" height="16px" />
                                            <img src={require("../images/img_store06.gif")} width="16px" height="16px" />
                                            <img src={require("../images/img_store08.png")} width="16px" height="16px" />
                                        </td>
                                        <td className={styles.table_line}>02-568-9056</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.table_line}>서울 용산구</td>
                                        <td className={styles.table_line}>숙대입구점</td>
                                        <td className={styles.table_line}>영업중</td>
                                        <td className={styles.table_line}>서울특별시 용산구 청파로 276 (청파동2가) 2층~3층 할리스</td>
                                        <td className={styles.table_line}>
                                            <img src={require("../images/img_store08.png")} width="16px" height="16px" />
                                        </td>
                                        <td className={styles.table_line}>02-704-9636</td>
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
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Store;