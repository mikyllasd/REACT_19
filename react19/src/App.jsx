import {Welcome} from './Welcome'
import {Hello, HelloWithoutJSX} from './Hello'
import Button from './Button'
import './App.css'

function App() {
  return (
    <div>
       <Hello />
       <HelloWithoutJSX />
      <Welcome />
      <Button />

    </div>
  );
}

export default App;
