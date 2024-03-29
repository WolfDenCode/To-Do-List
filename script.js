const elementList = document.querySelector(".element-list");
const input = document.querySelector("input");
const submit = document.querySelector("#submit");

function addItem() {
  let itemName = input.value;

  const newItemDiv = document.createElement("div");
  const itemCheckBtn = document.createElement("button");
  const itemText = document.createElement("li");
  const itemDeleteBtn = document.createElement("button");

  newItemDiv.appendChild(itemCheckBtn);
  newItemDiv.appendChild(itemText);
  newItemDiv.appendChild(itemDeleteBtn);

  itemCheckBtn.classList.add("checker");
  itemCheckBtn.addEventListener("click", () => {
    checkOnClick(itemCheckBtn);
    checkOnClick(itemText);
  });
  itemText.innerHTML = itemName;

  itemDeleteBtn.classList.add("delete");
  itemDeleteBtn.innerHTML = "X";
  itemDeleteBtn.addEventListener("click", () => {
    newItemDiv.addEventListener("animationend", () => {
      elementList.removeChild(newItemDiv);
    });
    newItemDiv.classList.add("fade-out");
  });

  newItemDiv.classList.add("fade-in");

  elementList.appendChild(newItemDiv);
  input.value = "";
  submit.disabled = true;
}

function checkOnClick(element) {
  if (element.classList.contains("active")) {
    element.classList.remove("active");
  } else {
    element.classList.add("active");
  }
}

function toggleSubmit() {
  if (input.value == "") {
    submit.disabled = true;
  } else {
    submit.disabled = false;
  }
}
