import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect ,useState} from "react";

function Main(props) {
  const [countries,setCountries] = useState([])

  
  useEffect(()=>{
    if(props.search){
      axios.get(`https://restcountries.com/v2/name/${props.search}`).then((response) => {
      setCountries(response.data);
   }).catch((e)=>{
    console.log(e);
    setCountries([])
   });
    }else if(!props.search || countries.length<0){
      axios.get('https://restcountries.com/v2/all').then((response) => {
      setCountries(response.data);
   });
    }
  },[props.search])

  useEffect(()=>{
    axios.get(`https://restcountries.com/v2/region/${props.region}`).then((response) => {
      setCountries(response.data);
   })
  },[props.region])

  console.log(countries)
  console.log(props.region)
  return (
    <div className="container">
    {countries.map((country,i)=>{
      return(
        <Link to={`/country/${country.alpha3Code}`}>
        <div className="country" key={i}>
            <img src={country.flags.png} alt="no image"/>
            <div className="details">
              <h3>{country.name}</h3>
              <div className="detail"><span>Population:</span>{country.population}</div>
              <div className="detail"><span>Region:</span>{country.region}</div>
              <div className="detail"><span>Capital:</span>{country.capital}</div>
            </div>
        </div>
        </Link>
      )
    })}
    </div>
  );
}

export default Main;
