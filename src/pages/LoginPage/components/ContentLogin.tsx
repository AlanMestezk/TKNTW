
import { useState, useEffect } from 'react';
import { IoIosWarning }        from "react-icons/io";
import style                   from './ContentLogin.module.css';
import lineGolden              from '../../../assets/img/lineCoroaGolden.png';
import { Link }                from 'react-router-dom';

const sendEmail = async (emailAddress: string) => {

    try {

        const response = await fetch('/api/sendEmail', {

            method : 'POST',
            headers: {

                'Content-Type': 'application/json'

            },
            body: JSON.stringify({ emailAddress })

        });
        if (response.ok) {

            console.log('Email sent successfully!');
            return true;
        } else {
            console.error('Failed to send email');
            return false;
        }

    } catch (error) {

        console.error('Error sending email:', error);
        return false;
    }
};

export const ContentLogin = () => {
    
    const [email,                       setEmail] = useState<string>('');
    const [error,                       setError] = useState<string>('');
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

    useEffect(
        
            () => {

            if (error || !email) {
                setIsButtonDisabled(true);
            } else {
                setIsButtonDisabled(false);
            }
        }, [email, error]
    );

    const handleInputFocus = () => {

        const titleInput = document.querySelector(`.${style.titleInput}`);

        if (titleInput) {
            titleInput.classList.add(style.titleInputActive);
        }
    };

    const handleInputBlur = () => {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setError('Por favor, insira um e-mail válido.');
        } else {
            setError('');
        }
    };

    const handleButtonClick = async () => {

        if (!error && email) {

            const emailSent = await sendEmail(email);
            if (emailSent) {
                window.location.href = '/register-success';
            } else {
                setError('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.');
            }
        }
    };

    return (
        <main className={style.container}>

            <section className={style.backgroundSection}></section>

            <section className={style.mainContent}>

                <div className={style.sectionTitle}>
                    <img src={lineGolden} alt="golden line" className={style.lineGolden} />
                    <h1>SUA jORNADA INICIA AQUI</h1>
                    <strong>Primeiro passo é cadastrar seu e-mail</strong>
                </div>

                <section className={style.sectionLogin}>

                    <form>
                        <div className={style.inputWrapper}>
                            <strong className={`${style.titleInput} ${email ? style.titleInputActive : ''}`}>
                                DIGITE AQUI SEU E-MAIL
                            </strong>
                            <input
                                type="email"
                                className={style.inputLogin}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                                required
                            />
                            {error && <div className={style.errorMessage}>{error} <IoIosWarning /></div>}
                        </div>
                        <div className={style.divButton}>
                            {!isButtonDisabled ? (
                                <Link to="/register-success">
                                    <button onClick={handleButtonClick}>iniciar</button>
                                </Link>
                            ) : (
                                <button disabled>iniciar</button>
                            )}
                        </div>
                    </form>

                </section>
            </section>
        </main>
    );
};