import { Trash } from "phosphor-react";
import { ChangeEvent } from "react";
import { Task } from "../../App";
import styles from "./Task.module.css";

interface TaskProps {
  task: Task;
  handleTaskCompletionStatus: (event: ChangeEvent<HTMLInputElement>) => void;
  deleteTask: (id: string) => void;
}

export function Task({
  task,
  handleTaskCompletionStatus,
  deleteTask,
}: TaskProps) {
  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <div
      key={task.id}
      className={`${styles.task} ${task.done ? styles.doneTask : null}`}
    >
      <input
        type="checkbox"
        name={task.id}
        id={task.id}
        checked={task.done}
        onChange={handleTaskCompletionStatus}
      />
      <label htmlFor={task.id}>{task.content}</label>
      <Trash size={16} onClick={handleDeleteTask} />
    </div>
  );
}
