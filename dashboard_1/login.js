document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simulasi login: username = admin, password = 1234
  if (username === "admin" && password === "1234") {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").textContent = "Login berhasil!";
    // redirect atau aksi lain bisa dilakukan di sini
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").textContent = "Username atau password salah!";
  }
});