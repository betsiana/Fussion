export default () => {
    const createDiv = document.createElement('div');
    const home = `
    <header>
    <nav> 
    <ul> 
       <li> <a href="#/somos"> Quienes Somos </a> </li>
       <li> <a href="#/corazon"> El corazón de Fussion </a> </li>
       <li> <a href="#/impacto"> Impacto </a> </li>
       <li> 
         <a href="#/catalogo"> Catalogo </a>
          <ul> 
            <li> <a href="#/productos"> Productos </a> </li>
            <li> <a href="#/merch"> Merch </a> </li>
          </ul> 
       </li>
       <li> <a href="#/talleres"> Charlas y Talleres </a> </li>
       <li> <a href="#/social"> Social </a> </li>
    </ul>
    </nav>
     <img scr="./image/fussion.jpg">
</header>

  <div>
   <div id="slider1">
       <div> <img src="./image/bolso.jpg" alt=""></div>
       <div> <img src="./image/logo.jpg" alt=""></div>
       <div> <img src="./image/mediobolso.jpg" alt=""></div>
       <div> <img src="./image/modelo.jpg" alt=""></div>
   </div>
  </div>
<footer>
<div>
    <p> Siguenos </p>
    <i class="fab fa-instagram"></i>   
    <i class="fab fa-facebook"></i>
    <i class="fas fa-envelope-square"></i>
    <i class="fab fa-whatsapp"></i>
</div>
</footer>
    `;
    createDiv.innerHTML = home;

    return createDiv;
}