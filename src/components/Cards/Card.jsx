import style from "./style.module.css";
import { FaRegHeart } from "react-icons/fa";
import { CgMathPlus } from "react-icons/cg";

function Card({ nombre, imagen, edad, genero }) {
  return (
    <div className={style.card_content}>
      <div className={style.card_img}>
        <img src={imagen} alt={genero} />
      </div>
      <p className="text-center fw-bold h6 mt-3">
        {nombre} <span>{genero}</span>
      </p>
      <p className="text-center ">{edad}</p>
      <div className="d-flex justify-content-around">
        <button className="btn  h2 text-primary">
        <CgMathPlus className="h4 fw-bolder"/>
        </button>
        <button className="btn  h2 text-danger">
          <FaRegHeart className="h5 " />
        </button>
      </div>
    </div>
  );
}

export default Card;
