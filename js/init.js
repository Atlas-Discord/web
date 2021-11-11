window.onload = initPage;

function initPage() {
    header_genessis();
    footer_genessis();
}

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
        collapse_content_ul_li_1_a.setAttribute('href', './index-page.html');
        collapse_content_ul_li_1_a.setAttribute('class', 'btn');
    var collapse_content_ul_li_2_a = document.createElement('a');
        collapse_content_ul_li_2_a.textContent = 'Equipe';
        collapse_content_ul_li_2_a.setAttribute('href', './equipe-page.html');
        collapse_content_ul_li_2_a.setAttribute('class', 'btn');
    var collapse_content_ul_li_3_a = document.createElement('a');
        collapse_content_ul_li_3_a.textContent = 'Blog';
        collapse_content_ul_li_3_a.setAttribute('href', '#');
        collapse_content_ul_li_3_a.setAttribute('class', 'btn');
    var collapse_content_ul_li_4_a = document.createElement('a');
        collapse_content_ul_li_4_a.textContent = 'Suporte';
        collapse_content_ul_li_4_a.setAttribute('href', './suporte-page.html');
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
        nav_ul_li_1_a_lg.href = './index-page.html';
        nav_ul_li_1_a_lg.textContent = 'Incio';
        nav_ul_li_1_a_lg.classList.add('btn');
    var nav_ul_li_2_a_lg = document.createElement('a');
        nav_ul_li_2_a_lg.href = './equipe-page.html';
        nav_ul_li_2_a_lg.textContent = 'Equipe';
        nav_ul_li_2_a_lg.classList.add('btn');
    var nav_ul_li_3_a_lg = document.createElement('a');
        nav_ul_li_3_a_lg.href = '#';
        nav_ul_li_3_a_lg.textContent = 'Blog';
        nav_ul_li_3_a_lg.classList.add('btn');
    var nav_ul_li_4_a_lg = document.createElement('a');
        nav_ul_li_4_a_lg.href = './suporte-page.html';
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

function footer_genessis() {
    footer = document.querySelector('footer');

    var footer_div_1 = document.createElement('div');
        footer_div_1.classList.add('logo-section');
    var footer_div_2 = document.createElement('div');
        footer_div_2.classList.add('pages-section');
    var footer_div_3 = document.createElement('div');
        footer_div_3.classList.add('owner-section');
    var footer_div_4 = document.createElement('div');
        footer_div_4.classList.add('friendly-section');
    var footer_div_5 = document.createElement('div');
        footer_div_5.classList.add('footer-section');
    var footer_div_6 = document.createElement('div');
        footer_div_6.classList.add('credits-section');

    var footer_div_2_title = document.createElement('h4');
        footer_div_2_title.textContent = 'INFORMAÇÕES'
    var footer_div_3_title = document.createElement('h4');
        footer_div_3_title.textContent = 'FUNDADORES'
    var footer_div_4_title = document.createElement('h4');
        footer_div_4_title.textContent = 'OUTROS'
    var footer_div_5_title = document.createElement('span');
        footer_div_5_title.textContent = 'A T L ∆ S Discord Server'

    var footer_div_6_powered = document.createElement('a');
        footer_div_6_powered.textContent = 'Powered By @VictorSeixas';
        footer_div_6_powered.href = '#';

    var footer_div_2_ul = document.createElement('ul');
    var footer_div_3_ul = document.createElement('ul');
    var footer_div_4_ul = document.createElement('ul');
    var footer_div_6_a = document.createElement('a');

    var footer_div_2_ul_li_1 = document.createElement('li');
    var footer_div_2_ul_li_2 = document.createElement('li');
    var footer_div_2_ul_li_3 = document.createElement('li');
    var footer_div_2_ul_li_4 = document.createElement('li');
    var footer_div_3_ul_li_1 = document.createElement('li');
    var footer_div_3_ul_li_2 = document.createElement('li');
    var footer_div_3_ul_li_3 = document.createElement('li');
    var footer_div_3_ul_li_4 = document.createElement('li');
    var footer_div_4_ul_li_1 = document.createElement('li');
    var footer_div_4_ul_li_2 = document.createElement('li');
    var footer_div_4_ul_li_3 = document.createElement('li');

    var footer_div_2_ul_li_1_a = document.createElement('a');
        footer_div_2_ul_li_1_a.textContent = 'Server Link';
        footer_div_2_ul_li_1_a.href = '#';
        footer_div_2_ul_li_1_a.classList.add('btn');
        footer_div_2_ul_li_1_a.classList.add('text-light');
    var footer_div_2_ul_li_2_a = document.createElement('a');
        footer_div_2_ul_li_2_a.textContent = 'Sobre Nós';
        footer_div_2_ul_li_2_a.href = '#';
        footer_div_2_ul_li_2_a.classList.add('btn');
        footer_div_2_ul_li_2_a.classList.add('text-light');
    var footer_div_2_ul_li_3_a = document.createElement('a');
        footer_div_2_ul_li_3_a.textContent = 'Blog';
        footer_div_2_ul_li_3_a.href = '#';
        footer_div_2_ul_li_3_a.classList.add('btn');
        footer_div_2_ul_li_3_a.classList.add('text-light');
        footer_div_2_ul_li_3_a.classList.add('disabled');
    var footer_div_2_ul_li_4_a = document.createElement('a');
        footer_div_2_ul_li_4_a.textContent = 'Suporte';
        footer_div_2_ul_li_4_a.href = '#';
        footer_div_2_ul_li_4_a.classList.add('btn');
        footer_div_2_ul_li_4_a.classList.add('text-light');
    var footer_div_3_ul_li_1_p = document.createElement('p');
        footer_div_3_ul_li_1_p.textContent = 'VICTOR#0474';
        footer_div_3_ul_li_1_p.classList.add('btn');
        footer_div_3_ul_li_1_p.classList.add('text-light');
    var footer_div_3_ul_li_2_p = document.createElement('p');
        footer_div_3_ul_li_2_p.textContent = 'Lil Pato#6505';
        footer_div_3_ul_li_2_p.classList.add('btn');
        footer_div_3_ul_li_2_p.classList.add('text-light');
    var footer_div_3_ul_li_3_p = document.createElement('p');
        footer_div_3_ul_li_3_p.textContent = 'k a m i#0432';
        footer_div_3_ul_li_3_p.classList.add('btn');
        footer_div_3_ul_li_3_p.classList.add('text-light');
    var footer_div_3_ul_li_4_p = document.createElement('p');
        footer_div_3_ul_li_4_p.textContent = 'Picutinha#0541';
        footer_div_3_ul_li_4_p.classList.add('btn');
        footer_div_3_ul_li_4_p.classList.add('text-light');
    var footer_div_4_ul_li_1_a = document.createElement('a');
        footer_div_4_ul_li_1_a.textContent = 'Lisarb';
        footer_div_4_ul_li_1_a.href = '#';
        footer_div_4_ul_li_1_a.classList.add('btn');
        footer_div_4_ul_li_1_a.classList.add('text-light');
    var footer_div_4_ul_li_2_a = document.createElement('a');
        footer_div_4_ul_li_2_a.textContent = 'Victor Seixas';
        footer_div_4_ul_li_2_a.href = '#';
        footer_div_4_ul_li_2_a.classList.add('btn');
        footer_div_4_ul_li_2_a.classList.add('text-light');
    var footer_div_4_ul_li_3_a = document.createElement('a');
        footer_div_4_ul_li_3_a.textContent = 'Storyset';
        footer_div_4_ul_li_3_a.href = 'https://storyset.com/science';
        footer_div_4_ul_li_3_a.classList.add('btn');
        footer_div_4_ul_li_3_a.classList.add('text-light');
        footer_div_4_ul_li_3_a.setAttribute('target', 'blank');

    
    footer.appendChild(footer_div_1);
    footer.appendChild(footer_div_2);
    footer.appendChild(footer_div_3);
    footer.appendChild(footer_div_4);
    footer.appendChild(footer_div_5);  
    footer.appendChild(footer_div_6);  
    
    footer_div_2.appendChild(footer_div_2_title);
    footer_div_3.appendChild(footer_div_3_title);
    footer_div_4.appendChild(footer_div_4_title);
    footer_div_5.appendChild(footer_div_5_title);
    footer_div_6.appendChild(footer_div_6_powered);

    footer_div_2.appendChild(footer_div_2_ul);
    footer_div_3.appendChild(footer_div_3_ul);
    footer_div_4.appendChild(footer_div_4_ul);
    footer_div_6.appendChild(footer_div_6_a);

    footer_div_2_ul.appendChild(footer_div_2_ul_li_1);
    footer_div_2_ul.appendChild(footer_div_2_ul_li_2);
    footer_div_2_ul.appendChild(footer_div_2_ul_li_3);
    footer_div_2_ul.appendChild(footer_div_2_ul_li_4);
    footer_div_3_ul.appendChild(footer_div_3_ul_li_1);
    footer_div_3_ul.appendChild(footer_div_3_ul_li_2);
    footer_div_3_ul.appendChild(footer_div_3_ul_li_3);
    footer_div_3_ul.appendChild(footer_div_3_ul_li_4);
    footer_div_4_ul.appendChild(footer_div_4_ul_li_1);
    footer_div_4_ul.appendChild(footer_div_4_ul_li_2);
    footer_div_4_ul.appendChild(footer_div_4_ul_li_3);

    footer_div_2_ul_li_1.appendChild(footer_div_2_ul_li_1_a);
    footer_div_2_ul_li_2.appendChild(footer_div_2_ul_li_2_a);
    footer_div_2_ul_li_3.appendChild(footer_div_2_ul_li_3_a);
    footer_div_2_ul_li_4.appendChild(footer_div_2_ul_li_4_a);
    footer_div_3_ul_li_1.appendChild(footer_div_3_ul_li_1_p);
    footer_div_3_ul_li_2.appendChild(footer_div_3_ul_li_2_p);
    footer_div_3_ul_li_3.appendChild(footer_div_3_ul_li_3_p);
    footer_div_3_ul_li_4.appendChild(footer_div_3_ul_li_4_p);
    footer_div_4_ul_li_1.appendChild(footer_div_4_ul_li_1_a);
    footer_div_4_ul_li_2.appendChild(footer_div_4_ul_li_2_a);
    footer_div_4_ul_li_3.appendChild(footer_div_4_ul_li_3_a);
}