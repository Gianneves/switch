let lightYear = prompt('What is the light year distance?');
let chosenOption = prompt('Chose one method of calculate: ' + 
                                                  '\n1 - Parsec(pc)' +
                                                        '\n2 - Astronomical Unit(AU)' +
                                                        '\n3 - Kilometers(km)');
let chosenUnity;
let convertResult;
switch(chosenOption) {
    case '1':
        chosenUnity = 'Parsec';
        convertResult = 0.306601 * lightYear;
    break;
    case '2':
        chosenUnity = 'Astronomical Unit(AU)';
        convertResult = 6324.1 * lightYear;
    break;
    case '3':
        chosenUnity = 'Kilometers';
        convertResult  = (9.5 * 10**12) * lightYear;
    break

};

alert(chosenUnity)
alert(convertResult)




