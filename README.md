# URL Shortener

A simple and fast **URL Shortener** built with **Bitly API**, **Tailwind CSS**, and **vanilla JavaScript**.  
Easily shorten, manage, and share your links in seconds.  

![demo](demo.gif)  
**Live Project:** [https://mvntahax.github.io/url-shortener/](https://mvntahax.github.io/url-shortener/)

## Features
- **Easy to use** – Paste a link and shorten instantly.  
- **Secure** – HTTPS protected requests.  
- **Statistics-ready** – Built on Bitly API (track link analytics in your Bitly account).  
- **Responsive** – Works across desktop, tablet, and mobile.  
- **Reliable** – Filters out harmful/malicious links.  

## Tech Stack
- **Frontend:** HTML, Tailwind CSS, Bootstrap Icons  
- **Logic:** Vanilla JavaScript (Fetch API)  
- **API:** [Bitly API v4](https://dev.bitly.com/)

## Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
    ````

2. Add your Bitly **API Token** inside `script.js`:
   ```js
   const token = "YOUR_BITLY_API_TOKEN";
   ````

3. Open `index.html` in your browser, paste a long URL, and shorten it!

## Project Structure

```
url-shortener/
├── index.html       # Main UI
├── script.js        # URL shortening logic
├── style.css        # Custom styles
├── demo.gif         # Project Demo
└── README.md        # Project documentation
````

## Thank you!
