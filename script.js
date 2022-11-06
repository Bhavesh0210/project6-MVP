var btn = document.getElementById("firstBTN");
var searchBox = document.getElementById("searchUsername");

searchBox.addEventListener("keypress", function (event) {


    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // alert("okay!");
        search();
        // Cancel the default action, if needed
        //   event.preventDefault();
        // Trigger the button element with a click
        //   document.getElementById("firstBTN").click();
    }
});


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


            const apiURL = '/data.json';

            try {
                const response = await fetch(apiURL);
                const data = await response.json();
                // console.log(ans);


                newProfile(data[ans]);



            } catch (error) {
                console.log(error);
            }

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