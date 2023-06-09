import logo from './logo.svg';
import './App.css';
import TodoTemplate from './component/todo/TodoTemplate';
import Login from './component/layout/todo/user/Login';
import Join from './component/layout/todo/user/Join';

function App() {
  return (
    <>
    <Headers/>

    <Routes>
      <Route path = '/' element={<TodoTemplate />}/>
      <Route path = '/login' element={<Login />}/>
      <Route path = '/join' element={<Join />}/>
    </Routes>
    {/* <TodoTemplate /> */}
    <Footer />
    </>

  );
}

export default App;
