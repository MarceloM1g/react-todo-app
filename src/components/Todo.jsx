import { useState } from 'react';
import TodoItem from './TodoItem';
import '../index.css';

function Todo() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    // Função para add task
    const addTask = () => {
        if (task.trim() === '') {
            return;
        }

        setTodos([...todos, {text: task, done: false}]);
        setTask('');
    };

    // Função para marcar task feita / não feita
    const toggleTask = (index) => {
        const updated = [...todos];
        updated[index].done = !updated[index].done;
        setTodos(updated);
    };

    // Função para Remover Task
    const removeTask = (index) => {
        const updated = todos.filter((_, i) => i !== index);
        setTodos(updated);
    };

    return (
        <div className='container'>
           <h2>Lista de Tarefas</h2>
           <input type='text' value={task} onChange={(e) => setTask(e.target.value)} maxLength={20} placeholder='Digite sua Tarefa' />
           <button className='add-btn' onClick={addTask}>Adicionar</button>

           <ul>
            {todos.map((todo, index) => (
              <TodoItem 
              key={index} 
              todo={todo} 
              toggle={() => toggleTask(index)}
              remove={() => removeTask(index)}
              /> 
            ))}
           </ul>
        </div>
    )
}

export default Todo;