import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "./taskSlice";
import classes from "./TaskItem.module.css";

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div className={classes.listItem}>
            <input
                className={classes.checkBox}
                type="checkbox"
                onClick={() => dispatch(completeTask(task))}
                defaultChecked={task.completed}
            />
            <span className={classes.taskTitle}> {task.title} </span>
            <button
                className={classes.deleteButton}
                onClick={() => dispatch(deleteTask(task))}
            >
                {" "}
                DELETE{" "}
            </button>
        </div>
    );
};

export default TaskItem;
