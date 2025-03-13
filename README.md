Amigo Secreto

📌 Links do Projeto

Repositório GitHub: [Amigo Secreto](https://github.com/ClaudiaVale77/amigo-secreto)

Deploy: [Clique aqui para acessar](https://amigo-secreto-zeta-beige.vercel.app/)

📖 Descrição do Projeto

Aplicativo simples e interativo para sorteio de amigo secreto. O usuário pode adicionar nomes a uma lista e realizar um sorteio aleatório para determinar quem será o amigo secreto.

✨ Funcionalidades

Adicionar nomes: O usuário digita um nome e o adiciona à lista ao clicar no botão "Adicionar".

Validação de entrada: O sistema impede entradas vazias e nomes duplicados.

Exibição da lista: Os nomes adicionados aparecem em uma lista abaixo do campo de entrada.

Sorteio aleatório: Ao clicar em "Sortear Amigo", um nome será escolhido e exibido na tela.

Reset automático: Após o sorteio, a aplicação exibe uma mensagem e reinicia automaticamente após 100ms.

🛠 Tecnologias Utilizadas

HTML5, CSS3 e JavaScript para a interface e lógica do jogo.

Função trim() para limpar espaços extras antes e depois dos nomes inseridos.

setTimeout() para garantir que o nome sorteado seja exibido antes da limpeza da tela.

🧐 Por que utilizar setTimeout()?

O alert() pausa a execução do código, mas antes disso, o navegador pode otimizar a renderização e apagar a tela prematuramente. O setTimeout(() => {...}, 100); coloca a limpeza na fila de execução, garantindo que o navegador:

- Exiba o nome sorteado.

- Mostre o alerta.

- Limpe os dados da tela corretamente.

- Isso evita que o nome desapareça antes do alert() ser exibido, garantindo uma melhor experiência para o usuário.

👩‍💻 Autora

Projeto desenvolvido por Claudia do Vale.