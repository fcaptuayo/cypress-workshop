describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomClick(20);
    })
})
function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {

        var num = getRandomInt(1, 4)
        console.log(num);
        if (num == 1){
            cy.get('.Select-placeholder').then($buttons => {
                var randombutton = $buttons.get(getRandomInt(0, $buttons.length));
                if(!Cypress.dom.isHidden(randombutton)) {
                    cy.wrap(randombutton).click({force: true});
                    cy.get('.Select-input').find('input[role="combobox"]').type("Jovana Zivkovic", {force:true})
                    cy.get('.Select-input').find('input[role="combobox"]').type('{enter}', {force:true})
                    cy.get('.materias').find('input[name="id:LENG1102"]').check()
                    monkeysLeft = monkeysLeft - 1;
                }
                cy.wait(10);
                randomClick(monkeysLeft);
                setTimeout(randomClick, 1000, monkeysLeft);
            });
        }

        if (num == 2){
            cy.get('button').then($buttons => {
                var randombutton = $buttons.get(getRandomInt(0, $buttons.length));
                if(!Cypress.dom.isHidden(randombutton)) {
                    cy.wrap(randombutton).click({force: true});
                    monkeysLeft = monkeysLeft - 1;
                }
                cy.wait(10);
                randomClick(monkeysLeft);
                setTimeout(randomClick, 1000, monkeysLeft);
            });
        }

        if (num == 3){
            cy.get('a').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true});
                    monkeysLeft = monkeysLeft - 1;
                }
                cy.wait(10);
                randomClick(monkeysLeft);
                setTimeout(randomClick, 1000, monkeysLeft);
            });
        }

        if (num == 4){
            cy.get('.jsx-633353764').then($links => {
                var randomLink = $links.get(getRandomInt(0, $links.length));
                if(!Cypress.dom.isHidden(randomLink)) {
                    cy.wrap(randomLink).click({force: true});
                    monkeysLeft = monkeysLeft - 1;
                }
                cy.wait(10);
                randomClick(monkeysLeft);
                setTimeout(randomClick, 1000, monkeysLeft);
            });
        }


    }
}
