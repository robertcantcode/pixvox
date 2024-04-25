document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("run-button").addEventListener("click", runGame);
});

function runGame() {
    // Get the JavaScript code from the editor
    var jsCode = document.getElementById("js-editor").value;

    // Open a pop-up window with the game
    var gameWindow = window.open("", "Game", "width=600,height=400");

    // Write the HTML structure to the pop-up window
    gameWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>Game</title>
        </head>
        <body>
            <canvas id="game-canvas" width="400" height="400"></canvas>
            <script>
                ${jsCode}
            </script>
        </body>
        </html>
    `);
}
