import  { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledLink,FancyContainer} from './Components'; // Adjust the import path as needed
const Fetch = (props) => {
  const [responses, setResponses] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);
  useEffect(() => {
      const fetchProductData = async ()=> {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const responseData = response.data; // Axios automatically parses the JSON
        setResponses(responseData);
        setLoading(false);
        console.log(responseData);
        setError(false);
      } catch (error) {
        console.error('Error', error);
        setError(true);
      }
    }

    fetchProductData();  // Call the async function inside useEffect
  }, []);// Empty dependency array to trigger the effect only once


  if(loading) return <p>Loading....</p>
  if(error) return <p>An error has occured</p>
  return (
    <div className='container'>
      <FancyContainer>
        {responses.map((product)=>{
          return(
            <StyledLink to="#" key={product.id}>
              <img src={product.image} alt=""/>
              {product.title}
              {product.price}$
              <div className="input">
                <input type="text" placeholder='Input desired amount here...' value={props.amount}/>
                <button>Add</button>
              </div>
              {props.button}
            </StyledLink>
          )
        })}
      </FancyContainer>

    </div>
  );
};
//теперь каким то образом надо перевести количество которое я ввел тут в пропс карта, но я хз как типо тут сохранил валью
export default Fetch;

