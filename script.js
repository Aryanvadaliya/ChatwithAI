
const chatContainer = document.querySelector('.chat-container');


async function getData() {




    console.log("hello");
    const input = document.querySelector('#userMessage');
    const prompt = input.value;
    chatContainer.innerHTML += `<p class="userMsg">${prompt}</p>`;
    input.value = '';

    const url = 'https://open-ai21.p.rapidapi.com/conversationpalm2';
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '32c7e5e6e5mshb8f0db50a7cf32bp169953jsn8fa7f677e136',
            'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages: [
                {
                    role: 'user',
                    content: prompt
                }
            ]
        })
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.BOT);
        chatContainer.innerHTML += `<p class="aiMsg">${result.BOT}</p>`;
    } catch (error) {
        console.error(error);
    }
}



