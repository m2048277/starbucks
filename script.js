const botao = document.getElementById('botaojv');

botao.addEventListener('click', () => {
    // Quantos corações criar
    for (let i = 0; i < 20; i++) {
        const coracao = document.createElement('span');
        coracao.classList.add('coração');
        coracao.textContent = '💜';

        // Posição horizontal aleatória
        coracao.style.left = Math.random() * window.innerWidth + 'px';
        // Tamanho aleatório
        coracao.style.fontSize = (20 + Math.random() * 20) + 'px';
        // Tempo de queda aleatório
        coracao.style.animationDuration = (2 + Math.random() * 2) + 's';

        document.body.appendChild(coracao);

        // Remover depois da animação
        coracao.addEventListener('animationend', () => {
            coracao.remove();
        });
    }
});