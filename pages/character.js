import styles from '../styles/character.module.css'
export default function Character({name,image,origin,id}){
    return (
        <div className={styles.container}>
            <img src={image} alt={name} width='300'/>
            <h1>{name}</h1>
            <p>Origin: {origin}</p>
        </div>
    )
}