package br.ifes.ps.calculadora.view;
import br.ifes.ps.calculadora.controller.ControllerCalc;
import br.ifes.ps.calculadora.model.Operacao;
import org.reflections.Reflections;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.Set;

public class Menu {

    public void show() {
        Scanner scanner = new Scanner(System.in);
        Reflections reflections = new Reflections("br.ifes.ps.calculadora.model");
        int opcao;
        do {
            //buscar todas as classes que implementam Operacao
            Set<Class<? extends Operacao>> classesOperacoes =
                    reflections.getSubTypesOf(Operacao.class);

            //passar p lista p fácil manipulação
            List<Class<? extends Operacao>> operacoesList =
                    new ArrayList<>(classesOperacoes);

            System.out.println("CALCULADORA");
            System.out.println(" ");
            System.out.println("Escolha a operação:");
            System.out.println(" ");

            for (int i = 0; i < operacoesList.size(); i++) {
                System.out.println((i + 1) + " - " + operacoesList.get(i).getSimpleName());
            }

            System.out.println("0 - Sair");
            System.out.print("Opção: ");
            opcao = scanner.nextInt();

            if (opcao == 0) break;

            if (opcao < 1 || opcao > operacoesList.size()) {
                System.out.println("Opção inválida! Tente novamente.");
                continue;
            }

            try {
                //obter a classe escolhida
                Class<? extends Operacao> classeSelecionada =
                        operacoesList.get(opcao - 1);

                //instanciar operação da classe escolhida
                Operacao operacao =
                        classeSelecionada.getDeclaredConstructor().newInstance();

                //ler números
                System.out.print("Digite o primeiro número: ");
                double num1 = scanner.nextDouble();

                double num2 = 0;

                if (operacao.getNumeroOperandos() == 2) {
                    System.out.print("Digite o segundo número: ");
                    num2 = scanner.nextDouble();
                }

                //controller executa a operação
                ControllerCalc controller = new ControllerCalc();
                double resultado = controller.operacaoCalcular(operacao, num1, num2);

                System.out.println("Resultado: " + resultado);

            } catch (Exception e) {
                System.out.println("Erro ao executar operação: " + e.getMessage());
            }

        } while (opcao != 0);




        System.out.println("Calculadora encerrada.");
    }
}
