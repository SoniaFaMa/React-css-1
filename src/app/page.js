import './styles.css'

import Menu from './Menu';



import Login from './Login'

function Target(){

return(
  <div className='target'>
     
  <div className="avatar"></div>
  <div className='title'>Cool App Sign In</div>


  </div>
)

}


export default function Home() {


  return (
   
   
   <main className="login">

    <Menu />
     <div className='target'>
    <Target/>
     
     
     
     
     <Login />
     

     </div>
    
      
    </main>
  );
}
