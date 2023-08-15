import React, { useEffect, useState } from 'react';
import cl from './Home.module.css'
import axios from 'axios'
import Coin from './Coin';

const Home = () => {
    const [currency,setCurrency] = useState([])
    
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=rub&ids=bitcoin%2Cethereum%2Ctether%2Ccardano&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'
    
    useEffect(() =>{
        axios.get(url)
        .then((response) =>{
            setCurrency(response.data)
            
        }).catch((error) =>{
            console.log(error)
        })
    },[])

    
    return (
        <>
            <section className={cl.logo} id="home">
                <img src="images\free-icon-bitcoin-7617064.png" alt="bitcoin " className={cl.bitcoin} />
                <section className={cl.title}>
                    <p>Продавайте и покупайте <br />
                        <span className={cl.span}>криптовалюту</span></p>
                </section>
                <img src="images\free-icon-ethereum-6001368.png" alt="etherium " className={cl.etherium} />
            </section>
            <section className={cl.currencies}>
                <Coin currency={currency}/> 
                
            </section>

        </>
    )
};

export default Home
