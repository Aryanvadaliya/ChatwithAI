const url = 'https://chatgpt-42.p.rapidapi.com/chatgpt';
const chatContainer = document.querySelector('.chat-container')





console.log("hello");

async function getData(){
    console.log("hello");
    const input = document.querySelector('#userMessage')
    const userMassage = input.value
    chatContainer.innerHTML += `<p class="userMsg">${userMassage}</p>`
    input.value = ''

    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '32c7e5e6e5mshb8f0db50a7cf32bp169953jsn8fa7f677e136',
            'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages: [
                {
                    role: 'user',
                    content: userMassage
                }
            ],
            web_access: false
        })
    };

    try {
        const response = await fetch(url, options);
        const jsonresponse = await response.json();
        var resMsg = jsonresponse.result
        console.log(resMsg)
    } catch (error) {
        console.error(error);
    }

    chatContainer.innerHTML += `<p class="aiMsg">${resMsg}</p>`



}
