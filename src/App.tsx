import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";

import "./global.css";
import { ChangeEvent, FormEvent, useState } from "react";

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
                  {doneTasksCount
                    ? doneTasksCount === 0
                    : `${doneTasksCount} de ${tasksCount}`}
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
