function correctUser(user, password) {
    if(user === 'Sérgio' && password === '123') {
        return true;
    }
    else {
        return false;
    }
}

let user = 'Sérgio';
let password = '123';

let correctly = correctUser(user, password);

if(correctly) {
    console.log('Accepted Access.');
}
else {
    console.log('Access Denied.')
}