import { useEffect, UseState } from "react";
import List from "../List/List";

const data= [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Vue',
  'Angular',
  'NodeJS'
]

function App() {
  return (
    <div className="App">
     <List items={data}/>
    </div>
  );
}

export default App;
