const projects_online = [
    ["3-Style Trainer", "src/projects/3-style-trainer/index.html", "Trainer for blind rubiks cube solving"],
    ["Memory Test", "src/projects/memory-test/index.html", "Test how many digits of various constants you remember"],
    ["Mentari", "src/projects/mentari/index.html", "Mental math trainer, based on \"Secrets of Mental Math\" by Arthur Benjamin"],
    ["Whatsmap", "src/projects/whatsmap/index.html", "Generate heatmap from whatsapp chat export"],
    ["base16 Previewer", "src/projects/base16-viewer/index.html", "Preview base16 color schemes"],
]
const projects_popular = [
    ["dotfiles", "https://github.com/b3nj5m1n/dotfiles", "Config for NixOS, Neovim & everything else I use"],
    ["xdg-ninja", "https://github.com/b3nj5m1n/xdg-ninja", "A shell script which checks your $HOME for unwanted files and directories"],
    ["kommentary", "https://github.com/b3nj5m1n/kommentary", "Neovim commenting plugin, written in lua"],
    ["moderncardthemes", "https://github.com/b3nj5m1n/moderncardthemes", "Modern Anki card templates"],
    ["lemonblocks", "https://github.com/b3nj5m1n/lemonblocks", "A status bar generator for lemonbar, inspired by i3blocks and dwmblocks."],
    ["pfui", "https://github.com/b3nj5m1n/pfui", "Efficiently generate content for statusbars, especially eww"],
]
const projects_other = [
    ["tomex", "https://github.com/b3nj5m1n/tomex", "Keep track of library & read books, unfinished but usable with export to storygraph"],
    ["eden.fnl", "https://github.com/b3nj5m1n/eden.fnl", "Fennel parser for extensible data notation, also includes a simple parser combinator library"],
    ["enigma", "https://github.com/b3nj5m1n/ENIGMA", "Enigma implementation"],
    ["crayon", "https://github.com/b3nj5m1n/crayon", "Terminal string styling in common lisp "],
    ["major-system-converter", "https://github.com/b3nj5m1n/major-system-converter", "Set of scripts & tools for converting between numbers and major system encoded words"],
    ["gitega", "https://github.com/b3nj5m1n/gitega", "Keep track of github repository statistics"],
    ["liquidity check", "https://github.com/b3nj5m1n/liquidity_check", "A rust library for checking if a string represents a valid monetary value."],
    ["advent of code", "https://github.com/b3nj5m1n/adventofcode", "My solutions to various advent of code problems"],
]
const projects_lookup = {
    "online": projects_online,
    "popular": projects_popular,
    "other": projects_other,
}

function render_projects(tab) {
    let projects = projects_lookup[tab];
    list_div = '';

    for (var i = 0, len = projects.length; i < len; i++) {
        list_div += '<div class="project-div"><a href="' + projects[i][1] + '">' + projects[i][0] + "</a><p>" + projects[i][2] + "</p></div>"
    }

    document.getElementById("project-list-items").innerHTML = list_div;
    document.getElementById("project-tab-online").classList.remove("project-tab-active");
    document.getElementById("project-tab-popular").classList.remove("project-tab-active");
    document.getElementById("project-tab-other").classList.remove("project-tab-active");
    document.getElementById("project-tab-"+tab).classList.add("project-tab-active");
}

function init() {
    render_projects("popular");

    var text = "Projects";
    var headerContainer = document.getElementById("projects-header-container");
    for (var i = 0, len = text.length; i < len; i++) {
        headerContainer.innerHTML += "<p>" + text[i] + "</p>"
    }

    roatateHeaderColors();

    window.backgroundCanvas = document.getElementById("backgroundCanvas");
    const observer = new ResizeObserver((entries) => {
        const entry = entries.find((entry) => entry.target === backgroundCanvas);
        backgroundCanvas.width = entry.devicePixelContentBoxSize[0].inlineSize;
        backgroundCanvas.height = entry.devicePixelContentBoxSize[0].blockSize;
        /* width = backgroundCanvas.clientWidth;
        height = backgroundCanvas.clientHeight; */
    });
    observer.observe(backgroundCanvas)
    setInterval(drawCanvas, 1);
    // drawCanvas();
}

var colors = [
    "#FF0018", "#FFA52C", "#FFFF41", "#008018", "#0000F9", "#86007D"
]
function roatateHeaderColors() {
    colors.push(colors.shift());
    var letters = document.getElementById("projects-header-container").querySelectorAll("p");
    for (var i = 0, len = letters.length; i < len; i++) {
        letters[i].style.color = colors[i % colors.length];
    }
}

let possible_states = [
    [ // Broucke
        { x: 0.0132604844, y: 0.0, z: 0.0 },
        { x: 1.4157286016, y:  0.0, z: 0.0 },
        { x: -1.4289890859, y: 0.0, z: 0.0 },
        { x: 0.0, y: 1.054151921, z: 0.0 },
        { x: 0.0, y: -0.2101466639, z: 0.0 },
        { x: 0.0, y: -0.8440052572, z: 0.0 },
    ],
    [ // Lagrange
        { x: 1.0, y: 0.0, z: 0.0 },
        { x: -0.5, y:  0.8660254037844386, z: 0.0 },
        { x: -0.5, y: -0.8660254037844386, z: 0.0 },

        { x: 0.0, y:  1.0, z: 0.0 },
        { x: -0.8660254037844386, y: -0.5, z: 0.0 },
        { x: 0.8660254037844386, y: -0.5, z: 0.0 },
    ],
    [ // Henon
        { x: 0.4752073013, y: 0.0, z: 0.0 },
        { x: 1.2395152885, y: 0.0, z: 0.0 },
        { x: -1.7147225898, y: 0.0, z: 0.0 },

        { x: 0.0, y: 1.1801113507, z: 0.0 },
        { x: 0.0, y: -0.4523369153, z: 0.0 },
        { x: 0.0, y: -0.7277744354, z: 0.0 },
    ],
    [ // Yarn
        { x: -1.0, y: 0.0, z: 0.0 },
        { x: 1.0, y: 0.0, z: 0.0 },
        { x: 0.0, y: 0.0, z: 0.0 },

        { x: 0.464445, y: 0.39606, z: 0.0 },
        { x: 0.464445, y: 0.39606, z: 0.0 },
        { x: -0.92889, y: -0.79212, z: 0.0 },
    ],
    [ // Rotating, 4 bodies
        { x: 2.0, y: 0.0, z: 0.0 },
        { x: 0.0, y: 2.0, z: 0.0 },
        { x: -2.0, y: 0.0, z: 0.0 },
        { x: 0.0, y: -2.0, z: 0.0 },

        { x: 0.0, y: 0.5, z: 0.0 },
        { x: -0.5, y: 0.0, z: 0.0 },
        { x: 0.0, y: -0.5, z: 0.0 },
        { x: 0.5, y: 0.0, z: 0.0 },
    ],
    [ // Rotating, 10 bodies
        { x: 5.0, y: 0.0, z: 0.0 },
        { x: 4.045084971874737, y: 2.938926261462366, z: 0.0 },
        { x: 1.5450849718747373, y: 4.755282581475767, z: 0.0 },
        { x: -1.5450849718747368, y: 4.755282581475768, z: 0.0 },
        { x: -4.045084971874736, y: 2.9389262614623664, z: 0.0 },
        { x: -5.0, y: 6.123233995736766e-16, z: 0.0 },
        { x: -4.045084971874737, y: -2.938926261462365, z: 0.0 },
        { x: -1.5450849718747377, y: -4.755282581475767, z: 0.0 },
        { x: 1.5450849718747361, y: -4.755282581475768, z: 0.0 },
        { x: 4.045084971874736, y: -2.938926261462367, z: 0.0 },

        { x: 0.0, y: 0.36, z: 0.0 },
        { x: -0.21160269082529032, y: 0.29124611797498107, z: 0.0 },
        { x: -0.34238034586625526, y: 0.11124611797498107, z: 0.0 },
        { x: -0.3423803458662553, y: -0.11124611797498103, z: 0.0 },
        { x: -0.21160269082529037, y: -0.291246117974981, z: 0.0 },
        { x: -4.4087284769304716e-17, y: -0.36, z: 0.0 },
        { x: 0.2116026908252903, y: -0.29124611797498107, z: 0.0 },
        { x: 0.34238034586625526, y: -0.11124611797498112, z: 0.0 },
        { x: 0.3423803458662553, y: 0.111246117974981, z: 0.0 },
        { x: 0.2116026908252904, y: 0.291246117974981, z: 0.0 },
    ],
]

var current_state = possible_states[5];

const G = 1;
const masses = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

function norm(point) {
    return Math.sqrt(point.x * point.x + point.y * point.y + point.z * point.z);
}

// Defining function of n-body problem
// state: array of 3-vectors, first the n positions, then n velocities
function f(state) {
    const n = state.length / 2;
    const pos = state.slice(0,n);
    const vel = state.slice(n);
    let acceleration = pos.map((point, j) => {
        var total = {x: 0, y: 0, z: 0};
        for (let i = 0; i < n; i++) {
            if (i === j) continue;

            let diff = {
                x: pos[i].x - point.x,
                y: pos[i].y - point.y,
                z: pos[i].z - point.z
            };
            let factor = G * masses[i] * 1/Math.pow(norm(diff), 3);
            total.x += diff.x * factor;
            total.y += diff.y * factor;
            total.z += diff.z * factor;
        }
        return total;
    });
    return vel.concat(acceleration);
}

function addVectors3(a,b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y,
        z: a.z + b.z,
    }
}
function addStackedVectors(a,b) {
    return a.map((a_k, k) => {
        return addVectors3(a_k, b[k]);
    });
}

function scaleVector3(lambda, a) {
    return {
        x: lambda * a.x,
        y: lambda * a.y,
        z: lambda * a.z,
    }
}
function scaleStackedVector(lambda, a) {
    return a.map((a_k) => {
        return scaleVector3(lambda, a_k);
    });
}

function step(y_n, h) {
    let k1 = f(y_n);
    let k2 = f(addStackedVectors(y_n, scaleStackedVector(h/2, k1)));
    let k3 = f(addStackedVectors(y_n, scaleStackedVector(h/2, k2)));
    let k4 = f(addStackedVectors(y_n, scaleStackedVector(h, k3)));
    let weightedSum = addStackedVectors(k1, addStackedVectors(scaleStackedVector(2, k2), addStackedVectors(scaleStackedVector(2, k3), k4)));
    return addStackedVectors(y_n, scaleStackedVector(h/6, weightedSum));
}

var frame = 0;

function drawCanvas() {
    frame += 1;
    var ctx = backgroundCanvas.getContext("2d");
    ctx.setTransform(50, 0, 0, 50, window.innerWidth/2, window.innerHeight/2);
    /* ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight; */
    for (let i = 0; i < current_state.length/2; i++) {
        ctx.fillStyle = colors[i % colors.length];
        ctx.fillRect(current_state[i].x,current_state[i].y,.01,.01);
    }
    current_state = step(current_state, 0.005)
}
