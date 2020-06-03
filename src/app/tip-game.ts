export class TipGame {
    constructor(
        public gameid: number,
        public ateamid: number, 
        public venue: string,
        public year: number,
        public date: string,
        public hteam: string,
        public ateam: string, 
        public hteamid: number, 
        public round: number
    ) {}
}
