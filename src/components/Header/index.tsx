import { Container, Nav } from './styles'
import { Logo } from '../Logo'

export function Header (){

  return(
    <Container>
        <Logo />
      <Nav>
        <a>WORK</a>
        <a>CONTACT</a>
        <a>STORE</a>
        <a>ARTICLES</a>
      </Nav>      
    </Container>
  )
}