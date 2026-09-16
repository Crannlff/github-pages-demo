const button = document.querySelector("#celebrate-button");
const statusText = document.querySelector("#status-text");

button.addEventListener("click", () => {
  const time = new Date().toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  statusText.textContent = `JavaScript 正常工作。测试时间：${time}`;
});
