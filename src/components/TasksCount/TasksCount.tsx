import styles from "./TasksCount.module.css";

interface TasksCountProps {
  tasksCount: number;
  doneTasksCount: number;
}

export function TasksCount({ tasksCount, doneTasksCount }: TasksCountProps) {
  return (
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
  );
}
