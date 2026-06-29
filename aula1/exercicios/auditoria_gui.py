'''
    PROMPT ENVIADO À IA:
    "Abstraia o sistema para uma Interface Gráfica nativa Tkinter de nível empresarial.
    1) Utilize ttk.Combobox para Cargos e Categorias;
    2) Ao selecionar a Categoria, engatilhe o evento virtual <> para
       saltar o cursor automaticamente ao campo Valor Gasto;
    3) Cada reembolso deve gerar um arquivo .txt individual sob o template
       Nome_Cargo_DD-MM-AAAA_timestamp.txt (sanitizado contra erros do Windows);
    4) Mantenha a gravação no log geral para o botão Ver Todos (.txt) abrir o notepad;
    5) Crie o botão Finalizar Pedido / Limpar Tela que resete todo o formulário."
'''

import tkinter as tk
from tkinter import ttk, messagebox
import datetime
import time
import os

tetos_rh = {"Transporte": 150.0, "Alimentação": 85.0, "Hospedagem": 450.0}
lista_cargos = ["Analista de TI", "Desenvolvedor", "Gerente de Projetos", "Suporte Técnico"]

# Callback de Salto Automático de Foco
def ao_selecionar_categoria(event):
    input_valor.focus()

def processar_reembolso():
    try:
        nome = input_nome.get().strip()
        cargo = cb_cargo.get()
        cat = cb_categoria.get()
        val_str = input_valor.get().replace(",", ".")
        
        if not nome or not cargo or not cat:
            messagebox.showwarning("Atenção", "Preencha todos os dados de identificação.")
            return
            
        valor = float(val_str)
        teto = tetos_rh.get(cat, 0.0)
        parecer = "APROVADO" if (valor > 0 and valor <= teto) else "RETIDO / ANÁLISE"
        
        # 1. Gerando Arquivo Individual Sanitizado
        agora = datetime.datetime.now()
        data_arquivo = agora.strftime("%d-%m-%Y")
        data_tela = agora.strftime("%d/%m/%Y às %H:%M:%S")
        data_master = agora.strftime("%d/%m %H:%M")
        timestamp_unix = int(time.time())
        
        nome_limpo = "".join(c for c in nome if c.isalnum())
        cargo_limpo = "".join(c for c in cargo if c.isalnum())
        nome_arquivo = f"{nome_limpo}_{cargo_limpo}_{data_arquivo}_{timestamp_unix}.txt"
        
        conteudo_recibo = (
            f"=========================================\n"
            f"      COMPROVANTE DE REEMBOLSO INDIVIDUAL\n"
            f"=========================================\n"
            f"Registro: {data_tela}\n"
            f"Colaborador: {nome}\n"
            f"Cargo: {cargo}\n"
            f"Categoria Solicitada: {cat}\n"
            f"Valor Solicitado: R$ {valor:.2f}\n"
            f"Parecer de Compliance: {parecer}\n"
            f"=========================================\n"
        )
        
        with open(nome_arquivo, "w", encoding="utf-8") as f_ind:
            f_ind.write(conteudo_recibo)
            
        # 2. Alimentando Log Master
        linha_master = f"[{data_master}] {nome} ({cargo}) | {cat}: R${valor:.2f} -> {parecer} [Arquivo: {nome_arquivo}]\n"
        with open("relatorio_auditoria.txt", "a", encoding="utf-8") as f_master:
            f_master.write(linha_master)
            
        lista_sessao.insert(tk.END, f"• {nome.split()[0]}: R${valor:.2f} ({parecer})")
        messagebox.showinfo("Registrado", f"Sucesso!\nRecibo isolado gerado:\n{nome_arquivo}")
        
        # Reset Parcial Inteligente (Preserva Nome e Cargo)
        cb_categoria.set("")
        input_valor.delete(0, tk.END)
        cb_categoria.focus()
        
    except ValueError:
        messagebox.showerror("Erro", "Insira valores monetários numéricos.")

def limpar_formulario():
    input_nome.delete(0, tk.END)
    cb_cargo.set("")
    cb_categoria.set("")
    input_valor.delete(0, tk.END)
    input_nome.focus()

def abrir_bloco_notas():
    if os.path.exists("relatorio_auditoria.txt"):
        os.startfile("relatorio_auditoria.txt")
    else:
        messagebox.showinfo("Vazio", "Nenhum registro foi gerado no disco ainda.")

# Construção Visual do ERP
app = tk.Tk()
app.title("TechSolutions ERP v5.0")
app.geometry("380x510")
app.configure(padx=20, pady=15)

tk.Label(app, text="Nome do Colaborador:", font=("Inter", 9, "bold")).pack(anchor="w")
input_nome = tk.Entry(app, width=42)
input_nome.pack(pady=(2, 8))

tk.Label(app, text="Cargo Exercido:", font=("Inter", 9, "bold")).pack(anchor="w")
cb_cargo = ttk.Combobox(app, values=lista_cargos, state="readonly", width=39)
cb_cargo.pack(pady=(2, 8))

tk.Label(app, text="Categoria da Despesa:", font=("Inter", 9, "bold")).pack(anchor="w")
cb_categoria = ttk.Combobox(app, values=list(tetos_rh.keys()), state="readonly", width=39)
cb_categoria.pack(pady=(2, 8))

# LINHA CRÍTICA DO BIND CORRIGIDA AQUI:
cb_categoria.bind("<<ComboboxSelected>>", ao_selecionar_categoria)

tk.Label(app, text="Valor Gasto (R$):", font=("Inter", 9, "bold")).pack(anchor="w")
input_valor = tk.Entry(app, width=42)
input_valor.pack(pady=(2, 12))

tk.Button(app, text="Registrar Reembolso", command=processar_reembolso, bg="#ea580c", fg="white", font=("Inter", 9, "bold"), relief="flat").pack(fill="x", pady=3)
tk.Button(app, text="Finalizar Pedido / Limpar Tela", command=limpar_formulario, bg="#64748b", fg="white", font=("Inter", 9, "bold"), relief="flat").pack(fill="x", pady=3)
tk.Button(app, text="Ver Todos os Registros (.txt)", command=abrir_bloco_notas, bg="#2563eb", fg="white", relief="flat").pack(fill="x", pady=3)

tk.Label(app, text="--- Registros Inseridos na Sessão ---", font=("Inter", 8, "italic"), fg="#64748b").pack(pady=(12, 4))
lista_sessao = tk.Listbox(app, height=4, width=48, font=("Courier New", 8), bg="#f8fafc", borderwidth=1)
lista_sessao.pack()

app.mainloop()