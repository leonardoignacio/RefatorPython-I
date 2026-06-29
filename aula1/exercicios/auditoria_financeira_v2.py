'''
    PROMPT ENVIADO À IA:
    "Atue como Arquiteto Python. O código do PMV 1.0 quebra se o usuário digitar
    letras no campo de valor monetário. Refatore o código adicionando blocos de
    tratamento de exceções (try/except/finally) para capturar o erro ValueError
    e impedir que o sistema feche abruptamente. Otimize levemente os condicionais."
'''

print("=== SISTEMA DE AUDITORIA FINANCEIRA v2.0 ===")

try:
    categoria = input("Categoria (transporte/alimentacao/hospedagem): ").strip().lower()
    valor_input = input("Valor do gasto (R$): ").replace(",", ".")
    
    valor = float(valor_input)
    
    if valor <= 0:
        print("Parecer: NEGADO - Valor inválido.")
    elif categoria == "transporte" and valor <= 150.0:
        print("Parecer: APROVADO")
    elif categoria == "alimentacao" and valor <= 85.0:
        print("Parecer: APROVADO")
    elif categoria == "hospedagem" and valor <= 450.0:
        print("Parecer: APROVADO")
    else:
        print("Parecer: ANÁLISE DA DIRETORIA")

except ValueError:
    print("\n[ERRO CRÍTICO] O sistema espera um formato numérico (ex: 150.50).")
finally:
    print("\n[LOG] Sistema de auditoria liberado.")