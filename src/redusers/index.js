import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import ProjectTaskReducer from "./ProjectTaskReducer";

export default combineReducers({
    //
    errors: errorsReducer,
    project_task: ProjectTaskReducer
})