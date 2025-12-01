const age = document.getElementById("age");
const birthDate = new Date(2004, 10, 23); // Month is 0-indexed (10 = November)
const today = new Date();

age.textContent = today.getFullYear() - birthDate.getFullYear() -
  (today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ? 1
    : 0);

const circles = document.querySelectorAll(".skill-circle");
const radius = 30;
const circumference = 2 * Math.PI * radius;

circles.forEach((circle) => {
  const progressCircle = circle.querySelector(".progress-circle");
  
  progressCircle.style.strokeDasharray = circumference;
  progressCircle.style.strokeDashoffset = circumference;
});

setTimeout(() => {
  circles.forEach((circle) => {
    const progress = circle.getAttribute("data-progress");
    const progressCircle = circle.querySelector(".progress-circle");
    const offset = circumference - (progress / 100) * circumference;

    circle.classList.add("animate");
    progressCircle.style.strokeDashoffset = offset;
  });
}, 100);
