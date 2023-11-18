
//mudar o tema
function darkButton() {
    const darkMode = document.getElementById('lightcss');//pegar a tag de link css

    darkMode.setAttribute('href', './styles/styledark.css');//substituir o link do css

    const buttonTheme = document.getElementById('themebtn')//pegar a tag do botão de tema
    buttonTheme.setAttribute('onclick', 'lightButton()')//substituir o valor do onclick
}

function lightButton() {
    const lightMode = document.getElementById('lightcss');//pegar a tag de link css

    lightMode.setAttribute('href', './styles/stylelight.css');//substituir o link do css

    const buttonTheme = document.getElementById('themebtn')//pegar a tag de link css
    buttonTheme.innerHTML = "Tema"
    buttonTheme.setAttribute('onclick', 'darkButton()')//substituir o valor do onclick
}

//redirecionamento
function calcular() {
    var nome = document.getElementById('nome_pessoa').value;
    var peso = Number(document.getElementById('peso_pessoa').value);
    var idade = Number(document.getElementById('idade_pessoa').value);
    var altura = Number(document.getElementById('altura_pessoa').value);

    const imc = peso / (altura * altura)

    imc = Number.value

    const resultado = document.getElementById('imc-resultado')

    resultado.innerHTML = imc

    const nomePessoa = document.getElementById('nomePessoa')
    nomePessoa.innerHTML = f`<h1>${nome}</h1>`


}