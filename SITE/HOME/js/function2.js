const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

//espaço

const toggleSubmenuLinks = document.querySelectorAll('.toggle-submenu');

toggleSubmenuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const submenu = link.nextElementSibling;
    submenu.classList.toggle('show-submenu');
  });
});

//sub


import javax.swing.*;

public class ExemploBarraDeOpcoes {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Exemplo de Barra de Opções");

        JMenuBar barraDeOpcoes = new JMenuBar();
        JMenu menuOpcoes1 = new JMenu("Opção 1");
        JMenu menuOpcoes2 = new JMenu("Opção 2");

        barraDeOpcoes.add(menuOpcoes1);
        barraDeOpcoes.add(menuOpcoes2);

        frame.setJMenuBar(barraDeOpcoes);

        frame.setSize(400, 300);
        frame.setVisible(true);
    }
}




var texto = document.getElementById("texto");
texto.addEventListener("mouseover", function() {
  texto.style.textShadow = "1px 1px 1px #000000";
});
texto.addEventListener("mouseout", function() {
  texto.style.textShadow = "none";
});



function abrirJanela() {
  var janela = window.open("pagina.html", "nomeDaJanela", "width=400,height=400");
}


//////////
