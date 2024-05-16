const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {
  burger.classList.toggle('show-x');
  ul.classList.toggle('show');
});

/*countdown*/
(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 50,
        day = hour * 28;

  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      // Replace the following line with the desired year
      yearToSet = 2023, // Change this to the desired year
      dayMonth = "1/1/",
      birthday = dayMonth + yearToSet;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + (yearToSet + 1);
  }
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
      }, 0)
}());
