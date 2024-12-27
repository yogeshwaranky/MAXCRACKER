import axios from 'axios';

const SendMessage = async (props) => {
    console.log("hello");
    console.log(import.meta.env.VITE_APP_YOUR_KEY);
    console.log('API URL:', import.meta.env.VITE_API_WA);

    const url = 'https://graph.facebook.com/v21.0/489631117569171/messages';
    const data = {
        messaging_product: 'whatsapp',
        to: '916382110972',
        type: 'template',
        template: {
            name: 'prasath_contact_template',
            language: {
                code: 'en'  // Corrected language code
            },
            components: [
                {
                    type: 'body',
                    parameters: [
                        { type: 'text', text: props.username },
                        { type: 'text', text: props.email },
                        { type: 'text', text: props.phone },
                        { type: 'text', text: props.message }
                    ]
                }
            ]
        }
    };
    const config = {
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_API_WA}`,  // Use the token from environment variable
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await axios.post(url, data, config);
        if (response.status === 200) {
            console.log('Message sent successfully:', response.data);
        } else {
            console.error('Failed to send message:', response.data);
        }
    } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
    }
};

export default SendMessage;