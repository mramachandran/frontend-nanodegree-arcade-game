frontend-nanodegree-arcade-game
===============================

**Steps to play**:

* The player can be moved using arrow keys (left, right, up and down)
* Each key entry advances the player by once cell based on the key press
* Collision - collision can happen when the enemy object and the player object happen to be at the same cell (x and y cell position).
                After collision, the player is sent back to start position but at the same x value
* Player - when the player reaches the water, his position is reset but visual feedabck like score is NOT implemented as of yet
          - use keys to move the player object. Player cannot go out of screen
* Enemy - In this game, there are five enemy objets will be instantiated and they move from left to right and appear back on screen's left when they go off screen
* How the game ends - the game doesn't end but needs to end by closing the screen. 
