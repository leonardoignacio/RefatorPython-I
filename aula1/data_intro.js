window.AULA_METADATA = {
    badge: "Aula 1: Fundamentos de Desenvolvimento",
    title: "Lógica & Python",
    subtitle: "• Variáveis, Condicionais e tratamento de exceções.<br>• Pisando no acelerador com um Copiloto (IA generativa)"
};

const SVG_FLUXOGRAMA = `
<svg width="100%" height="280" viewBox="0 0 800 280" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="280" rx="16" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2"/>
    <rect x="80" y="65" width="160" height="150" rx="12" fill="#ffffff" stroke="#2563eb" stroke-width="3" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))"/>
    <text x="115" y="110" fill="#0f172a" font-family="Inter" font-weight="700" font-size="18">Memória RAM</text>
    <path d="M100 135 H220 M100 160 H220 M100 185 H180" stroke="#cbd5e1" stroke-width="4" stroke-linecap="round"/>
    <path d="M255 140 L350 140" stroke="#ea580c" stroke-width="5" stroke-linecap="round"/>
    <polygon points="350,130 370,140 350,150" fill="#ea580c"/>
    <polygon points="480,50 600,140 480,230 360,140" fill="#ffffff" stroke="#2563eb" stroke-width="3" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.05))"/>
    <text x="435" y="145" fill="#0f172a" font-family="Inter" font-weight="800" font-size="20">IF / ELSE</text>
    <path d="M605 140 L690 140" stroke="#16a34a" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 6"/>
    <text x="620" y="130" fill="#16a34a" font-family="Inter" font-weight="600" font-size="14">Aprovado</text>
    <path d="M480 235 L480 260" stroke="#dc2626" stroke-width="4" stroke-linecap="round" stroke-dasharray="6 6"/>
</svg>
`;

window.DATA_INTRO = {
    id: "intro",
    title: "1. Introdução & Teoria",
    icon: "fa-solid fa-book-open",
    content: [
        {
            type: "card",
            title: "<i class='fa-solid fa-building-user'></i> O Cenário de Negócio",
            html: `
            <p>A diretoria financeira identificou um gargalo crítico nas operações empresariais: os pedidos de reembolso de despesas de viagens corporativas chegam por e-mail sem padrão estruturado. Isso exige horas de auditoria manual e cálculos exaustivos em planilhas pela equipe de RH.</p>
            <p><strong>Nossa Missão:</strong> Construir um sistema corporativo de auditoria de despesas focado em <em>Compliance</em>. A aplicação deverá receber os dados inseridos pelo funcionário, processar as regras de limites de gastos por categoria da empresa e emitir um parecer imediato, otimizando o fluxo de trabalho administrativo.</p>
            <div class="svg-wrapper">${SVG_FLUXOGRAMA}</div>
            `
        },
        {
            type: "card",
            title: "<i class='fa-solid fa-microchip'></i> Fundamentos Arquiteturais",
            html: `
            <p>Para estruturar este software do absoluto zero, recorreremos aos conceitos básicos da documentação oficial do Python. Dominaremos três pilares essenciais:</p>
            
            <div class="callout">
                <h4>1. Variáveis e Tipagem Dinâmica</h4>
                <p><strong>Analogia Prática:</strong> Imagine a memória do computador como um imenso arquivo de aço. Uma variável é como uma <em>gaveta etiquetada</em> onde você guarda um documento temporário. O identificador da gaveta é a variável, e o documento dentro é o valor.</p>
                <p>O Python possui <strong>Tipagem Forte</strong>. O sistema não permite misturar tipos incompatíveis de dados (como somar palavras com números) sem antes fazer uma conversão (Casting) explícita pelo desenvolvedor.</p>
            </div>
            
            <div class="callout">
                <h4>2. Estruturas Lógicas de Decisão (IF / ELIF / ELSE)</h4>
                <p><strong>Analogia Prática:</strong> Pense nesta estrutura como um fluxograma de triagem. O código testa uma condição principal (<strong>IF</strong> o gasto for transporte). Se for verdade, ele executa a regra e encerra. Se não for, ele avalia uma condição alternativa (<strong>ELIF</strong> alimentação), ou aplica a política residual (<strong>ELSE</strong> despesa negada).</p>
            </div>
            
            <div class="callout">
                <h4>3. Resiliência de Software (Try / Except / Finally)</h4>
                <p>Sistemas corporativos quebram facilmente devido a entradas imprevisíveis dos usuários. Se o sistema pede o valor numérico de um hotel e o usuário digita a palavra "oitocentos", o interpretador entra em colapso. Envolver a lógica matemática em um bloco <code>try/except</code> é como instalar um "airbag": se ocorrer o choque de dados inválidos, o erro é interceptado e o sistema informa o usuário elegantemente sem fechar abruptamente.</p>
            </div>
            `
        }
    ]
};