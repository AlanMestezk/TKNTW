import style    from './InpirationApp.module.css'
import logoApex from '../../../../assets/img/icons/Apex.png'
import logoLol  from '../../../../assets/img/icons/e7845ge1qoiqsir1ie41e92k4m-9a93e1477db6741aa32709ae39720ab8.png'
import diablo   from '../../../../assets/img/icons/diablo.png'
import aden     from '../../../../assets/img/icons/Aden.png'
import linRev   from  '../../../../assets/img/icons/lirev.png'
import { Link } from 'react-router-dom'

interface inpirationListProps{

    id   : number
    img  : string
    site?: string | any
}

export const InspirationApp = ()=>{

    const inpirationList: inpirationListProps[] = [

        {
            id   : 1,
            img  : logoApex,
            site : 'https://www.ea.com/pt-br/games/apex-legends'
        },
        {
            id   : 2,
            img  : logoLol,
            site : 'https://www.leagueoflegends.com/pt-br/'
        },
        {
            id   : 3,
            img  : diablo,
            site : 'https://diablo4.blizzard.com/pt-br/'
        },
        {
            id   : 4,
            img  : aden,
            site : 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjlzNSeoZeEAxV3j5UCHV5_CYQ4ChC3AnoECAYQAg&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DJ-9dQlCTiN0&usg=AOvVaw33nG8aomnTJFHgwe7mQj_c&opi=89978449'
        },
        {
            id   : 5,
            img  : linRev,
            site : 'https://en.wikipedia.org/wiki/Lineage_2:_Revolution'
        }
        
    ]
    

    return(
        <main className={style.container}>

            <section className={style.backgroundSection}>
            </section>

            <section className={style.mainContent}>

                <div className={style.inspiration}>

                    <div className={style.divTitle}>

                        <h1 className={style.title}>INPIRATIONS GAMES</h1>
                        <strong className={style.subtitle}>Games que serviram de inspiração para este site</strong>
                    </div>


                    <ul className={style.list}>

                        {
                            inpirationList.map(
                                (item, index) =>(

                                    <li className={style.itens} key={index}>

                                        <div className={style.divImg}>

                                            <img 
                                                src={item.img} 
                                                alt="Icon Inspiration"
                                                className={style.imgInspiration}
                                            />

                                        </div>

                                        <div className={style.divDescription}>

                                            <Link className={style.linkButton} to={item.site}>

                                                <button className={style.button}>Ver mais sobre</button>
                                            </Link>
                                        </div>

                                    </li>
                                )
                            )
                        }

                    </ul>

                </div>

            </section>
        </main>
    )
}