import MagoFull    from '../../../../assets/img/mago/MagoFulls.png'
import magoHistory from '../../../../assets/history/Mago/Mago.txt'
import { Template }     from '../Template/Template'


export const Mago = () =>{

    return(

        <main>

            <Template 
                imgCharater     ={MagoFull} 
                nameCharacter   ={'ZEPHYRION'} 
                titleCharacter  ={'O ARCANO'} 
                historyCharacter={magoHistory}
                wallpaper       ={MagoFull}
                imgSize         ={800}
            />

        </main>
    )
}