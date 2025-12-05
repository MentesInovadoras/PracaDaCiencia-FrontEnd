package br.ifes.ps.calculadora.model;

public class Calculadora {
    public double executarOperacao(Operacao operacao, double a, double b) {
        return operacao.executar(a, b);
    }
}
