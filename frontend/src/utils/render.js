const clearPage = () => {
  const main = document.querySelector('main');
  main.innerHTML = '';
};

const renderPageTitle = (title) => {
  if (!title) return;
  const main = document.querySelector('main');
  const pageTitle = 
   `<div>${title}</div>
   `;
   main.innerHTML += pageTitle;
};

function renderHomeButton(){
  const button = `
  <div>
    <button id="home-button">

    </button>
  </div>`
  return button
}

export { clearPage, renderPageTitle, renderHomeButton };
