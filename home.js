
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