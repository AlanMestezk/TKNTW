import guerreiroFull    from '../../../../assets/img/guerreiro/guerreiroFull.png'
import guerreiroHistory from '../../../../assets/history/Guerreiro/history-guerreiro.txt'
import { Template }     from '../Template/Template'


export const Guerreiro = () =>{

    return(

        <main>

            <Template 
                imgCharater     ={guerreiroFull} 
                nameCharacter   ={'SOR ARIC'} 
                titleCharacter  ={'O BELICO'} 
                historyCharacter={guerreiroHistory}
                wallpaper       ={guerreiroFull}
            />

        </main>
    )
}