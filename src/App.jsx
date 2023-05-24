import { useState, useEffect } from 'react';
import './App.css';
import { TaskCreator } from './components/TaskCreator';
import { TaskTable } from './components/TaskTable';
import { VisibilityControl } from './components/VisibilityControl';
import { Container } from './components/container';

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [check, setCheck] = useState(false);

  function createNewTask(taskname) {
    if (!taskItems.find(task => task.name === taskname)) {
      setTaskItems([...taskItems, { name: taskname, done: false }])
    }
  }

  const toggleTask = task => {
    setTaskItems(
      taskItems.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t)
    );
  };

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  const cleanTasks = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setCheck(false)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])


  return (
    <>
      <main className="bg-dark vh-100 text-white">
        <Container>
          <h1 className='text-center'>Tasks</h1>
          <TaskCreator createNewTask={createNewTask} />
          <TaskTable tasks={taskItems} toggleTask={toggleTask} tasksTitle={'Tasks Now'} />
          <VisibilityControl setCheck={setCheck} cleanTasks={cleanTasks} isCheked={check} />

          {
            check === true && (
              <TaskTable
                tasks={taskItems}
                toggleTask={toggleTask}
                check={check}
                tasksTitle={'Tasks Done'}
              />
            )
          }
        </Container>
      </main >
    </>
  )
}

export default App
