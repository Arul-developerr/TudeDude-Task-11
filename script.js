const P = 5000;
const r = 1.35;
const n = 1;
const t = 3;

const A = P*(1+(r/n))**(n*t);

console.log('The compound intrest after', t , 'years is:' , A);
