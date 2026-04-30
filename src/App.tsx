import React, { useState } from "react";
import "./styles.css";

import DiscretePage from "./modules/discrete/discretePage";
import DataStructuresPage from "./modules/data/dataPage";
import SystemArchitecturePage from "./modules/system/systemPage";

type Subject = "discrete" | "dataStructures" | "systemArchitecture";

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [calcDisplay, setCalcDisplay] = useState("0");
  const [calcMemory, setCalcMemory] = useState("");
  const [calcOperation, setCalcOperation] = useState("");
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [calcPosition, setCalcPosition] = useState({
    x: window.innerWidth - 310,
    y: 409,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleCalcNumber = (num: string) => {
    if (waitingForOperand) {
      setCalcDisplay(num);
      setWaitingForOperand(false);
    } else {
      setCalcDisplay(calcDisplay === "0" ? num : calcDisplay + num);
    }
  };

  const handleCalcOperation = (op: string) => {
    if (calcOperation && calcMemory && !waitingForOperand) {
      // Chain operations: calculate previous result first
      const num1 = parseFloat(calcMemory);
      const num2 = parseFloat(calcDisplay);
      let result = 0;

      switch (calcOperation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        case "^":
          result = Math.pow(num1, num2);
          break;
        case "%":
          result = num1 % num2;
          break;
      }

      setCalcDisplay(String(result));
      setCalcMemory(String(result));
    } else {
      setCalcMemory(calcDisplay);
    }

    setCalcOperation(op);
    setWaitingForOperand(true);
  };

  const handleCalcEquals = () => {
    if (!calcOperation || !calcMemory) return;

    const num1 = parseFloat(calcMemory);
    const num2 = parseFloat(calcDisplay);
    let result = 0;

    switch (calcOperation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      case "^":
        result = Math.pow(num1, num2);
        break;
      case "%":
        result = num1 % num2;
        break;
    }

    setCalcDisplay(String(result));
    setCalcMemory("");
    setCalcOperation("");
    setWaitingForOperand(false);
  };

  const handleCalcClear = () => {
    setCalcDisplay("0");
    setCalcMemory("");
    setCalcOperation("");
    setWaitingForOperand(false);
  };

  const handleCalcDecimal = () => {
    if (!calcDisplay.includes(".")) {
      setCalcDisplay(calcDisplay + ".");
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".calc-button")) return;

    setIsDragging(true);
    setDragOffset({
      x: e.clientX - calcPosition.x,
      y: e.clientY - calcPosition.y,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;

    // Keep calculator within viewport bounds
    const maxX = window.innerWidth - 280 - 30;
    const maxY = window.innerHeight - 500;

    setCalcPosition({
      x: Math.max(30, Math.min(newX, maxX)),
      y: Math.max(30, Math.min(newY, maxY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div className="app" style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: sidebarCollapsed ? "80px" : "280px",
          background: "linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",
          padding: sidebarCollapsed ? "20px 10px" : "30px 20px",
          boxShadow: "4px 0 20px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Collapse Toggle Button */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          style={{
            position: "absolute",
            top: "20px",
            right: sidebarCollapsed ? "10px" : "20px",
            background: "rgba(255, 255, 255, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "8px",
            padding: "8px 12px",
            color: "white",
            cursor: "pointer",
            fontSize: "1.2rem",
            transition: "all 0.2s ease",
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
          }}
        >
          {sidebarCollapsed ? "→" : "←"}
        </button>

        {!sidebarCollapsed && (
          <h2
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.8rem",
              fontWeight: "800",
              marginBottom: "40px",
              marginTop: "40px",
              textAlign: "center",
              letterSpacing: "1px",
            }}
          >
            Spring 2026
          </h2>
        )}

        {sidebarCollapsed && (
          <div
            style={{
              color: "white",
              fontSize: "1.5rem",
              textAlign: "center",
              marginTop: "50px",
              marginBottom: "30px",
              fontWeight: "800",
            }}
          >
            S26
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <button
            onClick={() => setSelectedSubject("discrete")}
            style={{
              padding: sidebarCollapsed ? "18px 12px" : "18px 24px",
              borderRadius: "12px",
              border:
                selectedSubject === "discrete"
                  ? "2px solid #667eea"
                  : "2px solid transparent",
              background:
                selectedSubject === "discrete"
                  ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  : "rgba(255, 255, 255, 0.05)",
              color: "white",
              cursor: "pointer",
              fontSize: sidebarCollapsed ? "1.5rem" : "1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              textAlign: sidebarCollapsed ? "center" : "left",
              display: "flex",
              alignItems: "center",
              justifyContent: sidebarCollapsed ? "center" : "flex-start",
              gap: sidebarCollapsed ? "0" : "12px",
              boxShadow:
                selectedSubject === "discrete"
                  ? "0 8px 20px rgba(102, 126, 234, 0.4)"
                  : "none",
            }}
            onMouseEnter={(e) => {
              if (selectedSubject !== "discrete") {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateX(5px)";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedSubject !== "discrete") {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.transform = "translateX(0)";
              }
            }}
            title={sidebarCollapsed ? "Discrete Structures" : ""}
          >
            <span style={{ fontSize: "1.5rem" }}>📐</span>
            {!sidebarCollapsed && "Discrete Structures"}
          </button>

          <button
            onClick={() => setSelectedSubject("dataStructures")}
            style={{
              padding: sidebarCollapsed ? "18px 12px" : "18px 24px",
              borderRadius: "12px",
              border:
                selectedSubject === "dataStructures"
                  ? "2px solid #667eea"
                  : "2px solid transparent",
              background:
                selectedSubject === "dataStructures"
                  ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  : "rgba(255, 255, 255, 0.05)",
              color: "white",
              cursor: "pointer",
              fontSize: sidebarCollapsed ? "1.5rem" : "1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              textAlign: sidebarCollapsed ? "center" : "left",
              display: "flex",
              alignItems: "center",
              justifyContent: sidebarCollapsed ? "center" : "flex-start",
              gap: sidebarCollapsed ? "0" : "12px",
              boxShadow:
                selectedSubject === "dataStructures"
                  ? "0 8px 20px rgba(102, 126, 234, 0.4)"
                  : "none",
            }}
            onMouseEnter={(e) => {
              if (selectedSubject !== "dataStructures") {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateX(5px)";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedSubject !== "dataStructures") {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.transform = "translateX(0)";
              }
            }}
            title={sidebarCollapsed ? "Data Structures & Algorithms" : ""}
          >
            <span style={{ fontSize: "1.5rem" }}>🌲</span>
            {!sidebarCollapsed && "Data Structures & Algorithms"}
          </button>

          <button
            onClick={() => setSelectedSubject("systemArchitecture")}
            style={{
              padding: sidebarCollapsed ? "18px 12px" : "18px 24px",
              borderRadius: "12px",
              border:
                selectedSubject === "systemArchitecture"
                  ? "2px solid #667eea"
                  : "2px solid transparent",
              background:
                selectedSubject === "systemArchitecture"
                  ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  : "rgba(255, 255, 255, 0.05)",
              color: "white",
              cursor: "pointer",
              fontSize: sidebarCollapsed ? "1.5rem" : "1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              textAlign: sidebarCollapsed ? "center" : "left",
              display: "flex",
              alignItems: "center",
              justifyContent: sidebarCollapsed ? "center" : "flex-start",
              gap: sidebarCollapsed ? "0" : "12px",
              boxShadow:
                selectedSubject === "systemArchitecture"
                  ? "0 8px 20px rgba(102, 126, 234, 0.4)"
                  : "none",
            }}
            onMouseEnter={(e) => {
              if (selectedSubject !== "systemArchitecture") {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateX(5px)";
              }
            }}
            onMouseLeave={(e) => {
              if (selectedSubject !== "systemArchitecture") {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.transform = "translateX(0)";
              }
            }}
            title={sidebarCollapsed ? "System Architecture" : ""}
          >
            <span style={{ fontSize: "1.5rem" }}>🖥️</span>
            {!sidebarCollapsed && "System Architecture"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, position: "relative", overflow: "auto" }}>
        {!selectedSubject && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "80vh",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "5rem", marginBottom: "30px" }}>📚</div>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "15px",
              }}
            >
              Select a Subject
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#666",
                maxWidth: "500px",
              }}
            >
              Choose a course from the sidebar to begin practicing questions
            </p>
          </div>
        )}

        {selectedSubject === "discrete" && <DiscretePage />}
        {selectedSubject === "dataStructures" && <DataStructuresPage />}
        {selectedSubject === "systemArchitecture" && <SystemArchitecturePage />}

        {/* Calculator Toggle Button */}
        <button
          onClick={() => setCalculatorOpen(!calculatorOpen)}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "none",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            fontSize: "1.8rem",
            cursor: "pointer",
            boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
            transition: "all 0.3s ease",
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 12px 32px rgba(102, 126, 234, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 8px 24px rgba(102, 126, 234, 0.4)";
          }}
        >
          {calculatorOpen ? "✕" : "📟"}
        </button>

        {/* Calculator Widget */}
        {calculatorOpen && (
          <div
            onMouseDown={handleMouseDown}
            style={{
              position: "fixed",
              bottom: "auto",
              right: "auto",
              left: `${calcPosition.x}px`,
              top: `${calcPosition.y}px`,
              width: "280px",
              background: "white",
              borderRadius: "16px",
              boxShadow: isDragging
                ? "0 16px 64px rgba(0,0,0,0.3)"
                : "0 12px 48px rgba(0,0,0,0.2)",
              padding: "20px",
              zIndex: 998,
              animation: "slideUp 0.3s ease",
              cursor: isDragging ? "grabbing" : "grab",
              userSelect: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "#333",
                }}
              >
                🔢 Calculator
              </h3>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#999",
                  fontStyle: "italic",
                }}
              >
                Drag to move
              </div>
            </div>

            {/* Display */}
            <div
              style={{
                background: "#f5f5f5",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "15px",
                textAlign: "right",
                fontSize: "1.5rem",
                fontFamily: "monospace",
                minHeight: "50px",
                wordBreak: "break-all",
                border: "2px solid #e0e0e0",
              }}
            >
              {calcDisplay}
            </div>

            {/* Buttons Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "8px",
              }}
            >
              {/* First Row */}
              <button
                className="calc-button"
                onClick={handleCalcClear}
                style={{
                  padding: "15px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#ff6b6b",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  gridColumn: "span 2",
                }}
              >
                C
              </button>
              <button
                className="calc-button"
                onClick={() => handleCalcOperation("%")}
                style={{
                  padding: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  background: "#f5f5f5",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                %
              </button>
              <button
                className="calc-button"
                onClick={() => handleCalcOperation("/")}
                style={{
                  padding: "15px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#667eea",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                ÷
              </button>

              {/* Numbers and Operations */}
              {["7", "8", "9"].map((num) => (
                <button
                  key={num}
                  className="calc-button"
                  onClick={() => handleCalcNumber(num)}
                  style={{
                    padding: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    background: "white",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  {num}
                </button>
              ))}
              <button
                className="calc-button"
                onClick={() => handleCalcOperation("*")}
                style={{
                  padding: "15px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#667eea",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                ×
              </button>

              {["4", "5", "6"].map((num) => (
                <button
                  key={num}
                  className="calc-button"
                  onClick={() => handleCalcNumber(num)}
                  style={{
                    padding: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    background: "white",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  {num}
                </button>
              ))}
              <button
                className="calc-button"
                onClick={() => handleCalcOperation("-")}
                style={{
                  padding: "15px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#667eea",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                −
              </button>

              {["1", "2", "3"].map((num) => (
                <button
                  key={num}
                  className="calc-button"
                  onClick={() => handleCalcNumber(num)}
                  style={{
                    padding: "15px",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                    background: "white",
                    fontSize: "1rem",
                    cursor: "pointer",
                  }}
                >
                  {num}
                </button>
              ))}
              <button
                className="calc-button"
                onClick={() => handleCalcOperation("+")}
                style={{
                  padding: "15px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#667eea",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                +
              </button>

              {/* Last Row */}
              <button
                className="calc-button"
                onClick={() => handleCalcNumber("0")}
                style={{
                  padding: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  background: "white",
                  fontSize: "1rem",
                  cursor: "pointer",
                  gridColumn: "span 2",
                }}
              >
                0
              </button>
              <button
                className="calc-button"
                onClick={handleCalcDecimal}
                style={{
                  padding: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  background: "white",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                .
              </button>
              <button
                className="calc-button"
                onClick={handleCalcEquals}
                style={{
                  padding: "15px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#28a745",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                =
              </button>

              {/* Power operator */}
              <button
                className="calc-button"
                onClick={() => handleCalcOperation("^")}
                style={{
                  padding: "15px",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                  background: "#f5f5f5",
                  fontSize: "1rem",
                  cursor: "pointer",
                  gridColumn: "span 4",
                }}
              >
                xʸ (Power)
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Add animation keyframes */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
