document.getElementById("submitButton").addEventListener("click", function () {
  const problem = document.getElementById("problem").value;
  const email = document.getElementById("email").value;

  if (!problem || !email) {
    alert("Please fill in all the fields.");
    return;
  }

  // Store data in local storage
  localStorage.setItem("problem", problem);
  localStorage.setItem("email", email);

  alert("Your problem and email have been saved locally!");

  // To clear inputs after saving
  document.getElementById("stressForm").reset();
});