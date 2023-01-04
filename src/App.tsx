import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";
import Clipboard from "./assets/Clipboard.svg";

import styles from "./App.module.css";
import "./global.css";

interface Task {
  content: string;
  done: boolean;
}

function App() {
  const [newTaskContent, setNewTaskContent] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const tasksCount = tasks.length;
  const doneTasksCount = tasks.filter((task) => task.done).length;

  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskContent(event.target.value);
  };

  const handleAddTask = (event: FormEvent) => {
    event.preventDefault();
    setTasks([...tasks, { content: newTaskContent, done: false }]);
    setNewTaskContent("");
  };

  return (
    <div className="App">
      <Header />
      <div className={styles.bodyBox}>
        <main className={styles.contentBox}>
          <form onSubmit={handleAddTask} className={styles.inputBox}>
            <input
              type="text"
              placeholder="Adicione uma nova tarefa"
              value={newTaskContent}
              onChange={handleNewTaskChange}
              required
            />
            <button>
              Criar
              <PlusCircle size={16} />
            </button>
          </form>
          <div className={styles.tasksBox}>
            <div className={styles.tasksCount}>
              <div className={styles.tasksCountItem}>
                <p className={styles.createdTasks}>Tarefas criadas</p>{" "}
                <span>{tasksCount}</span>
              </div>
              <div className={styles.tasksCountItem}>
                <p className={styles.doneTasks}>Concluídas </p>
                <span>
                  {doneTasksCount === 0
                    ? doneTasksCount
                    : `${doneTasksCount} de ${tasksCount}`}
                </span>
              </div>
            </div>
            <div className={styles.tasks}>
              {tasksCount === 0 ? (
                <div className={styles.noTasks}>
                  <img src={Clipboard} />
                  <div>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
