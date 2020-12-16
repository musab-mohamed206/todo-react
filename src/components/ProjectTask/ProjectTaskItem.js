import React, { Component } from 'react'

class ProjectTaskItem extends Component {
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
                <a href="" className="btn btn-primary">
                    View / Update
                </a>

                <button className="btn btn-danger ml-4">
                    Delete
                </button>
            </div>
        </div>
        )
    }
}

export default ProjectTaskItem;
