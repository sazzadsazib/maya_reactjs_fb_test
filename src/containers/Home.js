import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';

const Image = styled.img`
`;

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
        <ul className="navcolor font8pt">
              <li className="li_l" ><a href="#/stream">প্রশ্নসমূহ</a></li>
              <li className="li_r"><a href="myQstream.html">আমার প্রশ্ন</a> <a href="#news">EN</a></li>
        </ul>
        <div className="mayacolor navstyle">
        <center> <Image className="mayaApaFix" src={require('../assets/woman_maya.png')}/> </center>
         <div className="font8pt colorwhite center_s">  স্বাস্থ্য, সামাজিক অথবা  আইনি , আপনার প্রতিদিনের যেকোনো সমস্যায় পরামর্শ নিয়ে  মায়া আপা আপনার  পাশে...</div>
         <center> <textarea className="textareastyle txt_center" rows="10" placeholder="আমার পেট ব্যথা কি করবো আপা?"></textarea>
                  <p className = "font8pt colorLightMaya mb-3p">ডিসক্লেইমার ।  গোপনীয়তা  ।  শর্তসমূহ</p> </center>

                 <center> <button type="button" className="bcircle "><p className="font8pt">পাঠিয়ে দিন </p></button> </center>
                 
         </div>
         <div id ="arti" className="colormayatext">
         <center> <h3 className="mypadd font16pt"><b>প্রবন্ধ পড়ুন</b>  </h3> </center>

          </div>


          <div className="bg-white navstyle">
  <Image src={require('../assets/article1.png')} width="100%"/> 

   <p className="font12pt notosans paddingfixLR"><b>ঘাড় ব্যাথা </b> </p>
   <p className="font12pt notosans paddingfixLR">ঘাড় ব্যথা করা বা ঘাড় নাড়াতে না পারা  একটি সাধারণ সমস্যা এবং সাধারণত এর ফলে বিচলিত হওয়ার মত কিছু হয়না। সচরাচর এটি ঘাড়ের নরম টিস্যু আহত হওয়ার কারণে হয়। ঘাড়ে ব্যাথা এবং ঘাড় নাড়াতে না পারার সমস্যাটি কয়েকদিনের মধ্যেই ভাল হতে শুরু করে</p>
</div>
<div className =""> &nbsp; </div>

   <div className="bg-white navstyle">
  <Image src={require('../assets/article1.png')} width="100%"/> 

   <p className="font12pt notosans paddingfixLR"><b>ঘাড় ব্যাথা </b> </p>
   <p className="font12pt notosans paddingfixLR">ঘাড় ব্যথা করা বা ঘাড় নাড়াতে না পারা  একটি সাধারণ সমস্যা এবং সাধারণত এর ফলে বিচলিত হওয়ার মত কিছু হয়না। সচরাচর এটি ঘাড়ের নরম টিস্যু আহত হওয়ার কারণে হয়। ঘাড়ে ব্যাথা এবং ঘাড় নাড়াতে না পারার সমস্যাটি কয়েকদিনের মধ্যেই ভাল হতে শুরু করে</p>
</div>
<div className =""> &nbsp; </div>
        
      </Container>
    );
  }
}
