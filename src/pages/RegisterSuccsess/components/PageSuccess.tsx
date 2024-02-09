import style from './PageSuccess.module.css'
import lineGolden              from '../../../assets/img/lineCoroaGolden.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import loadGif from '../../../assets/img/loader.gif'

export const PageSuccess = ()=>{

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <main className={style.container}>

            <section className={style.backgroundSection}></section>

            <section className={style.mainContent}>
                {isLoading ? (
                    <div className={style.loadingMessage}>

                        <img 
                            src={loadGif}
                            alt="load" 
                            className={style.loadGif}
                        />
                    </div>
                ) : (
                    <div className={style.sectionTitle}>
                        <img src={lineGolden} alt="golden line" className={style.lineGolden} />
                        <h1>CADASTRO EFETUADO COM SUCESSO!</h1>
                        <strong>À medida que o jogo está em fase de desenvolvimento, assim que a versão beta estiver pronta, enviaremos um e-mail de notificação.</strong>
                        <strong>Até o momento, você pode explorar o site, familiarizar-se com os personagens e a história do jogo para se preparar e entrar no clima!</strong>
                        <div className={style.divButton}>
                            <Link to="/">
                                <button >pagina inicial</button>
                            </Link>
                        </div>
                    </div>
                )}
            </section>


        </main>
    )
}