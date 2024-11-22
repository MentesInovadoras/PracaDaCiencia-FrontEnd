import styles from './ADMdiario.module.css'

export default function Diario() {
  return (
    <>
      <main className={styles.content}>
        <div className={styles.data}>
          <button id="prevDay">&lt;</button>
          <h1 className={styles.ADM_selected_day}>Dia atual</h1>
          <button id="nextDay">&gt;</button>
        </div>
        <div className={styles.cardConteiner}>
          <div className={styles.cardDiario}>
            <h1 className={styles.dataAgendamento}>DD/MM/AAAA</h1>
            <h1 className={styles.horaAgendamento}>HH:MM</h1>
            <h1 className={styles.responsavelAgendamentoTitle}>Responsável:</h1>
            <h1 className={styles.responsavelAgendamento}>"Nome Sobrenome"</h1>
            <h1 className={styles.visitanteAgendamentoTitle}>Visitante/Instituição:</h1>
            <h1 className={styles.visitanteAgendamento}>"Nome Sobrenome"</h1>
          </div>
          <div className={styles.card}>
            <h1 className={styles.dataAgendamento}>DD/MM/AAAA</h1>
            <h1 className={styles.horaAgendamento}>HH:MM</h1>
            <h1 className={styles.responsavelAgendamentoTitle}>Responsável:</h1>
            <h1 className={styles.responsavelAgendamento}>"Nome Sobrenome"</h1>
            <h1 className={styles.visitanteAgendamentoTitle}>Visitante/Instituição:</h1>
            <h1 className={styles.visitanteAgendamento}>"Nome Sobrenome"</h1>
          </div>
          <div className={styles.card}>
            <h1 className={styles.dataAgendamento}>DD/MM/AAAA</h1>
            <h1 className={styles.horaAgendamento}>HH:MM</h1>
            <h1 className={styles.responsavelAgendamentoTitle}>Responsável:</h1>
            <h1 className={styles.responsavelAgendamento}>"Nome Sobrenome"</h1>
            <h1 className={styles.visitanteAgendamentoTitle}>Visitante/Instituição:</h1>
            <h1 className={styles.visitanteAgendamento}>"Nome Sobrenome"</h1>
          </div>
          <div className={styles.card}>
            <h1 className={styles.dataAgendamento}>DD/MM/AAAA</h1>
            <h1 className={styles.horaAgendamento}>HH:MM</h1>
            <h1 className={styles.responsavelAgendamentoTitle}>Responsável:</h1>
            <h1 className={styles.responsavelAgendamento}>"Nome Sobrenome"</h1>
            <h1 className={styles.visitanteAgendamentoTitle}>Visitante/Instituição:</h1>
            <h1 className={styles.visitanteAgendamento}>"Nome Sobrenome"</h1>
          </div>
        </div>
      </main>
    </>
  );
}