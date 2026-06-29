window.AULA_METADATA = {
    badge: "Aula 2: Fundamentos de Desenvolvimento",
    title: "Estruturas de Repetição & Web",
    subtitle: "• Laços While/For, Bibliotecas e PIP.<br>• Persistência CSV/JSON e salto para Web App com Copiloto IA."
};

const SVG_FLUXO_AULA2 = `
<svg width="100%" height="300" viewBox="0 0 850 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="850" height="300" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
    
    <circle cx="70" cy="150" r="35" fill="#2563eb" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))"/>
    <text x="52" y="155" fill="#ffffff" font-family="Inter" font-weight="700" font-size="14">Início</text>
    <path d="M105 150 H150" stroke="#ea580c" stroke-width="4" stroke-linecap="round"/>
    
    <rect x="150" y="110" width="160" height="80" rx="10" fill="#ffffff" stroke="#2563eb" stroke-width="3"/>
    <text x="175" y="145" fill="#0f172a" font-family="Inter" font-weight="700" font-size="14">Processar</text>
    <text x="185" y="165" fill="#64748b" font-family="Inter" font-size="12">Colaborador</text>
    <path d="M310 150 H360" stroke="#ea580c" stroke-width="4" stroke-linecap="round"/>
    
    <path d="M360 110 H480 V190 H360 Z" fill="#ffffff" stroke="#16a34a" stroke-width="3"/>
    <text x="380" y="155" fill="#16a34a" font-family="Inter" font-weight="700" font-size="14">Salvar CSV</text>
    <path d="M480 150 H530" stroke="#ea580c" stroke-width="4" stroke-linecap="round"/>
    
    <polygon points="610,90 690,150 610,210 530,150" fill="#ffffff" stroke="#ea580c" stroke-width="3"/>
    <text x="580" y="155" fill="#0f172a" font-family="Inter" font-weight="700" font-size="13">Continuar?</text>
    
    <path d="M610 90 V40 H230 V110" stroke="#2563eb" stroke-width="3" stroke-dasharray="6 6" fill="none"/>
    <text x="400" y="30" fill="#2563eb" font-family="Inter" font-weight="600" font-size="13">SIM (Repetir Laço)</text>
    <polygon points="225,100 230,110 235,100" fill="#2563eb"/>
    
    <path d="M690 150 H760" stroke="#dc2626" stroke-width="4" stroke-linecap="round"/>
    <text x="710" y="140" fill="#dc2626" font-family="Inter" font-weight="600" font-size="13">NÃO</text>
    <circle cx="795" cy="150" r="35" fill="#0f172a"/>
    <text x="782" y="155" fill="#ffffff" font-family="Inter" font-weight="700" font-size="14">Fim</text>
</svg>
`;

window.DATA_INTRO = {
    id: "intro",
    title: "1. Introdução & Teoria",
    icon: "fa-solid fa-book-open",
    content: [
        {
            type: "card",
            title: "<i class='fa-solid fa-file-invoice-dollar'></i> A Situação-Problema: O Gargalo do Holerite",
            html: `
            <p>O departamento administrativo da <strong>TechSolutions</strong> superou o problema das viagens com o sistema da Aula 1. Porém, no fim do mês, surgiu um gargalo ainda maior: o cálculo de bônus de produtividade e descontos de atraso para os <strong>50 colaboradores</strong> da folha de pagamento.</p>
            <p><strong>O Desafio:</strong> Executar o programa da Aula 1 cinquenta vezes (digitando, anotando o resultado no papel, fechando e abrindo de novo) é inviável. Precisamos construir um <em>Processador em Lote</em> capaz de manter o sistema rodando continuamente até que o operador decida parar, registrando cada cálculo em uma base consolidada.</p>
            <div class="svg-wrapper">${SVG_FLUXO_AULA2}</div>
            `
        },
        {
            type: "card",
            title: "<i class='fa-solid fa-layer-group'></i> Fundamentos: Loops, Bibliotecas e PIP",
            html: `
            <p>Para resolver este problema corporativo, introduziremos novos paradigmas arquiteturais do Python:</p>
            
            <div class="callout">
                <h4>1. Estruturas de Repetição (While e For)</h4>
                <p><strong>Analogia Prática:</strong> Imagine uma esteira de montagem industrial. O laço <code>while</code> (enquanto) mantém a esteira rodando <em>enquanto</em> houver peças chegando (ou até o operário apertar o botão vermelho de parada). Já o laço <code>for</code> (para cada) é programado para rodar um número exato de vezes (ex: <em>para cada</em> um dos 50 nomes na lista).</p>
            </div>

            <div class="callout">
                <h4>2. Bibliotecas Nativas, Externas e o gerenciador PIP</h4>
                <p>Nenhuma linguagem faz tudo sozinha. O Python divide suas ferramentas em três níveis:</p>
                <p>• <strong>Bibliotecas Nativas:</strong> São como as ferramentas que já vêm no porta-malas do carro de fábrica (ex: a biblioteca <code>os</code> para comandos do sistema ou <code>json</code> para arquivos). Você só precisa dar um <code>import</code>.</p>
                <p>• <strong>Bibliotecas Externas:</strong> São motores superpoderosos fabricados por terceiros (ex: o framework <em>Streamlit</em> para criar sites). Elas não vêm instaladas no Python padrão.</p>
                <p>• <strong>O PIP (Pip Installs Packages):</strong> É o "entregador oficial" do Python. Quando você digita no terminal <code>pip install streamlit</code>, o PIP conecta o seu computador à nuvem mundial (PyPI), baixa essa caixa de ferramentas externa e acopla ao seu interpretador local.</p>
            </div>

            <div class="callout">
                <h4>3. Formatos de Intercâmbio de Dados (.CSV vs .JSON)</h4>
                <p>Para que os cálculos da folha não sumam quando fechar o programa, precisamos persistir os dados no disco. Dominaremos os dois maiores padrões globais:</p>
                <p>• <strong>Arquivo .CSV (Comma-Separated Values):</strong> É a versão em texto puro de uma tabela de Excel. Cada linha do arquivo representa um funcionário, e as colunas são separadas estritamente por vírgulas (ex: <code>Ana,Gerente,4500.00</code>). É universal, leve e abre em qualquer planilha.</p>
                <p>• <strong>Arquivo .JSON (JavaScript Object Notation):</strong> É o formato padrão da internet moderna. Ele organiza a informação como um arquivo de gavetas hierárquico usando chaves e valores (ex: <code>{"nome": "Ana", "cargo": "Gerente"}</code>). Ideal para sistemas complexos e integrações Web.</p>
            </div>
            `
        }
    ]
};