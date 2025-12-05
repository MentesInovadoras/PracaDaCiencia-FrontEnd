package br.ifes.ps.calculadora.model;

public interface Operacao {
    double executar(double a, double b);
    int getNumeroOperandos();
}
