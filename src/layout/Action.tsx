import Button from "../AndrewKit/button/button.component";
import Picture from "../AndrewKit/picture/picture.component";
import Typography from "../AndrewKit/typography/typography.component";
import style from "../styles/layout.module.scss";

export default function Action() {
  return (
    <section
      className={style.actionSection}
    >
      <div className={style.actionContainer}>
        <Picture source="./assets/adaptive-icon.png" alt="logo do Deadline" width="200px" />
        <Typography variant="h5">
          Está esperando o quê? Baixe agora o Deadline!
        </Typography>
      </div>
      <Button
        appearance="info"
        title="Baixe o Deadline para Android"
        icon={"save"}
        fontSize="1rem"
        action={() =>
          window.open("https://github.com/Redwars22/deadline/releases")
        }
      />
    </section>
  );
}
