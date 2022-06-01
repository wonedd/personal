import { useEffect, useState } from 'react'
import { Container, Content, Loader} from './styles'

export default function Waiting (){

  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const handleLoading = () =>{
      setTimeout(()=>{
        setIsLoading(false)
      }, 5000)
    }
    handleLoading();
  },[])
  return(
    <Container>
      <Content>
          {
            isLoading ? (
            <Loader />
            ):(
            <>
              <h1>Not yet.</h1>
              <iframe src="https://embed.lottiefiles.com/animation/96181" style={{border:'none'}} />
            </>
          )}
      </Content>
    </Container>
  )
}