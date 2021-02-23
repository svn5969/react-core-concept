import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks =['srk','hritik','amir','sushant']
  const products = [
    {name:'photoshop',price:'$90.99'},
    {name:'Illustrator',price:'$90.99'},
    {name:'Illr',price:'$90.99'},
    {name:'Illator',price:'$90.99'},
]
  return (
    <div className="App">
      <header className="App-header">
        <p>My First React Paragraph</p>
        <Counter></Counter>
        <Users></Users>
          <ul>
            {
              nayoks.map(nayok => <li>{nayok}</li>)
            }
            {
            products.map(product => <li>{product.name}</li>)
            }
          </ul>
          {
          products.map(pd => <Product product ={pd}></Product>)
          }
      
      

      <Person actor={nayoks[0]}></Person>
        <Person actor={nayoks[1]}></Person>
        <Person actor={nayoks[2]}></Person>
      </header>
    </div>
  );
}

function Counter(){
  const[count,setCount] = useState(10)
  const handleIncrease =()=>{
  //  const newCount = count+ 1
   // setCount(newCount)
   setCount( count+ 1)
  }
  return (
    <div>
      <h1>Count :{count}</h1>
      <button onClick ={handleIncrease}>Increase</button>
      <button onClick ={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers]= useState([])
  useEffect(()=>{
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>
        Dynamic Users {users.length}
        <ul>
          {
            users.map(user => <li>{user.name} : {user.phone} : {user.email}</li>)
          }
        </ul>
      </h3>
    </div>
  )
}

function Product(props){
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor :'lightgray',
    height : '200px',
    width:'200px',
    float:'left'
  } 
  const {name,price} = props.product
  console.log(name,price);
  return (
     <div style={productStyle}>
      <h5>Name:{name} </h5>
      <h3>{price} </h3>
      <button>Buy Now</button>
     </div>
   )
}


function Person(props){
  return (
 <div style = {{border:'2px solid red',margin: '10px',width:'400px'}}>
    <h1>Name :{props.actor}</h1>
    <h3>Hero Of The Year</h3>
 </div>
    )
}

export default App;
