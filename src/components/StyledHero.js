import styled from "styled-components"
import defaultImg from '../images/room-2.jpeg'



const teal = '#5c94b4'
const StyledHero = styled.header`
min-height: 60vh;
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`


export default StyledHero;