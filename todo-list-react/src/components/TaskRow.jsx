export const TaskRow = ({ task, toggleTask, dateTask }) => {

    let nameDate = { task }

    return (
        <tr>
            <td className="d-flex justify-content-between">
                {task.name}
                {dateTask}
                <input type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task)}
                />
            </td>
        </tr>
    )
}