document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('[data-tab-button]');
  const questions = document.querySelectorAll('[data-faq-question]');
  const heroSection = document.querySelector('.hero');
  const alturaHero = heroSection.clientHeight;

  // Evento para exibir ou ocultar o header com base na rolagem
  window.addEventListener('scroll', function () {
    const posicaoAtual = window.scrollY;

    if (posicaoAtual < alturaHero) {
      esconderHeader();
    } else {
      exibirHeader();
    }
  });

  // Aplica o evento de clique aos botões de navegação por abas
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
      const abaAlvo = event.target.dataset.tabButton;

      // Oculta todas as abas e desativa os botões
      ocultarTodasAbas();
      desativarTodosOsBotoes();

      // Ativa a aba correspondente e o botão clicado
      const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
      aba.classList.add('featured__list--is-active');
      event.target.classList.add('featured__nav__button--is-active');
    });
  }

  // Aplica o evento de clique em cada pergunta do FAQ para expandir ou recolher a resposta
  for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', alternarRespostaFAQ);
  }
});

// Oculta o header da página ao aplicar classe CSS
function esconderHeader() {
  const header = document.querySelector('header');
  header.classList.add('header--is-hidden');
}

// Exibe o header da página ao remover classe CSS
function exibirHeader() {
  const header = document.querySelector('header');
  header.classList.remove('header--is-hidden');
}

// Oculta todas as abas (remove a classe ativa)
function ocultarTodasAbas() {
  const tabs = document.querySelectorAll('[data-tab-id]');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('featured__list--is-active');
  }
}

// Desativa todos os botões de navegação de abas
function desativarTodosOsBotoes() {
  const buttons = document.querySelectorAll('[data-tab-button]');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('featured__nav__button--is-active');
  }
}

// Alterna a visibilidade de uma resposta de FAQ (abre ou fecha)
function alternarRespostaFAQ(event) {
  const classeAtiva = 'faq__questions__item--is-open';
  const elementoPai = event.target.parentNode;
  if (elementoPai) {
    elementoPai.classList.toggle(classeAtiva);
  }
}
