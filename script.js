const moonIcon = document.querySelector(".moon-icon");
const sunIcon = document.querySelector(".sun-icon");
const body = document.body;
const greetingText = document.querySelector(".greeting_text");
const currentDate = document.querySelector(".current_date");
sunIcon.classList.add("hidden");
moonIcon.classList.remove("hidden");

// function to update the greetings
const updateGreeting = () => {
  const hour = new Date().getHours();
  let greeting = 
  hour >= 5 && hour < 12 ? "Good Morning" :
  hour >= 12 && hour < 18 ? "Good Afternoon" :
  hour >= 18 && hour < 22 ? "Good Evening" : 
  "Good Night";
  greetingText.textContent = greeting;
}

// Function to update the current date
const displayDate=()=>{
  const now = new Date();
  let day = now.getDate(); 
  let month = now.toLocaleString("en-US", { month: "long" }); 
  let year = now.getFullYear();
  currentDate.textContent = `${day} ${month}, ${year}`;
}

// function for the toggle theme
const toggleTheme=()=>{
  const isDarkMode=body.classList.toggle("dark-theme");
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");

  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
}

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const isDarkMode = savedTheme === "dark";
  body.classList.toggle("dark-theme", isDarkMode);
  moonIcon.classList.toggle("hidden", isDarkMode);
  sunIcon.classList.toggle("hidden", !isDarkMode);
};

// Call the functions once on page load
applySavedTheme();
updateGreeting();
displayDate();



moonIcon.addEventListener("click",toggleTheme);
sunIcon.addEventListener("click",toggleTheme);

// Update the greeting and date every minute
setInterval(updateGreeting, 60000);
setInterval(displayDate, 6000);
