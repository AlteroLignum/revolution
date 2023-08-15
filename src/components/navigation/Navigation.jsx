import React, { useState } from 'react';
import cl from './Navigation.module.css'

const Navigation = () => {

    const [navigation, setNavigation] = useState(false)


    function updateMenu() {
        setNavigation(!navigation)
    }
    return (
        <>
            <header className={cl.header}>
                <div className={cl.logo}>Revolution</div>
                <ul>
                    <li><a href="#home" className={cl.gradient_font}>Главная</a></li>
                    <li><a href="#market" className={cl.gradient_font}>Маркет</a></li>
                    <li><a href="#choose" className={cl.gradient_font}>Выбирайте нас</a></li>
                    <li><a href="#join" className={cl.gradient_font}>Присодиняйтесь</a></li>
                </ul>
                <span className={cl.network}>
                    <i className="fa-brands fa-vk gradient_font"></i>
                    <i className="fa-brands fa-discord gradient_font"></i>
                    <i className="fa-brands fa-facebook gradient_font"></i>
                </span>
                <span className={cl.mobile_navigation} onClick={updateMenu}>
                    <i class="fa-solid fa-bars-staggered"></i>
                    <div className={navigation ? cl.hamburger_active : cl.hamburger_menu}>
                        <div className={cl.nav_container}>
                            <ul className={cl.nav_list}>
                            <li><a href="#home" className={cl.gradient_font}>Главная</a></li>
                            <li><a href="#market" className={cl.gradient_font}>Маркет</a></li>
                            <li><a href="#choose" className={cl.gradient_font}>Выбирайте нас</a></li>
                            <li><a href="#join" className={cl.gradient_font}>Присодиняйтесь</a></li>
                            <i className="fa-solid fa-xmark" onClick={updateMenu}></i>
                            </ul>
                        </div>
                    </div>
                </span>
            </header>
        </>
    );
};

export default Navigation;
