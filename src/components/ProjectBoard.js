import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import ProjectTaskItem from './ProjectTask/ProjectTaskItem';
import PropTypes from "prop-types";
import { getBacklog } from "../actions/ProjectTaskAction";

 class ProjectBoard extends Component {

    componentDidMount() {
        this.props.getBacklog();
    }

    render() {
        const {project_tasks} = this.props.project_tasks;

        let BoardContent;
        let todoItem = [];
        let inProgressItem = [];
        let doneItem = [];

        const BoardAlgrithm = project_tasks => {
            if (project_tasks.length < 1) {
                return (
                    <div className="alert alert-info text-center" role="alert">
                        No project tasks in this board
                    </div> 
                )
            } else {
                const tasks = project_tasks.map(project_task => (
                    <ProjectTaskItem key={project_task.id} project_task={project_task} />
                ));

                for (let i = 0; i < tasks.length; i++) {
                    if(tasks[i].props.project_task.status === "TO_DO") {
                        todoItem.push(tasks[i])
                    }

                    if(tasks[i].props.project_task.status === "IN_PROGRESS") {
                        inProgressItem.push(tasks[i])
                    }

                    if(tasks[i].props.project_task.status === "DONE") {
                        doneItem.push(tasks[i])
                    }
                }
            }
        };

        BoardAlgrithm(project_tasks);


        return (
            <div className="container">
        <Link to="/addProjectTask" className="btn btn-primary mb-3">
            <i className="fas fa-plus-circle"> Create Project Task</i>
        </Link>
        <br />
        <hr />
        {//<!-- Backlog STARTS HERE -->
        }
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-secondary text-white">
                            <h3>TO DO</h3>
                        </div>
                    </div>

                    {//<!-- SAMPLE PROJECT TASK STARTS HERE -->
                    }
                    
                    {todoItem}

                    {//<!-- SAMPLE PROJECT TASK ENDS HERE -->
                    }
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-primary text-white">
                            <h3>In Progress</h3>
                        </div>
                    </div>
                    {//<!-- SAMPLE PROJECT TASK STARTS HERE -->

                    //<!-- SAMPLE PROJECT TASK ENDS HERE -->
                    }
                    {inProgressItem}
                </div>
                <div className="col-md-4">
                    <div className="card text-center mb-2">
                        <div className="card-header bg-success text-white">
                            <h3>Done</h3>
                        </div>
                    </div>
                    {//<!-- SAMPLE PROJECT TASK STARTS HERE -->

                    //<!-- SAMPLE PROJECT TASK ENDS HERE -->
                    }
                    {doneItem}
                </div>
            </div>
        </div>

        {//<!-- Backlog ENDS HERE -->
        }
    </div>
        )
    }
}
ProjectBoard.protoType = {
    getBacklog:PropTypes.func.isRequired,
    project_tasks: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project_tasks: state.project_task
});



export default connect(mapStateToProps, {getBacklog})(ProjectBoard);
