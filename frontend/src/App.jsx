import {useState} from 'react';
function App(){
  const [count,setCount]=useState(0);
  const [code,setCode]=useState("");
  const[output,setOutput]=useState("");
  function runCode(){
    setOutput(code);
  }
  return (
    
    <div style={{padding :"20px"}}>
      <h1>ONLINE-IDE </h1>
      <div>
        <h1>counter:{count}</h1>
        <button onClick={() =>setCount(count+1) }> click me </button>
      </div>
      {/* Code Input */}
      <div>
        <h2>write your code</h2>
        <textarea rows="10"
          cols="60"
          value={code}
          onChange={(e)=>setCode(e.target.value)}
          placeholder="type javascript code here..."/>
        <br/>
        <button onClick={runCode} style={{ marginTop: "10px" }}>
  Run Code
</button>

      </div>
      {/*Output Section */}
      <div>
        <h2>Output</h2>
        <pre>{output||"No output yet"}</pre>
      </div>
    </div>
  );
}
export default App;