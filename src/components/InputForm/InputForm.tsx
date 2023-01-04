import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";
import styles from "./InputForm.module.css";

interface InputFormProps {
  handleAddTask: (event: FormEvent) => void;
  handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
  newTaskContent: string;
}

export function InputForm({
  handleAddTask,
  newTaskContent,
  handleNewTaskChange,
}: InputFormProps) {
  return (
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
  );
}
