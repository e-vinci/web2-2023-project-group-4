// Import your CSS file here

import emptyheart from '../../assets/imgcoeurvidev2.png';
import heart from '../../assets/coeurv2.png';

let remainingCorrectCalculations = 0; // Set the initial number of correct calculations
let correctResult = Math.floor(Math.random()* 5)
let score = 0
let lives = 4

const ModuloGamePage = () => renderPage();

function renderPage() {
  const main = document.querySelector('main');

  // const { correctResult } = generateModuloQuestion();

 


  main.innerHTML = `
    <!-- Section 1 -->
    <!-- color :  #4527A0 -->
    <section class="p-3 mb-0 my-3" style="background-color: rgba(69, 39, 160, 0.8); color: #FFF;">
      <div class="row">
        <!-- Game Name -->
        <div class="col-md-2">
          <strong> Jeu Modulo</strong> 
        </div>
        <!-- Score -->
        <div class="col-md-1 text-center">
          <strong> Score : ${score} </strong> 
        </div>
        <!-- Answer -->
        <div class="col-md-3 text-center" id="answerContent">
          <strong>Réponse: ${correctResult}</strong> 
        </div>
        <!-- the remaining calculations -->
        <div class="col-md-2 text-right">
          Reponse restante: ${remainingCorrectCalculations} 
        </div>
        <!-- help button -->
        <div class="col text-center">
        <strong>Vie:</strong>
        </div>
        <div class="col-md-15 text-center">
        <p id="answerMessage"></p>
        </div>

      </div>
    </section>
    
    <!-- Section 2 and 3 side by side -->
      <!-- color :  #330066 -->
      <section class="row mx-0" style="background-color: rgba(51, 0, 102, 0.8);  color: #FFF;">
      <!-- Tutorial of the game -->
      <section class="col-md-3 p-3 mb-3" style="background-color: #330066; color: #FFF;">
        <strong>Tutoriel du jeu:</strong>
        <p>
          Explication de comment jouer le jeu (avec des flèches pour bouger et sélectionner avec la space bar)
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quam fugit! Vero, exercitationem. Veritatis in architecto nemo officiis, aut eveniet? Natus hic maiores molestias neque vero iste eos ipsum asperiores?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quam fugit! Vero, exercitationem. Veritatis in architecto nemo officiis, aut eveniet? Natus hic maiores molestias neque vero iste eos ipsum asperiores?
        </p>
      </section>
      <!-- The game part -->
      <section class="col-md-9 p-3 mb-3" style="background-color: #330066; color: #FFF;">
        <!-- Grid as a table -->
        <table class="table table-bordered table-responsive h-100">
          <tbody>
            <tr>
              ${renderTableCell()}
              ${renderTableCell()}
              ${renderTableCell()}
            </tr>
            <tr>
              ${renderTableCell()}
              ${renderTableCell()}
              ${renderTableCell()}
            </tr>
            <tr>
              ${renderTableCell()}
              ${renderTableCell()}
              ${renderTableCell()}
            </tr>
          </tbody>
        </table>
      </section>
    </section>
    
    <--- popup fin de jeu --->

    <div class="modal" id="modal">
      <div class="modal-back">
      </div>
      <div class="modal-container">
        <p class="elem1">GAME OVER</p>
        <div class="scorefin">
          <p>votre score est : ${score} </p>
        </div>
        <br>
        <a href="/updatepage" class="popup"  >
          <h5 class="btn_popup"> REJOUER </h5>
        </a>
          
        <a href="/retour-homepage" class="popup" >
          <h5 class="btn_popup "> HOMEPAGE </h5>
        </a>
          
      </div>
    </div>
  
    `
  ;
  
  

  // Attach event listeners to table cells
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.addEventListener('click', () => handleCellClick(cell));

  });

  // play again
const gameIntroAlgoPage = document.querySelector('[href="/updatepage"]');
gameIntroAlgoPage.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '/game/modulo';
})

// go back to homepage
const gameIntroModuloPage = document.querySelector('[href="/retour-homepage"]');
gameIntroModuloPage.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '/';
})

  if(remainingCorrectCalculations === 0) generateAndRenderGrid();
  updateRemainingCalculations();

  updateLives();
}

// function that handles the click event on a table cell
function handleCellClick(cell) {
  const clicked = cell.getAttribute('data-clicked') === 'true';

  if (!clicked) {
    const selectedCalculation = cell.textContent.trim();
    const isCorrect = checkAnswer(selectedCalculation, correctResult);

    cell.setAttribute('data-clicked', 'true'); // Marquer la cellule comme cliquée

    if (isCorrect) {
      remainingCorrectCalculations = Math.max(0, remainingCorrectCalculations - 1);
      updateRemainingCalculations();
      score += 50;
      updateScore();

      if (remainingCorrectCalculations === 0) generateAndRenderGrid();
    }
    else{
      lives -= 1;
      updateLives();
    }

    const answerMessage = document.getElementById('answerMessage');
    answerMessage.textContent = isCorrect ? 'Correct! + 50 points' : 'Incorrect, tu perd un vie. Essaie encore!';
  } else {
    // La cellule a déjà été cliquée, ignorer le clic
    const answerMessage = document.getElementById('answerMessage');
    answerMessage.textContent = 'Cette case a déjà été sélectionnée.';
  }
}



// fuction that generate modulo question automatically

/* function generateModuloQuestion() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 5) + 1;
  const correctResult = a % b;
  return { moduloQuestion: `${a} % ${b}`, correctResult };
} */

// function that check if the answer is correct or not
function checkAnswer(selectedCalculation) {
  const [a, b] = selectedCalculation.split('%').map(value => parseInt(value.trim(), 10));
  const userResult = a % b;
  return userResult === correctResult;
}

// function that generates a table cell with a random calculation

function renderTableCell() {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 5) + 1;
  if (a%b === correctResult) remainingCorrectCalculations += 1;
  return `
    <td data-clicked="false" class="border border-color: rgba(69, 39, 160, 0.5) text-center grid-cell" style="background-color: #6F26A6; color: #FFF; width: 50px; height: 50px; padding: 10px;">
      <div class="content d-flex align-items-center justify-content-center" style="height: 100%;">
        ${a} % ${b}
      </div>
    </td>
  `
  ;
}

// function that updates the element displaying the remaining number of calculations
function updateRemainingCalculations() {
  const remainingCalculationsElement = document.querySelector('.col-md-2.text-right');
  remainingCalculationsElement.textContent = `Reponse restante:  ${remainingCorrectCalculations}`;
}

// fonction that updates the answer
 function updateCorrectAnswer() {
  const newcorrectAnswerElement = document.querySelector('.col-md-3.text-center strong');
  newcorrectAnswerElement.textContent = `Réponse: ${correctResult}`;
} 

// function that updates the score
function updateScore() {
  const newScoreElement = document.querySelector('.col-md-1.text-center strong');
  newScoreElement.textContent = `Score: ${score}`;
} 

function updateScorefin(){
  const newcorrectAnswerElement = document.querySelector('.scorefin');
  newcorrectAnswerElement.textContent = `votre score est : ${score} `;

}

// function that updates the lives
function updateLives() {
  const newLivesElement = document.querySelector('.col.text-center strong');
  if (lives === 4){
    newLivesElement.innerHTML  = `Vie:<img src="${heart}" alt="Filled Heart" width = 30 /><img src="${heart}" alt="Filled Heart" width = 30 /><img src="${heart}" alt="Filled Heart" width = 30 /><img src="${heart}" alt="Filled Heart" width = 30 />`
  } else if (lives === 3){
    newLivesElement.innerHTML  = `Vie:<img src="${heart}" alt="Filled Heart" width = 30 /><img src="${heart}" alt="Filled Heart" width = 30 /><img src="${heart}" alt="Filled Heart" width = 30 /><img src="${emptyheart}" alt="Empty Heart" width = 30/>`;
  }else if (lives === 2){
  newLivesElement.innerHTML  = `Vie:<img src="${heart}" alt="Filled Heart" width = 30 /><img src="${heart}" alt="Filled Heart" width = 30 /><img src="${emptyheart}" alt="Empty Heart" width = 30/><img src="${emptyheart}" alt="Empty Heart" width = 30/>`;
  } else if (lives === 1){
  newLivesElement.innerHTML  = `Vie:<img src="${heart}" alt="Filled Heart" width = 30 /><img src="${emptyheart}" alt="Empty Heart" width = 30/><img src="${emptyheart}" alt="Empty Heart" width = 30/><img src="${emptyheart}" alt="Empty Heart" width = 30/>`;
  } else if (lives === 0){
  newLivesElement.innerHTML  = `Vie:<img src="${emptyheart}" alt="Empty Heart" width = 30/><img src="${emptyheart}" alt="Empty Heart" width = 30/><img src="${emptyheart}" alt="Empty Heart" width = 30/><img src="${emptyheart}" alt="Empty Heart" width = 30/>`;
  updateScorefin();
  document.getElementById('modal').style.display = 'block';
  
}
} 


// function that generates and renders the grid
function generateAndRenderGrid() {
  const tableBody = document.querySelector('table tbody');
  
  // Generate a new correct result
  correctResult = Math.floor(Math.random() * 5);
   updateCorrectAnswer();  

  // Update the content of the existing grid cells with new calculations
  tableBody.innerHTML = `
    <tr>
      ${renderTableCell()}
      ${renderTableCell()}
      ${renderTableCell()}
    </tr>
    <tr>
      ${renderTableCell()}
      ${renderTableCell()}
      ${renderTableCell()}
    </tr>
    <tr>
      ${renderTableCell()}
      ${renderTableCell()}
      ${renderTableCell()}
    </tr>
  `;

  // Attach event listeners to the new table cells
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.addEventListener('click', () => handleCellClick(cell));
  });

  if(remainingCorrectCalculations === 0 ) generateAndRenderGrid();
  updateRemainingCalculations();
}



export default ModuloGamePage;
