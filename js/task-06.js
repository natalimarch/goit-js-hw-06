const textInput = document.querySelector("#validation-input");
const validNumber = Number(textInput.dataset.length);
textInput.addEventListener("focus", () => {
    
  });
  
textInput.addEventListener("blur", () => {
    if (textInput.value.length !== validNumber) {
        textInput.classList.add("invalid");
    }  else {
        textInput.classList.remove("invalid")
        textInput.classList.add("valid");
    }
  });

