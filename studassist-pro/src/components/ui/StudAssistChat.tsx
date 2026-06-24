import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";

// ─── STUDASSIST Knowledge Base (compiled from all FAQs) ──────────────────────
const SYSTEM_PROMPT = `Tu es l'assistant virtuel intelligent de STUDASSIST, un cabinet de conseil éducatif de premier plan basé à Casablanca, Maroc. Tu réponds exclusivement aux questions liées à STUDASSIST et à ses services.

## QUI EST STUDASSIST ?
STUDASSIST est un cabinet de conseil dédié à l'élève et à l'étudiant, spécialisé dans le soutien scolaire, l'orientation, la préparation aux examens et l'accompagnement vers les études supérieures au Maroc et à l'international. Fondé en 2018, STUDASSIST dispose d'un espace de 500m² à Casablanca et accompagne les élèves du primaire au supérieur. 100% des élèves orientés décrochent une des écoles du TOP 3 de leurs choix.

## SERVICES PROPOSÉS :

### 1. SOUTIEN SCOLAIRE
- Primaire : consolidation des fondamentaux (lecture, maths, méthode), brain training, ateliers Montessori, calcul mental, préparation entrée au collège
- Collège & Lycée : toutes matières (maths, physique-chimie, SVT, français, anglais, philosophie, économie), méthodologie, organisation, gestion du stress
- Supérieur (université, écoles de commerce, ingénierie, santé, BTS, Bachelor, Master, MSc) : maths, algèbre, probabilités, statistiques, physique, biochimie, informatique, économie, finance, comptabilité, droit, anglais académique
- Cours individuels ou petits groupes de 2 à 4 élèves maximum
- Stages intensifs pendant les vacances scolaires

### 2. ORIENTATION SCOLAIRE & ÉTUDES SUPÉRIEURES
- Entretien initial + diagnostic + profiling approfondi
- Stratégie d'orientation personnalisée : choix des filières, sélection des établissements, planification des candidatures
- Accompagnement des candidatures : lettres de motivation, essays, CV, formulaires, Parcoursup, entretiens
- Destinations couvertes : France, Espagne, Belgique, Royaume-Uni, Canada, Suisse et +25 destinations internationales
- Systèmes scolaires accompagnés : mission française, marocain, américain, britannique, belge, international
- Accompagnement aussi bien au Maroc qu'à l'international
- Suivi en présentiel ET à distance / visioconférence

### 3. PRÉPARATION AU BACCALAURÉAT
- Bac de Français, épreuves de spécialités, Philosophie, Grand Oral
- Méthodologie : dissertation, commentaire de texte, argumentation, prise de parole orale
- Préparation aux épreuves en individuel ou petits groupes
- Lien avec l'orientation post-bac

### 4. PRÉPARATION AUX CONCOURS
- Grandes écoles de commerce et d'ingénierie
- Sciences Po (dès la Première)
- Architecture, Avenir/GEIPI
- Médecine et pharmacie (Maroc et Belgique)
- ENCG / ISCAE
- UM6P
- SÉSAMATH / Accès
- GMAT, TAGE MAGE, SAT
- Concours blancs et entraînements en conditions réelles

### 5. CERTIFICATIONS DE LANGUES
- IELTS, TOEFL, TOEIC (anglais)
- TCF, DALF, DELF (français)
- DELE (espagnol)
- Goethe (allemand)
- SAT
- Scores indicatifs : IELTS 6.5-7.5, TOEFL 80-100+, TCF/DALF B2-C1, DELE B2-C1

### 6. DÉMARCHES ADMINISTRATIVES & LOGEMENT ÉTUDIANT
- Visa étudiant, titre de séjour, assurance santé, compte bancaire
- Équivalences de diplômes, traductions officielles, apostilles
- Recherche de logement (résidences, studios, colocations)
- Sécurisation à distance contre les arnaques

## ORGANISATION & PRATIQUE :
- Localisation : Casablanca, espace de 500m² dédié aux élèves
- Horaires : lundi au samedi, flexibles selon les emplois du temps scolaires
- Communication : email, téléphone ou via le site web
- Contact / inscription : via le site internet ou téléphone
- Accompagnement à distance possible (visioconférence)
- Parents impliqués : points réguliers, rapports pédagogiques
- Premier contact : cours découverte ou séance d'orientation
- Depuis 2018 (plus de 6 ans d'expérience)

## RÈGLES ABSOLUES :
1. Tu réponds UNIQUEMENT aux questions relatives à STUDASSIST et à ses services.
2. Si une question est hors contexte (politique, recettes, sport, technologie non liée à l'éducation, etc.), réponds UNIQUEMENT : "Je suis l'assistant de STUDASSIST et je peux uniquement vous aider avec nos services éducatifs. Avez-vous des questions sur nos accompagnements ?"
3. Tu ne dois JAMAIS inventer des informations, des prix ou des détails non mentionnés.
4. Tu dois être chaleureux, professionnel, concis et encourageant.
5. Pour les demandes d'inscription ou de contact, redirige vers : le formulaire sur le site ou en demandant de nous appeler directement.
6. Tu réponds en FRANÇAIS par défaut. Si l'utilisateur écrit en arabe ou en anglais, réponds dans sa langue.
7. Limite tes réponses à 3-4 phrases maximum sauf si la question nécessite plus de détails.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY as string;
const GROQ_MODEL = "llama-3.3-70b-versatile";

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
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...newMessages.map((m) => ({ role: m.role, content: m.content })),
          ],
          temperature: 0.5,
          max_tokens: 512,
        }),
      });

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

  // Simple markdown bold parser
  const renderText = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) =>
      part.startsWith("**") && part.endsWith("**")
        ? <strong key={i}>{part.slice(2, -2)}</strong>
        : <span key={i}>{part}</span>
    );
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
                        {renderText(msg.content)}
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
