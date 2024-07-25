import style from "./style.module.css";

function Sections() {
  return (
    <div className={style.content_section}>
      <div className={style.content_big}>
        <div className={style.sectionCardBig}>
          <img src="../../../public/perritos.png" alt="" />
        </div>
      </div>
      <div className={style.content_small}>
        <div className={style.sectionCards}>
          <div className={style.img_card}>
            <p className="h2 fw-bolder text-danger">Dogs</p>
            <img src="../../../public/dog.png" alt="dog" />
            <button className="btn btn-danger fw-bolder">Load more...</button>
          </div>
        </div>
        <div className={style.sectionCards}>
          <div className={[style.img_card, style.card_cats].join("")}>
            <p className="h2 fw-bolder text-primary">Cats</p>
            <img src="../../../public/cat.png" alt="dog" />
            <button className="btn btn-primary fw-bolder">Load more...</button>
          </div>
        </div>
        <div className={style.sectionCards}>
          <div className={style.img_card}>
            <p className="h2 fw-bolder text-success">Birds</p>
            <img src="../../../public/cat.png" alt="dog" />
            <button className="btn btn-success fw-bolder">Load more...</button>
          </div>
        </div>
        <div className={style.sectionCards}>
          <div className={style.img_card}>
            <p className="h2 fw-bolder text-danger">Cats</p>
            <img src="../../../public/dog.png" alt="dog" />
            <button className="btn btn-danger fw-bolder">Load more...</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
