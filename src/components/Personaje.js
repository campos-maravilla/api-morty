import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { SoloUnPersonaje } from '../funciones/funciones';
import styles from './unicoPersonaje.module.css';

const Personaje = () => {
    const [unicopersonaje, setUnicoPersonaje] = useState(null);

    const params = useParams();

    useEffect(() => {
        SoloUnPersonaje(params.id, setUnicoPersonaje);
    }, [])

    return (
        <div className={styles.unicoPersonaje}>

            {unicopersonaje != null ? (
                <article className={styles.infoContent}>
                    <a href='/' className={styles.btnLink}>Inicio</a>
                    <h1> Personaje </h1>
                    <h2><strong>Nombre:</strong> {unicopersonaje.name}</h2>
                    <img src={unicopersonaje.image} alt={unicopersonaje.name} title={unicopersonaje.name} />
                    <h3>{unicopersonaje.species}</h3>
                    <h3>{unicopersonaje.gender}</h3>


                </article>
            ) : ('Cargando...')
            }

        </div >
    )
}

export default Personaje