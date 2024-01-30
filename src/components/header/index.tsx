import { Link }     from 'react-router-dom'
import style        from './Header.module.css'
import logo         from '../../assets/logo.png'


export const Header = ()=>{


    return(
        <header className={style.container}>
            
           <div className={style.divTitle}>     
            
                <Link to='/' className={style.linkHome}>

                    <img 
                        src={logo} 
                        alt="Logo King Dead"
                        className={style.logo} 
                    />

                     <h1 className={style.title}>TKNTW</h1>
                </Link>


           </div>  

           <div className={style.divButtons}> 

                <Link className={style.buttons} to=''>
                    <button>O jogo</button>
                </Link>

                <Link className={style.buttons} to=''>
                    <button>História</button>
                </Link>

                <Link className={style.buttons} to=''>
                    <button>Personagens</button>
                </Link>

                <Link className={style.buttons} to=''>
                    <button>Inspiração</button>
                </Link>

                <Link className={style.buttons} to=''>
                    <button>Noticías</button>
                </Link>

           </div> 

        </header>
    )
}