document.addEventListener("DOMContentLoaded", function () {
    const projetos = [
        {
            nome: 'Portfólio',
            img: '',
            desc: 'Aqui apresentará meus mais recentes projetos, listados na barra lateral a esquerda.',
            cliente: '',
            tituloCli: ''
        },
        {
            nome: 'Site IANB',
            img: 'imagem1.jpeg',
            desc: 'Este site terá as informções de todas as consagrações de nossa igreja do Brasil, como: endereços, pastor responsável,\n ' +
                'número do pastor responsáve, eventos, etc.',
                tituloCli: 'Clientes',
            cliente: 'Igreja IANB'
        }

    ]
    //buscar os elementos que você quer editar
    const listaProjetos = document.getElementById("listaProj");

    var nome = document.getElementById('tituloProjeto')
    var img = document.getElementById('imagemProjeto')
    var desc = document.getElementById('desc')
    var tituloCli = document.getElementById('tituloclientes')
    var txtclientes = document.getElementById('txtclientes')


    projetos.forEach((projeto) => {
        //cria um novo li createElement("li")
        const li = document.createElement("li")

        //cria um novo botão createElement("button")
        const button = document.createElement("button")

        //adicionar o titulo do projeto ao botão .textContent
        button.textContent = (projeto.nome)


        //Style dos botões


        button.addEventListener("click", function () {


            //adiciona titulo do projeto ao conteudo do section .textContent
            nome.textContent = (projeto.nome)

            //adiciona descrição do projeto ao conteudo section .textContent
            desc.textContent = (projeto.desc)

            //adiciona o atributo src com o link da imagem a tag img .setAttribute
            img.setAttribute('src', projeto.img)

            //adiciona os textos com os clientes no paragrafo p .textContent
            tituloCli.textContent = (projeto.tituloCli)

            txtclientes.textContent = (projeto.cliente)


            conteudoExibido.style.display = "block"; // Exibe a section
        });

        li.appendChild(button);
        listaProjetos.appendChild(li);
    });
    var project = document.getElementById('projetos')

});



