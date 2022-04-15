// const res = require("express/lib/response");
let NewMessage = document.getElementById("NewMessageInput");
let SendTwit = document.getElementById("SendTwit");

let Countdown = document.getElementById("Count");
let CountVisual = document.getElementById("CountVisual");
let MessageLen = NewMessage.value.length;

async function sendt (newPost) {
    try {
        // console.log(newPost);
        let res = await axios.post('/api/create', newPost);
        // console.log (res);
        // console.log (res.status);
        if (res.status == 200) {
            NewMessage.value = '';
            alert ('Пост успешно добавлен');
            MessageLen = NewMessage.value.length;
            Countdown.textContent = MessageLen;
            CountVisual.style.borderColor = '#DFDFDF';

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

SendTwit.onclick = function() {
    if (!NewMessage.value) 
        alert ('Введите текст');
    else {
        let post = {
            'message':NewMessage.value
        };
        sendt(post);   
    }

}
NewMessage.addEventListener('keyup', function(){
    MessageLen = NewMessage.value.length;
    Countdown.textContent = MessageLen;
    if (MessageLen === 0) {
        CountVisual.style.borderColor = '#DFDFDF';
    }
    if (MessageLen > 0 &&MessageLen < 36) {
        CountVisual.style.borderColor = '#DFDFDF';
        CountVisual.style.borderTopColor = '#0057FF';
        CountVisual.style.transform = 'rotate(45deg)';
        Countdown.style.transform = 'rotate(-45deg)';
    }
    if (MessageLen >= 36 && MessageLen < 106) {
        CountVisual.style.borderColor = '#DFDFDF';
        CountVisual.style.borderTopColor = '#0057FF';
        CountVisual.style.borderRightColor = '#0057FF';
        CountVisual.style.transform = 'rotate(45deg)';
        Countdown.style.transform = 'rotate(-45deg)';
    }
    if (MessageLen >= 106 && MessageLen < 140) {
        CountVisual.style.borderColor = '#DFDFDF';
        CountVisual.style.borderTopColor = '#0057FF';
        CountVisual.style.borderRightColor = '#0057FF';
        CountVisual.style.borderBottomColor = '#0057FF';
        CountVisual.style.transform = 'rotate(45deg)';
        Countdown.style.transform = 'rotate(-45deg)';
    }
    if (MessageLen === 140) {
        CountVisual.style.borderColor = '#0057FF';
    }
})

