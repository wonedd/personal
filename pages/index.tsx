import { Container, Content } from '../shared/home.styles'
import { Header } from '../src/components/Header'
import { Intro } from '../src/components/Intro'

export default function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Intro />
      </Content>
    </Container>
  )
}