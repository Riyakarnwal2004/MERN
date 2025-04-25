import './App.css'
import UserCard from './components/UserCard'
import gulabJamun from './assets/gulabJamun.png'
import Rabdi from './assets/Rabdi.png'
import rasMalai from './assets/rasMalai.png'
function App() {
 
  return (
    <div className='container'>
    <UserCard name= "Gulab Jamun" image={gulabJamun} desc="description of gulab jamun"/>
    <UserCard name="Rabdi"  image={Rabdi}  desc="description of rabdi"/>
    <UserCard name="Rasmalai" image={rasMalai} desc="description of rasmalai"/>

    </div>
  )
}

export default App
