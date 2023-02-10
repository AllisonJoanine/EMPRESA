const botao = document.querySelector('#botao');
  const div = document.querySelector('#minhaDiv');

  botao.addEventListener('click', function () {
    if (div.style.display === 'none') {
      div.style.display = 'block';
    } else {
      div.style.display = 'none';
    }
  });