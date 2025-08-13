// jogo do amigo secreto!!

const amigos = [];
const inputAmigos = document.getElementById('input-amigos');
const botaoAdicionar = document.getElementById('botao-adicionar');

botaoAdicionar.addEventListener('click', () => {
  const nome = inputAmigos.value.trim();

  if (!nome) {
    inputAmigos.value = '';
    inputAmigos.placeholder = 'Você precisa digitar um nome';
    inputAmigos.style.borderColor = 'red';
    inputAmigos.style.color = 'red';
    return; // sai da função aqui pra não executar o resto
  }
  amigos.push(nome);
  inputAmigos.value = '';
  inputAmigos.placeholder = 'Nome do amigo';
  inputAmigos.style.borderColor = '';
  inputAmigos.style.color = '';
  atualizarLista(amigos);
}); 0

// Implementa uma função para atualizar a lista de amigos

function atualizarLista() {
    const listaAmigos = document.getElementById('lista-amigos');

    if (!listaAmigos) {
        console.error('Elemento lista-amigos não encontrado');
        return; 
    }

    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar 
    
    amigos.forEach((amigo) => {
            const li = document.createElement('li');
            li.className = 'flex items-center justify-between';
            li.innerHTML = `
                <span class="text-stone-700 text-lg font-medium">${amigo}</span>
                  <span class="text-stone-600 text-lg cursor-pointer transition-colors hover:text-red-500 hover:scale-110 duration-300 ease-in-out"><i onclick="removerAmigo(this)" class="fa-solid fa-xmark"></i></span>
            `;
            listaAmigos.appendChild(li);
        });
}

// Função para adicionar um amigo
function adicionarAmigo(nome) {
    amigos.push(nome);
    atualizarLista();
}

// Função para remover amigos da lista pelo ícone
function removerAmigo(element) {
    // Pega o nome do amigo (texto do elemento <span> anterior ao ícone)
    const amigo = element.parentElement.previousElementSibling.textContent;

    // Remove o amigo do array 'amigos'
    amigos.splice(amigos.indexOf(amigo), 1);

    // Atualiza a lista na tela
    atualizarLista();
};

//  funçaõ para sortear amigo secreto após clicar no button
function sortearAmigoSecreto() {
    if (amigos.length === 0) {
        alert('Adicione amigos antes de sortear!');
        return;
    }
    const indice = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[indice];
    const textoSecreto = document.getElementById('texto-secreto');
    textoSecreto.textContent = `Seu Amigo secreto é ${sorteado}!`;
    textoSecreto.style.color = 'blue';
    textoSecreto.classList.remove('hidden');

}


