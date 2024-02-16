var szam = "0a"
console.log("A szám változó típusa: " + typeof szam);
console.log("A szöveg változó típusa: " + typeof szoveg);
console.log("A pentekVane változó típusa: " + typeof pentekVane);


export function elagazas() {
    /* Döntsük el a szám változóról, hogy 0-e, páros-e vagy páratlan? */
    /* 3 db = jel nem csak az értéket ellenőrzi, hanem a típust is */
    szam = Number(szam)
    console.log(szam)
    if (!Number.isNaN(szam)) {
        if (szam === 0) {
            console.log("A szám 0.");
        } else if (szam % 2 === 0) {
            console.log("A szám páros");
        } else {
            console.log("A szám páratlan")
        }
    }
}



export function ciklusok() {
    /* Írjuk ki 10× a konzlra, hogy "Az élet szééép!"*/
    for (let index = 0; index < 10; index++) {
        console.log(`${index}. Az élet szééép`) /* jobb oldali alt gr és a 7es gomb */

    }
    /* Ugyanez while ciklussal*/
    let index = 0;
    while (index < 10) {
        console.log(`${index}. Az élet szééép`)
        index++;
    }
}

export function udvozles(nev) {
    console.log("Jó reggelt " + nev + "!")
}
