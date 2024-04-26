import {ReiseplanerForm} from "../components/ReiseplanerForm.tsx";
import {ReiseplanerDisplay} from "../components/ReiseplanerDisplay.tsx";
import {useState} from "react";
import {NewPacklist} from "../types";

function Reiseplaner() {
    const [finished, setfinished]=useState<boolean>(false)

    function createReiseplaner(packlist:NewPacklist){

        packlist.schluss
        setfinished(true)
    }

    return (
        <>

            <ReiseplanerForm onSave={createReiseplaner}></ReiseplanerForm>
            {finished ? <ReiseplanerDisplay></ReiseplanerDisplay>:
            <p></p>}



        </>
    )
}

export default Reiseplaner