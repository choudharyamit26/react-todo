import { createContext, useReducer, useState } from "react";

const TaskContext = createContext({
  open: "",
  items: [],
  selectedId: null,
  addItem: () => {},
  removeItem: () => {},
  updateItem: () => {},
  completeItem: () => {},
  showModal: () => {},
  closeModal: () => {},
});

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE":
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    case "COMPLETE":
      return state.map((item) =>
        item.id === action.payload ? { ...item, complete: true } : item
      );
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [items, dispatch] = useReducer(taskReducer, []);
  const [modalState, setModalState] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  function addItem(item) {
    dispatch({ type: "ADD", payload: item });
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE", payload: id });
  }

  function updateItem(item) {
    dispatch({ type: "UPDATE", payload: item });
  }

  function completeItem(id) {
    dispatch({ type: "COMPLETE", payload: id });
  }

  function showModal(txt, id = null) {
    if (txt === "open") {
      setModalState("open");
      setSelectedId(id);
    } else if (txt === "delete") {
      setModalState("delete");
      setSelectedId(id);
    } else if (txt === "edit") {
      setModalState("edit");
      setSelectedId(id);
    }
  }

  function closeModal() {
    setModalState("close");
    setSelectedId(null);
  }

  const taskContext = {
    open: modalState,
    selectedId,
    items,
    addItem,
    removeItem,
    updateItem,
    completeItem,
    showModal,
    closeModal,
  };

  return (
    <TaskContext.Provider value={taskContext}>{children}</TaskContext.Provider>
  );
}

export default TaskContext;
