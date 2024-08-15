const form = document.getElementById('client-Form'); 
const TELEGRAM_BOT_TOKEN = '6635992663:AAG8aHSap2gExXH262idcTkbdvbazK3BaDk';
const TELEGRAM_BOT_ID = 6635992663;
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

form.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('userName').value
    const phone = document.getElementById('userPhone').value
    const sity = document.getElementById('userSity').value

    const message = `Здравствуйте, 
    \nна сайте оставили заявку. 
    \nЗаявка от ${name} 
    \nГород ${sity} 
    \nномер телефона ${phone}
    \n
    \n
    С уважением, команда b_Root`;

    fetch(API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_BOT_ID,
            text: message,
            parse_mode: 'HTML'
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Сообщение отправлено успешно!');
        } else {
            alert('Ошибка при отправке сообщения!');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
})