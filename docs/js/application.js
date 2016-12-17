window.addEventListener("load", () => {
  let label = document.getElementById("label");
  let str = "hello!";

  str.split("").forEach(x => {
    let span = document.createElement("span");
    span.textContent = x;

    label.appendChild(span);
  });
});
