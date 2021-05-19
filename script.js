// Create array 
const players = [`red`,`jk`,`kira`,`beiree`,`lay`,`tenz`,`shahzam`,`superman`,`fran`,`subroza`];

const OutputPlayers = players =>
{
    let outputString = ``;

    // Pull players from the list and outputs it. Could be random in the future, right now it's gonna be first in first out
    for(let i = 0; i < 10; i++) // only ever want 10 players
    {
        let currentPlayer;
        currentPlayer = players[i];

        outputString += currentPlayer;
    }

    // Clear the 10 names pulled from the array
    for(let i = 0; i < 10; i++)
    {
        players.shift();
    }
}

