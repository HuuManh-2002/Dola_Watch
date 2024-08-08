document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var UsernameMessage = document.getElementById("username-message");
    var PasswordMessage = document.getElementById("password-message");

    UsernameMessage.textContent = "";
    PasswordMessage.textContent = "";

    // Lấy danh sách người dùng từ localStorage
    var users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    // Kiểm tra
    var user = users.find((user) => user.username === username);
    
    if (user) {
      // Kiểm tra mật khẩu
      if (user.password === password) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "home.html";
        return;
      } else {
        PasswordMessage.classList.remove("d-none");
        PasswordMessage.textContent = "Mật khẩu không đúng.";
        return;
      }
    } else {
      UsernameMessage.classList.remove("d-none");
      UsernameMessage.textContent = "Tên đăng nhập không tồn tại.";
      return;
    }
  });
