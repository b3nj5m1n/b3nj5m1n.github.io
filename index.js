function init() {
    var projects = [
        ["Memory Test", "src/projects/memory-test/index.html"],
    ]

    list_div = '';

    for (var i = 0, len = projects.length; i < len; i++) {
        list_div += '<div class="project-div"><a href="' + projects[i][1] + '">' + projects[i][0] + "</a></div>"
    }

    document.getElementById("project-list").innerHTML += list_div;

    var text = "Projects";
    var headerContainer = document.getElementById("projects-header-container");
    for (var i = 0, len = text.length; i < len; i++) {
        headerContainer.innerHTML += "<p>" + text[i] + "</p>"
    }

    roatateHeaderColors();
    setInterval(roatateHeaderColors, 1000);

    cloudCount = 5;
    for (var i = 0, len = cloudCount; i < len; i++) {
        spawnRandomCloud(false);
    }
    setInterval(makeCloudsGoFly, 1000);
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

// Clouds

clouds = []

function spawnCloud(x, y) {
    var img = document.createElement("img");
    img.className = "cloud";
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.bottom = "0px";
    img.style.right = "0px";
    img.src = "res/images/cloud-3700227.svg";
    var src = document.getElementsByTagName("BODY")[0];
    src.appendChild(img);
    clouds.push([img, x, y, Math.floor(Math.random() * 30) + 20]);
    console.log(clouds);
}

function spawnRandomCloud(replacement) {
    if (replacement) {
        spawnCloud(-470, Math.floor(Math.random() * window.innerHeight) - 300);
    } else {
        spawnCloud(Math.floor(Math.random() * 1000) - 1400, Math.floor(Math.random() * window.innerHeight) - 300);
    }
}

function refreshCloud(cloudIndex) {
    clouds[cloudIndex][0].style.left = clouds[cloudIndex][1] + "px";
    clouds[cloudIndex][0].style.top = clouds[cloudIndex][2] + "px";
    if (clouds[cloudIndex][1] > window.innerWidth) {
        clouds[cloudIndex][0].remove();
        clouds.splice(cloudIndex, 1);
        spawnRandomCloud(true);
    }
}

function moveCloud(cloudIndex, offsetX, offsetY) {
    clouds[cloudIndex][1] = clouds[cloudIndex][1] + offsetX;
    clouds[cloudIndex][2] = clouds[cloudIndex][2] + offsetY;
    refreshCloud(cloudIndex);
}

function makeCloudsGoFly() {
    for (var i = 0, len = clouds.length; i < len; i++) {
        moveCloud(i, clouds[i][3], 0);
    }
}
