window.addEventListener("load", () => {
  let label = document.getElementById("label");
  let str = "hello!";
  let keyStack = "";

  str.split("").forEach(x => {
    let span = document.createElement("span");
    span.textContent = x;
    span.className = "label__font_normal label__font";

    label.appendChild(span);
  });

  window.addEventListener("keydown", e => {
    let labelFont = document.getElementsByClassName("label__font");
    let flag = true;

    if(e.key.length !== 1 && e.key !== "Backspace") {
      return;
    }
    if(e.key === "Backspace") {
      keyStack = keyStack.slice(0, -1);
    } else {
      keyStack += e.key;
    }

    if(keyStack.length !== labelFont.length) {
      flag = false;
    }
    for(let i = 0; i < labelFont.length; ++i) {
      if(keyStack[i] !== undefined) {
        let judge = labelFont[i].textContent === keyStack[i];
        flag = flag && judge;

        if(judge) {
          labelFont[i].className = "label__font_correct label__font";
        } else {
          labelFont[i].className = "label__font_incorrect label__font";
        }
      } else {
        labelFont[i].className = "label__font_normal label__font";
      }
    }
    console.log(flag);
  });
});
