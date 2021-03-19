interface Word {
    PT: string,
    KK: string,
    KKF: string,
    EXPT: string,
    EXKK: string,
    EXKKF: string
}
interface DictWord {
    [id: number]: Word
}

const Dictionary: DictWord = [
    {
        PT: "Banana",
        KK: "Panara",
        KKF: "",
        EXPT: "A banana aos dez meses pendura sua fruta e leva um mês para engrossar",
        EXKK: "Panara chunka yatstsui ya iya wachukuka, ya itaru wepe yatsi tapiar",
        EXKKF: ""
    },
    {
        PT: "Amor",
        KK: "Tsachi",
        KKF: "Tsachi",
        EXPT: "Foi amor a primeira vista",
        EXKK: "Tsachi lorem ipsum",
        EXKKF: "lorem ipsum Tsachi"
    },
    {
        PT: "Tapinha",
        KK: "Pakɨta",
        KKF: "",
        EXPT: "Meu bebê dorme com um tapinha.",
        EXKK: "Tsa wawakɨra ukɨrɨ pakɨtanpu.",
        EXKKF: ""
    },
]

export default Dictionary;