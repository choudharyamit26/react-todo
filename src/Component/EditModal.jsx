import { useContext, useState, useEffect } from "react";
import TaskContext from "../store/TaskContext";
import Button from "./Button";

export default function EditModal({ ...props }) {
  const taskCtx = useContext(TaskContext);
  const item = taskCtx.items.find((item) => item.id === taskCtx.selectedId);

  const [editedContent, setEditedContent] = useState(item ? item.content : "");

  useEffect(() => {
    if (item) {
      setEditedContent(item.content);
    }
  }, [item]);
  const handleSave = () => {
    if (item) {
      taskCtx.updateItem({ ...item, content: editedContent });
      taskCtx.closeModal();
    }
  };

  const handleCancel = () => {
    if (item) {
      setEditedContent(item.content);
      taskCtx.closeModal();
    }
  };

  if (!item) {
    return null;
  }

  return (
    <>
      {taskCtx.open === "edit" && (
        <div className="modal-overlay" onClick={handleCancel} {...props}>
          <dialog className="modal" open onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              {taskCtx.selectedId && (
                <div className="edit-mode">
                  <label className="input-label">Task Name:</label>
                  <input
                    type="text"
                    name="task-name"
                    required
                    className="input-field"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
                </div>
              )}
              <div className="button-group">
                <Button
                  name="Save"
                  className="btn btn-add"
                  type="button"
                  onClick={handleSave}
                />
                <Button
                  name="Cancel"
                  className="btn btn-close"
                  type="button"
                  onClick={handleCancel}
                />
              </div>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}
