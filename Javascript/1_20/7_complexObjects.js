var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "formats": [
        "CD",
        "LP"
        ],
        "gold": true
    },
    {
        "artist": "Beaus Carnes",
        "title": "Cereal Man",
        "formats": [
        "Youtube video"
        ],
        "gold": true  
    }
];

var secondArtist = myMusic[1].formats[0];
console.log(secondArtist)


var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"]
console.log(gloveBoxContents)