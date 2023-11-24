import game2Pic from '../../assets/math.jpg';
// import game1Pic from '../../assets/3a7be1d8c3752396876e4195f58dd32d.jpg'

const GamePage = () => {
  const game1Description = `
    Un jeu pour apprendre les bases en Algorithmique
  `;

  const game2Description = `
    Un jeu pour comprendre les modulo en Mathématique
  `;

  const gamePageContent = `
  <div class="container my-5">
    <div class="row">
      <div class="col mb-4">
        <a href="/lien-vers-jeu-1" class="text-decoration-none">
          <div class="card">
            <img src="${game2Pic}" class="card-img-top h-100" alt="Image du Jeu 1" style="object-fit: cover;">
            <div class="card-body">
              <h5 class="text-center">Nom du jeu 1</h5>
              <h6 class="text-center">Chemin du chat</h6>
              <h5 class="card-title text-center border rounded">JAVA</h5>
              <p class="card-text text-center">${game1Description}</p>
            </div>
          </div>
        </a>
      </div>
      <div class="col mb-4">
        <a href="/modulo" class="text-decoration-none">
          <div class="card">
            <img src=${game2Pic} class="card-img-top h-100" alt="Image du Jeu 2" style="object-fit: cover;">
            <div class="card-body">
              <h5 class="text-center">Nom du jeu 2</h5>
              <h6 class="text-center">Analyseur de codes modulo</h6>
              <h5 class="card-title text-center border rounded">Mathématique</h5>
              <p class="card-text text-center">${game2Description}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
`;

  const main = document.querySelector('main');
  main.innerHTML = gamePageContent;
  main.style.display = 'flex';
  main.style.justifyContent = 'center';

  const gameAlgoPage = document.querySelector('[href="/lien-vers-jeu-1"]');
  gameAlgoPage.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '/game/algo';
  });

  const gameModuloPage = document.querySelector('[href="/modulo"]');
  gameModuloPage.addEventListener('click',(event) => {
    event.preventDefault();
    window.location.href = '/game/modulo';
  });
};

export default GamePage;
