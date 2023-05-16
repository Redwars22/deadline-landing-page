import Menu from "../AndrewKit/menu/menu.component";
import Picture from "../AndrewKit/picture/picture.component";
import Typography from "../AndrewKit/typography/typography.component";
import Hero from "./Hero";
import styles from "../styles/layout.module.scss";

export default function Header() {
  return (
    <>
      <Menu
        leftSide={
          <div
            className={styles.menu}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              className={styles.deadlineIcon}
            >
              <Typography variant={"h3"} color={"#858483"}>
                D
              </Typography>
            </div>
            <Typography variant={"h5"}>DEADLINE</Typography>
          </div>
        }
        rightSide={
          <Typography variant={"paragraph"}>
            <em>Um projeto do @AndrewNation</em>
          </Typography>
        }
      />
      <Hero />
    </>
  );
}
