function init() {
    var projects = [
        ["Memory Test", "src/projects/memory-test/index.html"],
    ]

    list_div = "";

    for (var i = 0, len = projects.length; i < len; i++) {
        list_div += '<div class="project-div"><a href="' + projects[i][1] + '">' + projects[i][0] + "</a></div>"
    }

    document.body.innerHTML += list_div;
}

