import type { TDocumentDefinitions, Content } from "pdfmake/interfaces.js";
import type { DataObject } from "../types.js";
import officesObj from "./offices.js";
import dayjs from "dayjs";
import PdfMake from "pdfmake/build/pdfmake";
import PdfFonts from "pdfmake/build/vfs_fonts";

PdfMake.vfs = PdfFonts.pdfMake.vfs;

export class PDF {
    private data: DataObject;
    private current_date: string;
    private three_months_from_current_date: string;

    constructor(data: DataObject) {
        this.data = data;
        this.current_date = dayjs().format('DD.MM.YYYY');
        this.three_months_from_current_date = dayjs().add(3, 'months').format('DD.MM.YYYY');
    }

    generatePDF = () => {
        try {
            const doc_def: TDocumentDefinitions = {
                content: [],
                defaultStyle: {
                    fontSize: 12,
                    lineHeight: 1.2
                },
                pageSize: 'A4',
                pageMargins: [45, 60, 40, 60]
            }
            this.data.offices.forEach((office, index) => {
                const current_office = officesObj[office];
                if(current_office) {
                    if(Array.isArray(doc_def.content)) {
                        const leftStack = [
                            { text: (current_office.office == current_office.department) ? '' : current_office.office, margin: [0, 0, 0, 5] },
                            { text: current_office.department, margin: [0, 0, 0, 5] },
                            { text: current_office.address, margin: [0, 0, 0, 5] },
                            { text: current_office.postal, margin: [0, 0, 0, 5] },
                            { text: current_office.country, margin: [0, 0, 0, 5] }
                        ];
                        if (current_office.fax) {
                            leftStack.push({ text: '', margin: [0, 10, 0, 0] });
                            leftStack.push({ text: `Fax: ${current_office.fax}`, margin: [0, 0, 0, 5] });
                        }
            
                        const rightStack = [
                            { text: this.data.name || "Name: __________________________", margin: [0, 0, 0, 5] },
                            { text: this.data.street || "Straße: _________________________", margin: [0, 0, 0, 5] },
                            { text: `${this.data.city || "Stadt: _______________"} ${this.data.zip_code || "PLZ: ______"}`, margin: [0, 0, 0, 5] },
                            { text: `Geboren am: ${this.data.date_of_birth  || "____________________"}`, margin: [0, 0, 0, 5] },
                            { text: `in: ${this.data.place_of_birth || "______________________________"}`, margin: [0, 0, 0, 5] }
                        ];
            
                        doc_def.content.push(
                            {
                                columns: [
                                    {
                                        width: '45%',
                                        stack: leftStack
                                    },
                                    {
                                        width: '20%',
                                        text: ''
                                    },
                                    {
                                        width: '40%',
                                        stack: rightStack
                                    }
                                ],
                                columnGap: 10
                            },
                            { text: '\n\n\n\n' },
                            {
                                columns: [
                                    {
                                        width: '70%',
                                        text: 'Betreff: Antrag auf Aktenauskunft'
                                    },
                                    {
                                        width: '30%',
                                        text: this.current_date,
                                        alignment: 'right',
                                        margin: [0, 0, 10, 0]
                                    }
                                ]
                            },
                            { text: '\n' },
                            { text: 'Sehr geehrte Damen und Herren,', margin: [0, 0, 0, 0] },
                            { text: '\n' },
                            { text: current_office.law, margin: [0, 0, 0, 10] },
                            {
                                ul: [
                                    'zu meiner Person gespeicherten Daten,',
                                    'den Zweck und die Rechtsgrundlage der Speicherung,',
                                    'die Herkunft der Daten und die empfangenden Stellen oder Kategorien von empfangenden Stellen, an die Daten übermittelt werden oder wurden.'
                                ],
                                style: {
                                    listType: 'bullet',
                                    markerColor: 'black',
                                    lineHeight: 1.2
                                },
                                type: 'bullet',
                                margin: [30, 0, 30, 0]
                            },
                            { text: 'Bitte übermitteln Sie mir diese Daten spätestens bis zum', alignment: 'center', margin: [0, 10, 0, 5] },
                            { 
                                text: this.three_months_from_current_date,
                                alignment: 'center', 
                                margin: [0, 0, 0, 3] 
                            },
                            { text: '\n' },
                            { text: 'Meiner Anfrage liegt ein besonderes Informationsinteresse unter Wahrnehmung meines verfassungsrechtlich verbürgten Grundrechts auf informationelle Selbstbestimmung zugrunde: ', margin: [0, 2, 0, 0] },
                            {
                                text: this.data.reason || [
                                    { text: 'Persönlicher Grund, warum ich glaube, beobachtet zu werden: _______________________________' },
                                    { text: '\n' },
                                    { text: '_'.repeat(92) },
                                    { text: '\n' },
                                    { text: '_'.repeat(92) },
                                    { text: '\n' },
                                    { text: '_'.repeat(92) },
                                ],
                                margin: [0, 10, 10, 0],
                                lineHeight: 1.2,
                            },
                            { text: '\n' },
                            { text: 'Angesichts des relativ neuen Phänomenbereichs „Verfassungsschutzrelevante Delegitimierung des Staates“ steht die Befürchtung im Raum, dass bereits bloße Kritik am Regierungshandeln seitens Ihrer Behörde als verfassungswidrig gewertet werden könnte. Entsprechende Fälle sind bereits öffentlich bekannt geworden. Zudem hat einer Ihrer Mitarbeiter die ausufernden, neuen Beobachtungspraktiken Ihrer Behörde gegenüber der „Schwäbischen Zeitung“ bestätigt: „Was gestern legale Kritik war, kann heute ein Grund sein, ins Visier des Verfassungsschutzes zu geraten. (.) Plötzlich wird versucht, auch Menschen zu diskreditieren, zu dämonisieren und auszugrenzen, bei denen das vor wenigen Jahren noch völlig undenkbar gewesen wäre. Bei denen man gesagt hat, das ist doch alles im völlig normalen und verfassungsmäßigen Rahmen.“ Laut Aussage Ihres Mitarbeiters könne dies auch bereits Menschen betreffen, die eine bestimmte Partei nicht mögen, ein Plakat aufgehängt, oder ein Schild auf einer Demo hochgehalten hätten. Quelle: https://www.schwaebische.de/politik/verfassungsschuetzer-schlaegt-alarm-der-rechtsstaat-wirdausgehoehlt-2543613 ', margin: [0, 0, 10, 0] },
                            { text: '\n' },
                            { text: 'Darüber hinaus wurde mit einer Änderung des Verfassungsschutzgesetzes im Jahr 2021 neben einer Überwachung von Gruppen auch eine Beobachtung von Einzelpersonen möglich, was eine Beobachtung meiner Person ermöglichen wurde. Sollte darüber hinaus mein Name in einem Ihrer jährlichen Verfassungsschutz-Berichte auftauchen, so hätte dies für mich möglicherweise auch wirtschaftliche Folgen, bis hin zur Existenzbedrohung.', margin: [0, 0, 10, 0] },
                            { text: '\n' },
                            { text: 'Aus den oben genannten Grunden befürchte ich daher, dass auch über mich in Ihrer Behörde Daten gesammelt wurden und werden.', margin: [0, 0, 10, 0] },
                            { text: '\n' },
                            { text: 'Ich bitte um eine Eingangsbestätigung dieses Schreibens. Bis zu Ihrer Antwort widerspreche ich der Löschung über mich gesammelter Daten. Diesem Brief liegt eine Kopie meines Personalausweises bei. ', margin: [0, 0, 10, 0] },
                            { text: '\n' },
                            { text: 'Mit freundlichen Grüßen', margin: [0, 0, 0, 0] },
                            { text: '\n' },
                            { text: this.data.name || "Name: __________________________", margin: [0, 5, 0, 0] },
                            { text: '\n' },
                            { text: ' Anhang: Personalausweiskopie', margin: [0, 0, 0, 0] },
                            index < this.data.offices.length - 1 ? { text: '', pageBreak: 'after' } : {}
                        );
                    }
                }
            })
            return PdfMake.createPdf(doc_def)
        } catch (err) {
            return console.error(err)
        }
    }
}