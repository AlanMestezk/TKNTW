import style         from './Character.module.css'
import wallpaper     from '../../../../assets/ELDORIA! (2).jpg'
import icon          from '../../../../assets/logo.png'
import logoText      from '../../../../assets/SUBTITLE.png'
import iconGuerreiro from '../../../../assets/img/guerreiro/GuerreiroIcon.png'
import iconGuerreira from '../../../../assets/img/guerreira/GuerreiraIcon.png'
import iconBruxa     from '../../../../assets/img/bruxa/BruxaIcon.png'
import iconBardo     from '../../../../assets/img/bardo/BardoIcon.png'
import iconMago      from '../../../../assets/img/mago/MagoIcon.png'
     

export const CharactersContent = ()=>{


    return(
        <main className={style.container}>  

            <section className={style.SectionBackground}>

                <img 
                    src={wallpaper} 
                    alt="Wallpaper Eldoria" 
                    className={style.wallpaper}
                />

            </section>
            
            <section className={style.sectionContent}>

                    <div className={style.divSectionTitle}>

                        <h1 className={style.title}>ANCESTRAL MASTERS OF ELDORIA</h1>

                    </div>

                    <section className={style.sectionComponents}>

                        <div className={style.components}>

                            <img 
                                src={icon}
                                alt="icone da pagina" 
                                className={style.icon}
                            />

                            <img 
                                src={logoText}
                                alt="logo text" 
                                className={style.logoText}
                            />


                        </div>

                        <div className={style.iconsLink}>

                            <div className={style.divIcons}>
                                
                                <img 
                                    src={iconGuerreiro} 
                                    alt="icons"
                                    className={style.iconImg} 
                                />

                            </div>

                            <div className={style.divIcons}>
                                
                                <img 
                                    src={iconBruxa} 
                                    alt="icons"
                                    className={style.iconImg} 
                                />

                            </div>

                            <div className={style.divIcons}>
                                
                                <img 
                                    src={iconBardo} 
                                    alt="icons"
                                    className={style.iconImg} 
                                />

                            </div>

                            <div className={style.divIcons}>
                                
                                <img 
                                    src={iconGuerreira} 
                                    alt="icons"
                                    className={style.iconImg} 
                                />

                            </div>

                            <div className={style.divIcons}>
                                
                                <img 
                                    src={iconMago} 
                                    alt="icons"
                                    className={style.iconImg} 
                                />

                            </div>


                        </div>

                    </section>

            </section>
            
        </main>
    )
}