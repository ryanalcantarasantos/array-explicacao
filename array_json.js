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
const listaDeAlunos = ['jose','maria', 'luiz', 'antonio', 'carlos']
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

    console.table(listaDeFornecedores)

    //permite adicionar novos elementos como array sempre no inicio, apos adicionar o elemento ele reorganiza os outros itens
    listaDeFornecedores.unshift('Luciano')

    console.table(listaDeFornecedores)

    //permite adicionar um elemento em uma determinada posição do array
                    // splice(indice, qntdDeElementos, ' novo conteudo ')
    listaDeFornecedores.splice(3,0,'Bernardo silva do manchester city')

    console.table(listaDeFornecedores)

    //permite remover um determinado conteudo com base no indice do elemento array
                    // splice(indice, qntdDeElementos a ser removido)
    listaDeFornecedores.splice(6,1)

    console.table(listaDeFornecedores)

    //permite remover o ultimo elemento do array
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //permite remover o primeiro elemento do array, após ele remover ele vai reorganizar todos os itens
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    

}

const removerItem = function(nomeAluno){

    //indexof() -> retorna o indice referente ao conteudo que esta sendo pesquisado
    listaDeAlunos.splice(listaDeAlunos.indexOf(nomeAluno),1)

    /*for(cont in listaDeAlunos){
        if(nomeAluno == listaDeAlunos[cont]){
            listaDeAlunos.splice(cont,1)
        }
    }
}
*/

/*function removerItem(nomeAluno){
    let cont = 0
    let qtd = listaDeAlunos

    while(cont < qtd){
        if(nomeAluno == listaDeAlunos[cont]){
            listaDeAlunos.splice(cont, 1)
        }
        cont++

    }
*/

}

const verificarItem = function(nomeAluno){
    //verifica se o conteudo existe dentro do array e retorna true false
    return listaDeAlunos.includes(nomeAluno)
}

const manipularDadosJSON = function(){
    //criando um objeto json
        //a estrutura do json é chave (atributo) : valor (conteudo)
    let aluno = {'id' : 1, 'nome':'jose da silva', 'ra': 123456, 'email': 'jose@gmail.com'}

    //exibe o objeto json
    console.log(aluno)
    console.table(aluno)

    //exibe o conteudo de um atributo
    console.log(aluno.nome)
    console.log(aluno.email)

    //adiciona um novo atributo ao json ja existente
    aluno.telefone = '011-9754321'
    aluno.data_nascimento = '18/10/2007'

    console.log(aluno)

    //remove um atributo do json
    delete aluno.email

    console.log(aluno)

    aluno.ra = 123456789
    console.log(aluno)

    //caso queira deixar o elemento do json vazio para adicionar inserções depois
    aluno.nota = null
    console.log(aluno)
}

const cadastroDeProdutos = function(){
    let cores =[
     
                    {'id':1, 'cor': 'branco', 'hexa': '#ffffff'}, //0
                    {'id':2, 'cor':'preto', 'hexa': '#000000'}, //1
                    {'id':3, 'cor': 'azul', 'hexa': '#0000ff'}, //2
                    {'id':4, 'cor': 'amarelo', 'hexa': '#ffff00'}, //3
                    {'id':5, 'cor': 'rosa', 'hexa': '#ffb50c'} //4
                
                    
                
                ]

    let marcas = [

                    {'id':1, 'marca': 'multilaser', 'telefone': '1199999999', 'email': 'multilaser@gmail.com'}, //0
                    {'id':2, 'marca': 'azus', 'telefone': '11888888888', 'email': 'azus@gmail.com'}, //1
                    {'id':3, 'marca': 'amd', 'telefone': '1177777777', 'email': 'amd@gmail.com'}, //2
                    {'id':4, 'marca': 'nvidea', 'telefone': '116666666', 'email': 'nvidea@gmail.com'}, //3
                    {'id':5, 'marca': 'logitech', 'telefone': '1155555555', 'email': 'logitech@gmail.com'} //4





                ]
                
    let produtos = [
        {   'id': 1,
            'nome': 'monitor',
            'descricao': 'monitor 27 polegadas',
            'valor': 1500,
            'qtde': 20,
            'cor': [
                cores[0],
                cores[1]
            ],
            'marca': [
                marcas[0].marca
            ]

        },
        {
            'id': 2,
            'nome': 'teclado',
            'descrição': 'teclado mecanico rgb',
            'valor': 250,
            'qtde': 500,
            'cor': cores,
            'marca': [
                marcas[0].marca,
                marcas[4].marca
            ]
        },
        {
            'id': 3,
            'nome': 'mouse',
            'descrição': 'mouse sem fio',
            'valor': 80,
            'qtde': 160,
            'cor': [
                cores[1],
                cores[3],
                cores[4]
            ],
            'marca': [
                marcas[0].marca,
                marcas[4].marca
            ]
        }
    ]

    
    
    //console.log(produtos)
    //console.table(produtos)
    //console.log(produtos[0].cor)

    //exibindo todas as cores referentes ao produto monitor
    //produtos[0].cor.forEach(function(itemCor){
      //  console.log(itemCor.cor)
    //})

    //console.log(produtos)

    produtos.forEach(function(itemProduto){
        console.log(`produto: ${itemProduto.nome}`)

        itemProduto.cor.forEach(function(itemCor){
            console.log(`cor: ${itemCor.cor}`)

            itemProduto.marca.forEach(function(itemMarca){
                console.log(`marca: ${itemMarca}`)

            })
        })
    })
    
    
    
    
    //cores.forEach(function(itemCor){
        //console.log(itemCor.cor)
    //})

}

cadastroDeProdutos()


//manipularDadosJSON()
//console.log(verificarItem('antonio'))

//console.table(listaDeAlunos)
//removerItem('Carlos')
//console.table(listaDeAlunos)



// exibir dados
//manipularDados()