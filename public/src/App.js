// components
import Title from "./components/Title"
import UsersList from "./components/UsersList"

// css
import "./css/style.css"

const App = () => {
	return (
		<div className="container">
			{/* including the Title as well as UsersList components */}
			<Title />
			<UsersList />
		</div>
	)
}

export default App
