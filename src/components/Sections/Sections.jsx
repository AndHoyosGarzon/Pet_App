import style from "./style.module.css";

function Sections() {
  return (
    <div className={style.content_section}>
      <div className={style.content_big}>
        <div className={style.sectionCardBig}></div>
      </div>
      <div className={style.content_small}>
        <div className={style.sectionCards}>left-top</div>
        <div className={style.sectionCards}>right-top</div>
        <div className={style.sectionCards}>left-bottom</div>
        <div className={style.sectionCards}>right-bottom</div>
      </div>
    </div>
  );
}

export default Sections;
