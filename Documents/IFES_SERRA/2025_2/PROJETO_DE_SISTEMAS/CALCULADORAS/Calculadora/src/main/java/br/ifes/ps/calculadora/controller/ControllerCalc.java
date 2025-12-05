package br.ifes.ps.calculadora.controller;

import br.ifes.ps.calculadora.model.*;

public class ControllerCalc {

    public double operacaoCalcular(Operacao operacao, double a, double b) {
        return operacao.executar(a, b);
    }
}
