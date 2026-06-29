'''
    Desenvolvimento inicial focado exclusivamente na lógica de negócio.
    Sem tratamento de erros. Se o usuário digitar texto no lugar do valor, o sistema quebra.
'''

print("=== SISTEMA DE AUDITORIA FINANCEIRA v1.0 ===")
print("Iniciando captura de dados...\n")

categoria_texto = input("Digite a categoria (transporte/alimentacao/hospedagem): ")
categoria = categoria_texto.strip().lower()

valor_texto = input("Digite o valor do gasto (R$): ")
valor_formatado = valor_texto.replace(",", ".")

valor = float(valor_formatado)

print("\nProcessando regras de compliance...")

if valor <= 0:
    print("Parecer: NEGADO - Valor deve ser maior que zero.")
elif categoria == "transporte" and valor <= 150.0:
    print("Parecer: APROVADO AUTOMATICAMENTE - Dentro do teto de transporte.")
elif categoria == "transporte" and valor > 150.0:
    print("Parecer: REQUER ANÁLISE - Ultrapassou teto de transporte.")
elif categoria == "alimentacao" and valor <= 85.0:
    print("Parecer: APROVADO AUTOMATICAMENTE - Dentro do teto de alimentação.")
elif categoria == "alimentacao" and valor > 85.0:
    print("Parecer: REQUER ANÁLISE - Ultrapassou teto de alimentação.")
elif categoria == "hospedagem" and valor <= 450.0:
    print("Parecer: APROVADO AUTOMATICAMENTE - Dentro do teto de hospedagem.")
elif categoria == "hospedagem" and valor > 450.0:
    print("Parecer: REQUER ANÁLISE - Ultrapassou teto de hospedagem.")
else:
    print("Parecer: NEGADO - Categoria não reconhecida.")

print("\nAuditoria finalizada.")