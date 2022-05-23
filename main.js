//neste botão o usuário descobrirá o ano em que ela nasceu
function nas(params) {
    var x
    var r 

    x = document.getElementById("x").value; 
    

    r = 2022 - x

    document.getElementById('resp').innerHTML = r;
}
//neste botão o usuário descobrirá quantos minutos de vida ele tem
function min(params) {
    var x 
    var r 

    x = document.getElementById("x").value

    r = 3600 * x

    document.getElementById('resp').innerHTML = r;
}
//neste botão o usuário descobrirá quantos segundos de vida ele tem
function seg(params) {
    var x 
    var y 
    
    x = document.getElementById("x").value;

    r = 60 * x

    document.getElementById('resp').innerHTML = r;
}
//nesse botão o usuario descobrirá quantos meses de vida ela tem 
function mes(params) {
    var x 
    var r 

    x = document.getElementById("x").value

    r = 12 * x 

    document.getElementById('resp').innerHTML = r; 
}
//Aqui o usário irá descobrir quantos anos ela terá daqui a alguns anos 
function fut(params) {
    var y
    var r

    y = document.getElementById("y").value

    r = y - 2022
    document.getElementById('resp').innerHTML = r;
}