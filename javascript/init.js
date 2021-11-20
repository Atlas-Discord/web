window.onload = initPage;

function initPage() {
    header_genessis();
    footer_genessis();
    
    function header_genessis() {
        __collapse_genessis();
        __content_genessis();

        function __collapse_genessis() {
            header = document.querySelector('header');
            
            var collapse = document.createElement('nav');
            var collapse_header = document.createElement('div');
            var collapse_content = document.createElement('div');
            var collapse_header_close = document.createElement('button');
            var collapse_content_ul = document.createElement('ul');
            var collapse_content_ul_li_1 = document.createElement('li');
            var collapse_content_ul_li_2 = document.createElement('li');
            var collapse_content_ul_li_3 = document.createElement('li');
            var collapse_content_ul_li_4 = document.createElement('li');
            var collapse_content_ul_li_1_a = document.createElement('a');
            var collapse_content_ul_li_2_a = document.createElement('a');  
            var collapse_content_ul_li_3_a = document.createElement('a');
            var collapse_content_ul_li_4_a = document.createElement('a');
                

            collapse.classList.add('collapse-navbar');
            collapse.setAttribute('id', 'header-collapse-navbar');
            collapse.setAttribute('data-toggle', 'false');
            collapse_header.classList.add('header-collapse');
            collapse_content.classList.add('content-collapse');
            collapse_header_close.classList.add('btn-close');
            collapse_header_close.setAttribute('onclick', 'header_collapse()'); 
            collapse_content_ul_li_1_a.href = 'index.html';
            collapse_content_ul_li_1_a.classList.add('btn');
            collapse_content_ul_li_1_a.textContent = 'Inicio';
            collapse_content_ul_li_2_a.href = '#';
            collapse_content_ul_li_2_a.classList.add('btn');
            collapse_content_ul_li_2_a.textContent = 'Equipe';
            collapse_content_ul_li_3_a.href = '#';
            collapse_content_ul_li_3_a.classList.add('btn');
            collapse_content_ul_li_3_a.textContent = 'Blog';
            collapse_content_ul_li_4_a.href = 'suporte-page.html';
            collapse_content_ul_li_4_a.classList.add('btn');
            collapse_content_ul_li_4_a.textContent = 'Suporte';

            header.appendChild(collapse);
            collapse.appendChild(collapse_header);
            collapse.appendChild(collapse_content);
            collapse_header.appendChild(collapse_header_close);
            collapse_content.appendChild(collapse_content_ul);
            collapse_content_ul.appendChild(collapse_content_ul_li_1);
            collapse_content_ul.appendChild(collapse_content_ul_li_2);
            collapse_content_ul.appendChild(collapse_content_ul_li_3);
            collapse_content_ul.appendChild(collapse_content_ul_li_4);
            collapse_content_ul_li_1.appendChild(collapse_content_ul_li_1_a);
            collapse_content_ul_li_2.appendChild(collapse_content_ul_li_2_a);
            collapse_content_ul_li_3.appendChild(collapse_content_ul_li_3_a);
            collapse_content_ul_li_4.appendChild(collapse_content_ul_li_4_a);

        }

        function __content_genessis() {
            header = document.querySelector('header');

            var content = document.createElement('nav');
            var content_logo = document.createElement('span');
            var content_ul_1 = document.createElement('ul');
            var content_ul_2 = document.createElement('ul');
            var content_ul_1_li_1 = document.createElement('li');
            var content_ul_1_li_2 = document.createElement('li');
            var content_ul_1_li_3 = document.createElement('li');
            var content_ul_1_li_4 = document.createElement('li');
            var content_ul_2_li_1 = document.createElement('li');
            var content_ul_1_li_1_a = document.createElement('a');
            var content_ul_1_li_2_a = document.createElement('a');
            var content_ul_1_li_3_a = document.createElement('a');
            var content_ul_1_li_4_a = document.createElement('a');
            var content_ul_2_li_1_button = document.createElement('button');


            content.classList.add('content');
            content.classList.add('m-1');            
            content_logo.classList.add('logo')
            content_logo.textContent = 'ATLAS';
            content_ul_1.setAttribute('id', 'lg-navbar');
            content_ul_2.setAttribute('id', 'sm-navbar');
            content_ul_1_li_1_a.href = "index.html"
            content_ul_1_li_1_a.classList.add('btn');
            content_ul_1_li_1_a.textContent = `Incio`;
            content_ul_1_li_2_a.href = "#"
            content_ul_1_li_2_a.classList.add('btn');
            content_ul_1_li_2_a.textContent = 'Equipe'
            content_ul_1_li_3_a.href = "#"
            content_ul_1_li_3_a.classList.add('btn');
            content_ul_1_li_3_a.textContent = 'Blog'
            content_ul_1_li_4_a.href = "suporte-page.html"
            content_ul_1_li_4_a.classList.add('btn');
            content_ul_1_li_4_a.textContent = 'Suporte'
            content_ul_2_li_1_button.classList.add('btn');
            content_ul_2_li_1_button.classList.add('btn-outline-primary');
            content_ul_2_li_1_button.setAttribute('onclick', 'header_collapse()');
            content_ul_2_li_1_button.textContent = 'Mais..';


            header.appendChild(content);
            content.appendChild(content_logo);
            content.appendChild(content_ul_1);
            content.appendChild(content_ul_2);
            content_ul_1.appendChild(content_ul_1_li_1);
            content_ul_1.appendChild(content_ul_1_li_2);
            content_ul_1.appendChild(content_ul_1_li_3);
            content_ul_1.appendChild(content_ul_1_li_4);
            content_ul_2.appendChild(content_ul_2_li_1);
            content_ul_1_li_1.appendChild(content_ul_1_li_1_a);
            content_ul_1_li_2.appendChild(content_ul_1_li_2_a);
            content_ul_1_li_3.appendChild(content_ul_1_li_3_a);
            content_ul_1_li_4.appendChild(content_ul_1_li_4_a);
            content_ul_2_li_1.appendChild(content_ul_2_li_1_button);
        }  
    }

    function footer_genessis() {
        var footer = document.querySelector('footer');
            footer.classList.add('mt-5');
            footer.classList.add('pt-9');
            footer.classList.add('pb-5');
    
        var footer_div_1 = document.createElement('div');
            footer_div_1.classList.add('logo-section');
        var footer_div_2 = document.createElement('div');
            footer_div_2.classList.add('credit-section');
        var footer_div_3 = document.createElement('div');
            footer_div_3.classList.add('copyright-section');
            footer_div_3.classList.add('pb-5');
        var footer_div_4 = document.createElement('div');
            footer_div_4.classList.add('myself-section');
    
        var footer_div_1_p = document.createElement('p');
            footer_div_1_p.textContent = 'ATLAS';
            footer_div_1_p.classList.add('logo-name');
        var footer_div_1_a = document.createElement('a');
            footer_div_1_a.setAttribute('target', 'blank');
            footer_div_1_a.href = 'https://discord.gg/8H5qrftdcf';
            footer_div_1_a.textContent = 'ENTRAR';
            footer_div_1_a.classList.add('btn');
            footer_div_1_a.classList.add('btn-primary');
            footer_div_1_a.classList.add('btn-lg');
        var footer_div_2_ul_1 = document.createElement('ul');
        var footer_div_2_ul_2 = document.createElement('ul');
        var footer_div_2_ul_3 = document.createElement('ul');
        var footer_div_3_span = document.createElement('span');
            footer_div_3_span.classList.add('copyright-name');
        var footer_div_4_a = document.createElement('a');
            footer_div_4_a.setAttribute('target', 'blank');
            footer_div_4_a.href = 'https://victors3ixas.github.io/web/';
            footer_div_4_a.classList.add('btn');
            footer_div_4_a.classList.add('btn-outline-light');
            footer_div_4_a.classList.add('btn-sm');
            footer_div_4_a.textContent = 'Powered by @Victors3ixas';
    
        var footer_div_2_ul_1_span = document.createElement('span');
            footer_div_2_ul_1_span.classList.add('lead');
            footer_div_2_ul_1_span.textContent = 'INFORMAÇÕES';
        var footer_div_2_ul_2_span = document.createElement('span');
            footer_div_2_ul_2_span.classList.add('lead');
            footer_div_2_ul_2_span.textContent = 'FUNDADORES';
        var footer_div_2_ul_3_span = document.createElement('span');
            footer_div_2_ul_3_span.classList.add('lead');
            footer_div_2_ul_3_span.textContent = 'OUTROS';
    
        var footer_div_2_ul_1_li_1 = document.createElement('li');
        var footer_div_2_ul_1_li_2 = document.createElement('li');
        var footer_div_2_ul_1_li_3 = document.createElement('li');
        var footer_div_2_ul_1_li_4 = document.createElement('li');
        var footer_div_2_ul_2_li_1 = document.createElement('li');
        var footer_div_2_ul_2_li_2 = document.createElement('li');
        var footer_div_2_ul_2_li_3 = document.createElement('li');
        var footer_div_2_ul_3_li_1 = document.createElement('li');
        var footer_div_2_ul_3_li_2 = document.createElement('li');
    
        var footer_div_2_ul_1_li_1_a = document.createElement('a');
            footer_div_2_ul_1_li_1_a.href = 'index.html';
            footer_div_2_ul_1_li_1_a.textContent ='Inicio';
        var footer_div_2_ul_1_li_2_a = document.createElement('a');
            footer_div_2_ul_1_li_2_a.href = '#';
            footer_div_2_ul_1_li_2_a.textContent ='Equipe';
        var footer_div_2_ul_1_li_3_a = document.createElement('a');
            footer_div_2_ul_1_li_3_a.href = '#';
            footer_div_2_ul_1_li_3_a.textContent ='Blog';
        var footer_div_2_ul_1_li_4_a = document.createElement('a');
            footer_div_2_ul_1_li_4_a.href = 'suporte-page.html';
            footer_div_2_ul_1_li_4_a.textContent ='Suporte';
        var footer_div_2_ul_2_li_1_span = document.createElement('span');
            footer_div_2_ul_2_li_1_span.textContent = 'VICTOR#1562';
        var footer_div_2_ul_2_li_2_span = document.createElement('span');
            footer_div_2_ul_2_li_2_span.textContent = 'Nogueira#6505';
        var footer_div_2_ul_2_li_3_span = document.createElement('span');
            footer_div_2_ul_2_li_3_span.textContent = 'Picutinha#0541';
        var footer_div_2_ul_3_li_1_a = document.createElement('a');
            footer_div_2_ul_3_li_1_a.href = 'https://squarecloud.app/';
            footer_div_2_ul_3_li_1_a.setAttribute('target', 'blank')
            footer_div_2_ul_3_li_1_a.textContent = 'SquareCloud';
        var footer_div_2_ul_3_li_2_a = document.createElement('a');
            footer_div_2_ul_3_li_2_a.href = 'https://victors3ixas.github.io/web/';
            footer_div_2_ul_3_li_2_a.setAttribute('target', 'blank')
            footer_div_2_ul_3_li_2_a.textContent = 'VictorSeixas';
    
    
    
        footer.appendChild(footer_div_1);
        footer.appendChild(footer_div_2);
        footer.appendChild(footer_div_3);
        footer.appendChild(footer_div_4);
    
        footer_div_1.appendChild(footer_div_1_p);
        footer_div_1.appendChild(footer_div_1_a);
        footer_div_2.appendChild(footer_div_2_ul_1);
        footer_div_2.appendChild(footer_div_2_ul_2);
        footer_div_2.appendChild(footer_div_2_ul_3);
        footer_div_3.appendChild(footer_div_3_span);
        footer_div_4.appendChild(footer_div_4_a);
    
        footer_div_2_ul_1.appendChild(footer_div_2_ul_1_span);
        footer_div_2_ul_2.appendChild(footer_div_2_ul_2_span);
        footer_div_2_ul_3.appendChild(footer_div_2_ul_3_span);
        footer_div_2_ul_1.appendChild(footer_div_2_ul_1_li_1);
        footer_div_2_ul_1.appendChild(footer_div_2_ul_1_li_2);
        footer_div_2_ul_1.appendChild(footer_div_2_ul_1_li_3);
        footer_div_2_ul_1.appendChild(footer_div_2_ul_1_li_4);
        footer_div_2_ul_2.appendChild(footer_div_2_ul_2_li_1);
        footer_div_2_ul_2.appendChild(footer_div_2_ul_2_li_2);
        footer_div_2_ul_2.appendChild(footer_div_2_ul_2_li_3);
        footer_div_2_ul_3.appendChild(footer_div_2_ul_3_li_1);
        footer_div_2_ul_3.appendChild(footer_div_2_ul_3_li_2);
    
        footer_div_2_ul_1_li_1.appendChild(footer_div_2_ul_1_li_1_a)
        footer_div_2_ul_1_li_2.appendChild(footer_div_2_ul_1_li_2_a)
        footer_div_2_ul_1_li_3.appendChild(footer_div_2_ul_1_li_3_a)
        footer_div_2_ul_1_li_4.appendChild(footer_div_2_ul_1_li_4_a)
        footer_div_2_ul_2_li_1.appendChild(footer_div_2_ul_2_li_1_span)
        footer_div_2_ul_2_li_2.appendChild(footer_div_2_ul_2_li_2_span)
        footer_div_2_ul_2_li_3.appendChild(footer_div_2_ul_2_li_3_span)
        footer_div_2_ul_3_li_1.appendChild(footer_div_2_ul_3_li_1_a)
        footer_div_2_ul_3_li_2.appendChild(footer_div_2_ul_3_li_2_a)
    }
}