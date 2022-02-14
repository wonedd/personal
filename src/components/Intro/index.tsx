import { Container, Main, Title, Cta, SubTitle } from './styles'
import { Logo } from '../Logo'

export function Intro() {

  return (
    <Container>
      <Main>
        <div>
        <Title><strong>Hi, I'm Marcos.</strong></Title>
        <SubTitle>web developer also writer and a cat lover</SubTitle>
        </div>
        <Cta>VIEW PORTFOLIO</Cta>
      </Main>
      
    </Container>
  )
}