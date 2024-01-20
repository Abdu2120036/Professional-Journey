const plus1 = document.querySelector('.plus1');
const plus2 = document.querySelector('.plus2');
const plus3 = document.querySelector('.plus3');
const plus4 = document.querySelector('.plus4');

const minus1 = document.querySelector('.minus1');
const minus2 = document.querySelector('.minus2');
const minus3 = document.querySelector('.minus3');
const minus4 = document.querySelector('.minus4');

const Q1 = document.getElementById('Q1');
const Q2 = document.getElementById('Q2');
const Q3 = document.getElementById('Q3');
const Q4 = document.getElementById('Q4');

const A1 = document.getElementById('A1');
const A2 = document.getElementById('A2');
const A3 = document.getElementById('A3');
const A4 = document.getElementById('A4');


function sensor(q, a, p, m) {
    q.addEventListener('click', () => {
        a.classList.toggle('hidden')
        if(a.classList.contains('hidden')) {
            p.style.display = 'block';
            m.style.display = 'none';
        }else {
            p.style.display = 'none';
            m.style.display = 'block';
        }
    })

    p.addEventListener('click', () => {
        a.classList.toggle('hidden')
        if(a.classList.contains('hidden')) {
            p.style.display = 'block';
            m.style.display = 'none';
        }else {
            p.style.display = 'none';
            m.style.display = 'block';
        }
    })

    m.addEventListener('click', () => {
        a.classList.toggle('hidden')
        if(a.classList.contains('hidden')) {
            p.style.display = 'block';
            m.style.display = 'none';
        }else {
            p.style.display = 'none';
            m.style.display = 'block';
        }
    })
}

sensor(Q1, A1, plus1, minus1);
sensor(Q2, A2, plus2, minus2);
sensor(Q3, A3, plus3, minus3);
sensor(Q4, A4, plus4, minus4);