import React from 'react'
import cl from './RightChoose.module.css'

const RightChoose = () => {
    return (
        <div className={cl.right_choose}>
            <div className={cl.choose_box}>
                <i className="fa-solid fa-satellite-dish"></i>
                <div className={cl.choose_text}>
                    <h4>Подключите ваш биткоин кошелек</h4>

                    <p>
                        Используйте Exodus, Trust Wallet или Atomic Wallet,
                        чтобы подключиться к приложению.
                    </p>
                </div>
            </div>
            <div className={cl.choose_box}>
                <i className="fa-solid fa-chess-knight"></i>
                <div className={cl.choose_text}>
                    <h4>Выберите количество критовалюты</h4>

                    <p>
                        Загрузите свою криптовалюту и установите название, описание и цену.
                    </p>
                </div>
            </div>
            <div className={cl.choose_box}>
                <i className="fa-solid fa-boxes-stacked"></i>
                <div className={cl.choose_text}>
                    <h4>Подтвердите транзакцию</h4>

                    <p>
                        Зарабатывайте, продавая свою криптовалюту на нашем рынке.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RightChoose