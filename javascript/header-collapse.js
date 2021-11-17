function header_collapse() {
    var collapse = document.getElementById('header-collapse-navbar');
    
    if (collapse.getAttribute('data-toggle') === 'false') {
        collapse.style.left = "0%";
        collapse.setAttribute('data-toggle', 'true');
    } else {
        collapse.style.left = "-100%";
        collapse.setAttribute('data-toggle', 'false');
    }
}