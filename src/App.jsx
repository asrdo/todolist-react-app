import { useRef, useState } from 'react'
import './App.css'

function App() {
	const [todos, setTodos] = useState([]);

	const inputRef = useRef();

	function handleAddTodo()
	{
		const text = inputRef.current.value;
		setTodos([...todos, text]);
		inputRef.current.value = "";
	}
	function handleRemoveTodo()
	{
		setTodos(todos =>
		{
			const newTodos = [...todos];
			newTodos.pop();
			return newTodos;
		})
	}

  return (
		<>
			<main className="App">
				<h1>To-Do List</h1>
				<div className="container">
					<div className="inputs">
						<input ref={inputRef} type="text" name="item-name" id="item-name" placeholder="Enter item.." />
						<div className="buttons">
							<button onClick={handleAddTodo}>Add</button>
							<button onClick={handleRemoveTodo}>Remove</button>
					</div>
					</div>
					<ul>
						{todos.map((item) =>
						{
							return <li>{item}</li>;
						})}
					</ul>
				</div>
			</main>
		</>
  )
}

export default App;