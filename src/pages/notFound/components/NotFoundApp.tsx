import style from './NotFound.module.css'
import lineGolden from '../../../assets/img/lineCoroaGolden.png'
import { Link } from 'react-router-dom'

export const NotFoundApp = () =>{

    return(
        <main className={style.container}>

            <section className={style.backgroundSection}></section>

            <section className={style.mainContent}>
                    <div className={style.sectionTitle}>
                        <img src={lineGolden} alt="golden line" className={style.lineGolden} />
                        <h1>404 - NOT FOUND</h1>
                        <strong>A pagina que você tentou acessar não existe!</strong>
                        <strong>clique no botão abaixo e volte a pagina principal</strong>
                        <div className={style.divButton}>
                            <Link to="/">
                                <button >pagina inicial</button>
                            </Link>
                        </div>
                    </div>
                
            </section>


        </main>
    )
}