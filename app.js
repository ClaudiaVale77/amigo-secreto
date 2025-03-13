let listaAmigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    // Obtém o campo de entrada (input)
    let inputNome = document.querySelector("input"); 

    // Remove espaços em branco no início e fim
    let nome = inputNome.value.trim(); 

    if (nome === "") {
        // Valida se o nome não está vazio
        alert("Por favor, insira um nome válido."); 
        return;
    }

    if (listaAmigos.includes(nome)) {
        // Impede a adição de nomes repetidos
        alert("Este nome já foi adicionado. Escolha um nome diferente."); 
        return;
    }
    
    // Adiciona o nome à Array
    listaAmigos.push(nome); 

    //adiciona um novo nome à lista visível na tela quando um usuário insere um nome e clica no botão "Adicionar".

    // Inicializa a variável lista da tela com base na Array listaAmigos
    let listaElement = document.querySelector("#listaAmigos"); 
    
    // Cria um novo elemento de lista
    let novoItem = document.createElement("li"); 
    
    // Define o nome no item da lista
    novoItem.textContent = nome; 

    // Adiciona o item à lista na tela
    listaElement.appendChild(novoItem);
    
    // Limpa o campo de entrada após adicionar
    inputNome.value = ""; 
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear."); // Verifica se há nomes na lista
        return;
    }
    //Math.random() → Gera um número decimal aleatório entre 0 e 1.
    //Math.floor arredonda para baixo, ou seja, para o inteiro mais próximo.
    //Poderíamos arredondar para cima (Math.ceil) porém utilizei Math.floor p/ não gerar número fora dos índices da array.
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length); 

    // Obtém o nome sorteado
    let amigoSorteado = listaAmigos[indiceSorteado]; 
    
    // Obtém a referência do elemento de resultado
    let resultadoElement = document.querySelector("#resultado"); 

    // Exibe o resultado na tela
    resultadoElement.innerHTML = `<li>O amigo sorteado foi: <strong>${amigoSorteado}</strong></li>`; 

    setTimeout(() => {
        // Exibe um alerta de reinício
        alert("O sorteio será reiniciado."); 

        // Reseta a lista de amigos
        listaAmigos = []; 

        // Limpa a lista exibida na tela
        document.querySelector("#listaAmigos").innerHTML = ""; 

        // Limpa o resultado do sorteio
        resultadoElement.innerHTML = ""; 
    }, 100);
}
