import Icon from "../AndrewKit/icon/icon.component";
import Typography from "../AndrewKit/typography/typography.component";
import styles from "../styles/layout.module.scss";

export default function Features() {
  return (
    <section
      className={styles.featuresSection}
    >
      <div
        className={styles.featureCard}
      >
        <Icon icon="boxes" size="50px" />
        <Typography variant="h6">Leve</Typography>
        <Typography variant="paragraph">
          O APK pesa menos de 40 MB e requer menos de 100 MB de espaço livre
          quando instalado, além de consumir pouca memória RAM e ser rápido e
          leve até em dispositivos com poucos recursos.
        </Typography>
      </div>
      <div
        className={styles.featureCard}
      >
        <Icon icon="life-preserver" size="50px" />
        <Typography variant="h6">Salvamento Automático</Typography>
        <Typography variant="paragraph">
          Não tenha medo de perder suas anotações por coisas bobas como se
          esquecer de salvar. O Deadline salva automaticamente cada alteração
          feita em suas anotações, para que você possa focar somente nelas.
        </Typography>
      </div>
      <div
        className={styles.featureCard}
      >
        <Icon icon="binoculars" size="50px" />
        <Typography variant="h6">Busca</Typography>
        <Typography variant="paragraph">
          Você tem milhares de notas e não consegue encontrar aquela que
          procura? Use a busca do Deadline e pesquise pelo título ou pelo
          conteúdo e ele te mostrará todas as notas que contêm aquele símbolo,
          palavra ou frase em específico.
        </Typography>
      </div>
      <div
        className={styles.featureCard}
      >
        <Icon icon="tags" size="50px" />
        <Typography variant="h6">Prioridade em vermelho!</Typography>
        <Typography variant="paragraph">
          Você pode categorizar as suas notas de acordo com três níveis de
          prioridade (normal, atenção e urgente), sendo que cada um deles será
          indicado por uma cor: branco, amarelo e vermelho, respectivamente.
        </Typography>
      </div>
    </section>
  );
}
