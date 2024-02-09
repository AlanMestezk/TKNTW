import { useState }    from 'react';
import style           from './News.module.css';
import logo            from '../../../../assets/img/TKNTW!.png';
import videoBackGround from '../../../../assets/videoplayback.webm';
import SorAric         from '../../../../assets/img/Sor Aric.jpg';
import SombraMorte     from '../../../../assets/img/Sombra-Morte.jpg';
import Lyra            from '../../../../assets/img/Lyra.jpg';
import Duelo           from '../../../../assets/img/Batalha.jpg';
import posterImage     from '../../../../assets/img/pico-de-montanha-majestoso-em-paisagem-tranquila-de-inverno-gerada-por-ia.jpg'

type NewsKey = 'montarias' | 'skins' | 'sombraMorte' | 'duelos';

type NewsVisibilityState = {
    [key in NewsKey]: boolean;
};

export const NewsApp = () => {

    const [isParagraphVisible, setIsParagraphVisible] = useState<NewsVisibilityState>({
        montarias: false,
        skins: false,
        sombraMorte: false,
        duelos: false,
    });

    const handleMouseEnter = (key: NewsKey) => {
        setIsParagraphVisible({ ...isParagraphVisible, [key]: true });
    };

    const handleMouseLeave = (key: NewsKey) => {
        setIsParagraphVisible({ ...isParagraphVisible, [key]: false });
    };

    return (
        <main className={style.container}>
            <section className={style.divBackground}>
                <video src={videoBackGround} autoPlay loop muted poster={posterImage} />
            </section>
            <section className={style.sectionWallpaper}>
                <div className={style.divIconTitle}>
                    <img src={logo} alt="Logo" className={style.logoIcon} />
                    <h1 className={style.title}>NOVIDADES TKNTW</h1>
                    <strong>Arraste sobre os ícones para descobrir nossos planos futuros</strong>
                </div>
                <section className={style.containersNews}>
                    <div
                        className={style.news}
                        onMouseEnter={() => handleMouseEnter('montarias')}
                        onMouseLeave={() => handleMouseLeave('montarias')}>
                        <img src={Lyra} alt="Lyra" className={style.imgNews} />
                        <div className={style.divTitle}>
                            <h1>MONTARIAS</h1>
                            <p className={`${isParagraphVisible.montarias ? style.paragraphAnimation : style.hidden}`}>
                                Vamos incorporar a seção de montarias à apresentação
                            </p>
                        </div>
                    </div>
                    <div
                        className={style.news}
                        onMouseEnter={() => handleMouseEnter('skins')}
                        onMouseLeave={() => handleMouseLeave('skins')}>
                        <img src={SorAric} alt="Sor Aric" className={style.imgNews} />
                        <div className={style.divTitle}>
                            <h1>SKINS</h1>
                            <p className={`${isParagraphVisible.skins ? style.paragraphAnimation : style.hidden}`}>
                                Ofereceremos skins e aprimoramentos para o seu personagem.
                            </p>
                        </div>
                    </div>
                    <div
                        className={style.news}
                        onMouseEnter={() => handleMouseEnter('sombraMorte')}
                        onMouseLeave={() => handleMouseLeave('sombraMorte')}>
                        <img src={SombraMorte} alt="Sombra Morte" className={style.imgNews} />
                        <div className={style.divTitle}>
                            <h1>Sombra-Morte</h1>
                            <p className={`${isParagraphVisible.sombraMorte ? style.paragraphAnimation : style.hidden}`}>
                                Estamos elaborando uma história adequada para esta espada lendária.
                            </p>
                        </div>
                    </div>
                    <div
                        className={style.news}
                        onMouseEnter={() => handleMouseEnter('duelos')}
                        onMouseLeave={() => handleMouseLeave('duelos')}>
                        <img src={Duelo} alt="Duelo" className={style.imgNews} />
                        <div className={style.divTitle}>
                            <h1>DUELOS</h1>
                            <p className={`${isParagraphVisible.duelos ? style.paragraphAnimation : style.hidden}`}>
                                Duelos individuais serão implementados, assim como confrontos em equipe.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
};
