const heroes = ['Spiderman', 'Wolverine', 'Batwomen']

function bankRobbery() {


    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`please help us, ${hero}`)
            }
        }
        inner();

    }

    cryForHelp();
}

bankRobbery();