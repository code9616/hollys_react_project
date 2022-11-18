import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Main from './main/main';
import Menu from './menu/menu';
import Hollysmall from './hollysmall/hollysmall';
import Membership from './membership/membership';
import Hollysnews from './hollysnews/hollysnews';
import Store from './store/store';
import Hollysis from './hollysis/hollysis';

import $ from 'jquery';



//yarn add react-router-dom@5


function App(props) {
  // $(document).ready(function () {
  //   var i = 1;//상태의 초기값
  //   $('.main_mn').mouseenter(function () {
  //     if (i == 1) {
  //       $('#submn_area').stop().css({ height: '0px' }).animate({ height: '250px' }, 1500);
  //       i = 0;//초기값을 수정(작동중지)
  //     }
  //   });
  //   $('#submn_area').stop().mouseleave(function () {
  //     i = 1 //초기값수정(작동실행)  
  //     $('#submn_area').css({ height: '250px' }).animate({ height: '0px' }, 500);
  //   })
  // });
  var content = props.content;

  var handleClick = props.onClick;
  return (
    <div className='wrap'>
      <div className='header'>
        <div className='headerInner'>
          <h1>
            {/* <Link to=''></Link> */}
            <Link to='/main/main'>
              <img src={require("./images/hollys_logo.gif")} />
            </Link>
          </h1>
          <ul className='util'>
            <li>
              <Link to=''>
                <img src={require("./images/util_login.gif")} />
              </Link>
            </li>
            <li>
              <a href=''></a>
              <img src={require("./images/util_join.gif")} />
            </li>
            <li>
              <a href=''></a>
              <img src={require("./images/util_center.gif")} />
            </li>
            <li>
              <a href=''></a>
              <img src={require("./images/util_english.gif")} />
            </li>
            <li className='lineEnd'>
              <a href=''></a>
              <img src={require("./images/util_chinese.gif")} />
            </li>
          </ul>
          <ul className='quickBanner'>
            <li>
              <a href=''></a>
              <img src={require("./images/banner_menu01.png")} />
            </li>
            <li>
              <a href=''></a>
              <img src={require("./images/banner_menu02.png")} />
            </li>
          </ul>
          <ul className='main_Banner dropdown'>
            <div className='dropdown_content'>
              <div className='dropdown_dep1'>
                <ul className='menu_list'>
                  <li><a href=''>COFFEE</a></li>
                  <li><a href=''>라떼 · 초콜릿 · 티</a></li>
                  <li><a href=''>할리치노 · 빙수</a></li>
                  <li><a href=''>스파클링</a></li>
                  <li><a href=''>푸드</a></li>
                  <li><a href=''>MD상품</a></li>
                  <li><a href=''>MD식품</a></li>
                </ul>
                <ul className='menu_list'>
                  <li><a href=''>할리스콘</a></li>
                  <li><a href=''>할리스카드</a></li>
                  <li><a href=''>E-Store</a></li>
                  <li><a href=''>구매내역</a></li>
                </ul>
                <ul className='menu_list'>
                  <li><a href=''>스마트오더</a></li>
                  <li><a href=''>멤버십 혜택</a></li>
                </ul>
                <ul className='menu_list'>
                  <li><a href=''>Notice</a></li>
                  <li><a href=''>Event</a></li>
                </ul>
                <ul className='menu_list'>
                  <li><a href=''>매장검색</a></li>
                </ul>
                <ul className='menu_list'>
                  <li><a href=''>HOLLYS</a></li>
                  <li><a href=''>할리스 위치 및 연락처</a></li>
                  <li><a href=''>채용 안내</a></li>
                  <li><a href=''>가맹문의 및 절차</a></li>
                  <li><a href=''>B2B 사업 소개</a></li>
                </ul>
              </div>
            </div>
            <div className='main_Banner_list'>
              <li>
                <Link to='/menu/menu'>
                  Menu
                </Link>
                <span>메뉴</span>
              </li>
              <li>
                <Link to='/hollysmall/hollysmall'>
                  HOLLYS Mall
                </Link>
                <span>할리스 몰</span>
              </li>
              <li>
                <Link to='/membership/membership'>
                  Membership
                </Link>
                <span>멤버십</span>
              </li>
              <li>
                <Link to='/hollysnews/hollysnews'>
                  HOLLYS News
                </Link>
                <span>이벤트 및 공지</span>

              </li>
              <li>
                <Link to='/store/store'>
                  Store
                </Link>
                <span>매장</span>

              </li>
              <li>
                <Link to='/hollysis/hollysis'>
                  HOLLYS is
                </Link>
                <span>할리스 소개</span>

              </li>
            </div>
          </ul>
        </div>
      </div>
      <div>
        <Route path="/main/main" exact={true} component={Main} />
      </div>
      <div>
        <Route path="/" exact={true} component={Main} />

      </div>
      <div>
        <Route path="/menu/menu" component={Menu} />
        <Route path="/hollysmall/hollysmall" component={Hollysmall} />
        <Route path="/membership/membership" component={Membership} />
        <Route path="/hollysnews/hollysnews" component={Hollysnews} />
        <Route path="/store/store" component={Store} />
        <Route path="/hollysis/hollysis" component={Hollysis} />
      </div>
    </div>
  );
}

export default App;
