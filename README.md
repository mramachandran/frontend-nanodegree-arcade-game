frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).


My notes:

a. The player can be moved using arrow keys (left, right, up and down)
b. Each key entry advances the player by once cell based on the key press
c. Collision - collision can happen when the enemy object and the player object happen to be at the same cell (x and y cell position).
                After collision, the player is sent back to start position but at the same x value
d. Player - when the player reaches the water, his position is reset but visual feedabck like score is NOT implemented as of yet
          - use keys to move the player object. Player cannot go out of screen
e. Enemny - In this game, there are five enemy objets will be instantiated and they move from left to right and appear back on screen's left when they go off screen
d. How the game ends - the game doesn't end but needs to end by closing the screen. 
