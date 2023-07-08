import React from "react";
import { Button } from "reactstrap";
import styles from "./index.module.scss";

export const CalorieCounter = () => {
    return (
        <div className={styles.main}>
            <input placeholder="Add calories" name="calorieInput" />
            <Button>+</Button>
        </div>
    );
}