import axios from "axios";
import { useEffect ,useState} from "react";

function Main() {
  const [countries,setCountries] = useState([])

  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
   });
  },[])

  console.log(countries)

  return (
    <div className="container">
    {countries.map((country,i)=>{
      return(
        <div className="country" key={i}>
            <img src={country.flags.png} alt="no image"/>
            <div className="details">
              <h3>{country.name.common}</h3>
              <div className="detail"><span>Population:</span>{country.population}</div>
              <div className="detail"><span>Region:</span>{country.region}</div>
              <div className="detail"><span>Capital:</span>{country.capital}</div>
            </div>
        </div>
      )
    })}
    </div>
  );
}

export default Main;
