import { Elm } from "./Main.elm";
import { Alg } from "cubing/alg";
import { puzzles } from "cubing/puzzles";
import { experimentalSolve3x3x3IgnoringCenters } from "cubing/search";
import { TwistyPlayer } from "cubing/twisty";
const data = require("../3-Style/3STYLE.json")

var app = Elm.Main.init({
    node: document.getElementById("root"),
    flags: { "data": data, "settings": JSON.parse(localStorage.getItem('settings')) }
});

function createTwistyPlayer() {
    var player = document.getElementById('twisty-player');
    if (typeof (player) != 'undefined' && player != null) {
        return;
    }
    player = new TwistyPlayer({
        puzzle: "3x3x3",
        hintFacelets: "none",
        backView: "none",
        background: "none",
        controlPanel: "none",
        foundationDisplay: "opaque",
    });
    player.id = "twisty-player";
    player.classList.add("h-full");
    player.classList.add("w-full");
    document.getElementById("twisty-player-container").appendChild(player);
}

document.addEventListener('DOMContentLoaded', (event) => {
    createTwistyPlayer();
});

app.ports.newCommMessage.subscribe(async function(message) {
    try {
        var alg = new Alg(message);
        await puzzles["3x3x3"].kpuzzle().then(async (kpuzzle) => {
            await experimentalSolve3x3x3IgnoringCenters(
                kpuzzle.algToTransformation(alg.expand()).toKState(),
            ).then(async (solution) => {
                app.ports.newCommReceiver.send(solution.simplify().toString());
                createTwistyPlayer();
                document.getElementById("twisty-player").alg = alg.invert();
            })
        })
    } catch {
        console.log("Error parsing '" + message + "' to alg.")
        document.getElementById("twisty-player").alg = "";
        app.ports.newCommReceiver.send(message);
    }
});

app.ports.newSettingsMessage.subscribe(function(message) {
    localStorage.setItem('settings', JSON.stringify(message));
});

