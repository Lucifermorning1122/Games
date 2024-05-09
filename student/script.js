document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculateBtn");
  calculateBtn.addEventListener("click", calculateSum);
});

function calculateSum() {
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;

  fetch(`/range_sum_query?start=${start}&end=${end}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("result").textContent = `Sum: ${data.sum}`;
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("result").textContent =
        "Error occurred, please try again.";
    });
}
