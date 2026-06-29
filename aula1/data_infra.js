/**
 * DADOS: DEPLOY (Empacotamento Executável Windows)
 * Baseado estritamente no paradigma de progressão didática e contorno de permissões de rede.
 */

window.DATA_INFRA = {
    id: 'infra',
    title: '3. Deploy',
    icon: 'fa-solid fa-rocket',
    content: [
        {
            type: 'card',
            title: '<i class="fa-brands fa-windows"></i> Da Linguagem Interpretada ao Executável (.exe)',
            html: `
            <p>No mundo corporativo real, o usuário final (como a analista de RH da TechSolutions) não possui o interpretador Python instalado em sua máquina, tampouco sabe abrir um terminal para digitar comandos de execução.</p>
            <p>Nosso objetivo nesta última etapa é realizar o <strong>Build</strong> (empacotamento): pegaremos nosso código-fonte da Versão Final (.py), juntamente com a biblioteca nativa Tkinter, e encapsularemos tudo dentro de um único arquivo binário executável (<code>.exe</code>), nativo para o Windows 11.</p>
            <div class="callout">
                <h4>Conceito de Arquiteto: O que faz o Empacotador?</h4>
                <p>O Python é uma linguagem interpretada. Ferramentas profissionais de build, como o <em>PyInstaller</em>, funcionam coletando o interpretador Python da sua máquina, o seu script e todas as bibliotecas vinculadas, acoplando-os a um pequeno "carregador" (bootloader) em código de máquina. Quando o cliente der um duplo clique no ícone, esse carregador extrai o ecossistema nos arquivos temporários do sistema operacional e roda a aplicação de forma totalmente transparente.</p>
            </div>
            `
        },
        {
            type: 'card',
            title: '<i class="fa-solid fa-terminal"></i> Roteiro de Compilação Passo a Passo',
            html: `
            <p>Abra o seu terminal (PowerShell ou CMD) exatamente na pasta onde salvou o script da versão gráfica da nossa aplicação e execute a sequência abaixo:</p>
            
            <h4 style="margin-top: 1.5rem; color: var(--text-title);"><span class="badge" style="margin-bottom:0.5rem">Passo 1</span> Instalação do Motor de Build</h4>
            <p>Instale a biblioteca empacotadora globalmente no seu ambiente de desenvolvimento:</p>
            <pre><code>pip install pyinstaller</code></pre>

            <h4 style="margin-top: 2rem; color: var(--text-title);"><span class="badge" style="margin-bottom:0.5rem">Passo 2</span> Execução do Comando de Montagem Blindado</h4>
            <p>Em redes corporativas restritas, o Windows bloqueia a criação de variáveis globais no <code>PATH</code>. Para contornar isso com segurança, chamamos o interpretador principal como entregador acionando a flag <code>-m</code> antes do módulo:</p>
            <pre><code>python -m PyInstaller --onefile --windowed --name "AuditorTechSolutions" auditoria_gui.py</code></pre>
            `
        },
        {
            type: 'card',
            title: '<i class="fa-solid fa-sliders"></i> Dissecando as Flags do Comando',
            html: `
            <p>Um engenheiro de software não digita comandos magicamente; ele domina cada parâmetro acionado. Entenda as ordens enviadas ao compilador:</p>
            
            <ul style="list-style: none; margin-top: 1.2rem;">
                <li style="margin-bottom: 1.2rem; padding-left: 1rem; border-left: 3px solid var(--secondary);">
                    <strong>python -m PyInstaller</strong>:<br>
                    <span style="color: var(--text-muted)">Ordena ao interpretador Python acionar diretamente o pacote instalado em sua própria raiz interna, anulando erros de comando não reconhecido no terminal do Windows.</span>
                </li>
                <li style="margin-bottom: 1.2rem; padding-left: 1rem; border-left: 3px solid var(--secondary);">
                    <strong>--onefile</strong> (ou a versão curta <code>-F</code>):<br>
                    <span style="color: var(--text-muted)">Garante que a saída seja compactada em um <em>único</em> arquivo .exe monolítico, em vez de gerar uma pasta aberta contendo dezenas de DLLs soltas. Ideal para distribuir por e-mail ou pasta compartilhada.</span>
                </li>
                <li style="margin-bottom: 1.2rem; padding-left: 1rem; border-left: 3px solid var(--secondary);">
                    <strong>--windowed</strong> (ou a versão curta <code>-w</code>):<br>
                    <span style="color: var(--text-muted)"><strong>Extremamente crítico para Tkinter!</strong> Instruí o Windows a não abrir a janela preta do Prompt de Comando (CMD) por trás da interface gráfica. Se você omitir esta flag, o usuário verá o terminal piscando aberto junto com o programa.</span>
                </li>
                <li style="margin-bottom: 1.2rem; padding-left: 1rem; border-left: 3px solid var(--secondary);">
                    <strong>--name "Nome"</strong>:<br>
                    <span style="color: var(--text-muted)">Substitui o nome genérico do arquivo .py por um nome comercial limpo para o arquivo binário gerado.</span>
                </li>
            </ul>
            `
        },
        {
            type: 'card',
            title: '<i class="fa-solid fa-folder-tree"></i> Onde está o meu software?',
            html: `
            <p>Após a conclusão do processo no terminal (que costuma levar de 30 a 60 segundos), o PyInstaller terá gerado a seguinte árvore de diretórios na sua pasta:</p>
            
            <pre><code>pasta_do_projeto/
├── build/                  # Arquivos temporários de montagem (Pode deletar)
├── auditoria_gui.spec      # Manifesto de compilação avançada (Pode deletar)
├── auditoria_gui.py        # Seu código-fonte original
└── dist/                   # &lt;--- O SEU TESOURO ESTÁ AQUI!
    └── AuditorTechSolutions.exe</code></pre>

            <p>Acesse a pasta <strong><code>dist</code></strong>. O arquivo <code>AuditorTechSolutions.exe</code> gerado ali dentro é 100% autossuficiente. Você pode copiá-lo para um pendrive ou arrastá-lo para a Área de Trabalho de qualquer computador com Windows 10 ou 11 e ele rodará nativamente.</p>

            <div class="callout" style="border-left-color: #dc2626; background: #fef2f2; margin-bottom: 0;">
                <h4 style="color: #dc2626;"><i class="fa-solid fa-triangle-exclamation"></i> Alerta de Infraestrutura: Antivírus e Windows Defender</h4>
                <p style="margin-bottom:0; color: #7f1d1d;">Como executáveis gerados localmente via PyInstaller não possuem uma <em>Assinatura Digital de Código</em> (Certificado de Segurança pago à Microsoft), o Windows Defender ou antivírus corporativos podem sinalizar o arquivo como "Suspeito" ao tentar abri-lo em outros computadores. Em empresas reais, o departamento de TI contorna isso adicionando o hash da aplicação à Whitelist da rede.</p>
            </div>
            `
        }
    ]
};