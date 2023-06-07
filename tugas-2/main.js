const targetContainer = document.getElementById("targetContainer");
const targetText = document.getElementById("targetText");
const inputValue = document.getElementById("inputValue");
const updateButton = document.getElementById("updateButton");
const selection = document.getElementById("selection");

updateButton.addEventListener("click", () => {
    switch (selection.options.selectedIndex) {
        case 1:
            targetContainer.style.backgroundColor = inputValue.value;
            break;
        case 2:
            targetText.style.color = inputValue.value;
            break;
        case 3:
            targetText.style.fontSize = inputValue.value;
            break;
        case 4:
            targetText.style.fontFamily = inputValue.value;
            break;
        case 5:
            targetContainer.style.width = inputValue.value;
            break;
        case 6:
            targetContainer.style.height = inputValue.value;
            break;
    }
});
