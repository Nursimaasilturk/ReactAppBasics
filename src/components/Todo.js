import PropTypes from 'prop-types'
function Todo({todos}){
  return(
	<>
	<h3>TODO LIST</h3>
	{todos.map(todo => (
		<p key={todo.id}>{todo.description}
		</p>
	) )}
	</>
  )
}
Todo.propTypes = {
	todos: PropTypes.array
}
export default Todo;