import PhraseWhite from "../../Phrase-white"
import PhraseBlue from "../../Phrase-blue"
import "../../../Styles/Section-Part-Two-Main.sass"

export default function Section_Part_Two() {
    return (
        <section id="container-grid">
            <div id="area-one"></div>
            <div id="area-two">
                <section>
                    <PhraseWhite />
                    <h2>O clima perfeito, no lugar perfeito</h2>
                    <p>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</p>
                    <button>AGENDAR</button>
                </section>
            </div>
            <div id="area-three">
                <section>
                    <PhraseBlue />
                    <h2>Curta uma nova vibe entre amigos</h2>
                    <p>Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos <b>Planos Multi</b>.</p>
                    <button>AGENDAR</button>
                </section>
            </div>
            <div id="area-four"></div>
            <div id="area-five"></div>
            <div id="area-six">
                <section>
                    <PhraseWhite />
                    <h2>Algumas experiências são inexplicáveis</h2>
                    <p>Conheça as fontes termais de <b>Caldas Novas, Goiás</b>. <span id="font-weigth-phrase">Águas quentes, num clima sereno, relaxante e natural.</span></p>
                    <button>AGENDAR</button>
                </section>
            </div>
            <div id="area-seven">
                <button className="button-area-seven">RIO DE JANEIRO</button>
            </div>
            <div id="area-eight">
                <button className="button-area-seven">RIO DAS OSTRAS</button>
            </div>
            <div id="area-nine">
                <button className="button-area-seven">CALDAS NOVAS</button>
            </div>
            <div id="area-teen">
                <button className="button-area-seven">AMAZÔNIA</button>
            </div>
        </section>
    )
}