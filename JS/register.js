document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var phonenumber = document.getElementById("phonenumber").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    var UsernameMessage = document.getElementById("username-message");
    var ConfirmMessage = document.getElementById("confirm-message");

    UsernameMessage.textContent = "";
    ConfirmMessage.textContent = "";

    // Lấy danh sách người dùng từ localStorage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Kiểm tra nếu tên đăng nhập đã tồn tại
    var userExists = users.some((user) => user.username === username);
    if (userExists) {
      UsernameMessage.classList.remove("d-none");
      UsernameMessage.textContent = "Tên đăng nhập đã tồn tại!";
      return;
    }

    // Kiểm tra xác nhận mật khẩu
    if (password !== confirmPassword) {
      ConfirmMessage.classList.remove("d-none");
      ConfirmMessage.textContent = "Mật khẩu xác nhận không khớp!";
      return;
    }

    // Thêm người dùng mới vào danh sách và lưu vào localStorage
    users.push({name: name, username: username, password: password, phonenumber: phonenumber, address: address, email: email });
    localStorage.setItem("users", JSON.stringify(users));

    // Hiển thị hộp thoại
    var modal = new bootstrap.Modal(document.getElementById("RegisterSuccess"));
    modal.show();
    console.log(users);
  });
