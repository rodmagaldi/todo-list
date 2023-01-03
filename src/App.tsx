import styles from "./App.module.css";
import { PlusCircle } from "phosphor-react";
import { Header } from "./components/Header";

import "./global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.bodyBox}>
        <div className={styles.contentBox}>
          <form className={styles.inputBox}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>
              Criar
              <PlusCircle size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
