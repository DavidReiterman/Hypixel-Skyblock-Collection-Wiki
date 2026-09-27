console.log("Website loaded first time!");

const collections = [
    /* 
        Pages for farming crops.
        name = item
        category = collection name
        subFolder = which subFolder each page is sorted in collection
        traits = traits of item to make search results more specified
        similar = similar items reserved for things such as chicken and feathers 
        to improve the related searches
    */

    {
        name: "Cactus",
        category: "Farming",
        subFolder: "Crops",
        traits: ["standing", "darkColor", "desert"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/cactus.html"
    },

    {
        name: "Carrot",
        category: "Farming",
        subFolder: "Crops",
        traits: ["ground", "brightColor", "plains"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/carrot.html"
    },

    {
        name: "Cocoa Beans",
        category: "Farming",
        subFolder: "Crops",
        traits: ["standing", "darkColor", "jungle"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/cocoaBeans.html"
    },

    {
        name: "Melon",
        category: "Farming",
        subFolder: "Crops",
        traits: ["stem", "brightColor", "jungle"],
        similar: ["Pumpkin"],
        url: "collectionPages/farmingCollections/crops/melon.html"
    },

    {
        name: "Mushroom",
        category: "Farming",
        subFolder: "Crops",
        traits: ["ground", "brightColor", "plains"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/mushroom.html"
    },

    {
        name: "Nether Wart",
        category: "Farming",
        subFolder: "Crops",
        traits: ["ground", "brightColor", "nether"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/netherWart.html"
    },

    {
        name: "Potato",
        category: "Farming",
        subFolder: "Crops",
        traits: ["ground", "brightColor", "plains"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/potato.html"
    },

    {
        name: "Pumpkin",
        category: "Farming",
        traits: ["stem", "brightColor", "plains"],
        similar: ["Melon"],
        url: "collectionPages/farmingCollections/crops/pumpkin.html"
    },

    {
        name: "Seeds",
        category: "Farming",
        subFolder: "Crops",
        traits: ["ground", "brightColor", "plains"],
        similar: ["Wheat"],
        url: "collectionPages/farmingCollections/crops/seeds.html"
    },

    {
        name: "Sugar Cane",
        category: "Farming",
        subFolder: "Crops",
        traits: ["standing", "brightColor", "plains"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/sugarCane.html"
    },

    {
        name: "Wheat",
        category: "Farming",
        subFolder: "Crops",
        traits: ["ground", "brightColor", "plains"],
        similar: ["Seeds"],
        url: "collectionPages/farmingCollections/crops/wheat.html"
    },

    // Pages for farming animals 
    {
        name: "Chicken",
        category: "Farming",
        subFolder: "Animals",
        traits: ["small", "produces"],
        similar: ["Feather"],
        url: "collectionPages/farmingCollections/animals/chicken.html"
    },

    {
        name: "Feather",
        category: "Farming",
        subFolder: "Animals",
        traits: ["small", "produces"],
        similar: ["Chicken"],
        url: "collectionPages/farmingCollections/animals/feather.html"
    },

    {
        name: "Leather",
        category: "Farming",
        subFolder: "Animals",
        traits: ["large", "produces"],
        similar: [],
        url: "collectionPages/farmingCollections/animals/leather.html"
    },

    {
        name: "Mutton",
        category: "Farming",
        subFolder: "Animals",
        traits: ["large", "doesntProduce"],
        similar: [],
        url: "collectionPages/farmingCollections/animals/mutton.html"
    },

    {
        name: "Pork",
        category: "Farming",
        subFolder: "Animals",
        traits: ["large", "doesntProduce"],
        similar: [],
        url: "collectionPages/farmingCollections/animals/pork.html"
    },

    {
        name: "Rabbit",
        category: "Farming",
        subFolder: "Animals",
        traits: ["small", "doesntProduce"],
        similar: [],
        url: "collectionPages/farmingCollections/animals/rabbit.html"
    },

    // Combat nether pages
    {
        name: "Blaze Rod",
        category: "Combat",
        subFolder: "Nether",
        traits: ["fire"],
        similar: ["Chili Pepper"],
        url: "collectionPages/combatCollections/combat/nether/blazeRod.html"
    },

    {
        name: "Chili Pepper",
        category: "Combat",
        subFolder: "Nether",
        traits: ["fire"],
        similar: ["Blaze Rod"],
        url: "collectionPages/combatCollections/combat/nether/chiliPepper.html"
    },

    {
        name: "Ghast Tear",
        category: "Combat",
        subFolder: "Nether",
        traits: ["fire", "flying"],
        similar: [],
        url: "collectionPages/combatCollections/combat/nether/ghastTear.html"
    },

    {
        name: "Magma Cream",
        category: "Combat",
        subFolder: "Nether",
        traits: ["fire"],
        similar: [],
        url: "collectionPages/combatCollections/combat/nether/magmaCream.html"
    },

    {
        name: "Bone",
        category: "Combat",
        subFolder: "Overworld",
        traits: ["common", "standingMob", "lightColor"],
        similar: [],
        url: "collectionPages/combatCollections/combat/overworld/bone.html"
    },

    {
        name: "Ender Pearl",
        category: "Combat",
        subFolder: "Overworld",
        traits: ["rare", "standingMob", "darkColor"],
        similar: [],
        url: "collectionPages/combatCollections/combat/overworld/enderPearl.html"
    },

    {
        name: "Gunpowder",
        category: "Combat",
        subFolder: "Overworld",
        traits: ["common", "standingMob", "darkColor"],
        similar: [],
        url: "collectionPages/combatCollections/combat/overworld/gunpowder.html"
    },

    {
        name: "Rotten Flesh",
        category: "Combat",
        subFolder: "Overworld",
        traits: ["common", "standingMob", "darkColor"],
        similar: [],
        url: "collectionPages/combatCollections/combat/overworld/rottenFlesh.html"
    },

    {
        name: "Slime Ball",
        category: "Combat",
        subFolder: "Overworld",
        traits: ["rare", "lowMob", "lightColor"],
        similar: [],
        url: "collectionPages/combatCollections/combat/overworld/slimeball.html"
    },

    {
        name: "Spider Eye",
        category: "Combat",
        subFolder: "Overworld",
        traits: ["common", "lowMob", "darkColor"],
        similar: ["String"],
        url: "collectionPages/combatCollections/combat/overworld/spiderEye.html"
    },

    {
        name: "String",
        category: "Combat",
        subFolder: "Overworld",
        traits: ["common", "lowMob", "darkColor"],
        similar: ["Spider Eye"],
        url: "collectionPages/combatCollections/combat/overworld/string.html"
    },

    {
        name: "",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        traits: ["", "", ""],
        similar: [""],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/.html"
    },

    {
        name: "Bonzo",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        traits: ["dungeon", "earlyGame"],
        similar: [""],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/.html"
    },

    {
        name: "Livid",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        traits: ["dungeon", "lateGame"],
        similar: [""],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/.html"
    },

    {
        name: "Necron",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        traits: ["dungeon", "lateGame"],
        similar: [""],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/.html"
    },

    {
        name: "Sadan",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        traits: ["dungeon", "lateGame"],
        similar: [""],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/.html"
    },

    {
        name: "Scarf",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        traits: ["dungeon", "earlyGame"],
        similar: [""],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/.html"
    },

    {
        name: "The Professor",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        traits: ["dungeon", "earlyGame"],
        similar: [""],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/theProfessor.html"
    },

    {
        name: "Thorn",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        traits: ["dungeon", "earlyGame"],
        similar: [""],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/thorn.html"
    },

    {
        name: "Kuudra",
        category: "Dungeon Boss",
        subFolder: "",
        traits: ["notDungeon", "lateGame"],
        similar: [""],
        url: "collectionPages/dungeonBossCollections/kuudra.html"
    },

    // Fishing pages below, fish folder first followed by the items pages

    {
        name: "Ink Sack",
        category: "Fishing",
        subFolder: "fish",
        traits: ["darkColor", "water", "animal"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/inkSack.html"
    },

    {
        name: "Magma Fish",
        category: "Fishing",
        subFolder: "fish",
        traits: ["darkColor", "lava", "fish"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/magmafish.html"
    },

    {
        name: "Pufferfish",
        category: "Fishing",
        subFolder: "fish",
        traits: ["lightColor", "water", "fish"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/pufferfish.html"
    },

    {
        name: "Raw Cod",
        category: "Fishing",
        subFolder: "fish",
        traits: ["lightColor", "water", "fish"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/rawCod.html"
    },

    {
        name: "Raw Salmon",
        category: "Fishing",
        subFolder: "fish",
        traits: ["lightColor", "water", "fish"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/rawSalmon.html"
    },

    {
        name: "Tropical Fish",
        category: "Fishing",
        subFolder: "fish",
        traits: ["lightColor", "water", "fish"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/tropicalFish.html"
    },

    // Fishing items pages

    {
        name: "Clay Ball",
        category: "Fishing",
        subFolder: "items",
        traits: ["dead", "lightColor"],
        similar: [""],
        url: "collectionPages/fishingCollections/items/clayBall.html"
    },

    {
        name: "Lily Pad",
        category: "Fishing",
        subFolder: "items",
        traits: ["living", "lightColor"],
        similar: [""],
        url: "collectionPages/fishingCollections/items/lilyPad.html"
    },

    {
        name: "Lotus",
        category: "Fishing",
        subFolder: "items",
        traits: ["living", "lightColor"],
        similar: [""],
        url: "collectionPages/fishingCollections/items/lotus.html"
    },

    {
        name: "Prismarine Crystals",
        category: "Fishing",
        subFolder: "fish",
        traits: ["dead", "lightColor", "prismarine"],
        similar: ["Prismarine Shards"],
        url: "collectionPages/fishingCollections/items/prismarineCrystals.html"
    },

    {
        name: "Prismarine Shards",
        category: "Fishing",
        subFolder: "items",
        traits: ["dead", "lightColor", "prismarine"],
        similar: ["Prismarine Crystals"],
        url: "collectionPages/fishingCollections/items/prismarineShard.html"
    },

    {
        name: "Sponge",
        category: "Fishing",
        subFolder: "items",
        traits: ["living", "lightColor"],
        similar: [""],
        url: "collectionPages/fishingCollections/items/sponge.html"
    },

    // Foraging Pages: logs pages 

    {
        name: "Acacia Log",
        category: "Foraging",
        subFolder: "logs",
        traits: ["brightLog", "brightBiome"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/acacia.html"
    },
    
    {
        name: "Birch",
        category: "Foraging",
        subFolder: "logs",
        traits: ["bright"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/birch.html"
    },

    {
        name: "darkOak",
        category: "Foraging",
        subFolder: "logs",
        traits: ["dark"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/darkOak.html"
    },

    {
        name: "Fig",
        category: "Foraging",
        subFolder: "logs",
        traits: ["light"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/fig.html"
    },

    {
        name: "Helix",
        category: "Foraging",
        subFolder: "logs",
        traits: ["dark"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/helix.html"
    },

    {
        name: "Jungle",
        category: "Foraging",
        subFolder: "logs",
        traits: ["light"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/jungle.html"
    },

    {
        name: "Mangrove",
        category: "Foraging",
        subFolder: "logs",
        traits: ["dark"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/mangrove.html"
    },

    {
        name: "Oak",
        category: "Foraging",
        subFolder: "logs",
        traits: ["", ""],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/oak.html"
    },

    {
        name: "Spruce",
        category: "Foraging",
        subFolder: "logs",
        traits: ["dark"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/spruce.html"
    },

    // Foraging Plants

    {
        name: "Honeycomb",
        category: "Foraging",
        subFolder: "plants",
        traits: ["bright", "nonePlant"],
        similar: [""],
        url: "collectionPages/foragingCollections/plants/honeycomb.html"
    },

    {
        name: "Lushlilac",
        category: "Foraging",
        subFolder: "plants",
        traits: ["plant"],
        similar: [""],
        url: "collectionPages/foragingCollections/plants/lushlilac.html"
    },

    {
        name: "Ruby Veilshroom",
        category: "Foraging",
        subFolder: "plants",
        traits: ["plant"],
        similar: [""],
        url: "collectionPages/foragingCollections/plants/rubyVeilshroom.html"
    },

    {
        name: "Sea Lumis",
        category: "Foraging",
        subFolder: "plants",
        traits: ["plant"],
        similar: [""],
        url: "collectionPages/foragingCollections/plants/seaLumis.html"
    },

    {
        name: "Tender Wood",
        category: "Foraging",
        subFolder: "plants",
        traits: ["plant"],
        similar: [""],
        url: "collectionPages/foragingCollections/plants/tenderWood.html"
    },

    {
        name: "Vinesap",
        category: "Foraging",
        subFolder: "plants",
        traits: ["plant"],
        similar: [""],
        url: "collectionPages/foragingCollections/plants/vinesap.html"
    },

    // Mining Collection
    /*
    {
        name: "",
        category: "Foraging",
        subFolder: "plants",
        traits: ["", ""],
        similar: [""],
        url: "collectionPages/foragingCollections/plants/.html"
    },
    */
];

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
                collection.subCategory,
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

        const match = collections.find(collection =>
            collection.name
                .toLowerCase()
                .startsWith(searchText)
        );

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