
function cria_titulo(texto_da_pergunta){
    let titulo = document.createElement('h3')
    titulo.innerText = texto_da_pergunta
    return titulo
}


function cria_select(alternativas){
    let select = document.createElement('select')
    alternativas.forEach(element => {
        option = document.createElement('option')
        option.innerText = element
        select.append(option)  
    })
    return select
}


function cria_pergunta_boleana(nome,texto_da_pergunta,value){
    let titulo = cria_titulo(texto_da_pergunta)
    let alternativas = ['','sim','não']
    let select = cria_select(alternativas)

    if(value == undefined) {
        select.selectedIndex = 0
    }
    if(value == true){
        select.selectedIndex = 1
    }

    if(value == false){
        select.selectedIndex = 2
    }

    select.onchange = ()=>{
        let index_resposta = select.selectedIndex
        let resposta = alternativas[index_resposta]

        if(resposta == 'sim'){
            data[nome] = true
        }
        if(resposta == 'não'){
            data[nome] = false  
        }        
        main()

    }

    let div_da_pergunta = document.createElement('div')
    div_da_pergunta.append(titulo)
    div_da_pergunta.append(select)
    return div_da_pergunta
}


function renderiza_pergunta(pergunta){
    
    let tipo = pergunta.tipo 
    let nome = pergunta.nome
    let value = pergunta.value
    let texto_da_pergunta = pergunta.pergunta
    if(tipo == 'bool'){
        document.getElementById('perguntas').append(
            cria_pergunta_boleana(nome,texto_da_pergunta,value)
        )
    }
}