/* Rótulos: Também conhecidos como marcas,
são locais autodefinidos dentro de um loop
Eles são usados em conexão com break e continue para 
controlar a sequència de um loop. */

/*var a = 0;
var b = 0;
repeticao1:
while (a < 10){
    console.log('Iterando A');
    a++;
    while(b < 5){
        console.log('Iterando B');
        b++;
        if (b % 2 == 0) {
            continue repeticao1;
        }
    }
}
*/
c=3;
c < 5 ? console.log('É menor do que 5') : console.log('É maior do que 5');
// bloco errado: console.log('É menor do que 5') ? console.log('É maior do que 5') : c < 5;