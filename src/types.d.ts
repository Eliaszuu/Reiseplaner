export type Packlist = {
    id: string,
    alter: number,
    Start: Date,
    Schluss: Date,
    type: "Männlich" | "Weiblich",
    hygieneStufe: number,
    PlaceToVisit: string
}

export type NewPacklist = Omit<Service, "id">