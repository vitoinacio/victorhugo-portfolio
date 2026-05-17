import { useState, useRef, useEffect } from "react";

export interface ChatMessage {
  id: string;
  role: string;
  content: string;
}

export function useCopilotViewModel() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{message: string} | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickActions = [
    "Quais as stacks do Victor?",
    "Me fale sobre o projeto Compras-e",
    "Resuma a experiência"
  ];

  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim() || isLoading) return;
    
    const userMessage = { id: Date.now().toString(), role: "user", content: messageContent };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages })
      });

      if (!response.ok) {
        throw new Error(await response.text() || "Erro na conexão");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";
      const assistantId = (Date.now() + 1).toString();

      if (reader) {
        setMessages(current => [...current, { id: assistantId, role: 'assistant', content: "" }]);
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          assistantContent += decoder.decode(value, { stream: true });
          setMessages(current => current.map(m => m.id === assistantId ? { ...m, content: assistantContent } : m));
        }
      }
    } catch (err: any) {
      setError({ message: err.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    sendMessage(input);
  };

  const handleQuickAction = (action: string) => {
    sendMessage(action);
  };

  return {
    messages,
    input,
    isLoading,
    error,
    messagesEndRef,
    quickActions,
    handleInputChange,
    handleSubmit,
    handleQuickAction
  };
}
