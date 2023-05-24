export const VisibilityControl = ({ setCheck, cleanTasks, isCheked }) => {

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete it?')) {
            cleanTasks()
        }
    }

    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            <input
                type="checkbox"
                checked={isCheked}
                onChange={e => setCheck(e.target.checked)}
            />
            <label>Show Task Done</label>
            <button onClick={handleDelete} className="btn btn-danger btn-sm">
                Clear
            </button>
        </div>
    )
}  