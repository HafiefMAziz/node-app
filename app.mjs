import * as readline from 'readline/promises';
import * as fs from 'fs/promises';
import validator from 'validator';



const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})


try {
    const nama = await rl.question('Masukan Nama Anda? ');
    if (validator.isAlpha(nama, "en-US",{ignore:' -'}) == false) throw "Nama yang dimasukan tidak sesuai format !!";

    const noHP = await rl.question('Masukan No Telephone Anda? ');
    if (validator.isMobilePhone(noHP, 'id-ID') == false) throw "No HP yang dimasukan tidak sesuai format !!";
    
    const contact = {nama, noHP};
    const file = await fs.readFile('contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    
    contacts.push(contact);
    
    const promise = await fs.writeFile("contacts.json", JSON.stringify(contacts), 'utf-8');  
    promise;
    
    console.log(`Data dengan Nama: ${nama} \nNo Telephone ${noHP} \nSudah Dimasukan !`);
} catch (error) {
    console.log(error);
}

rl.close()