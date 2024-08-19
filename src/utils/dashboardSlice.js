import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    categories:[]
}
     const dashboardSlice=createSlice({
        name:'dashboard',
        initialState,
        reducers:{
            setCategories:(state,action)=>{
                state.categories=action.payload;
            },
            addWidget:(state,action)=>{
                const {categoryId ,widget}  =action.payload
                const category  = state.categories.find(cat =>cat.id   === categoryId)
                if(category){
                    category.widgets.push(widget);
                }
                {
                    console.error("Category not found for ID:", categoryId);
                  }

            },
            removeWidget:(state,action)=>{
                const {categoryId ,widgetId} =action.payload;
                const category =state.categories.find(cat=>cat.id == categoryId)
                if(category){
                    category.widgets=category.widgets.filter(widget => widget.id !== widgetId)
                }
            }

        }
     })
     export const { addWidget ,removeWidget,setCategories}=dashboardSlice.actions;
     export default dashboardSlice.reducer;