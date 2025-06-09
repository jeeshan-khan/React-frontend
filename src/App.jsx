// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useRef, useEffect } from 'react';

const App = () => {
const [messages, setMessages] = useState([
{
id: 1,
text: "Hi there! I'm Hitesh Choudhary, your coding mentor. How can I help you with programming today?",
sender: 'hitesh',
timestamp: new Date()
}
]);
const [inputMessage, setInputMessage] = useState('');
const [isTyping, setIsTyping] = useState(false);
const messagesEndRef = useRef(null);
const scrollToBottom = () => {
messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
};
useEffect(() => {
scrollToBottom();
}, [messages]);
const handleSendMessage = () => {
if (inputMessage.trim() === '') return;
const newUserMessage = {
id: messages.length + 1,
text: inputMessage,
sender: 'user',
timestamp: new Date()
};
setMessages([...messages, newUserMessage]);
setInputMessage('');
setIsTyping(true);
// Simulate Hitesh's response
setTimeout(() => {
const hiteshResponses = [
"That's a great question about JavaScript! Let me explain...",
"When it comes to React, I always recommend starting with the fundamentals.",
"Python is amazing for that use case. Have you considered using pandas?",
"I covered this in my course! The key concept here is understanding how the algorithm works behind the scenes.",
"Let me share a coding tip that helped me a lot when I was learning.",
"That's a common error. Try checking your dependencies and make sure everything is properly installed."
];
const randomResponse = hiteshResponses[Math.floor(Math.random() * hiteshResponses.length)];
const newHiteshMessage = {
id: messages.length + 2,
text: randomResponse,
sender: 'hitesh',
timestamp: new Date()
};
setMessages(prevMessages => [...prevMessages, newHiteshMessage]);
setIsTyping(false);
}, 1500);
};
const formatTime = (date) => {
return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};
return (
<div className="flex flex-col min-h-screen bg-gray-50 w-full max-w-[1440px] mx-auto">
{/* Header */}
<header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
<div className="flex items-center">
<h1 className="text-xl font-semibold text-amber-700">ChaiCode</h1>
<span className="ml-2 text-sm text-gray-500">Chat App</span>
</div>
<div className="flex items-center">
<span className="mr-3 text-sm text-gray-600">Hitesh Choudhary</span>
<div className="w-10 h-10 rounded-full bg-amber-100 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20Indian%20man%20with%20short%20dark%20hair%20and%20glasses%2C%20wearing%20a%20casual%20shirt%2C%20neutral%20expression%2C%20clean%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=1&orientation=squarish"
alt="Hitesh Choudhary"
className="w-full h-full object-cover object-top"
/>
</div>
</div>
</header>
{/* Chat container */}
<div className="flex-1 overflow-y-auto p-6 bg-gray-50" style={{ height: 'calc(100vh - 140px)' }}>
<div className="max-w-3xl mx-auto space-y-4">
{messages.map((message) => (
<div
key={message.id}
className={`flex mb-4 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
>
<div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
{message.sender === 'hitesh' && (
<div className="w-8 h-8 rounded-full bg-amber-100 overflow-hidden flex-shrink-0 mr-2">
<img
src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20Indian%20man%20with%20short%20dark%20hair%20and%20glasses%2C%20wearing%20a%20casual%20shirt%2C%20neutral%20expression%2C%20clean%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=1&orientation=squarish"
alt="Hitesh"
className="w-full h-full object-cover object-top"
/>
</div>
)}
<div>
<div
className={`px-4 py-3 rounded-2xl ${
message.sender === 'user'
? 'bg-gray-200 text-gray-800 rounded-tr-none'
: 'bg-amber-600 text-white rounded-tl-none'
}`}
>
{message.text}
</div>
<div className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
{formatTime(message.timestamp)}
</div>
</div>
</div>
</div>
))}
{isTyping && (
<div className="flex mb-4 justify-start">
<div className="flex flex-row">
<div className="w-8 h-8 rounded-full bg-amber-100 overflow-hidden flex-shrink-0 mr-2">
<img
src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20Indian%20man%20with%20short%20dark%20hair%20and%20glasses%2C%20wearing%20a%20casual%20shirt%2C%20neutral%20expression%2C%20clean%20background%2C%20high%20quality%20portrait&width=100&height=100&seq=1&orientation=squarish"
alt="Hitesh"
className="w-full h-full object-cover object-top"
/>
</div>
<div className="px-4 py-3 bg-amber-600 text-white rounded-2xl rounded-tl-none">
<div className="flex space-x-1">
<div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
<div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
<div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '600ms' }}></div>
</div>
</div>
</div>
</div>
)}
<div ref={messagesEndRef} />
</div>
</div>
{/* Input area */}
<div className="bg-white border-t border-gray-200 p-4 sticky bottom-0 z-50">
<div className="max-w-3xl mx-auto flex gap-2">
<input
type="text"
value={inputMessage}
onChange={(e) => setInputMessage(e.target.value)}
onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
placeholder="Type your message here..."
className="flex-1 border border-gray-300 rounded-l-full py-3 px-6 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm bg-white"
/>
<button
onClick={handleSendMessage}
className="!rounded-button whitespace-nowrap bg-amber-600 text-white px-6 rounded-r-full cursor-pointer hover:bg-amber-700 transition-colors"
>
<i className="fas fa-paper-plane mr-2"></i>
Send
</button>
</div>
</div>
</div>
);
};
export default App