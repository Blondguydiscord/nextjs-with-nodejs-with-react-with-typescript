import Link from "next/link";

export default function TodoInfo({ todo }) {
    return (
      <div>
        <h1>{todo.title}</h1>
        <input type="checkbox" readOnly checked={todo.completed}></input>
        <label htmlFor="completed" id="completed">Completed</label>
      </div>
    );
  }
  
  export const getServerSideProps = async (context) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${context.params.id}`
    );
    const todo = await res.json();
  
    return {
      props: {
        todo,
      },
    };
  };