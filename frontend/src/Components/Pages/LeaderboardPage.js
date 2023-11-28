import { clearPage, renderPageTitle, renderHomeButton } from "../../utils/render";
import Navigate from "../Router/Navigate";


const LeaderboardPage = async () =>{
  try {
    clearPage();
    renderPageTitle('Scores'); 
    
    const result = await fetch(`${process.env.API_BASE_URL}/leaderboard`,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
    });

    const users = await result.json();
    
    renderUsers(users);

    const main = document.querySelector("main");
    main.innerHTML += renderHomeButton();

    // Back home button
   const backHomeButton = document.querySelector("#home-button");
   backHomeButton.addEventListener("click", () => {
     Navigate("/");
   });
    
 } catch (err){
    console.error('Leaderboard error', err); 
  throw err;
 }
};

function getAllUsersLines(listUsers){
  let count = 0;
  let userLines = `
  <thead>
    <tr>
      <th>
        Ranking
      </th>
      <th>
        Name
      </th>
      <th>
        Score
      </th>
    </tr>
  </thead>`

  listUsers?.forEach((user) => {
    count += 1;
    userLines += `
    <tr>
      <td >${count}</td>
      <td >${user.username}</td>
      <td >${user.score}</td>
    </tr>
    `;
  });
  
  return userLines
}

function renderUsers(users){
  const usersTable = getAllUsersLines(users);
  const main = document.querySelector('main');
  main.innerHTML += usersTable;
}

export default LeaderboardPage;