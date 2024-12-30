import "./App.css";
import Card from "./Component/Card.jsx";
import ConfirmModal from "./Component/ConfirmModal.jsx";
import EditModal from "./Component/EditModal.jsx";
import Header from "./Component/Header.jsx";
import Modal from "./Component/Modal.jsx";
import { TaskProvider } from "./store/TaskContext.jsx";

function App() {
  return (
    <>
      <TaskProvider>
        <Header />
        <Card />
        <Modal />
        <ConfirmModal />
        <EditModal />
      </TaskProvider>
    </>
  );
}

export default App;
