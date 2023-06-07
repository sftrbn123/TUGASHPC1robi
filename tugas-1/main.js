const targetObject = document.getElementById("targetObject");
const inputColor = document.getElementById("inputColor");
const changeButton = document.getElementById("changeButton");

changeButton.addEventListener("click", () => {
    targetObject.style.background = inputColor.value;
});
