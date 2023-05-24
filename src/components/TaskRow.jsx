export const TaskRow = ({ task, toggleTask, date }) => {

    let dateDone = "";
    if (date) {
        dateDone = " Date completed: " + date;
    } else {
        dateDone = "";
    }

    return (

        <tr>
            <td className="d-flex justify-content-between">
                <div>
                    {task.name}
                </div>
                <div className="text-success">
                    {dateDone}
                </div>

                <input type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task)}
                />
            </td>
        </tr>
    )
}