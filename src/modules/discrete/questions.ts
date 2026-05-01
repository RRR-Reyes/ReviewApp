export type Question = {
  id: number;
  topic: string; // Main topic (e.g., "Arithmetic")
  subtopic: string; // Subtopic (e.g., "Basic Comparisons")
  prompt: string;
  answer: string;
  generate?: () => { prompt: string; answer: string };
};

// Helper functions
const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomElement = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * arr.length)];

// Fisher-Yates shuffle - O(n) and uniformly random
const shuffle = <T>(arr: T[]): T[] => {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

// Optimized set union for small sets
const setUnion = (setA: string[], setB: string[]): string[] => {
  const result = [...setA];
  for (const item of setB) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result.sort();
};

// Optimized set intersection for small sets
const setIntersection = (setA: string[], setB: string[]): string[] => {
  const result: string[] = [];
  for (const item of setA) {
    if (setB.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

// Optimized set difference for small sets
const setDifference = (setA: string[], setB: string[]): string[] => {
  const result: string[] = [];
  for (const item of setA) {
    if (!setB.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

// ============================================================================
// MODULE 1: Logic & Arithmetic
// ============================================================================

export const module1Questions: Question[] = [
  // ========== ARITHMETIC ==========

  // --- Basic Comparisons ---
  {
    id: 1,
    topic: "Arithmetic",
    subtopic: "Basic Comparisons",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(3, 9);
      const b = randomInt(2, 9);
      const c = randomInt(2, 9);
      const result = Math.floor(a / b) - c >= a % b;
      return {
        prompt: `What is the truth value of the following expression:\n${a} // ${b} - ${c} >= ${a} % ${b}\n\nEnter: 1 for True, 0 for False.`,
        answer: result ? "1" : "0",
      };
    },
  },
  {
    id: 2,
    topic: "Arithmetic",
    subtopic: "Basic Comparisons",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(3, 9);
      const b = randomInt(2, 9);
      const c = randomInt(2, 9);
      const result = (a % b) - c >= Math.floor(b / b);
      return {
        prompt: `What is the truth value of the following expression:\n${a} % ${b} - ${c} >= ${b} // ${b}\n\nEnter: 1 for True, 0 for False.`,
        answer: result ? "1" : "0",
      };
    },
  },
  {
    id: 3,
    topic: "Arithmetic",
    subtopic: "Basic Comparisons",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(2, 5);
      const b = randomInt(3, 6);
      const c = randomInt(2, 5);
      const result = a * b >= c % 2;
      return {
        prompt: `What is the truth value of the following expression:\n${a} * ${b} >= ${c} % 2\n\nEnter: 1 for True, 0 for False.`,
        answer: result ? "1" : "0",
      };
    },
  },
  {
    id: 4,
    topic: "Arithmetic",
    subtopic: "Basic Comparisons",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(3, 7);
      const b = randomInt(2, 4);
      const c = randomInt(2, 5);
      const result = a % b === Math.pow(c, 2);
      return {
        prompt: `What is the truth value of the following expression:\n${a} % ${b} == ${c} ** 2\n\nEnter: 1 for True, 0 for False.`,
        answer: result ? "1" : "0",
      };
    },
  },

  // --- Compound Expressions ---
  {
    id: 5,
    topic: "Arithmetic",
    subtopic: "Compound Expressions",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(3, 6);
      const b = randomInt(4, 7);
      const c = randomInt(2, 4);
      const d = randomInt(2, 3);
      const left = a * b <= Math.floor(c / d);
      const right = b - a < Math.pow(d, 2);
      const result = left && !right;
      return {
        prompt: `What is the truth value of the following expression:\n(${a} * ${b} <= ${c} // ${d}) and not (${b} - ${a} < ${d} ** 2)\n\nEnter: 1 for True, 0 for False.`,
        answer: result ? "1" : "0",
      };
    },
  },
  {
    id: 6,
    topic: "Arithmetic",
    subtopic: "Compound Expressions",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(4, 8);
      const b = randomInt(5, 9);
      const c = randomInt(2, 4);
      const d = randomInt(2, 5);
      const left = Math.floor(a / b) <= Math.pow(c, 2);
      const right = d - d < Math.floor(a / b);
      const result = left || right;
      return {
        prompt: `What is the truth value of the following expression:\n(${a} // ${b} <= ${c} ** 2) or (${d} - ${d} < ${a} // ${b})\n\nEnter: 1 for True, 0 for False.`,
        answer: result ? "1" : "0",
      };
    },
  },
  {
    id: 7,
    topic: "Arithmetic",
    subtopic: "Compound Expressions",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(4, 7);
      const b = randomInt(2, 3);
      const c = randomInt(3, 6);
      const d = randomInt(2, 4);
      const left = !(Math.floor(a / b) === b);
      const right = c % Math.pow(d, 2) < 10;
      const result = left || right;
      return {
        prompt: `What is the truth value of the following expression:\nnot (${a} // ${b} == ${b}) or (${c} % ${d} ** 2 < 10)\n\nEnter: 1 for True, 0 for False.`,
        answer: result ? "1" : "0",
      };
    },
  },
  {
    id: 8,
    topic: "Arithmetic",
    subtopic: "Compound Expressions",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(5, 9);
      const b = randomInt(2, 4);
      const c = randomInt(2, 4);
      const d = randomInt(4, 7);
      const e = randomInt(2, 4);
      const f = randomInt(2, 3);
      const left = a - b * c >= d % e;
      const right = Math.floor(d / c) <= Math.pow(f, 2);
      const result = left && right;
      return {
        prompt: `What is the truth value of the following expression:\n(${a} - ${b} * ${c} >= ${d} % ${e}) and (${d} // ${c} <= ${f} ** 2)\n\nEnter: 1 for True, 0 for False.`,
        answer: result ? "1" : "0",
      };
    },
  },
  {
    id: 10,
    topic: "Arithmetic",
    subtopic: "Compound Expressions",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(5, 8);
      const b = randomInt(2, 3);
      const c = randomInt(2, 4);
      const d = randomInt(4, 7);
      const e = randomInt(2, 3);
      const left = Math.floor(a / b) * c > d % e;
      const right = !(Math.pow(e, 3) === 8);
      const result = left || right;
      return {
        prompt: `What is the truth value of the following expression:\n(${a} // ${b} * ${c} > ${d} % ${e}) or not (${e} ** 3 == 8)\n\nEnter: 1 for True, 0 for False.`,
        answer: result ? "1" : "0",
      };
    },
  },

  // --- Short-circuit Evaluation ---
  {
    id: 9,
    topic: "Arithmetic",
    subtopic: "Short-circuit Evaluation",
    prompt: "",
    answer: "",
    generate: () => {
      const scenarios = [
        {
          prompt:
            "In Python logic, what is the truth value of:\n(5 < 3) and (10 // 0 == 1)\n\n(Hint: Consider short-circuiting)\nEnter: 1 for True, 0 for False.",
          answer: "0",
        },
        {
          prompt:
            "In Python logic, what is the truth value of:\n(False) and (1 / 0 == 1)\n\n(Hint: Consider short-circuiting)\nEnter: 1 for True, 0 for False.",
          answer: "0",
        },
        {
          prompt:
            "In Python logic, what is the truth value of:\n(True) or (10 // 0 == 1)\n\n(Hint: Consider short-circuiting)\nEnter: 1 for True, 0 for False.",
          answer: "1",
        },
        {
          prompt:
            "In Python logic, what is the truth value of:\n(3 > 5) and (x + 1 / 0)\n\n(Hint: Consider short-circuiting)\nEnter: 1 for True, 0 for False.",
          answer: "0",
        },
      ];
      return randomElement(scenarios);
    },
  },

  // ========== TRUTH TABLES ==========

  // --- 2 Variables - NOR/NAND ---
  {
    id: 11,
    topic: "Truth Tables",
    subtopic: "2 Variables - NOR/NAND",
    prompt: "",
    answer: "",
    generate: () => {
      const ops = [
        {
          name: "¬( y → ¬x ) ↓ y",
          fn: (x: number, y: number) => {
            const impl = y === 0 || 1 - x === 1 ? 1 : 0;
            const neg = 1 - impl;
            return neg === 0 && y === 0 ? 1 : 0;
          },
        },
        {
          name: "¬y ↔ ( ¬x ↓ y )",
          fn: (x: number, y: number) => {
            const nor = 1 - x === 0 && y === 0 ? 1 : 0;
            return 1 - y === nor ? 1 : 0;
          },
        },
        {
          name: "¬y ↑ ( ¬x ↔ y )",
          fn: (x: number, y: number) => {
            const xnor = 1 - x === y ? 1 : 0; // ¬x ↔ y
            const nand = 1 - y === 1 && xnor === 1 ? 0 : 1; // NAND(¬y, result)
            return nand;
          },
        },
      ];

      const op = randomElement(ops);
      // Direct string building instead of flatMap + join
      let pattern = "";
      for (let x = 0; x <= 1; x++) {
        for (let y = 0; y <= 1; y++) {
          pattern += op.fn(x, y);
        }
      }

      return {
        prompt: `Find the 4-bit truth pattern for:\n${op.name}\n\n(Standard order: 00, 01, 10, 11)`,
        answer: pattern,
      };
    },
  },

  // --- 2 Variables - XOR/Equivalence ---
  {
    id: 12,
    topic: "Truth Tables",
    subtopic: "2 Variables - XOR/Equivalence",
    prompt: "",
    answer: "",
    generate: () => {
      const ops = [
        {
          name: "x ⊕ ( ¬y ⊕ ¬y )",
          fn: (x: number, y: number) => {
            const xor = 1 - y !== 1 - y ? 1 : 0;
            return x !== xor ? 1 : 0;
          },
        },
        {
          name: "¬x ∧ ( ¬y ∨ y )",
          fn: (x: number, y: number) => {
            const or = 1 - y === 1 || y === 1 ? 1 : 0;
            return 1 - x === 1 && or === 1 ? 1 : 0;
          },
        },
        {
          name: "y ∨ ¬( ¬x ∨ y )",
          fn: (x: number, y: number) => {
            const or = 1 - x === 1 || y === 1 ? 1 : 0;
            return y === 1 || 1 - or === 1 ? 1 : 0;
          },
        },
        {
          name: "x ↔ (y → x)",
          fn: (x: number, y: number) => {
            const impl = y === 0 || x === 1 ? 1 : 0;
            return x === impl ? 1 : 0;
          },
        },
        {
          name: "¬(x ∧ y) ∧ (x ∨ y)",
          fn: (x: number, y: number) => {
            const and = x === 1 && y === 1 ? 1 : 0;
            const or = x === 1 || y === 1 ? 1 : 0;
            return 1 - and === 1 && or === 1 ? 1 : 0;
          },
        },
      ];

      const op = randomElement(ops);
      let pattern = "";
      for (let x = 0; x <= 1; x++) {
        for (let y = 0; y <= 1; y++) {
          pattern += op.fn(x, y);
        }
      }

      return {
        prompt: `Find the 4-bit truth pattern for:\n${op.name}\n\n(Standard order: 00, 01, 10, 11)`,
        answer: pattern,
      };
    },
  },

  // --- 3 Variables - Complex ---
  {
    id: 13,
    topic: "Truth Tables",
    subtopic: "3 Variables - Complex",
    prompt: "",
    answer: "",
    generate: () => {
      const ops = [
        {
          name: "¬z ↓ ¬( y ∨ x )",
          fn: (x: number, y: number, z: number) => {
            const or = y === 1 || x === 1 ? 1 : 0;
            const neg = 1 - or;
            return 1 - z === 0 && neg === 0 ? 1 : 0;
          },
        },
        {
          name: "¬x ↑ ( y ∧ ¬z )",
          fn: (x: number, y: number, z: number) => {
            const notX = 1 - x;
            const notZ = 1 - z;
            const and = y === 1 && notZ === 1 ? 1 : 0;
            const nand = 1 - (notX === 1 && and === 1 ? 1 : 0);
            return nand;
          },
        },
        {
          name: "( ¬z ↓ x ) ∨ ¬y",
          fn: (x: number, y: number, z: number) => {
            const nor = 1 - z === 0 && x === 0 ? 1 : 0;
            return nor === 1 || 1 - y === 1 ? 1 : 0;
          },
        },
      ];

      const op = randomElement(ops);
      let pattern = "";
      for (let x = 0; x <= 1; x++) {
        for (let y = 0; y <= 1; y++) {
          for (let z = 0; z <= 1; z++) {
            pattern += String(op.fn(x, y, z));
          }
        }
      }

      // Reverse for MSB-first (CS/engineering byte style)
      //const reversedPattern = pattern.split("").reverse().join("");

      return {
        prompt: `Find the 8-bit truth pattern for:\n${op.name}\n\n(Standard Order: 000, 001, 010, 011, 100, 101, 110, 111)`,
        answer: pattern,
      };
    },
  },

  // ========== LOGIC CONCEPTS ==========

  // --- De Morgan's Laws ---
  {
    id: 14,
    topic: "Logic Concepts",
    subtopic: "De Morgan's Laws",
    prompt: "",
    answer: "",
    generate: () => {
      const expressions = [
        { expr: "¬(¬x ∧ ¬y)", answer: "x ∨ y" },
        { expr: "¬(x ∨ y)", answer: "¬x ∧ ¬y" },
        { expr: "¬(¬x ∨ ¬y)", answer: "x ∧ y" },
        { expr: "¬(x ∧ y)", answer: "¬x ∨ ¬y" },
      ];

      const selected = randomElement(expressions);
      return {
        prompt: `Simplify the following expression using De Morgan's Law:\n${selected.expr}`,
        answer: selected.answer,
      };
    },
  },

  // --- Tautologies & Contradictions ---
  {
    id: 15,
    topic: "Logic Concepts",
    subtopic: "Tautologies & Contradictions",
    prompt: "",
    answer: "",
    generate: () => {
      const tautologies = ["(x ∨ y) ∨ ¬x", "x ∨ ¬x", "(x → y) ∨ (y → x)"];

      const expr = randomElement(tautologies);
      return {
        prompt: `Analyze the expression: ${expr}\n\nEnter the 8-bit pattern and classification (T/C/N).\nExample: 11111111 T`,
        answer: "11111111 T",
      };
    },
  },

  // --- Propositional Logic ---
  {
    id: 16,
    topic: "Logic Concepts",
    subtopic: "Propositional Logic",
    prompt: "",
    answer: "",
    generate: () => {
      const vars = shuffle(["p", "q", "r", "s", "w", "t"]);
      const [v1, v2] = vars;
      return {
        prompt: `What is the Contrapositive of the statement: ${v1} → ${v2}?`,
        answer: `¬${v2} → ¬${v1}`,
      };
    },
  },
  {
    id: 20,
    topic: "Logic Concepts",
    subtopic: "Propositional Logic",
    prompt: "",
    answer: "",
    generate: () => {
      const vars = shuffle(["p", "q", "r", "s"]);
      const [v1, v2] = vars;
      return {
        prompt: `What is the Converse of the statement: ${v1} → ${v2}?`,
        answer: `${v2} → ${v1}`,
      };
    },
  },
  {
    id: 21,
    topic: "Logic Concepts",
    subtopic: "Propositional Logic",
    prompt: "",
    answer: "",
    generate: () => {
      const vars = shuffle(["p", "q", "r", "s"]);
      const [v1, v2] = vars;
      return {
        prompt: `What is the Inverse of the statement: ${v1} → ${v2}?`,
        answer: `¬${v1} → ¬${v2}`,
      };
    },
  },

  // --- Quantifier Negation ---
  {
    id: 17,
    topic: "Logic Concepts",
    subtopic: "Quantifier Negation",
    prompt: "",
    answer: "",
    generate: () => {
      const vars = shuffle(["x", "y", "z", "w"]);
      const [v1, v2] = vars;
      return {
        prompt: `What is the formal negation of the following statement:\n∀${v1} ∃${v2} (${v1} + ${v2} = 0)`,
        answer: `∃${v1} ∀${v2} ¬(${v1} + ${v2} = 0)`,
      };
    },
  },
  {
    id: 18,
    topic: "Logic Concepts",
    subtopic: "Quantifier Negation",
    prompt: "",
    answer: "",
    generate: () => {
      const options = [
        {
          prompt:
            "Which of the following is NOT a proposition?\n\nA) 5 is prime\nB) x + 3 = 7\nC) 2 + 2 = 5",
          answer: "B",
        },
        {
          prompt:
            "Which of the following is NOT a proposition?\n\nA) The sky is blue\nB) Is it raining?\nC) 10 > 5",
          answer: "B",
        },
        {
          prompt:
            "Which of the following is NOT a proposition?\n\nA) All dogs are mammals\nB) Solve for x\nC) Paris is in France",
          answer: "B",
        },
        {
          prompt:
            "Which of the following is NOT a proposition?\n\nA) 7 + 3 = 10\nB) n is even\nC) The moon orbits Earth",
          answer: "B",
        },
      ];
      return randomElement(options);
    },
  },

  // --- Duality ---
  {
    id: 19,
    topic: "Logic Concepts",
    subtopic: "Duality",
    prompt: "",
    answer: "",
    generate: () => {
      const identities = [
        { expr: "x + 0 ≡ x", dual: "x · 1 ≡ x" },
        { expr: "x + 1 ≡ 1", dual: "x · 0 ≡ 0" },
        { expr: "x + x ≡ x", dual: "x · x ≡ x" },
      ];

      const selected = randomElement(identities);
      return {
        prompt: `What is the logical Dual of the identity: ${selected.expr} ?`,
        answer: selected.dual,
      };
    },
  },

  // --- Absorption Laws ---
  {
    id: 22,
    topic: "Logic Concepts",
    subtopic: "Absorption Laws",
    prompt: "",
    answer: "",
    generate: () => {
      const vars = shuffle(["x", "y", "z", "w", "p", "q"]);
      const [v1, v2] = vars;
      return {
        prompt: `Simplify using Absorption Laws: ${v1} + ${v1}·${v2}`,
        answer: v1,
      };
    },
  },
  {
    id: 23,
    topic: "Logic Concepts",
    subtopic: "Absorption Laws",
    prompt: "",
    answer: "",
    generate: () => {
      const vars = shuffle(["x", "y", "z", "w", "p", "q"]);
      const [v1, v2] = vars;
      return {
        prompt: `Simplify using Absorption Laws: ${v1}·(${v1} + ${v2})`,
        answer: v1,
      };
    },
  },
];

// ============================================================================
// MODULE 2: Set Theory
// ============================================================================

export const module2Questions: Question[] = [
  // ========== BASIC SET OPERATIONS ==========

  // --- Set Difference ---
  {
    id: 101,
    topic: "Basic Set Operations",
    subtopic: "Set Difference",
    prompt: "",
    answer: "",
    generate: () => {
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      const size1 = randomInt(4, 7);
      const size2 = randomInt(4, 7);
      const setA = shuffle(letters).slice(0, size1).sort();
      const setB = shuffle(letters).slice(0, size2).sort();
      const difference = setDifference(setA, setB);

      return {
        prompt: `Calculate the set difference:\n{${setA.join(
          ", "
        )}} ∖ {${setB.join(", ")}}\n\nFormat: {a,b,c} alphabetical, no spaces.`,
        answer: difference.length > 0 ? `{${difference.join(",")}}` : "{}",
      };
    },
  },
  {
    id: 102,
    topic: "Basic Set Operations",
    subtopic: "Set Difference",
    prompt: "",
    answer: "",
    generate: () => {
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      const size1 = randomInt(3, 6);
      const size2 = randomInt(3, 6);
      const setA = shuffle(letters).slice(0, size1).sort();
      const setB = shuffle(letters).slice(0, size2).sort();
      const difference = setDifference(setA, setB);

      return {
        prompt: `Calculate the set difference:\n{${setA.join(
          ", "
        )}} ∖ {${setB.join(", ")}}\n\nFormat: {a,b,c} alphabetical, no spaces.`,
        answer: difference.length > 0 ? `{${difference.join(",")}}` : "{}",
      };
    },
  },

  // --- Set Intersection ---
  {
    id: 107,
    topic: "Basic Set Operations",
    subtopic: "Set Intersection",
    prompt: "",
    answer: "",
    generate: () => {
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      const size1 = randomInt(4, 6);
      const size2 = randomInt(4, 6);
      const setA = shuffle(letters).slice(0, size1).sort();
      const setB = shuffle(letters).slice(0, size2).sort();
      const intersection = setIntersection(setA, setB);

      return {
        prompt: `Find the intersection:\n{${setA.join(", ")}} ∩ {${setB.join(
          ", "
        )}}\n\nFormat: {a,b,c} alphabetical, no spaces.`,
        answer: intersection.length > 0 ? `{${intersection.join(",")}}` : "{}",
      };
    },
  },
  {
    id: 108,
    topic: "Basic Set Operations",
    subtopic: "Set Intersection",
    prompt: "",
    answer: "",
    generate: () => {
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      const size1 = randomInt(3, 5);
      const size2 = randomInt(3, 5);
      const setA = shuffle(letters).slice(0, size1).sort();
      const setB = shuffle(letters).slice(0, size2).sort();
      const intersection = setIntersection(setA, setB);

      return {
        prompt: `Find the intersection:\n{${setA.join(", ")}} ∩ {${setB.join(
          ", "
        )}}\n\nFormat: {a,b,c} alphabetical, no spaces.`,
        answer: intersection.length > 0 ? `{${intersection.join(",")}}` : "{}",
      };
    },
  },

  // --- Set Union ---
  {
    id: 109,
    topic: "Basic Set Operations",
    subtopic: "Set Union",
    prompt: "",
    answer: "",
    generate: () => {
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      const size1 = randomInt(4, 6);
      const size2 = randomInt(4, 6);
      const setA = shuffle(letters).slice(0, size1).sort();
      const setB = shuffle(letters).slice(0, size2).sort();
      const union = setUnion(setA, setB);

      return {
        prompt: `Find the union:\n{${setA.join(", ")}} ∪ {${setB.join(
          ", "
        )}}\n\nFormat: {a,b,c} alphabetical, no spaces.`,
        answer: `{${union.join(",")}}`,
      };
    },
  },
  {
    id: 110,
    topic: "Basic Set Operations",
    subtopic: "Set Union",
    prompt: "",
    answer: "",
    generate: () => {
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      const size1 = randomInt(3, 5);
      const size2 = randomInt(3, 5);
      const setA = shuffle(letters).slice(0, size1).sort();
      const setB = shuffle(letters).slice(0, size2).sort();
      const union = setUnion(setA, setB);

      return {
        prompt: `Find the union:\n{${setA.join(", ")}} ∪ {${setB.join(
          ", "
        )}}\n\nFormat: {a,b,c} alphabetical, no spaces.`,
        answer: `{${union.join(",")}}`,
      };
    },
  },

  // ========== SET PROPERTIES ==========

  // --- Cardinality - Simple Sets ---
  {
    id: 103,
    topic: "Set Properties",
    subtopic: "Cardinality - Simple Sets",
    prompt: "",
    answer: "",
    generate: () => {
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      const uniqueCount = randomInt(3, 6);
      const unique = shuffle(letters).slice(0, uniqueCount);
      const repeated = [];
      for (let i = 0; i < randomInt(10, 20); i++) {
        repeated.push(randomElement(unique));
      }

      return {
        prompt: `Determine the cardinality (size) of the set:\n| {${repeated.join(
          ", "
        )}} |\n\nFormat: A single number.`,
        answer: String(uniqueCount),
      };
    },
  },
  {
    id: 104,
    topic: "Set Properties",
    subtopic: "Cardinality - Simple Sets",
    prompt:
      "What is the cardinality of the empty set?\n| ∅ |\n\nFormat: A single number.",
    answer: "0",
  },

  // --- Cardinality - Power Sets ---
  {
    id: 105,
    topic: "Set Properties",
    subtopic: "Cardinality - Power Sets",
    prompt: "",
    answer: "",
    generate: () => {
      const n = randomInt(2, 5);
      const answer = Math.pow(2, n);
      return {
        prompt: `Calculate the size of the Power Set of A, where |A| = ${n}.\n\nFormat: A single number.`,
        answer: String(answer),
      };
    },
  },
  {
    id: 114,
    topic: "Set Properties",
    subtopic: "Cardinality - Power Sets",
    prompt: "",
    answer: "",
    generate: () => {
      const n = randomInt(2, 4);
      const answer = Math.pow(2, n);
      const elements = ["a", "b", "c", "d", "e"].slice(0, n);
      return {
        prompt: `Calculate the cardinality of the power set | P({${elements.join(
          ","
        )}}) |.\n\nFormat: A single number.`,
        answer: String(answer),
      };
    },
  },

  // --- Cardinality - Set Builder Notation ---
  {
    id: 106,
    topic: "Set Properties",
    subtopic: "Cardinality - Set Builder",
    prompt: "",
    answer: "",
    generate: () => {
      const n = randomInt(3, 5);
      const count = 2 * n - 1;
      return {
        prompt: `What is the cardinality of:\n{x ∈ ℤ | x² < ${
          n * n
        }}\n(Integers whose square is less than ${
          n * n
        })\n\nFormat: A single number.`,
        answer: String(count),
      };
    },
  },

  // ========== ADVANCED SET OPERATIONS ==========

  // --- Complex Operations ---
  {
    id: 111,
    topic: "Advanced Set Operations",
    subtopic: "Nested Operations",
    prompt: "",
    answer: "",
    generate: () => {
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      const setA = shuffle(letters).slice(0, randomInt(3, 5)).sort();
      const setB = shuffle(letters).slice(0, randomInt(4, 6)).sort();
      const setC = shuffle(letters).slice(0, randomInt(4, 6)).sort();

      const unionBC = setUnion(setB, setC);
      const result = setDifference(setA, unionBC);

      return {
        prompt: `Evaluate the following operation:\n{${setA.join(
          ", "
        )}} ∖ ({${setB.join(", ")}} ∪ {${setC.join(
          ", "
        )}})\n\nFormat: {a,b,c} alphabetical, no spaces.`,
        answer: result.length > 0 ? `{${result.join(",")}}` : "{}",
      };
    },
  },
  {
    id: 112,
    topic: "Advanced Set Operations",
    subtopic: "Nested Operations",
    prompt: "",
    answer: "",
    generate: () => {
      const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
      const setA = shuffle(letters).slice(0, randomInt(4, 6)).sort();
      const setB = shuffle(letters).slice(0, randomInt(4, 5)).sort();
      const setC = shuffle(letters).slice(0, randomInt(4, 5)).sort();

      const intersectionBC = setIntersection(setB, setC);
      const result = setUnion(setA, intersectionBC);

      return {
        prompt: `Evaluate the following operation:\n{${setA.join(
          ", "
        )}} ∪ ({${setB.join(", ")}} ∩ {${setC.join(
          ", "
        )}})\n\nFormat: {a,b,c} alphabetical, no spaces.`,
        answer: `{${result.join(",")}}`,
      };
    },
  },

  // ========== SET THEORY CONCEPTS ==========

  // --- Subsets ---
  {
    id: 113,
    topic: "Set Theory Concepts",
    subtopic: "Subsets & Proper Subsets",
    prompt: "",
    answer: "",
    generate: () => {
      const letters = shuffle(["a", "b", "c", "d", "e", "f"]);
      const size = randomInt(3, 5);
      const mainSet = letters.slice(0, size).sort();
      const properSubset = mainSet.slice(0, size - 1);
      const notSubset = shuffle(["x", "y", "z"]).slice(0, size - 1);
      const superSet = [...mainSet, letters[size]].sort();

      return {
        prompt: `Which of the following is a proper subset of {${mainSet.join(
          ","
        )}}?\n\nA) {${mainSet.join(",")}}\nB) {${properSubset.join(
          ","
        )}}\nC) {${superSet.join(",")}}\nD) {${notSubset.join(",")}}`,
        answer: "B",
      };
    },
  },

  // --- Empty Set Properties ---
  {
    id: 115,
    topic: "Set Theory Concepts",
    subtopic: "Empty Set Properties",
    prompt: "",
    answer: "",
    generate: () => {
      const questions = [
        {
          prompt:
            "True or False: The empty set is a subset of every set.\nIs ∅ ⊆ A true for any set A?\n\nEnter: True or False",
          answer: "True",
        },
        {
          prompt:
            "True or False: The empty set is an element of every set.\nIs ∅ ∈ A true for any set A?\n\nEnter: True or False",
          answer: "False",
        },
        {
          prompt:
            "True or False: The cardinality of the empty set is 0.\n|∅| = 0\n\nEnter: True or False",
          answer: "True",
        },
        {
          prompt:
            "True or False: For any set A, A ∪ ∅ = A.\n\nEnter: True or False",
          answer: "True",
        },
      ];
      return randomElement(questions);
    },
  },

  // --- Disjoint Sets ---
  {
    id: 116,
    topic: "Set Theory Concepts",
    subtopic: "Disjoint Sets",
    prompt: "",
    answer: "",
    generate: () => {
      const questions = [
        {
          prompt:
            "If A ∩ B = ∅ (empty set), then sets A and B are called ______.\n\nEnter the mathematical term.",
          answer: "disjoint",
        },
        {
          prompt:
            "If two sets have no elements in common, they are called ______.\n\nEnter the mathematical term.",
          answer: "disjoint",
        },
        {
          prompt:
            "True or False: If A and B are disjoint, then A ∩ B = ∅.\n\nEnter: True or False",
          answer: "True",
        },
        {
          prompt:
            "True or False: If A ∪ B = A, then A and B must be disjoint.\n\nEnter: True or False",
          answer: "False",
        },
      ];
      return randomElement(questions);
    },
  },

  // ========== CARTESIAN PRODUCTS ==========

  // --- Simple Products ---
  {
    id: 117,
    topic: "Cartesian Products",
    subtopic: "Simple Products",
    prompt: "",
    answer: "",
    generate: () => {
      const nums = shuffle([1, 2, 3, 4, 5]).slice(0, randomInt(2, 3));
      const letters = shuffle(["a", "b", "c", "d"]).slice(0, randomInt(2, 3));

      // Direct string building
      const product: string[] = [];
      for (const n of nums) {
        for (const l of letters) {
          product.push(`(${n},${l})`);
        }
      }

      return {
        prompt: `Find the Cartesian Product of:\n{${nums.join(
          ", "
        )}} × {${letters.join(
          ", "
        )}}\n\nFormat: (1,a),(1,b)... lexicographic order, no spaces.`,
        answer: product.join(","),
      };
    },
  },

  // --- Product Cardinality ---
  {
    id: 118,
    topic: "Cartesian Products",
    subtopic: "Product Cardinality",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(2, 5);
      const b = randomInt(2, 5);
      const answer = a * b;
      return {
        prompt: `Calculate the cardinality of the Cartesian product |A × B| if |A| = ${a} and |B| = ${b}.\n\nFormat: A single number.`,
        answer: String(answer),
      };
    },
  },

  // --- Empty Set Products ---
  {
    id: 119,
    topic: "Cartesian Products",
    subtopic: "Empty Set Products",
    prompt:
      "What is the Cartesian Product of any set A with the empty set?\nA × ∅\n\nFormat: {}",
    answer: "{}",
  },
];

// ============================================================================
// MODULE 3: Functions
// ============================================================================

export const module3Questions: Question[] = [
  // ========== FUNCTION CLASSIFICATION ==========

  // --- Discrete Functions ---
  {
    id: 203,
    topic: "Function Classification",
    subtopic: "Discrete Functions",
    prompt: "",
    answer: "",
    generate: () => {
      const size = randomInt(4, 6);
      const domain = Array.from({ length: size }, (_, i) => i + 1);
      const codomain = ["a", "b", "c", "d", "e", "f"].slice(0, size);
      const mapping = shuffle(codomain);

      const mappingStr = domain.map((d, i) => `${d}→${mapping[i]}`).join(", ");

      return {
        prompt: `Let A={${domain.join(",")}}, B={${codomain.join(
          ","
        )}}.\nDefined by: ${mappingStr}.\nClassify f:\n\nn = Not a Function\nf = Is a Function (neither Inj nor Sur)\ni = Is Injective\ns = Is Surjective\nb = Is Bijective`,
        answer: "b",
      };
    },
  },
  {
    id: 204,
    topic: "Function Classification",
    subtopic: "Discrete Functions",
    prompt: "",
    answer: "",
    generate: () => {
      const size = randomInt(4, 5);
      const domain = Array.from({ length: size }, (_, i) => i + 1);
      const codomain = ["a", "b", "c", "d", "e"].slice(0, size);

      const mapping = [...codomain];
      mapping[0] = mapping[1];
      const mappingStr = domain.map((d, i) => `${d}→${mapping[i]}`).join(", ");

      return {
        prompt: `Let A={${domain.join(",")}}, B={${codomain.join(
          ","
        )}}.\nDefined by: ${mappingStr}.\nClassify f:\n\nn = Not a Function\nf = Is a Function (neither Inj nor Sur)\ni = Is Injective\ns = Is Surjective\nb = Is Bijective`,
        answer: "f",
      };
    },
  },

  // --- Integer Functions ---
  {
    id: 205,
    topic: "Function Classification",
    subtopic: "Integer Functions",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(1, 3);
      const b = randomInt(-5, 5);
      const funcStr = b >= 0 ? `${a}x + ${b}` : `${a}x - ${Math.abs(b)}`;

      const answer = a === 1 ? "b" : "i";

      return {
        prompt: `Let f: ℤ → ℤ, f(x) = ${funcStr}.\nClassify f:\n\nn = Not a Function\nf = Is a Function (neither Inj nor Sur)\ni = Is Injective\ns = Is Surjective\nb = Is Bijective`,
        answer: answer,
      };
    },
  },
  {
    id: 207,
    topic: "Function Classification",
    subtopic: "Integer Functions",
    prompt: "",
    answer: "",
    generate: () => {
      const c = randomInt(1, 5);
      return {
        prompt: `Let f: ℕ → ℕ, f(x) = x² + ${c}.\nClassify f:\n\nn = Not a Function\nf = Is a Function (neither Inj nor Sur)\ni = Is Injective\ns = Is Surjective\nb = Is Bijective`,
        answer: "i",
      };
    },
  },

  // --- Real Functions ---
  {
    id: 201,
    topic: "Function Classification",
    subtopic: "Real Functions",
    prompt: "",
    answer: "",
    generate: () => {
      const functions = [
        {
          prompt:
            "Let f: ℝ → ℚ be defined by f(x) = ⌊x⌋.\nClassify the function using these codes:\n\nn = Not a Function\nf = Is a Function (neither Injective nor Surjective)\ni = Is an Injective Function (but not Surjective)\ns = Is a Surjective Function (but not Injective)\nb = Is a Bijective Function",
          answer: "f",
        },
        {
          prompt:
            "Let f: ℝ → ℤ be defined by f(x) = ⌊x⌋.\nClassify the function using these codes:\n\nn = Not a Function\nf = Is a Function (neither Injective nor Surjective)\ni = Is an Injective Function (but not Surjective)\ns = Is a Surjective Function (but not Injective)\nb = Is a Bijective Function",
          answer: "s",
        },
        {
          prompt:
            "Let f: ℝ → ℝ be defined by f(x) = x².\nClassify the function using these codes:\n\nn = Not a Function\nf = Is a Function (neither Injective nor Surjective)\ni = Is an Injective Function (but not Surjective)\ns = Is a Surjective Function (but not Injective)\nb = Is a Bijective Function",
          answer: "f",
        },
      ];
      return randomElement(functions);
    },
  },
  {
    id: 202,
    topic: "Function Classification",
    subtopic: "Real Functions",
    prompt: "",
    answer: "",
    generate: () => {
      const functions = [
        {
          prompt:
            "Let f: ℤ → ℕ be defined by f(x) = ⌈x⌉.\nClassify the function using these codes:\n\nn = Not a Function\nf = Is a Function (neither Injective nor Surjective)\ni = Is an Injective Function (but not Surjective)\ns = Is a Surjective Function (but not Injective)\nb = Is a Bijective Function",
          answer: "n",
        },
        {
          prompt:
            "Let f: ℝ → ℝ be defined by f(x) = 1/x.\nClassify the function using these codes:\n\nn = Not a Function\nf = Is a Function (neither Injective nor Surjective)\ni = Is an Injective Function (but not Surjective)\ns = Is a Surjective Function (but not Injective)\nb = Is a Bijective Function",
          answer: "n",
        },
      ];
      return randomElement(functions);
    },
  },
  {
    id: 206,
    topic: "Function Classification",
    subtopic: "Real Functions",
    prompt: "",
    answer: "",
    generate: () => {
      const functions = [
        {
          prompt:
            "Let f: ℝ → ℝ, f(x) = x³.\nClassify f:\n\nn = Not a Function\nf = Is a Function (neither Inj nor Sur)\ni = Is Injective\ns = Is Surjective\nb = Is Bijective",
          answer: "b",
        },
        {
          prompt:
            "Let f: ℝ → ℝ, f(x) = 2x + 1.\nClassify f:\n\nn = Not a Function\nf = Is a Function (neither Inj nor Sur)\ni = Is Injective\ns = Is Surjective\nb = Is Bijective",
          answer: "b",
        },
        {
          prompt:
            "Let f: ℝ → ℝ, f(x) = eˣ.\nClassify f:\n\nn = Not a Function\nf = Is a Function (neither Inj nor Sur)\ni = Is Injective\ns = Is Surjective\nb = Is Bijective",
          answer: "i",
        },
      ];
      return randomElement(functions);
    },
  },

  // ========== FUNCTION OPERATIONS ==========

  // --- Linear Composition ---
  {
    id: 209,
    topic: "Function Operations",
    subtopic: "Linear Composition",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(-5, -2);
      const b = randomInt(2, 8);
      const c = randomInt(2, 5);
      const d = randomInt(-8, -2);

      const coeffA = a * c;
      const coeffB = a * d + b;

      const fStr = b >= 0 ? `${a}x + ${b}` : `${a}x - ${Math.abs(b)}`;
      const gStr = d >= 0 ? `${c}x + ${d}` : `${c}x - ${Math.abs(d)}`;
      const answerStr = `${coeffA}x${coeffB >= 0 ? "+" : ""}${coeffB}`;

      return {
        prompt: `Given f(x) = ${fStr} and g(x) = ${gStr}.\nFind the composition (f ∘ g)(x).\n\nFormat: ax+b (no spaces)`,
        answer: answerStr,
      };
    },
  },

  // --- Polynomial Composition ---
  {
    id: 208,
    topic: "Function Operations",
    subtopic: "Polynomial Composition",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(2, 5);
      const b = randomInt(-8, 8);
      const c = randomInt(1, 4);
      const d = randomInt(2, 5);
      const e = randomInt(-5, 5);

      const coeffA = a * c;
      const coeffB = a * d;
      const coeffC = a * e + b;

      const fStr = b >= 0 ? `${a}x + ${b}` : `${a}x - ${Math.abs(b)}`;
      const gStr = `${c}x² ${d >= 0 ? "+" : "-"} ${Math.abs(d)}x ${
        e >= 0 ? "+" : "-"
      } ${Math.abs(e)}`;
      const answerStr = `${coeffA}x^2${coeffB >= 0 ? "+" : ""}${coeffB}x${
        coeffC >= 0 ? "+" : ""
      }${coeffC}`;

      return {
        prompt: `Given f(x) = ${fStr} and g(x) = ${gStr}.\nFind the composition (f ∘ g)(x).\n\nFormat: ax^2+bx+c (no spaces)`,
        answer: answerStr,
      };
    },
  },

  // --- Modular Arithmetic Functions ---
  {
    id: 210,
    topic: "Function Operations",
    subtopic: "Modular Arithmetic",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(2, 4);
      const b = randomInt(1, 3);
      const m = randomInt(4, 6);
      const domainSize = randomInt(4, 5);
      const codomainSize = m;

      const gcd = (x: number, y: number): number =>
        y === 0 ? x : gcd(y, x % y);
      const isInjective = gcd(a, m) === 1 && domainSize <= m;
      const isSurjective = domainSize >= m && gcd(a, m) === 1;

      let answer = "f";
      if (isInjective && isSurjective) answer = "b";
      else if (isInjective) answer = "i";
      else if (isSurjective) answer = "s";

      return {
        prompt: `Let f: {0,...,${domainSize - 1}} → {0,...,${
          codomainSize - 1
        }}, f(n) = (${a}n + ${b}) % ${m}.\nClassify f:\n\nn = Not a Function\nf = Is a Function (neither Inj nor Sur)\ni = Is Injective\ns = Is Surjective\nb = Is Bijective`,
        answer: answer,
      };
    },
  },

  // ========== INVERSE FUNCTIONS ==========

  // --- Linear Inverses ---
  {
    id: 211,
    topic: "Inverse Functions",
    subtopic: "Linear Inverses",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(2, 7);
      const b = randomInt(-5, 5);

      const bStr = b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`;
      const answerB = -b;
      const answerStr = `(x${answerB >= 0 ? "-" : "+"}${Math.abs(
        answerB
      )})/${a}`;

      return {
        prompt: `Given f(x) = ${a}x ${bStr}, find the inverse function f⁻¹(x).\n\nFormat: (x-a)/b`,
        answer: answerStr,
      };
    },
  },

  // --- Rational Inverses ---
  {
    id: 212,
    topic: "Inverse Functions",
    subtopic: "Rational Inverses",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(2, 5);
      const b = randomInt(2, 6);

      const coeff = a * b;
      const answerStr = `${a}x+${coeff}`;

      return {
        prompt: `Given f(x) = (x/${a}) - ${b}, find the inverse function f⁻¹(x).\n\nFormat: ax+b`,
        answer: answerStr,
      };
    },
  },

  // --- Inverse Properties ---
  {
    id: 213,
    topic: "Inverse Functions",
    subtopic: "Inverse Properties",
    prompt: "",
    answer: "",
    generate: () => {
      const questions = [
        {
          prompt:
            "True/False: If (f ∘ g)(x) = x and (g ∘ f)(x) = x, then g is the inverse of f.",
          answer: "True",
        },
        {
          prompt:
            "True/False: A function must be bijective to have an inverse.",
          answer: "True",
        },
        {
          prompt:
            "True/False: If f has an inverse, then f⁻¹(f(x)) = x for all x in the domain.",
          answer: "True",
        },
        {
          prompt: "True/False: Every function has an inverse function.",
          answer: "False",
        },
      ];
      return randomElement(questions);
    },
  },

  // ========== FUNCTION THEORY ==========

  // --- Well-definedness ---
  {
    id: 214,
    topic: "Function Theory",
    subtopic: "Well-definedness",
    prompt: "",
    answer: "",
    generate: () => {
      const questions = [
        {
          prompt:
            "Is the rule f: ℤ → ℤ, where f(n) = n / 2, a well-defined function?\n\ny = Yes\nn = No",
          answer: "n",
        },
        {
          prompt:
            "Is the rule f: ℕ → ℕ, where f(n) = n - 5, a well-defined function?\n\ny = Yes\nn = No",
          answer: "n",
        },
        {
          prompt:
            "Is the rule f: ℤ → ℤ, where f(n) = 2n, a well-defined function?\n\ny = Yes\nn = No",
          answer: "y",
        },
      ];
      return randomElement(questions);
    },
  },
  {
    id: 215,
    topic: "Function Theory",
    subtopic: "Well-definedness",
    prompt: "",
    answer: "",
    generate: () => {
      const questions = [
        {
          prompt:
            "Is the rule f: ℝ → ℝ, where f(x) = 1 / x, a well-defined function?\n\ny = Yes\nn = No",
          answer: "n",
        },
        {
          prompt:
            "Is the rule f: ℝ → ℝ, where f(x) = √x, a well-defined function?\n\ny = Yes\nn = No",
          answer: "n",
        },
        {
          prompt:
            "Is the rule f: ℝ⁺ → ℝ, where f(x) = √x, a well-defined function?\n\ny = Yes\nn = No",
          answer: "y",
        },
      ];
      return randomElement(questions);
    },
  },
  {
    id: 216,
    topic: "Function Theory",
    subtopic: "Well-definedness",
    prompt: "",
    answer: "",
    generate: () => {
      const questions = [
        {
          prompt:
            "Is the rule f: ℚ → ℤ, where f(p/q) = p + q, well-defined?\n(Hint: consider if 1/2 and 2/4 yield the same output)\n\ny = Yes\nn = No",
          answer: "n",
        },
        {
          prompt:
            "Is the rule f: ℚ → ℤ, where f(p/q) = p - q, well-defined?\n(Hint: consider if 1/2 and 2/4 yield the same output)\n\ny = Yes\nn = No",
          answer: "n",
        },
        {
          prompt:
            "Is the relation f: {1,2,3} → {a,b}, f = {(1,a), (2,b), (3,a), (1,b)} well-defined?\n\ny = Yes\nn = No",
          answer: "n",
        },
      ];
      return randomElement(questions);
    },
  },

  // --- Composition Properties ---
  {
    id: 218,
    topic: "Function Theory",
    subtopic: "Composition Properties",
    prompt: "",
    answer: "",
    generate: () => {
      const questions = [
        {
          prompt:
            "If f: A → B and g: B → C are both injective, is the composition (g ∘ f) injective?\n\ny = Yes\nn = No",
          answer: "y",
        },
        {
          prompt:
            "If f: A → B is injective and g: B → C is not injective, can (g ∘ f) be injective?\n\ny = Yes\nn = No",
          answer: "n",
        },
        {
          prompt:
            "If f and g are both bijective, is (g ∘ f) bijective?\n\ny = Yes\nn = No",
          answer: "y",
        },
      ];
      return randomElement(questions);
    },
  },
  {
    id: 219,
    topic: "Function Theory",
    subtopic: "Composition Properties",
    prompt: "",
    answer: "",
    generate: () => {
      const questions = [
        {
          prompt:
            "If f: A → B and g: B → C are both surjective, is the composition (g ∘ f) surjective?\n\ny = Yes\nn = No",
          answer: "y",
        },
        {
          prompt:
            "If f: A → B is not surjective but g: B → C is surjective, can (g ∘ f) be surjective?\n\ny = Yes\nn = No",
          answer: "y",
        },
      ];
      return randomElement(questions);
    },
  },
  {
    id: 220,
    topic: "Function Theory",
    subtopic: "Composition Properties",
    prompt: "",
    answer: "",
    generate: () => {
      const questions = [
        {
          prompt:
            "In general function theory, does (f ∘ g) = (g ∘ f)?\n\ny = Yes\nn = No",
          answer: "n",
        },
        {
          prompt:
            "Is function composition associative? Does (f ∘ g) ∘ h = f ∘ (g ∘ h)?\n\ny = Yes\nn = No",
          answer: "y",
        },
        {
          prompt:
            "Is function composition commutative? Does f ∘ g = g ∘ f in general?\n\ny = Yes\nn = No",
          answer: "n",
        },
      ];
      return randomElement(questions);
    },
  },

  // --- Identity & Range ---
  {
    id: 217,
    topic: "Function Theory",
    subtopic: "Identity & Range",
    prompt: "",
    answer: "",
    generate: () => {
      const questions = [
        {
          prompt:
            "What is the Identity function ι_A(x) for any set A?\n\nEnter: x, y, or 0",
          answer: "x",
        },
        {
          prompt:
            "For the identity function f(x) = x, what is f(5)?\n\nEnter the number:",
          answer: "5",
        },
        {
          prompt:
            "True/False: The identity function is bijective.\n\nEnter: True or False",
          answer: "True",
        },
      ];
      return randomElement(questions);
    },
  },
  {
    id: 221,
    topic: "Function Theory",
    subtopic: "Identity & Range",
    prompt: "",
    answer: "",
    generate: () => {
      const questions = [
        {
          prompt:
            "The set of all actual outputs {f(x) | x ∈ Domain} is called the ________ of the function.",
          answer: "range",
        },
        {
          prompt:
            "The set of all possible outputs (target set) is called the ________ of the function.",
          answer: "codomain",
        },
        {
          prompt:
            "True/False: The range is always a subset of the codomain.\n\nEnter: True or False",
          answer: "True",
        },
        {
          prompt:
            "True/False: For a surjective function, the range equals the codomain.\n\nEnter: True or False",
          answer: "True",
        },
      ];
      return randomElement(questions);
    },
  },
];

// ============================================================================
// MODULE 4: Cryptography
// ============================================================================

// Helper functions for cryptography
const modPow = (base: number, exp: number, mod: number): number => {
  if (mod === 1) return 0;
  let result = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) {
      result = (result * base) % mod;
    }
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  return result;
};

const modInverse = (a: number, m: number): number => {
  // Extended Euclidean Algorithm
  let m0 = m;
  let x0 = 0;
  let x1 = 1;

  if (m === 1) return 0;

  while (a > 1) {
    const q = Math.floor(a / m);
    let t = m;
    m = a % m;
    a = t;
    t = x0;
    x0 = x1 - q * x0;
    x1 = t;
  }

  if (x1 < 0) x1 += m0;
  return x1;
};

const charToNum = (char: string): number => {
  if (char === "_") return 26;
  return char.charCodeAt(0) - 65; // A=0, B=1, ..., Z=25
};

const numToChar = (num: number): string => {
  if (num === 26) return "_";
  return String.fromCharCode(num + 65);
};

const encryptSimple = (
  message: string,
  K: number,
  N: number,
  packetSize: number
): string => {
  // Convert message to numbers
  const nums = message.split("").map(charToNum);

  // Pad if necessary
  while (nums.length % packetSize !== 0) {
    nums.push(26); // pad with '_'
  }

  // Group into packets and encrypt
  const encrypted: number[] = [];
  for (let i = 0; i < nums.length; i += packetSize) {
    let packet = 0;
    for (let j = 0; j < packetSize; j++) {
      packet = packet * 27 + nums[i + j];
    }
    const encryptedPacket = (packet * K) % N;
    encrypted.push(encryptedPacket);
  }

  return encrypted.join(",");
};

const decryptSimple = (
  ciphertext: string,
  K: number,
  N: number,
  packetSize: number
): string => {
  const encrypted = ciphertext.split(",").map(Number);
  const Kinv = modInverse(K, N);

  let message = "";
  for (const encPacket of encrypted) {
    let packet = (encPacket * Kinv) % N;

    // Convert packet back to characters
    const chars: string[] = [];
    for (let i = 0; i < packetSize; i++) {
      chars.unshift(numToChar(packet % 27));
      packet = Math.floor(packet / 27);
    }
    message += chars.join("");
  }

  // Remove padding
  while (message.endsWith("_")) {
    message = message.slice(0, -1);
  }

  return message;
};

export const module4Questions: Question[] = [
  // ========== MODULAR ARITHMETIC ==========

  // --- Negative Modulo ---
  {
    id: 401,
    topic: "Modular Arithmetic",
    subtopic: "Negative Modulo",
    prompt: "",
    answer: "",
    generate: () => {
      const a = -randomInt(30, 80);
      const b = randomInt(8, 20);
      // JavaScript's % is remainder, Python's % is modulo
      // For negative numbers: result = ((a % b) + b) % b
      const answer = ((a % b) + b) % b;
      return {
        prompt: `${a} % ${b} = ____`,
        answer: String(answer),
      };
    },
  },

  // --- Positive Modulo ---
  {
    id: 402,
    topic: "Modular Arithmetic",
    subtopic: "Positive Modulo",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(20, 45);
      const b = randomInt(10, 25);
      const answer = a % b;
      return {
        prompt: `${a} % ${b} = ____`,
        answer: String(answer),
      };
    },
  },

  // --- Chained Modulo ---
  {
    id: 403,
    topic: "Modular Arithmetic",
    subtopic: "Chained Modulo",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(30, 45);
      const b = randomInt(10, 25);
      const c = randomInt(8, 15);
      const answer = (a % b) % c;
      return {
        prompt: `${a} % ${b} % ${c} = ____`,
        answer: String(answer),
      };
    },
  },
  {
    id: 404,
    topic: "Modular Arithmetic",
    subtopic: "Chained Modulo",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(20, 40);
      const b = randomInt(20, 30);
      const c = randomInt(8, 15);
      const d = randomInt(3, 5);
      const answer = ((a % b) % c) % d;
      return {
        prompt: `${a} % ${b} % ${c} % ${d} = ____`,
        answer: String(answer),
      };
    },
  },

  // --- Floor Division ---
  {
    id: 405,
    topic: "Modular Arithmetic",
    subtopic: "Floor Division",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(18, 50);
      const b = randomInt(15, 25);
      const answer = Math.floor(a / b);
      return {
        prompt: `${a} // ${b} = ____`,
        answer: String(answer),
      };
    },
  },

  // --- Mixed Operations ---
  {
    id: 406,
    topic: "Modular Arithmetic",
    subtopic: "Mixed Operations",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(30, 50);
      const b = randomInt(10, 25);
      const c = randomInt(10, 20);
      const d = randomInt(2, 5);
      const answer = (Math.floor(a / b) % c) * d;
      return {
        prompt: `${a} // ${b} % ${c} * ${d} = ____`,
        answer: String(answer),
      };
    },
  },

  // ========== SIMPLE CRYPTOSYSTEM - ENCRYPTION ==========

  // --- PacketSize 1 Encryption ---
  {
    id: 407,
    topic: "Simple Cryptosystem",
    subtopic: "Encryption - PacketSize 1",
    prompt: "",
    answer: "",
    generate: () => {
      const messages = ["ACTION", "COUGAR", "THANK", "HOTEL", "STORM", "PRIDE"];
      const message = randomElement(messages);
      const K = randomInt(40, 80);
      const N = randomInt(K + 5, K + 30);
      const packetSize = 1;

      const answer = encryptSimple(message, K, N, packetSize);

      return {
        prompt: `Encrypt the message "${message}" using the simple cryptosystem described in section 9.8 of the textbook using the following parameters:\nK=${K}\nN=${N}\npacketSize=${packetSize}\n\nAnswer must be a sequence of integers separated by commas (without any space).\nExample: 563,4092,11233,3`,
        answer: answer,
      };
    },
  },

  // --- PacketSize 2 Encryption ---
  {
    id: 408,
    topic: "Simple Cryptosystem",
    subtopic: "Encryption - PacketSize 2",
    prompt: "",
    answer: "",
    generate: () => {
      const messages = ["PENCIL", "WHILE", "PRIDE", "STORM", "THANK"];
      const message = randomElement(messages);
      const K = randomInt(4000, 6000);
      const N = randomInt(K + 100, K + 1500);
      const packetSize = 2;

      const answer = encryptSimple(message, K, N, packetSize);

      return {
        prompt: `Encrypt the message "${message}" using the simple cryptosystem described in section 9.8 of the textbook using the following parameters:\nK=${K}\nN=${N}\npacketSize=${packetSize}\n\nAnswer must be a sequence of integers separated by commas (without any space).\nExample: 563,4092,11233,3`,
        answer: answer,
      };
    },
  },

  // --- PacketSize 3 Encryption ---
  {
    id: 409,
    topic: "Simple Cryptosystem",
    subtopic: "Encryption - PacketSize 3",
    prompt: "",
    answer: "",
    generate: () => {
      const messages = ["STORM", "ACTION", "COUGAR", "PENCIL"];
      const message = randomElement(messages);
      const K = randomInt(100000, 200000);
      const N = randomInt(K + 10000, K + 500000);
      const packetSize = 3;

      const answer = encryptSimple(message, K, N, packetSize);

      return {
        prompt: `Encrypt the message "${message}" using the simple cryptosystem described in section 9.8 of the textbook using the following parameters:\nK=${K}\nN=${N}\npacketSize=${packetSize}\n\nAnswer must be a sequence of integers separated by commas (without any space).\nExample: 563,4092,11233,3`,
        answer: answer,
      };
    },
  },

  // ========== SIMPLE CRYPTOSYSTEM - DECRYPTION ==========

  // --- PacketSize 1 Decryption ---
  {
    id: 410,
    topic: "Simple Cryptosystem",
    subtopic: "Decryption - PacketSize 1",
    prompt: "",
    answer: "",
    generate: () => {
      const messages = ["STORM", "PRIDE", "THANK", "HOTEL", "ACTION"];
      const message = randomElement(messages);
      const K = randomInt(50, 85);
      const N = randomInt(K + 5, K + 20);
      const packetSize = 1;

      const ciphertext = encryptSimple(message, K, N, packetSize);

      return {
        prompt: `Decrypt the message "${ciphertext}" using the simple cryptosystem described in section 9.8 of the textbook using the following parameters:\nK=${K}\nN=${N}\npacketSize=${packetSize}\n\nAnswer must be a string (without any space, use _ if necessary). Remove all padding characters, if any.\nExample: ATTACK_AT_DAWN`,
        answer: message,
      };
    },
  },

  // --- PacketSize 2 Decryption ---
  {
    id: 411,
    topic: "Simple Cryptosystem",
    subtopic: "Decryption - PacketSize 2",
    prompt: "",
    answer: "",
    generate: () => {
      const messages = ["PENCIL", "WHILE", "STORM", "PRIDE"];
      const message = randomElement(messages);
      const K = randomInt(4000, 6500);
      const N = randomInt(K + 100, K + 2000);
      const packetSize = 2;

      const ciphertext = encryptSimple(message, K, N, packetSize);

      return {
        prompt: `Decrypt the message "${ciphertext}" using the simple cryptosystem described in section 9.8 of the textbook using the following parameters:\nK=${K}\nN=${N}\npacketSize=${packetSize}\n\nAnswer must be a string (without any space, use _ if necessary). Remove all padding characters, if any.\nExample: ATTACK_AT_DAWN`,
        answer: message,
      };
    },
  },

  // --- PacketSize 3 Decryption ---
  {
    id: 412,
    topic: "Simple Cryptosystem",
    subtopic: "Decryption - PacketSize 3",
    prompt: "",
    answer: "",
    generate: () => {
      const messages = ["STORM", "ACTION", "PENCIL"];
      const message = randomElement(messages);
      const K = randomInt(100000, 200000);
      const N = randomInt(K + 10000, K + 400000);
      const packetSize = 3;

      const ciphertext = encryptSimple(message, K, N, packetSize);

      return {
        prompt: `Decrypt the message "${ciphertext}" using the simple cryptosystem described in section 9.8 of the textbook using the following parameters:\nK=${K}\nN=${N}\npacketSize=${packetSize}\n\nAnswer must be a string (without any space, use _ if necessary). Remove all padding characters, if any.\nExample: ATTACK_AT_DAWN`,
        answer: message,
      };
    },
  },

  // --- Mixed Encryption/Decryption ---
  {
    id: 413,
    topic: "Simple Cryptosystem",
    subtopic: "Encryption - Mixed PacketSize",
    prompt: "",
    answer: "",
    generate: () => {
      const scenarios = [
        { message: "HELLO", K: 45, N: 60, packetSize: 1 },
        { message: "WORLD", K: 50, N: 65, packetSize: 1 },
        { message: "SECURE", K: 4500, N: 5200, packetSize: 2 },
        { message: "CIPHER", K: 4800, N: 5500, packetSize: 2 },
        { message: "MESSAGE", K: 150000, N: 450000, packetSize: 3 },
      ];

      const scenario = randomElement(scenarios);
      const answer = encryptSimple(
        scenario.message,
        scenario.K,
        scenario.N,
        scenario.packetSize
      );

      return {
        prompt: `Encrypt the message "${scenario.message}" using the simple cryptosystem described in section 9.8 of the textbook using the following parameters:\nK=${scenario.K}\nN=${scenario.N}\npacketSize=${scenario.packetSize}\n\nAnswer must be a sequence of integers separated by commas (without any space).\nExample: 563,4092,11233,3`,
        answer: answer,
      };
    },
  },
  {
    id: 414,
    topic: "Simple Cryptosystem",
    subtopic: "Decryption - Mixed PacketSize",
    prompt: "",
    answer: "",
    generate: () => {
      const scenarios = [
        { message: "HELLO", K: 45, N: 60, packetSize: 1 },
        { message: "WORLD", K: 50, N: 65, packetSize: 1 },
        { message: "SECURE", K: 4500, N: 5200, packetSize: 2 },
        { message: "CIPHER", K: 4800, N: 5500, packetSize: 2 },
        { message: "DRAGON", K: 150000, N: 450000, packetSize: 3 },
      ];

      const scenario = randomElement(scenarios);
      const ciphertext = encryptSimple(
        scenario.message,
        scenario.K,
        scenario.N,
        scenario.packetSize
      );

      return {
        prompt: `Decrypt the message "${ciphertext}" using the simple cryptosystem described in section 9.8 of the textbook using the following parameters:\nK=${scenario.K}\nN=${scenario.N}\npacketSize=${scenario.packetSize}\n\nAnswer must be a string (without any space, use _ if necessary). Remove all padding characters, if any.\nExample: ATTACK_AT_DAWN`,
        answer: scenario.message,
      };
    },
  },
];

// ============================================================================
// MODULE 5: Stochastic Computing
// ============================================================================
 
// Helper: number of holes per digit (0, 1, or 2)
const DIGIT_HOLES: Record<string, number> = {
  "0": 1, "1": 0, "2": 0, "3": 0, "4": 1,
  "5": 0, "6": 1, "7": 0, "8": 2, "9": 1,
};
 
export const module5Questions: Question[] = [
 
  // ========== EXPECTED VALUE ==========
 
  // --- Digit Holes ---
  {
    id: 501,
    topic: "Expected Value",
    subtopic: "Digit Holes",
    prompt: "",
    answer: "",
    generate: () => {
      const len = randomInt(9, 15);
      const digits = Array.from({ length: len }, () => String(randomInt(0, 9)));
      const str = digits.join("");
 
      const win0 = randomInt(10, 20);
      const win1 = randomInt(10, 20);
      const lose2 = randomInt(8, 15);
 
      const counts = [0, 0, 0];
      for (const d of digits) counts[DIGIT_HOLES[d]]++;
 
      const ev = (counts[0] * win0 + counts[1] * win1 - counts[2] * lose2) / len;
      const answer = ev.toFixed(2);
 
      return {
        prompt: `A random digit is chosen from "${str}". Your win (or lose) depends on the number of holes in the digit:\n    0 hole: win $${win0},    1 hole: win $${win1},    2 holes: lose $${lose2}.\nWhat is the expected value?\n\nRound your answer to 2 decimal places.`,
        answer,
      };
    },
  },
 
  // --- Raffle Tickets ---
  {
    id: 502,
    topic: "Expected Value",
    subtopic: "Raffle Tickets",
    prompt: "",
    answer: "",
    generate: () => {
      const totalTickets = randomInt(200, 500) * 2;
      const ticketCost = randomInt(3, 10);
      const prize1 = randomInt(500, 800);
      const prize2 = randomInt(200, 400);
      const prize3 = randomInt(50, 150);
 
      // EV = sum(prize/total) - cost  (3 winning tickets out of totalTickets)
      const ev = (prize1 + prize2 + prize3) / totalTickets - ticketCost;
      const answer = ev.toFixed(2);
 
      return {
        prompt: `You buy a raffle ticket. Each ticket costs $${ticketCost}. There are ${totalTickets} tickets. There are three winning tickets. The prizes are: $${prize1}, $${prize2}, $${prize3}. What is the expected value?\n\nRound your answer to 2 decimal places.`,
        answer,
      };
    },
  },
 
  // --- Marble Bag ---
  {
    id: 503,
    topic: "Expected Value",
    subtopic: "Marble Bag",
    prompt: "",
    answer: "",
    generate: () => {
      const grayCount = randomInt(3000, 5000);
      const aquaCount = randomInt(4, 10);
      const silverCount = randomInt(6, 12);
      const goldCount = randomInt(1, 4);
      const total = grayCount + aquaCount + silverCount + goldCount;
 
      const cost = randomInt(8, 15);
      const grayWin = randomInt(2, 6);
      const aquaWin = randomInt(7, 12);
      const silverWin = randomInt(25, 45);
      const goldWin = randomInt(70, 120);
 
      const ev =
        (grayCount * grayWin +
          aquaCount * aquaWin +
          silverCount * silverWin +
          goldCount * goldWin) /
          total -
        cost;
      const answer = ev.toFixed(2);
 
      return {
        prompt: `A bag contains color marbles: ${grayCount} gray, ${aquaCount} aqua, ${silverCount} silver, ${goldCount} gold.\nYou pay $${cost} to draw a random marble from the bag. Your win depends on the color:\n    gray: $${grayWin},    aqua: $${aquaWin},    silver: $${silverWin},    gold: $${goldWin}.\nWhat is the expected value?\n\nRound your answer to 2 decimal places.`,
        answer,
      };
    },
  },
 
  // --- Coin then Dice (Sequential Game) ---
  {
    id: 504,
    topic: "Expected Value",
    subtopic: "Sequential Games",
    prompt: "",
    answer: "",
    generate: () => {
      const headLoss = randomInt(5, 12);
      const diceWin6 = randomInt(3, 8);
      const diceWinOther = randomInt(8, 15);
 
      // EV = 0.5*(-headLoss) + 0.5*(1/6*diceWin6 + 5/6*diceWinOther)
      const diceEV = (1 / 6) * diceWin6 + (5 / 6) * diceWinOther;
      const ev = 0.5 * -headLoss + 0.5 * diceEV;
      const answer = ev.toFixed(3);
 
      return {
        prompt: `You toss a coin. You lose $${headLoss} and the game is over if the coin is a head.\nOtherwise: You roll a dice.\n   You win $${diceWin6} if the dice is a six-point. Otherwise: You win $${diceWinOther}.\nWhat is the expected value of this game?\n\nRound your answer to 3 decimal places.`,
        answer,
      };
    },
  },
 
  // --- Random Variable X = a + b*H + c*H*T + d*T ---
  {
    id: 505,
    topic: "Expected Value",
    subtopic: "Random Variables (H/T)",
    prompt: "",
    answer: "",
    generate: () => {
      const tosses = randomInt(2, 4);
      const a = randomInt(-5, 5);
      const b = randomInt(1, 4) * (Math.random() < 0.5 ? 1 : -1);
      const c = randomInt(1, 6) * (Math.random() < 0.5 ? 1 : -1);
      const d = randomInt(1, 4) * (Math.random() < 0.5 ? 1 : -1);
 
      // E[H] = n/2, E[T] = n/2, E[H*T] = n*(n-1)/4
      const eH = tosses / 2;
      const eT = tosses / 2;
      const eHT = (tosses * (tosses - 1)) / 4;
 
      const ev = a + b * eH + c * eHT + d * eT;
      const answer = ev.toFixed(2);
 
      const bStr = b >= 0 ? `+${b}` : `${b}`;
      const cStr = c >= 0 ? `+${c}` : `${c}`;
      const dStr = d >= 0 ? `+${d}` : `${d}`;
 
      return {
        prompt: `Toss a coin ${tosses} times. Let H, T be the number of heads and tails. What is the expected value of the random variable:\n   X = ${a}${bStr}*H${cStr}*H*T${dStr}*T\n\nRound your answer to 2 decimal places.`,
        answer,
      };
    },
  },
 
  // --- Biased Coin ---
  {
    id: 506,
    topic: "Expected Value",
    subtopic: "Biased Coin",
    prompt: "",
    answer: "",
    generate: () => {
      const headPct = randomInt(20, 60);
      const tailPct = 100 - headPct;
      const headLoss = randomInt(15, 40);
      const tailWin = randomInt(40, 120);
 
      const ev = (headPct / 100) * -headLoss + (tailPct / 100) * tailWin;
      const answer = ev.toFixed(2);
 
      return {
        prompt: `You toss a biased coin.\n    It lands on a head with ${headPct}% chance, it lands on a tail otherwise.\n    You lose $${headLoss} if it is a head.\n    You win $${tailWin} if it is a tail.\nWhat is the expected value?\n\nRound your answer to 2 decimal places.`,
        answer,
      };
    },
  },
 
  // --- Profit by Weather Scenario ---
  {
    id: 507,
    topic: "Expected Value",
    subtopic: "Profit by Scenario",
    prompt: "",
    answer: "",
    generate: () => {
      // Generate 4 probabilities summing to 100
      const p1 = randomInt(15, 35);
      const p2 = randomInt(15, 30);
      const p3 = randomInt(10, 25);
      const p4 = 100 - p1 - p2 - p3;
 
      if (p4 <= 0) {
        return {
          prompt: `You sell snacks on a beach. Your profit on a nice, windy, chilly and rainy day is:\n    $550    $620    $330    -$250\nWhat is the expected profit based on the following chances of a nice, windy, chilly and rainy day:\n   30%    21%    29%    20%\n\nRound your answer to 1 decimal place.`,
          answer: "340.9",
        };
      }
 
      const profits = [
        randomInt(400, 700),
        randomInt(300, 650),
        randomInt(200, 450),
        -randomInt(100, 350),
      ];
 
      const ev =
        (p1 * profits[0] +
          p2 * profits[1] +
          p3 * profits[2] +
          p4 * profits[3]) /
        100;
      const answer = ev.toFixed(1);
 
      return {
        prompt: `You sell snacks on a beach. Your profit on a nice, windy, chilly and rainy day is:\n    $${profits[0]}    $${profits[1]}    $${profits[2]}    -$${Math.abs(profits[3])}\nWhat is the expected profit based on the following chances of a nice, windy, chilly and rainy day:\n   ${p1}%    ${p2}%    ${p3}%    ${p4}%\n\nRound your answer to 1 decimal place.`,
        answer,
      };
    },
  },
 
  // --- Gift Coupon Box - Without Replacement ---
  {
    id: 508,
    topic: "Expected Value",
    subtopic: "Gift Coupons - Without Replacement",
    prompt: "",
    answer: "",
    generate: () => {
      const blank = randomInt(18, 28);
      const prize1Count = randomInt(5, 9);
      const prize2Count = randomInt(2, 4);
      const prize1 = randomInt(25, 55);
      const prize2 = randomInt(180, 300);
      const total = blank + prize1Count + prize2Count;
 
      // P(win non-blank 1st draw) → win full prize
      // P(blank 1st draw) → draw again from (total-1) remaining, blank removed
      const pBlank1 = blank / total;
      const ev1st = (prize1Count * prize1 + prize2Count * prize2) / total;
      const ev2nd =
        (prize1Count * (prize1 / 2) + prize2Count * (prize2 / 2)) / (total - 1);
 
      const ev = ev1st + pBlank1 * ev2nd;
      const answer = ev.toFixed(3);
 
      return {
        prompt: `A box contains the following gift coupons: ${blank} blank, ${prize1Count} $${prize1}, ${prize2Count} $${prize2}. You draw a random coupon from the box. You win the coupon if it is not blank. Otherwise leave the coupon *** outside *** the box, Draw a coupon one more time and win half prize of it. What is the expected value?\n\nRound your answer to 3 decimal places.`,
        answer,
      };
    },
  },
 
  // --- Gift Coupon Box - With Replacement ---
  {
    id: 509,
    topic: "Expected Value",
    subtopic: "Gift Coupons - With Replacement",
    prompt: "",
    answer: "",
    generate: () => {
      const blank = randomInt(20, 32);
      const prize1Count = randomInt(5, 9);
      const prize2Count = randomInt(1, 3);
      const prize1 = randomInt(25, 50);
      const prize2 = randomInt(180, 280);
      const total = blank + prize1Count + prize2Count;
 
      // P(blank) = blank/total → put back, draw again from same box
      const pBlank = blank / total;
      const ev1st = (prize1Count * prize1 + prize2Count * prize2) / total;
      const ev2nd =
        (prize1Count * (prize1 / 2) + prize2Count * (prize2 / 2)) / total;
 
      const ev = ev1st + pBlank * ev2nd;
      const answer = ev.toFixed(3);
 
      return {
        prompt: `A box contains the following gift coupons: ${blank} blank, ${prize1Count} $${prize1}, ${prize2Count} $${prize2}. You draw a random coupon from the box. You win the coupon if it is not blank. Otherwise put the coupon *** back *** into the box, Draw a coupon one more time and win half prize of it. What is the expected value?\n\nRound your answer to 3 decimal places.`,
        answer,
      };
    },
  },
 
  // --- Dice Roll Chain ---
  {
    id: 510,
    topic: "Expected Value",
    subtopic: "Dice Roll Chain",
    prompt: "",
    answer: "",
    generate: () => {
      const a1 = randomInt(10, 25);
      const b1 = randomInt(30, 60);
      const a2 = randomInt(8, 20);
      const b2 = randomInt(25, 50);
      const coinWin = randomInt(5, 15);
 
      // E[n | n even] = (2+4+6)/3 = 4, P(even) = 1/2
      const evEven1 = a1 + b1 * 4;
      const evEven2 = a2 + b2 * 4;
      const evCoin = coinWin * 0.5;
 
      const ev =
        0.5 * evEven1 + 0.5 * (0.5 * evEven2 + 0.5 * evCoin);
      const answer = ev.toFixed(2);
 
      return {
        prompt: `You roll a dice and obtain n points, you win $(${a1}+${b1}*n) if n is even. Otherwise you roll it again and obtain m points, you win $(${a2}+${b2}*m) if m is even. Otherwise you toss a coin, you win $${coinWin} if it is a head. What is the expected value?\n\nRound your answer to 2 decimal places.`,
        answer,
      };
    },
  },
 
  // --- Store Inventory Profit ---
  {
    id: 511,
    topic: "Expected Value",
    subtopic: "Store Inventory Profit",
    prompt: "",
    answer: "",
    generate: () => {
      const qty = randomInt(2, 4);
      const costPer = randomInt(400, 700);
      const sellPer = randomInt(Math.floor(costPer * 1.5), costPer * 3);
      const buybackPer = randomInt(
        Math.floor(costPer * 0.4),
        Math.floor(costPer * 0.7)
      );
 
      // Build probabilities summing to 100 for 0..qty sales
      const probs: number[] = [];
      let remaining = 100;
      for (let i = 0; i < qty; i++) {
        const p = randomInt(5, Math.floor(remaining / (qty - i + 1)));
        probs.push(p);
        remaining -= p;
      }
      probs.push(remaining);
 
      const totalCost = qty * costPer;
      let ev = 0;
      for (let sold = 0; sold <= qty; sold++) {
        const profit = sold * sellPer + (qty - sold) * buybackPer - totalCost;
        ev += (probs[sold] / 100) * profit;
      }
      const answer = ev.toFixed(2);
 
      const probStr = probs.map((p) => `${p}%`).join(", ");
      const salesStr = Array.from({ length: qty + 1 }, (_, i) => i).join(", ");
 
      return {
        prompt: `A store has purchased ${qty} desks at $${costPer} apiece. It will sell them for $${sellPer} apiece. The manufacturer has agreed to repurchase any desks still unsold after a month at $${buybackPer} apiece. It is estimated that (within one month):\n${salesStr} desks will be sold with the chances: ${probStr}. What is the expected profit?\n\nRound your answer to 2 decimal places.`,
        answer,
      };
    },
  },
 
  // --- Investment Project ---
  {
    id: 512,
    topic: "Expected Value",
    subtopic: "Investment Project",
    prompt: "",
    answer: "",
    generate: () => {
      const invest = randomInt(2000, 5000);
      const p1 = randomInt(20, 35);
      const p2 = randomInt(40, 58);
      const p3 = 100 - p1 - p2;
 
      if (p3 <= 0) {
        return {
          prompt: `You invest $3300 in a project. It is estimated that, in one year, the project has:\n     a 27% chance of increasing in value by $1100\n     a 56% chance of increasing in value by $630\n     a 17% chance of decreasing in value by $210\nWhat is the expected value of the project in one year?\n\nRound your answer to an integer.`,
          answer: "3914",
        };
      }
 
      const gain1 = randomInt(800, 1500);
      const gain2 = randomInt(400, 900);
      const loss3 = randomInt(100, 400);
 
      const ev =
        invest +
        (p1 / 100) * gain1 +
        (p2 / 100) * gain2 -
        (p3 / 100) * loss3;
      const answer = String(Math.round(ev));
 
      return {
        prompt: `You invest $${invest} in a project. It is estimated that, in one year, the project has:\n     a ${p1}% chance of increasing in value by $${gain1}\n     a ${p2}% chance of increasing in value by $${gain2}\n     a ${p3}% chance of decreasing in value by $${loss3}\nWhat is the expected value of the project in one year?\n\nRound your answer to an integer.`,
        answer,
      };
    },
  },
 
  // ========== RANDOM NUMBER GENERATION ==========
 
  // --- Middle Square Method (2-digit) ---
  {
    id: 520,
    topic: "Random Number Generation",
    subtopic: "Middle Square Method",
    prompt: "",
    answer: "",
    generate: () => {
      const seed = randomInt(10, 99);
      const count = 3;
      const sequence: number[] = [seed];
      let current = seed;
 
      for (let i = 0; i < count; i++) {
        // Square, pad to 4 digits, extract middle 2 (positions 1..2)
        const squared = String(current * current).padStart(4, "0");
        const mid = parseInt(squared.slice(1, 3), 10);
        sequence.push(mid);
        current = mid;
      }
 
      return {
        prompt: `Generate ${count} random numbers using 2-digit middle square method with seed ${seed}.\nAnswer must start with the seed and followed by ${count} numbers, separated by one space in between, no other spaces.`,
        answer: sequence.join(" "),
      };
    },
  },
 
  // --- Middle Square Method (4-digit) ---
  {
    id: 521,
    topic: "Random Number Generation",
    subtopic: "Middle Square Method",
    prompt: "",
    answer: "",
    generate: () => {
      const seed = randomInt(1000, 9999);
      const count = 3;
      const sequence: number[] = [seed];
      let current = seed;
 
      for (let i = 0; i < count; i++) {
        // Square, pad to 8 digits, extract middle 4 (positions 2..5)
        const squared = String(current * current).padStart(8, "0");
        const mid = parseInt(squared.slice(2, 6), 10);
        sequence.push(mid);
        current = mid;
      }
 
      return {
        prompt: `Generate ${count} random numbers using 4-digit middle square method with seed ${seed}.\nAnswer must start with the seed and followed by ${count} numbers, separated by one space in between, no other spaces.`,
        answer: sequence.join(" "),
      };
    },
  },
 
  // --- Linear Congruential Generator - Generate Numbers ---
  {
    id: 522,
    topic: "Random Number Generation",
    subtopic: "Linear Congruential Generator",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(3, 15);
      const c = randomInt(5, 20);
      const m = randomInt(20, 55);
      const seed = randomInt(1, m - 1);
      const count = randomInt(2, 3);
 
      const sequence: number[] = [seed];
      let current = seed;
      for (let i = 0; i < count; i++) {
        current = (a * current + c) % m;
        sequence.push(current);
      }
 
      return {
        prompt: `Generate ${count} random numbers using the Linear Congruential Generator with:\n    a=${a}    c=${c}    m=${m}     seed=${seed}\n\nAnswer must start with the seed and followed by ${count} numbers, separated by one space in between, no other spaces.`,
        answer: sequence.join(" "),
      };
    },
  },
 
  // --- Linear Congruential Generator - Find Period ---
  {
    id: 523,
    topic: "Random Number Generation",
    subtopic: "LCG Period",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(3, 8);
      const c = randomInt(2, 12);
      const m = randomInt(15, 35);
      const seed = randomInt(1, m - 1);

      const sequence: number[] = [];
      let current = seed;
      let firstGenerated = -1;

      do {
        current = (a * current + c) % m;
        if (firstGenerated === -1) {
          firstGenerated = current;
        } else if (current === firstGenerated) {
          // Found the period - don't include the repeated element
          break;
        }
        sequence.push(current);

        if (sequence.length > m + 5) break; // safety cap
      } while (true);

      const period = sequence.length;

      return {
        prompt: `Find the period of random numbers generated using the Linear Congruential Generator with:\n    a=${a}    c=${c}    m=${m}     seed=${seed}\n\nAnswer must be a single positive integer.`,
        answer: String(period),
      };
    },
  },
 
  // --- LFSR - Generate n-bit Integers ---
  {
    id: 524,
    topic: "Random Number Generation",
    subtopic: "LFSR",
    prompt: "",
    answer: "",
    generate: () => {
      // Fixed verified scenarios from quiz
      const scenarios = [
        {
          bits: 7,
          taps: [1, 2, 3, 6, 7],
          seed: "1100101",
          outputBits: 4,
          count: 4,
        },
        {
          bits: 7,
          taps: [3, 4, 7],
          seed: "1110000",
          outputBits: 3,
          count: 5,
        },
      ];
 
      const s = randomElement(scenarios);
 
// Simulate LFSR: taps are 1-indexed from the left (MSB is position 1)
      const state = s.seed.split("").map(Number);
      const rawBits: number[] = [];

      while (rawBits.length < s.count * s.outputBits) {
        // Output LSB (rightmost bit)
        rawBits.push(state[s.bits - 1]);
        let feedback = 0;
        // Taps 1-indexed from left: tap 1 = position 0, tap 2 = position 1, etc.
        for (const t of s.taps) feedback ^= state[t - 1];
        // Shift RIGHT (towards LSB)
        for (let i = s.bits - 1; i > 0; i--) state[i] = state[i - 1];
        state[0] = feedback;
      }
 
      const output: number[] = [];
      for (let i = 0; i < s.count; i++) {
        const chunk = rawBits.slice(i * s.outputBits, (i + 1) * s.outputBits);
        output.push(parseInt(chunk.join(""), 2));
      }
 
      return {
        prompt: `Use the ${s.bits}-bit LFSR with taps [${s.taps.join(",")}] and seed='${s.seed}' to generate ${s.count} ${s.outputBits}-bit integers.\nAnswer must be ${s.count} integers separated by a space. No other spaces!`,
        answer: output.join(" "),
      };
    },
  },
 
  // --- LFSR - Find Period (output bitstring) ---
  {
    id: 525,
    topic: "Random Number Generation",
    subtopic: "LFSR Period",
    prompt: "",
    answer: "",
    generate: () => {
      // Verified correct answers from quiz
      const scenarios = [
        { bits: 6, taps: [1, 3, 6], seed: "101100", answer: "0011010" },
        { bits: 5, taps: [1, 2, 5], seed: "00011", answer: "1100010" },
        { bits: 5, taps: [1, 2, 5], seed: "11010", answer: "0101000" },
        { bits: 7, taps: [1, 3, 4, 6, 7], seed: "1101001", answer: "100101110" },
      ];
 
      const s = randomElement(scenarios);
 
      return {
        prompt: `Simulate the ${s.bits}-bit LFSR with taps [${s.taps.join(",")}] and seed='${s.seed}' until it repeats itself. Write the output below, do not include the repeating output.\n\nAnswer must be a string of 0 and 1 without any space. Hint: The length of your answer is the period.`,
        answer: s.answer,
      };
    },
  },
];
 
// ============================================================================
// MODULE 6: Sequences and Graph Theory
// ============================================================================
 
export const module6Questions: Question[] = [
 
  // ========== SEQUENCES ==========
 
  // --- Arithmetic Series Sum ---
  {
    id: 601,
    topic: "Sequences",
    subtopic: "Arithmetic Series Sum",
    prompt: "",
    answer: "",
    generate: () => {
      const first = randomInt(10, 50);
      const diff = randomInt(3, 15);
      const numTerms = randomInt(15, 30);
      const last = first + diff * numTerms;
      const n = numTerms + 1;
      const sum = (n * (first + last)) / 2;
 
      return {
        prompt: `Find the sum of the arithmetic series:\n${first}+${first + diff}+${first + 2 * diff}+...+${last}`,
        answer: String(sum),
      };
    },
  },
 
  // --- Recursive Sequences (even/odd index rule with s_{n/2}) ---
  {
    id: 602,
    topic: "Sequences",
    subtopic: "Recursive Sequences",
    prompt: "",
    answer: "",
    generate: () => {
      const s1 = randomInt(50, 90);
      const mod = randomInt(3, 6);
      const addOdd = randomInt(30, 60);
 
      // sₙ = (s_(n/2) mod k) + sₙ₋₁  if n is even
      // sₙ = sₙ₋₁ + addOdd            if n is odd
      const s2 = (s1 % mod) + s1;           // n=2 even: s₁ mod k + s₁
      const s3 = s2 + addOdd;               // n=3 odd:  s₂ + addOdd
      const s4 = (s2 % mod) + s3;           // n=4 even: s₂ mod k + s₃

      return {
        prompt: `s1=${s1}; sₙ = (s_(n/2) mod ${mod}) + sₙ₋₁ if n is even; sₙ = sₙ₋₁ + ${addOdd} otherwise. Find s4.`,
        answer: String(s4),
      };
    },
  },
 
  // --- Recursive Sequences (odd/even value rule) ---
  {
    id: 603,
    topic: "Sequences",
    subtopic: "Recursive Sequences",
    prompt: "",
    answer: "",
    generate: () => {
      const s1 = randomInt(20, 60);
      const addOdd = randomInt(5, 20);
      const addEven = randomInt(2, 8);
 
      // sₙ₊₁ = sₙ + addOdd  if sₙ is odd
      // sₙ₊₁ = sₙ/2 + addEven  otherwise
      const computeNext = (s: number): number =>
        s % 2 !== 0 ? s + addOdd : Math.floor(s / 2) + addEven;

      const s2 = computeNext(s1);
      const s3 = computeNext(s2);
      const s4 = computeNext(s3);

      return {
        prompt: `s1=${s1}; sₙ₊₁ = sₙ + ${addOdd} if sₙ is odd; sₙ₊₁ = sₙ/2 + ${addEven} otherwise. Find s4`,
        answer: String(s4),
      };
    },
  },
 
  // --- Arithmetic Sequence: Find a Specific Term ---
  {
    id: 604,
    topic: "Sequences",
    subtopic: "Arithmetic Sequence - Find Term",
    prompt: "",
    answer: "",
    generate: () => {
      const dInt = randomInt(4, 12);
      const knownPos = randomInt(25, 45);
      const val = randomInt(150, 400);
      const posA = randomInt(10, 25);
      const posB = posA + randomInt(3, 8);
      const diffExact = dInt * (posB - posA);
      const findPos = randomInt(70, 100);
      const answer = val + dInt * (findPos - knownPos);
 
      return {
        prompt: `The ${knownPos}-th term of an arithmetic sequence is ${val}, the difference between the ${posB}-th and ${posA}-th term is ${diffExact}. Find the ${findPos}-th term.`,
        answer: String(answer),
      };
    },
  },
 
  // --- Geometric Sequence: Find a Specific Term ---
  {
    id: 605,
    topic: "Sequences",
    subtopic: "Geometric Sequence",
    prompt: "",
    answer: "",
    generate: () => {
      const firstTerm = randomInt(400, 900);
      const ratios = [1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8];
      const ratio = randomElement(ratios);
      const n = randomInt(3, 5);
      const answer = String(Math.round(firstTerm * Math.pow(ratio, n - 1)));
 
      return {
        prompt: `The first term of a geometric sequence is ${firstTerm}, the common ratio is ${ratio}, what is the ${n}-th term? Give your answer as a rounded integer.`,
        answer,
      };
    },
  },
 
// --- Linear Recurrence sₙ₊₂ = a*sₙ₊₁ - b*sₙ ---
  {
    id: 606,
    topic: "Sequences",
    subtopic: "Linear Recurrence",
    prompt: "",
    answer: "",
    generate: () => {
      const s1 = randomInt(30, 50);
      const s2 = randomInt(35, 55);
      const a = randomInt(4, 6);
      const b = randomInt(1, 3);

      const s3 = a * s2 - b * s1;
      const s4 = a * s3 - b * s2;

      return {
        prompt: `s1=${s1}, s2=${s2}; sₙ₊₂ = ${a}sₙ₊₁ - ${b}sₙ. Find s4`,
        answer: String(s4),
      };
    },
  },
 
  // ========== GRAPH THEORY ==========
 
  // --- Degree Sequence from Adjacency Matrix ---
  {
    id: 610,
    topic: "Graph Theory",
    subtopic: "Degree Sequence - Adjacency Matrix",
    prompt: "",
    answer: "",
    generate: () => {
      const size = randomInt(4, 6);
      const labels = ["A", "B", "C", "D", "E", "F"].slice(0, size);
 
      // Random symmetric adjacency matrix, no self-loops
      const matrix: number[][] = Array.from({ length: size }, () =>
        Array(size).fill(0)
      );
      for (let i = 0; i < size; i++) {
        for (let j = i + 1; j < size; j++) {
          const edge = Math.random() < 0.4 ? 1 : 0;
          matrix[i][j] = edge;
          matrix[j][i] = edge;
        }
      }
 
      const degrees = matrix.map((row) => row.reduce((a, b) => a + b, 0));
      const sorted = [...degrees].sort((a, b) => a - b).join(",");
 
      const header = ". " + labels.join(" ");
      const rows = labels.map((l, i) => `${l} ${matrix[i].join(" ")}`);
      const matrixStr = [header, ...rows].join("\n");
 
      return {
        prompt: `The adjacency matrix of a graph is:\n${matrixStr}\nFind its degree sequence.\nYour answer is a list of integers (no space) such as        1,2,3,5`,
        answer: sorted,
      };
    },
  },
 
  // --- Degree Sequence from Adjacency List ---
  {
    id: 611,
    topic: "Graph Theory",
    subtopic: "Degree Sequence - Adjacency List",
    prompt: "",
    answer: "",
    generate: () => {
      const numVertices = randomInt(4, 6);
      const labels = ["A", "B", "C", "D", "E", "F"].slice(0, numVertices);
      const degrees: Record<string, number> = {};
      for (const l of labels) degrees[l] = 0;
 
      const edges: [string, string][] = [];
      for (let i = 0; i < numVertices; i++) {
        for (let j = i + 1; j < numVertices; j++) {
          if (Math.random() < 0.4) {
            edges.push([labels[i], labels[j]]);
            degrees[labels[i]]++;
            degrees[labels[j]]++;
          }
        }
      }
 
      const adjList = labels.map((l) => {
        const neighbors = edges
          .filter(([a, b]) => a === l || b === l)
          .map(([a, b]) => (a === l ? b : a))
          .sort();
        return `${l}:[${neighbors.join(",")}]`;
      });
 
      const sorted = Object.values(degrees)
        .sort((a, b) => a - b)
        .join(",");
 
      return {
        prompt: `The adjacency list of a graph is:\n${adjList.join("\n")}\nFind its degree sequence.\n\nAnswer is a sequence of integers separated by commas, no brackets. Example:\n1,2,3,5`,
        answer: sorted,
      };
    },
  },
 
  // --- Complete Graph: Number of Edges ---
  {
    id: 612,
    topic: "Graph Theory",
    subtopic: "Complete Graph",
    prompt: "",
    answer: "",
    generate: () => {
      const n = randomInt(6, 12);
      const edges = (n * (n - 1)) / 2;
      return {
        prompt: `How many edges does a complete graph of ${n} vertices have?`,
        answer: String(edges),
      };
    },
  },
 
  // --- Graph Complement: Number of Edges ---
  {
    id: 613,
    topic: "Graph Theory",
    subtopic: "Graph Complement",
    prompt: "",
    answer: "",
    generate: () => {
      const n = randomInt(5, 12);
      const maxEdges = (n * (n - 1)) / 2;
      const existingEdges = randomInt(1, maxEdges - 1);
      const complementEdges = maxEdges - existingEdges;
 
      return {
        prompt: `A graph has ${n} vertices and ${existingEdges} edges, how many edges does its complement have?`,
        answer: String(complementEdges),
      };
    },
  },
];