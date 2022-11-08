import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useParams,Link} from 'react-router-dom'

function Country() {
  const {name} = useParams()
  const [loaded,setLoaded] = useState(false)
  const [country,setCountry] = useState({})

  useEffect(()=>{
    axios.get(`https://restcountries.com/v2/alpha/${name}`).then((response) => {
        setCountry(response.data)
        setLoaded(true)
    }).catch((e)=>{
        console.log(e);
        console.log("haha")
    });

  },[name])

  console.log(country)
  if(!loaded){
    return "Loading"
  }else if(loaded){
    return(
    <div className='con-sin'>
      <Link to="/">
        <div className='back'>
          Back
        </div>
      </Link>    

      <div className='country-sin'>
        <img src={country.flags.png} alt="no img"/>
        <div className='country-details-sin'>
            <h2>{country.name}</h2>
            <div className='country-info'>
                <div className='details-1'>
                  <div><b>Native name:</b>{country.nativeName}</div>
                  <div><b>Population:</b>{country.population}</div>
                  <div><b>Region:</b>{country.region}</div>
                  <div><b>Sub region:</b>{country.subregion}</div>
                  <div><b>Capital:</b>{country.capital}</div>
                </div>
                <div className="details-2">
                <div><b>Top level domain:</b>{country.topLevelDomain[0]}</div>
                <div><b>Currencies:</b>{country.currencies[0].name}</div>
                <div><b>Languages:</b>{country.languages.map((lan)=>{
                  return lan.name + " "
                })}</div>
                </div>
            </div>
            <div className='border-cou'>
              <p>Border countries: </p>
              <div className='borders'>
              {country.borders?.map((bor)=>{
                return(
                  <Link to={`/country/${bor}`}>
                    <div>
                    {bor}
                  </div>
                  </Link>
                )
              })}
              </div>
            </div>
        </div>
      </div>  
    </div>
  )
    }
}

export default Country