import { useState } from 'react';
import style from './Character.module.css';
import wallpaper from '../../../../assets/ELDORIA! (2).jpg';
import icon from '../../../../assets/logo.png';
import logoText from '../../../../assets/SUBTITLE.png';
import iconGuerreiro from '../../../../assets/img/guerreiro/GuerreiroIcon.png';
import iconGuerreira from '../../../../assets/img/guerreira/GuerreiraIcon.png';
import iconBruxa from '../../../../assets/img/bruxa/BruxaIcon.png';
import iconBardo from '../../../../assets/img/bardo/BardoIcon.png';
import iconMago from '../../../../assets/img/mago/MagoIcon.png';

const CharactersContent = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const GuerreiroComponent = () => (
    <div>
      <p>Conteúdo do componente Guerreiro</p>
    </div>
  );

  const BruxaComponent = () => (
    <div>
      <p>Conteúdo do componente Bruxa</p>
    </div>
  );

  const BardoComponent = () => (
    <div>
      <p>Conteúdo do componente Bardo</p>
    </div>
  );

  const GuerreiraComponent = () => (
    <div>
      <p>Conteúdo do componente Guerreira</p>
    </div>
  );

  const MagoComponent = () => (
    <div>
      <p>Conteúdo do componente Mago</p>
    </div>
  );

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'guerreiro':
        return <GuerreiroComponent />;
      case 'bruxa':
        return <BruxaComponent />;
      case 'bardo':
        return <BardoComponent />;
      case 'guerreira':
        return <GuerreiraComponent />;
      case 'mago':
        return <MagoComponent />;
      default:
        return (
          <div className={style.components}>
            <img src={icon} alt="icone da pagina" className={style.icon} />
            <img src={logoText} alt="logo text" className={style.logoText} />
          </div>
        );
    }
  };

  return (
    <main className={style.container}>
      <section className={style.SectionBackground}>
        <img src={wallpaper} alt="Wallpaper Eldoria" className={style.wallpaper} />
      </section>

      <section className={style.sectionContent}>
        <div className={style.divSectionTitle}>
          <h1 className={style.title}>ANCESTRAL MASTERS OF ELDORIA</h1>
        </div>

        <section className={style.sectionComponents}>
          {renderComponent()}

          <div className={style.iconsLink}>
            <div className={style.divIcons}>
              <button onClick={() => setSelectedComponent('guerreiro')}>
                <img src={iconGuerreiro} alt="icons" className={style.iconImg} />
              </button>
            </div>

            <div className={style.divIcons}>
              <button onClick={() => setSelectedComponent('bruxa')}>
                <img src={iconBruxa} alt="icons" className={style.iconImg} />
              </button>
            </div>

            <div className={style.divIcons}>
              <button onClick={() => setSelectedComponent('bardo')}>
                <img src={iconBardo} alt="icons" className={style.iconImg} />
              </button>
            </div>

            <div className={style.divIcons}>
              <button onClick={() => setSelectedComponent('guerreira')}>
                <img src={iconGuerreira} alt="icons" className={style.iconImg} />
              </button>
            </div>

            <div className={style.divIcons}>
              <button onClick={() => setSelectedComponent('mago')}>
                <img src={iconMago} alt="icons" className={style.iconImg} />
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default CharactersContent;
