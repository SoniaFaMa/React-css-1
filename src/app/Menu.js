
// Un componente es una funcion que empieza por letra mayuscula
// Cuando tenemos un componente por archivo tendremos que exportarlo
// Luego, donde queramos usarlo tendremos que importarlo.
// Todo componente tiene un return


export default function Menu () {

  return (
    <div className="menu">    
    <ul>
      <li class="menu-item"><a href="#">HOME</a></li>
      <li class="menu-item"><a href="#">SERVICES</a></li>
      <li class="menu-item"><a href="#">JOIN</a></li>
    </ul>
    <div className='avatar-menu'></div>
  </div>
)
}