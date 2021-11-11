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
}