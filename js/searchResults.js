const collections = [
    /* 
        Pages for farming crops.
        name = item
        category = collection name
        subFolder = which subFolder each page is sorted in collection
        searchTerms = terms a user might search to find an item
        traits = traits of item to make search results more specified
        similar = similar items reserved for things such as chicken and feathers 
        to improve the related searches

        Traits covers terms users can search to find the "name" or item.
        Ex: If a user searches plant, cactus will show up
    */

    {
        name: "Cactus",
        category: "Farming",
        subFolder: "Crops",
        searchTerms:[
            "cacti",
            "cactus collection",
            "farming cactus",
            "desert crop",
            "mushroom desert cactus"
        ],

        traits: ["crop", "plant", "cactus", "desert", "mushroomDesert", "farming", "collection"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/cactus.html"
    },

    {
        name: "Carrot",
        category: "Farming",
        subFolder: "Crops",
        searchTerms:[
            "carrots",
            "carrot collection",
            "farming carrot",
            "golden carrot",
            "vegetable crop"
        ],

        traits: ["crop", "plant", "vegetable", "garden", "farming", "collection"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/carrot.html"
    },

    {
        name: "Cocoa Beans",
        category: "Farming",
        subFolder: "Crops",
        searchTerms:[
            "cocoa",
            "cocoa bean",
            "cocoa beans collection",
            "farming cocoa",
            "jungle cocoa"
        ],

        traits: ["crop", "plant", "cocoa", "jungle", "farming", "collection"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/cocoaBeans.html"
    },

    {
        name: "Melon",
        category: "Farming",
        subFolder: "Crops",
        searchTerms:[
            "melons",
            "melon collection",
            "farming melon",
            "golden melon",
            "melon crop"
        ],

        traits: ["crop", "plant", "melon", "fruit", "garden", "farming", "collection"],
        similar: ["Pumpkin"],
        url: "collectionPages/farmingCollections/crops/melon.html"
    },

    {
        name: "Mushroom",
        category: "Farming",
        subFolder: "Crops",
        searchTerms:[
            "mushrooms",
            "mushroom collection",
            "farming mushroom",
            "fungus",
            "mushroom desert"
        ],

        traits: ["crop", "plant", "mushroom", "fungus", "mushroomDesert", "farming", "collection"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/mushroom.html"
    },

    {
        name: "Nether Wart",
        category: "Farming",
        subFolder: "Crops",
        searchTerms:[
            "netherwart",
            "nether wart collection",
            "farming nether wart",
            "nether crop",
            "wart"
        ],

        traits: ["crop", "plant", "nether", "wart", "farming", "collection"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/netherWart.html"
    },

    {
        name: "Potato",
        category: "Farming",
        subFolder: "Crops",
        searchTerms:[
            "potatoes",
            "potato collection",
            "farming potato",
            "garden potato",
            "vegetable crop"
        ],

        traits: ["crop", "plant", "vegetable", "garden", "farming", "collection"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/potato.html"
    },

    {
        name: "Pumpkin",
        category: "Farming",
        subFolder: "Crops",
        searchTerms:[
            "pumpkins",
            "pumpkin collection",
            "farming pumpkin",
            "garden pumpkin",
            "pumpkin crop"
        ],

        traits: ["crop", "plant", "pumpkin", "garden", "farming", "collection"],
        similar: ["Melon"],
        url: "collectionPages/farmingCollections/crops/pumpkin.html"
    },

    {
        name: "Seeds",
        category: "Farming",
        subFolder: "Crops",
        searchTerms:[
            "seed",
            "wheat seeds",
            "seeds collection",
            "farming seeds",
            "crop seeds"
        ],

        traits: ["crop", "plant", "wheat", "farming", "collection"],
        similar: ["Wheat"],
        url: "collectionPages/farmingCollections/crops/seeds.html"
    },

    {
        name: "Sugar Cane",
        category: "Farming",
        subFolder: "Crops",
        searchTerms:[
            "sugarcane",
            "sugar cane collection",
            "farming sugar cane",
            "cane",
            "sugar crop"
        ],

        traits: ["crop", "plant", "sugar", "cane", "farming", "collection"],
        similar: [],
        url: "collectionPages/farmingCollections/crops/sugarCane.html"
    },

    {
        name: "Wheat",
        category: "Farming",
        subFolder: "Crops",
        searchTerms:[
            "wheat collection",
            "farming wheat",
            "grain",
            "wheat crop",
            "garden wheat"
        ],

        traits: ["crop", "plant", "grain", "seed", "wheat", "garden", "farming", "collection"],
        similar: ["Seeds"],
        url: "collectionPages/farmingCollections/crops/wheat.html"
    },

    // Pages for farming animals

    {
        name: "Chicken",
        category: "Farming",
        subFolder: "Animals",
        searchTerms:[
            "chickens",
            "chicken collection",
            "farming chicken",
            "farm animal",
            "chicken mob"
        ],

        traits: ["animal", "mob", "chicken", "farmAnimal", "farming"],
        similar: ["Feather"],
        url: "collectionPages/farmingCollections/animals/chicken.html"
    },

    {
        name: "Feather",
        category: "Farming",
        subFolder: "Animals",
        searchTerms:[
            "feathers",
            "feather collection",
            "farming feather",
            "chicken drop",
            "chicken feather"
        ],

        traits: ["animalDrop", "mobDrop", "chicken", "feather", "farming"],
        similar: ["Chicken"],
        url: "collectionPages/farmingCollections/animals/feather.html"
    },

    {
        name: "Leather",
        category: "Farming",
        subFolder: "Animals",
        searchTerms:[
            "leather collection",
            "farming leather",
            "cow drop",
            "cow leather",
            "animal drop"
        ],

        traits: ["animalDrop", "mobDrop", "cow", "leather", "farming"],
        similar: [],
        url: "collectionPages/farmingCollections/animals/leather.html"
    },

    {
        name: "Mutton",
        category: "Farming",
        subFolder: "Animals",
        searchTerms:[
            "mutton collection",
            "farming mutton",
            "sheep drop",
            "sheep mutton",
            "animal drop"
        ],

        traits: ["animalDrop", "mobDrop", "sheep", "mutton", "farming"],
        similar: [],
        url: "collectionPages/farmingCollections/animals/mutton.html"
    },

    {
        name: "Pork",
        category: "Farming",
        subFolder: "Animals",
        searchTerms:[
            "pork collection",
            "farming pork",
            "pig drop",
            "pig pork",
            "animal drop"
        ],

        traits: ["animalDrop", "mobDrop", "pig", "pork", "farming"],
        similar: [],
        url: "collectionPages/farmingCollections/animals/pork.html"
    },

    {
        name: "Rabbit",
        category: "Farming",
        subFolder: "Animals",
        searchTerms:[
            "rabbits",
            "rabbit collection",
            "farming rabbit",
            "farm animal",
            "rabbit mob"
        ],

        traits: ["animal", "mob", "rabbit", "farmAnimal", "farming"],
        similar: [],
        url: "collectionPages/farmingCollections/animals/rabbit.html"
    },

    // Combat nether pages

    {
        name: "Blaze Rod",
        category: "Combat",
        subFolder: "Nether",
        searchTerms:[
            "blaze",
            "blaze rods",
            "blaze rod collection",
            "combat blaze rod",
            "nether mob drop",
            "crimson isle blaze"
        ],

        traits: ["blaze", "mobDrop", "nether", "crimsonIsle", "combat", "fire"],
        similar: ["Chili Pepper"],
        url: "collectionPages/combatCollections/combat/nether/blazeRod.html"
    },

    {
        name: "Chili Pepper",
        category: "Combat",
        subFolder: "Nether",
        searchTerms:[
            "chili",
            "pepper",
            "chili peppers",
            "chili pepper collection",
            "combat chili pepper",
            "crimson isle pepper"
        ],

        traits: ["pepper", "chili", "nether", "crimsonIsle", "combat"],
        similar: ["Blaze Rod"],
        url: "collectionPages/combatCollections/combat/nether/chiliPepper.html"
    },

    {
        name: "Ghast Tear",
        category: "Combat",
        subFolder: "Nether",
        searchTerms:[
            "ghast",
            "ghast tears",
            "ghast tear collection",
            "combat ghast tear",
            "nether mob drop",
            "crimson isle ghast"
        ],

        traits: ["ghast", "mobDrop", "nether", "crimsonIsle", "combat"],
        similar: [],
        url: "collectionPages/combatCollections/combat/nether/ghastTear.html"
    },

    {
        name: "Magma Cream",
        category: "Combat",
        subFolder: "Nether",
        searchTerms:[
            "magma",
            "magma cube",
            "magma cubes",
            "magma cream collection",
            "combat magma cream",
            "nether mob drop"
        ],

        traits: ["magmaCube", "mobDrop", "nether", "crimsonIsle", "combat", "lava"],
        similar: [],
        url: "collectionPages/combatCollections/combat/nether/magmaCream.html"
    },

    {
        name: "Bone",
        category: "Combat",
        subFolder: "Overworld",
        searchTerms:[
            "bones",
            "bone collection",
            "combat bone",
            "skeleton",
            "skeleton drop",
            "mob drop"
        ],

        traits: ["skeleton", "mobDrop", "combat", "overworld"],
        similar: [],
        url: "collectionPages/combatCollections/combat/overworld/bone.html"
    },

    {
        name: "Ender Pearl",
        category: "Combat",
        subFolder: "Overworld",
        searchTerms:[
            "ender pearls",
            "enderpearl",
            "pearl",
            "pearls",
            "ender pearl collection",
            "combat ender pearl",
            "enderman",
            "enderman drop"
        ],

        traits: ["enderman", "mobDrop", "end", "combat", "pearl"],
        similar: [],
        url: "collectionPages/combatCollections/combat/overworld/enderPearl.html"
    },

    {
        name: "Gunpowder",
        category: "Combat",
        subFolder: "Overworld",
        searchTerms:[
            "gun powder",
            "gunpowder collection",
            "combat gunpowder",
            "creeper",
            "creeper drop",
            "explosive drop"
        ],

        traits: ["creeper", "mobDrop", "combat", "explosive"],
        similar: [],
        url: "collectionPages/combatCollections/combat/overworld/gunpowder.html"
    },

    {
        name: "Rotten Flesh",
        category: "Combat",
        subFolder: "Overworld",
        searchTerms:[
            "rottenflesh",
            "rotten flesh collection",
            "zombie",
            "zombie drop",
            "undead drop"
        ],

        traits: ["zombie", "mobDrop", "combat", "undead"],
        similar: [],
        url: "collectionPages/combatCollections/combat/overworld/rottenFlesh.html"
    },

    {
        name: "Slime Ball",
        category: "Combat",
        subFolder: "Overworld",
        searchTerms:[
            "slimeball",
            "slimeballs",
            "slime ball",
            "slime ball collection",
            "combat slime ball",
            "slime",
            "slime drop"
        ],

        traits: ["slime", "mobDrop", "combat"],
        similar: [],
        url: "collectionPages/combatCollections/combat/overworld/slimeball.html"
    },

    {
        name: "Spider Eye",
        category: "Combat",
        subFolder: "Overworld",
        searchTerms:[
            "spider eyes",
            "spidereye",
            "spider eye collection",
            "combat spider eye",
            "spider",
            "spider drop",
            "arachnid"
        ],

        traits: ["spider", "mobDrop", "combat", "arachnid"],
        similar: ["String"],
        url: "collectionPages/combatCollections/combat/overworld/spiderEye.html"
    },

    {
        name: "String",
        category: "Combat",
        subFolder: "Overworld",
        searchTerms:[
            "strings",
            "string collection",
            "combat string",
            "spider drop",
            "arachnid drop"
        ],

        traits: ["spider", "mobDrop", "combat", "arachnid"],
        similar: ["Spider Eye"],
        url: "collectionPages/combatCollections/combat/overworld/string.html"
    },

    // Dungeon Boss Pages

    {
        name: "Bonzo",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        searchTerms:[
            "floor 1",
            "floor 1 boss",
            "f1",
            "f1 boss",
            "catacombs floor 1",
            "catacombs boss"
        ],

        traits: ["dungeon", "floor1", "catacombs", "clown", "undead", "mage"],
        similar: ["Scarf"],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/.html"
    },

    {
        name: "Scarf",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        searchTerms:[
            "floor 2",
            "floor 2 boss",
            "f2",
            "f2 boss",
            "catacombs floor 2",
            "catacombs boss"
        ],

        traits: ["dungeon", "catacombs", "necromancer", "undead", "mage"],
        similar: ["Bonzo", "The Professor"],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/.html"
    },

    {
        name: "The Professor",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        searchTerms:[
            "professor",
            "floor 3",
            "floor 3 boss",
            "f3",
            "f3 boss",
            "catacombs floor 3",
            "catacombs boss"
        ],

        traits: ["dungeon", "catacombs", "guardian", "mage", "water"],
        similar: ["Scarf", "Thorn"],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/theProfessor.html"
    },

    {
        name: "Thorn",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        searchTerms:[
            "floor 4",
            "floor 4 boss",
            "f4",
            "f4 boss",
            "catacombs floor 4",
            "catacombs boss"
        ],

        traits: ["dungeon", "catacombs", "spirit", "animals", "bow"],
        similar: ["The Professor", "Livid"],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/thorn.html"
    },

    {
        name: "Livid",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        searchTerms:[
            "floor 5",
            "floor 5 boss",
            "f5", 
            "f5 boss",
            "catacombs floor 5",
            "catacombs boss"
        ],

        traits: ["dungeon", "catacombs", "assassin", "clone", "shadow"],
        similar: ["Thorn", "Sadan"],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/.html"
    },

    {
        name: "Sadan",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        searchTerms:[
            "floor 6",
            "floor 6 boss",
            "f6",
            "f6 boss",
            "catacombs floor 6",
            "catacombs 6"
        ],
        traits: ["dungeon", "catacombs","necromancer", "giant", "undead"],
        similar: ["Livid", "Necron"],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/.html"
    },

    {
        name: "Necron",
        category: "Dungeon Boss",
        subFolder: "dungeonBoss",
        searchTerms:[
            "floor 7",
            "floor 7 boss",
            "f7", 
            "f7 boss",
            "catacombs floor 7",
            "catacombs boss",
            "wither boss",
            "final dungeon boss"
        ],

        traits: ["dungeon", "catacombs", "wither", "finalBoss", "lateGame"],
        similar: ["Sadan"],
        url: "collectionPages/dungeonBossCollections/dungeonBoss/.html"
    },

    {
        name: "Kuudra",
        category: "Dungeon Boss",
        subFolder: "",
        searchTerms:[
            "kuudra boss",
            "crimson isle boss",
            "nether boss",
            "lava boss",
            "notDungeon"
        ],

        traits: ["notDungeon", "crimsonIsle", "nether", "lava", "boss"],
        similar: [],
        url: "collectionPages/dungeonBossCollections/kuudra.html"
    },

    // Fishing pages below, fish folder first followed by the items pages

    {
        name: "Ink Sack",
        category: "Fishing",
        subFolder: "items",
        searchTerms: [
            "ink sac",
            "ink sack",
            "ink sacs",
            "ink sacks",
            "squid drop",
            "inksack",
            "inksacks",
            "fishing ink",
            "ink collection"
        ],
        
        traits: ["fishing", "squid", "mobDrop", "water", "ink", "collectionItem"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/inkSack.html"
    },

    {
        name: "Magma Fish",
        category: "Fishing",
        subFolder: "fish",
        searchTerms: [
            "magmafish",
            "magma fish",
            "magma fish collection",
            "lava fishing",
            "crimson isle fishing",
            "magma fishing"
        ],
        
        traits: ["fishing", "fish", "lavaFishing", "lava", "crimsonIsle", "magma", "collectionItem"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/magmafish.html"
    },

    {
        name: "Pufferfish",
        category: "Fishing",
        subFolder: "fish",
        searchTerms: [
            "puffer fish",
            "pufferfish collection",
            "fishing pufferfish",
            "water fish",
            "puffer fish collection"
        ],

        traits: ["fishing", "fish", "water", "pufferfish", "collectionItem"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/pufferfish.html"
    },

    {
        name: "Raw Cod",
        category: "Fishing",
        subFolder: "fish",
        searchTerms: [
            "cod",
            "raw fish",
            "raw cod collection",
            "cod collection",
            "fishing cod"
        ],
        
        traits: ["fishing", "fish", "water", "cod", "rawFish", "collectionItem"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/rawCod.html"
    },

    {
        name: "Raw Salmon",
        category: "Fishing",
        subFolder: "fish",
        searchTerms: [
            "salmon",
            "raw salmon collection",
            "salmon collection",
            "fishing salmon",
            "raw fish"
        ],
        
        traits: ["fishing", "fish","water", "salmon", "rawFish", "collectionItem"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/rawSalmon.html"
    },

    {
        name: "Tropical Fish",
        category: "Fishing",
        subFolder: "fish",
        searchTerms: [
            "tropicalfish",
            "tropical fish collection",
            "fishing tropical fish",
            "water fish",
            "tropical fish"
        ],
        
        traits: ["fishing", "fish", "water", "tropical", "collectionItem"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/tropicalFish.html"
    },

    // Fishing items pages

    {
        name: "Clay Ball",
        category: "Fishing",
        subFolder: "items",
        searchTerms: [
            "clay",
            "clay balls",
            "clay bll collection",
            "fishing clay",
            "clay collection"
        ],
        
        traits: ["fishing", "material", "clay", "water", "collectionItem"],
        similar: [""],
        url: "collectionPages/fishingCollections/items/clayBall.html"
    },

    {
        name: "Lily Pad",
        category: "Fishing",
        subFolder: "items",
        searchTerms: [
            "lilypad", 
            "lily pads",
            "lily pad collection",
            "fishing lily pad",
            "water plant"
        ],
        
        traits: ["fishing", "plant", "water", "lilyPad", "collectionItem"],
        similar: [""],
        url: "collectionPages/fishingCollections/items/lilyPad.html"
    },

    {
        name: "Lotus",
        category: "Fishing",
        subFolder: "items",
        searchTerms: [
            "lotus collection",
            "fishing lotus",
            "water plant",
            "lotus item"
        ],
        
        traits: ["fishing", "plant", "water", "lotus", "collectionItem"],
        similar: [""],
        url: "collectionPages/fishingCollections/items/lotus.html"
    },

    {
        name: "Prismarine Crystals",
        category: "Fishing",
        subFolder: "fish",
        searchTerms: [
            "prismarine crystal",
            "prismarine crystals",
            "prismarine crystal collection",
            "guardian drop",
            "fishing prismarine"
        ],
        
        traits: ["fishing", "prismarine", "crystal", "guardian", "mobDrop", "water", "collectionItem"],
        similar: ["Prismarine Shards"],
        url: "collectionPages/fishingCollections/items/prismarineCrystals.html"
    },

    {
        name: "Prismarine Shards",
        category: "Fishing",
        subFolder: "items",
        searchTerms: [
            "prismarine shard",
            "prismarine shards",
            "prismarine shard collection",
            "guardian drop",
            "fishing prismarine"
        ],
        
        traits: ["fishing", "prismarine", "shard", "guardian", "mobDrop", "water", "collectionItem"],
        similar: ["Prismarine Crystals"],
        url: "collectionPages/fishingCollections/items/prismarineShard.html"
    },

    {
        name: "Sponge",
        category: "Fishing",
        subFolder: "items",
        searchTerms: [
            "sponges",
            "sponge collection",
            "fishing sponge",
            "water sponge",
            "sponge item"
        ],
        
        traits: ["fishing", "water", "sponge", "block", "collectionItem"],
        similar: [""],
        url: "collectionPages/fishingCollections/items/sponge.html"
    },

    // Foraging Pages: logs pages 

    {
        name: "Acacia Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [
            "acacia",
            "acacia wood",
            "acacia logs",
            "acacia collection",
            "foraging acacia",
            "savanna wood"
        ],
        
        traits: ["foraging", "wood", "log", "tree", "acacia", "thePark", "savanna", "collectionItem"],
        similar: ["Jungle Log", "Birch Log"],
        url: "collectionPages/foragingCollections/logs/acacia.html"
    },
    
    {
        name: "Birch Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [
            "birch log",
            "birch logs",
            "birch wood",
            "birch collection",
            "foraging birch",
            "birch park"
        ],
        
        traits: ["foraging", "wood", "log", "tree", "branch", "thePark", "collectionItem"],
        similar: ["Oak Log", "Acacia Log"],
        url: "collectionPages/foragingCollections/logs/birch.html"
    },

    {
        name: "Dark Oak Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [
            "dark oak",
            "darkoak",
            "dark oak log",
            "dark oak logs",
            "dark oak wood",
            "dark oak collection",
            "dark thicket"
        ],
        
        traits: ["foraging", "wood", "log", "tree", "darkOak", "thePark", "darkThicket", "collectionItem"],
        similar: ["Oak Log", "Spruce Log"],
        url: "collectionPages/foragingCollections/logs/darkOak.html"
    },

    {
        name: "Fig Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [
            "fig log",
            "fig logs",
            "fig wood",
            "fig collection",
            "foraging fig",
            "galatea fig"
        ],
        
        traits: ["foraging", "wood", "log", "tre", "fig", "galatea", "collectionItems"],
        similar: ["Mangrove Log", "Helix Log"],
        url: "collectionPages/foragingCollections/logs/fig.html"
    },

    {
        name: "Helix Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [
            "helix log",
            "helix logs",
            "helix wood",
            "helix collection",
            "foraging helix",
            "galatea helix"
        ],
        
        traits: ["foraging", "wood", "log", "tree", "helix", "galatea", "collectionItem"],
        similar: ["Fig Log", "Mangrove Log"],
        url: "collectionPages/foragingCollections/logs/helix.html"
    },

    {
        name: "Jungle Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [
            "jungle log",
            "jungle logs",
            "jungle wood",
            "jungle collection",
            "foraging jungle",
            "jungle island"
        ],
        
        traits: ["foraging", "wood", "log", "tree", "jungle", "thePark", "collectionItem"],
        similar: ["Acacia Log", "Oak Log"],
        url: "collectionPages/foragingCollections/logs/jungle.html"
    },

    {
        name: "Mangrove Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [
            "mangrove log",
            "mangrove logs",
            "magrove wood",
            "mangrove collection",
            "foraging mangrove",
            "galatea mangrove"
        ],
        
        traits: ["foraging", "wood", "log", "tree", "mangrove", "galatea", "collectionItem"],
        similar: ["Fig Log", "Helix Log"],
        url: "collectionPages/foragingCollections/logs/mangrove.html"
    },

    {
        name: "Oak Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [
            "oak log",
            "oak logs",
            "oak wood",
            "oak collection",
            "foraging oak",
            "oak tree"
        ],
        
        traits: ["foraging", "wood", "log", "tree", "oak", "thePark", "collectionItem"],
        similar: ["Birch Log", "Dark Oak Log"],
        url: "collectionPages/foragingCollections/logs/oak.html"
    },

    {
        name: "Spruce Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [
            "spruce log",
            "spurce logs",
            "spruce wood",
            "spruce collection",
            "foraging spruce",
            "spruce woods"
        ],
        
        traits: ["foraging", "wood", "log", "tree", "spruce", "thePark", "spruceWoods", "collectionItem"],
        similar: ["Dark Oak Log", "Oak Log"],
        url: "collectionPages/foragingCollections/logs/spruce.html"
    },

    // Foraging Plants

    {
        name: "Honeycomb",
        category: "Foraging",
        subFolder: "plants",
        searchTerms: [
            "honey comb",
            "honeycombs",
            "honeycomb collection",
            "foraging honeycomb",
            "galatea honeycomb",
            "bee item"
        ],
        
        traits: ["foraging", "honey", "honeycomb", "bee", "galatea", "material", "collectionItem"],
        similar: ["Vinesap"],
        url: "collectionPages/foragingCollections/plants/honeycomb.html"
    },

    {
        name: "Lushlilac",
        category: "Foraging",
        subFolder: "plants",
        searchTerms: [
            "lush lilac",
            "lushlilac collection",
            "foraging lushlilac",
            "galatea lushlilac",
            "lilac",
            "bush item"
        ],
        
        traits:["foraging", "plant", "flower", "bush", "lushlilac", "galatea", "collectionItem"],
        similar: ["Sea Lumis", "Ruby Veilshroom"],
        url: "collectionPages/foragingCollections/plants/lushlilac.html"
    },

    {
        name: "Ruby Veilshroom",
        category: "Foraging",
        subFolder: "plants",
        searchTerms: [
            "ruby veil shroom",
            "ruby veil mushroom",
            "veilshroom",
            "ruby veilshroom collection",
            "foraging veilshroom",
            "galatea mushroom"
        ],
        
        traits: ["foraging", "plant", "mushroom", "fungus", "veilshroom", "galatea", "collectionItem"],
        similar: ["Lushlilac", "Sea Lumis"],
        url: "collectionPages/foragingCollections/plants/rubyVeilshroom.html"
    },

    {
        name: "Sea Lumies",
        category: "Foraging",
        subFolder: "plants",
        searchTerms: [
            "sea lumi",
            "sea lumies",
            "sea lumies collection",
            "foraging sea lumies",
            "galatea sea lumies",
            "luminous plant"
        ],
        
        traits: ["foraging", "plant", "aquatic", "sea", "luminous", "galatea", "collectionItem"],
        similar: ["Lushlilac", "Ruby Veilshroom"],
        url: "collectionPages/foragingCollections/plants/seaLumies.html"
    },

    {
        name: "Tender Wood",
        category: "Foraging",
        subFolder: "plants",
        searchTerms: [
            "tenderwood",
            "tender wood collection",
            "foraging tender wood",
            "galatea tender wood",
            "soft wood"
        ],
        
        traits: ["foraging", "wood", "material", "tenderWood", "galatea", "collectionItem"],
        similar: ["Vinesap", "Honeycomb"],
        url: "collectionPages/foragingCollections/plants/tenderWood.html"
    },

    {
        name: "Vinesap",
        category: "Foraging",
        subFolder: "plants",
        searchTerms: [
            "vine sap",
            "vineap collection",
            "foraging vinesap",
            "galatea vinesap",
            "sap",
            "vine item"
        ],
        
        traits: ["foraging", "plant", "sap", "vine", "vinesap", "galatea", "collectionItem"],
        similar: ["Tender Wood", "Honeycomb"],
        url: "collectionPages/foragingCollections/plants/vinesap.html"
    },

    // Mining Collection: Blocks
    
    {
        name: "Cobblestone",
        category: "Mining",
        subFolder: "blocks",
        searchTerms: [

        ],
        
        traits: ["stone", "gray"],
        similar: ["Hard Stone"],
        url: "collectionPages/miningCollections/blocks/cobblestone.html"
    },

    {
        name: "Gravel",
        category: "Mining",
        subFolder: "blocks",
        searchTerms: [

        ],
        
        traits: ["gray", "canFall"],
        similar: ["Sand", "Red Sand"],
        url: "collectionPages/miningCollections/blocks/gravel.html"
    },

    {
        name: "Hard Stone",
        category: "Mining",
        subFolder: "blocks",
        searchTerms: [

        ],
        
        traits: ["gray", "stone"],
        similar: ["Cobblestone"],
        url: "collectionPages/miningCollections/blocks/hardStone.html"
    },

    {
        name: "Ice",
        category: "Mining",
        subFolder: "blocks",
        searchTerms: [

        ],
        
        traits: [],
        similar: [],
        url: "collectionPages/miningCollections/blocks/ice.html"
    },

    {
        name: "Mycelium",
        category: "Mining",
        subFolder: "blocks",
        searchTerms: [

        ],
        
        traits: [],
        similar: [],
        url: "collectionPages/miningCollections/blocks/mycelium.html"
    },

    {
        name: "Obsidian",
        category: "Mining",
        subFolder: "blocks",
        searchTerms: [

        ],
        
        traits: [],
        similar: [],
        url: "collectionPages/miningCollections/blocks/obsidian.html"
    },

    {
        name: "Red Sand",
        category: "Mining",
        subFolder: "blocks",
        searchTerms: [

        ],
        
        traits: ["canFall", "sand"],
        similar: ["Sand", "Gravel"],
        url: "collectionPages/miningCollections/blocks/redSand.html"
    },

    {
        name: "Sand",
        category: "Mining",
        subFolder: "blocks",
        searchTerms: [

        ],
        
        traits: ["canFall", "sand"],
        similar: ["Red Sand", "Gravel"],
        url: "collectionPages/miningCollections/blocks/sand.html"
    },

    // Mining Pages : Dust Pages

    {
        name: "Glowstone Dust",
        category: "Mining",
        subFolder: "dust",
        searchTerms: [

        ],
        
        traits: [],
        similar: ["Redstone Dust", "Sulphur"],
        url: "collectionPages/miningCollections/dust/glowstone.html"
    },

    {
        name: "Redstone Dust",
        category: "Mining",
        subFolder: "dust",
        searchTerms: [

        ],
        
        traits: [],
        similar: ["Glowstone Dust", "Sulphur"],
        url: "collectionPages/miningCollections/dust/redstone.html"
    },

    {
        name: "Sulphur",
        category: "Mining",
        subFolder: "dust",
        searchTerms: [

        ],
        
        traits: [],
        similar: ["Redstone Dust", "Glowstone Dust"],
        url: "collectionPages/miningCollections//.html"
    },

    // Mining Pages : Ingots

    {
        name: "Gold Ingot",
        category: "Mining",
        subFolder: "ingots",
        searchTerms: [

        ],
        
        traits: [],
        similar: ["Iron Ingot"],
        url: "collectionPages/miningCollections/ingots/gold.html"
    },

    {
        name: "Iron Ingot",
        category: "Mining",
        subFolder: "ingots",
        searchTerms: [

        ],
        
        traits: [],
        similar: ["Gold Ingot"],
        url: "collectionPages/miningCollections/ingots/iron.html"
    },

    // Mining Pages : Stones

    {
        name: "Coal",
        category: "Mining",
        subFolder: "stones",
        searchTerms: [

        ],
        
        traits: ["dark", "stone", "overworld"],
        similar: [],
        url: "collectionPages/miningCollections/stones/coal.html"
    },

    {
        name: "Diamond",
        category: "Mining",
        subFolder: "stones",
        searchTerms: [

        ],
        
        traits: ["bright", "stone", "overworld"],
        similar: [],
        url: "collectionPages/miningCollections/stones/diamond.html"
    },

    {
        name: "Emerald",
        category: "Mining",
        subFolder: "stones",
        searchTerms: [

        ],
        
        traits: ["bright", "stone", "overworld"],
        similar: [],
        url: "collectionPages/miningCollections/stones/emerald.html"
    },

    {
        name: "Gemstone",
        category: "Mining",
        subFolder: "stones",
        searchTerms: [

        ],
        
        traits: ["bright", "stone", "dwarvenMine"],
        similar: [],
        url: "collectionPages/miningCollections/stones/gemstone.html"
    },

    {
        name: "Lapis Lazuli",
        category: "Mining",
        subFolder: "stones",
        searchTerms: [

        ],
        
        traits: ["bright", "stone", "overworld"],
        similar: [],
        url: "collectionPages/miningCollections/stones/lapisLazuli.html"
    },

    {
        name: "Mithril",
        category: "Mining",
        subFolder: "stones",
        searchTerms: [

        ],
        
        traits: ["dark", "stone", "dwarvenMine"],
        similar: [],
        url: "collectionPages/miningCollections/stones/mithril.html"
    },

    {
        name: "Tungsten",
        category: "Mining",
        subFolder: "stones",
        searchTerms: [

        ],
        
        traits: ["dark", "stone", "dwarvenMine"],
        similar: [],
        url: "collectionPages/miningCollections/stones/tungsten.html"
    },

    {
        name: "Umber",
        category: "Mining",
        subFolder: "stones",
        searchTerms: [

        ],
        
        traits: ["dark", "stone", "dwarvenMine"],
        similar: [],
        url: "collectionPages/miningCollections/stones/umber.html"
    },

    //Rift collection page

    {
        name: "Agaricus Cap",
        category: "Rift",
        subFolder: "objects",
        searchTerms: [

        ],
        
        traits: ["earlyRift", "rift"],
        similar: [],
        url: "collectionPages/riftCollections/objects/agaricusCap.html"
    },

    {
        name: "Caducous Stem",
        category: "Rift",
        subFolder: "objects",
        searchTerms: [

        ],
        
        traits: ["plant", "rift", "earlyRift"],
        similar: [""],
        url: "collectionPages/riftCollections/objects/caducousStem.html"
    },

    {
        name: "Half Eaten Carrot",
        category: "Rift",
        subFolder: "objects",
        searchTerms: [

        ],
        
        traits: ["plant", "rift"],
        similar: [""],
        url: "collectionPages/riftCollections/objects/halfEatenCarrot.html"
    },

    {
        name: "Hemovibe",
        category: "Rift",
        subFolder: "objects",
        searchTerms: [

        ],
        
        traits: [],
        similar: [],
        url: "collectionPages/miningCollections//.html"
    },

    {
        name: "Living Metal Heart",
        category: "Rift",
        subFolder: "objects",
        searchTerms: [

        ],
        
        traits: ["earlyRift", "rift", "living"],
        similar: [],
        url: "collectionPages/riftCollections/objects/livingMetalHeart.html"
    },

    {
        name: "Timite",
        category: "Rift",
        subFolder: "objects",
        searchTerms: [

        ],
        
        traits: ["lateRift", "rift"],
        similar: [],
        url: "collectionPages/riftCollections/objects/timite.html"
    },

    {
        name: "Wilted Berberis",
        category: "Rift",
        subFolder: "objects",
        searchTerms: [

        ],
        
        traits: ["earlyRift", "rift", "plant"],
        similar: [],
        url: "collectionPages/riftCollections/objects/wiltedBerberis.html"
    }
];