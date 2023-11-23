// JavaScript (AlgoGamePage.js)

const AlgoGamePage = () => {
  const content = `
    <div class="container algo mt-4">
      <div class="row algo">
        <div class="col-algo">
          <div id="option1" class="draggable alert alert-primary-aglo" draggable="true" data-action="forward">Forward</div>
          <div id="option2" class="draggable alert alert-primary-aglo" draggable="true" data-action="turn-left">Left</div>
        </div>
        <div class="col-algo">
          <div id="option3" class="draggable alert alert-primary-aglo" draggable="true" data-action="turn-right">Right</div>
          <div id="option4" class="draggable alert alert-primary-aglo" draggable="true" data-action="repeat">Repeat</div>
          <div id="droppable" class="alert alert-secondary">
            Drop here
            <button id="executeButton">Move</button>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-algo" id = "gridAlgoGame">
      <div class="cell-aglo" id="cell.algoPage-0">0</div>
      <div class="cell-aglo" id="cell.algoPage-1">1</div>
      <div class="cell-aglo" id="cell.algoPage-2">2</div>
      <div class="cell-aglo" id="cell.algoPage-3">3</div>
      <div class="cell-aglo" id="cell.algoPage-4">4</div>
      <div class="cell-aglo" id="cell.algoPage-5">5</div>
      <div class="cell-aglo" id="cell.algoPage-6">6</div>
      <div class="cell-aglo" id="cell.algoPage-7">7</div>
      <div class="cell-aglo" id="cell.algoPage-8">8</div>
    </div>`;

  const main = document.querySelector('main');
  main.innerHTML = content;
  main.style.display = 'flex';
  main.style.justifyContent = 'center';

  attachEventListeners();

  function attachEventListeners() {
    const option1 = document.getElementById('option1');
    const option2 = document.getElementById('option2');
    const option3 = document.getElementById('option3');
    const option4 = document.getElementById('option4');
    const droppable = document.getElementById('droppable');
    const executeButton = document.getElementById('executeButton');

    [option1, option2, option3, option4].forEach(option => {
      option.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.dataset.action);
      });
    });

    droppable.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    droppable.addEventListener('drop', (e) => {
      e.preventDefault();
      const data = e.dataTransfer.getData('text/plain');
      if (data) {
        const newAction = document.createElement('div');
        newAction.innerText = data;
        droppable.appendChild(newAction);
      }
    });

    executeButton.addEventListener('click', () => {
      const actions = Array.from(droppable.children).map(action => action.innerText);
      executeActions(actions);
    });
  }

  function executeActions(actions) {
    const chatPosition = { x: 0, y: 0 }; // Define chatPosition here
    let direction = 'right'; // Define direction here
    const repeatCount = 1;

    const intervalId = setInterval(() => {
      if (actions.length > 0) {
        const action = actions.shift();
        executeAction(action);
      } else {
        clearInterval(intervalId); // Stop the interval when there are no more actions
      }
    }, 1000); // Adjust the interval as needed

    function executeAction(action) {
      switch (action) {
        case 'forward':
          for (let i = 0; i < repeatCount; i += 1) {
            moveForward();
          }
          break;
        case 'turn-left':
          direction = rotateLeft(direction);
          break;
        case 'turn-right':
          direction = rotateRight(direction);
          break;
        case 'repeat':
          // You can handle repeat logic here if needed
          break;
        default:
          console.log(`Unknown action: ${action}`);
      }

      const catCellId = `cell.algoPage-${chatPosition.x + 3 * chatPosition.y}`;
      const catCell = document.getElementById(catCellId);

      // Remove 'cat' class from all cells
      document.querySelectorAll('.cell-aglo').forEach(cell => cell.classList.remove('cat-aglo'));

      catCell.classList.add('cat-aglo');
      console.log('Current position of the cat:', chatPosition);
    }

    function moveForward() {
      switch (direction) {
        case 'right':
          chatPosition.x += 1;
          break;
        case 'left':
          chatPosition.x -= 1;
          break;
        case 'up':
          chatPosition.y -= 1;
          break;
        case 'down':
          chatPosition.y += 1;
          break;
        default:
          break;
      }
    }

    function rotateLeft(dir) {
      const directions = ['up', 'left', 'down', 'right'];
      const currentIndex = directions.indexOf(dir);
      return currentIndex === 0 ? directions[3] : directions[currentIndex - 1];
    }

    function rotateRight(dir) {
      const directions = ['up', 'left', 'down', 'right'];
      const currentIndex = directions.indexOf(dir);
      return currentIndex === 3 ? directions[0] : directions[currentIndex + 1];
    }
  }
};

export default AlgoGamePage;
