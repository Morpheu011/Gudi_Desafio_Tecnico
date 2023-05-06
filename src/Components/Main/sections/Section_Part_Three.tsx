import "../../../Styles/Section-Part-Three-Main-style.sass"
import img_one from "../../../Images/Main/primeira.png"
import img_two from "../../../Images/Main/segunda.png"
import img_three from "../../../Images/Main/terceira.png"
import img_four from "../../../Images/Main/quarta.png"
import img_five from "../../../Images/Main/penultima.png"
import img_six from "../../../Images/Main/ultima.png"
import icon_one from "../../../Images/Main/um.png"
import icon_two from "../../../Images/Main/dois.png"
import icon_three from "../../../Images/Main/três.png"
import icon_four from "../../../Images/Main/quatro.png"


export default function Section_Part_Three() {
    return (
        <section id="container_section_three">
            <span id="box-title">
                <h3>use a hashtag #brasilisverigudi</h3>
                <h2 id="teste">Nosso mural de Experiências</h2>
            </span>
            <div id="grid_gallery">
                <div id="box-one"> <img src={img_one} alt="Homem jogando crinça pro alto" /></div>
                <div id="box-two"> <img src={img_two} alt="Crianças pulando na pria" /></div>
                <div id="box-three"> <img src={img_three} alt="Homem tirando selfie com cachorro" /></div>
                <div id="box-four"> <img src={img_four} alt="Homem tirando selfie de si mesmo" /></div>
                <div id="box-five"> <img src={img_five} alt="Mulher tirando selfie de si mesma de bike no meio de uma rodovia" /></div>
                <div id="box-six"> <img src={img_six} alt="Grupo de mulheres tirando selfie" /></div>
            </div>
            <div id="box-two-container">
                <span>
                    <img src={icon_one} alt="" />
                    <h6>O melhor do Brasil</h6>
                </span>
                <span>
                    <img src={icon_two} alt="" />
                    <h6>Cidades mais frequentadas</h6>
                </span>
                <span>
                    <img src={icon_three} alt="" />
                    <h6>Pontos  turísticos</h6>
                </span>
                <span>
                    <img src={icon_four} alt="" />
                    <h6>Restaurantes</h6>
                </span>
            </div>
        </section>
    )
}
