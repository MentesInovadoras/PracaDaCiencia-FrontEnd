package br.ifes.ps.calculadora.model;

public class Dividir implements Operacao {
    @Override
    public double executar(double a, double b) {
        if (b == 0) throw new ArithmeticException("Divisão por zero não permitida!");
        return a / b;
    }
    @Override
    public int getNumeroOperandos() {
        return 2;
    }
}
