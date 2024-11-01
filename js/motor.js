
let i = 1;
function ConsultarDados()
    {
        let socorro =  "";
        for (let i2 = 0; i2 < localStorage.length/3; i2++) {
            socorro += "Código: " + i2 + " | Nome:" + localStorage.getItem("Nome "+i2) + " | Curso: " + localStorage.getItem("Curso "+ i2) + " | Data Conclusão: "+ localStorage.getItem("Data "+ i2) + "<br>";
        }
        document.getElementById("resultado").innerHTML = socorro;
    }

function LimparCampo()
{
    document.getElementById("nm").value = "";
    document.getElementById("email").value = "";
    document.getElementById("data").value = "";
}

function AtualizarDados()
{

    localStorage.setItem("Nome " +  document.getElementById("cd").value, document.getElementById("nm").value);
    localStorage.setItem("Curso " + document.getElementById("cd").value, document.getElementById("curso").value);
    localStorage.setItem("Data " + document.getElementById("cd").value, document.getElementById("data").value);
    document.getElementById("cd").value = "";

    LimparCampo();
}

function LimparSatanas(){
    localStorage.clear();
}

function Pesquisa(){
    document.getElementById("nm").value = localStorage.getItem("Nome " +  document.getElementById("cd").value);
    document.getElementById("curso").value = localStorage.getItem("Curso " +  document.getElementById("cd").value);
    document.getElementById("data").value = localStorage.getItem("Data " +  document.getElementById("cd").value);
    document.getElementById("resultado").innerHTML = "Código: " + document.getElementById("cd").value + " | Nome: " + localStorage.getItem("Nome " + document.getElementById("cd").value) + " | Curso: " + localStorage.getItem("Curso " + document.getElementById("cd").value) + " | Data Conclusão: " + localStorage.getItem("Data " + document.getElementById("cd").value);
}

function InsertData()
    {
    i = localStorage.length/3;
    localStorage.setItem("Nome " + i , document.getElementById("nm").value);
    localStorage.setItem("Curso " + i , document.getElementById("curso").value);
    localStorage.setItem("Data " + i , document.getElementById("data").value);
    LimparCampo();
    }

function DeleteData()
{
    localStorage.removeItem("Nome " + document.getElementById("cd").value);
    localStorage.removeItem("Curso " + document.getElementById("cd").value);
    localStorage.removeItem("Data " + document.getElementById("cd").value);
    document.getElementById("cd").value = "";

}