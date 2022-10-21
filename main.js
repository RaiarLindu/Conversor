let button = document.querySelector("#btn");

button.addEventListener("click", function () {
    let cgraus = document.getElementById("cgraus").value

    let Ntemp=document.getElementById("Ntemp").value
    Ntemp = parseInt(Ntemp)

    
    let Tr
    let Tc
    let Tk
    let Tf



    if (cgraus === "C") {

        Tc = Ntemp;
        Tf = (Tc * 1.8) + 32
        Tk = Tc + 273.15
        Tr = Tk * 1.8
    } 
    if(cgraus === "K") {

        Tk = Ntemp;
        Tc = Tk - 273.15
        Tf = (Tc * 1.8) + 32
        Tr = Tk * 1.8
    }
    if(cgraus === "R"){

        Tr = Ntemp;
        Tk = Tr / 1.8
        Tc = Tk - 273.15
        Tf = (Tc * 1.8) + 32
    }
    if(cgraus === "F") {
        Tf = Ntemp;
        Tc = (Tf - 32) / 1.8;
        Tk = Tc + 273.15;
        Tr = Tk * 1.8;
    }

   
    document.getElementById('celsius').innerText=Tc;

    document.getElementById('fahrenheit').innerText=Tf;

    document.getElementById('kelvin').innerText=Tk;

    document.getElementById('rankine').innerText=Tr;
})
