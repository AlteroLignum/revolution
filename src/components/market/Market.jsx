import React, { useEffect, useState } from 'react'
import cl from './Market.module.css'
import axios from 'axios'
import CoinRow from './CoinRow'
import Pagination from './Pagination'

const Market = () => {

  const[coin,setCoin] = useState([])
  const[currentPage,setCurrentPage] = useState(1)
  const[postPage,setPostPage] = useState(10)

  let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=rub&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'

  useEffect(() => {
    async  function getData() {
      const response = await axios.get(url)
      setCoin(response.data)
    }
    
    getData()
  },[])


  const lastPostIndex = currentPage * postPage
  const firstPostIndex = lastPostIndex - postPage
  const currentPosts = coin.slice(firstPostIndex,lastPostIndex)

  return (
    <div className={cl.market} id='market'>
      <p className={cl.crypto}>Рынок криптовалют</p>
      <div className={cl.table_title}>
        <div className={cl.table_row}>
          <div className={cl.coin}>Криптовалюта</div>
          <div className={cl.price}>Цена</div>
          <div className={cl.change}>Суточное изменение</div>
          <div className={cl.capitalization}>Рыночная капитализация</div>
        </div>
        <div>
          <CoinRow coin={currentPosts}/>
          <Pagination totalPost={coin.length} postPage={postPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
      </div>
    </div>
  )
}

export default Market