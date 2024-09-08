const avanca = document.querySelectorAll('.btnProximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPassoId = 'passo' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPassoId).classList.add('ativo');
    });
});
