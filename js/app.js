// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //the intial position is intiated at a random x and y
    this.x = (Math.floor(Math.random() * 3)+1) * 25
    //this.xCell = parseInt(this.x/101)
    this.y = (Math.floor(Math.random() * 3)+1) * 83
    //this.yCell = parseInt(this.y/83)

    /**
     * speed parameter - as we want the bugs to travel at different speeds
     */
    this.speed = (Math.floor(Math.random() * 3)+1)
    
};



// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //dt = dt*2
    
    //this.x += this.x * dt*(Math.floor(Math.random() * 3)+1)
    //if(this.x > 505) {
        //this.x = (Math.floor(Math.random() * 30)+1);
    //}

    if(this.x > 505) {
        this.x = 0 //reset the enemy to give effect that it enters the screen again               
    } else 
    {

    }
    this.x += 1*this.speed
    //this.y = 83

    //calculate cell positions 
    this.xCell = parseInt(this.x/101)+1
    this.yCell = parseInt(this.y/83)

    //console.log(parseInt(this.x/101))

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    //ctx.drawImage(Resources.get(rowImages[row]), col * 101, row * 83);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {

    constructor() {
        this.sprite = 'images/char-boy.png';
        this.xBoxID = 1;
        this.yBoxID = 5;
        this.xBoxIDMultiplier = 101;
        this.yBoxIDMultiplier = 83;

        this.x = this.xBoxID * this.xBoxIDMultiplier;
        this.y = this.yBoxID * this.yBoxIDMultiplier;
        this.numOfWins = 0;
        this.numOfCollisions = 0;
    }

    /*
     * this is where we capture the key press and move the player accordingly. 
     * Also, as one of the requirements is to not let the player go off the screen,
     * I have added constraints. 
     */

    handleInput(keys) {
            //console.log(keys)

            switch(keys) {
                case 'up':
                    this.yBoxID = this.yBoxID-1;
                    break;
                case 'down':
                    this.yBoxID = this.yBoxID+1;
                    break;
                case 'left':
                    this.xBoxID = this.xBoxID-1;
                    break;    
                case 'right':
                    this.xBoxID = this.xBoxID+1;
                    break;                                     
                default:
                    break; 
            }
            this.xBoxID = (this.xBoxID>4)?this.xBoxID-1:this.xBoxID
            this.xBoxID = (this.xBoxID<0)?this.xBoxID+1:this.xBoxID

            if (this.yBoxID==0) { //when the player reaches the top
                //player wins                 
                this.wins();                    
            } 
            
            this.yBoxID = (this.yBoxID==6)?this.yBoxID-1:this.yBoxID
            //console.log(this.yBoxID)
      };

      update() {
        this.x = this.xBoxID * this.xBoxIDMultiplier;
        this.y = this.yBoxID * this.yBoxIDMultiplier;
    
      }

      /*
       *  When the user wins - a counter is incremented and 
       *  the html score panel is updated. 
       */
          
      wins() {
          this.numOfWins++;
          this.yBoxID =this.yBoxID+5;
          console.log(this.numOfWins);
          this.updateHTMLNumberMessage();
      }

      /*  
      *  Wehn the user loses because of 'collision', 
      * the player is just moved back to the starting position along the same y plane 
      * and the counter that tracks the collision is incremented. 
      * 
      */


      lost() {
        this.resetPlayerPosition();
        this.numOfCollisions++;
        this.updateHTMLNumberMessage();
      }

      render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  
      }

      resetPlayerPosition() {
          this.yBoxID = 5 //when collision happens, the player is sent back to start all over again but 'x' remains the same
      }

    //This function updates the number of wins and losses on the HTML page
    updateHTMLNumberMessage() {      
        this.wins_panel = document.getElementsByClassName('score-panel')[0];
        while (this.wins_panel.firstChild) {
            this.wins_panel.removeChild(this.wins_panel.firstChild);
        }
        this.win_message =  "Number of wins   =   " + this.numOfWins;
        this.loss_message = "Number of losses =   " + this.numOfCollisions;
        this.wins_panel.appendChild(document.createTextNode(this.win_message + '\n' + this.loss_message));  
    }

}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const enemy1 = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();
const enemy4 = new Enemy();
const enemy5 = new Enemy();

allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5]
//,enemy2,enemy3,enemy4,enemy5];

const player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
