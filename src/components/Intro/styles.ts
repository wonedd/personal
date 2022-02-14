import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  height:100%;
  
  font-family:'Comfortaa';
`;  

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  div{
    display: flex;
    flex-direction: column;
    gap:1rem;
  }
`;
export const Title = styled.div`
  font-family:'Comfortaa';
  color:#f7f7f7;
  
  font-size:2.5rem;
  letter-spacing:6px;

  cursor:no-drop;
  position: relative;
  width: max-content;

  h3{
    font-size:2.5rem;
    font-weight:300;
  }

  strong{
  &::before,
  &::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  }

  &::before {
  background: #474747;
  animation: typewriter 3s
  steps(24) 1s forwards;
}

  &::after {
  width: 0.125em;
  background: black;
  animation: typewriter 3s
  steps(24) 1s forwards,
  blink 750ms steps(24) infinite;
}
 
}
`;

export const SubTitle = styled.h3`
  color: hsl(0 0% 0% / 0.5);
  font-size: 2rem;
  font-weight: 400;
  opacity: 0;
  transform: translateY(3rem);
  animation: fadeInUp 5s ease forwards ; 
`;

export const Profile = styled.div`
  display: flex;
  img{
  width: 200px;
  }
`;

export const Cta = styled.button`
  all:unset;
  cursor: pointer;

  
  display: flex;
  padding:15px;
  border:2px solid #f7f7f7;
  transition:0.5s all;

  &:hover{
  background: linear-gradient(45deg, #474747,#515151,#403d39,#2222,#908E8E,#c1c1c1);
  background-size: 400% 400%;
  animation: mygradient 3s ease 1;
  border-color:rgba(0,0,0,0.0)
  
}

&:active {
  animation: grow 0.5s ease 1;
}
`;