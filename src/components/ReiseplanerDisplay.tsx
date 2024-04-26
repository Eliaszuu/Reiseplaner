import {Checkbox} from "antd";


export function ReiseplanerDisplay() {
    return (
        <>
            <div className="checklist">
                <div>
                    <h1>Kleider</h1>
                    <p><Checkbox></Checkbox> 10x Unterhosen</p>
                    <p><Checkbox></Checkbox> 5x T-shirts</p>
                    <p><Checkbox></Checkbox> 3x Pullover</p>
                    <p><Checkbox></Checkbox> 4x Hosen</p>
                    <p><Checkbox></Checkbox> 10x Socken</p>
                    <p><Checkbox></Checkbox> 2x handschuhe</p>
                    <p><Checkbox></Checkbox> 2x schuhe</p>
                    <p><Checkbox></Checkbox> 1x kappe</p>
                    <p><Checkbox></Checkbox> 2x jacke</p>
                </div>
                <div>
                    <h1>Utensilien</h1>
                    <p><Checkbox></Checkbox> SonnenCreme</p>
                    <p><Checkbox></Checkbox> Zelt</p>
                    <p><Checkbox></Checkbox> ID</p>
                    <p><Checkbox></Checkbox> Handy</p>
                    <p><Checkbox></Checkbox> Geld</p>
                    <p><Checkbox></Checkbox> Essen für Hinfahrt</p>
                    <p><Checkbox></Checkbox> Trinken 1.5l</p>
                    <p><Checkbox></Checkbox> boarding-Karte</p>
                    <p><Checkbox></Checkbox> Freunde</p>
                </div>


            </div>
        </>
    )
}