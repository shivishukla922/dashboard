import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ categoryId, onClose, onSave, categories, onRemoveWidget }) => {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setwidgetText] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState(
    categoryId || categories[0]?.id
  );

  console.log(categoryId, "modal");
  const addWidget = () => {
    onSave(selectedCategoryId, { name: widgetName, text: widgetText });
    onClose();
  };
  const handleRemoveWidget = (categoryId, widgetId) => {
    onRemoveWidget(categoryId, widgetId);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add Widget</h3>
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="widget-text">
          <p>Personalise your dashboard by adding the following widget</p>
        </div>
        <div className="tab-container">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`tab ${
                selectedCategoryId === category.id ? "active-tabs" : ""
              }`}
              onClick={() => selectedCategoryId(categoryId)}
            >
              {category.name}
            </div>
          ))}
        </div>
        <div className="modal-body">
          {categories
            .filter((category) => category.id === selectedCategoryId)
            .map((category) => (
              <div key={category.id} className="category-section">
                {category.widgets.map((widget) => (
                  <div key={widget.id} className="widget-item">
                    <div className="widget-item-box">
                      <input
                        className="input-check"
                        type="checkbox"
                        checked={true}
                        onChange={() =>
                          handleRemoveWidget(category.id, widget.id)
                        }
                      />
                      <label>{widget.name}</label>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          <div className="input-area">
            <input
              type="text"
              placeholder="Widget Name"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
            />
            <textarea
              placeholder="Widget Text"
              value={widgetText}
              onChange={(e) => setwidgetText(e.target.value)}
            />
          </div>

          <div className="modal-footer">
            <button className="save-btn" onClick={addWidget}>
              Confirm
            </button>
            <button onClick={onClose}>cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
