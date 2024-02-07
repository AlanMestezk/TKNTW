import style                   from './Content.module.css';
import logo                    from '../../../../assets/img/TKNTW!.png';
import textLogo                from '../../../../assets/logoIconText.png';
import { Link }                from 'react-router-dom';
import textSubtitle            from '../../../../assets/SUBTITLE.png';
import videoBackGround         from '../../../../assets/rise「gmv」-yt5s.ink.mp4';
import { GiSpiralArrow }       from 'react-icons/gi';


export const Content = () => {
  

  return (

    <main className={style.container}>


                    <section className={style.backgroundSection}>
                        <video src={videoBackGround} autoPlay loop muted/>
                    </section>

                    <section className={style.box}>

                        <div className={style.divTitle}>

                            <div className={style.divTitleLogo}>

                                <img 
                                    src={textLogo}
                                    className={style.titleLogo}
                                    alt="titulo the king that never was" 
                                />

                            </div>

                            <div className={style.divSubtitle}>

                                <img 
                                    src={logo} 
                                    alt="subtitle the legacy" 
                                    className={style.logo}
                                />

                                <img 
                                    src={textSubtitle} 
                                    alt="sutitle"
                                    className={style.subtitle} 
                                />

                            </div>
                                        
                            </div>

                                <div className={style.divButton}>

                                    <Link to=''>
                                            
                                        <button className={style.button}><GiSpiralArrow className={style.arrow1}/> JOGAR AGORA <GiSpiralArrow className={style.arrow1}/></button>

                                    </Link>

                                </div>

                    </section>

    </main>
  );
};