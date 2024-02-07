import { Link }     from 'react-router-dom'
import style        from './Header.module.css'
import logo         from '../../assets/../assets/img/TKNTW!.png'
import logoText     from '../../assets/logoIconText.png'


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

                    <img 
                        src={logoText} 
                        alt="text TKNTW" 
                        className={style.logoTextIconTKNTW}
                    />
                    

                </Link>


           </div>  

           <div className={style.divButtons}> 

                <Link className={style.buttonsLink} to='/history'>

                    <strong className={style.strongButtons}>HISTORY</strong>
                </Link>

                <Link className={style.buttonsLink} to='/characters'>

                    <strong className={style.strongButtons}>CHARACTERS</strong>
                </Link>

                <Link className={style.buttonsLink} to='/inspirations'>

                    <strong className={style.strongButtons}>INPIRATION</strong>
                </Link>

                <Link className={style.buttonsLink} to='/news'>

                    <strong className={style.strongButtons}>NEWS</strong>
                </Link>

           </div> 

        </header>
    )
}