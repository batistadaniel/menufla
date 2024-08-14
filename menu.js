function mostraSection(sectionId) {
    
    // Logica pra ocultar todas as secoes
    let secoes = document.getElementsByTagName('section'); // Conta todas as secoes pela tag 
    for (let i = 0; i < secoes.length; i++) {
        secoes[i].style.display = 'none';
    }
    
    // Exibe a secao que foi clicada passando um parametro que e o Id da secao
    let secao = document.getElementById(sectionId);
    secao.style.display = 'flex';

    
}