import { useState } from "react"

export function TwitterFollowCard({children,userName,name,initialIsFollowing}) {
    /*
        Se coloca una constante que será el estado en el que se encuentra el componenete,
        se tiene que colocar un estado por default, esto devuelve un array de 2 posiciones.
        En la posicion 0 del array, nos devuelve el valor del estado
        En la posición 1, nos devuelve una función para manipular el estado
    */
    //const state = useState(false)
    //const isFollowing = state[0]
    //const setIsFollowing = state[1]

    /*
        Para no colocar 3 variables para un estado, podemos utilizar la desestructuración,
        donde podemos en una sola linea colocar las variables a utilizar en el estado,
        donde la lineas de arriba y la nueva de abajo, son lo mismo.
        Se coloca false por defecto en el estado pero, siempre comenzará en falso,
        así que no será dinámico, para esto se debe colocar un prop para parámetro de estado.
        Por ejemplo se coloca initialIsFollowing que es el prop que se le pasa a la tarjeta,
        para que el estado dependa de lo que contiene initialIsFollowing
    */
    //const [isFollowing,setIsFollowing] = useState(false)
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)




    //Condicionar ternario, para modificar el texto según que haya en isFollowing
    const text= isFollowing ? 'Siguiendo' : 'Seguir'
    /*
        Se cambia la clase dependiendo de que haya en isFollowing, 
        se coloca la constante en el atributo ClassName del elemento
    */
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    /*
        Se crea una arrayFunction para el click para ejecutar el setIsFollowing
        para darle la vuelta a isFollowing
    */
    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }


    //Se crea una constante para obtener el avatar del usuario
    return (
        /*
            Se colocan className a los atributos para las clases CSS
            Se colocan {} para evaluar los parámentros que se reciben
            Utilizo el prop children para obtener todo lo que TwitterFollowCard tenga dentro
        */
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/twitter/${userName}`}
                    alt="Avatar"
                />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}