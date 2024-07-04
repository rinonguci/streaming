const ws = new WebSocket("wss://test.faly-vn.com:8080");
ws.addEventListener("open", () => {});
ws.addEventListener("message", (event) => {
  console.log(event.data);
});
