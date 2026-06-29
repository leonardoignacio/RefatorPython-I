window.DATA_QUIZ = {
    id: 'quiz',
    title: '4. Revisão de Conhecimentos',
    icon: 'fa-solid fa-list-check',
    guidingQuestions: [
        {
            q: '1. Qual a diferença fundamental de comportamento entre os laços While e For?',
            a: 'O laço While (enquanto) é orientado a condições e eventos, ideal quando não sabemos exatamente quantas vezes o ciclo vai rodar (ex: rodar a esteira até o usuário mandar parar). O laço For (para cada) é orientado a sequências e coleções, projetado para percorrer um número finito e conhecido de elementos (ex: iterar uma lista de 50 CPFs).'
        },
        {
            q: '2. Por que o comando break é considerado uma medida de segurança em laços infinitos?',
            a: 'Ao estruturarmos um ciclo sob a premissa \'while True\', criamos um fluxo sem ponto natural de encerramento. O break é a válvula de escape lógica; sem ele condicionado a um teste de parada (ex: digitar SAIR), o programa aprisiona o processador num loop infinito congelando a aplicação.'
        },
        {
            q: '3. Qual o papel do PIP na arquitetura de ecossistemas Python modernos?',
            a: 'O PIP (Pip Installs Packages) é o orquestrador de resolução de dependências. Ele abstrai a complexidade de localizar repositórios na internet, baixando bibliotecas de terceiros do PyPI e empacotando os artefatos diretamente no diretório Lib/site-packages da máquina local.'
        },
        {
            q: '4. Por que arquivos CSV e JSON convivem no mesmo ecossistema corporativo?',
            a: 'Porque resolvem dores distintas. O CSV é um formato plano bidimensional focado em eficiência tabular, perfeito para planilhas e auditorias contábeis rápidas. O JSON é uma estrutura de objetos hierárquica e semântica, padrão ouro para APIs, bancos NoSQL e persistência Web.'
        },
        {
            q: '5. Como o Streamlit subverte o desenvolvimento Web tradicional para cientistas de dados?',
            a: 'Ele elimina a barreira da trindade HTML/CSS/JS. Ao recriar a árvore do DOM dinamicamente no navegador a cada interação do usuário com o script Python, ele permite que engenheiros construam interfaces reativas de dados focando 100% na lógica de backend.'
        }
    ],
    questions: [
        {
            q: "1. Qual palavra-chave do Python utilizamos para interromper e encerrar imediatamente um laço de repetição?",
            opts: ["stop", "exit()", "break", "continue"],
            correct: 2,
            exp: "O comando break aborta o ciclo atual de repetição de forma soberana, transferindo o ponteiro de execução para a primeira linha fora do escopo do laço."
        },
        {
            q: "2. Em um laço 'while', o que ocorre se acionarmos a instrução 'continue' após validar um erro?",
            opts: ["O programa encerra devolvendo erro fatal.", "Ele ignora as linhas abaixo dele e salta imediatamente de volta ao topo do laço para a próxima repetição.", "Ele pausa a execução por 5 segundos.", "Ele apaga a última variável salva na memória."],
            correct: 1,
            exp: "Diferente do break que finaliza o ciclo, o continue apenas 'pula' o restante do bloco daquela iteração específica, recomeçando a verificação no topo do laço."
        },
        {
            q: "3. Qual a finalidade técnica de digitarmos 'pip install pandas' no terminal?",
            opts: ["Atualizar o Windows 11.", "Conectar o Python a um servidor FTP.", "Baixar e instalar o pacote externo 'pandas' do repositório oficial na nuvem para o ambiente local.", "Converter arquivos CSV em arquivos Excel."],
            correct: 2,
            exp: "O comando aciona o gerenciador PIP para buscar no PyPI o artefato 'pandas', instalando suas bibliotecas e vinculando-as ao interpretador da sua máquina."
        },
        {
            q: "4. Na estrutura do formato JSON, como os dados são organizados sintaticamente?",
            opts: ["Em colunas estritas separadas por ponto e vírgula.", "Através de pares compostos por Chave e Valor (ex: {\"nome\": \"Ana\"}).", "Em blocos de memória binária criptografada.", "Em tags semânticas de hipertexto (<data>)."],
            correct: 1,
            exp: "O JSON herda a notação de objetos literais do JavaScript, estruturando informações legíveis por máquinas e humanos através de mapeamentos de chaves e valores."
        },
        {
            q: "5. Por qual razão técnica não conseguimos hospedar um app feito em Streamlit no GitHub Pages?",
            opts: ["O GitHub cobra licença comercial para scripts financeiros.", "O Streamlit gera arquivos maiores que o limite de 100MB do Git.", "O GitHub Pages só serve arquivos estáticos (HTML/CSS), enquanto o Streamlit exige um interpretador Python rodando dinamicamente.", "A cor de fundo do Streamlit é incompatível com navegadores web."],
            correct: 2,
            exp: "Servidores estáticos apenas entregam arquivos prontos. Aplicações reativas Python necessitam de processamento contínuo em tempo real no backend."
        },
        {
            q: "6. Em um script, qual comando utilizamos para carregar uma biblioteca nativa que já vem no Python?",
            opts: ["pip download os", "import os", "include <os>", "require os.py"],
            correct: 1,
            exp: "A palavra reservada import instrui o interpretador a carregar os módulos da biblioteca padrão (como os, sys, csv, math ou json) na memória do script."
        },
        {
            q: "7. O que representa a sigla CSV no universo da persistência de dados?",
            opts: ["Computer System Verification", "Comma-Separated Values (Valores Separados por Vírgula)", "Code Structure Validator", "Cloud Storage Virtual"],
            correct: 1,
            exp: "Valores Separados por Vírgula formam a base universal de arquivos planos tabulares, onde cada vírgula delimita a separação física de uma coluna."
        },
        {
            q: "8. No código Web com Streamlit, para que serviu o comando 'st.session_state'?",
            opts: ["Mudar a cor do botão principal.", "Manter variáveis e listas salvas na memória do navegador entre os cliques e interações do usuário.", "Verificar se o usuário digitou a senha do administrador.", "Desativar o antivírus do Windows."],
            correct: 1,
            exp: "Como frameworks reativos reexecutam o script a cada clique, o session_state atua como um cofre persistente de estado duratório durante a sessão de uso daquela aba."
        },
        {
            q: "9. Analisando o acumulador: total_folha += salario_final. Essa sintaxe é um atalho exato para qual operação?",
            opts: ["total_folha = salario_final", "total_folha = total_folha + salario_final", "total_folha + 1", "salario_final = total_folha * 2"],
            correct: 1,
            exp: "O operador de atribuição aditiva (+=) soma o valor à direita diretamente ao valor corrente já guardado na variável à esquerda, atualizando seu montante."
        },
        {
            q: "10. Qual é a principal característica que diferencia uma Biblioteca Nativa de uma Biblioteca Externa?",
            opts: ["Nativas são pagas e externas são gratuitas.", "Externas só funcionam no Linux.", "Nativas já vêm embutidas na instalação padrão do interpretador Python; externas precisam ser baixadas via PIP.", "Nativas não permitem criar funções 'def'."],
            correct: 2,
            exp: "A biblioteca padrão (*Standard Library*) acompanha o CPython na instalação básica. Pacotes externos residem no ecossistema comunitário PyPI."
        }
    ]
};