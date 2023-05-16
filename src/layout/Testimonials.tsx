import Picture from "../AndrewKit/picture/picture.component";
import Typography from "../AndrewKit/typography/typography.component";
import styles from "../styles/layout.module.scss";

export default function Testimonials() {
  return (
    <section className={styles.testimonialSection}>
      <Typography variant="h4">USUÁRIOS SATISFEITOS</Typography>
      <div
        className={styles.testimonialContainer}
      >
        <section className={styles.testimonialCard}>
          <Picture
            source="https://images.ctfassets.net/1wryd5vd9xez/6imn4PsoUBr6I9Hs8jWxk4/b28965e1afec63588266cf42ba5178ae/https___cdn-images-1.medium.com_max_2000_1_7hkI-ZKsglnbjxCRV1bMZA.png"
            alt="foto do usuário"
            width="150px"
          />
          <Typography variant="h6">Clara Santos da Silva</Typography>
          <Typography variant="paragraph">
            Estou adorando o Deadline! É incrível como um aplicativo tão leve e rápido pode ser tão útil. 
            A busca é muito eficiente e o salvamento automático me salvou de perder várias notas importantes. 
            A categorização por prioridade é simples, mas muito útil. Recomendo!
          </Typography>
        </section>
        <section className={styles.testimonialCard}>
          <Picture
            source="https://images.squarespace-cdn.com/content/v1/559b2478e4b05d22b1e75b2d/1549568089409-SJ70E6DVG3XTE70232OL/Nesbit.jpg"
            alt="foto do usuário"
            width="150px"
          />
          <Typography variant="h6">Lucas Oliveira Souza</Typography>
          <Typography variant="paragraph">
            O Deadline é simplesmente fantástico! 
            Não ocupa quase nada de espaço no meu celular e funciona perfeitamente em dispositivos mais antigos. 
            A busca é super rápida e as notas são salvas automaticamente, o que me tranquiliza muito. 
            A categorização por prioridade é ótima e ajuda muito na organização. Recomendo a todos!
          </Typography>
        </section>
      </div>
    </section>
  );
}
