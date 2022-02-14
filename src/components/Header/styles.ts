import styled from '@emotion/styled'
import { media } from '../../../shared/global';


export const Container = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  top:100px;
  width: 100%;

  h3{
    all:unset;
    font-size:1.2rem;
  }
  ${media.minlaptop}{
    gap:1rem;
    left:2%;  
  }

`;

export const Nav = styled.nav`
  display: flex;
  margin-top:20px;
  gap:2rem;
  a{
    cursor:pointer;
    &:hover{
      animation: MoveUpDown 1.2s linear infinite;
      filter:brightness(50%);
    }
  }
  ${media.minlaptop}{
   position:relative;
   right:2%;
  }
  
`;

