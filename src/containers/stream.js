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
              <li className="li_l" ><a href="/">ফেরত যান</a></li>
              <li className="li_r"><a href="/#arti">প্রবন্ধ</a> <a href="#news">EN</a></li>
        </ul>
         <h3 className="mayacolortext stream_style" >প্রশ্ন  সমূহ     </h3>
        
      </Container>
    );
  }
}
