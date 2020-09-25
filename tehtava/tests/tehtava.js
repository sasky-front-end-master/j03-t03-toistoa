import { Selector } from 'testcafe';

fixture `funktio toistoa`
    .page `../tehtava.html`;

test('Tulostetaan vaadittu teksti', async t => {
   const teksti = Selector("#teksti");

   await t
     .expect(teksti.textContent).match(/Opiskelu on opiskelua\s*/,'')
     .expect(teksti.textContent).match(/Opiskelu on opiskelua\s*/,'')
     .expect(teksti.textContent).match(/Opiskelu on opiskelua\s*/,'')
     .expect(teksti.textContent).match(/Opiskelu on opiskelua\s*/,'')
     .expect(teksti.textContent).match(/Opiskelu on opiskelua\s*/,'')
     .expect(teksti.textContent).match(/Opiskelu on opiskelua\s*/,'')
     .expect(teksti.textContent).match(/Opiskelu on opiskelua\s*/,'');
});
