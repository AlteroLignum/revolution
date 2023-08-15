import React from 'react'
import cl from './Coin.module.css'

const CoinItem = (props) => {
    
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
  return (
    <div className={cl.preview}>
                <img src={props.coin.image} className={cl.image}/>
                <p>{props.coin.name}</p>
                <p className={props.coin.price_change_percentage_24h >= 0 ? cl.green : cl.red}>{props.coin.price_change_percentage_24h.toFixed(2) + '%'}</p>
                <span className={cl.home_network}>{'₽ ' + numberWithCommas(props.coin.current_price?.toFixed(2))}</span>
    </div>
  )
}

export default CoinItem