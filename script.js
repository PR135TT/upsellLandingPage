document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('waitlist-form');
  const confirmation = document.getElementById('confirmation');
  const counter = document.getElementById('counter');

  // Load waitlist count from localStorage or initialize
  let waitlistCount = localStorage.getItem('waitlistCount');
  if (!waitlistCount) {
    waitlistCount = 37 + Math.floor(Math.random() * 13); // Simulate initial value
    localStorage.setItem('waitlistCount', waitlistCount);
  }
  counter.textContent = waitlistCount;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (res.ok) {
        confirmation.textContent = "🎉 You're on the list!";
        waitlistCount++;
        localStorage.setItem('waitlistCount', waitlistCount);
        counter.textContent = waitlistCount;
        form.reset();
      } else {
        confirmation.textContent = "Something went wrong. Please try again.";
      }
    } catch {
      confirmation.textContent = "Network error. Please try again.";
    }
  });
});
