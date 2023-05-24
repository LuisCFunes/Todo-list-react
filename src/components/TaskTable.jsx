import { TaskRow } from "./TaskRow"

export const TaskTable = ({ tasks, toggleTask, check = false, tasksTitle, date }) => {

    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    let dateB;

    const taskTableRows = (doneValue) => {
        if (doneValue === true) {
            dateB = getCurrentDate();
        } else {
            dateB = "";
        }

        date = dateB;
        return (
            tasks
                .filter(task => task.done === doneValue)
                .map(task => (
                    <TaskRow task={task} key={task.name} toggleTask={toggleTask} date={dateB} />
                ))
        )
    }
    return (
        <table className="table table-dark table-striped table-bordered border-secondary">
            <thead className="table-primary">
                <tr>
                    <th>{tasksTitle}</th>
                </tr>
            </thead>
            <tbody>
                {
                    taskTableRows(check)
                }
            </tbody>
        </table>)
}