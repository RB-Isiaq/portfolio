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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formInputs = new FormData(e.target);
  const formValues = Object.fromEntries(formInputs.entries());

  const serviceID = "service_tl70x2r";
  const templateID = "template_pccn9vs";

  // send the email here
  emailjs.send(serviceID, templateID, formValues).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      window.alert("Sent succesfully! ✅");

      location.reload();
    },
    function (error) {
      console.log("FAILED...", error);
      window.alert("Something went wrong! :)");

      location.reload();
    }
  );
});
