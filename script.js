async function fetchTechNews() {
    try {
        const response = await fetch("https://newsapi.org/v2/top-headlines?category=technology&apiKey=69f1e61c22334859b5722d88d071c7e3");
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
            const article = data.articles[Math.floor(Math.random() * data.articles.length)];
            document.getElementById("random-news").innerHTML = 
                `📰 <b>[Latest]</b> <a href="${article.url}" target="_blank">${article.title}</a>`;
        } else {
            document.getElementById("random-news").innerText = "No news available.";
        }
    } catch (error) {
        console.error("Error fetching news:", error);
        document.getElementById("random-news").innerText = "Failed to load news.";
    }
}

document.addEventListener("DOMContentLoaded", fetchTechNews);