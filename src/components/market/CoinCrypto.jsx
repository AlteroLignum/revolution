import React from 'react'
import cl from './Market.module.css'

const CoinCrypto = ({ name, image, price ,change,capitalization}) => {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    return (
        <div className={cl.coin_item}>
            <img src={image} alt={name} className={cl.image}/>
            <p className={cl.table_name}>{name}</p>
            <p className={cl.table_price}>{'₽ ' + numberWithCommas(price?.toFixed(2))}</p>
            <p className={change>=0 ? cl.green : cl.red} >{change.toFixed(2) + '%'}</p>
            <p className={cl.table_capitalization}>{'₽ ' + numberWithCommas(capitalization?.toFixed(2))}</p>
        </div>
    )
}

export default CoinCrypto