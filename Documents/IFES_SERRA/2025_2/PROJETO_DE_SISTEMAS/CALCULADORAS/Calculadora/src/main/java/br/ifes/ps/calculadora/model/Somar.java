package br.ifes.ps.calculadora.model;

public class Somar implements Operacao {
    @Override
    public double executar(double a, double b) {
        return a + b;
    }
    
    @Override
    public int getNumeroOperandos(){
        return 2;
    }
}
