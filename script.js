function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function animateElement(element) {
  element.style.opacity = "0";
  element.style.transform = "translateY(15px)";
  setTimeout(() => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  }, 50);
}

document.getElementById("subject").addEventListener(
  "input",
  debounce(function () {
    let display = document.getElementById("display-subject");
    display.textContent = this.value || "-";
    animateElement(display);
  }, 200)
);

document.getElementById("member").addEventListener(
  "input",
  debounce(function () {
    let display = document.getElementById("display-member");
    display.textContent = this.value || "-";
    animateElement(display);
  }, 200)
);

document.getElementById("date").addEventListener("input", function () {
  let display = document.getElementById("display-date");
  let dateValue = this.value
    ? new Date(this.value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "-";
  display.textContent = dateValue;
  animateElement(display);
});

document.getElementById("message").addEventListener(
  "input",
  debounce(function () {
    let display = document.getElementById("display-message");
    display.textContent = this.value || "-";
    animateElement(display);

    let charCount = this.value.length;
    document.getElementById("charCount").textContent = `${charCount} / 200`;

    if (charCount > 200) {
      this.value = this.value.substring(0, 200);
      document.getElementById("charCount").textContent = "200 / 200";
    }
  }, 200)
);

document.getElementById("fileUpload").addEventListener("change", function () {
  let fileName = this.files[0] ? this.files[0].name : "No file selected";
  document.getElementById("fileName").textContent = fileName;
  let display = document.getElementById("display-file");
  display.textContent = fileName;
  animateElement(display);
});

document.getElementById("send").addEventListener("click", function () {
  alert("Message sent successfully!");
});
