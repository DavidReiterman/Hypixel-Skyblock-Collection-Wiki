const searchInput = document.getElementById("collection-search");
const searchResults = document.getElementById("search-results");


searchInput.addEventListener("input", function () {
    // Ensures lowercase works
    const searchText = searchInput.value
        .toLowerCase()
        .trim()

    searchResults.innerHTML = "";

    if (searchText == "") {
        // If empty return nothing
        searchResults.style.display = "none";
        return;
    }

    const matches = collections
        .filter(collection => {
            const searchableText = [
                collection.name,
                collection.category,
                collection.searchTerms,
                collection.subFolder,
                collection.traits,
                collection.similar
            ]
            
            .join(" ")
            .toLowerCase();

            return searchableText.includes(searchText);
        })

        .sort((a,b) => {
            const aStarts = a.name
                .toLowerCase()
                .startsWith(searchText);

            const bStarts = b.name
                .toLowerCase()
                .startsWith(searchText);

            if (aStarts && !bStarts) {
                return -1;
            }

            if (!aStarts && bStarts) {
                return 1;
            }

            return a.name.localeCompare(b.name);
        });

    if (matches.length === 0) {
        searchResults.innerHTML = 
        `
        <div class="no-results">
            No collections found
        </div>
        `;

        searchResults.style.display = "block"
        return;
    }

    matches.slice(0, 6).forEach(collection => {
        const result = document.createElement("a");
        result.classList.add("search-result");
        result.href = collection.url;
        result.innerHTML = 
        `
            <span class="result-name">
                ${collection.name}
            </span>

            <span class="result-category">
                ${collection.category}
            </span>
        `;

        searchResults.appendChild(result);
    });

    searchResults.style.display = "block";
});

searchInput.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        const searchText= searchInput.value
            .toLowerCase()
            .trim();

        const match = collections.find(collection => {
            const searchableText = [
                collection.name,
                collection.category,
                collection.subFolder,
                collection.searchTerms,
                collection.traits,
                collection.similar
            ]
                .join(" ")
                .toLowerCase();
        });

        if (match) {
            window.location.href = match.url;
        }
    }
});

document.addEventListener("click", function (event) {
    if (!event.target.closest(".search-container")) {
        searchResults.style.display = "none";
    }
});