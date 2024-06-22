export class User {
    name: string;
    birthdate: Date;
    email: string;
    pictureUrl?: string;

    constructor(
        name: string, 
        birthdate: Date, 
        email: string
    ) {
        this.name = name;
        this.birthdate = birthdate;
        this.email = email;
        this.pictureUrl = this.setRamdomImage()
    }

    private setRamdomImage() {
        let min = 0;
        let max = 70;
        let imgId = Math.floor(Math.random() * (max - min + 1)) + min;
        return `https://i.pravatar.cc/300?img=${imgId}`;
    }

    public getIdade() {
        let dataHoje = new Date();
        let idade = dataHoje.getFullYear() - this.birthdate.getFullYear();
        // Ajuste se a diferença de meses e dias não completar um ano inteiro
        const monthDifference = dataHoje.getMonth() - this.birthdate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && dataHoje.getDate() < this.birthdate.getDate())) {
            idade--;
        }

        return idade;

    }

}