document.getElementById("loadBtn").addEventListener("click", fetchData);

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts") // API URL
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse JSON
    })
    .then((data) => {
      displayData(data); // Show data on page
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function displayData(posts) {
  const dataDiv = document.getElementById("data");
  dataDiv.innerHTML = ""; // Clear old data

  posts.slice(0, 5).forEach((post) => {
    // Show only first 5
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    dataDiv.appendChild(postDiv);
  });
}
