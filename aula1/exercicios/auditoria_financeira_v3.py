'''
    PROMPT ENVIADO À IA:
    "Evolua a Versão 2.0. O setor financeiro precisa saber QUEM solicitou o gasto.
    Adicione a captura sequencial de Nome e Cargo. Antes dos inputs, exiba no console
    uma tabela explicativa com os tetos limites e os cargos aceitos pela política interna.
    Grave todos esses novos campos no arquivo relatorio_auditoria.txt (modo a)."
'''

import datetime

# Tabela Informativa Prévia no Terminal
print("======================================================")
print("        POLÍTICAS INTERNAS DE REEMBOLSO v3.0          ")
print("======================================================")
print("Categorias e Tetos Máximos:\n • Transporte: R$ 150.00\n • Alimentação: R$ 85.00\n • Hospedagem: R$ 450.00")
print("\nCargos Autorizados: Analista, Gerente, Diretor, Técnico")
print("------------------------------------------------------\n")

try:
    nome_colaborador = input("Nome do Colaborador: ").strip()
    cargo_colaborador = input("Cargo exercido: ").strip().title()
    categoria = input("Categoria da despesa: ").strip().lower()
    valor = float(input("Valor emitido na nota (R$): ").replace(",", "."))
    
    if valor <= 0:
        status = "NEGADO - Valor zerado"
    elif categoria == "transporte" and valor <= 150.0:
        status = "APROVADO"
    elif categoria == "alimentacao" and valor <= 85.0:
        status = "APROVADO"
    elif categoria == "hospedagem" and valor <= 450.0:
        status = "APROVADO"
    else:
        status = "ANÁLISE PENDENTE DA DIRETORIA"
    
    print(f"\nParecer Emitido -> {nome_colaborador} ({cargo_colaborador}): {status}")
    
    with open("relatorio_auditoria.txt", "a", encoding="utf-8") as arquivo:
        carimbo = datetime.datetime.now().strftime("%d/%m/%Y %H:%M")
        linha = f"[{carimbo}] NOME: {nome_colaborador} | CARGO: {cargo_colaborador} | CAT: {categoria.upper()} | VAL: R${valor:.2f} -> {status}\n"
        arquivo.write(linha)
        
    print("-> Registro administrativo salvo com sucesso no arquivo TXT.")

except ValueError:
    print("[ERRO] Falha na conversão de caracteres do campo monetário.")