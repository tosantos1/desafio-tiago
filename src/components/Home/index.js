import { Link } from 'react-router-dom';
import { ContentHome } from '../ContentHome';
import styles from './styles.module.scss';

export function HomeContent() {
  return (
    <main>
      <section className={styles.home}>
        <div className={styles.hero}>
          <h1>Aprendendo no presente as tecnologias do futuro</h1>
          <p>Aprendizado contínuo de maneira dinâmica e online o melhor conteúdo de programação
            para você em formato de consultoria.</p>
          <Link className={styles.buttonHero} to="/contato">
            Entrar em contato
          </Link>
        </div>
        <h2>Conteúdos essenciais </h2>
        <p>Sou desenvolvedor e estou à disposição para auxiliar e sanar qualquer dúvida que você tiver no âmbito do Front End de forma gratuita. A seguir conteúdos que eu posso auxiliar:</p>
        <ContentHome />
      </section>
    </main >
  )
}