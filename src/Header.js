import React from 'react'
import './App.css';
import troll from './images/troll-face.png'

const Header = () => {
    return (
        <header className='header'>
            <img src={troll} alt="" className='header-image' />
            <h1 className='header-title'>Meme Generator</h1>
            <h4 className='header-project'>React - Project 3</h4>
        </header>)
}

export default Header