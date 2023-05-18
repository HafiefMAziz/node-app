import * as readline from 'readline/promises';
import * as fs from 'fs';
import * as fsPromises from 'fs/promises';

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

// cek file dan direktori, buat jika tidak ada
const dirPath = "./data";
const dataPath = "./data/contacts.json"
if (!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath);
}
if (!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulisPertanyaan = async(pertanyaan) => {
    const jawaban = await rl.question(pertanyaan);
    return jawaban;
}

const simpanContact = async(nama, noHP) => {
    try {
        const contact = {nama, noHP};
        const file = await fsPromises.readFile('data/contacts.json', 'utf-8');
        file;
        const contacts = JSON.parse(file);
        
        contacts.push(contact);
        
        const write = await fsPromises.writeFile("data/contacts.json", JSON.stringify(contacts), 'utf-8');  
        write;
        
        console.log(`Data dengan Nama: ${nama} \nNo Telephone ${noHP} \nSudah Dimasukan !`);
    } catch (error) {
        console.log(error);
    }
    rl.close()
}

export {simpanContact, tulisPertanyaan}