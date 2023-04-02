(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

const form = document.querySelector("form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const res = await fetch(
    "https://portfolio-form-d941b-default-rtdb.firebaseio.com/message.json",
    {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      }),
    }
  );
  if (res.ok) {
    window.alert("Sent succesfully! ✅");
  }
  location.reload();
});
