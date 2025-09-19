// Bitly API token (replace with your own)
const token = "b626d76c0e7dcc7e9c524a31fb63ab3b9bee5018";

// Function to shorten a given long URL using Bitly API
async function shortenURL() {
  // Grab input and result elements
  const longUrl = document.getElementById('longUrl').value.trim();
  const resultBox = document.getElementById('result');
  const shortLink = document.getElementById('shortLink');
  const errorBox = document.getElementById('error');
  
  // Hide result and error box before each request
  resultBox.classList.add('hidden');
  errorBox.classList.add('hidden');

  // Validate input
  if (!longUrl) {
    errorBox.textContent = "Please enter a valid URL.";
    errorBox.classList.remove('hidden');
    return;
  }

  try {
    // Send POST request to Bitly API to shorten the URL
    const res = await fetch('https://api-ssl.bitly.com/v4/shorten', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`, // Authentication
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ long_url: longUrl }) // Payload with the original URL
    });

    const data = await res.json(); // Parse API response

    if (res.ok) {
      // If successful → show shortened link
      shortLink.textContent = data.link;
      shortLink.href = data.link;
      resultBox.classList.remove('hidden');
    } else {
      // Handle API error
      throw new Error(data.description || 'Something went wrong.');
    }

  } catch (err) {
    // Show error message if fetch fails or API returns error
    errorBox.textContent = err.message;
    errorBox.classList.remove('hidden');
  }
}

// Function to copy the shortened link to clipboard
function copyLink() {
  const text = document.getElementById('shortLink').textContent;
  navigator.clipboard.writeText(text).then(() => {
    alert('Link copied to clipboard!');
  });
}
