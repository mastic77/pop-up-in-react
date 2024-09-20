import Todo from "./components/Todo";

function App() {
  return (
    <div>
        <h1>My Todos</h1>
        <Todo text='React'/>
        <Todo text='React teaching'/>
        <Todo text='React on my pc'/>
    </div>
  );
}

export default App;
