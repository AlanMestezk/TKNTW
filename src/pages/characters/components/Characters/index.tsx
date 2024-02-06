import style         from './Character.module.css'
import wallpaper     from '../../../../assets/ELDORIA! (2).jpg'
import iconGuerreiro from '../../../../assets/img/guerreiro/GuerreiroIcon.png'
import iconGuerreira from '../../../../assets/img/guerreira/GuerreiraIcon.png'
import iconBruxa     from '../../../../assets/img/bruxa/BruxaIcon.png'
import iconBardo     from '../../../../assets/img/bardo/BardoIcon.png'
import iconMago      from '../../../../assets/img/mago/MagoIcon.png'
import { useState }  from 'react'
import { Guerreiro } from '../Guerreiro/Guerreiro'
import { Bruxa }     from '../Bruxa/Bruxa'
import { Bardo }     from '../Bardo/Bardo'
import { Guerreira } from '../Guerreira/Guerreira'
import { Mago }      from '../Mago/Mago'
     

export const CharactersContent = ()=>{

    const [selectedComponent, setSelectedComponent] = useState<string | null> (null)

    const GuerreiroComponent = () =>{

        return(
            <div>
                <Guerreiro/>
            </div>
        )
    }

    const BruxaComponent = () =>{

        return(
            <div>
                <Bruxa/>
            </div>
        )
    }

    const BardoComponent = () =>{

        return(
            <div>
                <Bardo/>
            </div>
        )
    }

    const GuerreiraComponent = () =>{

        return(
            <div>
                <Guerreira/>
            </div>
        )
    }

    const MagoComponent = () =>{

        return(
            <div>
                <Mago/>
            </div>
        )
    }    


    const renderComponent = () =>{
        switch (selectedComponent) {

            case 'guerreiro':
                return <GuerreiroComponent/>
            
            case 'bruxa':
                return <BruxaComponent/>

            case 'bardo':
                return <BardoComponent/>

            case 'guerreira':
                return <GuerreiraComponent/>
            
            case 'mago':
                return <MagoComponent/>
        
            default:
                return(
                    <GuerreiroComponent/>
                )
        }
    }


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
                        <strong className={style.subtitle}>Através dos tempos, erguem-se os veneráveis mestres de Eldoria, prontos para guiá-lo</strong>
                        <p className={style.paragrafo}>Clique nos icones e desvende os mistérios que cada um guarda consigo.</p>

                    </div>

                    <section className={style.sectionComponents}>

                        <div className={style.components}>
                            {renderComponent()}
                        </div>

                        <div className={style.iconsLink}>

                            <div className={style.divIcons} onClick={()=>setSelectedComponent('guerreiro')}>
                                
                                <img 
                                    src={iconGuerreiro} 
                                    alt="icons"
                                    className={style.iconImg} 
                                />

                            </div>

                            <div className={style.divIcons} onClick={()=> setSelectedComponent('bruxa')}>
                                
                                <img 
                                    src={iconBruxa} 
                                    alt="icons"
                                    className={style.iconImg} 
                                />

                            </div>

                            <div className={style.divIcons} onClick={()=> setSelectedComponent('bardo')}>
                                
                                <img 
                                    src={iconBardo} 
                                    alt="icons"
                                    className={style.iconImg} 
                                />

                            </div>

                            <div className={style.divIcons} onClick={()=> setSelectedComponent('guerreira')} >
                                
                                <img 
                                    src={iconGuerreira} 
                                    alt="icons"
                                    className={style.iconImg} 
                                />

                            </div>

                            <div className={style.divIcons} onClick={()=> setSelectedComponent('mago')}>
                                
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