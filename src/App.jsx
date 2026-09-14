import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInputText, setTodoInputText] = useState("");

  const handleInputText = (e) => {
    setTodoInputText(e.target.value);
  };

  const addToList = (e) => {
    e.preventDefault();
    setTodoList([todoInputText, ...todoList]);
    setTodoInputText("");
  };

  const removeTodo = (indexToDelete) => {
    const updatedArray = todoList.filter((todo, index) => {
      if (index != indexToDelete) {
        return todo;
      }
    });
    setTodoList(updatedArray);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 px-4 py-10">

      <div className="w-full max-w-lg rounded-[28px] border border-white/10 bg-white/[0.07] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-9">

        <h1 className="mb-8 text-center text-4xl font-bold tracking-tight text-white">
          Todo App
        </h1>

        <form onSubmit={addToList} className="space-y-4">

          <input
            type="text"
            placeholder="Enter your todo"
            value={todoInputText}
            onChange={handleInputText}
            className="w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-[15px] text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-indigo-400/60 focus:bg-black/30 focus:ring-4 focus:ring-indigo-500/10"
          />

          <button
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 py-4 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-indigo-400 hover:to-violet-400 hover:shadow-indigo-500/30 active:scale-[0.98]"
          >
            Add
          </button>

        </form>

        <div className="mt-8 space-y-3">

          {todoList.map((todo, index) => {
            return (
              <p
                key={index}
                className="animate-[fadeIn_0.35s_ease-out] rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-[15px] text-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-400/30 hover:bg-white/[0.09]"
              >
                {todo}
              </p>
            );
          })}

        </div>

        <button
          onClick={() => removeTodo(0)}
          className="mt-8 w-full rounded-2xl border border-red-400/20 bg-red-500/[0.08] py-3.5 font-medium text-red-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-400/30 hover:bg-red-500/[0.14] active:scale-[0.98]"
        >
          Remove
        </button>

      </div>
    </div>
  );
}

export default App;