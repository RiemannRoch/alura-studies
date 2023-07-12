import { ITarefa } from "../../../Types/Tarefa";
import style from "../Lista.module.scss";

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
}: ITarefa) {
  console.log("item atual: ", {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
  });
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}