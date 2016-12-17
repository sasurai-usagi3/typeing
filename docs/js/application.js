let wordGroup = [
  "link_to",
  "image_tag",
  "form_tag",
  "form_for",
  "simple_format",
  "has_one",
  "has_many", 
  "belongs_to"
];
window.addEventListener("load", () => {
  let label = document.getElementById("label");
  let generate = () => {
    let r = Math.floor(Math.random() * wordGroup.length);
    let str = wordGroup[r];
    str.split("").forEach(x => {
      let span = document.createElement("span");
      span.textContent = x;
      span.className = "label__font_normal label__font";
      label.appendChild(span);
    });
  }
  let keyStack = "";
  generate();

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

    if(flag) {
      keyStack = "";
      label.innerHTML = "";
      generate();
    }
    console.log(flag);
  });
});
