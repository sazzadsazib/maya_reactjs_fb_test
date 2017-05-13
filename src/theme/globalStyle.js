import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
    width: 100%;
    background: cover;
}
* {
  margin: 0;
}

.navcolor {
	background-color: #b40c3f;
}


li a, .dropbtn {
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
    background-color: #cd144c;
}

li.dropdown {
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
    display: block;
}


.mypadd {
padding: 20px 10px 10px 10px  ;
}
a .mypadd {
padding: 0 10px 10px 10px  ;
}
body {
	font-family: 'Roboto', sans-serif;
	font-size: 12pt;
}
.mayacolor {
	background-color: #cd144c;
}
.navstyle{
	 box-shadow: 0 2px 2px rgba(0,0,0,0.40), 0 5px 5px rgba(0,0,0,0.15);

}
.dropshadowleftstyle{
	 box-shadow: 0 8px 2px  rgba(0,0,0,0.40), 0 5px 5px rgba(0,0,0,0.15);

}
.notosans {
	font-family: 'Noto Sans', sans-serif;
	padding: 20px,10px,10px,10px;
	margin-top: 10px;
	
}
.font12pt {
	font-size: 3.3vmin;
}
.colorwhite {
	color: #ffffff;
}
.colorLightMaya {
	color: #fb719a;
}
.textareastyle{
	background-color: #ffffff;
	color: #cd144c;
	width: 80%;
	height: 20%;
	margin-top: 20px;
	resize: none;
}

.font8pt {
	font-size: 2vmin;
}

.colorGreen {
	background-color: #31c63b;
}

.bcircle {
   padding: 30px 5px 30px 5px ;
  background-color: #31c63b;
  color: #ffffff;
  border-radius: 100px;
  margin-bottom: 30px;
}
.bcircle:hover {
  background-color: #19a523;
 
}
.colormayatext {
	color: #cd144c;
}
.font16pt{
	font-size: 16pt;
}

.colorgrey {
	background-color: #ededed;
}
.style1 {
color: #cd144c;
background-color: #cd144c;
height: 2px;
width: 70%;
}
.bg-white {
	background-color: #ffffff;
}
.logopaddingfix {
	margin-top: 20px;
	margin-bottom: 20px;
}
.stickkkey {
position: fixed;
left: 0;
bottom: 0;
margin-bottom: 0;
z-index: 998;
}
.stickkey {
position: fixed;
right: 0;
bottom: 0;
margin-bottom: 0;
z-index: 998
}
.stickeydiv {
	width: 100%;
	height: 50px;
	background-color:  #cd144c;
}
.iconpadding{
	margin-left: 2%;
	margin-top: 2%;
}
.mayatextcolor {
	color: #cd144c;
}
.blacktextcolor {
	color: #000000;
}

.paddingfixLR {
	padding-left: 5%;
	padding-right: 3%;
	margin-bottom: 20px;
	padding-bottom: 5%;
}

.li_l {
	float: left;
	padding-left: 20px;
}

.li_r {
	float: right;
	padding-left: 20px;
}

.mb-25px {
	margin-bottom: 25px;
}

.mayaApaFix {
	margin-top: 7%;
	width: 30%;
}

.center_s {
	text-align: center;
	padding: 5% 5% 5% 5%;
}

.txt_center {
	padding: 1% 1% 1% 1%;
	margin-bottom: 1%;

}

.txt-center {
	text-align: center;
}
.mb-3p {
	padding-bottom: 3%;
}

.center-button {
	margin-left: 40%;
}

.stream_style {
	margin-bottom: 2%;
	font-size: 4vmin;
}

.mayacolortext {
	color: #cd144c;
	text-align: center;
	margin-top: 20px;
}



`