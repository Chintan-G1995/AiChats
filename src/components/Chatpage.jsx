import React, { useState } from 'react';
import { MessageSquare, Settings, Folder, PlusCircle, Menu, Send, Image, X, Paperclip, ChevronDown } from 'lucide-react';

export default function ChatbotInterface() {
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      role: 'system', 
      content: 'Hello! How can I assist you today?' 
    },
    {
      id: 2,
      role: 'user',
      content: 'Can you help me design a chatbot interface?'
    },
    {
      id: 3,
      role: 'system',
      content: "I'd be happy to help you design a chatbot interface. What specific features are you looking for?"
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, role: 'user', content: inputValue }
      ]);
      setInputValue('');
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { 
            id: prev.length + 1, 
            role: 'system', 
            content: "I've received your message. This is a simulated response from the chatbot."
          }
        ]);
      }, 1000);
    }
  };
  
  return (
    <div className="flex h-screen bg-black text-gray-300">
      {/* Dark sidebar (5%) */}
      <div className="w-16 h-full bg-black border-r border-gray-800">
        <div className="flex flex-col items-center h-full py-4">
          <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center mb-8">
            <MessageSquare size={20} />
          </div>
          
          <div className="flex flex-col items-center gap-6 flex-1">
            <button className="w-10 h-10 rounded-md hover:bg-gray-800 flex items-center justify-center">
              <PlusCircle size={20} />
            </button>
            <button className="w-10 h-10 rounded-md hover:bg-gray-800 flex items-center justify-center">
              <Folder size={20} />
            </button>
            <button className="w-10 h-10 rounded-md hover:bg-gray-800 flex items-center justify-center">
              <Settings size={20} />
            </button>
          </div>
          
          <div className="mt-auto">
            <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-sm font-semibold">U</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main white content area with curved border */}
      <div className="relative flex-1">
        <div className="absolute top-0 left-0 w-full h-full bg-white rounded-tl-3xl overflow-hidden">
          {/* Top bar */}
          <div className="bg-gray-100 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Menu size={20} className="text-gray-600 mr-4" />
              <h1 className="text-gray-800 font-semibold">New Chat</h1>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-gray-600 hover:text-gray-800">
                <ChevronDown size={20} />
              </button>
            </div>
          </div>
          
          {/* Chat content */}
          <div className="flex h-[calc(100%-128px)]">
            {/* Left 50% - Messages */}
            <div className="relative w-full md:w-3/5 border-r border-gray-200 overflow-y-auto p-6">
              <div className="space-y-6 pb-20">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] rounded-lg p-4 ${
                        message.role === 'user' 
                          ? 'bg-indigo-600 text-white' 
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Floating toolbar */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-l-lg border border-gray-200">
                <div className="flex flex-col p-2 gap-3">
                  <button className="p-2 hover:bg-gray-100 rounded-md">
                    <Image size={16} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-md">
                    <Paperclip size={16} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-md">
                    <X size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right 40% - Empty or details panel */}
            <div className="hidden md:block md:w-2/5 bg-gray-50">
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800">Chat Details</h2>
                <p className="text-gray-600 mt-2">This panel can be used for additional information, settings, or context about the current conversation.</p>
              </div>
            </div>
          </div>
          
          {/* Input area */}
          <div className="absolute bottom-0 w-full bg-white border-t border-gray-200 p-4">
            <div className="mx-auto max-w-3xl flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Type your message here..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                onClick={handleSendMessage}
                className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}