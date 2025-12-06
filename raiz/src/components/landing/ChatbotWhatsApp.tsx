import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
  options?: { id: string; text: string }[];
}

interface ChatState {
  step: "initial" | "objective" | "details" | "name" | "complete";
  objective: string;
  details: string;
  userName: string;
}

const ChatbotWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatState, setChatState] = useState<ChatState>({
    step: "initial",
    objective: "",
    details: "",
    userName: "",
  });
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = "5586999334312";

  // Auto-scroll para a última mensagem
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Escutar evento customizado para abrir o chatbot
  useEffect(() => {
    const handleOpenChatbot = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChatbot', handleOpenChatbot);
    return () => window.removeEventListener('openChatbot', handleOpenChatbot);
  }, []);

  // Inicializar chat com mensagem de boas-vindas
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        text: "Olá! Eu sou o assistente virtual da NetCriativa. Para te ajudar a encontrar a solução ideal, me diga: Qual o seu principal objetivo ao buscar uma Landing Page?",
        sender: "bot",
        timestamp: new Date(),
        options: [
          { id: "sales", text: "Aumentar Vendas" },
          { id: "leads", text: "Capturar Leads" },
          { id: "other", text: "Outro Objetivo" },
        ],
      };
      setMessages([welcomeMessage]);
      setChatState({ ...chatState, step: "objective" });
    }
  }, [isOpen]);

  // Processar resposta do usuário
  const handleOptionClick = (optionId: string) => {
    const currentMessages = [...messages];
    const lastMessage = currentMessages[currentMessages.length - 1];

    if (lastMessage.options) {
      const selectedOption = lastMessage.options.find((opt) => opt.id === optionId);
      if (selectedOption) {
        // Adicionar mensagem do usuário
        const userMessage: Message = {
          id: `user-${Date.now()}`,
          text: selectedOption.text,
          sender: "user",
          timestamp: new Date(),
        };
        currentMessages.push(userMessage);

        // Remover opções da última mensagem do bot
        if (lastMessage.options) {
          lastMessage.options = undefined;
        }

        setMessages(currentMessages);
        setIsLoading(true);

        // Processar próximo passo
        setTimeout(() => {
          processStep(optionId, selectedOption.text);
        }, 500);
      }
    }
  };

  // Processar entrada de texto
  const handleInputSubmit = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsLoading(true);

    setTimeout(() => {
      processTextInput(inputValue);
    }, 500);
  };

  // Processar cliques em opções
  const processStep = (optionId: string, optionText: string) => {
    const newState = { ...chatState };

    if (chatState.step === "objective") {
      newState.objective = optionText;
      newState.step = "details";

      const detailsMessage: Message = {
        id: `bot-${Date.now()}`,
        text:
          optionId === "other"
            ? "Entendi. Por favor, descreva brevemente o que você busca."
            : optionId === "sales"
              ? "Excelente! Nossas Landing Pages são projetadas com Copy Persuasiva e Design de Alta Conversão. Você já tem um produto/serviço pronto para vender?"
              : "Ótimo! A captação de leads é a base de qualquer funil de vendas. Para qual tipo de público você deseja capturar leads?",
        sender: "bot",
        timestamp: new Date(),
        options:
          optionId === "other"
            ? undefined
            : optionId === "sales"
              ? [
                  { id: "ready", text: "Sim, quero fechar agora" },
                  { id: "doubts", text: "Tenho dúvidas sobre o processo" },
                ]
              : [
                  { id: "b2c", text: "Público B2C (Consumidor Final)" },
                  { id: "b2b", text: "Público B2B (Empresas)" },
                ],
      };

      setMessages([...messages, detailsMessage]);
      setChatState(newState);
    } else if (chatState.step === "details") {
      newState.details = optionText;
      newState.step = "name";

      const nameMessage: Message = {
        id: `bot-${Date.now()}`,
        text: "Certo. Para agilizar seu atendimento e garantir que você fale com a pessoa certa, qual o seu nome?",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages([...messages, nameMessage]);
      setChatState(newState);
    }

    setIsLoading(false);
  };

  // Processar entrada de texto
  const processTextInput = (text: string) => {
    const newState = { ...chatState };

    if (chatState.step === "details") {
      newState.details = text;
      newState.step = "name";

      const nameMessage: Message = {
        id: `bot-${Date.now()}`,
        text: "Certo. Para agilizar seu atendimento e garantir que você fale com a pessoa certa, qual o seu nome?",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages([...messages, nameMessage]);
      setChatState(newState);
    } else if (chatState.step === "name") {
      newState.userName = text;
      newState.step = "complete";

      const completeMessage: Message = {
        id: `bot-${Date.now()}`,
        text: `Perfeito, ${text}! Estou te encaminhando para o WhatsApp. O especialista já saberá que seu foco é **${newState.objective}**. Clique no botão abaixo para iniciar a conversa.`,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages([...messages, completeMessage]);
      setChatState(newState);
    }

    setIsLoading(false);
  };

  // Gerar mensagem pré-preenchida para WhatsApp
  const generateWhatsAppMessage = () => {
    const message = `Olá, sou ${chatState.userName}, e meu objetivo é ${chatState.objective}${
      chatState.details ? ` (${chatState.details})` : ""
    }. Gostaria de falar com um especialista sobre a contratação dos serviços da NetCriativa.`;
    return encodeURIComponent(message);
  };

  // Abrir WhatsApp com mensagem qualificada
  const handleWhatsAppClick = () => {
    const message = generateWhatsAppMessage();
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Botão flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform animate-bounce"
          aria-label="Abrir chat"
        >
          <MessageCircle className="h-8 w-8" />
        </button>
      )}

      {/* Janela do chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-h-[600px] bg-white rounded-2xl shadow-[var(--shadow-elegant)] flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#25D366] to-[#1da851] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-sm">NetCriativa</h3>
                <p className="text-xs opacity-90">Resposta em tempo real</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className="flex flex-col gap-2">
                <div
                  className={`flex ${
                    message.sender === "bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                      message.sender === "bot"
                        ? "bg-white text-gray-800 border border-gray-200"
                        : "bg-[#25D366] text-white"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>

                {/* Opções */}
                {message.options && message.options.length > 0 && (
                  <div className="flex flex-col gap-2 mt-2">
                    {message.options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleOptionClick(option.id)}
                        disabled={isLoading}
                        className="w-full text-left px-4 py-3 rounded-lg bg-white border border-gray-200 hover:border-[#25D366] hover:bg-[#f0fdf4] transition-all text-sm font-medium text-gray-800 flex items-center justify-between group disabled:opacity-50"
                      >
                        <span>{option.text}</span>
                        <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {chatState.step !== "complete" && (
            <div className="border-t border-gray-200 p-4 bg-white">
              {chatState.step === "details" && chatState.objective === "Outro Objetivo" ? (
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") handleInputSubmit();
                    }}
                    placeholder="Descreva seu objetivo..."
                    className="text-sm"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleInputSubmit}
                    disabled={isLoading || !inputValue.trim()}
                    size="sm"
                    className="bg-[#25D366] hover:bg-[#1da851]"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              ) : chatState.step === "name" ? (
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") handleInputSubmit();
                    }}
                    placeholder="Seu nome..."
                    className="text-sm"
                    disabled={isLoading}
                  />
                  <Button
                    onClick={handleInputSubmit}
                    disabled={isLoading || !inputValue.trim()}
                    size="sm"
                    className="bg-[#25D366] hover:bg-[#1da851]"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              ) : null}
            </div>
          )}

          {/* Botão Final */}
          {chatState.step === "complete" && (
            <div className="border-t border-gray-200 p-4 bg-white">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#1da851] text-white font-bold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar Especialista no WhatsApp
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatbotWhatsApp;
