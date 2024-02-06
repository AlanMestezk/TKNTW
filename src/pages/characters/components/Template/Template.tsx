
import { useEffect, useState } from 'react'
import style                   from './Template.module.css'

interface TemplateProps {

    imgCharater     : string
    nameCharacter   : string
    titleCharacter  : string
    historyCharacter: string
    wallpaper      ?: string
    imgSize        ?: number
}

export const Template = ({imgCharater, wallpaper,nameCharacter, titleCharacter, historyCharacter, imgSize}: TemplateProps) =>{

    const [historyContent, setHistoryContent] = useState<string>('')

    useEffect(

        ()=>{

            const fetchHistory = async () =>{
                
                    try {
                        
                        const response: string | any = await fetch(historyCharacter)
                        const text    : string | any = await response.text()

                        setHistoryContent(text)
        
                    } catch (error) {

                        let msgError: string = 'Erro ao carregar a historia do personagem'
                        console.log(`${error}: ${msgError} `)
                        
                    }
            }

            fetchHistory()

        }, [historyCharacter]

    )

    return(
        <main className={style.container}>

            <section className={style.sectionCharacter}>


                <div className={style.divInformation}>

                    <h1 className={style.nameCharacter}>{nameCharacter + ','}</h1>
                    <strong className={style.titleCharacter}>{titleCharacter}</strong>

                    <pre className={style.historyCharacter}>{historyContent}</pre>

                </div>

                <div className={style.sectionImgCharater}>

                    <img
                        src={imgCharater}
                        alt="Personagem Icon"
                        className={`${style.imgCharater} ${imgSize ? style[`imgSize${imgSize}`] : ''}`} // Aplicando estilo condicional
                    />

                </div>

                <section className={style.sectionWallpaper}>

                    <img 
                        src={wallpaper} 
                        alt='wallpaper'
                        className={style.wallpaper} 
                    />

                </section>

            </section>

        </main>
    )
    
}