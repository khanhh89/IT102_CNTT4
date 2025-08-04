let phoneBook = []
function addContect (name, numberPhone, email){
    const contact ={
        name, 
        numberPhone,
        email
    };
    phoneBook.push(contact)
}
function display(){
    phoneBook.forEach((contact)=>{
        console.log(`Tên: ${contact.name}, SĐT: ${contact.numberPhone}, Email: ${contact.email}`)
    });
}

addContect("Khanh Dao", "0342684600", "Khanhabcabc0000@gmail.com")
display()