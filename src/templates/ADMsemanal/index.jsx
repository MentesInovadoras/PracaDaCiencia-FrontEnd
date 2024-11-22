import styles from './ADMsemanal.module.css'

export default function semanal(){
    return(
    <>
<main className={styles.semanalTable}>
    <table>
        <tr>
            <th>Data</th>
            <th>Hora</th>
            <th>Responsável</th>
            <th>Instituição</th>
            <th>Roteiro</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>DD/MM</td>
            <td>HH/MM</td>
            <td>Primeiro Nome</td>
            <td>IFES campus Serra</td>
            <td>Roteiro</td>
            <td>A Confirmar</td>
            <td className={styles.trash}>lixeira</td>
        </tr>
        <tr>
            <td>a</td>
            <td>b</td>
            <td>c</td>
            <td>d</td>
            <td>e</td>
            <td>f</td>
            <td className={styles.trash}>lixeira</td>
        </tr>
    </table>
</main>
    </>
    )
}