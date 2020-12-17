import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { delteProjectTask } from "../../actions/ProjectTaskAction";

class ProjectTaskItem extends Component {
    onDeleteClick(pt_id) {
        this.props.delteProjectTask(pt_id);
    }
    render() {
        //console.log(this.props)
        return (
            <div className="card mb-1 bg-light">

            <div className="card-header text-primary">
                {this.props.project_task.id}
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">{this.props.project_task.summary}</h5>
                <p className="card-text text-truncate ">
                    {this.props.project_task.acceptanceCriteria}
                </p>
                <Link to={`updateProjectTask/${this.props.project_task.id}`} className="btn btn-primary">
                    View / Update
                </Link>

                <button className="btn btn-danger ml-4"
                onClick={this.onDeleteClick.bind(this, this.props.project_task.id)}
                >
                    Delete
                </button>
            </div>
        </div>
        )
    }
}

ProjectTaskItem.propTyppe = {
    delteProjectTask: PropTypes.func.isRequired
};

export default connect(null, {delteProjectTask}) (ProjectTaskItem);
