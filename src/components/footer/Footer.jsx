import React from 'react'
import cl from './Footer.module.css'

const Footer = () => {
  return (
    <footer >
        <div class="footer_content">
            <div class={cl.footer_socials}>
                <i class="fa-brands fa-twitter gradient_font"></i>
                <i class="fa-brands fa-discord gradient_font"></i>
                <i class="fa-brands fa-facebook gradient_font"></i>
                <i class="fa-brands fa-youtube gradient_font"></i>
            </div>
            <div class={cl.footer_text}>
                <p class="gradient_font">Privacy</p>
                <p class="gradient_font">Terms of use</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer