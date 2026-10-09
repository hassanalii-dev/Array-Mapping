import { useState } from "react"

function App() {
  const [todoInputText, setTodoInputText] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleInputText = (e) => {
    setTodoInputText(e.target.value)
  }

  const addToList = (e) => {
    e.preventDefault()

    if (todoInputText === "") return

    setTodoList([todoInputText, ...todoList])
    setTodoInputText("")
  }

  const removeTodo = (indexToDelete) => {
    const updatedList = todoList.filter((todo, index) => {
      return index !== indexToDelete
    })

    setTodoList(updatedList)
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-2xl">

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            Todo App
          </h1>

          <p className="mt-3 text-slate-400">
            Manage your daily tasks with style.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-7">

          <form
            onSubmit={addToList}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              placeholder="Enter your todo..."
              value={todoInputText}
              onChange={handleInputText}
              className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-violet-500"
            />

            <button
              type="submit"
              className="rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-700"
            >
              Add
            </button>
          </form>

          <div className="my-6 flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="font-semibold">My Tasks</h2>

            <span className="rounded-lg bg-violet-600 px-4 py-2 font-bold">
              {todoList.length}
            </span>
          </div>

          <div className="space-y-3">
            {todoList.length === 0 ? (
              <div className="rounded-xl border border-dashed border-slate-700 py-10 text-center">
                <p className="text-sm text-slate-400">
                  Add a task to get started.
                </p>
              </div>
            ) : (
              todoList.map((todo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-600/20 text-violet-400">
                      {index + 1}
                    </span>

                    <p className="break-words text-sm sm:text-base">
                      {todo}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeTodo(index)}
                    className="shrink-0 rounded-lg bg-red-600/15 px-3 py-2 text-sm text-red-400 hover:bg-red-600 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default App