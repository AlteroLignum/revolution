import React from 'react';
import cl from './Coin.module.css'
import CoinItem from './CoinItem';

const Coin =(props) => {
    
    
    return (
        <>  
            {props.currency.map(coin => {
                return(
                    <CoinItem coin={coin} key={coin.id}></CoinItem>
                )
            })

            }
        </>
    );
};

export default Coin;
