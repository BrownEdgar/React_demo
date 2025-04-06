import { useEffect, useReducer } from "react";
import reducer2, { initialState } from './reducer2';

function App2() {
  const [state, dispatch] = useReducer(reducer2, initialState);



  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
      const data = await response.json()
      dispatch({ type: "SAVE", payload: data })
    }
    fetchData()
  }, []);


  return (
    <div className='App'>
      {
        state.posts.map(elem => {
          return <p key={elem.id}>{elem.title}</p>
        })
      }
    </div>
  );
}

export default App2;
