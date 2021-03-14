import { ADD_To_FAV } from "../constant"

const initialfavoriteReducer ={
       favproduct:[]
}
export const favoriteReducer= (state = initialfavoriteReducer , action) => {
            switch(action.type){
                case ADD_To_FAV  :
                   const favitems = action.payload;
                   const itemsPresent = state.favproduct.find(item => item.id === favitems.id);
                   if(itemsPresent){
                       return{
                           ...state
                       }
                   }
                   else{
                       return{
                           ...state,
                           favproduct: [...state.favproduct , favitems]
                       }

                   }
                default :
                 return state;
                    
            }
}