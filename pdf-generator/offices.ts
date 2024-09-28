import type { OfficeObject } from "../types.js";

/* placeholder office object
const name: OfficeObject = {
    name: "",
    office: "",
    department: "",
    address: "",
    postal: "",
    country: "Deutschland",
    fax: "",
    law: ""
}
*/

const bfv: OfficeObject = {
    name: "Bundesamt für Verfassungsschutz",
    office: "Bundesamt für Verfassungsschutz",
    department: "Datenschutzreferat",
    address: "Merianstraße 100",
    postal: "50765 Köln",
    country: "Deutschland",
    fax: "(0221) 792-2915",
    law: "geben Sie mir bitte auf der Grundlage von §15 des Bundesverfassungsschutzgesetzes (BverfSchG) sowie §19, Abs. 1 des Bundesdatenschutzgesetzes (BDSG) schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const bnd: OfficeObject = {
    name: "Bundesnachrichtendienst",
    office: "Bundesnachrichtendienst",
    department: "Dienstsitz Pullach",
    address: "Heilmannstraße 30",
    postal: "82049 Pullach",
    country: "Deutschland",
    law: "geben Sie mir bitte auf der Grundlage von § 7 BNDG, § 15 des Bundesverfassungsschutzgesetzes sowie § 19, Abs. 1 des Bundesdatenschutzgesetzes (BDSG) schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const mad: OfficeObject = {
    name: "Militarischer Abschirmdienst",
    office: "Bundesamt für den Militärischen Abschirmdienst",
    department: "Konrad-Adenauer-Kaserne",
    address: "Brühler Straße 300",
    postal: "50968 Köln",
    country: "Deutschland",
    fax: "(0221) 9371-2407",
    law: "geben Sie mir bitte auf der Grundlage von § 9 MADG, § 15 des Bundesverfassungsschutzgesetzes sowie § 19, Abs. 1 des Bundesdatenschutzgesetzes (BDSG) schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_brandenburg: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Brandenburg",
    office: "MIK Brandenburg",
    office_long: "Ministerium des Innern und für Kommunales des Landes Brandenburg",
    department: "Abteilung Verfassungsschutz",
    address: "Henning-von-Tresckow-Straße 9-13",
    postal: "14467 Potsdam",
    country: "Deutschland",
    fax: "(0331) 866-2599",
    law: "geben Sie mir bitte auf der Grundlage von § 18 des Brandenburgischen Datenschutzgesetzes und § 12, Abs. 1 des Brandenburgischen Verfassungsschutzgesetzes schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_hamburg: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Hamburg",
    office: "Landesamt für Verfassungsschutz Hamburg",
    department: "Landesamt für Verfassungsschutz Hamburg",
    address: "Johanniswall 4",
    postal: "20095 Hamburg",
    country: "Deutschland",
    fax: "(040) 338360",
    law: "geben Sie mir bitte auf der Grundlage von § 23, Abs. 1 des Hamburgischen Verfassungsschutzgesetzes (HmbVerfSchG) und § 18 des Hamburgischen Datenschutzgesetzes (HmbDSG) schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_hessen: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Hessen",
    office: "Landesamt für Verfassungsschutz Hessen",
    department: "Landesamt für Verfassungsschutz Hessen",
    address: "Konrad-Adenauer-Ring 49",
    postal: "65187 Wiesbaden",
    country: "Deutschland",
    fax: "(0611) 720-179",
    law: "geben Sie mir bitte auf der Grundlage von § 18, Abs. 1 des Hessischen Gesetzes über das Landesamt für Verfassungsschutz und § 18 des Hessischen Datenschutzgesetzes (HDSG) schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_nrw: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Nordrhein-Westfalen",
    office: "MIK Nordrhein-Westfalen",
    office_long: "Ministerium für Inneres und Kommunales NRW",
    department: "Abteilung Verfassungsschutz",
    address: "Friedrichstraße 62-80",
    postal: "40217 Düsseldorf",
    country: "Deutschland",
    fax: "(0211) 871-2980",
    law: "geben Sie mir bitte auf der Grundlage von § 14, Abs. 1 des Gesetzes über den Verfassungsschutz in Nordrhein-Westfalen und § 18 Abs. 2 des Datenschutzgesetzes Nordrhein-Westfalen schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_saarland: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Saarland",
    office: "MIBS Saarland",
    office_long: "Ministerium für Inneres, Bauen und Sport des Saarlandes",
    department: "Abteilung V - Verfassungsschutz",
    address: "Neugrabenweg 2",
    postal: "66123 Saarbrücken",
    country: "Deutschland",
    fax: "(0681) 3038-109",
    law: "geben Sie mir bitte auf der Grundlage von § 21, Abs. 1 des Saarländischen Verfassungsschutzgesetzes sowie § 20 des Saarländischen Datenschutzgesetzes (SDSG) schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_sachsenanhalt: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Sachsen-Anhalt",
    office: "MI Sachsen-Anhalt",
    office_long: "Ministerium für Inneres und Sport des Landes Sachsen-Anhalt",
    department: "Abteilung IV - Verfassungsschutz",
    address: "Nachtweide 82",
    postal: "39124 Magdeburg",
    country: "Deutschland",
    fax: "(0391) 567-3999",
    law: "geben Sie mir bitte auf der Grundlage von § 14 des Gesetzes über den Verfassungsschutz in Sachsen-Anhalt sowie § 15 des Landesdatenschutzgesetzes Sachsen-Anhalt schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_bayern: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Bayern",
    office: "Landesamt für Verfassungsschutz Bayern",
    department: "Landesamt für Verfassungsschutz Bayern",
    address: "Knorrstraße 139",
    postal: "80937 München",
    country: "Deutschland",
    fax: "(089) 31201-380",
    law: "geben Sie mir bitte auf der Grundlage von Art. 11 des Bayerischen Verfassungsschutzgesetzes sowie Art. 10 des Bayerischen Datenschutzgesetzes schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_bw: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Baden-Württemberg",
    office: "Landesamt für Verfassungsschutz Baden-Württemberg",
    department: "Landesamt für Verfassungsschutz Baden-Württemberg",
    address: "Taubenheimstraße 85A",
    postal: "70372 Stuttgart",
    country: "Deutschland",
    fax: "(0711) 9544-444",
    law: "geben Sie mir bitte auf der Grundlage von § 13 des Gesetzes über den Verfassungsschutz in Baden-Württemberg und § 21 des Landesdatenschutzgesetzes Baden-Württemberg schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_berlin: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Berlin",
    office: "SenInnSport Berlin",
    office_long: "Senatsverwaltung für Inneres und Sport des Landes Berlin",
    department: "Abteilung II – Verfassungsschutz",
    address: "Klosterstr. 47",
    postal: "10179 Berlin",
    country: "Deutschland",
    fax: "(030) 90 129-844",
    law: "geben Sie mir bitte auf der Grundlage von § 31, Abs. 1 des Gesetzes über den Verfassungsschutz in Berlin und § 16 des Berliner Datenschutzgesetzes schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_bremen: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Bremen",
    office: "Landesamt für Verfassungsschutz Bremen",
    department: "Landesamt für Verfassungsschutz Bremen",
    address: "Contrescarpe 22-24",
    postal: "28203 Bremen",
    country: "Deutschland",
    fax: "(0421) 5377-195",
    law: "geben Sie mir bitte auf der Grundlage von § 16 des Bremischen Verfassungsschutzgesetzes (BremVerfSchG) und § 21 des Bremischen Datenschutzgesetzes (BremDSG) schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_niedersachsen: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Niedersachsen",
    office: "MI Niedersachsen",
    office_long: "Niedersächsisches Ministerium für Inneres und Sport",
    department: "Abteilung Verfassungsschutz",
    address: "Büttnerstraße 28",
    postal: "30165 Hannover",
    country: "Deutschland",
    fax: "(0511) 6709-388",
    law: "geben Sie mir bitte auf der Grundlage von § 13, Abs. 1 des Gesetzes über den Verfassungsschutz im Lande Niedersachsen und § 16 des Niedersächsischen Datenschutzgesetzes (NDSG) schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_mvp: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Mecklenburg-Vorpommern",
    office: "Ministerium für Inneres und Europa Mecklenburg-Vorpommern",
    office_long: "Ministerium für Inneres und Europa Mecklenburg-Vorpommern",
    department: "Abteilung Verfassungsschutz",
    address: "Alexandrinenstraße 1",
    postal: "19055 Schwerin",
    country: "Deutschland",
    fax: "(0385) 7144-38",
    law: "geben Sie mir bitte auf der Grundlage von § 26, Abs. 1 des Gesetzes über den Verfassungsschutz im Lande Mecklenburg-Vorpommern und § 19, Abs. 1 des Bundesdatenschutzgesetzes (BDSG) schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_rlp: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Rheinland-Pfalz",
    office: "Ministerium des Inneren und für Sport des Landes Rheinland-Pfalz",
    department: "Abteilung 6 - Verfassungsschutz",
    address: "Schillerplatz 3-5",
    postal: "55116 Mainz",
    country: "Deutschland",
    fax: "(06131) 16-3688",
    law: "geben Sie mir bitte auf der Grundlage von § 18, Abs. 1 des Landesverfassungsschutzgesetzes Rheinland-Pfalz sowie § 18 des Landesdatenschutzgesetzes (LDSG) Rheinland-Pfalz schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_sachsen: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Sachsen",
    office: "Landesamt für Verfassungsschutz Sachsen",
    department: "Landesamt für Verfassungsschutz Sachsen",
    address: "Neuländer Straße 60",
    postal: "01129 Dresden",
    country: "Deutschland",
    fax: "(0351) 858-5500",
    law: "geben Sie mir bitte auf der Grundlage von § 9, Abs. 1 des Sächsischen Verfassungsschutzgesetzes sowie § 8, Abs. 1 des Sächsischen Datenschutzgesetzes schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_sh: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Schleswig-Holstein",
    office: "MILI Schleswig-Holstein",
    office_long: "Ministerium für Inneres, ländliche Räume, Integration und Gleichstellung des Landes Schleswig-Holstein",
    department: "Abteilung IV / 7 - Verfassungsschutz",
    address: "Düsternbrooker Weg 92",
    postal: "24105 Kiel",
    country: "Deutschland",
    fax: "(0431) 988-3503",
    law: "geben Sie mir bitte auf der Grundlage von § 25 des Landesverfassungsschutzgesetzes Schleswig-Holstein sowie § 27 des Landesdatenschutzgesetzes Schleswig-Holstein schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const lfv_thueringen: OfficeObject = {
    name: "Landesamt für Verfassungsschutz Thüringen",
    office: "MIK Thüringen",
    office_long: "Ministerium für Inneres und Kommunales Thüringen",
    department: "Abteilung Verfassungsschutz",
    address: "Haarbergstraße 61",
    postal: "99097 Erfürt",
    country: "Deutschland",
    fax: "(0361) 573313-482",
    law: "geben Sie mir bitte auf der Grundlage von § 11 des Thüringer Verfassungsschutzgesetzes sowie § 13 des Thüringer Datenschutzgesetzes schriftlich Auskunft über die durch Ihre Behörde (auch im Weg der Auftragsdatenverarbeitung)"
}

const officesObj: { [key: string]: OfficeObject} = {
    bfv,
    bnd,
    mad,
    lfv_brandenburg,
    lfv_hamburg,
    lfv_hessen,
    lfv_nrw,
    lfv_saarland,
    lfv_sachsenanhalt,
    lfv_bayern,
    lfv_bw,
    lfv_berlin,
    lfv_bremen,
    lfv_niedersachsen,
    lfv_mvp,
    lfv_rlp,
    lfv_sachsen,
    lfv_sh,
    lfv_thueringen
}

export default officesObj;