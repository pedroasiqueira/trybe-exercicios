const primeiroAngulo = 182;
const segundoAngulo = -1;
const terceiroAngulo = -1;

if (primeiroAngulo + segundoAngulo + terceiroAngulo === 180 && primeiroAngulo >= 0 && segundoAngulo >= 0 && terceiroAngulo >= 0) {
    console.log("true")
}
else if (primeiroAngulo + segundoAngulo + terceiroAngulo !== 180 && primeiroAngulo >= 0 && segundoAngulo >= 0 && terceiroAngulo >= 0) {
    console.log("false")
}
/*else if (primeiroAngulo <= -1 || segundoAngulo <= -1 || terceiroAngulo <= -1) {
    console.log("erro")
}*/
else {
    console.log("Erro: Angulo inválido")
}

//Outra forma de se fazer o if/else

const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = -15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}