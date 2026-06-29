'''
    PROMPT ENVIADO À IA:
    "Evolua a Versão 2.0. Salve cada holerite processado simultaneamente em:
    1) Um arquivo folha_lote.csv (usando a biblioteca nativa csv);
    2) Um arquivo folha_lote.json (acumulando registros numa lista de dicionários).
    Mantenha a estrutura sequencial dentro do laço while."
'''

import csv
import json
import os

arquivo_json = "folha_lote.json"
arquivo_csv = "folha_lote.csv"

# Criando cabeçalho do CSV se o arquivo não existir
if not os.path.exists(arquivo_csv):
    with open(arquivo_csv, "w", newline="", encoding="utf-8") as f_csv:
        writer = csv.writer(f_csv)
        writer.writerow(["Nome", "Cargo", "ValorPago"])

while True:
    nome = input("\nNome (ou digite SAIR para encerrar): ").strip()
    if nome.upper() == "SAIR":
        break
        
    cargo = input("Cargo: ").strip()
    try:
        valor = float(input("Valor a Pagar (R$): ").replace(",", "."))
        
        # 1. Gravando no CSV
        with open(arquivo_csv, "a", newline="", encoding="utf-8") as f_csv:
            csv.writer(f_csv).writerow([nome, cargo, valor])
            
        # 2. Gravando no JSON
        lista_dados = []
        if os.path.exists(arquivo_json):
            with open(arquivo_json, "r", encoding="utf-8") as f_json:
                lista_dados = json.load(f_json)
                
        lista_dados.append({"colaborador": nome, "cargo": cargo, "liquido": valor})
        
        with open(arquivo_json, "w", encoding="utf-8") as f_json:
            json.dump(lista_dados, f_json, indent=4, ensure_ascii=False)
            
        print("-> Salvo em CSV e JSON com sucesso!")
    except ValueError:
        print("[ERRO] Numeral incorreto.")