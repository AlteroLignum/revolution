import React from 'react'
import cl from './Market.module.css'
import CoinCrypto from './CoinCrypto'

const CoinRow = ({ coin }) => {
    return (
        <>
            {
                coin.map((item, index) => {
                    return (
                        <CoinCrypto
                            key={index}
                            name={item.name}
                            image={item.image}
                            price={item.current_price}
                            change={item.price_change_percentage_24h}
                            capitalization={item.market_cap}
                        />
                    )
                })
            }
        </>

    )
}

export default CoinRow