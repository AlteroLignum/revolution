import React from 'react'
import cl from './Join.module.css'

const Join = () => {
  return (
    <div className={cl.join_us} id='join'>
        <div class={cl.join_text}>
                <h2>Присоединяйтесь к нам через<br/><span>Discord</span></h2>
                <p>Инвестируйте и управляйте всей вашей криптовалютой в одном месте.</p>
                <a rel="noreferrer" target="_blank" href="https://discord.com/">Присоединиться в Discord</a>
        </div>
    </div>
  )
}

export default Join