import style                   from './History.module.css';
import { RxDoubleArrowDown }   from 'react-icons/rx';
import { useEffect, useState } from 'react';
import textHistory             from '../../../../assets/The King That Never Was.txt';
import { GiSpiralArrow }       from 'react-icons/gi';

export const HistoryContent = () => {
  const [history, setHistory] = useState<string>('');
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  const [__sectionVisible, setSectionVisible] = useState<boolean>(true);

  useEffect(() => {

    const handleShowArchive = async () => {

      try {

        const response = await fetch(textHistory);
        const content  = await response.text();

        setHistory(content);

      } catch (error) {

        const msg: string = 'Não foi possível ler o arquivo';
        console.log(msg, error);
      }
    };

    handleShowArchive();
  }, []);

  const handleScroll = () => {

    const isScrollingDown = window.scrollY > 0;
    setScrollingDown(isScrollingDown);

    // Oculta a seção quando o usuário rola para baixo
    if (isScrollingDown) {
      setSectionVisible(false);
    }
    
  };

  useEffect(
  
      () => {
        // Adiciona um ouvinte de evento de rolagem ao carregar o componente
        window.addEventListener('scroll', handleScroll);

        // Remove o ouvinte de evento quando o componente é desmontado
        return () => {
          window.removeEventListener('scroll', handleScroll);
      };

    }, []
  );

  // Adiciona um useEffect para fazer a página voltar ao topo quando ela for recarregada
  useEffect(
    
    () => {

      window.scrollTo(0, 0);
    }, []
  );

  const handleScrollToTop = () => {

    window.scrollTo(0, 0);
  };

  return (

    <main className={style.container}>
      <section className={style.sectionHistory}>

        <div className={`${style.divTitle} ${scrollingDown ? style.hidden : style.visible}`}>

            <h1 className={style.title}>O REI QUE NUNCA FOI</h1>
            <h2 className={style.subtitle}>PROLOGO</h2>

            <div className={style.divScrol}>
              {/* Condicionalmente renderiza os elementos com transição suave */}
              <strong
                className={style.titleScrol}
              >

                Role o scroll para continuar
              </strong>

              <strong
                className={style.iconsScrol}
              >
                <RxDoubleArrowDown />
              </strong>

            </div>
          </div>

      </section>
      <section className={style.contentHistory}>

        <pre className={style.history}>{history}</pre>
        <button onClick={handleScrollToTop} className={style.button}>
        <GiSpiralArrow className={style.arrow1}/> Voltar ao inicio <GiSpiralArrow className={style.arrow1}/>
        </button>
      </section>
    </main>

  );
};