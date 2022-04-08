import React from 'react';
import { AlertComponent } from './components/Alert/Alert';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';


function App() {
  return (
    <>
    <header className="header bg-primary">
      <div className="container">
          <div className="header__inner navbar navbar-dark navbar-expand-lg container">
            <a className="navbar-brand">Todo-list</a>
        </div>
      </div>
    </header>
    <main>
        <section>
          <div className="container pt-4">
            <AlertComponent />
            <TodoForm />
            <TodoList />
          </div>
        </section>
    </main>
    </>
  );
}

export default App;
