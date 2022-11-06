var btn = document.getElementById("firstBTN");
var searchBox = document.getElementById("searchUsername");

searchBox.addEventListener("keypress", function (event) {


    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        search();

    }
});

const data = [
    {
        "results": [
            {
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "Gustav",
                    "last": "Poulsen"
                },
                "location": {
                    "street": {
                        "number": 9925,
                        "name": "Præstevej"
                    },
                    "city": "Roslev",
                    "state": "Syddanmark",
                    "country": "Denmark",
                    "postcode": 40490,
                    "coordinates": {
                        "latitude": "-44.5977",
                        "longitude": "-96.9622"
                    },
                    "timezone": {
                        "offset": "+1:00",
                        "description": "Brussels, Copenhagen, Madrid, Paris"
                    }
                },
                "email": "gustav.poulsen@example.com",
                "login": {
                    "uuid": "5d7faae5-5ccc-4b7f-8622-7adab4cb4726",
                    "username": "blackdog535",
                    "password": "graphics",
                    "salt": "vUUVRC8r",
                    "md5": "3150536c367907383b485b76244d0098",
                    "sha1": "502a1fe5a66733119f0e14d3814735a057bdd6f1",
                    "sha256": "4481f48297b2096485e608520202516c8079b700f70e2e9baba9fa5fc0ab5971"
                },
                "dob": {
                    "date": "1981-03-26T10:46:22.195Z",
                    "age": 41
                },
                "registered": {
                    "date": "2019-03-30T21:08:58.759Z",
                    "age": 3
                },
                "phone": "72872414",
                "cell": "19105416",
                "id": {
                    "name": "CPR",
                    "value": "260381-3946"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/64.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/64.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/64.jpg"
                },
                "nat": "DK"
            }
        ],
        "info": {
            "seed": "209a01a08c4a66c4",
            "results": 1,
            "page": 1,
            "version": "1.4"
        }
    },
    {
        "results": [
            {
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "Marshall",
                    "last": "Romero"
                },
                "location": {
                    "street": {
                        "number": 1674,
                        "name": "Northaven Rd"
                    },
                    "city": "Bunbury",
                    "state": "Australian Capital Territory",
                    "country": "Australia",
                    "postcode": 9559,
                    "coordinates": {
                        "latitude": "-81.5335",
                        "longitude": "-178.2517"
                    },
                    "timezone": {
                        "offset": "-11:00",
                        "description": "Midway Island, Samoa"
                    }
                },
                "email": "marshall.romero@example.com",
                "login": {
                    "uuid": "ac028316-114b-4dd6-b788-0dd871075aea",
                    "username": "orangeleopard107",
                    "password": "insane",
                    "salt": "dhsS2YA0",
                    "md5": "8ed9a470385b951b156a48dadcaa1259",
                    "sha1": "bca0c5db0bd34d77969cee031885706265ad035d",
                    "sha256": "7c7b287275ea501a634d7ad61103631da8dd8075ddca1ca09eb9d274b0695225"
                },
                "dob": {
                    "date": "1993-10-11T15:21:49.347Z",
                    "age": 29
                },
                "registered": {
                    "date": "2019-07-02T12:29:27.434Z",
                    "age": 3
                },
                "phone": "04-0043-6963",
                "cell": "0452-880-128",
                "id": {
                    "name": "TFN",
                    "value": "737540196"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/51.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
                },
                "nat": "AU"
            }
        ],
        "info": {
            "seed": "d69d22e5d315318c",
            "results": 1,
            "page": 1,
            "version": "1.4"
        }
    },
    {
        "results": [
            {
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "Varg",
                    "last": "Pettersen"
                },
                "location": {
                    "street": {
                        "number": 1152,
                        "name": "Grorudveien"
                    },
                    "city": "Holmsbu",
                    "state": "Hordaland",
                    "country": "Norway",
                    "postcode": "8851",
                    "coordinates": {
                        "latitude": "38.6512",
                        "longitude": "-175.2349"
                    },
                    "timezone": {
                        "offset": "+9:00",
                        "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                    }
                },
                "email": "varg.pettersen@example.com",
                "login": {
                    "uuid": "eae14466-afc7-472e-83d7-9b746f99134e",
                    "username": "smallkoala661",
                    "password": "children",
                    "salt": "O7XCBl4t",
                    "md5": "66fc52a712755c6437e35c22fec0c27d",
                    "sha1": "c5ce6f1f2ca89017c5f8521fa945f7e8349f848e",
                    "sha256": "9f7452fe5da979c8833257f28768168eb1cbf0975025362d15b5f0bd6be11917"
                },
                "dob": {
                    "date": "1984-05-07T16:33:30.223Z",
                    "age": 38
                },
                "registered": {
                    "date": "2011-09-03T04:07:04.978Z",
                    "age": 11
                },
                "phone": "59551239",
                "cell": "45049261",
                "id": {
                    "name": "FN",
                    "value": "07058421337"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/29.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/29.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/29.jpg"
                },
                "nat": "NO"
            }
        ],
        "info": {
            "seed": "93dd20b0a55f2cf7",
            "results": 1,
            "page": 1,
            "version": "1.4"
        }
    },
    {
        "results": [
            {
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "Nelly",
                    "last": "Soto"
                },
                "location": {
                    "street": {
                        "number": 6030,
                        "name": "Viaducto Turkmenistán"
                    },
                    "city": "Santa María del Río",
                    "state": "Michoacan",
                    "country": "Mexico",
                    "postcode": 76333,
                    "coordinates": {
                        "latitude": "29.0537",
                        "longitude": "-57.0291"
                    },
                    "timezone": {
                        "offset": "+5:00",
                        "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
                    }
                },
                "email": "nelly.soto@example.com",
                "login": {
                    "uuid": "bda9fc7b-0f37-47bf-a51c-f109aec36135",
                    "username": "beautifulrabbit945",
                    "password": "france",
                    "salt": "d0mEDS7A",
                    "md5": "eda9680ee21f3d7936b4b3f6e4036ad2",
                    "sha1": "013ad0e9812d428d04dddb4c50f45d724792ceb7",
                    "sha256": "1d23d01dd4bc97a7fa06b54d97a8b7275eee04caacf4b4ff32c22aa6f4fb8756"
                },
                "dob": {
                    "date": "1950-12-19T20:55:06.068Z",
                    "age": 71
                },
                "registered": {
                    "date": "2003-04-19T01:38:23.379Z",
                    "age": 19
                },
                "phone": "(669) 714 1132",
                "cell": "(660) 105 5325",
                "id": {
                    "name": "NSS",
                    "value": "47 25 79 2422 0"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/58.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
                },
                "nat": "MX"
            }
        ],
        "info": {
            "seed": "a81937112616cdff",
            "results": 1,
            "page": 1,
            "version": "1.4"
        }
    }
]

function search() {

    let ans1 = document.getElementById('searchUsername').value;
    ans1 = ans1.replace('User', '');
    ans1 = ans1.replace('user', '');

    if (!isValid(ans1)) {
        alert("Invalid Username");
    } else if (ans1.length === 0) {
        alert("Please enter something!")
    } else {

        console.log(document.getElementById('searchUsername').value);


        if (document.getElementById("second").style.display === "none") { document.getElementById("second").style.display = "block"; } else { document.getElementById("second").style.display = "none"; }
        if (document.getElementById("first").style.display === "none") { document.getElementById("first").style.display = "block"; } else { document.getElementById("first").style.display = "none"; }

        var pathName = document.getElementById("pathName");
        var profileImg = document.getElementById("image");
        var username = document.getElementById("userName");
        var address = document.getElementById("address");
        var RName = document.getElementById("RName");
        var Remail = document.getElementById("Remail");
        var Rphone = document.getElementById("Rphone");
        var Rmobile = document.getElementById("Rmobile");
        var Raddress = document.getElementById("Raddress");
        var websiteID = document.getElementById("websiteID");
        var githubID = document.getElementById("githubID");
        var twitterID = document.getElementById("twitterID");
        var instagramID = document.getElementById("instagramID");
        var facebookID = document.getElementById("facebookID");

        let ans = document.getElementById('searchUsername').value;
        ans = ans.replace('User', '');
        ans = ans.replace('user', '');


        getProfile();

        // Get Profiles from API
        async function getProfile() {
            newProfile(data[ans]);
        }

        function newProfile(data) {

            pathName.innerHTML = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
            profileImg.setAttribute(`src`, data.results[0].picture.large);
            username.innerHTML = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
            address.innerHTML = data.results[0].location.city + ", " + data.results[0].location.state + ", " + data.results[0].location.country;

            RName.innerHTML = data.results[0].name.first + " " + data.results[0].name.last;
            Remail.innerHTML = data.results[0].email;
            Rphone.innerHTML = data.results[0].phone;
            Rmobile.innerHTML = data.results[0].cell;
            Raddress.innerHTML = data.results[0].location.street.number + ", " + data.results[0].location.street.name + ", " + data.results[0].location.city + ", " + data.results[0].location.state + ", " + data.results[0].location.country;


            // socials link (position: left of page - below image)
            websiteID.innerHTML = "www." + data.results[0].name.first.toLowerCase() + data.results[0].name.last.toLowerCase() + ".com";
            githubID.innerHTML = data.results[0].name.first.toLowerCase() + data.results[0].name.last.toLowerCase();
            instagramID.innerHTML = "@" + data.results[0].name.first.toLowerCase() + data.results[0].name.last.toLowerCase();
            twitterID.innerHTML = data.results[0].name.first.toLowerCase() + data.results[0].name.last.toLowerCase();
            facebookID.innerHTML = data.results[0].name.first.toLowerCase() + data.results[0].name.last.toLowerCase();


        }







    }


}

function isValid(num) {
    return num >= 0 && num < 4;
}

function giveAlert() {
    alert("Feature Coming Soon!");
}
