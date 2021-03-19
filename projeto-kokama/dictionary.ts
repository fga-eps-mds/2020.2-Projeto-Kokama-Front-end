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
        EXPT: "Eu comi uma banana hoje",
        EXKK: "ore wa Panara wo tabetai",
        EXKKF: ""
    },
    {
        PT: "Amor",
        KK: "Tsachi",
        KKF: "Tsachi",
        EXPT: "istaFoi amor a primeira vistaFoi amor a primeira vista",
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