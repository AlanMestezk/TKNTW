import style               from './Footer.module.css'
import { AiFillInstagram } from "react-icons/ai"; //<AiFillInstagram />
import { FaLinkedin }      from "react-icons/fa6"; //<FaLinkedin />
import { SiGmail }         from "react-icons/si";  //<SiGmail />
import { IoLogoGithub }    from "react-icons/io"; //<IoLogoGithub />
import { GiCrownedSkull }  from "react-icons/gi"; //
import { Link }            from 'react-router-dom';

export const Footer = () =>{

    return(

        <footer className={style.container}> 

            <section className={style.sectionTitle}>    

                <div className={style.divTitleCreatorDescription}>

                    <h3>TKNTW © ALANMESTEZK 2024</h3>
                        
                </div>

                <div className={style.divDescription}>
                        
                    <h4>© 2024 - OS VÍDEOS E A IMAGEM DE FUNDO UTILIZADOS FORAM INSERIDOS EXCLUSIVAMENTE PARA FINS ILUSTRATIVOS.</h4>
                    <h5>TODAS AS REFERENCIAS E OS AUTORES ACHAM-SE NO SETOR "INPIRATION" NO HEADER DA PAGINA</h5>

                </div>

            </section>  
            <section className={style.sectionRedes}>

                <div className={style.divTitleIcon}>
                   
                    <h3><GiCrownedSkull />THE KING THAT NEVER WAS<GiCrownedSkull /></h3>

                </div>

                <div className={style.divSocialMidia}>

                    <h3>Fale conosco:</h3>

                    <div className={style.divIcons}>

                        <Link to='https://www.instagram.com/alanmestezk/'>
                            <strong className={style.icons}><AiFillInstagram /></strong>
                        </Link>

                        <Link to='https://www.linkedin.com/in/alan-mestezk-9b86a2154/'>
                            <strong className={style.icons}><FaLinkedin /></strong>
                        </Link>

                        <Link to='https://criarmeulink.com.br/u/1707401879'>
                            <strong className={style.icons}><SiGmail /></strong>
                        </Link>

                        <Link to='https://github.com/AlanMestezk'>
                            <strong className={style.icons}><IoLogoGithub /></strong>
                        </Link>
                        
                    </div>
                   
                
                </div>

            </section>
            

        </footer>
    )
}