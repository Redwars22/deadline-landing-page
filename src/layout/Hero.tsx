import Picture from "../AndrewKit/picture/picture.component";
import Typography from "../AndrewKit/typography/typography.component";
import styles from "../styles/layout.module.scss";

export default function Hero(){
    return(
        <div
        className={styles.heroContainer}
      >
        <div
          className={styles.heroDescription}
        >
          <Typography variant={"h4"}>
            Um bloco de notas simples e objetivo para Android!
          </Typography>
          <Typography variant="paragraph">
            Ferramentas como o Notion e o Google Keep podem ser bastante úteis,
            mas podem ser complexas demais para coisas mais simples. Às vezes o
            que queremos é apenas uma ferramenta simples para anotar alguma
            coisa bem básica, como ideias, lembretes, etc. É para essa
            finalidade que surgiu o Deadline!
          </Typography>
        </div>
        <div>
          <Picture
            source="./assets/deadline.jpeg"
            alt="Foto do aplicativo Deadline"
            width={"225px"}
          />
        </div>
      </div>
    )
}