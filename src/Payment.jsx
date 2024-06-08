import { StyledButton,StyledLink } from "./Components"

const Payment = () => {
    const style = {
        display:'flex',
        flexDirection:'column',
        height:'100vh',
        justifyContent:'center',
        alignItems:'center'
    }
  return (
    <div className="pay_container" style={style}>
      You gotta pay:0$
      <StyledButton>Pay</StyledButton>
      <StyledLink to="/">Go Back Home</StyledLink>
    </div>
  )
}

export default Payment
