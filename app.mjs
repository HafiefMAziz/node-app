import * as contacts from "./contacts.mjs"
import validator from 'validator';


const main = async () =>{
    try {
        const nama = await contacts.tulisPertanyaan('Masukan Nama Anda? ');
        console.log(nama);
        if (validator.isAlpha(nama, "en-US",{ignore:' -'}) == false) throw "Nama yang dimasukan tidak sesuai format !!";
    
        const noHP = await contacts.tulisPertanyaan('Masukan No Telephone Anda? ');
        if (validator.isMobilePhone(noHP, 'id-ID') == false) throw "No HP yang dimasukan tidak sesuai format !!";

        contacts.simpanContact(nama, noHP);

    } catch (error) {
        console.log(error);
    }
    
}
main();