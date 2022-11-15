import React,{useState} from 'react'
import Main from './main'

function Filter() {
  const [search,setSearch] = useState("")
  const [region,setRegion] = useState(null)

  return (
    <>
    <div className='filters-con'>
        <div className='filter'>
        <ion-icon name="search-outline"></ion-icon>
        <input onChange={e=>setSearch(e.target.value)} type="text" placeholder="Search country by name..."/>
        </div>
        <select onChange={e=>setRegion(e.target.value)} value={region} name='region' id='region'>
            <option value="none" selected disabled hidden>Filter by region:</option>
            <option value="Asia">Asia</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
        </select>
    </div>
    <Main search={search} region={region}/>
    </>
  )
}

export default Filter