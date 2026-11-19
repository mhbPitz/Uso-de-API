import PokemonApi2 from "../components/PokemonApi.jsx";
import ThemeButton from "../hooks/ButtonTheme.jsx";
import React, { useState, useEffect } from 'react';
import MainPageRender from '../components/MainPageRender.jsx'

export default function PokemonPage() {
    return (
        <>
        <PokemonApi2 />
        <MainPageRender />
        </>
    )
}