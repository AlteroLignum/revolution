import React from 'react'
import cl from './Choose.module.css'
import LeftChoose from './LeftChoose/LeftChoose'
import RightChoose from './RightChoose/RightChoose'

const Choose = () => {
  return (
    <div className={cl.main_choose} id='choose'>
        <p className={cl.whywe} >Почему вы <span className={cl.span}>должны выбрать нас?</span></p>
        <div className={cl.choosing_container}>
          <LeftChoose/>
          <div className={cl.choose_image}>
                    <img src="/images/Perfect.png" alt="Perfect app"/>
          </div>
          <RightChoose/>
        </div>

    </div>
  )
}

export default Choose