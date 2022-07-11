
function cria_lista_de_scripts(lista_de_scripts){
    let select_de_scripts = cria_select(lista_de_scripts)
    document.getElementById("seletor_de_scriots").append(select_de_scripts)

}


function main(){


    fetch('https://tab36fego6sve4n3sxdlugyjpm0xthez.lambda-url.us-east-1.on.aws/scripts')
    .then(resp=>resp.text())
    .then(resp=>cria_lista_de_scripts(JSON.parse(resp)))
}
main()