'''
    PROMPT ENVIADO À IA:
    "Refatore o PMV 1.0. Substitua a pergunta [S/N] por um Menu Numérico no terminal:
    [1] Cadastrar Colaborador | [2] Ver Total Acumulado | [3] Encerrar Sistema.
    Envolva a captura matemática num try/except dentro do loop para impedir que
    digitações erradas encerrem o lote inteiro da folha de pagamento."
'''

total_folha = 0.0
total_colaboradores = 0

while True:
    print("\n-----------------------------------")
    print(" 1. Adicionar Holerite ao Lote     ")
    print(" 2. Exibir Parcial da Sessão       ")
    print(" 3. Fechar Folha e Sair            ")
    opcao = input("Escolha uma operação: ").strip()
    
    if opcao == "1":
        try:
            nome = input("Colaborador: ").strip()
            valor = float(input("Valor Total a Pagar (R$): ").replace(",", "."))
            if valor <= 0:
                print("[ERRO] O valor deve ser positivo.")
                continue # Pula o resto do laço e volta pro início do Menu
                
            total_folha += valor
            total_colaboradores += 1
            print("-> Holerite contabilizado com sucesso!")
            
        except ValueError:
            print("[FALHA] Digite apenas números monetários.")
            
    elif opcao == "2":
        print(f"\n[PARCIAL] Registros: {total_colaboradores} | Montante: R$ {total_folha:.2f}")
        
    elif opcao == "3":
        print("Encerrando lote...")
        break
    else:
        print("Opção inválida!")