import Clipboard from "../../assets/Clipboard.svg";

import styles from "./NoTasks.module.css";

export function NoTasks() {
  return (
    <div className={styles.noTasks}>
      <img src={Clipboard} />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
