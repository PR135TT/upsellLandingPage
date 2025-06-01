const form = document.getElementById('waitlist-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: 'application/json'
    }
  });

  if (response.ok) {
    message.textContent = 'Thanks for signing up!';
    message.style.color = 'lightgreen';
    form.reset();
  } else {
    message.textContent = 'Something went wrong. Please try again.';
    message.style.color = 'red';
  }
});
