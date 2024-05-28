document.addEventListener('DOMContentLoaded', () => {
    const projectId = window.location.search.substring(1); // Get project ID from URL parameter
    const playerCode = localStorage.getItem(`playerCode_${projectId}`) || ''; // Get player's code
    const playerName = localStorage.getItem(`playerName_${projectId}`) || 'Player'; // Get player's name
    const projectGame = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Project Game</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                }
                canvas {
                    display: block;
                }
            </style>
        </head>
        <body>
            <div class="navbar">
                <a href="default.html">Home</a>
                <a href="browse.html">Browse</a>
                <a href="create.html">Create</a>
            </div>
            <div class="main-container">
                <div class="main-frame">
                    <br>
                    <a style="color: #ff9217; font-size: 36px;">Project Game</a><br>
                    <br>
                    <p>Project By: ${playerName}</p>
                    <canvas id="gameCanvas" width="640" height="360"></canvas>
                    <script>
                        // Insert the player's code here
                        ${playerCode}
                    </script>
                </div>
            </div>
            <div class="footer">
                <a href="guidelines.html">Guidelines</a><br>
                <br>
            </div>
        </body>
        </html>
    `;
    const projectPreview = document.getElementById('project-preview');
    projectPreview.innerHTML = projectGame;
});
