import MovieEe from "../components/listMovie.jsx";
import ThemeButton from "../hooks/ButtonTheme.jsx";
import React, {useState, useEffect} from "react";
import MainPageRender from '../components/MainPageRender.jsx'

export default function MoviesPage() {

    return (
        <>
        <MovieEe />
        <MainPageRender />
        </>
    )
}