import mathpic from '../../assets/math.jpg';
import logo from '../../assets/logo_ebauche.png';

const ModuloIntroPage = () => {

    
    const content = `
        <div class="col-md-10 mb-4 my-1">
            <div class="card">
                <div class="row">
                    <div class="col-md-4">
                        <img src="${mathpic}" class="card-img-top" alt="Image du Jeu 1" style="object-fit: contain; width: 400px;">
                    </div>    
                    <div class="col-md-4 my-5 text-center">
                        <h3>Le modulo</h3>
                        <h6>lorem ipsum</h6>
                    </div>
                    <div class="col-md-4">
                        <img src="${logo}" class="card-img-top" alt="logo" style="object-fit: contain; width: 300px; margin-left: 200px; ">
                    </div>
                </div>
                <div class="card-body">
                    <h2 class="text-center">Le juste modulo</h2>
                    <h6 class="text-center">Dans ce jeu vous devrez faire en sorte que le chat arrive a attrapper les bons numero. <br>
                                            Vous aurez une reponse. et un serie de equation possible. Le but est de trouver toutes les equation qui ont comme solution la reponse au dessus<br>                                                    
                                            Votre score sera calculer en fonction du temps que vous mettez a faire votre serie et en fonction de la veracité des reponsecheckout ma<br> 
                        </h6>
                        <a href="/lien-vers-jeu-Modulo" class="text-decoration-none">
                            <h5 class="card-title text-center border rounded">JOUER</h5>
                        </a>
                        <p class="card-text text-center"></p>
                </div>
            </div>
        </div>
      `;

  const main = document.querySelector('main');
  main.innerHTML = content;
  main.style.display = 'flex';
  main.style.justifyContent = 'center';

  const gameAlgoPage = document.querySelector('[href="/lien-vers-jeu-Modulo"]');
  gameAlgoPage.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '/game/modulo';
  })


}
export default ModuloIntroPage;