window.addEventListener("load", () => {
  let label = document.getElementById("label");
  let str = "hello!";
  let keyStack = "";

  str.split("").forEach(x => {
    let span = document.createElement("span");
    span.textContent = x;
    span.className = "label__font_normal";

    label.appendChild(span);
  });

  window.addEventListener("keydown", e => {
    if(e.key.length !== 1 && e.key !== "Backspace") {
      return;
    }
    if(e.key === "Backspace") {
      keyStack = keyStack.slice(0, -1);
    } else {
      keyStack += e.key;
    }
  });
});
