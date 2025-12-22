const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});


const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // adjust scroll distance
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
 const quotes = [
    "Feeling anxious doesn’t mean you are weak.",
    "You don’t have to control everything; let it flow.",
    "Take it one breath, one moment at a time.",
    "Breathe. You are safe in this moment.",
    "It’s okay to not be okay—feelings come and go.",
    "One small step is still progress.",
    "You are stronger than your anxious thoughts.",
    "Be gentle with yourself; healing isn’t a race.",
    "Focus on what you can change, and let go of the rest.",
    "This too shall pass."
  ];

  // Function to get 3 random quotes without repetition
  function getRandomQuotes(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }

  // Assign random quotes to each card
  const cards = document.querySelectorAll('.quotes');
  const randomQuotes = getRandomQuotes(quotes, 3);
  cards.forEach((card, index) => {
    card.textContent = randomQuotes[index];
  });

  const facts = [
  {
    iconClass: "brain",
    title: "1 in 4 People",
    description: "Will experience anxiety at some point in their life"
  },
  {
    iconClass: "herat",
    title: "Most Common",
    description: "Anxiety disorders are among the most common mental health issues worldwide"
  },
  {
    iconClass: "helpp",
    title: "Delayed Help-Seeking",
    description: "Many people live with anxiety for years before seeking support"
  },
  {
    iconClass: "ages",
    title: "Affects All Ages",
    description: "Anxiety can affect children, teens, and adults"
  }
];

// Get the container
const container = document.getElementById("statics-container");

if (container) {
  // Loop through the facts and create cards
  facts.forEach(fact => {
    const card = document.createElement("div");
    card.classList.add("cards");

    card.innerHTML = `
      <div class="staticsicons ${fact.iconClass}"></div>
      <h2 class="statstext">${fact.title}</h2>
      <p class="p6">${fact.description}</p>
    `;

    container.appendChild(card);
  });
} else {
  console.warn("Container #statics-container not found in the DOM.");
}
