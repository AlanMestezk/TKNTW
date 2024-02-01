import { useEffect, useState } from 'react';
import textHistory            from '../../../../assets/The King That Never Was.txt';
import style                  from './Content.module.css';

export const HistoryContentText = () => {
  const [history, setHistory] = useState<string>('');

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

  return (
    <main className={style.container}>
    

      <section className={style.sectionHistory}>

        <h1 className={style.title}>O REI QUE NUNCA FOI</h1>
        <strong className={style.history}>{history}</strong>

      </section>
    </main>
  );
};