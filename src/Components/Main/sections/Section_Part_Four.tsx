import "../../../Styles/Section-Part-Four-Main-style.sass"

export default function Section_Part_Four() {
    return(
        <section id="section_part_four">
            <h2>Fale conosco</h2>
            <input type="email"  placeholder="Diga o seu melhor email"/>
            <input type="text" placeholder="Assunto" />
            <textarea cols={30} rows={10} placeholder="Escreva a sua mensagem"></textarea>
            <button type="submit">ENVIAR</button>
        </section>
    )
}