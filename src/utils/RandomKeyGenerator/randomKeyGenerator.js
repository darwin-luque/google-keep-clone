const randomKeyGenerator = (keyLength) => {
    const keys = 'abcdefghijklmopqrstuvwxyz12345678901#$%&/()=?¿-_{}[]*+.,;:|<>';
    let output = '';
    for (let i=0; i<keyLength; i++) {
        output += keys[Math.floor(Math.random() * keys.length)];
    }
    return output;
}

export default randomKeyGenerator;