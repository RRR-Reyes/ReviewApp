import React, { useState, useMemo, useEffect } from "react";
import {
  archModule1Questions,
  archModule2Questions,
  archModule3Questions,
  // archModule4Questions,
  // archModule5Questions,
} from "./questions";

export default function SystemArchitecturePage() {
  const [activeModule, setActiveModule] = useState("Module 1: Number Systems");
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [result, setResult] = useState("");
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<number>>(
    new Set()
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<
    number | null
  >(null);
  const [questionKey, setQuestionKey] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentSet = useMemo(() => {
    if (activeModule === "Module 1: Number Systems")
      return archModule1Questions;
    if (activeModule === "Module 2: Data Representation")
      return archModule2Questions;
    if (activeModule === "Module 3: MIPS Instructions")
      return archModule3Questions;
    return archModule1Questions;
  }, [activeModule]);

  const topics = useMemo(
    () => Array.from(new Set(currentSet.map((q) => q.topic))),
    [currentSet]
  );

  const subtopics = useMemo(() => {
    if (!selectedTopic) return [];
    return Array.from(
      new Set(
        currentSet
          .filter((q) => q.topic === selectedTopic)
          .map((q) => q.subtopic)
      )
    );
  }, [currentSet, selectedTopic]);

  const filtered = useMemo(
    () =>
      currentSet.filter(
        (q) => q.topic === selectedTopic && q.subtopic === selectedSubtopic
      ),
    [currentSet, selectedTopic, selectedSubtopic]
  );

  const currentQuestion = useMemo(() => {
    if (filtered.length === 0 || currentQuestionIndex === null) return null;

    const q = filtered[currentQuestionIndex];
    if (!q) return null;

    try {
      if (q.generate) {
        const generated = q.generate();
        return { ...q, prompt: generated.prompt, answer: generated.answer };
      }
      return q;
    } catch (e) {
      console.error("Question generation failed:", e, "Question ID:", q.id, "Subtopic:", q.subtopic);
      return null;
    }
  }, [filtered, currentQuestionIndex, questionKey]);

  useEffect(() => {
    if (filtered.length > 0) {
      const randomIdx = Math.floor(Math.random() * filtered.length);
      setCurrentQuestionIndex(randomIdx);
      setUsedQuestionIds(new Set([filtered[randomIdx].id]));
      setQuestionKey(0);
    }
  }, [selectedSubtopic, filtered]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;

      if (e.key.toLowerCase() === "r" && currentQuestion) {
        e.preventDefault();
        refreshQuestion();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentQuestion, filtered]);

  const handleModuleChange = (newModule: string) => {
    setActiveModule(newModule);
    setSelectedTopic(null);
    setSelectedSubtopic(null);
    setCurrentQuestionIndex(null);
    setUserAnswer("");
    setResult("");
    setShowAnswer(false);
    setUsedQuestionIds(new Set());
  };

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    setSelectedSubtopic(null);
    setCurrentQuestionIndex(null);
    setUserAnswer("");
    setResult("");
    setShowAnswer(false);
    setUsedQuestionIds(new Set());
  };

  const handleSubtopicClick = (subtopic: string) => {
    setSelectedSubtopic(subtopic);
    setCurrentQuestionIndex(null);
    setUserAnswer("");
    setResult("");
    setShowAnswer(false);
    setUsedQuestionIds(new Set());
  };

  const checkAnswer = () => {
    if (!currentQuestion) return;

    const cleanUser = userAnswer.replace(/\s+/g, "").toLowerCase();
    const cleanCorrect = currentQuestion.answer
      .replace(/\s+/g, "")
      .toLowerCase();

    if (cleanUser === cleanCorrect) {
      setResult("correct");
    } else {
      setResult("incorrect");
      setShowAnswer(true);
    }
  };

  const refreshQuestion = () => {
    if (filtered.length === 0) return;

    if (usedQuestionIds.size >= filtered.length) {
      setUsedQuestionIds(new Set());
    }

    const availableIndices = filtered
      .map((_, idx) => idx)
      .filter((idx) => !usedQuestionIds.has(filtered[idx].id));

    const indices =
      availableIndices.length > 0
        ? availableIndices
        : filtered.map((_, idx) => idx);

    const randomIdx = indices[Math.floor(Math.random() * indices.length)];

    setCurrentQuestionIndex(randomIdx);
    setUsedQuestionIds(
      (prev) => new Set(Array.from(prev).concat(filtered[randomIdx].id))
    );
    setQuestionKey((prev) => prev + 1);
    setUserAnswer("");
    setResult("");
    setShowAnswer(false);
  };

  const binarySymbols = ["0", "1", "₂", "₈", "₁₀", "₁₆"];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
        padding: "30px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Header Card */}
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
              margin: "0 0 20px 0",
              fontSize: "2.2rem",
              background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "800",
            }}
          >
            System Architecture Practice
          </h1>

          {/* Module Selector */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "15px",
            }}
          >
            {[
              { name: "Module 1: Number Systems", emoji: "🔢" },
              { name: "Module 2: Data Representation", emoji: "💾" },
              { name: "Module 3: MIPS Instructions", emoji: "💻" },
              //{ name: "Module 4: MIPS Program Simulation", emoji: "🔄" }, // ← ADD
              //{ name: "Module 5: C to Assembly & Memory", emoji: "🧠" }, // ← ADD
            ].map((mod) => (
              <button
                key={mod.name}
                onClick={() => handleModuleChange(mod.name)}
                style={{
                  padding: "18px",
                  borderRadius: "12px",
                  border:
                    activeModule === mod.name
                      ? "3px solid #11998e"
                      : "2px solid #e0e0e0",
                  background:
                    activeModule === mod.name
                      ? "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
                      : "white",
                  color: activeModule === mod.name ? "white" : "#333",
                  fontWeight: "600",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  transform:
                    activeModule === mod.name ? "translateY(-2px)" : "none",
                  boxShadow:
                    activeModule === mod.name
                      ? "0 8px 20px rgba(17, 153, 142, 0.4)"
                      : "0 2px 8px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  if (activeModule !== mod.name) {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 16px rgba(0,0,0,0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeModule !== mod.name) {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0,0,0,0.05)";
                  }
                }}
              >
                <span style={{ fontSize: "1.5rem", marginRight: "8px" }}>
                  {mod.emoji}
                </span>
                {mod.name.replace("Module ", "M")}
              </button>
            ))}
          </div>
        </div>

        {/* Topic Selection Card */}
        {topics.length > 0 && (
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              marginBottom: "25px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            }}
          >
            <h2
              style={{
                margin: "0 0 15px 0",
                fontSize: "1.3rem",
                color: "#333",
                fontWeight: "700",
              }}
            >
              📚 Select Topic
            </h2>
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => handleTopicClick(topic)}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "50px",
                    border: "none",
                    cursor: "pointer",
                    background:
                      selectedTopic === topic
                        ? "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
                        : "#f5f5f5",
                    color: selectedTopic === topic ? "white" : "#555",
                    fontWeight: "600",
                    fontSize: "0.95rem",
                    transition: "all 0.3s ease",
                    boxShadow:
                      selectedTopic === topic
                        ? "0 4px 12px rgba(17, 153, 142, 0.4)"
                        : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedTopic !== topic) {
                      e.currentTarget.style.background = "#e8e8e8";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedTopic !== topic) {
                      e.currentTarget.style.background = "#f5f5f5";
                    }
                  }}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Subtopic Selection Card */}
        {selectedTopic && subtopics.length > 0 && (
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              marginBottom: "25px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            }}
          >
            <h2
              style={{
                margin: "0 0 15px 0",
                fontSize: "1.3rem",
                color: "#333",
                fontWeight: "700",
              }}
            >
              🎯 Select Subtopic
            </h2>
            <div
              style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              {subtopics.map((subtopic) => (
                <button
                  key={subtopic}
                  onClick={() => handleSubtopicClick(subtopic)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: "50px",
                    border:
                      selectedSubtopic === subtopic
                        ? "2px solid #11998e"
                        : "1px solid #ddd",
                    cursor: "pointer",
                    background:
                      selectedSubtopic === subtopic ? "#11998e" : "white",
                    color: selectedSubtopic === subtopic ? "white" : "#666",
                    fontWeight: "500",
                    fontSize: "0.9rem",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (selectedSubtopic !== subtopic) {
                      e.currentTarget.style.borderColor = "#11998e";
                      e.currentTarget.style.color = "#11998e";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedSubtopic !== subtopic) {
                      e.currentTarget.style.borderColor = "#ddd";
                      e.currentTarget.style.color = "#666";
                    }
                  }}
                >
                  {subtopic}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Question Card */}
        {currentQuestion ? (
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            }}
          >
            {/* Question Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "30px",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
                    color: "white",
                    padding: "10px 18px",
                    borderRadius: "50px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(17, 153, 142, 0.3)",
                  }}
                >
                  {selectedTopic} → {selectedSubtopic}
                </div>
              </div>
              <button
                onClick={refreshQuestion}
                style={{
                  padding: "14px 28px",
                  borderRadius: "50px",
                  border: "none",
                  background:
                    "linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%)",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 6px 20px rgba(255, 107, 107, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "scale(1.05) translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(255, 107, 107, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 20px rgba(255, 107, 107, 0.4)";
                }}
              >
                <span style={{ fontSize: "1.3rem" }}>🔄</span>
                <span>New Question</span>
                <span
                  style={{
                    background: "rgba(255, 255, 255, 0.3)",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    marginLeft: "4px",
                  }}
                >
                  R
                </span>
              </button>
            </div>

            {/* Question Text */}
            <div
              style={{
                background: "linear-gradient(135deg, #f0fff4 0%, #e6fffa 100%)",
                padding: "30px",
                borderRadius: "16px",
                marginBottom: "30px",
                borderLeft: "5px solid #11998e",
                boxShadow: "0 4px 12px rgba(17, 153, 142, 0.1)",
              }}
            >
              <p
                style={{
                  fontSize: "1.25rem",
                  margin: 0,
                  whiteSpace: "pre-line",
                  lineHeight: "1.9",
                  color: "#2d3748",
                  fontWeight: "500",
                }}
              >
                {currentQuestion.prompt}
              </p>
            </div>

            {/* Binary Symbol Toolbar */}
            <div
              style={{
                background: "#f8f9fa",
                padding: "18px",
                borderRadius: "12px",
                marginBottom: "25px",
                border: "2px solid #e9ecef",
              }}
            >
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#6c757d",
                  marginBottom: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                }}
              >
                ⚡ QUICK INSERT
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                {binarySymbols.map((sym) => (
                  <button
                    key={sym}
                    onClick={() => setUserAnswer((prev) => prev + sym)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "10px",
                      border: "2px solid #e9ecef",
                      background: "white",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      fontWeight: "600",
                      fontSize: "1.05rem",
                      minWidth: "44px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#11998e";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.borderColor = "#11998e";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 8px rgba(17, 153, 142, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "white";
                      e.currentTarget.style.color = "black";
                      e.currentTarget.style.borderColor = "#e9ecef";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 4px rgba(0,0,0,0.05)";
                    }}
                  >
                    {sym}
                  </button>
                ))}
              </div>
            </div>

            {/* Answer Input */}
            <div style={{ marginBottom: "25px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  fontWeight: "700",
                  color: "#495057",
                  marginBottom: "10px",
                  letterSpacing: "0.3px",
                }}
              >
                YOUR ANSWER:
              </label>
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
                placeholder="Type your answer here..."
                style={{
                  width: "100%",
                  padding: "20px",
                  fontSize: "1.15rem",
                  borderRadius: "12px",
                  border:
                    result === "correct"
                      ? "3px solid #28a745"
                      : result === "incorrect"
                      ? "3px solid #dc3545"
                      : "3px solid #dee2e6",
                  boxSizing: "border-box",
                  transition: "all 0.3s ease",
                  fontFamily: "monospace",
                  background: "#f8f9fa",
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.05)",
                }}
                onFocus={(e) => {
                  if (!result) {
                    e.currentTarget.style.borderColor = "#11998e";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 3px rgba(17, 153, 142, 0.1)";
                  }
                }}
                onBlur={(e) => {
                  if (!result) {
                    e.currentTarget.style.borderColor = "#dee2e6";
                    e.currentTarget.style.boxShadow =
                      "inset 0 2px 4px rgba(0,0,0,0.05)";
                  }
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={checkAnswer}
              style={{
                width: "100%",
                padding: "18px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "1.15rem",
                transition: "all 0.3s ease",
                boxShadow: "0 6px 20px rgba(40, 167, 69, 0.3)",
                marginBottom: "25px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(40, 167, 69, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(40, 167, 69, 0.3)";
              }}
            >
              ✓ Check Answer
            </button>

            {/* Result Display */}
            {result && (
              <div
                style={{
                  padding: "25px",
                  borderRadius: "16px",
                  background:
                    result === "correct"
                      ? "linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)"
                      : "linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%)",
                  border:
                    result === "correct"
                      ? "3px solid #28a745"
                      : "3px solid #dc3545",
                  animation: "slideIn 0.4s ease",
                  boxShadow:
                    result === "correct"
                      ? "0 6px 20px rgba(40, 167, 69, 0.2)"
                      : "0 6px 20px rgba(220, 53, 69, 0.2)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginBottom: showAnswer ? "15px" : 0,
                  }}
                >
                  <span style={{ fontSize: "2.5rem" }}>
                    {result === "correct" ? "🎉" : "💭"}
                  </span>
                  <span
                    style={{
                      fontWeight: "700",
                      fontSize: "1.2rem",
                      color: result === "correct" ? "#155724" : "#721c24",
                    }}
                  >
                    {result === "correct"
                      ? "Perfect! You got it!"
                      : "Not quite! Here's the answer:"}
                  </span>
                </div>
                {showAnswer && (
                  <div
                    style={{
                      padding: "20px",
                      background: "rgba(255, 255, 255, 0.8)",
                      borderRadius: "12px",
                      marginTop: "12px",
                      border: "2px solid rgba(114, 28, 36, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: "700",
                        color: "#721c24",
                        marginBottom: "8px",
                        letterSpacing: "0.5px",
                      }}
                    >
                      CORRECT ANSWER:
                    </div>
                    <div
                      style={{
                        fontSize: "1.2rem",
                        fontFamily: "monospace",
                        color: "#2d3748",
                        fontWeight: "600",
                        background: "#fff",
                        padding: "12px",
                        borderRadius: "8px",
                        border: "2px solid #e9ecef",
                      }}
                    >
                      {currentQuestion.answer}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "80px 40px",
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            }}
          >
            <div
              style={{
                fontSize: "5rem",
                marginBottom: "25px",
                filter: "grayscale(0.3)",
              }}
            >
              {!selectedTopic ? "📚" : "🎯"}
            </div>
            <h3
              style={{
                fontSize: "2rem",
                color: "#2d3748",
                marginBottom: "12px",
                fontWeight: "800",
              }}
            >
              {!selectedTopic ? "Choose Your Topic" : "Pick a Subtopic"}
            </h3>
            <p
              style={{
                color: "#718096",
                fontSize: "1.15rem",
                maxWidth: "500px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              {!selectedTopic
                ? "Select a topic above to start practicing questions"
                : "Choose a specific subtopic to focus your practice"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
