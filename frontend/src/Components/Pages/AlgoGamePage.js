const AlgoGamePage = () => {
  const content = `
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <div id="option1" class="draggable alert alert-primary" draggable="true" data-action="forward">Forward</div>
          <div id="option2" class="draggable alert alert-primary" draggable="true" data-action="turn-left">Left</div>
        </div>
        <div class="col">
          <div id="option3" class="draggable alert alert-primary" draggable="true" data-action="turn-right">Right</div>
          <div id="option4" class="draggable alert alert-primary" draggable="true" data-action="repeat">Repeat</div>
          <div id="droppable" class="alert alert-secondary">
            Drop here
            <button id="executeButton">Move</button>
          </div>
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="cell" id="cell.algoPage-0"></div>
      <div class="cell" id="cell.algoPage-1"></div>
      <div class="cell" id="cell.algoPage-2"></div>
      <div class="cell" id="cell.algoPage-3"></div>
      <div class="cell" id="cell.algoPage-4"></div>
      <div class="cell" id="cell.algoPage-5"></div>
      <div class="cell" id="cell.algoPage-6"></div>
      <div class="cell" id="cell.algoPage-7"></div>
      <div class="cell" id="cell.algoPage-8"></div>
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
    const cells = document.querySelectorAll('.cell');

    let catPosition = 4; // Position initiale du chat

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

    cells.forEach((cell, index) => {
      cell.addEventListener('click', () => {
        cells[catPosition].classList.remove('cat');
        catPosition = index;
        cells[catPosition].classList.add('cat');
      });
    });
  }

  function executeActions(actions) {
    const chatPosition = { x: 0, y: 0 };
    let direction = 'right';
    let repeatCount = 1;
    let nextAction;

    actions.forEach((action, index) => {
      switch (action) {
        case 'forward':
          for (let i = 0; i < repeatCount; i+1) {
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
          repeatCount = 1;
          break;
        case 'turn-left':
          direction = rotateLeft(direction);
          break;
        case 'turn-right':
          direction = rotateRight(direction);
          break;
        case 'repeat':
          nextAction = actions[index + 1];
          if (!Number.isNaN(parseInt(nextAction, 10))) {
            repeatCount = parseInt(nextAction, 10);
          }
          break;
        default:
          console.log(`Unknown action: ${action}`);
      }
    });

    console.log('Final position of the cat:', chatPosition);
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
};

export default AlgoGamePage;
