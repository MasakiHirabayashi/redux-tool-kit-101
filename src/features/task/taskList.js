import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./taskSlice";
import TaskItem from "./TaskItem";

export const TaskList = () => {
    // storeに保持されているtaskのstateを取得する
    const tasks = useSelector(selectTasks);

    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={tasks.id} task={task} />
            ))}
        </>
    );
};

export default TaskList;
