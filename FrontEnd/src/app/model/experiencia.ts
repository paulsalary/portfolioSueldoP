export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    urlE : string;
    aniosE : string;

    constructor(nombreE: string, descripcionE: string, urlE: string, aniosE: string ){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.urlE = urlE;
        this.aniosE = aniosE;
    }
}