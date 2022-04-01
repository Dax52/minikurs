// const res = require("express/lib/response");

async function sendt (newPost) {
    try {
        // console.log(newPost);
        let res = await axios.post('/api/create', newPost);
        // console.log (res);
        // console.log (res.status);
        if (res.status == 200) {
            alert ('Пост успешно добавлен');
        }
        
    }
    catch (err) {
        console.log (err);
        if (err.status == 400 || err.status == 500 )
            alert('Попрбуйте еще раз');
        else 
            alert('Что-то совсем пошло не так!');

    }
}

let NewMessage = document.getElementById("NewMessageInput");
let SendTwit = document.getElementById("SendTwit");


SendTwit.onclick = function() {
    if (!NewMessage.value) 
        alert ('Введите текст');
    else {
        // console.log (NewMessage.value);
        let post = {
            'message':NewMessage.value
        };
        // console.log (post);
        sendt(post);   
    }

}
