import React, { useState, useMemo, useEffect } from "react";
import { questionsByChapter } from "./questions";

export interface Question {
  id: number;
  topic: string;
  title: string;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
  code?: string;
  image?: string;
}

export default function DataPage() {
  const [activeChapter, setActiveChapter] = useState("Chapter 1: Java Primer");
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<
    number | null
  >(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [result, setResult] = useState<"correct" | "incorrect" | "">("");
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<number>>(
    new Set()
  );

  const CHAPTER_REVIEW = "Chapter 16: Chapter Review";
  const REVIEW_EMOJIS = ["🔅", "🔆", "⭐", "🌟"];

  const questions = useMemo(() => Object.values(questionsByChapter).flat(), []);

  const chapterEmojis: Record<string, string> = {
    "Chapter 1: Java Primer": "☕",
    "Chapter 2: Object-Oriented Design": "🏗️",
    "Chapter 3: Fundamental Data Structures": "🧱",
    "Chapter 4: Algorithm Analysis": "🧩",
    "Chapter 5: Recursion": "🔁",
    "Chapter 6: Stacks, Queues, and Deques": "📦",
    "Chapter 7: List and Iterator ADTs": "📋",
    "Chapter 8: Trees": "🌳",
    "Chapter 9: Priority Queues": "⚡",
    "Chapter 10: Maps, Hash Tables, and Skip Lists": "🗺️",
    "Chapter 11: Search Trees": "🔍",
    "Chapter 12: Sorting and Selection": "🔀",
    "Chapter 13: Text Processing": "📝",
    "Chapter 14: Graph Algorithms": "🕸️",
    "Chapter 15: Memory Management and B-Trees": "💾",
    [CHAPTER_REVIEW]: "🏖️",
  };

  const chapters = useMemo(
    () => Array.from(new Set(questions.map((q) => q.topic))),
    []
  );

  const isReview = activeChapter === CHAPTER_REVIEW;

  const chapterQuestions = useMemo(() => {
    if (isReview)
      return questions.filter((q) =>
        REVIEW_EMOJIS.some((emoji) => q.title.includes(emoji))
      );
    return questions.filter((q) => q.topic === activeChapter);
  }, [activeChapter, questions, isReview]);

  const subtopics = useMemo(
    () => Array.from(new Set(chapterQuestions.map((q) => q.title))),
    [chapterQuestions]
  );

  const filtered = useMemo(
    () => chapterQuestions.filter((q) => q.title === selectedSubtopic),
    [chapterQuestions, selectedSubtopic]
  );

  const currentQuestion = useMemo(() => {
    if (filtered.length === 0 || currentQuestionIndex === null) return null;
    return filtered[currentQuestionIndex] as Question;
  }, [filtered, currentQuestionIndex]);

  useEffect(() => {
    if (filtered.length > 0) refreshQuestion();
  }, [selectedSubtopic]);

  const refreshQuestion = () => {
    if (filtered.length === 0) return;
    if (usedQuestionIds.size >= filtered.length) setUsedQuestionIds(new Set());

    const available = filtered.filter((q) => !usedQuestionIds.has(q.id));
    const pool = available.length > 0 ? available : filtered;
    const random = pool[Math.floor(Math.random() * pool.length)];
    const newIndex = filtered.findIndex((q) => q.id === random.id);

    setCurrentQuestionIndex(newIndex);
    setUsedQuestionIds((prev) => {
      const updated = new Set(prev);
      updated.add(random.id);
      return updated;
    });
    setSelectedOption(null);
    setResult("");
  };

  const handleOptionClick = (opt: string, index: number) => {
    if (!currentQuestion) return;
    setSelectedOption(opt);

    const selectedLetter = String.fromCharCode(65 + index);
    const correctAnswer = currentQuestion.answer.trim().toUpperCase();
    setResult(selectedLetter === correctAnswer ? "correct" : "incorrect");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #667eea 0%, #764ba2 40%, #ff6a88 75%, #ffb347 100%)",
        padding: "30px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* HEADER */}
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "30px",
            marginBottom: "25px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          }}
        >
          <h1
            style={{
              fontSize: "2.2rem",
              fontWeight: "800",
              background:
                "linear-gradient(135deg, #764ba2 0%, #ff6a88 50%, #ffb347 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Data Structures & Algorithms Practice
          </h1>

          {/* CHAPTERS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            {chapters.map((ch) => (
              <button
                key={ch}
                onClick={() => {
                  setActiveChapter(ch);
                  setSelectedSubtopic(null);
                  setCurrentQuestionIndex(null);
                  setResult("");
                  setSelectedOption(null);
                }}
                style={{
                  padding: "18px",
                  borderRadius: "12px",
                  border:
                    activeChapter === ch
                      ? "3px solid #764ba2"
                      : "2px solid #e0e0e0",
                  cursor: "pointer",
                  background:
                    activeChapter === ch
                      ? "linear-gradient(135deg, #764ba2 0%, #ff6a88 100%)"
                      : "white",
                  color: activeChapter === ch ? "white" : "#333",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
              >
                {chapterEmojis[ch] && (
                  <span style={{ marginRight: "8px" }}>
                    {chapterEmojis[ch]}
                  </span>
                )}
                {ch}
              </button>
            ))}

            {/* Chapter Review button */}
            <button
              onClick={() => {
                setActiveChapter(CHAPTER_REVIEW);
                setSelectedSubtopic(null);
                setCurrentQuestionIndex(null);
                setResult("");
                setSelectedOption(null);
              }}
              style={{
                padding: "18px",
                borderRadius: "12px",
                border:
                  activeChapter === CHAPTER_REVIEW
                    ? "3px solid #764ba2"
                    : "2px solid #e0e0e0",
                cursor: "pointer",
                background:
                  activeChapter === CHAPTER_REVIEW
                    ? "linear-gradient(135deg, #764ba2 0%, #ff6a88 100%)"
                    : "white",
                color: activeChapter === CHAPTER_REVIEW ? "white" : "#333",
                fontWeight: "600",
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ marginRight: "8px" }}>🏖️</span>
              {CHAPTER_REVIEW}
            </button>
          </div>
        </div>

        {/* SUBTOPICS */}
        {subtopics.length > 0 && (
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              marginBottom: "25px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            }}
          >
            <h2 style={{ fontWeight: "700" }}>📚 Select Topic</h2>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                marginTop: "15px",
              }}
            >
              {subtopics.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubtopic(sub)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "50px",
                    border:
                      selectedSubtopic === sub
                        ? "2px solid #764ba2"
                        : "1px solid #ddd",
                    background:
                      selectedSubtopic === sub
                        ? "linear-gradient(135deg, #764ba2 0%, #ff6a88 100%)"
                        : "white",
                    color: selectedSubtopic === sub ? "white" : "#333",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* QUESTION CARD */}
        {currentQuestion && (
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "30px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                background: "linear-gradient(135deg, #f8f9ff 0%, #f0f2ff 100%)",
                padding: "30px",
                borderRadius: "16px",
                marginBottom: "30px",
                borderLeft: "5px solid #764ba2",
                boxShadow: "0 4px 12px rgba(118,75,162,0.1)",
              }}
            >
              <p
                style={{
                  fontSize: "1.25rem",
                  whiteSpace: "pre-line",
                  lineHeight: "1.9",
                  color: "#2d3748",
                  fontWeight: "500",
                }}
              >
                {currentQuestion.question}
              </p>

              {currentQuestion.code && (
                <pre
                  style={{
                    fontSize: "1rem",
                    marginTop: "15px",
                    background: "#e9ecef",
                    padding: "20px",
                    borderRadius: "12px",
                    overflowX: "auto",
                    fontFamily: "monospace",
                  }}
                >
                  {currentQuestion.code}
                </pre>
              )}

              {currentQuestion.image && (
                <img
                  src={currentQuestion.image}
                  alt="Visual"
                  style={{
                    marginTop: "15px",
                    maxWidth: "100%",
                    borderRadius: "12px",
                  }}
                />
              )}
            </div>

            {/* OPTIONS */}
            <div style={{ display: "grid", gap: "12px", marginTop: "15px" }}>
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedOption === opt;
                const letter = String.fromCharCode(65 + idx);

                return (
                  <button
                    key={opt}
                    onClick={() => handleOptionClick(opt, idx)}
                    style={{
                      padding: "14px 20px",
                      borderRadius: "10px",
                      border: isSelected
                        ? result === "correct"
                          ? "2px solid #28a745"
                          : "2px solid #dc3545"
                        : "2px solid #dee2e6",
                      cursor: "pointer",
                      background: isSelected
                        ? result === "correct"
                          ? "linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)"
                          : "linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)"
                        : "white",
                      fontWeight: "500",
                      textAlign: "left",
                      display: "flex",
                      gap: "10px",
                      transition: "all 0.2s ease",
                      boxShadow: isSelected
                        ? result === "correct"
                          ? "0 4px 12px rgba(40, 167, 69, 0.25)"
                          : "0 4px 12px rgba(220, 53, 69, 0.25)"
                        : "0 2px 6px rgba(0,0,0,0.04)",
                    }}
                  >
                    <span style={{ fontWeight: "800", color: "#764ba2" }}>
                      {letter}.
                    </span>{" "}
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* RESULT BOX */}
            {result && (
              <div
                style={{
                  marginTop: "25px",
                  padding: "25px",
                  borderRadius: "16px",
                  background:
                    result === "correct"
                      ? "linear-gradient(135deg, rgb(212, 237, 218) 0%, rgb(195, 230, 203) 100%)"
                      : "linear-gradient(135deg, rgb(248, 215, 218) 0%, rgb(245, 198, 203) 100%)",
                  border:
                    result === "correct"
                      ? "3px solid #28a745"
                      : "3px solid #dc3545",
                  boxShadow:
                    result === "correct"
                      ? "0px 6px 20px rgba(40, 167, 69, 0.2)"
                      : "0px 6px 20px rgba(220, 53, 69, 0.2)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginBottom:
                      result === "correct" && currentQuestion.explanation
                        ? "12px"
                        : 0,
                  }}
                >
                  <span style={{ fontSize: "2.5rem" }}>
                    {result === "correct" ? "🎉" : "💭"}
                  </span>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: result === "correct" ? "#155724" : "#721c24",
                    }}
                  >
                    {result === "correct"
                      ? "Perfect! You got it!"
                      : "Not quite! Try again"}
                  </span>
                </div>

                {result === "correct" && currentQuestion.explanation && (
                  <div
                    style={{
                      padding: "20px",
                      background: "rgba(255,255,255,0.8)",
                      borderRadius: "12px",
                      marginTop: "12px",
                      border: "2px solid rgba(114,28,36,0.2)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: "#721c24",
                        marginBottom: "8px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      EXPLANATION:
                    </div>
                    <div
                      style={{
                        fontSize: "1.2rem",
                        fontFamily: "monospace",
                        color: "#2d3748",
                        fontWeight: 600,
                        background: "#fff",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "2px solid #e9ecef",
                      }}
                    >
                      {currentQuestion.explanation}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
