import { CourseCard } from "./CourseCard";
import { useState } from "react"; 

export function App() {

  const [count, setCount] = useState(0); //hook //returns array of two things - name of the var and fn to update the var

  function handleIncrement() {
    // count += 1   //can't change the const var
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1) //even if 3 setcounts will still increase one // async all starts from 0

    setCount((prevCount) => prevCount + 1)
    console.log("count in memory now: ", count);
  }
  return (
    <div>
      <h1>Hello world Pritam</h1>
      <p>This is a test</p>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrement}>Like</button>
      <div>
        <CourseCard title="Full Stack" name="Rahul" price={100}/>
        <CourseCard title="projects and applied ai" name="Kirat" price={1000}/>
        <CourseCard title="dsa" name="dhruv" price={1000}/>
      </div>
    </div>
  );
}

export default App;
