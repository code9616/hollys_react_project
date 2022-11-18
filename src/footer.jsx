import React from "react";
import styles from './footer.module.css';

function footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerInner}>
                <div className={styles.Inner}>
                    <a href=""><b>개인정보처리방침</b></a>
                    <a href="">서비스이용약관</a>
                    <a href="">멤버십이용약관</a>
                    <a href="">할리스카드이용약관</a>
                    <a href="">고객문의</a>
                    <a href="">고객설문</a>
                    <a href="">사이트맵</a>
                    <a href="" className={styles.last}>BI 소개</a>
                    <p className={styles.address}>
                        법인명: (주) 케이지할리스에프앤비 대표자: 이종현
                        사업자등록번호 211-87-61044 통신판매업: 제2019-서울종로-0193호
                        <br />
                        주소 : 서울특별시 중구 통일로 92, 9층(순화동, 케이지타워)
                        대표전화 : 02-2188-7100 (가맹문의 : 02-6350-7229)
                    </p>
                    <p className={styles.endline}>
                        COPYRIGHT (C) KG HOLLYS F&B. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default footer;
