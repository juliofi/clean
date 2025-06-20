import { Link } from 'react-router-dom';
import styles from './styles.module.css'; 
import puc from '../../assets/PUCRS.jpeg'; 
import poo from '../../assets/poo.jpg';
import ferias from '../../assets/ferias.jpg';
import ages from '../../assets/ages.jpg';
import rocketseat from '../../assets/rocketseat.jpg';
import destaque from '../../assets/destaque.jpg';
import memorisely from '../../assets/memorisely.jpg';
import CardConhecimentos from '../../components/cardConhecimentos';
import Titulo from '../../components/titulo';
import Bolinha from '../../components/bolinha';
import Certificados from '../../components/certificados'
import certi1 from '../../assets/certi1.jpg';
import certi2 from '../../assets/certi2.jpg';
import certi3 from '../../assets/certi3.jpg';
import certi4 from '../../assets/certi4.jpg';
import certi5 from '../../assets/certi5.jpg';
import certi6 from '../../assets/certi6.jpg';
import certi7 from '../../assets/certi7.jpg';
import certi8 from '../../assets/certi8.jpg';
import certi9 from '../../assets/certi9.jpg';
import certi10 from '../../assets/certi10.jpg';
import certi11 from '../../assets/certi11.jpg';
import certi12 from '../../assets/certi12.jpg';
import certi13 from '../../assets/certi13.jpg';
import certi14 from '../../assets/certi14.jpg';
import certi15 from '../../assets/certi15.jpg';
import certi16 from '../../assets/certi16.jpg';
import certi17 from '../../assets/certi17.jpg';
import certi18 from '../../assets/certi18.jpg';
import certi19 from '../../assets/certi19.jpg';
import certi20 from '../../assets/certi20.jpg';
import certi21 from '../../assets/certi21.jpg';
import certi22 from '../../assets/certi22.jpg';
import certi23 from '../../assets/certi23.jpg';



function Conhecimentos() {
  const certificadosAlura = [certi1, certi2, certi3];
  const certificadosRocketseat = [certi4, certi5];
  const certificadosMemorisely = [
    certi6, certi7, certi8, certi9, certi10,
    certi11, certi12, certi13, certi14, certi15,
    certi16, certi17, certi18, certi19, certi20,
    certi21, certi22, certi23
  ];
  return (

    <div className={styles.conhecimentosContainer}>
      <header className={styles.header}>
        <Link to="/" className={styles.link}>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_633_1590)">
              <path d="M-6.04535e-05 34.3499C0.0332729 33.5166 0.349939 32.7999 0.949939 32.1999L7.19994 25.9499C7.66661 25.4499 8.21661 25.1499 8.84994 25.0499C9.48327 24.9499 10.0666 25.0166 10.5999 25.2499C11.1333 25.4832 11.5833 25.8666 11.9499 26.3999C12.3166 26.9332 12.4999 27.5166 12.4999 28.1499V31.2499H40.6499C41.4833 31.2499 42.2166 30.9499 42.8499 30.3499C43.4833 29.7499 43.7833 29.0166 43.7499 28.1499V15.6499C43.7499 14.7832 43.4499 14.0499 42.8499 13.4499C42.2499 12.8499 41.5166 12.5332 40.6499 12.4999H15.6499C14.8833 12.4999 14.2333 12.2832 13.6999 11.8499C13.1666 11.4166 12.8333 10.8999 12.6999 10.2999C12.5666 9.69992 12.5666 9.09992 12.6999 8.49992C12.8333 7.89992 13.1666 7.36658 13.6999 6.89992C14.2333 6.43325 14.8833 6.21658 15.6499 6.24992H40.6499C43.2166 6.24992 45.4166 7.16658 47.2499 8.99992C49.0833 10.8332 49.9999 13.0499 49.9999 15.6499V28.1499C49.9999 30.7499 49.0833 32.9499 47.2499 34.7499C45.4166 36.5499 43.2166 37.4666 40.6499 37.4999H12.4999V40.6499C12.4999 41.3166 12.3166 41.9166 11.9499 42.4499C11.5833 42.9832 11.1166 43.3499 10.5499 43.5499C9.98327 43.7499 9.39994 43.7999 8.79994 43.6999C8.19994 43.5999 7.66661 43.3166 7.19994 42.8499L0.949939 36.5999C0.283273 35.9666 -0.0333938 35.2166 -6.04535e-05 34.3499Z" fill="#897869" />
            </g>
            <defs>
              <clipPath id="clip0_633_1590">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </Link>
      </header>
      <div className={styles.bodyContainer}>
        <div className={styles.titulos}>
          <Titulo margem="442px" titulo="PUCRS" subtitulo="26/02/2023" />
          <Titulo margem="508px" titulo="Alura" subtitulo="06/09/2023" />
          <Titulo margem="712px" titulo="Férias" subtitulo="13/12/2023" />
          <Titulo margem="516px" titulo="AGES" subtitulo="26/02/2024" />
          <Titulo margem="812px" titulo="Rocketseat" subtitulo="23/03/2024" />
          <Titulo margem="388px" titulo="Projeto Destaque" subtitulo="04/07/2024" />
          <Titulo margem="60px" titulo="Memorisely" subtitulo="04/07/2024" />
        </div>
        <div className={styles.line}>
          <Bolinha margem="486px" /> 
          <Bolinha margem="548px" />
          <Bolinha margem="748px" />
          <Bolinha margem="560px" />
          <Bolinha margem="850px" />
          <Bolinha margem="430px" />
          <div className={styles.bolinhaFinal} />




        </div>
        <div className={styles.cards}>
          <CardConhecimentos margem="60px" imagem={puc} texto="Aos meus 18 anos, entrei na faculdade de Engenharia de Software na PUCRS. Lá tive meu primeiro contato com programação, na linguagem Java com a cadeira de Fundamentos da Programação, além de outras cadeiras fundamentais sobre a computação." />
          <CardConhecimentos margem="60px" imagem={poo} texto="Já no segundo semestre da faculdade, estava me aprofundando na programação com a cadeira de Programação Orientada a Objetos. Querendo saber mais sobre o conteúdo, assinei o plano da Alura, onde pude aprender muito mais rápido e de forma didática a lógica de programação, e futuramente outros conteúdos além da faculdade." />
          <CardConhecimentos margem="60px" imagem={ferias} texto="Durante o período das férias de verão pude aproveitar muito os cursos da Alura e aprender conteúdos fora da faculdade. Foi quando conheci o desenvolvimento web. Aprendi HTML, CSS e Javascript, e comecei a fazer meus primeiros projetos pessoais." />
          <Certificados margem="60px" certificadosFotos={certificadosAlura} />
          <CardConhecimentos margem="60px" imagem={ages} texto="Já aos 19 anos, no terceiro semestre, comecei a cursar a cadeira AGES 1 (Agência Experimental de Software), que foi para mim a melhor cadeira da faculdade até hoje. Nela, recebemos um cliente e trabalhamos no método SCRUM para desenvolver um MVP da proposta trazida pelo cliente. O nosso projeto,
Polimatech, era uma plataforma para vestibulandos e estudantes do ensino médio." />
          <CardConhecimentos margem="60px" imagem={rocketseat} texto="Após decidirmos as tecnologias na AGES, senti ainda mais a necessidade de aprender React, já queria dar esse passo no desenvolvimento web e assinei a plataforma da RocketSeat, onde já havia participado de um evento gratuito e gostei muito da didática deles. Durante o terceiro semestre pude me aprofundar muito em React para o front-end e gostei muito de poder trabalhar em equipe na AGES." />
          <Certificados margem="60px" certificadosFotos={certificadosRocketseat} />
          <CardConhecimentos margem="60px" imagem={destaque} texto="No final do semestre acontece uma votação para eleger o melhor projeto da AGES e felizmente fomos premiados! " />
          <CardConhecimentos margem="60px" imagem={memorisely} texto="Depois do projeto da AGES me interessei muito por UI Design, queria aprender boas práticas para criar uma interface intuitiva e aprimorar minhas habilidades com o Figma. Foi aí que assinei o Memorisely e pude me aprofundar muito com a plataforma sobre UX/UI Design." />
          <Certificados margem="80px" certificadosFotos={certificadosMemorisely} />
        </div>
      </div>
    </div>
  );
}

export default Conhecimentos;
