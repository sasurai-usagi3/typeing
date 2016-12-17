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
  let labelTypePerSecond = document.getElementById("type-per-second");
  let labelTypeNumber = document.getElementById("type-number");
  let typeNumber = 0;
  let s = 0;
  let index = 0;
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

    console.log(e.key);
    if(e.key === "ArrowLeft") {
      --index;
    } else if(e.key === "ArrowRight") {
      ++index;
    } else if(e.key.length !== 1 && e.key !== "Backspace") {
      return;
    } else if(e.key === "Backspace") {
      keyStack = keyStack.slice(0, -1);
      --index;
    } else {
      ++typeNumber;
      keyStack = keyStack.slice(0, index) + e.key + keyStack.slice(index);
      ++index;
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
      if(i === index) {
        labelFont[i].className += " label__font_selected";
      }
    }

    if(flag) {
      keyStack = "";
      label.innerHTML = "";
      index = 0;
      generate();
    }
    console.log(flag);
  });

  setInterval(() => {
    s += 0.01;
    labelTypePerSecond.textContent = typeNumber / s;
    labelTypeNumber.textContent = typeNumber;
  }, 10);
});
