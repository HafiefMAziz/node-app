import * as readline from 'readline/promises';
import * as fs from 'fs/promises';


const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

const nama = await rl.question('Masukan Nama Anda? ');
const noHP = await rl.question('Masukan No Telephone Anda? ');
const contact = {nama, noHP};

try {
    const file = await fs.readFile('contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    contacts.push(contact);
    const promise = await fs.writeFile("contacts.json", JSON.stringify(contacts), 'utf-8');  
    promise;
} catch (error) {
    console.log(error);
}

console.log(`Data dengan Nama: ${nama} \nNo Telephone ${noHP} \nSudah Dimasukan !`);

rl.close()