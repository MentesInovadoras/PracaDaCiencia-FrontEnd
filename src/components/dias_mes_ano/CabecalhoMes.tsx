interface CabecalhoMesProps {
  date: Date;
}

export default function CabecalhoMes({ date }: CabecalhoMesProps) {
    const ptBRDateFormater = new Intl.DateTimeFormat('pt-BR', {
        month: 'long',
        year: 'numeric',
    });

    const formattedDate = capitalizeFirstLetter(ptBRDateFormater.format(date));

    return (
        <div className="cabecalho_calendario">
            <h2 className="mes_ano">{formattedDate}</h2>
        </div>
    );
}

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
