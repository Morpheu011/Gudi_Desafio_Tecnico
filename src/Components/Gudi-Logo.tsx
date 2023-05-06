import GudiLogoImage from "../Images/Header/Gudi logo.svg"
import "../Styles/GudiLogo.sass"

export default function GudiLogo() {
    return (
            <div id="container_logo">
                <img src={GudiLogoImage} alt="Gudi Logo" />
                <h2>O bom da vida é viver</h2>
            </div>
    )
}