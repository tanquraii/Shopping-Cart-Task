import "./App.css"
import { Navigation,StyledLink,StyledButton } from "./Components"
import { FancyText } from "./Components"
import Fetch from "./Fetch"
import Cart from "./Cart"
import { useState } from "react"
const Shop = () => {
  const [count,setCount] = useState(0);
  const [amount,setAmount] = useState(null);
  function increase(amount){
    setCount(count=>count+amount)
  }
  return (
    <div>
        <Navigation>
            <section>
                <StyledLink to="/">
                    Home    
                </StyledLink>
            </section>
            <section>
                <StyledLink to="cart">
                  Shopping cart
                </StyledLink>
            </section>
            <section>
                <StyledLink to="payment">
                  <Cart amount={count}/>
                </StyledLink>
            </section>
        </Navigation>
      <h1>This is Shop page of the shopping cart</h1>
      <FancyText>
        Our offers:
      </FancyText>
      <Fetch button={<StyledButton onClick={()=>increase(1)} value={count}>
        Add to cart
      </StyledButton>}/>
    </div>
  )
}

export default Shop
