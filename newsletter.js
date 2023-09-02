const label = document.querySelector("label");
const subscribeBtn = document.querySelector(".Subscribe");
const input = document.querySelector("input");
const mainSection = document.querySelector(".main");
const successSection = document.querySelector(".success-message");
const dismissBtn = document.querySelector(".dismiss");

subscribeBtn.addEventListener("click", () => {
  const searchTerm = "@";
  const searchTerm2 = ".com";

  if (
    !input.value.includes(searchTerm) ||
    input.value === "" ||
    !input.value.includes(searchTerm2)
  ) {
    label.innerHTML = `<p>Email address</p>
    <p class="error-state">Valid email required</p>`;
    input.classList.add("input-invalid");
  } else {
    mainSection.classList.remove("main");
    mainSection.classList.add("hide");
    successSection.classList.remove("hide");
  }
});

input.addEventListener("click", () => {
  input.value += "";
  label.innerHTML = "<p>Email address</p>";
  input.classList.remove("input-invalid");
});

dismissBtn.addEventListener("click", () => {
  successSection.classList.add("hide");
  mainSection.classList.add("main");
  mainSection.classList.remove("hide");
});
