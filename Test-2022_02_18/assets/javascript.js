//1 uzdavinys
//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

let a = 5;
let b = 5;

if(a == b) {
    console.log(`skaičiai abudu yra lygus, skaičius yra ${a}`);
}else if (a > b) {
    console.log(`skaičius a yra didesnis už skaičių b, skaičius a = ${a}, o skaičius b = ${b}`);
}else {
    console.log(`skaičius b yra didesnis už skaičių a, skaičius b yra ${b}, o skaičius a yra ${a}`);
}

//2 uzdavinys
//Naudojant ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)

let kintamasis = '';

for(let i=1; i<=10; i++) {
    kintamasis += i + ' '
}
console.log(kintamasis);

//3 uzdavinys
//3. Naudojant ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)

kintamasis = '';

for(let i=0; i<=10;i+=2) {
    kintamasis += i + ' '
}
console.log(kintamasis);

//4 uzdavinys
//Naudojant ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)

function randomSkaicius(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

kintamasis = '';

  for(let i=0; i<5; i++) {
    kintamasis += randomSkaicius(1, 10) + ' ';
  }

  console.log(kintamasis);

  //5 uzdavinys
  //Naudojant ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)

kintamasis = '';
let skaicius = 0;
  while(skaicius != 5) {
    skaicius = randomSkaicius(1, 10);
    kintamasis += skaicius + ' '
  }

console.log(kintamasis);

//6 uzdavinys
//Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti antrą didžiausią masyvo reikšmę, nenaudojant sort funkcijos. (7 taškai)

let masyvas = [];
let max = 0;
let secondmax= 0
for(let i =0; i< randomSkaicius(20,30); i++) {
    skaicius= randomSkaicius(10, 30);
    masyvas[i] = skaicius;
    if(max<skaicius) {
        max = skaicius;
    }else if(max>skaicius && skaicius>secondmax) {
        secondmax= skaicius;
    }
}
console.log(masyvas)
console.log(`maximum reikšmė ${max}, antra didŽiausia reikšmė yra ${secondmax}`)


masyvas = [];
let ilgis= randomSkaicius(20, 30)

for(let i =0; i<ilgis; i++) {
    masyvas[i]= randomSkaicius(10,30);
}

// BUBBLE SORTAS!!! PRISIMINTI

// for(let i=0; i<ilgis; i++) {
//     for(let j=0; j<ilgis; j++) {
//         if (masyvas[i] <masyvas[j]) {
//             let temp= masyvas[i];
//             masyvas[i] = masyvas[j];
//             masyvas[j] = temp
//         }
//     }
// }

// console.log(masyvas);
// console.log(`Antra mažiausai reikšmė yra ${[ilgis-2]}`)

max = 0;
let max2= 0;
for(let i =0; i<ilgis; i++) {
    if(masyvas[i] >max ) {
        max2= max;
        max= masyvas[i]
    } else if( masyvas[i] >max2) {
        max2= masyvas[i]
    }
}

console.log(`antra didžiausia reikšmė yra ${max2}`)

//antra didziausia ieskoti nezinau kaip, rasciau, bet neturiu tam laiko.

//7 uzdavinys
//Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

masyvas = [];
let aRaides = 0;
let bRaides = 0;
let cRaides = 0;
let dRaides = 0;

for(let i =0; i<100; i++) {
    let raide= randomSkaicius(1,4);
    if(raide == 1) {
        masyvas.push('A');
        aRaides++;
    }else if(raide == 2) {
        masyvas.push('B');
        bRaides++;
    }else if(raide == 3) {
        masyvas.push('C');
        cRaides++;
    }else {
        masyvas.push('D');
        dRaides++;
    }
}

console.log(masyvas);
console.log(`A raidžių buvo ${aRaides}, B raidžių buvo ${bRaides}, C raidžių buvo ${cRaides}, D raidžių buvo ${dRaides}`);

let raides = ['A', 'B', 'C', 'D'];

a=b=c=d=0;

for(let i =0; i<100; i++) {
    masyvas[i] = raides[randomSkaicius(0,3)];
    if(masyvas[i] === 'A') {
        a++
    }else if(masyvas[i] === 'B') {
        b++
    }else if(masyvas[i] === 'C') {
        c++
    }else if (masyvas[i] === 'D'){
        d++
    }
}
console.log(`a: ${a}, B: ${b}, C: ${c}, D:${d}`)
//8 uzdavinys
//Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

// let kintamasis1 = randomSkaicius(1, 50);
// let kintamasis2= randomSkaicius(1, 50);

// function lygineSuma(x, y) {
//     let suma = x + y;
//     if(suma % 2 != 0) {
//         return `kintamųjų suma nelygine ${suma}`
//     }else {
//         return `kintamųjų suma yra lygine, rezultatas yra ${suma}`
//     }
// }
// console.log(kintamasis1);
// console.log(kintamasis2);
// console.log(lygineSuma(kintamasis1, kintamasis2));

function lygineSuma(a, b) {
    if(typeof(a) === 'number' && typeof(b) === 'number') {
        let suma = a+b;
        if(suma % 2 != 0) {
            console.log(`skaičių suma nelyginė`)
        } else {
            console.log(`skaičių suma: ${suma}`)
        }
        return;
    }
    if(Array.isArray(a) && Array.isArray(b)) {
        let suma= a.length + b.length;
        if(suma % 2 !=0) {
            console.log(`masyvu ilgių suma nelyginė`)
        } else {
            console.log(`Masyvių ilgių suma: ${suma}`)
        }
        return
    } return 'Blogi kintamųjų tipai'
}

lygineSuma(5, [4,7,9,10])
//9 uzdavinys
// Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
//skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
let pirminis = 5;

function pirminisSkaicius(x) {
    if(typeof(x) != 'number') {
        return `${x} yra ne skaičius`
    }else {
    if(x < 2) {
        return `skaičius  nėra pirminis`;
    }else if(x == 2) {
        return `Skaičius yra 2 ir jis yra pirminis`
    } else if(x > 2) {
        for(let i=2; i < x; i++) {
            if(x % i == 0) {
                return `skaičius nebus pirminis`;
            }else if (i == x-1) {
                return `skaičius bus pirminis, jis dalijasi tik iš savęs ir iš 1`;
            }
    }
    }
}}
console.log(pirminis)
console.log(pirminisSkaicius(pirminis))
//10 uzdavinys
//Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
//"(XXX) XXX-XXXX". (10 taškų)

masyvas = [];

for(let i =0; i <10; i++) {
    masyvas[i] = randomSkaicius(0, 9);
}

function telefonoNumeris(arr) {
    return `(${arr.slice(0,3).join('')}) ${arr.slice(3,6).join('')}-${arr.slice(6).join('')}`
}

console.log(masyvas);
console.log(telefonoNumeris(masyvas));

function telNumeris(a) {
    if(!Array.isArray(a)) {
        return `Kintamasis nėra masyvas`
    }
    if(a.length != 10) {
        return `Kintamojo ilgis nėra 10`
    }
    for(let i=0; i<10; i++) {
        if(typeof(a[i]) != 'number'){
            return `ne visi masyvo elementai yra skaičiai`
        }
    }
    return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`
}
console.log(telNumeris([5,4,3,5,4,2,8,8,9,4]))

// const pirminisSkaicius1 = function(sk) {

//     if(typeof sk != 'number') {
//         return 'kintamasis yra neskaičius'
//     } 

//     for( let i= 2; i< sk; i++) {
//     if( sk % i == 0) {
//     return 'ne pirminis'
// }}
//     return 'Taip pirminis'
// }

// console.log(pirminisSkaicius1('jjj'))