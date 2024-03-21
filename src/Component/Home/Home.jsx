import React,{useContext} from 'react'

export default function Home() {
    
  return (
    <div>
      {localStorage.getItem('name')?<h2 className='d-flex justify-content-center text-light' style={{marginTop:'10%'}}> Hi {localStorage.getItem('name')}</h2>:<h2 className=' d-flex justify-content-center text-light'  style={{marginTop:'10%'}}> You Are Not Allowed Please Login First</h2>}
    </div>
  );

}
