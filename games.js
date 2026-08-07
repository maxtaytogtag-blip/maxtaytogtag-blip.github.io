function openGame(url) {

    let gameWindow = window.open(
        "",
        "_blank"
    );


    gameWindow.document.write(`

        <!DOCTYPE html>

        <html>

        <head>

        <title>Just Games</title>

        <style>

        body {

            margin:0;
            background:black;
            overflow:hidden;

        }


        iframe {

            width:100vw;
            height:100vh;
            border:none;

        }


        button {

            position:absolute;
            top:10px;
            right:10px;

            padding:10px 15px;

            background:#00aaff;

            color:white;

            border:none;

            border-radius:10px;

            cursor:pointer;

            z-index:5;

        }

        </style>

        </head>


        <body>


        <button onclick="document.documentElement.requestFullscreen()">

        Fullscreen

        </button>


        <iframe src="${url}"></iframe>


        </body>


        </html>

    `);

}
