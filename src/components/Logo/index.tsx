import { Icon } from './styles'

export function Logo (){

  return(
    <>
    <Icon>M</Icon>
    <div style={{width:'20px',height:'20px', border:'1px solid', position:'absolute',left:'-8px',borderRadius:'50%', animation:'circle 2s linear'}} />
    <div style={{width:'20px',height:'20px', border:'1px solid', position:'absolute',left:'38px',borderRadius:'50%',top:'30px', animation:'circle 3s linear'}} />
    </>
  )
}