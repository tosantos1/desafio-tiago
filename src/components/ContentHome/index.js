import styles from './styles.module.scss';

export function ContentHome() {
  return (
    <div className={styles.content}>
      <div className={styles.contentItem}>
        <div className={styles.contentItemCard}>
          <div className={styles.itemCardChildren}>
            <h3>HTML</h3>
            <p>
              O HTML é o componente base da web. Isso quer dizer que ele permite a construção de websites e a inserção de novos conteúdos, como imagens e vídeos, por meio dos hipertextos. </p>
          </div>
          <img src="/assets/HTML.png" alt="Logo do HTML com fundo laranja" />
        </div>
        <div className={styles.contentItemCard}>
          <div className={styles.itemCardChildren}>
            <h3>CSS</h3>
            <p>O CSS tem a tarefa de separar o conteúdo do site de sua apresentação visual, alterando elementos como cor do texto, fonte e espaçamento entre blocos, assim como todo o aspecto estético de uma página.</p>
          </div>
          <img src="/assets/CSS.png" alt="Logo do HTML com fundo laranja" />
        </div>
        <div className={styles.contentItemCard}>
          <div className={styles.itemCardChildren}>
            <h3>Javascript</h3>
            <p>
              JavaScript é uma linguagem de programação baseada em texto usada tanto no lado do cliente quanto no lado do servidor que permite tornar as páginas da web interativas . Enquanto HTML e CSS são linguagens que fornecem estrutura e estilo às páginas da web, o JavaScript fornece às páginas da web elementos interativos que envolvem o usuário.</p>
          </div>
          <img src="/assets/Javascript.png" alt="Logo do HTML com fundo laranja" />
        </div>
      </div>
    </div>
  )
}