import {Button, Cascader, DatePicker, Form, Radio, Slider,} from 'antd';
import {useState} from "react";
import {NewPacklist} from "../types";

const {RangePicker} = DatePicker;

interface Option {
    value: string | number;
    label: string;
    children?: Option[];
}

type PacklistProps = {
    onSave: (packlist: NewPacklist) => void,
}

const options: Option[] = [
    {
        "value": "Afrika",
        "label": "Afrika",
        "children": [
            {
                "value": "Ägypten",
                "label": "Ägypten"
            },
            {
                "value": "Algerien",
                "label": "Algerien"
            },
            {
                "value": "Angola",
                "label": "Angola"
            },
            {
                "value": "Äquatorialguinea",
                "label": "Äquatorialguinea"
            },
            {
                "value": "Benin",
                "label": "Benin"
            },
            {
                "value": "Botswana",
                "label": "Botswana"
            },
            {
                "value": "Burkina Faso",
                "label": "Burkina Faso"
            },
            {
                "value": "Burundi",
                "label": "Burundi"
            },
            {
                "value": "Dschibuti",
                "label": "Dschibuti"
            },
            {
                "value": "Elfenbeinküste",
                "label": "Elfenbeinküste"
            },
            {
                "value": "Eritrea",
                "label": "Eritrea"
            },
            {
                "value": "Eswatini",
                "label": "Eswatini"
            },
            {
                "value": "Äthiopien",
                "label": "Äthiopien"
            },
            {
                "value": "Gabun",
                "label": "Gabun"
            },
            {
                "value": "Gambia",
                "label": "Gambia"
            },
            {
                "value": "Ghana",
                "label": "Ghana"
            },
            {
                "value": "Guinea",
                "label": "Guinea"
            },
            {
                "value": "Guinea-Bissau",
                "label": "Guinea-Bissau"
            },
            {
                "value": "Kamerun",
                "label": "Kamerun"
            },
            {
                "value": "Kap Verde",
                "label": "Kap Verde"
            },
            {
                "value": "Kenia",
                "label": "Kenia"
            },
            {
                "value": "Komoren",
                "label": "Komoren"
            },
            {
                "value": "Kongo-Brazzaville",
                "label": "Kongo-Brazzaville"
            },
            {
                "value": "Kongo-Kinshasa",
                "label": "Kongo-Kinshasa"
            },
            {
                "value": "Lesotho",
                "label": "Lesotho"
            },
            {
                "value": "Liberia",
                "label": "Liberia"
            },
            {
                "value": "Libyen",
                "label": "Libyen"
            },
            {
                "value": "Madagaskar",
                "label": "Madagaskar"
            },
            {
                "value": "Malawi",
                "label": "Malawi"
            },
            {
                "value": "Mali",
                "label": "Mali"
            },
            {
                "value": "Marokko",
                "label": "Marokko"
            },
            {
                "value": "Mauretanien",
                "label": "Mauretanien"
            },
            {
                "value": "Mauritius",
                "label": "Mauritius"
            },
            {
                "value": "Mosambik",
                "label": "Mosambik"
            },
            {
                "value": "Namibia",
                "label": "Namibia"
            },
            {
                "value": "Niger",
                "label": "Niger"
            },
            {
                "value": "Nigeria",
                "label": "Nigeria"
            },
            {
                "value": "Ruanda",
                "label": "Ruanda"
            },
            {
                "value": "São Tomé und Príncipe",
                "label": "São Tomé und Príncipe"
            },
            {
                "value": "Senegal",
                "label": "Senegal"
            },
            {
                "value": "Seychellen",
                "label": "Seychellen"
            },
            {
                "value": "Sierra Leone",
                "label": "Sierra Leone"
            },
            {
                "value": "Simbabwe",
                "label": "Simbabwe"
            },
            {
                "value": "Somalia",
                "label": "Somalia"
            },
            {
                "value": "Südafrika",
                "label": "Südafrika"
            },
            {
                "value": "Sudan",
                "label": "Sudan"
            },
            {
                "value": "Südsudan",
                "label": "Südsudan"
            },
            {
                "value": "Tansania",
                "label": "Tansania"
            },
            {
                "value": "Togo",
                "label": "Togo"
            },
            {
                "value": "Tschad",
                "label": "Tschad"
            },
            {
                "value": "Tunesien",
                "label": "Tunesien"
            },
            {
                "value": "Uganda",
                "label": "Uganda"
            },
            {
                "value": "Sambia",
                "label": "Sambia"
            }
        ]
    },
    {
        "value": "Europa",
        "label": "Europa",
        "children": [
            {
                "value": "Albanien",
                "label": "Albanien"
            },
            {
                "value": "Andorra",
                "label": "Andorra"
            },
            {
                "value": "Belgien",
                "label": "Belgien"
            },
            {
                "value": "Bosnien und Herzegowina",
                "label": "Bosnien und Herzegowina"
            },
            {
                "value": "Bulgarien",
                "label": "Bulgarien"
            },
            {
                "value": "Dänemark",
                "label": "Dänemark"
            },
            {
                "value": "Deutschland",
                "label": "Deutschland"
            },
            {
                "value": "Estland",
                "label": "Estland"
            },
            {
                "value": "Finnland",
                "label": "Finnland"
            },
            {
                "value": "Frankreich",
                "label": "Frankreich"
            },
            {
                "value": "Griechenland",
                "label": "Griechenland"
            },
            {
                "value": "Irland",
                "label": "Irland"
            },
            {
                "value": "Island",
                "label": "Island"
            },
            {
                "value": "Italien",
                "label": "Italien"
            },
            {
                "value": "Kosovo",
                "label": "Kosovo"
            },
            {
                "value": "Kroatien",
                "label": "Kroatien"
            },
            {
                "value": "Lettland",
                "label": "Lettland"
            },
            {
                "value": "Liechtenstein",
                "label": "Liechtenstein"
            },
            {
                "value": "Litauen",
                "label": "Litauen"
            },
            {
                "value": "Luxemburg",
                "label": "Luxemburg"
            },
            {
                "value": "Malta",
                "label": "Malta"
            },
            {
                "value": "Moldawien",
                "label": "Moldawien"
            },
            {
                "value": "Monaco",
                "label": "Monaco"
            },
            {
                "value": "Montenegro",
                "label": "Montenegro"
            },
            {
                "value": "Niederlande",
                "label": "Niederlande"
            },
            {
                "value": "Nordmazedonien",
                "label": "Nordmazedonien"
            },
            {
                "value": "Norwegen",
                "label": "Norwegen"
            },
            {
                "value": "Österreich",
                "label": "Österreich"
            },
            {
                "value": "Polen",
                "label": "Polen"
            },
            {
                "value": "Portugal",
                "label": "Portugal"
            },
            {
                "value": "Rumänien",
                "label": "Rumänien"
            },
            {
                "value": "Russland",
                "label": "Russland"
            },
            {
                "value": "San Marino",
                "label": "San Marino"
            },
            {
                "value": "Schweden",
                "label": "Schweden"
            },
            {
                "value": "Schweiz",
                "label": "Schweiz"
            },
            {
                "value": "Serbien",
                "label": "Serbien"
            },
            {
                "value": "Slowakei",
                "label": "Slowakei"
            },
            {
                "value": "Slowenien",
                "label": "Slowenien"
            },
            {
                "value": "Spanien",
                "label": "Spanien"
            },
            {
                "value": "Tschechien",
                "label": "Tschechien"
            },
            {
                "value": "Türkei",
                "label": "Türkei"
            },
            {
                "value": "Ukraine",
                "label": "Ukraine"
            },
            {
                "value": "Ungarn",
                "label": "Ungarn"
            },
            {
                "value": "Vereinigtes Königreich",
                "label": "Vereinigtes Königreich"
            },
            {
                "value": "Vatikanstadt",
                "label": "Vatikanstadt"
            }
        ]
    },
    {
        "value": "Asien",
        "label": "Asien",
        "children": [
            {
                "value": "Afghanistan",
                "label": "Afghanistan"
            },
            {
                "value": "Armenien",
                "label": "Armenien"
            },
            {
                "value": "Aserbaidschan",
                "label": "Aserbaidschan"
            },
            {
                "value": "Bahrain",
                "label": "Bahrain"
            },
            {
                "value": "Bangladesch",
                "label": "Bangladesch"
            },
            {
                "value": "Bhutan",
                "label": "Bhutan"
            },
            {
                "value": "Brunei",
                "label": "Brunei"
            },
            {
                "value": "China",
                "label": "China"
            },
            {
                "value": "Georgien",
                "label": "Georgien"
            },
            {
                "value": "Indien",
                "label": "Indien"
            },
            {
                "value": "Indonesien",
                "label": "Indonesien"
            },
            {
                "value": "Iran",
                "label": "Iran"
            },
            {
                "value": "Irak",
                "label": "Irak"
            },
            {
                "value": "Israel",
                "label": "Israel"
            },
            {
                "value": "Japan",
                "label": "Japan"
            },
            {
                "value": "Jemen",
                "label": "Jemen"
            },
            {
                "value": "Jordanien",
                "label": "Jordanien"
            },
            {
                "value": "Kambodscha",
                "label": "Kambodscha"
            },
            {
                "value": "Kasachstan",
                "label": "Kasachstan"
            },
            {
                "value": "Katar",
                "label": "Katar"
            },
            {
                "value": "Kirgisistan",
                "label": "Kirgisistan"
            },
            {
                "value": "Kuwait",
                "label": "Kuwait"
            },
            {
                "value": "Laos",
                "label": "Laos"
            },
            {
                "value": "Libanon",
                "label": "Libanon"
            },
            {
                "value": "Malaysia",
                "label": "Malaysia"
            },
            {
                "value": "Malediven",
                "label": "Malediven"
            },
            {
                "value": "Mongolei",
                "label": "Mongolei"
            },
            {
                "value": "Myanmar",
                "label": "Myanmar"
            },
            {
                "value": "Nepal",
                "label": "Nepal"
            },
            {
                "value": "Nordkorea",
                "label": "Nordkorea"
            },
            {
                "value": "Oman",
                "label": "Oman"
            },
            {
                "value": "Pakistan",
                "label": "Pakistan"
            },
            {
                "value": "Palästina",
                "label": "Palästina"
            },
            {
                "value": "Philippinen",
                "label": "Philippinen"
            },
            {
                "value": "Saudi-Arabien",
                "label": "Saudi-Arabien"
            },
            {
                "value": "Singapur",
                "label": "Singapur"
            },
            {
                "value": "Südkorea",
                "label": "Südkorea"
            },
            {
                "value": "Sri Lanka",
                "label": "Sri Lanka"
            },
            {
                "value": "Syrien",
                "label": "Syrien"
            },
            {
                "value": "Tadschikistan",
                "label": "Tadschikistan"
            },
            {
                "value": "Thailand",
                "label": "Thailand"
            },
            {
                "value": "Timor-Leste",
                "label": "Timor-Leste"
            },
            {
                "value": "Türkei",
                "label": "Türkei"
            },
            {
                "value": "Turkmenistan",
                "label": "Turkmenistan"
            },
            {
                "value": "Usbekistan",
                "label": "Usbekistan"
            },
            {
                "value": "Vereinigte Arabische Emirate",
                "label": "Vereinigte Arabische Emirate"
            },
            {
                "value": "Vietnam",
                "label": "Vietnam"
            }
        ]
    }, {
        "value": "Nordamerika",
        "label": "Nordamerika",
        "children": [
            {
                "value": "Antigua und Barbuda",
                "label": "Antigua und Barbuda"
            },
            {
                "value": "Bahamas",
                "label": "Bahamas"
            },
            {
                "value": "Barbados",
                "label": "Barbados"
            },
            {
                "value": "Belize",
                "label": "Belize"
            },
            {
                "value": "Costa Rica",
                "label": "Costa Rica"
            },
            {
                "value": "Dominica",
                "label": "Dominica"
            },
            {
                "value": "Dominikanische Republik",
                "label": "Dominikanische Republik"
            },
            {
                "value": "El Salvador",
                "label": "El Salvador"
            },
            {
                "value": "Grenada",
                "label": "Grenada"
            },
            {
                "value": "Guatemala",
                "label": "Guatemala"
            },
            {
                "value": "Haiti",
                "label": "Haiti"
            },
            {
                "value": "Honduras",
                "label": "Honduras"
            },
            {
                "value": "Jamaika",
                "label": "Jamaika"
            },
            {
                "value": "Kanada",
                "label": "Kanada"
            },
            {
                "value": "Kuba",
                "label": "Kuba"
            },
            {
                "value": "Mexiko",
                "label": "Mexiko"
            },
            {
                "value": "Nicaragua",
                "label": "Nicaragua"
            },
            {
                "value": "Panama",
                "label": "Panama"
            },
            {
                "value": "Saint Kitts und Nevis",
                "label": "Saint Kitts und Nevis"
            },
            {
                "value": "Saint Lucia",
                "label": "Saint Lucia"
            },
            {
                "value": "Saint Vincent und die Grenadinen",
                "label": "Saint Vincent und die Grenadinen"
            },
            {
                "value": "Trinidad und Tobago",
                "label": "Trinidad und Tobago"
            },
            {
                "value": "USA",
                "label": "USA"
            }
        ]
    }, {
        "value": "Südamerika",
        "label": "Südamerika",
        "children": [
            {
                "value": "Argentinien",
                "label": "Argentinien"
            },
            {
                "value": "Bolivien",
                "label": "Bolivien"
            },
            {
                "value": "Brasilien",
                "label": "Brasilien"
            },
            {
                "value": "Chile",
                "label": "Chile"
            },
            {
                "value": "Ecuador",
                "label": "Ecuador"
            },
            {
                "value": "Guyana",
                "label": "Guyana"
            },
            {
                "value": "Kolumbien",
                "label": "Kolumbien"
            },
            {
                "value": "Paraguay",
                "label": "Paraguay"
            },
            {
                "value": "Peru",
                "label": "Peru"
            },
            {
                "value": "Suriname",
                "label": "Suriname"
            },
            {
                "value": "Uruguay",
                "label": "Uruguay"
            },
            {
                "value": "Venezuela",
                "label": "Venezuela"
            }
        ]
    }, {
        "value": "Australien/Ozeanien",
        "label": "Australien/Ozeanien",
        "children": [
            {
                "value": "Australien",
                "label": "Australien"
            },
            {
                "value": "Fidschi",
                "label": "Fidschi"
            },
            {
                "value": "Kiribati",
                "label": "Kiribati"
            },
            {
                "value": "Marshallinseln",
                "label": "Marshallinseln"
            },
            {
                "value": "Mikronesien",
                "label": "Mikronesien"
            },
            {
                "value": "Nauru",
                "label": "Nauru"
            },
            {
                "value": "Neuseeland",
                "label": "Neuseeland"
            },
            {
                "value": "Palau",
                "label": "Palau"
            },
            {
                "value": "Papua-Neuguinea",
                "label": "Papua-Neuguinea"
            },
            {
                "value": "Samoa",
                "label": "Samoa"
            },
            {
                "value": "Salomonen",
                "label": "Salomonen"
            },
            {
                "value": "Tonga",
                "label": "Tonga"
            },
            {
                "value": "Tuvalu",
                "label": "Tuvalu"
            },
            {
                "value": "Vanuatu",
                "label": "Vanuatu"
            }
        ]
    }


];

export function ReiseplanerForm(props: PacklistProps) {

    const [form] = Form.useForm();


    const [packlist, setPacklist] = useState<NewPacklist>({
        PlaceToVisit: '',
        alter: 0,
        Schluss: new Date(),
        Start: new Date(),
        hygieneStufe: 0,
        id: '',
        type: 'Männlich',
    });


    const onFinish = (values: any) => {
        console.log('Form submitted with values:', values);

        console.log(values.Slider)


        setPacklist(() => ({
            alter: values.Slider,
            PlaceToVisit: values.Cascader ? values.Cascader[1] : '',
            Schluss: values.RangePicker ? values.RangePicker[1].toDate() : new Date(),
            Start: values.RangePicker ? values.RangePicker[0].toDate() : new Date(),
            hygieneStufe: parseInt(values.Radio2),
            type: values.Radio1 === 1 ? 'Männlich' : 'Weiblich',
        }));

        console.log('Updated packlist after timeout:', packlist);

        form.resetFields(); // Formular zurücksetzen
        console.log("penis")
        props.onSave(packlist)
    };


    return (
        <div className="formbackground">
            <Form form={form} onFinish={onFinish}>
                <Form.Item
                    label="Zeitraum der Reise"
                    name="RangePicker"
                    rules={[{required: true, message: 'Bitte Datum eingeben!'}]}
                >
                    <RangePicker/>
                </Form.Item>

                <Form.Item
                    label="Alter"
                    name="Slider"
                    rules={[{required: true, message: 'Bitte Alter eingeben!'}]}
                >
                    <Slider min={0} max={110} defaultValue={30}/>
                </Form.Item>

                <Form.Item
                    label="Geschlecht"
                    name="Radio1"
                    rules={[{required: true, message: 'Bitte Geschlecht auswählen!'}]}
                >
                    <Radio.Group>
                        <Radio value={1}>Männlich</Radio>
                        <Radio value={2}>Weiblich</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="Hygiene-Wichtigkeit"
                    name="Radio2"
                    rules={[{required: true, message: 'Bitte Hygiene-Wichtigkeit auswählen!'}]}
                >
                    <Radio.Group>
                        <Radio.Button value="1">Gar nicht wichtig</Radio.Button>
                        <Radio.Button value="2">Nicht wichtig</Radio.Button>
                        <Radio.Button value="3">Neutral</Radio.Button>
                        <Radio.Button value="4">Wichtig</Radio.Button>
                        <Radio.Button value="5">Sehr wichtig</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="Ort"
                    name="Cascader"
                    rules={[{required: true, message: 'Bitte Ort auswählen!'}]}
                >
                    <Cascader options={options} placeholder="Bitte auswählen"/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 6, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Packliste Erstellen
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}