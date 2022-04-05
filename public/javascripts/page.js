// const res = require("express/lib/response");

async function sendt (newPost) {
    try {
        // console.log(newPost);
        let res = await axios.post('/api/create', newPost);
        // console.log (res);
        // console.log (res.status);
        if (res.status == 200) {
            NewMessage.value = '';
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
let Countdown = document.getElementById("Count");
let MessageLen = NewMessage.value.length;


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
NewMessage.addEventListener('keyup', function(){
    MessageLen = NewMessage.value.length;
    Countdown.textContent = MessageLen;

    // console.log (Countdown);
    console.log (MessageLen);
    console.log (Countdown.value)
})
// NewMessage.keyup = function() {
//     Countdown.value = MessageLen;
//     console.log (Countdown);
//     console.log (Countdown.value);
// }
