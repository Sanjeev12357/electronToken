/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div className="flex items-center justify-center flex-col">
            <ul>
              <li className="text-black text-5xl font-bold ">{todo.title}</li>
              <li className="text-black text-3xl text-ellipsis font-semibold">{todo.description}</li>
            </ul>

            
          </div>
        );
      })}
    </div>
  );
}
