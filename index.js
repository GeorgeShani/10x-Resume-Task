const age = document.getElementById('age');
const birthDate = new Date(2004, 10, 23); // Month is 0-indexed (10 = November)
const today = new Date(); 

age.textContent =
  today.getFullYear() - birthDate.getFullYear() -
  (today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth()
      && today.getDate() < birthDate.getDate()) ? 1 : 0);