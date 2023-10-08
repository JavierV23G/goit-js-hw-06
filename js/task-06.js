const inputElement = document.querySelector("#validation-input");
console.log(inputElement);

const inputHandler = () => {

  if (inputElement.value.length === 6) {
    inputElement.classList.add("valid");
    inputElement.classList.remove("invalid");
  } else {
    inputElement.classList.add("invalid");
    inputElement.classList.remove("valid");
  }
};

inputElement.addEventListener("blur", inputHandler);