// objetivo manipular dados em array e JSON
// data 05/08/26
// autor ryan
// versao 1.0
//////////////////////////////////////////////

/*

    [] -> representa um objeto do tipo array
    {} -> representa um objeto do tipo JSON

    Array -> é um espaço na memoria para armazenar dados sem a necessidade de criar outros objetos
        EX:
            let nome = 'jose'
            let nome2 = 'Maria'
            let nome3 = 'Joao'

                indices     0
            let nomes = ['Jose', 'Maria', 'Joao']
            
    JSON -> é um espaço na memoria para armazenar dados com chave e valor
        Ex:
            let nome = 'Jose'
            let telefone = '123456789'
            let email = 'jose@gmail.com'
            
                        Chave   Valor     Chave         Valor   Chave     Valor
            let cliente = ('nome': 'Jose', 'telefone': '123456789', 'email': 'jose@gmail.com')            
     
*/

//criando objetos do tipo array
const listaDeAlunos = ['jose', 'maria', 'luiz', 'antonio', 'carlos']
const listaDeClientes = []
const listaDeFornecedores = []

const exibirDados = function(){
    //exibe objeto array com conteudo
    console.log(listaDeAlunos)

    //exibe o tipo de dados de um indice
    console.log(typeof(listaDeAlunos[2]))

    //exibe o objeto array em formato de tabela com indice e conteudo
    console.table(listaDeAlunos)

    console.log(listaDeAlunos[3])
    console.log(listaDeAlunos[0])

    console.log(`O nome do aluno é: ${listaDeAlunos[0]}`)
    console.log(`O nome do aluno é: ${listaDeAlunos[1]}`)
    console.log(`O nome do aluno é: ${listaDeAlunos[2]}`)
    console.log(`O nome do aluno é: ${listaDeAlunos[3]}`)
    console.log(`O nome do aluno é: ${listaDeAlunos[4]}`)

    //usando o while
    console.log('************************exemplo com while***********************************')
    let cont = 0
    while(cont<listaDeAlunos.length){
        console.log(`O nome do aluno é: ${listaDeAlunos[cont]}`)
        cont+=1
    }

    //usando o for
    console.log('********Exemplo com for*************')
    for(let contador = 0; contador < listaDeAlunos.length; contador++){
        console.log(`O nome do aluno é: ${listaDeAlunos[contador]}`)
    }

    //usando for each
    console.log('************Exemplo com for each*********************')
    listaDeAlunos.forEach(function(aluno){
        console.log(`O nome do aluno é: ${aluno}`)
    })

    //usando o for of
    console.log('********exemplo com for of******************')
    for (aluno of listaDeAlunos){
        console.log(`O nome do aluno é: ${aluno}`)
    }

     //usando o for in
     console.log('********exemplo com for in******************')
     for (item in listaDeAlunos){
        console.log(`O nome do aluno é: ${listaDeAlunos[item]}`)
    }
    
    //retorna a quantidade de itens em um array
    console.log(listaDeAlunos.length)
}

const manipularDados = function(){
    listaDeClientes[0] = 'jose da silva'
    listaDeClientes[1] = 'maria da silva'
    listaDeClientes[2] = 'luis da silva'
    listaDeClientes[3] = 'ana da silva'

    console.log(listaDeClientes)

    //permite adicionar novos elementos do array
    listaDeFornecedores.push('antonio')
    listaDeFornecedores.push('caio')
    listaDeFornecedores.push('luiz')
    listaDeFornecedores.push('hugo', 'maria', 'jose', 'andre')

    console.log(listaDeFornecedores)
}

// exibir dados
manipularDados()