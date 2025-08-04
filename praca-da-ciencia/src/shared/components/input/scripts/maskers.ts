/**
 * Adiciona máscara no CPF (XXX.XXX.XXX-XX)
 */
export function maskCPF(cpf: string): string {
  const apenasNumeros = cpf.replace(/\D/g, '').slice(0, 11);
  if (apenasNumeros.length !== 11) return apenasNumeros;

  return apenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Remove qualquer máscara de um CPF
 */
export function removeMaskCPF(cpf: string): string {
  return cpf.replace(/\D/g, '').slice(0, 11);
}



export function maskTelefone(telefone: string): string {
  const numeros = telefone.replace(/\D/g, '').slice(0, 11);

  if (numeros.length <= 10) {
    return numeros.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else {
    return numeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
}


export function removeMaskTelefone(telefone: string): string {
  return telefone.replace(/\D/g, '').slice(0, 11);
}


