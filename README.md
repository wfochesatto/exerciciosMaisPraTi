
PASSO A PASSO PARA EXECUTAR O CÓDIGO JAVASCRIPT NO VS CODE COM NODE.JS
=======================================================================

PRÉ-REQUISITOS

1. VS Code instalado
   Baixe em: https://code.visualstudio.com/

2. Node.js instalado
   Baixe em: https://nodejs.org/
   Após instalar, confirme no terminal:
   node -v
   npm -v

3. Extensão "Code Runner" (opcional, facilita a execução)


PASSO A PASSO

1. Abra o VS Code

2. Crie uma pasta para o projeto
   - Vá em Arquivo > Abrir Pasta...
   - Crie uma nova pasta (ex: exercicios-js) e abra-a.

3. Crie o arquivo de código
   - Clique no ícone de "Novo Arquivo" na lateral esquerda.
   - Nomeie como: exercicios.js

4. Cole o código no arquivo
   - Copie o código completo e cole dentro do arquivo exercicios.js

5. Instale o pacote prompt-sync
   O código usa prompt-sync para entrada de dados. No terminal, execute:

   npm init -y
   npm install prompt-sync

6. Execute o código

Método 1 - Via Terminal:
   node exercicios.js

Método 2 - Com Code Runner (opcional):
   - Instale a extensão Code Runner
   - Clique no botão ▶️ "Run" no canto superior direito do editor

DICA:
Como o código contém vários exercícios COMENTADOS, descomente um por vez (removendo /* */ ou //), execute, e depois comente de novo para testar o próximo.

Exemplo de descomentário (exercício 1):

const prompt = require('prompt-sync')()

let num = Number(prompt('Escreva um numero para verificar se ele e par ou impar: '))
let calculo = num % 2

if (calculo == 0){
    console.log('Par')
} else {
    console.log('Impar')
}
