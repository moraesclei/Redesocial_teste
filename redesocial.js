const friendsJuli = ['Erickson', 'Cleyton', 'Laura', 'Claudio', 'Sheila', 'Vinicius', 'Leticia'];
const friendsClei = ['Leticia', 'Guilherme', 'Cleyton', 'Ivan', 'Vinicius', 'Gisele'];
const friendsEmComum = [];

for(indexJuli = 0; indexJuli < friendsJuli.length; indexJuli += 1){
    for(let indexClei = 0; indexClei < friendsClei.length; indexClei += 1){
        if(friendsJuli[indexJuli] == friendsClei[indexClei]){
            friendsEmComum.push(friendsClei[indexClei]);
        }
    }
}

console.log(friendsEmComum);