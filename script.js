document.getElementById('waitlistForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const message = document.getElementById('message');
  
  // Replace with your own backend/Supabase/Formspree API if needed
  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Replace with your Brevo/Formspree API key or remove for test
        'api-key': 'YOUR_API_KEY_HERE',
      },
      body: JSON.stringify({
        email: email
      }),
    });

    if (res.ok) {
      message.textContent = 'Thanks for signing up!';
      message.style.color = 'green';
      e.target.reset();
    } else {
      message.textContent = 'Something went wrong. Try again.';
      message.style.color = 'red';
    }
  } catch (err) {
    message.textContent = 'Error connecting to server.';
    message.style.color = 'red';
  }
});
