// Import your CSS file here

let remainingCorrectCalculations = 2; // Set the initial number of correct calculations

const ModuloGamePage = () => renderPage();

function renderPage() {
  const main = document.querySelector('main');

  const { correctResult } = generateModuloQuestion();

  main.innerHTML = `
    <!-- Section 1 -->
    <section class="p-3 mb-0" style="background-color: #4527A0; color: #FFF;">
      <div class="row">
        <!-- Game Name -->
        <div class="col-md-3">
          <strong> Jeu Modulo</strong> 
        </div>
        <!-- Answer -->
        <div class="col-md-6 text-center" id="answerContent">
          <strong>Réponse: ${correctResult}</strong> 
        </div>
        <!-- the remaining calculations -->
        <div class="col-md-2 text-right">
          ${remainingCorrectCalculations} restantes
        </div>
        <!-- help button -->
        <div class="col-md-1 text-center">
          <button class="btn btn-info">?</button>
        </div>
        <div class="col-md-15 text-center">
        <p id="answerMessage"></p>
        </div>

      </div>
    </section>
    
    <!-- Section 2 and 3 side by side -->
    <section class="row mx-0" style="background-color: #330066;">
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
  `;

  // Attach event listeners to table cells
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.addEventListener('click', () => handleCellClick(cell, correctResult));
  });
}

// function that handles the click event on a table cell
function handleCellClick(cell, correctResult) {
  const selectedCalculation = cell.textContent.trim();
  const isCorrect = checkAnswer(selectedCalculation, correctResult);

  if (isCorrect) {
    remainingCorrectCalculations = Math.max(0, remainingCorrectCalculations - 1); // Decrease the count of remaining correct calculations
    updateRemainingCalculations(); // Update the display
  }

  const answerMessage = document.getElementById('answerMessage');
  answerMessage.textContent = isCorrect ? 'Correct!' : 'Incorrect. Essaie encore!';
}


// fuction that generate modulo question automatically
function generateModuloQuestion() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 5) + 1;
  const correctResult = a % b;
  return { moduloQuestion: `${a} % ${b}`, correctResult };
}

// function that check if the answer is correct or not
function checkAnswer(selectedCalculation, correctResult) {
  const [a, b] = selectedCalculation.split('%').map(value => parseInt(value.trim(), 10));
  const userResult = a % b;
  return userResult === correctResult;
}

// function that generates a table cell with a random calculation

function renderTableCell() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 5) + 1;
  return `
    <td class="border border-color: rgba(69, 39, 160, 0.5) text-center grid-cell" style="background-color: #6F26A6; color: #FFF; width: 50px; height: 50px; padding: 10px;">
      <div class="content d-flex align-items-center justify-content-center" style="height: 100%;">
        ${a} % ${b}
      </div>
    </td>
  `;
}

// function that updates the element displaying the remaining number of calculations
function updateRemainingCalculations() {
  const remainingCalculationsElement = document.querySelector('.col-md-2.text-right');
  remainingCalculationsElement.textContent = `${remainingCorrectCalculations} restantes`;
}

export default ModuloGamePage;
