import React, { useEffect, useState } from 'react'
import { Personajes } from '../funciones/funciones'
import Loader from './Loader';
import styles from './Personajes.module.css';

const Inicio = () => {
    const [personajes, setPersonajes] = useState(null);


    useEffect(() => {

        Personajes(setPersonajes)
    }, [])

    return (
        <>

            {personajes != null ? (
                personajes.map(personaje => (
                    <div key={personaje.id} >
                        <a href={`/personaje/${personaje.id}`}>
                            <img src={personaje.image} alt={personaje.name} title={personaje.name} />
                        </a>
                    </div>
                ))
            ) : (<div ><h1 className={styles.loader}>Cargando...</h1></div>)
            }

        </>
    )
}

export default Inicio