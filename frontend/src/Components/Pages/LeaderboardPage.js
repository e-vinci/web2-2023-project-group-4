import { clearPage } from "../../utils/render";
import Navigate from "../Router/Navigate";


const LeaderboardPage = async () =>{
  try{
    clearPage();
    
    const result = await fetch(`api/leaderboard`,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
    });

    const leaderboard = await result.json();

    const main = document.querySelector("main");
    
    const leaderboardSection = document.createElement("section");
    leaderboardSection.add("leaderboard");
    main.appendChild(leaderboardSection);

    const title = document.createElement("h4");
    title.add("title");
    title.textContent = "Leaderboard";
    leaderboardSection.appendChild(title);

    if (leaderboard.length > 0) {
      const leaderboardTable = document.createElement("table");
      leaderboardTable.add("leaderboard-table");
      leaderboardSection.appendChild(leaderboardTable);

      const leaderboardTableRowHead = document.createElement("tr");

      const leaderboardTableHeadRank = document.createElement("th");
      leaderboardTableHeadRank.add("table-head");
      leaderboardTableHeadRank.textContent = "RANK";
      leaderboardTableRowHead.appendChild(leaderboardTableHeadRank);

      const leaderboardTableHeadUsername = document.createElement("th");
      leaderboardTableHeadUsername.add("table-head");
      leaderboardTableHeadUsername.textContent = "PSEUDO";
      leaderboardTableRowHead.appendChild(leaderboardTableHeadUsername);

      const leaderboardTableHeadTime = document.createElement("th");
      leaderboardTableHeadTime.add("table-head");
      leaderboardTableHeadTime.textContent = "SCORE";
      leaderboardTableRowHead.appendChild(leaderboardTableHeadTime);

      leaderboardTable.appendChild(leaderboardTableRowHead);

      let i = 1;
      leaderboard.forEach((leaderboardElement) => {
          const leaderboardTableRow = document.createElement("tr");
          leaderboardTable.appendChild(leaderboardTableRow);

          const leaderboardTableRowRank = document.createElement("td");
          leaderboardTableRowRank.add("table-data");
          leaderboardTableRowRank.textContent = `#${i}`;
          leaderboardTableRow.appendChild(leaderboardTableRowRank);

          const leaderboardTableRowUsername = document.createElement("td");
          leaderboardTableRowUsername.add("table-data");
          leaderboardTableRowUsername.textContent = leaderboardElement.username;
          leaderboardTableRow.appendChild(leaderboardTableRowUsername);

          /* const leaderboardTableRowTime = document.createElement("td");
          leaderboardTableRowTime.add("table-data");
          leaderboardTableRowTime.textContent = leaderboardElement.time;
          leaderboardTableRow.appendChild(leaderboardTableRowTime); */

          i += 1;
      });
    }else{
      const isEmpty = document.createElement("h4");
      isEmpty.add("is-empty");
      isEmpty.textContent = "The leaderboard is empty";
      leaderboardSection.appendChild(isEmpty);
    }
 } catch (err){
  console.error('Leaderboard::error', err); 
  throw err;
 }
  
  // Back home button
  const backHomeButton = document.querySelector("#home-button");
  backHomeButton.addEventListener("click", () => {
     Navigate("/");
  });
}

export default LeaderboardPage;