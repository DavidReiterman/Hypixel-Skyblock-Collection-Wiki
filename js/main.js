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
        subFolder: "fish",
        searchTerms: [

        ],
        
        traits: ["darkColor", "water", "animal"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/inkSack.html"
    },

    {
        name: "Magma Fish",
        category: "Fishing",
        subFolder: "fish",
                searchTerms: [

        ],
        
        traits: ["darkColor", "lava", "fish"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/magmafish.html"
    },

    {
        name: "Pufferfish",
        category: "Fishing",
        subFolder: "fish",
        searchTerms: [

        ],

        traits: ["lightColor", "water", "fish"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/pufferfish.html"
    },

    {
        name: "Raw Cod",
        category: "Fishing",
        subFolder: "fish",
        searchTerms: [

        ],
        
        traits: ["lightColor", "water", "fish"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/rawCod.html"
    },

    {
        name: "Raw Salmon",
        category: "Fishing",
        subFolder: "fish",
        searchTerms: [

        ],
        
        traits: ["lightColor", "water", "fish"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/rawSalmon.html"
    },

    {
        name: "Tropical Fish",
        category: "Fishing",
        subFolder: "fish",
        searchTerms: [

        ],
        
        traits: ["lightColor", "water", "fish"],
        similar: [""],
        url: "collectionPages/fishingCollections/fish/tropicalFish.html"
    },

    // Fishing items pages

    {
        name: "Clay Ball",
        category: "Fishing",
        subFolder: "items",
        searchTerms: [

        ],
        
        traits: ["dead", "lightColor"],
        similar: [""],
        url: "collectionPages/fishingCollections/items/clayBall.html"
    },

    {
        name: "Lily Pad",
        category: "Fishing",
        subFolder: "items",
        searchTerms: [

        ],
        
        traits: ["living", "lightColor"],
        similar: [""],
        url: "collectionPages/fishingCollections/items/lilyPad.html"
    },

    {
        name: "Lotus",
        category: "Fishing",
        subFolder: "items",
        searchTerms: [

        ],
        
        traits: ["living", "lightColor"],
        similar: [""],
        url: "collectionPages/fishingCollections/items/lotus.html"
    },

    {
        name: "Prismarine Crystals",
        category: "Fishing",
        subFolder: "fish",
        searchTerms: [

        ],
        
        traits: ["dead", "lightColor", "prismarine"],
        similar: ["Prismarine Shards"],
        url: "collectionPages/fishingCollections/items/prismarineCrystals.html"
    },

    {
        name: "Prismarine Shards",
        category: "Fishing",
        subFolder: "items",
        searchTerms: [

        ],
        
        traits: ["dead", "lightColor", "prismarine"],
        similar: ["Prismarine Crystals"],
        url: "collectionPages/fishingCollections/items/prismarineShard.html"
    },

    {
        name: "Sponge",
        category: "Fishing",
        subFolder: "items",
        searchTerms: [

        ],
        
        traits: ["living", "lightColor"],
        similar: [""],
        url: "collectionPages/fishingCollections/items/sponge.html"
    },

    // Foraging Pages: logs pages 

    {
        name: "Acacia Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [

        ],
        
        traits: ["brightLog", "brightBiome"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/acacia.html"
    },
    
    {
        name: "Birch Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [

        ],
        
        traits: ["bright"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/birch.html"
    },

    {
        name: "Dark Oak Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [

        ],
        
        traits: ["dark"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/darkOak.html"
    },

    {
        name: "Fig Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [

        ],
        
        traits: ["light"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/fig.html"
    },

    {
        name: "Helix Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [

        ],
        
        traits: ["dark"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/helix.html"
    },

    {
        name: "Jungle Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [

        ],
        
        traits: ["light"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/jungle.html"
    },

    {
        name: "Mangrove Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [

        ],
        
        traits: ["dark"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/mangrove.html"
    },

    {
        name: "Oak Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [

        ],
        
        traits: ["", ""],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/oak.html"
    },

    {
        name: "Spruce Log",
        category: "Foraging",
        subFolder: "logs",
        searchTerms: [

        ],
        
        traits: ["dark"],
        similar: [""],
        url: "collectionPages/foragingCollections/logs/spruce.html"
    },

    // Foraging Plants

    {
        name: "Honeycomb",
        category: "Foraging",
        subFolder: "plants",
        searchTerms: [

        ],
        
        traits: ["bright", "nonePlant"],
        similar: [""],
        url: "collectionPages/foragingCollections/plants/honeycomb.html"
    },

    {
        name: "Lushlilac",
        category: "Foraging",
        subFolder: "plants",
        searchTerms: [

        ],
        
        traits: ["plant"],
        similar: [""],
        url: "collectionPages/foragingCollections/plants/lushlilac.html"
    },

    {
        name: "Ruby Veilshroom",
        category: "Foraging",
        subFolder: "plants",
        searchTerms: [

        ],
        
        traits: ["plant"],
        similar: [""],
        url: "collectionPages/foragingCollections/plants/rubyVeilshroom.html"
    },

    {
        name: "Sea Lumis",
        category: "Foraging",
        subFolder: "plants",
        searchTerms: [

        ],
        
        traits: ["plant"],
        similar: [""],
        url: "collectionPages/foragingCollections/plants/seaLumis.html"
    },

    {
        name: "Tender Wood",
        category: "Foraging",
        subFolder: "plants",
        searchTerms: [

        ],
        
        traits: ["plant"],
        similar: [""],
        url: "collectionPages/foragingCollections/plants/tenderWood.html"
    },

    {
        name: "Vinesap",
        category: "Foraging",
        subFolder: "plants",
        searchTerms: [

        ],
        
        traits: ["plant"],
        similar: [""],
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