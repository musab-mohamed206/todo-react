import axios from "axios";

export const addProjectTask = (project_task , history) => async dispatch => {
    await axios.post("http://localhost:8080/api/todo" , project_task);
    history.push("/");
}