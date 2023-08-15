import React from 'react'
import cl from './LeftChoose.module.css'

const LeftChoose = () => {


    return (
        <div className={cl.left_choose}>
            <div className={cl.choose_box}>
                <i className="fa-solid fa-wallet"></i>
                <div className={cl.choose_text}>
                    <h4>Получите ваши собственные NFTS</h4>

                    <p>
                        Инвестируйте всю свою криптовалюту в одном месте на одной платформе.
                    </p>
                </div>
            </div>
            <div className={cl.choose_box}>
                <i className="fa-solid fa-pen-ruler"></i>
                <div className={cl.choose_text}>
                    <h4>Проанализируйте рынок для продажи</h4>

                    <p>
                        Разработайте свою личную стратегию покупки и продажи криптовалюты.
                    </p>
                </div>
            </div>
            <div className={cl.choose_box}>
                <i className="fa-solid fa-bolt"></i>
                <div className={cl.choose_text}>
                    <h4>Управляйте своей коллекцией криптовалют</h4>

                    <p>
                        Благодаря нам вы легко сможете продавать и покупать разные криптовалюты.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LeftChoose