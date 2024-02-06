import bardoFull        from '../../../../assets/img/bardo/BardoFull.png'
import bardoHistory     from '../../../../assets/history/Bardo/BardoHistory.txt'
import { Template }     from '../Template/Template'


export const Bardo = () =>{

    return(

        <main>

            <Template 
                imgCharater     ={bardoFull} 
                nameCharacter   ={'URELIO'} 
                titleCharacter  ={'O OUSADO'} 
                historyCharacter={bardoHistory}
                wallpaper       ={bardoFull}
                
            />

        </main>
    )
}