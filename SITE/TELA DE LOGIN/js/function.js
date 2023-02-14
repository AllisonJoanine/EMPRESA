/*if (isset($_POST['username']) && isset($_POST['password'])) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  header('location: file:///C:/Users/allison_adm/Desktop/SITE/HOME/home.html');
  exit;
}
*/

document.getElementById("button").addEventListener("click", function() {
  window.location.href = "../SITE/HOME/home.html";
});
