import Card from "./Card";
import style from "./style.module.css";
import { IoMaleFemale } from "react-icons/io5";
import { IoMdMale } from "react-icons/io";

function Cards() {
  const getAnimals = JSON.parse(localStorage.getItem("animals"));
  console.log(getAnimals);

  return (
    <>
      <div className={style.content_animals}>
        {getAnimals
          ? getAnimals.data.map((el) => (
              <Card
                key={el.id}
                nombre={el.nombre}
                imagen={el.imagen}
                edad={el.edad}
                estado={el.estado}
                genero={
                  el.genero === "hembra" ? (
                    <IoMaleFemale className="text-danger" />
                  ) : (
                    <IoMdMale className="text-primary" />
                  )
                }
              />
            ))
          : ""}
      </div>
    </>
  );
}

export default Cards;
