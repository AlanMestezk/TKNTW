import guerreiraFull    from '../../../../assets/img/guerreira/GuerreiraIA3.png'
import guerreiraHistory from '../../../../assets/history/Guerreira/Guerreira.txt'
import { Template }     from '../Template/Template'


export const Guerreira = () =>{

    return(

        <main>

            <Template 
                imgCharater     ={guerreiraFull} 
                nameCharacter   ={'LYRA'} 
                titleCharacter  ={'A DETERMINADA'} 
                historyCharacter={guerreiraHistory}
                wallpaper       ={guerreiraFull}
            />

        </main>
    )
}