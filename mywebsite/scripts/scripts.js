
function start() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        console.log("mobile version");
        changeformobile()
    } else {
        console.log("desktop")
        nameanimation()
        nameanimation2()
        function nameanimation() {
            setTimeout(function () { typerighter("") }, 50);
            setTimeout(function () { typerighter("L") }, 100);
            setTimeout(function () { typerighter("A") }, 200);
            setTimeout(function () { typerighter("U") }, 300);
            setTimeout(function () { typerighter("C") }, 400);
            setTimeout(function () { typerighter("H") }, 500);
            setTimeout(function () { typerighter("L") }, 600);
            setTimeout(function () { typerighter("Y") }, 700);
            setTimeout(function () { typerighter("N") }, 800);
            setTimeout(function () { typerighter(" ") }, 900);
            setTimeout(function () { typerighter("D") }, 1000);
            setTimeout(function () { typerighter("O") }, 1100);
            setTimeout(function () { typerighter("W") }, 1200);
            setTimeout(function () { typerighter("N") }, 1300);
            setTimeout(function () { typerighter("S") }, 1400);

        }


        function nameanimation2() {
            setTimeout(function () { typerighersecondary("") }, 1750);
            setTimeout(function () { typerighersecondary("W") }, 1800);
            setTimeout(function () { typerighersecondary("E") }, 1900);
            setTimeout(function () { typerighersecondary("B") }, 2000);
            setTimeout(function () { typerighersecondary(" ") }, 2100);
            setTimeout(function () { typerighersecondary("D") }, 2200);
            setTimeout(function () { typerighersecondary("E") }, 2300);
            setTimeout(function () { typerighersecondary("V") }, 2400);
            setTimeout(function () { typerighersecondary("E") }, 2500);
            setTimeout(function () { typerighersecondary("L") }, 2600);
            setTimeout(function () { typerighersecondary("O") }, 2700);
            setTimeout(function () { typerighersecondary("P") }, 2800);
            setTimeout(function () { typerighersecondary("E") }, 2900);
            setTimeout(function () { typerighersecondary("R") }, 3000);
            setTimeout(function () { typerighersecondary("<blink>|</blink>") }, 3100);
        }


        function typerighersecondary(letter2) {
            document.getElementById("secondaryheader").innerHTML = document.getElementById("secondaryheader").innerHTML + (letter2);
        }

        function typerighter(letter) {
            document.getElementById("mainheader").innerHTML = document.getElementById("mainheader").innerHTML + (letter);
        }
    }
}


function changeformobile() {
    console.log("hello");
    document.getElementById("mainheader").innerHTML = "LAUCHLYN DOWNS";
    document.getElementById("secondaryheader").innerHTML = "WEB DEVELOPER";
    document.getElementById("secondaryheader").innerHTML = "WEB DEVELOPER";
    document.getElementById("navbar-main").style.display = "none";
    document.getElementById("contact").style.height = "1450px";
    


}

function changeBorderHomePage() {

    document.getElementById("home").style.borderRight = "6px solid red";

    document.getElementById("home").addEventListener("mouseleave", function () { document.getElementById("home").style.borderRight = "0px solid red"; })
}
function changeBorderAboutPage() {

    document.getElementById("About").style.borderRight = "6px solid #5887FF";

    document.getElementById("About").addEventListener("mouseleave", function () { document.getElementById("About").style.borderRight = "0px solid red"; })
}

function changeBorderServicesPage() {

    document.getElementById("Services").style.borderRight = "6px solid gray";

    document.getElementById("Services").addEventListener("mouseleave", function () { document.getElementById("Services").style.borderRight = "0px solid red"; })
}

function changeBorderProjectsPage() {

    document.getElementById("Projects").style.borderRight = "6px solid #7AA095";

    document.getElementById("Projects").addEventListener("mouseleave", function () { document.getElementById("Projects").style.borderRight = "0px solid red"; })
}
function changeBorderskillsPage() {

    document.getElementById("Skills").style.borderRight = "6px solid #EEE82C";

    document.getElementById("Skills").addEventListener("mouseleave", function () { document.getElementById("Skills").style.borderRight = "0px solid red"; })
}

function changebordercontactpage() {

    document.getElementById("Contact").style.borderRight = "6px solid #FC5130";

    document.getElementById("Contact").addEventListener("mouseleave", function () { document.getElementById("Contact").style.borderRight = "0px solid red"; })
}



