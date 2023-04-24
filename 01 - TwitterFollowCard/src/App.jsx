import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

/*
    Se pueden renderizar elementos conformes a una lista de datos o un JSON
    por que el elemento no tiene por qué estar hecho de forma estática,
    Simulemos que obtenemos un objeto JSON de una API
*/

const users=[
    {
        userName: 'JhovanRM_917',
        name: 'Jhovan',
        isFollowing: true
    },
    {
        userName: 'Tess_La1',
        name: 'T.E.S.S',
        isFollowing: true
    },
    {
        userName: 'fmsmex',
        name: 'FMS México',
        isFollowing: true
    },
    {
        userName: 'softharlequin',
        name: 'Karla Forger🏹 🎃🎃',
        isFollowing: false
    }
]





export function App() {

    //Se pueden pasar funciones como props, en este caso le pasamos el formato con el @ del usuario
    //const formatUserName = (userName) => `@${userName}`

    //También se pueden pasar elementos como props
    //const formatedUserName =(<span>@{userName}</span>)

    return (
        /*
            Esto se coloca para evitar poner React.fragment
            El prop isFollowing es booleano, entonces al declararlo se para True por defecto
            En este caso los nombres de los usuarios se los paso como un prop "children" de cada tarjeta
        */

        /*
            Conforme al JSON de los usuarios, se mapean los datos para insertarlos en
            el componenete de TwitterFollowCard así como sus props
            El prop key es para identificar el elemento, ya que React está renderizando un array
        */
        <div className='App'>
            {/* Así se hace un comentario en JSX */}
            {
                users.map(user=>{
                    const{userName,name,isFollowing}=user
                    return(
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

        </div>
    )
}