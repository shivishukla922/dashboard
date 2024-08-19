import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import data from "../public/data.json";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, addWidget, removeWidget } from "./utils/dashboardSlice";
import Modal from "./Modal";
import { RxCrossCircled } from "react-icons/rx";  

const Dashboard = ({searchItem =""}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);
  const [currentCategoryId, setCurrentCategoryId] = useState();
  
  useEffect(() => {
   
    console.log(data.categories);
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
    console.log("Saving widget to Category ID:", categoryId);
    const newWidget = {
      id: Math.random().toString(36).substr(2, 9),
      name: widget.name,
      text: widget.text,
    };

    dispatch(addWidget({ categoryId, widget: newWidget }));
    console.log(categoryId,'id is')
  };

  

  const filterWidgets=(widgets)=>{
    return widgets.filter((widget) =>
      widget && widget.name && widget.name.toLowerCase().includes(searchItem.toLowerCase())
    );
  }

  return (
    <div className="dashboard">
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          category ? (
            <div key={category.id} className="category">
              <h2>{category.name}</h2>
  
              <div className="widgets">
                {category.widgets && category.widgets.length > 0 ? (
                  filterWidgets(category.widgets).map((widget) => (
                    widget ? (
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
                    ) : null
                  ))
                ) : (
                  <p>No widgets available</p>
                )}
  
                <button
                  onClick={() => handleWidgetClick(category.id)}
                  className="widget"
                >
                  + Add widget
                </button>
              </div>
            </div>
          ) : null
        ))
      ) : (
        <p>No categories available</p>
      )}
  
      {isModalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          categoryId={currentCategoryId}
          onSave={saveWidget}
        />
      )}
    </div>
  );
}
export default Dashboard;  