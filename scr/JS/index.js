/*
    OBJETIVO 1:
        Quamdo passar o mouse em cima do personagem temos que: 

        - Colocar a classe selecionado no personagem que passamos o mouse em cima, para adicionar a animação nele
        
        - Retirar a classe selecionado do personagem que está selecinado

    OBJETIVO 2:
        Quamdo passar o mouse em cima do personagem temos que: 

        - Trocar o imagem para o personagem que será selecionado - jogador 1 (personagem grande)
        
        - Alterar o para o personagem que será selecionado - jogador 1
*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'lindinha') return;
        
        const personagemSelecionado = document.querySelector('.jogador-1-selecionado')
        personagemSelecionado.classList.remove('jogador-1-selecionado')

        personagem.classList.add('jogador-1-selecionado')
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./scr/Imagens/${idSelecionado}.png`;

        const nomejogador1 = document.getElementById('nome-jogador-1')
        const nomeSelecionado = personagem.getAttribute('data-name')
        nomejogador1.innerHTML = nomeSelecionado
    })   
})

