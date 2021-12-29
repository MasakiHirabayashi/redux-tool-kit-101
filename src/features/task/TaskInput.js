import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newTask } from "./taskSlice";
import classes from "./TaskInput.module.css";

import { TextField, Button, Grid } from "@mui/material";

const TaskInput = () => {
    const dispatch = useDispatch();
    const [editTitle, setEditTitle] = useState("");
    const [isTitleError, setIsTitleError] = useState(false);

    /**
     * タイトル変更時のハンドラ
     * @param {object} e eventオブジェクト
     */
    const handleTitleChange = (e) => {
        if (e.target.value === "") {
            setIsTitleError(true);
        }
        setEditTitle(e.target.value);
    };

    /**
     * 追加ボタン押下時のハンドラ
     * @param {object} e eventオブジェクト
     */
    const handleSubmit = (e) => {
        // ページのリロードをキャンセル
        e.preventDefault();
        // reduxの更新
        dispatch(newTask(editTitle));
        // stateを初期値に戻す
        setEditTitle("");
    };

    return (
        <React.Fragment>
            <Grid container className={classes.inputArea}>
                <TextField
                    required
                    id="InputTitle"
                    label="タイトル"
                    valriant="outlined"
                    error={isTitleError}
                    onChange={handleTitleChange}
                />
                <Button onClick={handleSubmit}>登録</Button>
            </Grid>
        </React.Fragment>
    );
};

export default TaskInput;
