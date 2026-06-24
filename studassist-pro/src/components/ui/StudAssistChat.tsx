import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "Quels services proposez-vous ?",
  "Comment s'inscrire ?",
  "Faites-vous de l'orientation ?",
  "Préparez-vous aux concours ?",
];

export default function StudAssistChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Bonjour ! 👋 Je suis l'assistant de **STUDASSIST**. Posez-moi toutes vos questions sur nos services d'orientation, de soutien scolaire ou de préparation aux concours !",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setIsVisible(true), 1500);
    const t2 = setTimeout(() => setShowPulse(true), 4000);
    const t3 = setTimeout(() => setShowPulse(false), 10000);
    const openHandler = () => { setIsOpen(true); setShowPulse(false); };
    window.addEventListener("open-studassist-chat", openHandler);
    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      window.removeEventListener("open-studassist-chat", openHandler);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch reply");
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content ?? "Je n'ai pas pu traiter votre demande. Veuillez réessayer.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Une erreur est survenue. Veuillez réessayer." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Advanced inline parser for links, bold, emails, and phone numbers
  const parseInline = (text: string): React.ReactNode[] => {
    const regex = /(\[.*?\]\(.*?\)|\*\*.*?\*\*|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|\+212[-\s]?[5-7][-\s]*(?:\d[-\s]*){7}\d|\b0[5-7][-\s]*(?:\d[-\s]*){7}\d)/g;
    const parts = text.split(regex);

    return parts.map((part, i) => {
      if (!part) return null;

      // Link: [text](url)
      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        const url = linkMatch[2];
        const label = linkMatch[1];
        if (url.startsWith("/")) {
          return (
            <Link
              key={i}
              to={url}
              onClick={() => setIsOpen(false)}
              className="text-[#1BB79D] underline hover:text-[#0B1F5C] font-semibold transition-colors"
            >
              {label}
            </Link>
          );
        }
        return (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1BB79D] underline hover:text-[#0B1F5C] font-semibold transition-colors"
          >
            {label}
          </a>
        );
      }

      // Bold: **text**
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-extrabold text-[#0B1F5C]">
            {part.slice(2, -2)}
          </strong>
        );
      }

      // Email: test@example.com
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
        return (
          <a
            key={i}
            href={`mailto:${part}`}
            className="text-[#1BB79D] underline hover:text-[#0B1F5C] font-semibold transition-colors"
          >
            {part}
          </a>
        );
      }

      // Phone: +2126... or 06...
      if (/^(\+212|0)/.test(part)) {
        const cleanPhone = part.replace(/[-\s]/g, "");
        return (
          <a
            key={i}
            href={`tel:${cleanPhone}`}
            className="text-[#1BB79D] underline hover:text-[#0B1F5C] font-bold transition-colors whitespace-nowrap"
          >
            {part}
          </a>
        );
      }

      return <span key={i}>{part}</span>;
    });
  };

  // Structured block and list parser
  const renderMessageContent = (content: string) => {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let currentListItems: React.ReactNode[] = [];
    let inList = false;

    const flushList = (key: number) => {
      if (currentListItems.length > 0) {
        elements.push(
          <ul key={`list-${key}`} className="list-disc pl-4 my-1.5 space-y-1 text-[#0B1F5C]">
            {currentListItems}
          </ul>
        );
        currentListItems = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();
      const isListItem =
        trimmed.startsWith("- ") ||
        trimmed.startsWith("* ") ||
        trimmed.startsWith("• ") ||
        /^\d+\.\s/.test(trimmed);

      if (isListItem) {
        if (!inList) {
          inList = true;
        }
        const itemText = trimmed
          .replace(/^[-*•]\s+/, "")
          .replace(/^\d+\.\s+/, "");
        currentListItems.push(
          <li key={`li-${index}`} className="text-[13px] leading-relaxed">
            {parseInline(itemText)}
          </li>
        );
      } else {
        if (inList) {
          flushList(index);
          inList = false;
        }

        if (trimmed === "") {
          elements.push(<div key={`space-${index}`} className="h-1.5" />);
        } else {
          elements.push(
            <p key={`p-${index}`} className="text-[13px] leading-relaxed mb-1">
              {parseInline(line)}
            </p>
          );
        }
      }
    });

    if (inList) {
      flushList(lines.length);
    }

    return elements;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 lg:bottom-8 lg:right-8 z-[999] flex flex-col items-end gap-3">

          {/* ── Chat Window ─────────────────────────────── */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.92 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className="w-[340px] sm:w-[380px] bg-white rounded-[1.75rem] shadow-[0_25px_60px_rgba(11,31,92,0.18)] border border-gray-100 overflow-hidden flex flex-col"
                style={{ maxHeight: "520px" }}
              >
                {/* Header */}
                <div className="bg-[#1BB79D] px-5 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 p-1.5 overflow-hidden">
                    <img src="/favicon.png" alt="StudAssist" className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-black text-sm leading-tight">Assistant STUDASSIST</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 bg-[#1BB79D] rounded-full animate-pulse" />
                      <p className="text-white/70 text-[10px] font-semibold uppercase tracking-wide">En ligne · Répond instantanément</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-7 h-7 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors shrink-0"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      {msg.role === "assistant" && (
                        <div className="w-7 h-7 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center shrink-0 mr-2 mt-0.5 p-1 overflow-hidden">
                          <img src="/favicon.png" alt="StudAssist" className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div
                        className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-[13.5px] leading-relaxed ${
                          msg.role === "user"
                            ? "bg-[#1BB79D] text-white rounded-br-md"
                            : "bg-[#EEF9F7] text-[#0B1F5C] rounded-bl-md border border-[#C6EDE7] font-medium"
                        }`}
                      >
                        {msg.role === "user" ? msg.content : renderMessageContent(msg.content)}
                      </div>
                    </div>
                  ))}

                  {/* Loading dots */}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="w-7 h-7 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center shrink-0 mr-2 mt-0.5 p-1 overflow-hidden">
                        <img src="/favicon.png" alt="StudAssist" className="w-full h-full object-contain" />
                      </div>
                      <div className="bg-[#EEF9F7] border border-[#C6EDE7] px-4 py-3 rounded-2xl rounded-bl-md flex items-center gap-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-1.5 h-1.5 bg-[#1BB79D] rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested questions (only on first message) */}
                {messages.length === 1 && (
                  <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-[11px] font-semibold text-[#1BB79D] bg-gray-50 border border-gray-200 hover:bg-[#1BB79D] hover:text-white hover:border-[#1BB79D] px-3 py-1.5 rounded-full transition-all"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="px-4 pb-4 pt-2 border-t border-gray-50">
                  <form
                    onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                    className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-2.5 focus-within:border-[#1BB79D] focus-within:shadow-[0_0_0_3px_rgba(27,183,157,0.1)] transition-all"
                  >
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Votre question..."
                      className="flex-1 bg-transparent text-[13px] text-gray-800 placeholder:text-gray-400 outline-none font-medium"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="w-8 h-8 bg-[#1BB79D] disabled:opacity-40 rounded-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 shrink-0"
                    >
                      <svg className="w-4 h-4 text-white rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Floating Button ──────────────────────────── */}
          <div className="relative flex items-center">
            {/* Tooltip */}
            <AnimatePresence>
              {showPulse && !isOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.85 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  className="absolute right-[calc(100%+12px)] pointer-events-none"
                >
                  <div className="bg-white/95 backdrop-blur-md border border-gray-100 py-3 px-4 rounded-2xl shadow-2xl min-w-[190px]">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-[#1BB79D] rounded-full animate-pulse" />
                      <span className="text-[10px] font-black text-[#1BB79D] uppercase tracking-widest">Assistant IA</span>
                    </div>
                    <span className="text-[#0B1F5C] font-black text-sm block leading-tight">Besoin d'info ?</span>
                    <span className="text-gray-500 text-[11px] font-medium block">Je réponds instantanément !</span>
                  </div>
                  <div className="ml-auto mr-4 w-3 h-3 bg-white/95 transform rotate-45 border-r border-b border-gray-100 -mt-1.5" />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              onClick={() => { setIsOpen((v) => !v); setShowPulse(false); }}
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative w-14 h-14 lg:w-16 lg:h-16 bg-[#1BB79D] text-white rounded-full shadow-[0_10px_30px_rgba(27,183,157,0.3)] hover:shadow-[0_15px_40px_rgba(27,183,157,0.4)] transition-shadow flex items-center justify-center z-20"
            >
              {/* Animated ring */}
              <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full border-2 border-[#1BB79D]"
              />

              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-6"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="chat"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-7 h-7"
                    fill="currentColor" viewBox="0 0 24 24"
                  >
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                  </motion.svg>
                )}
              </AnimatePresence>

              {/* Unread dot when closed */}
              {!isOpen && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#EE5C5F] rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-[8px] font-black">IA</span>
                </span>
              )}
            </motion.button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
