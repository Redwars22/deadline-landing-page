import Typography from "../AndrewKit/typography/typography.component";
import styles from "../styles/layout.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Typography variant="paragraph">©2023 Deadline by AndrewNation. Todos os direitos reservados.</Typography>
            <Typography variant="paragraph">Site criado usando React, AndrewKit e Sass.</Typography>
        </footer>
    );
}