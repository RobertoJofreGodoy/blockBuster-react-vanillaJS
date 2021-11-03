import { Component } from "../lib/react/index.js"
import styled from "../lib/styled-components.js"
import WrapperStyled from "./wrapper.js"

const HeadeStyled = styled.header`
  background: #0e3fa9;
  margin-bottom: 2em;
  text-align: center;
`
const HeadeLogo = styled.img`
  width: 200px;
  position: relative;
  top: 20px;
  filter: drop-shadow(3px 3px 0 #f2a30c);
`

class Header extends Component {
  render() {
    return HeadeStyled({
      children: [
        WrapperStyled({
          children: HeadeLogo({ src: "./images/logo.png" }),
        }),
      ],
    })
  }
}

export default Header
