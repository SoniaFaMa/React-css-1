



import './styles.css'

export default function Home() {
  return (
    <main className="login">
    
    <div className="menu" >
      
  <ul>
    <li class="menu-item"><a href="#">HOME</a></li>
    <li class="menu-item"><a href="#">SERVICES</a></li>
    <li class="menu-item"><a href="#">JOIN</a></li>
    
  </ul>
  <div className='avatar-menu'></div>
</div>


     <div className='target'>

     
     <div className="avatar"></div>
     <div className='title'>Cool App Sign In</div>
     
     <input type="text" placeholder="Username"></input>
     <br></br>
      <input type="password" placeholder="Password"></input>

      <div className='link'>
      <a href='login'>Login</a><p>|</p><a href="forgot">Forgot Password</a>
      </div>



     </div>
     

   


     


      
    </main>
  );
}
