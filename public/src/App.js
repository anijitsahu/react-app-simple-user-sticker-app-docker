// components
import Title from "./components/Title";
import UsersList from "./components/UsersList";

// css
import "./css/style.css";

const App = () => {
  return (
    <main className="container">
      {/* including the Title as well as UsersList components */}
      <Title />
      <UsersList />
    </main>
  );
};

export default App;
