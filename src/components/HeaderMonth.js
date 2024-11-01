export default function HeaderMonth({ date }) {
    const ptBRDateFormater = new Intl.DateTimeFormat('pt-BR', {
        month: 'long',
        year: 'numeric',
    });
    return (
        <header>
            <h2 className="main_title">{ptBRDateFormater.format(date)}</h2>
        </header>
    );
}
