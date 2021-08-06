'use strict';

// Select HTML elements
const title = document.querySelector('.render-area');
const submit = document.querySelector('.submit-button');
const pname = document.getElementById('pname');
const checkboxes = document.querySelectorAll('.role-check');

// Create array 
class QueueApp {
    #players=['nick'];

    constructor() {
        // Add event listeners
        submit.addEventListener('click', this.#processData.bind(this))
    };

    // Get role string from array of roles
    #stringifyRoles = function(roles) {
        let rolesString = "Roles: ";

        roles.forEach(el => {
            rolesString+=`${el}, `
        });

        return rolesString;
    }

    // Add box to screen
    #renderPlayerBox = function(playerName, roles) {
        
        // Get string for roles
        const roleString = this.#stringifyRoles(roles);

        // Add player to #players
        this.#players.push(playerName)

        // Add HTML to page
        const html = `
        <div class="player-boxes">
            <h3>Player: ${playerName}</h3>
            <h4>${roleString}</h4><br>
            <button class="button submit-button">Add to Team
            </button> 
        </div>
        `
        title.insertAdjacentHTML('beforeend', html)
    }

    // Get values from the input box
    #getValues = function() {
        const playerName = pname.value;
        const rolesArr = [];
        
        checkboxes.forEach(e => {
            if(e.checked) {
                rolesArr.push(e.value);
            }    
        })

        return [playerName, rolesArr];
    }

    // validation helper functions
    #dataExists = function(playerName, roles)
    {
        if(!playerName||!roles)
        {
            alert('Sorry, you must enter a player name and choose at least one role.');
            return false;
        }
        else return true;
    }

    #noDuplicates = function(playerArray, playerName) {
        let bool = true;

        playerArray.forEach(el => {
            if(el===playerName) {
                alert('Sorry, that name already exists. please choose another name');
                bool = false;
            }
        })
        return bool;
    }

    // Validate entry
    #validateData = function(playerArray, playerName='sdf', roles=[1,2,3]) {

        // name and at least one role must exist
        // name cannot be a duplicate
        if(this.#dataExists(playerName, roles)&&this.#noDuplicates(playerArray, playerName)){
            // call rendering function
            console.log('render');
            this.#renderPlayerBox(playerName, roles);
        }
    }

    // Process data
    #processData = function() {
        // Get values from box
        const [playerName, roles] = this.#getValues();

        // Validate data
        this.#validateData(this.#players, playerName, roles);

    }
}

const app = new QueueApp();