export interface ISections {
    en: En;
    es: En;
}

export interface En {
    sections: Section[];
}

export interface Section {
    id:       string;
    title:    string;
    subtitle: string;
    action?:  Action;
    catalog?: Catalog[];
}

export interface Action {
    text:      string;
    actionKey: string;
}

export interface Catalog {
    id:           string;
    title:        string;
    subtitle?:    string;
    icon?:        string;
    institution?: string;
    role?:        string;
    period?:      string;
    location?:    string;
}
