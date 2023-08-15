import React, { useEffect, useState } from 'react'
import cl from './CoinCrypto.module.css'

const Pagination = ({totalPost,postPage,setCurrentPage,currentPage}) => {
    const[width,setWidth] = useState(window.innerWidth)
    
    
    // useEffect(() =>{
        
    //     const handleResize = (event) =>{
    //         setWidth(event.target.innerWidth)
    //     }
    //     window.addEventListener('resize',handleResize)
        
    // },[])
    
    if(width <670){
        totalPost = 50
    }
    let pages = []
    for(let i = 1; i <= Math.ceil(totalPost/postPage);i++){
        pages.push(i)
    }
  return (
    <div className={cl.pag_button}>
        {
            pages.map((item,index) => {
                return (
                    <button key={index}  className={item == currentPage ? '' : ''} onClick={() => setCurrentPage(item)}>{item}</button>
                )
            })
        }
    </div>
  )
}

export default Pagination