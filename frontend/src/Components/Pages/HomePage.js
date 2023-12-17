import imgGameModule from '../../assets/math.jpg';

const HomePage = () => {
  renderPage();
};

function renderPage() {
  const main = document.querySelector('main');

  main.innerHTML = `
  <div>
      <!-- first part : 'apprenez à coder' -->
      <div class="card border-info first">
        <div class="card-body text-center">
          <h4 class="card-title ">Apprenez à coder en vous amusant</h4>
          <p class="card-text">Si tu as du mal à comprendre les modulo en math, alors cette page est faite pour toi !</p>
        </div>
      </div>
      <!-- second part : divided in 2 -->
      <div class="container text-center second">
          <div class="row align-items-start">
              <!-- description of the site and the story of the game -->
              
              <!-- show the visuals of the 2 games -->
              <div class="col">
                  <div id="carouselExample" class="carousel slide">
                      <div class="carousel-inner">
                      <div class="carousel-item active">
                          <img src="${imgGameModule}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="${imgGameModule}" class="d-block w-100" alt="...">
                      </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                      </button>
                  </div>
              </div>
          </div>
      </div>
      <!-- third part : link to the inscription form -->
      <div class="container third">
          <!-- title -->
          <div class="row text-center" >
              <h4 class="text-primary">Créez un compte pour bénéficier de ces avantages :</h4>
          </div>
          <!-- benefits description -->
          <div class="row">
              <!-- first benefit -->
              <div class="col border">
                  <h6 class="text-primary">Point de contrôle :</h6>
                  <p class="text-primary">Enregistrez votre progression pour ne pas la perdre.</p>
              </div>
              <!-- second benefit -->
              <div class="col border">
                  <h6 class="text-primary">Classement :</h6>
                  <p class="text-primary">Vous pouvez suivre votre classement avec vos scores obtenus.</p>
              </div>
              <!-- third benefit -->
              <div class="col border">
                  <h6 class="text-primary">Accès à tout :</h6>
                  <p class="text-primary">Vous pouvez accéder à des minis projets pour vous challenger.</p>
              </div>
          </div>
      </div>
  </div>
  `;

}

export default HomePage;
