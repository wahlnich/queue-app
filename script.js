'use strict';

// Select HTML elements
const title = document.querySelector('.render-area');

// Create array 
class QueueApp {
    constructor() {};

    // Get role string from array of roles
    stringifyRoles = function(roles) {
        let rolesString = "Roles: ";

        roles.forEach(el => {
            rolesString+=`${el}, `
        });

        return rolesString;
    }

    renderPlayerBox = function(playerName, roles) {
        
        // Get string for roles
        const roleString = this.stringifyRoles(roles);

        // Add HTML to page
        const html = `
        <div class="player-boxes">
            <h3>Player: ${playerName}</h3>
            <h4>${roleString}</h4><br>
            <button class="submit-button">Add to Team
            </button> 
        </div>
        `
        title.insertAdjacentHTML('beforeend', html)
    }
}

const app = new QueueApp();

app.renderPlayerBox('redsovereign', ['controller', 'sentinel'])