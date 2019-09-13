export class Level {
    constructor(
        public id_eliquid: string,
        public milligrams: string,
        public nicotine: string,
        public stock: string,
        /* public price: number, */
        public type: string,
        public description: string
    ) { }
}