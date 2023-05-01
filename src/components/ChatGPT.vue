<template>
    <div class="container">
        <div class="chat-container">
            <!-- Conversation area -->
            <div class="conversation">
                <ul>
                    <li v-for="(message, index) in messages" :key="index">
                        <span :class="message.sender">{{ message.text }}</span>
                    </li>
                </ul>
            </div>

            <!-- User input form -->
            <form @submit.prevent="submitMessage" class="mt-3">
                <div class="row">
                    <div class="col-10">
                        <input type="text" v-model="userInput" class="form-control"
                            placeholder="Type your message here..." />
                    </div>
                    <div class="col-2">
                        <button type="submit" class="btn btn-primary w-100">Send</button>
                    </div>
                </div>
            </form>


        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    data() {
        return {
            messages: [],
            userInput: '',
        };
    },
    methods: {
        submitMessage() {
            // Add the user's message to the messages array
            this.messages.push({ sender: 'user', text: this.userInput });

            // Call the method to interact with the ChatGPT API
            this.sendToChatGPT(this.userInput);

            // Clear the userInput field
            this.userInput = '';
        },

        async sendToChatGPT(inputText) {
            const apiKey = process.env.VUE_APP_OPENAI_API_KEY;
            const headers = {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            };

            const data = {
                model: 'gpt-4',
                messages: [
                    {
                        role: 'user',
                        content: inputText,
                    },
                ],
                temperature: 0.7,
            };

            try {
                const response = await axios.post('https://api.openai.com/v1/chat/completions', data, { headers: headers });

                // Process the API response
                const chatGPTMessage = response.data.choices[0].message.content.trim();
                this.messages.push({ sender: 'chatgpt', text: chatGPTMessage });
            } catch (error) {
                console.error('Error interacting with ChatGPT API:', error.response || error.message || error);
                this.messages.push({ sender: 'chatgpt', text: 'Error: Unable to get a response from ChatGPT.' });
            }
        },


    },
};
</script>

<style scoped>
.chatgpt {
    display: flex;
    flex-direction: column;
    
    margin: 0 auto;
}

.conversation {
    overflow-y: auto;
    height: 400px;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
}

.conversation ul {
    list-style-type: none;
    padding: 0;
}

.user {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    text-align: right;
    display: block;
}

.chatgpt {
    font-style: italic;
    color: #8e44ad;
    text-align: left;
    display: block;
}

.chat-container {
    max-height: 80vh;
    overflow-y: auto;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f8f9fa;
}

input[type="text"].form-control {
    flex-grow: 1;
}
</style>

