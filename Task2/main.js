document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const comments = document.getElementById("comments").value;

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Address:", address);
  console.log("Date of Birth:", dob);
  console.log("Gender:", gender);
  console.log("Comments:", comments);
});
