const codeDocker = [
    '<span class="c-comment"># 1. Definindo o Sistema e Linguagem Base</span>',
    '<span class="c-keyword">FROM</span> python:3.12-slim',
    '',
    '<span class="c-comment"># 2. Variáveis de Ambiente Internas</span>',
    '<span class="c-keyword">ENV</span> APP_ENV="PRODUCAO"',
    '<span class="c-keyword">ENV</span> PYTHONUNBUFFERED=1',
    '',
    '<span class="c-comment"># 3. Diretório de Trabalho Virtualizado</span>',
    '<span class="c-keyword">WORKDIR</span> /opt/techsolutions',
    '',
    '<span class="c-comment"># 4. Transferência de Arquivos</span>',
    '<span class="c-keyword">COPY</span> app_auditoria.py .',
    '',
    '<span class="c-comment"># 5. Ponto de Execução Principal</span>',
    '<span class="c-keyword">CMD</span> ["python", "app_auditoria.py"]'
].join('\n');

window.DATA_INFRA = {
    id: 'infra',
    title: '3. Deploy',
    icon: 'fa-solid fa-server',
    content: [
        {
            type: 'card',
            title: '<i class="fa-brands fa-docker"></i> Empacotamento Profissional',
            html: `
            <p>O produto final (desktop e geração de arquivos TXT) não pode ser distribuído como um simples script vulnerável a diferenças de sistema operacional do funcionário (o clássico problema do <em>"na minha máquina funciona"</em>).</p>
            <p>Abaixo detalhamos a configuração básica para criar um ecossistema estéril (Conteinerização) utilizando um arquivo <strong>Dockerfile</strong>. Essa estrutura garante que qualquer máquina execute nossa lógica analítica dentro da exata mesma versão do interpretador Python, isolando completamente as dependências.</p>
            <pre><code>${codeDocker}</code></pre>
            `
        }
    ]
};