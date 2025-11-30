function goToPayment() {
  window.location.href = "payment.html";
}

document.addEventListener("DOMContentLoaded", () => {
  
  const form = document.getElementById("paymentForm");
  const msg = document.getElementById("msg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      msg.innerHTML = "🎉 Payment Successful!";
      msg.style.color = "green";
    });
  }

});
