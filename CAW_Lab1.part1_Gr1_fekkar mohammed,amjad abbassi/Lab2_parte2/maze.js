var loser = false;
        var inProgress = false; // Flag to track if the game is in progress

        window.onload = function() {
            start = document.getElementById("start");
            end = document.getElementById("end");
            start.onclick = startClick;
            end.onmouseover = overEnd;
            var boundaries = document.querySelectorAll("div#maze div.boundary");
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].addEventListener("mouseover", overBoundary);
            }
        };

        function overBoundary() {
            if (inProgress) {
                loser = true;

                var boundaries = document.querySelectorAll("div#maze div.boundary");
                for (var i = 0; i < boundaries.length; i++) {
                    boundaries[i].style.backgroundColor = "#ff8888";
                }
                document.getElementById("status").innerHTML = "Sorry, you lost. :(";
            }
        }

        clicked = false;

        function startClick() {
            loser = false;
            clicked = true;
            inProgress = true; // The game is in progress
            document.getElementById("status").innerHTML = 'Move your mouse over the "S" to begin.';
            var boundaries = document.querySelectorAll("div#maze div.boundary");
            for (var i = 0; i < boundaries.length; i++) {
                boundaries[i].style.backgroundColor = "#eeeeee";
            }

            var maze = document.getElementById("maze");
            maze.addEventListener("mouseleave", function() {
                if (!loser && inProgress) {
                    loser = true;
                    var boundaries = document.querySelectorAll("div#maze div.boundary");
                    for (var i = 0; i < boundaries.length; i++) {
                        boundaries[i].style.backgroundColor = "#ff8888";
                    }
                    document.getElementById("status").innerHTML = "Nice try, but don't do it again";
                }
            });
        }

        function overEnd() {
            if (inProgress) {
                if (loser) {
                    document.getElementById("status").innerHTML = "Sorry, you lost. :(";
                } else {
                    document.getElementById("status").innerHTML = "You win! :)";
                }
                inProgress = false; // Game has ended
            }
        }



        var button = document.createElement("button");
        button.innerHTML = "RESTART";
        button.style.border="none"
        button.style.width="100%"
        button.addEventListener("click", function() {
            window.location.reload();
        });

        // Find the div element with the "myDiv" class
        var myDiv = document.querySelector(".example");

        // Append the button to the div
        myDiv.appendChild(button);