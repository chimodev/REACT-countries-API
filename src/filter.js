import React,{useState} from 'react'
import Main from './main'

function Filter() {
  const [search,setSearch] = useState("")

  return (
    <>
    <div className='filters-con'>
        <input onChange={e=>setSearch(e.target.value)} type="text" placeholder="Search country by name..."/>
        <select>
            <option>Asia</option>
            <option>Americas</option>
            <option>Oceania</option>
            <option>Europe</option>
            <option>Africa</option>
        </select>
    </div>
    <Main search ={search}/>
    </>
  )
}

export default Filter