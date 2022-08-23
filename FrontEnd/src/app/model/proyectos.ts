export class Proyectos {
    id? : number;
    nombreE : string;
    descripcionE : string;
    urlP: string;

    constructor(nombreE: string, descripcionE: string, urlP: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.urlP = urlP;
    }
}
