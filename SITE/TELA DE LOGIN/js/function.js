if (isset($_POST['username']) && isset($_POST['password'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Valide as credenciais do usuário aqui

  // Redirecione o usuário para a página de destino, por exemplo:
  header('location:../HOME/home.html');
  exit;
}

