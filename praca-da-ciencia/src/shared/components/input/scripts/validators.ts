/**
 * @description Função de validção que verifica que o input está vazio
 * @param obj valor contido no input
 */
export function cantBeEmpty(obj: string): boolean | string
{
    if(obj != null && obj != undefined && obj.length > 0)
        { return true; }
    return "O campo não pode ser nulo";
}


/**
 * 
 * @param cpf cpf que deseja-se validar
 * @returns 
 *  true se o CPF for válido
 *  string se tiver algum erro
 */
export function validateCPF(cpf: string): boolean | string {
  // Remove pontos e traços
  const cleaned = cpf.replace(/\D/g, '');

  // Verifica se tem 11 dígitos
  if (cleaned.length !== 11) return "CPF deve conter 11 dígitos";

  // Elimina CPFs com todos os dígitos iguais
  if (/^(\d)\1+$/.test(cleaned)) return "CPF inválido";

  // Cálculo do primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cleaned[i]) * (10 - i);
  }
  let primeiroDigito = (soma * 10) % 11;
  if (primeiroDigito === 10) primeiroDigito = 0;

  // Verifica primeiro dígito
  if (primeiroDigito !== parseInt(cleaned[9])) return "CPF inválido";

  // Cálculo do segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cleaned[i]) * (11 - i);
  }
  let segundoDigito = (soma * 10) % 11;
  if (segundoDigito === 10) segundoDigito = 0;

  // Verifica segundo dígito
  if (segundoDigito !== parseInt(cleaned[10])) return "CPF inválido";

  return true;
}


export function validateTelefone(telefone: string): boolean | string {
  const numeros = telefone.replace(/\D/g, '');

  if (numeros.length < 10 || numeros.length > 11) {
    return "Número de telefone deve conter 10 ou 11 dígitos";
  }

  const ddd = numeros.slice(0, 2);
  const corpo = numeros.slice(2);

  // Validação do DDD simples (sem lista oficial)
  if (!/^[1-9][0-9]$/.test(ddd)) {
    return "DDD inválido";
  }

  if (numeros.length === 11 && !corpo.startsWith('9')) {
    return "Telefone celular deve começar com 9";
  }

  return true;
}


export function validateEmail(email: string): boolean | string
{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email))
  {
    return "E-mail inválido";
  }

  return true;
}

