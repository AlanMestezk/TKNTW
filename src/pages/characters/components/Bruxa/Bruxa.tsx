import bruxaFull        from '../../../../assets/img/bruxa/BruxaFull.png'
import bruxaHistory     from '../../../../assets/history/Bruxa/BruxaHistory.txt'
import { Template }     from '../Template/Template'


export const Bruxa = () =>{

    return(

        <main>

            <Template 
                imgCharater     ={bruxaFull} 
                nameCharacter   ={'SELENE'} 
                titleCharacter  ={'A PERSPICAZ'} 
                historyCharacter={bruxaHistory}
                wallpaper       ={bruxaFull}
                imgSize         ={800}
            />

        </main>
    )
}