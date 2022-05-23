// Valor inicial 0
let count = 0;
// Selecione os botões para gerar o valor
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
      if (styles.contains("decrease")) {
        count--;
      } else if (styles.contains("increase")) {
        count++;
      } else {
        count = 0;
      }
      if (count > 0) {
        value.style.color = "green";
      }
      if (count < 0) {
        value.style.color = "red";
      }
      if (count === 0) {
        value.style.color = "#222";
      }
    value.textContent = count;

    const disableButton = document.querySelectorAll(".btn"); {
      disableButton.forEach(function (btn) {
        if (count <= -10 || count >= 10) {
          btn.disabled = true;
        } else {
          btn.disabled = false;
        }
      });
    }
  });
});