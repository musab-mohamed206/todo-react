import { GET_PROJECT_TASK } from "../actions/types";

const initialState ={
    project_tasks:[]
};

export default function(satate = initialState, action) {
    switch (action.type) {
        case GET_PROJECT_TASK:
            return {
                ...satate,
                project_tasks: action.payload
            };
    
        default:
            return satate;
    }
}