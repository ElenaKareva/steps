import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <>
      <div className="task-title">учёт тренировок</div>
      <Container workouts={[]} />
    </>
  );
}

export default App;