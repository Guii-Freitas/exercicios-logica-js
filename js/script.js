function exercicio13() {

    alert("Programa que calcula média ponderada de 3 notas de um aluno.")

    let nota1 = parseFloat(prompt("Insira a primeira nota: "))
    let nota2 = parseFloat(prompt("Insira a segunda nota: "))
    let nota3 = parseFloat(prompt("Insira a terceira nota: "))
    let mediaFinal = ((nota1 * 2) + (nota2 * 3) + (nota3 * 5)) / 10

    alert("A média final é: " + mediaFinal)

}

function exercicio14() {

    alert("Programa que verifica se o número inserido é maior ou menor que 10.")

    let numero = parseInt(prompt("Insira um número: "))

    if (numero > 10) {

        alert("O número é maior que 10!")

    } else if (numero == 10) {

        alert("O número é igual a 10!")

    } else {

        alert("O número é menor que 10!")

    }

}

function exercicio15() {

    alert("Programa que verifica se o valor inserido é positivo ou negativo.")

    let numero = parseFloat(prompt("Insira um número: "))

    if (numero >= 0) {

        alert("O número " + numero + " é positivo!")

    } else {

        alert("O número " + numero + " é negativo!")

    }
}

function exercicio16() {

    alert("Programa que calcula o valor dos descontos de acordo com a quantidade de maças que você compra, sendo os seguintes valores: Menos de uma Dúzia = R$1.30 cada --- Mais de uma Dúzia = R$1.00 cada.")

    let qtdMacas = parseInt(prompt("Quantas maças irá comprar?"))
    var valorMaca = 0;
    let custoTotal = 0;

    if (qtdMacas <= 12) {

        valorMaca = 1.30
        custoTotal = qtdMacas * valorMaca

        alert("O valor a ser pago é de R$" + custoTotal)

    } else {

        valorMaca = 1
        custoTotal = qtdMacas * valorMaca

        alert("O valor a ser pago é de R$" + custoTotal.toFixed(2))

    }

}

function exercicio17() {

    alert("Programa que calcula a média aritimética entre duas notas de um aluno e diz se está aprovado ou reprovado (Se a nota for >= a 6 aprovado).")

    let nota1 = parseFloat(prompt("Insira a primeira nota: "))
    let nota2 = parseFloat(prompt("Insira a segunda nota: "))
    let media = (nota1 + nota2) / 2

    if (media >= 6) {

        alert("Nota do Aluno: " + media + " ----- Situação: Aprovado!")

    } else {

        alert("Nota do Aluno: " + media + " ----- Situação: Aprovado!")

    }

}

function exercicio18() {

    alert("Programa que solicita o ano atual e o ano de nascimento de uma pessoa, calcula sua idade atual e diz se ela pode ou não votar (Idade para votar = 16 anos ou mais).")

    let anoAtual = parseInt(prompt("Insira o ano atual: "))
    let anoNascimento = parseInt(prompt("Insira o ano que você nasceu: "))
    let idade = anoAtual - anoNascimento

    if (idade >= 16) {

        alert("Você tem " + idade + " anos. Pode votar sim!!")

    } else {

        alert("Você tem " + idade + " anos. Não pode votar ainda!!")

    }

}

function exercicio19() {

    alert("Programa que recebe dois valores e verifica qual é o maior e qual o menor.")

    let numero1 = parseInt(prompt("Insira o primeiro número: "))
    let numero2 = parseInt(prompt("Insira o segundo número: "))

    if (numero1 > numero2) {

        alert(numero1 + " é maior.")

    } else {

        alert(numero2 + " é maior.")

    }

}

function exercicio20() {

    alert("Programa que recebe três valores e verifica qual é o maior e qual o menor e escreve eles em ordem crescente.")

    let numero1 = parseInt(prompt("Insira o primeiro número"))
    let numero2 = parseInt(prompt("Insira o segundo número: "))

    if (numero1 > numero2) {

        alert("Os números em ordem crescente são: " + numero2 + " e " + numero1)

    } else {

        alert("Os números em ordem crescente são: " + numero1 + " e " + numero2)

    }

}

function exercicio21() {

    alert("Programa que recebe horário de inicio e horário te término de uma partida de Xadrez e calcula a duração.")

    let horaInicio = parseInt(prompt("Insira o horário de início da partida: "))
    let horaTermino = parseInt(prompt("Insira o horário de término da partida: "))

    if (horaInicio > horaTermino) {

        let duracao = (24 - horaInicio) + horaTermino
        alert("A partida durou " + duracao + "hrs")

    } else {

        let duracao = horaTermino - horaInicio
        alert("A partida durou " + duracao + "hrs")

    }

}

function exercicio22() {

    alert("Programa que calcula salário de funcionário alplicando horas extras da empresa.")

    let horasTrabalhadas = parseInt(prompt("Insira o número de horas trabalhadas na semana: "));
    let salarioHora = parseFloat(prompt("Insira o salário por hora na empresa: "));
    let horasMes = horasTrabalhadas * 4;
    let salarioRegular = salarioHora * horasMes;

    if (horasMes <= 160) {

        alert("Sem horas extras. O salário é de: " + salarioRegular)

    } else {

        let horasExtras = horasMes - 160
        let salarioExtra = horasExtras * (salarioHora * (50 / 100))
        let salarioFinal = salarioExtra + salarioRegular

        alert("Possui " + horasExtras + "hrs extras trabalhadas. Seu salário totalé de: " + salarioFinal)

    }

}

function exercicio23() {

    alert("Programa que calcula e mostra o peso ideal de uma pessoa baseada em sua altura e genero.")

    let nome = prompt("Insira seu nome: ");
    let altura = parseInt(prompt("Insira sua algura em CM: "));
    let genero = prompt("Insira seu genero (M) Masculino | (F) Feminino");

    if (genero == "M") {

        let pesoIdeal = (0.75 * altura) - 62.5;
        alert("Nome: " + nome + "\n Genero: " + genero + "\n Seu peso ideal é de: " + pesoIdeal + "kg").toFixed(2)

    } else if (genero == "F") {

        pesoIdeal = (0.67 * altura) - 56;
        alert("Nome: " + nome + "\n Genero: " + genero + "\n Seu peso ideal é de: " + pesoIdeal + "kg").toFixed(2)

    } else {

        alert("Responda com (M) para Masculino ou com (F) para Feminino.")

    }
}


function exercicio24() {

    alert("Programa que calcula salario de um funcionário e sua comissão extra.")

    let salarioFixo = parseInt(prompt("Insira o salário fixo do funcionário: "));
    let valorVendas = parseInt(prompt("Insira o valor de vendas totais do funcionário: "));
    let salarioFinal

    if (valorVendas <= 1500) {

        salarioFinal = (valorVendas * (3 / 100)) + salarioFixo;
        alert("O salário final do funcionário é de: " + salarioFinal).toFixed(2)

    } else {

        salarioFinal = (valorVendas * (5 / 100)) + salarioFixo;
        alert("O salário final do funcionário é de: " + salarioFinal).toFixed(2)

    }

}

function exercicio25() {

    alert("Programa que calcula saldo da conta.")

    let numeroConta = parseInt(prompt("Insira o número da conta do cliente: "));
    let saldoConta = parseFloat(prompt("Insira o saldo da conta: "));
    let debitoConta = parseFloat(prompt("Insira o valor débito da conta do cliente: "));
    let creditoConta = parseFloat(prompt("Insira o valor do crédito da conta do cliente: "));
    let saldoAtual = saldoConta - debitoConta + creditoConta;

    if (saldoAtual >= 0) {

        alert("Seu saldo é de: R$" + saldoAtual + " | Saldo Positivo.")

    } else {

        alert("Seu saldo é de: R$" + saldoAtual + " | Saldo Negativo.")

    }

}

function exercicio26() {

    alert("Programa que calcula quantidade média de estoque de determinado produto e retorna se precisa ou não comprar novos produtos.")

    let quantidadeAtual = parseInt(prompt("Insira a quantidade do produto em estoque: "));
    let quantidadeMax = parseInt(prompt("Insira a quantidade máxima de estoque: "));
    let quantidadeMin = parseInt(prompt("Insira a quantidade miníma de estoque:  "));
    let quantidadeMedia = (quantidadeMax + quantidadeMin) / 2;

    if (quantidadeAtual >= quantidadeMedia) {

        alert("Estoque: " + quantidadeAtual + "/" + quantidadeMax + ". Não efetuar compra.")

    } else {

        alert("Estoque: " + quantidadeAtual + "/" + quantidadeMax + ". Efetuar compra.")

    }
}

function exercicio27() {

    alert("Programa que lê um número e diz se ele é positivo, negativo ou neutro (0).")

    let numero = parseFloat(prompt("Insira um número: ")).toFixed(2);

    if (numero > 0) {

        alert("O número é positivo!")

    } else if (numero < 0) {

        alert("O número é negativo!")

    } else {

        alert("O número é igual a zero. É neutro!")

    }
}

function exercicio28() {

    alert("Programa que recebe 3 valores diferentes e escreve o maior.")

    let numero1 = parseFloat(prompt("Insira o primeiro número: "));
    let numero2 = parseFloat(prompt("Insira o segundo número: "));
    let numero3 = parseFloat(prompt("Insira o terceiro número: "));

    if (numero1 > numero2 && numero1 > numero3) {

        alert("O número " + numero1 + " é o maior.")

    } else if (numero2 > numero1 && numero2 > numero3) {

        alert("O número " + numero2 + " é o maior.")

    } else {

        alert("O número " + numero3 + " é o maior.")

    }
}

function exercicio29() {

    alert("Programa que recebe 3 valores e soma os dois maiores.")

    let numero1 = parseFloat(prompt("Insira o primeiro número: "));
    let numero2 = parseFloat(prompt("Insira o segundo número: "));
    let numero3 = parseFloat(prompt("Insira o terceiro número: "));

    if (numero1 > numero2 && numero2 > numero3) {

        alert(numero1 + numero2)

    } else if (numero1 > numero2 && numero3 > numero2) {

        alert(numero1 + numero3)

    } else if (numero2 > numero1 && numero3 > numero1) {

        alert(numero2 + numero3)

    } else {

        alert(numero1 + numero2)

    }

}

function exercicio30() {

    alert("Programa que recebe 3 valores e exibe em ordem crescente.")

    let numero1 = parseFloat(prompt("Insira o primeiro número: "));
    let numero2 = parseFloat(prompt("Insira o segundo número: "));
    let numero3 = parseFloat(prompt("Insira o terceiro número: "));

    if (numero1 > numero2 && numero2 > numero3) { //1 2 3

        alert(numero3 + " -> " + numero2 + " -> " + numero1)

    } else if (numero1 > numero3 && numero3 > numero2) { // 1 3 2

        alert(numero2 + " -> " + numero3 + " -> " + numero1)

    } else if (numero2 > numero1 && numero1 > numero3) { // 2 1 3

        alert(numero3 + " -> " + numero1 + " -> " + numero2)

    } else if (numero2 > numero3 && numero3 > numero1) { // 2 3 1

        alert(numero1 + " -> " + numero3 + " -> " + numero2)

    } else if (numero3 > numero1 && numero1 > numero2) { // 3 1 2

        alert(numero2 + " -> " + numero1 + " -> " + numero3)

    } else { // 3 2 1

        alert(numero1 + " -> " + numero2 + " -> " + numero3)

    }

}

function exercicio31() {

    alert("Programa que recebe 3 valores (A, B e C) que representam as medidas dos lados de um triângulo retorna dizendo se formou ou não um triângulo. (Para formar um triângulo, o valor de um lado deve ser menor que a soma dos outros dois lados.)")

    let valorA = parseFloat(prompt("Insira o valor do primeiro lado: "))
    let valorB = parseFloat(prompt("Insira o valor do segundo lado: "))
    let valorC = parseFloat(prompt("Insira o valor do terceiro lado: "))

    if (valorA > valorB + valorC) {

        alert("Não é um triângulo.")

    } else if (valorB > valorA + valorC) {

        alert("Não é um triângulo.")

    } else if (valorC > valorA + valorB) {

        alert("Não é um triângulo.")

    } else {

        alert("É um triângulo!")

    }

}

function exercicio32() {

    alert("Programa que recebe o nome de dois times e o número de gols marcados por cada um deles e escreve quem venceu a partida ou se deu empate.")

    let time1 = prompt("Insira o primeiro time: ");
    let time2 = prompt("Insira o segundo time: ");
    let placarTime1 = parseInt(prompt("Insira quantos gols o time 1 marcou: "));
    let placarTime2 = parseInt(prompt("Insira quantos gols o time 2 marcou: "));

    if (placarTime1 > placarTime2) {

        alert("Placar do jogo: " + placarTime1 + " X " + placarTime2 + ". " + time1 + " vence!")

    } else if (placarTime2 > placarTime1) {

        alert("Placar do jogo: " + placarTime1 + " X " + placarTime2 + ". " + time2 + " vence!")

    } else {

        alert("Placar do jogo: " + placarTime1 + " X " + placarTime2 + ". " + "Empate!")

    }

}

function exercicio33() {

    alert("Programa que recebe 2 valores e retorna se são iguals, maiores ou menores entre eles.")

    let valor1 = parseFloat(prompt("Insira o valor do primeiro lado: "));
    let valor2 = parseFloat(prompt("Insira o valor do segundo lado: "));

    if (valor1 > valor2) {

        alert("Primeiro é maior.")

    } else if (valor2 > valor1) {

        alert("Segundo é maior.")

    } else {

        alert("Números iguais.")

    }
}

function exercicio34() {

    alert("Programa que calcula o valor de Z e retorna A (se o valor de Z for menor ou igual a 0), B (se o valor de Z for menor ou igual a 100) ou C (>100).")

    let valorX = parseInt(prompt("Insira o valor de X: "));
    let valorY = parseInt(prompt("Insira o valor de Y: "));
    let valorZ = (valorX * valorY) + 5;

    if (valorZ <= 0) {

        alert("Valor de Z = " + valorZ + ". Resposta A - (Menor ou igual a 0)")

    } else if (valorZ <= 100) {

        alert("Valor de Z = " + valorZ + ". Resposta B - (Menor ou igual a 100)")

    } else {

        alert("Valor de Z = " + valorZ + ". Resposta C - (Maior que 100)")

    }

}

function exercicio35() {

    alert("Programa que calcula desconto a partir da quantidade de gasolina ou alcool o cliiente pede.")

    let tipoCombustivel = prompt("Insira o tipo de combústivel que deseja | G - para Gasolina | A - para Álcool.")

    if (tipoCombustivel == "A" || tipoCombustivel == "a") {

        let litrosAlcool = parseFloat(prompt("Insira quantos litros de álcool você quer: "));
        let descontoAlcool;
        let valorTotal;

        if (litrosAlcool <= 20) {

            descontoAlcool = 2.90 * 0.03
            valorTotal = descontoAlcool * litrosAlcool

            alert("Total a ser pago: R$" + valorTotal)

        } else {

            descontoAlcool = 2.90 * 0.05
            valorTotal = descontoAlcool * litrosAlcool

            alert("Total a ser pago: R$" + valorTotal)

        }

    } else if (tipoCombustivel == "G" || tipoCombustivel == "g") {

        let litrosGasolina = parseFloat(prompt("Insira quantos litros de gasolina você quer: "));
        let descontoGasolina;
        let valorTotal;

        if (litrosGasolina <= 20) {

            descontoGasolina = 3.30 * 0.04
            valorTotal = descontoGasolina * litrosGasolina

            alert("Total a ser pago: R$" + valorTotal)

        } else {

            descontoGasolina = 3.30 * 0.06
            valorTotal = descontoGasolina * litrosGasolina

            alert("Total a ser pago: R$" + valorTotal)

        }

    } else {

        alert("Insira um valor válido | G - para Gasolina | A - para Álcool.")

    }

}

function exercicio36() {

    alert("Programa que recebe a idade de dois homens e de duas mulheres e calcula a soma da idade do homem mais velho com a idade da mulher mais nova e o produto da idade do homem mais novo com a idade da mulher mais velha.")

    let idadeHomem1 = parseInt(prompt("Insira a idade do primeiro homem: "))
    let idadeHomem2 = parseInt(prompt("Insira a idade do segundo homem: "))
    let idadeMulher1 = parseInt(prompt("Insira a idade da primeira mulher: "))
    let idadeMulher2 = parseInt(prompt("Insira a idade da segunda mulher: "))
    let somaIdade;
    let produtoIdade;

    if (idadeHomem1 > idadeHomem2 && idadeMulher1 > idadeMulher2) {

        somaIdade = idadeHomem1 + idadeMulher2;
        produtoIdade = idadeHomem2 * idadeMulher1;

        alert(" Idade homem mais velho: " + idadeHomem1 + "\n Idade homem mais novo: " + idadeHomem2 + "\n Idade mulher mais velha: " + idadeMulher1 + "\n Idade da mulher mais nova: " + idadeMulher2)
        alert(" Soma das Idades: " + somaIdade + "\n Produto das idades: " + produtoIdade)

    } else if (idadeHomem1 > idadeHomem2 && idadeMulher2 > idadeMulher1) {

        somaIdade = idadeHomem1 + idadeMulher1;
        produtoIdade = idadeHomem2 * idadeMulher2;

        alert(" Idade homem mais velho: " + idadeHomem1 + "\n Idade homem mais novo: " + idadeHomem2 + "\n Idade mulher mais velha: " + idadeMulher2 + "\n Idade da mulher mais nova: " + idadeMulher1)
        alert(" Soma das Idades: " + somaIdade + "\n Produto das idades: " + produtoIdade)

    } else if (idadeHomem2 > idadeHomem1 && idadeMulher1 > idadeMulher2) {

        somaIdade = idadeHomem2 + idadeMulher2;
        produtoIdade = idadeHomem1 * idadeMulher1;

        alert(" Idade homem mais velho: " + idadeHomem2 + "\n Idade homem mais novo: " + idadeHomem1 + "\n Idade mulher mais velha: " + idadeMulher2 + "\n Idade da mulher mais nova: " + idadeMulher1)
        alert(" Soma das Idades: " + somaIdade + "\n Produto das idades: " + produtoIdade)

    } else {

        somaIdade = idadeHomem2 + idadeMulher2;
        produtoIdade = idadeHomem1 * idadeMulher1;

        alert(" Idade homem mais velho: " + idadeHomem2 + "\n Idade homem mais novo: " + idadeHomem1 + "\n Idade mulher mais velha: " + idadeMulher1 + "\n Idade da mulher mais nova: " + idadeMulher2)
        alert(" Soma das Idades: " + somaIdade + "\n Produto das idades: " + produtoIdade)

    }
}

function exercicio37() {

    alert("Programa que calcula desconto a partir da quantidade de frutas compradas.")

    let kgMacas = parseInt(prompt("Insira quantos quilos de maçã o cliente comprou: "));
    let kgMorangos = parseInt(prompt("Insira quantos quilos de morangos o cliente comprou: "));
    let valorMaca;
    let valorMorango;
    let kgTotal = kgMacas + kgMorangos;
    let valor;
    let valorTotal;
    let desconto;

    if (kgMacas <= 5 && kgMorangos <= 5) {

        valorMaca = 1.80 * kgMacas
        valorMorango = 2.50 * kgMorangos
        valorTotal = valorMorango + valorMaca

    } else if (kgMacas <= 5 && kgMorangos > 5) {

        valorMaca = 1.80 * kgMacas
        valorMorango = 2.20 * kgMorangos
        valorTotal = valorMorango + valorMaca

    } else { // kgMacas > 5 && kgMorangos > 5

        valorMaca = 1.50 * kgMacas
        valorMorango = 2.20 * kgMorangos
        valorTotal = valorMorango + valorMaca

    }

    if (kgTotal > 8 || valorTotal > 25) {

        valor = valorMaca + valorMorango
        desconto = valorTotal * 0.1
        valorTotal = valor - desconto
        alert(valorTotal.toFixed(2))

    } else {

        alert(valorTotal.toFixed(2))

    }

}

function exercicio38() {

    alert("Programa que valida usuário e senha de sistema. Usuário padrão (1234) | Senha padrão (9999).")

    let insiraUsuario = prompt("Insira o usuário: ");
    let insiraSenha = prompt("Insira a senha: ");
    let usuarioCorreto = 1234; //pode alterar o usuário correto por aqui
    let senhaCorreta = 9999; //pode alterar a senha correta por aqui

    if (insiraUsuario == usuarioCorreto) {

        if (insiraSenha == senhaCorreta) {

            alert("Usuário e senha corretos. Acesso liberado.")

        } else {

            alert("Senha incorreta. Acesso negado.")

        }

    } else {

        alert("Usuário incorreto. Acesso negado.")

    }

}


function exercicio40() {

    alert("Programa que calcula desconto na compra do produto baseado em seu nome, quantidade e preço da unidade.")

    let nome = parseInt(prompt("Insira o nome do produto: "));
    let quantidadeProduto = parseInt(prompt("Insira a quantidade que deseja do produto: "));
    let valorUnidade = parseInt(prompt("Insira o valor da unidade do produto: "));
    let total = quantidadeProduto * valorUnidade
    let desconto = 0;
    let valorTotal;

    if (quantidadeProduto <= 5) {

        desconto = total * 0.02

        valorTotal = total - desconto

        alert("2% de desconto. Total: R$" + valorTotal)

    } else if (quantidadeProduto > 5 && quantidadeProduto < 10) {

        desconto = total * 0.03

        valorTotal = total - desconto

        valorTotal = total - desconto;

        alert("3% de desconto. Total: R$" + valorTotal)

    } else {

        desconto = total * 0.05

        valorTotal = total - desconto;

        alert("5% de desconto. Total: R$" + valorTotal)

    }

}

function exercicio41() {

    alert("Programa que receber 3 nota de um aluno, calcula a média dos exercicios e a média de aproveitamento das provas.")

    let nota1 = parseFloat(prompt("Insira a primeira nota do aluno: "));
    let nota2 = parseFloat(prompt("Insira a primeira nota do aluno: "));
    let nota3 = parseFloat(prompt("Insira a primeira nota do aluno: "));
    let mediaExercicios = parseFloat((nota1 + nota2 + nota3) / 3);
    let mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7;

    if (mediaAproveitamento >= 9) {

        alert("Conceito: A")

    } else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {

        alert("Conceito: B")

    } else if (mediaAproveitamento >= 6 && mediaAproveitamento < 7) {

        alert("Conceito: C")

    } else {

        alert("Conceito: D")

    }


}

function exercicio42() {

    alert("Programa que verifica as condições necessárias e diz se o funcionário está ou não apto a receber aposentadoria.")

    let codigo = prompt("Insira o código do empregado que deseja conferir.")
    let anoNascimento = prompt("Insira o ano de nascimento do funcionário.");
    let anoEmpresa = prompt("Insira o ano em que o funcionário entrou na empresa.");
    let anoAtual = prompt("Insira o ano atual.");
    let idade = parseInt(anoAtual - anoNascimento);
    let anosTrabalhados = parseInt(anoAtual - anoEmpresa);

    if (idade >= 65) {

        alert("O funcionário tem " + idade + " anos de idade.")
        alert("E " + anosTrabalhados + " anos trabalhados na empresa.")
        alert("Requer aposentadoria.")

    } else if (anosTrabalhados >= 30) {

        alert("O funcionário tem " + idade + " anos de idade.")
        alert("E " + anosTrabalhados + " anos trabalhados na empresa.")
        alert("Requer aposentadoria.")

    } else if (idade >= 60 && anosTrabalhados >= 25) {

        alert("O funcionário tem " + idade + " anos de idade.")
        alert("E " + anosTrabalhados + " anos trabalhados na empresa.")
        alert("Requer aposentadoria.")

    } else {

        alert("O funcionário tem " + idade + " anos de idade.")
        alert("E " + anosTrabalhados + " anos trabalhados na empresa.")
        alert("Não requer aposentadoria.")

    }

}

function exercicio44() {

    alert("Programa que calcula a divisao de dois valores. O segundo valor não pode ser 0, se for, solicita outro valor. - ESTRUTURA REPITA")

    let numero1, numero2, divisao;

    do {

        numero1 = parseFloat(prompt("Insira o primeiro número: "));
        numero2 = parseFloat(prompt("Insira o segundo número: "));

    } while (numero2 == 0)

    divisao = numero1 / numero2
    alert("O resultado da divisão é: " + divisao)

}

function exercicio45() {

    alert("Sim sim sim")

    let numero1;
    let numero2;
    let divisao;

    numero1 = parseFloat(prompt("Insira o primeiro número: "));
    numero2 = parseFloat(prompt("Insira o segundo número: "));

    while (numero2 == 0) {

        alert("Valor inválido! Digite um número diferente de 0.")
        numero2 = parseFloat(prompt("Insira o segundo valor novamente: "));

    }

    divisao = numero1 / numero2;
    alert("O resultado da divisão é: " + divisao)

}

function exercicio46() {

    alert("Programa que calcula a divisao de dois valores. O segundo valor não pode ser 0, se for, solicita outro valor. Caso seja 0 retornar valor inválido - ESTRUTURA REPITA")

    let numero1, numero2, divisao;

    numero1 = parseFloat(prompt("Insira o primeiro número: "));

    do {

        numero2 = parseFloat(prompt("Insira o segundo número: "));

        if (numero2 == 0) {

            alert("Valor inválido, insira um valor diferente de 0.")

        }

    } while (numero2 == 0)

    divisao = numero1 / numero2
    alert("O resultado da divisão é: " + divisao)

}

function exercicio47() {

    alert("Programa que calcula a divisao de dois valores. O segundo valor não pode ser 0, se for, solicita outro valor. Caso seja 0 retornar valor inválido - ESTRUTURA ENQUANTO")

    let numero1, numero2, divisao;

    while (numero2 != 0) {

        divisao = numero1 / numero2
        alert("O resultado da divisão é: " + divisao)
        alert("Numero invalido")

    }

}

function exercicio48() {

    alert("Escreva  um  algoritmo  para  ler  as  notas  da  1a.  e  2a.  avaliações  de um  aluno,  calcule  e  imprima  a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. ")

    let nota1 = parseFloat(prompt("Insira a primeira nota: "));
    let nota2 = parseFloat(prompt("Insira a segunda nota: "));


    while (nota1 < 0 || nota1 > 10) {

        alert("Nota 1 inválida! Insira um valor de 0 a 10.")
        nota1 = parseFloat(prompt("Insira a primeira nota: "));

    }

    while (nota2 < 0 || nota2 > 10) {

        alert("Nota 2 inválida! Insira um valor de 0 a 10.")
        nota2 = parseFloat(prompt("Insira a segunda nota: "));

    }

    let media = (nota1 + nota2) / 2;
    alert("Nota 1: " + nota1 + "\n Nota 2: " + nota2 + "\n Sua média é: " + media)

}

function exercicio49() {

    alert("Acrescente  uma  mensagem 'NOVO  CÁLCULO  (S/N)?'  ao  final  do  exercício  [48].  Se  for respondido 'S' deve retornar e executar um novo cálculo, caso contrário deverá encerrar o algoritmo.")

    let novoCalc = "s";

    while (novoCalc == "s") {

        let nota1 = parseFloat(prompt("Insira a primeira nota: "));
        let nota2 = parseFloat(prompt("Insira a segunda nota: "));

        while (nota1 < 0 || nota1 > 10) {

            alert("Nota 1 inválida! Insira um valor de 0 a 10.")
            nota1 = parseFloat(prompt("Insira a primeira nota: "));

        }

        while (nota2 < 0 || nota2 > 10) {

            alert("Nota 2 inválida! Insira um valor de 0 a 10.")
            nota2 = parseFloat(prompt("Insira a segunda nota: "));

        }

        let media = (nota1 + nota2) / 2;
        alert("Nota 1: " + nota1 + "\n Nota 2: " + nota2 + "\n Sua média é: " + media)

        novoCalc = prompt("Deseja realizar um novo cálculo? (s/n)");

    }

}

function exercicio50() {

    alert("Escreva um algoritimo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem crescente. *CONSOLE.LOG*")

    for (let contador = 1; contador <= 10; contador++) {

        console.log(contador)

    }

}

function exercicio51() {

    alert("Escreva  um  algoritmo  para  imprimir  os  números  de  1  (inclusive)  a  10  (inclusive)  em  ordem decrescente. ")

    for (let index = 10; index >= 0; index--) {

        console.log(index)

    }

}

function exercicio52() {

    alert("Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. ")

    for (let numero = 101; numero < 111; numero++) {

        console.log(numero)

    }

}

function exercicio53() {

    alert("Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. ")

    let numero = parseInt(prompt("Insira um número."));

    for (let contador = 1; contador <= numero; contador++) {

        console.log(contador)

    }

}

function exercicio54() {

    alert("Modifique o  exercício anterior para aceitar somente  valores maiores  que 0 para N. Caso o valor informado (para N) não seja maior que 0, deverá ser lido um novo valor para N.")

    let numero = parseInt(prompt("Insira um número."));

    for (let contador = 1; contador <= numero; contador++) {

        if (numero > 0) {

            console.log(contador)

        } else {

            console.log("Insira um número maior que 0.")

        }

    }

    //terminar

}

function exercicio55() {
    
    alert("Escreva um algoritmo que calcule e imprima a tabuada do 8 (1 a 10).")

    for (let contador = 1; contador < 11; contador++) {
        
        console.log("8" + " X " + contador + " = " + 8 * contador)
        
    }

}

function exercicio56() {
    
    alert("Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.")

    let numero = parseInt(prompt("Insira o número que deseja realizar a tabuada: "));

    for (let contador = 1; contador < 11; contador++) {
        
        console.log(numero + " X " + contador + " = " + numero * contador)
        
    }

}
