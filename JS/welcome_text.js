document.addEventListener("DOMContentLoaded", function () {
    const messages = [
      "Chào mừng bạn đến với cửa hàng Dola Watch!",
      "Khám phá bộ sưu tập đồng hồ mới nhất!",
      "Ưu đãi đặc biệt dành cho khách hàng mới!",
    ];
    let currentIndex = 0;
    const messageElement = document.getElementById("welcome-message");
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      messageElement.textContent = messages[currentIndex];
    }, 5000); // 5000 milliseconds = 5 seconds
  });