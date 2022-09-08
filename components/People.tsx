import React from 'react'
import useStore from '../store/authStore'

const People = () => {
    const people = useStore((state:any)=>(state?.people))
  return (
    <div>
        <h3>We have {people.length} People in our store</h3>
        <ul>{people.map((data:any)=>(<li>{data}</li>))}</ul>
    </div>
    
  )
}

export default People