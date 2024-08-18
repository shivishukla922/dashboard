import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import data from "../public/data.json";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, addWidget, removeWidget } from "./utils/dashboardSlice";
import Modal from "./Modal";
import { RxCrossCircled } from "react-icons/rx";  

const Dashboard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);
  const [currentCategoryId, setCurrentCategoryId] = useState(null);

  useEffect(() => {
    if(categories.length ===0){
    dispatch(setCategories(data.categories));
    }
   
  }, [dispatch,categories.length]);

  const handleWidgetClick = (categoryId) => {
    setCurrentCategoryId(categoryId);
    setModalOpen(true);
  };
  const handleRemoveWidget = (categoryId, widgetId) => {
    
    dispatch(removeWidget({ categoryId, widgetId }));

  };

  const saveWidget = (categoryId, widget) => {
    const newWidget = {
      id: Math.random().toString(36).substr(2, 9),
      name: widget.name,
      text: widget.text,
    };

    dispatch(addWidget({ categoryId, widget: newWidget }));
  };

  return (
    <div className="dashboard">
      {categories.map((category) => (
        <div key={category.name} className="category">
          <h2>{category.name}</h2>

          <div className="widgets">
            {category.widgets.map((widget) => (
              <div key={widget.id} className="widget">
                <h2>{widget.name}</h2>
                <h3>{widget.text}</h3>
                <div className="cross-div">
                  <RxCrossCircled
                    className="cross-icon"
                    onClick={() => handleRemoveWidget(category.id, widget.id)}
                  />
                </div>
              </div>
            ))}

            <button
              onClick={() => handleWidgetClick(category.id)}
              className="widget"
            >
              {" "}
              + Add widget
            </button>
          </div>
         
        </div>
      ))}
       {isModalOpen && (
            <Modal
              onClose={() => setModalOpen(false)}
              categoryId={currentCategoryId}
              onSave={saveWidget}
            />
          )}
    </div>
  );
};

export default Dashboard;
