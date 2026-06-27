/**
 * DADOS: REVISÃO DE CONHECIMENTOS (Norteadores + Quiz)
 * Responsáveis: Dri (Perguntas Norteadoras) e Gui (Estrutura de Objeto)
 */

window.DATA_QUIZ = {
    id: 'quiz',
    title: '4. Revisão de Conhecimentos',
    icon: 'fa-solid fa-list-check',
    guidingQuestions: [
        {
            q: '1. Por que a conversão explícita (Casting) é obrigatória ao capturar valores numéricos?',
            a: 'Porque a função nativa input() captura qualquer digitação do teclado estritamente como texto puro (str). Tratar o número "150.00" como texto impede operações aritméticas. O Casting para float aloca o dado como ponto flutuante, garantindo a precisão decimal exigida por cálculos corporativos.'
        },
        {
            q: '2. Como a estrutura if / elif / else atua como um "Compliance Officer" no código?',
            a: 'Ela materializa as regras de negócio da empresa em rotas de execução excludentes. Ao avaliar as premissas de cima para baixo, o sistema garante que a despesa seja processada na primeira regra satisfeita e encerra o bloco, impedindo ambiguidades ou aprovações duplicadas.'
        },
        {
            q: '3. Qual é o custo operacional de negligenciar o bloco try / except?',
            a: 'O custo é a paralisação súbita do sistema. Sem essa barreira defensiva, um simples erro de digitação do usuário (como inserir a letra "O" no lugar do número zero) provoca um crash fatal. O Try isola o risco e o Except converte a falha em um aviso amigável na tela.'
        },
        {
            q: '4. De que forma o princípio DRY (Don\'t Repeat Yourself) otimizou a evolução do script?',
            a: 'Código duplicado é código frágil. No "Caminho Feliz", escrevemos vários comandos de impressão idênticos. Se a diretoria decidisse alterar o texto do parecer, teríamos que modificar várias linhas. Centralizar o resultado em uma variável de estado reduziu a chance de bugs.'
        },
        {
            q: '5. Qual é a fronteira de responsabilidade entre o Copiloto de IA e o Desenvolvedor?',
            a: 'A Inteligência Artificial opera como um acelerador cognitivo e gerador de sugestões sintáticas; o ser humano é o curador lógico, auditor de segurança e detentor da responsabilidade civil do software. Submeter código gerado por LLM à produção sem revisão crítica é inaceitável.'
        }
    ],
    questions: [
        {
            q: "1. Na documentação oficial do Python, qual é o tipo de dado devolvido invariavelmente pela função input()?",
            opts: ["float (Ponto Flutuante)", "int (Número Inteiro)", "str (String/Texto)", "Depende do valor numérico digitado."],
            correct: 2,
            exp: "A função input() converte tudo o que vem do buffer do teclado em caracteres de texto (String). Conversões explícitas (Casting) são sempre necessárias."
        },
        {
            q: "2. Em um bloco if / elif / else corporativo, o que acontece assim que a primeira condição verdadeira (True) é atingida?",
            opts: ["Testa todas as condições subsequentes por precaução.", "O bloco correspondente é executado e a estrutura condicional inteira é encerrada.", "Ocorre um erro de compilação sem tratamento.", "O bloco Else é executado em paralelo (Multi-threading)."],
            correct: 1,
            exp: "A estrutura de decisão é seletiva e excludente. Atingida a primeira premissa verdadeira, a execução ocorre e o sistema pula o restante dos blocos elif e else."
        },
        {
            q: "3. Por que utilizamos a conversão float() ao invés de int() para processar a variável 'valor da despesa'?",
            opts: ["Porque int() foi depreciado na versão 3.12.", "Sistemas monetários corporativos lidam invariavelmente com casas decimais (centavos).", "Porque a instrução try/except não suporta variáveis do tipo Inteiro.", "O float ocupa consideravelmente menos memória RAM."],
            correct: 1,
            exp: "Valores financeiros possuem frações. A função int() cortaria os centavos causando quebras de caixa, ou travaria o programa ao encontrar um ponto decimal na string."
        },
        {
            q: "4. Qual é a responsabilidade arquitetural do bloco 'try' na prevenção de falhas sistêmicas?",
            opts: ["Ocultar notificações de sistema do Windows.", "Checar recursivamente o acesso à internet e portas locais.", "Envolver e isolar uma porção de código que corre o risco iminente de gerar uma exceção (falha).", "Otimizar cálculos algébricos complexos em tempo de execução."],
            correct: 2,
            exp: "O bloco try age como um ambiente controlado. O código ali dentro é monitorado; se houver colapso lógico (como converter a letra 'A' em número), o fluxo é transferido ao except."
        },
        {
            q: "5. Sobre o bloco 'finally', selecione a afirmação técnica absoluta:",
            opts: ["Sempre será executado, independentemente de um erro ter ocorrido ou não no bloco try.", "Só será acionado caso o bloco except declare falha ao lidar com a exceção.", "Sua função exclusiva é fechar portas e conexões de Banco de Dados Relacionais.", "Funciona exclusivamente se emparelhado a laços de repetição (While)."],
            correct: 0,
            exp: "O finally é a rotina incondicional de finalização. Quer a operação passe limpa, quer sofra um erro drástico, suas instruções ocorrerão no encerramento do escopo de memória."
        },
        {
            q: "6. No código da Versão 2.0, qual a imensa vantagem de aplicar o princípio DRY (Don't Repeat Yourself)?",
            opts: ["Evita repetição de código, centralizando saídas em variáveis de estado, facilitando futuras refatorações.", "O código limpo ativa automaticamente a aceleração via placa de vídeo (GPU).", "A estrutura if/elif não possui capacidade nativa para gravação de arquivos de texto.", "É o único formato estrutural que a interface Tkinter aceita como entrada de dados."],
            correct: 0,
            exp: "Centralizar retornos em variáveis de estado reduz a complexidade ciclomática. Se a empresa alterar o padrão visual de resposta, você altera apenas uma linha."
        },
        {
            q: "7. Ao orquestrar um Modelo de Linguagem (IA) para gerar refatorações de código, qual a obrigação ética e técnica do Desenvolvedor?",
            opts: ["Implementar em produção imediatamente, assumindo que LLMs corporativos não produzem vulnerabilidades.", "Analisar criticamente o fluxo, auditar a segurança e só então assumir a responsabilidade pela integração.", "Forçar a Inteligência Artificial a escrever o código diretamente em Assembly.", "Garantir que a IA escreva comentários que substituam a documentação arquitetural."],
            correct: 1,
            exp: "A IA é um acelerador implacável de produtividade, mas a responsabilidade civil pelo produto de software, a validação de negócios e a auditoria de segurança permanecem com o humano."
        },
        {
            q: "8. Em um cenário de distribuição no Windows, por qual razão empacotamos o arquivo .py em um .exe?",
            opts: ["Para inflar o armazenamento local requisitado pelas bibliotecas gráficas.", "Para criar animações suaves (CSS Transitions) nos relatórios gerados.", "Para abstrair a necessidade de o cliente possuir o Python instalado ou saber rodar scripts via terminal.", "Para ocultar o código-fonte da equipe de auditoria financeira externa."],
            correct: 2,
            exp: "O PyInstaller acopla o interpretador e as bibliotecas ao binário, entregando um artefato autossuficiente que qualquer usuário de negócios consegue rodar com um duplo clique."
        },
        {
            q: "9. Analisando a sentença: if categoria == 'transporte' and valor <= 150.0:. O que o operador lógico 'and' exige tecnicamente?",
            opts: ["Que apenas o teste da variável categoria retorne positivo.", "Que pelo menos um dos testes da expressão booleana seja verdadeiro.", "Que obrigatoriamente ambas as premissas analíticas retornem True de maneira simultânea.", "Que nenhuma das premissas falhe durante a conversão do bloco Try."],
            correct: 2,
            exp: "O operador lógico 'and' (E) é restritivo por excelência. A validação total só é concedida se a afirmação à esquerda e a afirmação à direita forem integralmente verdadeiras."
        },
        {
            q: "10. No uso do gerenciador de contexto 'with open(\"relatorio.txt\", \"a\")', o que determina o parâmetro \"a\"?",
            opts: ["Arquivo (Archive) - Inicializa a compactação nativa do Windows em formato ZIP.", "Anexação (Append) - Escreve os novos registros ao final do arquivo preservando todo o histórico anterior.", "Apagar (All) - Realiza o expurgo de todos os dados do arquivo antes da inserção.", "Alerta (Alert) - Emite um aviso sonoro sempre que o sistema operacional negar acesso de gravação."],
            correct: 1,
            exp: "Crucial para a geração de Logs de auditoria não-destrutivos, o modo 'a' (Append) insere o ponteiro de gravação na última linha vazia disponível do arquivo texto, garantindo a imutabilidade do que já foi salvo."
        }
    ]
};