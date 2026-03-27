import { CHATBOT_FAQS, CHATBOT_FALLBACK } from "./chatbotData";

const STOP = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "have",
  "has",
  "had",
  "do",
  "does",
  "did",
  "will",
  "would",
  "could",
  "should",
  "may",
  "might",
  "must",
  "shall",
  "can",
  "need",
  "to",
  "of",
  "in",
  "for",
  "on",
  "with",
  "at",
  "by",
  "from",
  "or",
  "as",
  "it",
  "its",
  "this",
  "that",
  "these",
  "those",
  "i",
  "you",
  "we",
  "they",
  "what",
  "which",
  "who",
  "whom",
  "how",
  "when",
  "where",
  "why",
  "if",
  "and",
  "but",
  "not",
  "no",
  "yes",
  "so",
  "my",
  "your",
  "our",
  "their",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .map((w) => w.trim())
    .filter((w) => w.length > 1 && !STOP.has(w));
}

export function getChatbotResponse(userMessage: string): string {
  const trimmed = userMessage.trim();
  if (!trimmed) {
    return CHATBOT_FALLBACK;
  }

  const lower = trimmed.toLowerCase();
  const tokens = new Set(tokenize(trimmed));

  let bestScore = 0;
  let bestAnswer = CHATBOT_FALLBACK;

  for (const faq of CHATBOT_FAQS) {
    let score = 0;
    for (const kw of faq.keywords) {
      const k = kw.toLowerCase();
      if (lower.includes(k)) {
        score += Math.min(8, 2 + Math.floor(k.length / 4));
        continue;
      }
      const tokenHits = k.split(/\s+/).filter((t) => t.length > 2 && tokens.has(t));
      score += tokenHits.length * 2;
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = faq.answer;
    }
  }

  if (bestScore >= 5) {
    return bestAnswer;
  }

  for (const faq of CHATBOT_FAQS) {
    for (const kw of faq.keywords) {
      const k = kw.toLowerCase();
      if (k.length < 4) continue;
      for (const tok of tokens) {
        if (tok.length >= 4 && (tok.includes(k) || k.includes(tok))) {
          return faq.answer;
        }
      }
    }
  }

  return bestScore >= 3 ? bestAnswer : CHATBOT_FALLBACK;
}
