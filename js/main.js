document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('[data-tab-button]');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (botao) {
      const abaAlvo = botao.target.dataset.tabButton;

      // Esconder todas antes de mostrar a clicada
      esconderTodasAbas();
      desativarBotoes();

      // Ativar a aba correspondente
      const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
      aba.classList.add('featured__list--is-active');

      // Marcar o botão ativo visualmente
      botao.target.classList.add('featured__nav__button--is-active');
    });
  }
});

// Função para esconder todas as abas
function esconderTodasAbas() {
  const tabsContainer = document.querySelectorAll('[data-tab-id]');
  for (let i = 0; i < tabsContainer.length; i++) {
    tabsContainer[i].classList.remove('featured__list--is-active');
  }
}

// Função para desativar todos os botões
function desativarBotoes() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('featured__nav__button--is-active');
  }
}
