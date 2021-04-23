import React, { useState } from 'react';
import './App.css';

function App() {

  const url = "https://your-projects-api.herokuapp.com"
  
  const emptyForm = {
    name: "",
    tech: "javascript",
    image: "",
    repo: "",
    demo: "",
    description: ""
  }

  const [formVals, setFormVals] = useState(emptyForm)

  const handleChange = event => {
    const name = event.target.name
    setFormVals({
      ...formVals,
      [name]: event.target.value
    })
  }

  const handleCreate = newProject => {
    // fetch(url + '/projects/', {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(newProject)
    // }).then(() => {
    //   setFormVals(emptyForm)
    //   alert("Project added!")
    // })
  }

  return (
    <div className="App">
      <div className="form-container">
          <div className="header">Add a project</div>
          <div className="form">
              <label htmlFor="name">Project Name:</label>
              <input type="text" name="name" value={formVals.name} onChange={handleChange}/>
              <label htmlFor="tech">Tech:</label>
              <select name="tech" onChange={handleChange}>
                  <option value="js">JavaScript</option>
                  <option value="react">React</option>
                  <option value="ruby">Ruby</option>
              </select>
              <label htmlFor="image">Image: </label>
              <input type="text" name="image" onChange={handleChange}/>
              <label htmlFor="repo">Repo: </label>
              <input type="text" name="repo" onChange={handleChange}/>
              <label htmlFor="demo">Live Demo: </label>
              <input type="text" name="demo" onChange={handleChange}/>
              <label htmlFor="description">Description:</label>
              <textarea type="text" name="description" onChange={handleChange}></textarea>
              <div className="button">
                  <button onClick={() => handleCreate(formVals)}>Submit</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default App;
