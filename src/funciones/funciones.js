import axios from "axios";
import { useState } from "react";

const Personajes = async (props) => {


    const res = await axios.get('https://rickandmortyapi.com/api/character')
    props(res.data.results);
}

const SoloUnPersonaje = async (id, props) => {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)

    console.log(res.data);
    props(res.data);
}

export { Personajes, SoloUnPersonaje };