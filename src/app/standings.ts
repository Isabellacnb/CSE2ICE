export class Standings {
    constructor(
        public against: number,
        public behinds_against: number,
        public behinds_for: number,
        public goals_for: number,
        public played: number,
        public goals_against: number,
        public id: number,
        public percentage: number,
        public rank: number,
        public wins: number,
        public pts: number,
        public draws: number,
        public losses: number,
        public name: string,
        public _for: number) {}
}
