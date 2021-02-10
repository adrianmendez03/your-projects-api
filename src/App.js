import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="form-container">
          <div className="header">Add a project</div>
          <form>
              <label for="name">Project Name:</label>
              <input type="text" name="name"/>
              <label for="tech">Tech:</label>
              <select name="tech">
                  <option value="javascript">JavaScript</option>
                  <option value="react">React</option>
                  <option value="ruby">Ruby</option>
              </select>
              <label for="image">Image: </label>
              <input type="text" name="image"/>
              <label for="description">Description:</label>
              <textarea type="text" name="description"></textarea>
              <div className="button">
                  <input type="submit" value="Submit"/>
              </div>
          </form>
      </div>
    </div>
  );
}

export default App;
