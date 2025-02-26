async function fetchHackerNewsStory() {
    try {
        const topStoriesResponse = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
        const topStories = await topStoriesResponse.json();

        if (!topStories || topStories.length === 0) {
            document.getElementById("hacker-news").innerText = "No news available.";
            return;
        }

        const storyId = topStories[0];
        const storyResponse = await fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`);
        const storyData = await storyResponse.json();

        document.getElementById("hacker-news").innerHTML = 
            `<b>${storyData.title}</b> (<a href="${storyData.url}" target="_blank">Read more</a>)`;
        
    } catch (error) {
        console.error("Error fetching Hacker News:", error);
        document.getElementById("hacker-news").innerText = "Failed to load news.";
    }
}

document.addEventListener("DOMContentLoaded", fetchHackerNewsStory);