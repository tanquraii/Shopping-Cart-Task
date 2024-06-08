
import './App.css'
import { Navigation,StyledLink} from './Components'

function App() {
  return (
    <>
      <Navigation>
            <section>
              <StyledLink to="shop" $primary>
                Our offers
                
              </StyledLink>
            </section>
            <section>
                <StyledLink to="cart">
                  Shopping cart
                </StyledLink>
            </section>
        </Navigation>
      <h1>Welcome to the shopping cart project</h1>
    </>
  )
}

export default App
