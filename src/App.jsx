import React from 'react'
import MainTitle from './MainTitle'
import Test from './Test'
import TextToSpeech from './TextToSpeech'
import SpeechToText from './SpeechToText'
import List from './List'
import ListOfProducts from './ListOfProducts'
import "bootstrap/dist/css/bootstrap.min.css";
import Mui from './Mui'
import Wrapper from './Wrapper'
import Card from './Card'
import ListOfCards from './ListOfCards'
import Table from './Table'
import State from './State'
import ShowProducts from './showProducts'
import Form from './Form'
import Form2 from './Form2'
import TaxCalculator from './TaxCalculator'
import SideEffect from './SideEffect'
import SharedData from './SharedData'
import AuthContext from './AuthContext'
import CallApi from './CallApi'



import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

// 1-step
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Navbar from './utils/Navbar'
import Error from './components/Error'
import Parent from './components/Parent'
import Login from './components/Login'
import Profile from './components/Profile'
import ParameterComp from './components/ParameterComp'

function App() {

  const user={
    id:1,
    name:"Samir",
    email:"samir@gmail.com",
    password:"samir123"
  }
  return (
    <>
    {/* <MainTitle/> */}
    {/* <MainTitle></MainTitle> */}
    {/* <Test/> */}
    {/* <TextToSpeech/> */}
    {/* <SpeechToText/>
    <List/> */}
   {/* <ListOfProducts/> */}
   {/* <Mui/> */}
   {/* <Parent/> */}

{/* <Wrapper  />     */}
{/* <Card/> */}
{/* <ListOfCards/> */}

{/* <Table/> */}
{/* <State/> */}
{/* <ShowProducts/> */}
{/* <Form/> */}
{/* <Form2/> */}
{/* <SideEffect/> */}
{/* <SharedData/> */}
{/* <AuthContext.Provider value={user}> */}
  {/* <Form/> */}
  {/* <CallApi/> */}






{/* </AuthContext.Provider> */}
<BrowserRouter>
<Navbar/>
<Routes>
{/* Define Routes */}

<Route path='/'   element={<Home/>}   />
<Route path='/about' element={<About/>}  />
<Route path='/contact' element={<Contact/>}  />

{/* Nested Route  */}

<Route path='/user'  element={<Parent/>}  >
       <Route  index  element={<Profile/>}   />
       <Route   path="login" element={<Login/>}   />
       <Route path='profile' element={<Profile/>} />
     
</Route>


{/* <Route path="/admin" element={<ParentAdmin/>}>
   
   <Route   path='dashboard'  element={<Dashboard/>} />
   <Route   path='statistics'  element={<Statisctis/>} />

</Route> */}
<Route   path='/products/:id' element={<ParameterComp/>}  />


{/* Error Route */}
<Route  path='*'  element={<Error/>}/>

</Routes>

</BrowserRouter>


    </>
  )
}

export default App