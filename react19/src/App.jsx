import {Welcome} from './Welcome'
import {Hello, HelloWithoutJSX} from './Hello'
import Button from './Button'
import {UserProfile} from './UserProfile'
import {ContactForm} from './ContactForm'
import {StyledForm} from './StyledForm'
import {CandidateProfile} from './CandidateProfile'
import {Product} from './Product'
import {Greeting} from './Greeting'
import './App.css'

function App() {
  return (
    <div>
      <Greeting />

      <Product 
      title="Gaming Laptop" 
      price={1299.99}
      inStock={true}
      categories={["Electronics", "Gaming", "Computer"]} 
      />

      <Welcome name="Bruce" alias="Batman"/>
      <Welcome name="Clark" alias="Superman"/>
      <Welcome name="Diana" alias="Wonder Woman"/>

      <CandidateProfile />
      <StyledForm />
      <ContactForm />
      <UserProfile />
       <Hello />
       <HelloWithoutJSX />
      <Button />

    </div>
  );
}

export default App;
