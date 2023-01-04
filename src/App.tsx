import { ChangeEvent, FormEvent, useState } from "react";
import { Header } from "./components/Header/Header";

import styles from "./App.module.css";
import "./global.css";
import { NoTasks } from "./components/NoTasks/NoTasks";
import { InputForm } from "./components/InputForm/InputForm";
import { TasksCount } from "./components/TasksCount/TasksCount";
import { Task } from "./components/Task/Task";

export interface Task {
  content: string;
  done: boolean;
  id: string;
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
    setTasks([
      { content: newTaskContent, done: false, id: crypto.randomUUID() },
      ...tasks,
    ]);
    setNewTaskContent("");
  };

  const handleTaskCompletionStatus = (event: ChangeEvent<HTMLInputElement>) => {
    const otherTasks = tasks.filter((task) => task.id !== event.target.id);
    const targetTask = tasks.filter((task) => task.id === event.target.id)[0];

    const changedTask = {
      ...targetTask,
      done: !targetTask.done,
    };

    const newTasksList = [...otherTasks, changedTask].sort(
      (a: Task, b: Task) => Number(a.done) - Number(b.done)
    );

    setTasks(newTasksList);
  };

  const handleDeleteTask = (id: string) => {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);

    setTasks(tasksWithoutDeletedOne);
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
              {tasksCount === 0 ? (
                <NoTasks />
              ) : (
                <div className={styles.multipleTasks}>
                  {tasks.map((task) => (
                    <Task
                      task={task}
                      handleTaskCompletionStatus={handleTaskCompletionStatus}
                      deleteTask={handleDeleteTask}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
