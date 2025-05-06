function skrivutnavn() {
    let fnavn = document.getElementById("fornavn").value;
    let enavn = document.getElementById("etternavn").value;

    document.getElementById("utskrift").innerHTML = fnavn + " " + enavn;
}
