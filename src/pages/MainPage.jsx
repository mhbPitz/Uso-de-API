import React, {useState, useEffect} from 'react'
import {Route, Routes, BrowserRouter, Link} from 'react-router-dom'
import DragonBallPage from './dragonBallPage.jsx'

export default function MainPage() {

    return (
        <>
        <Link to='/dbz'><button>Dbz</button></Link>
        <Link to='/movies'><button>Movies</button></Link>
        <Link to='/pokemon'><button>Pokemon</button></Link>
        </>
    )
}