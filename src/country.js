import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {useParams,Link} from 'react-router-dom'

function Country() {
  const {name} = useParams()
  const [loaded,setLoaded] = useState(false)
  const [country,setCountry] = useState([])

  useEffect(()=>{
    axios.get(`https://restcountries.com/v2/name/${name}`).then((response) => {
        setCountry(response.data)
    }).catch((e)=>{
        console.log(e);
        console.log("haha")
    });

  },[])

  console.log(country)
  if(!country.length){
    return "Loading"
  }else{
    return(
    <div className='con-sin'>
      <Link to="/">
        <div className='back'>
          Back
        </div>
      </Link>    

      <div className='country-sin'>
        <img src={country[0].flags.png} alt="no img"/>
        <div className='country-details-sin'>
            <h2>{country[0].name}</h2>
            <div className='country-info'>
                <div className='details-1'>
                  <div><b>Native name:</b>{country[0].nativeName}</div>
                  <div><b>Population:</b>{country[0].population}</div>
                  <div><b>Region:</b>{country[0].region}</div>
                  <div><b>Sub region:</b>{country[0].subregion}</div>
                  <div><b>Capital:</b>{country[0].capital}</div>
                </div>
                <div className="details-2">
                <div><b>Top level domain:</b>{country[0].topLevelDomain[0]}</div>
                <div><b>Currencies:</b>{country[0].currencies[0].name}</div>
                <div><b>Languages:</b>{country[0].languages.map((lan)=>{
                  return lan.name + " "
                })}</div>
                </div>
            </div>
            <div className='border-cou'>
              <p>Border countries: </p>
              <div className='borders'>
              {country[0].borders.map((bor)=>{
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