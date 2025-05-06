function visOppsummering() {
    let navn = document.getElementById("navn").value;
    let alder = document.getElementById("alder").value;
    let epost = document.getElementById("epost").value;
    let fodsel = document.getElementById("fodsel").value;
    let farge = document.getElementById("farge").value;
    let fornoyd = document.getElementById("fornoyd").value;
    let hobby = document.getElementById("hobby").value;
    let land = document.getElementById("land").value;
    let beskrivelse = document.getElementById("beskrivelse").value;
    let info = document.getElementById("info").innerHTML;
    
    document.getElementById("summary").innerHTML = 
    "<b>Navn: </b>" + navn + 
    "<br><b>Alder: </b>" + alder + 
    "<br><b>E-post: </b>" + epost + 
    "<br><b>Fødselsdato: </b>" + fodsel + 
    "<br><b>Favorittfarge: </b>" + farge + 
    "<br><b>Side-Rating: </b>" + fornoyd + 
    "<br><b>Hobby: </b>" + hobby + 
    "<br><b>Land: </b>" + land + 
    "<br><b>Litt om deg: </b>" + beskrivelse +
    "<br><br>"+info;
}