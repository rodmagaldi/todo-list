import { ChangeEvent, FormEvent, useState } from "react";
import { Header } from "./components/Header/Header";

import styles from "./App.module.css";
import "./global.css";
import { NoTasks } from "./components/NoTasks/NoTasks";
import { InputForm } from "./components/InputForm/InputForm";
import { TasksCount } from "./components/TasksCount/TasksCount";

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
          <InputForm
            handleAddTask={handleAddTask}
            handleNewTaskChange={handleNewTaskChange}
            newTaskContent={newTaskContent}
          />
          <div className={styles.tasksBox}>
            <TasksCount
              tasksCount={tasksCount}
              doneTasksCount={doneTasksCount}
            />
            <div className={styles.tasks}>
              {tasksCount === 0 ? <NoTasks /> : <div></div>}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
