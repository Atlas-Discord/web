function header_genessis() {
    header = document.querySelector('header');

    var collapse = document.createElement('div');
        collapse.classList.add('collapse');
        collapse.setAttribute('id', 'collapseHeader');

    var collapse_content = document.createElement('div');
        collapse_content.classList.add('content');

    var collapse_content_close = document.createElement('div');
        collapse_content_close.classList.add('close-section');
    var collapse_content_ul = document.createElement('ul');

    var collapse_content_close_button = document.createElement('button');
        collapse_content_close_button.classList.add('btn-close');
        collapse_content_close_button.setAttribute('type', 'button');
        collapse_content_close_button.setAttribute('data-bs-toggle', 'collapse');
        collapse_content_close_button.setAttribute('data-bs-target', '#collapseHeader');
        collapse_content_close_button.setAttribute('aria-expanded', 'false');
        collapse_content_close_button.setAttribute('aria-controls', 'collapseHeader');
    var collapse_content_ul_li_1 = document.createElement('li');
    var collapse_content_ul_li_2 = document.createElement('li');
        collapse_content_ul_li_2.setAttribute('data-bs-toggle', 'collapse');
        collapse_content_ul_li_2.setAttribute('hred', '#collapseHeader');
        collapse_content_ul_li_2.setAttribute('aria-expanded', 'false');
        collapse_content_ul_li_2.setAttribute('aria-controls', 'collapseHeader');
    var collapse_content_ul_li_3 = document.createElement('li');
    var collapse_content_ul_li_4 = document.createElement('li');

    var collapse_content_ul_li_1_a = document.createElement('a');
        collapse_content_ul_li_1_a.textContent = 'Inicio';
        collapse_content_ul_li_1_a.setAttribute('href', '#');
        collapse_content_ul_li_1_a.setAttribute('class', 'btn');
    var collapse_content_ul_li_2_a = document.createElement('a');
        collapse_content_ul_li_2_a.textContent = 'Equipe';
        collapse_content_ul_li_2_a.setAttribute('href', '#');
        collapse_content_ul_li_2_a.setAttribute('class', 'btn');
    var collapse_content_ul_li_3_a = document.createElement('a');
        collapse_content_ul_li_3_a.textContent = 'Blog';
        collapse_content_ul_li_3_a.setAttribute('href', '#');
        collapse_content_ul_li_3_a.setAttribute('class', 'btn');
    var collapse_content_ul_li_4_a = document.createElement('a');
        collapse_content_ul_li_4_a.textContent = 'Suporte';
        collapse_content_ul_li_4_a.setAttribute('href', '#');
        collapse_content_ul_li_4_a.setAttribute('class', 'btn btn-primary');


    var nav = document.createElement('nav');

    var nav_logo = document.createElement('span');
        nav_logo.classList.add('logo');

    var nav_ul_lg = document.createElement('ul');
        nav_ul_lg.setAttribute('id', 'large-layout');
    var nav_ul_sm = document.createElement('ul');
        nav_ul_sm.setAttribute('id', 'small-layout');

    var nav_ul_li_1_lg = document.createElement('li');
    var nav_ul_li_2_lg = document.createElement('li');
    var nav_ul_li_3_lg = document.createElement('li');
    var nav_ul_li_4_lg = document.createElement('li');
    var nav_ul_li_1_sm = document.createElement('li');

    var nav_ul_li_1_a_lg = document.createElement('a');
        nav_ul_li_1_a_lg.href = '#';
        nav_ul_li_1_a_lg.textContent = 'Incio';
        nav_ul_li_1_a_lg.classList.add('btn');
    var nav_ul_li_2_a_lg = document.createElement('a');
        nav_ul_li_2_a_lg.href = '#';
        nav_ul_li_2_a_lg.textContent = 'Equipe';
        nav_ul_li_2_a_lg.classList.add('btn');
    var nav_ul_li_3_a_lg = document.createElement('a');
        nav_ul_li_3_a_lg.href = '#';
        nav_ul_li_3_a_lg.textContent = 'Blog';
        nav_ul_li_3_a_lg.classList.add('btn');
    var nav_ul_li_4_a_lg = document.createElement('a');
        nav_ul_li_4_a_lg.href = '#';
        nav_ul_li_4_a_lg.textContent = 'Suporte';
        nav_ul_li_4_a_lg.classList.add('btn');
        nav_ul_li_4_a_lg.classList.add('btn-primary');

    var nav_ul_li_1_button_sm = document.createElement('button');
        nav_ul_li_1_button_sm.textContent = 'Mais ≡';
        nav_ul_li_1_button_sm.classList.add('btn');
        nav_ul_li_1_button_sm.classList.add('btn-outline-primary');
        nav_ul_li_1_button_sm.setAttribute('role', 'button');
        nav_ul_li_1_button_sm.setAttribute('data-bs-toggle', 'collapse');
        nav_ul_li_1_button_sm.setAttribute('data-bs-target', '#collapseHeader');
        nav_ul_li_1_button_sm.setAttribute('aria-controls', 'collapseHeader');
        nav_ul_li_1_button_sm.setAttribute('aria-expanded', 'false');
        nav_ul_li_1_button_sm.setAttribute('aria-label', 'Toggle navigation');

    header.appendChild(collapse);
    collapse.appendChild(collapse_content);
    collapse_content.appendChild(collapse_content_close);
    collapse_content.appendChild(collapse_content_ul);
    collapse_content_close.appendChild(collapse_content_close_button);
    collapse_content_ul.appendChild(collapse_content_ul_li_1);
    collapse_content_ul.appendChild(collapse_content_ul_li_2);
    collapse_content_ul.appendChild(collapse_content_ul_li_3);
    collapse_content_ul.appendChild(collapse_content_ul_li_4);
    collapse_content_ul_li_1.appendChild(collapse_content_ul_li_1_a);
    collapse_content_ul_li_2.appendChild(collapse_content_ul_li_2_a);
    collapse_content_ul_li_3.appendChild(collapse_content_ul_li_3_a);
    collapse_content_ul_li_4.appendChild(collapse_content_ul_li_4_a);

    header.appendChild(nav);
    nav.appendChild(nav_logo);
    nav.appendChild(nav_ul_lg);
    nav.appendChild(nav_ul_sm);
    nav_ul_lg.appendChild(nav_ul_li_1_lg);
    nav_ul_lg.appendChild(nav_ul_li_2_lg);
    nav_ul_lg.appendChild(nav_ul_li_3_lg);
    nav_ul_lg.appendChild(nav_ul_li_4_lg);
    nav_ul_li_1_lg.appendChild(nav_ul_li_1_a_lg);
    nav_ul_li_2_lg.appendChild(nav_ul_li_2_a_lg);
    nav_ul_li_3_lg.appendChild(nav_ul_li_3_a_lg);
    nav_ul_li_4_lg.appendChild(nav_ul_li_4_a_lg);
    nav_ul_sm.appendChild(nav_ul_li_1_sm);
    nav_ul_li_1_sm.appendChild(nav_ul_li_1_button_sm);
}

export default {
    header_genessis()
}