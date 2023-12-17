import AlgoPic from '../../assets/AlgoIntro.png';
import logo from '../../assets/logo_ebauche.png';

const AlgoIntroPage = () => {

    
    const content = `
        <div class="col-md-10 mb-4 my-4">
        <div class="card">
            <div class="row">
                <div class="col-md-4">
                    <img src="${AlgoPic}" class="card-img-top" alt="Image du Jeu 1" style="object-fit: contain; width: 300px;">
                </div>
                <div class="col-md-4 my-5 text-center ">
                        <h3>La Gamelle</h3>
                </div>
                <div class="col-md-4">    
                    <img src="${logo}" class="card-img-top" alt="logo" style="object-fit: contain; width: 300px; margin-left: 200px; ">
                </div>
            </div>
            <div class="card-body">
                <h2 class="text-center">Chemin du Chat</h2>
                 <h6 class="text-center">Dans ce jeu vous devrez faire en sorte qu'un chat arrive a son poisson. <br>
                                        Pour cela vous devrez selectionnez une serie d'instruction et le chat suiveras ses instruction pour esperez arriver au poisson<br>
                                        Votre score sera calculer en fonction du temps que vous mettez a faire votre serie et de si vous avez le nombre minimal de mouvement<br> 
                </h6>
                <a href="/lien-vers-jeu-Algo" class="text-decoration-none">
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

  const gameAlgoPage = document.querySelector('[href="/lien-vers-jeu-Algo"]');
  gameAlgoPage.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '/game/algo';
  })


}
export default AlgoIntroPage;