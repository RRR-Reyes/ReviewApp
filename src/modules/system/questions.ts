export type Question = {
  id: number;
  topic: string;
  subtopic: string;
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

// Binary/Hex conversion helpers
const decToBin = (dec: number, bits: number): string => {
  return dec.toString(2).padStart(bits, "0");
};

const binToDec = (bin: string): number => {
  return parseInt(bin, 2);
};

const decToHex = (dec: number): string => {
  return dec.toString(16).toUpperCase();
};

const hexToDec = (hex: string): number => {
  return parseInt(hex, 16);
};

const hexToBin = (hex: string, bits: number): string => {
  return parseInt(hex, 16).toString(2).padStart(bits, "0");
};

// Module 3 specific helpers
const randomHex = (bytes: number): string => {
  let result = "";
  for (let i = 0; i < bytes * 2; i++) {
    result += Math.floor(Math.random() * 16)
      .toString(16)
      .toUpperCase();
  }
  return result;
};

const hexToInt = (hex: string): number => {
  return parseInt(hex, 16);
};

const intToHex = (num: number, bytes: number = 4): string => {
  return (num >>> 0)
    .toString(16)
    .toUpperCase()
    .padStart(bytes * 2, "0");
};

const decimalFractionToBinary = (decimal: number, bits: number): string => {
  let result = "0.";
  let frac = decimal;

  for (let i = 0; i < bits; i++) {
    frac *= 2;
    if (frac >= 1) {
      result += "1";
      frac -= 1;
    } else {
      result += "0";
    }
  }

  return result;
};

// ============================================================================
// MODULE 1: Number Systems & Binary Arithmetic
// ============================================================================

export const archModule1Questions: Question[] = [
  // ========== NUMBER CONVERSION ==========

  // --- Binary to Decimal ---
  {
    id: 501,
    topic: "Number Conversion",
    subtopic: "Binary to Decimal",
    prompt: "",
    answer: "",
    generate: () => {
      const decimal = randomInt(50, 255);
      const binary = decToBin(decimal, 8);
      return {
        prompt: `Convert the binary number ${binary} to decimal:`,
        answer: String(decimal),
      };
    },
  },
  {
    id: 502,
    topic: "Number Conversion",
    subtopic: "Binary to Decimal",
    prompt: "",
    answer: "",
    generate: () => {
      const decimal = randomInt(50, 127);
      const binary = decToBin(decimal, 7);
      return {
        prompt: `Convert the binary number ${binary} to decimal:`,
        answer: String(decimal),
      };
    },
  },

  // --- Decimal to Binary ---
  {
    id: 531,
    topic: "Number Conversion",
    subtopic: "Decimal to Binary",
    prompt: "",
    answer: "",
    generate: () => {
      const decimal = randomInt(1, 255);
      const binary = decToBin(decimal, 8);
      return {
        prompt: `Convert decimal ${decimal} to an 8-bit binary number:`,
        answer: binary,
      };
    },
  },
  {
    id: 532,
    topic: "Number Conversion",
    subtopic: "Decimal to Binary",
    prompt: "",
    answer: "",
    generate: () => {
      const decimal = randomInt(100, 200);
      const binary = decToBin(decimal, 8);
      return {
        prompt: `Convert decimal ${decimal} to an 8-bit binary number:`,
        answer: binary,
      };
    },
  },

  // --- Hex to Decimal ---
  {
    id: 521,
    topic: "Number Conversion",
    subtopic: "Hex to Decimal",
    prompt: "",
    answer: "",
    generate: () => {
      const decimal = randomInt(1000, 4000);
      const hex = decToHex(decimal);
      return {
        prompt: `Write the hexadecimal number ${hex} in decimal:`,
        answer: String(decimal),
      };
    },
  },
  {
    id: 522,
    topic: "Number Conversion",
    subtopic: "Hex to Decimal",
    prompt: "",
    answer: "",
    generate: () => {
      const decimal = randomInt(2000, 3500);
      const hex = decToHex(decimal);
      return {
        prompt: `Write the hexadecimal number ${hex} in decimal:`,
        answer: String(decimal),
      };
    },
  },

  // --- Decimal to Hex ---
  {
    id: 516,
    topic: "Number Conversion",
    subtopic: "Decimal to Hex",
    prompt: "",
    answer: "",
    generate: () => {
      const decimal = randomInt(2000, 4000);
      const hex = decToHex(decimal);
      return {
        prompt: `Write the decimal number ${decimal} in hex:`,
        answer: hex,
      };
    },
  },
  {
    id: 517,
    topic: "Number Conversion",
    subtopic: "Decimal to Hex",
    prompt: "",
    answer: "",
    generate: () => {
      const decimal = randomInt(2500, 3000);
      const hex = decToHex(decimal);
      return {
        prompt: `Write the decimal number ${decimal} in hex:`,
        answer: hex,
      };
    },
  },

  // --- Hex to Binary ---
  {
    id: 526,
    topic: "Number Conversion",
    subtopic: "Hex to Binary",
    prompt: "",
    answer: "",
    generate: () => {
      const dec1 = randomInt(128, 255);
      const dec2 = randomInt(0, 255);
      const hex = decToHex(dec1 * 256 + dec2);
      const binary = hexToBin(hex, 16);
      return {
        prompt: `Write hex ${hex} as a 16-bit binary number:`,
        answer: binary,
      };
    },
  },
  {
    id: 527,
    topic: "Number Conversion",
    subtopic: "Hex to Binary",
    prompt: "",
    answer: "",
    generate: () => {
      const dec1 = randomInt(0, 255);
      const dec2 = randomInt(128, 255);
      const hex = decToHex(dec1 * 256 + dec2);
      const binary = hexToBin(hex, 16);
      return {
        prompt: `Write hex ${hex} as a 16-bit binary number:`,
        answer: binary,
      };
    },
  },

  // ========== BINARY OPERATIONS ==========

  // --- Binary Counting ---
  {
    id: 506,
    topic: "Binary Operations",
    subtopic: "Binary Counting",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(50, 126);
      const binary = decToBin(num, 7);
      const next = decToBin(num + 1, 7);
      return {
        prompt: `What is the binary number AFTER ${binary}?`,
        answer: next,
      };
    },
  },
  {
    id: 507,
    topic: "Binary Operations",
    subtopic: "Binary Counting",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(50, 126);
      const binary = decToBin(num, 7);
      const prev = decToBin(num - 1, 7);
      return {
        prompt: `What is the binary number BEFORE ${binary}?`,
        answer: prev,
      };
    },
  },
  {
    id: 508,
    topic: "Binary Operations",
    subtopic: "Binary Counting",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(40, 60);
      const binary = decToBin(num, 6);
      const prev = decToBin(num - 1, 6);
      return {
        prompt: `What is the binary number BEFORE ${binary}?`,
        answer: prev,
      };
    },
  },

  // --- Binary Addition ---
  {
    id: 536,
    topic: "Binary Operations",
    subtopic: "Binary Addition",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(1, 7);
      const b = randomInt(1, 7);
      const sum = a + b;
      const binA = decToBin(a, 3);
      const binB = decToBin(b, 3);
      const binSum = decToBin(sum, 4);
      return {
        prompt: `Perform binary addition: ${binA} + ${binB}\n(Enter result in binary)`,
        answer: binSum,
      };
    },
  },
  {
    id: 537,
    topic: "Binary Operations",
    subtopic: "Binary Addition",
    prompt: "",
    answer: "",
    generate: () => {
      const a = randomInt(8, 15);
      const b = randomInt(1, 7);
      const sum = a + b;
      const binA = decToBin(a, 4);
      const binB = decToBin(b, 4);
      const binSum = decToBin(sum, 5);
      return {
        prompt: `Perform binary addition: ${binA} + ${binB}\n(Enter result in binary)`,
        answer: binSum,
      };
    },
  },

  // ========== SIGNED INTEGERS ==========

  // --- Two's Complement Encoding ---
  {
    id: 541,
    topic: "Signed Integers",
    subtopic: "Two's Complement Encoding",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(-7, -1);
      const positive = Math.abs(num);
      const posBin = decToBin(positive, 4);
      // Flip bits
      const flipped = posBin
        .split("")
        .map((b) => (b === "0" ? "1" : "0"))
        .join("");
      // Add 1
      const result = decToBin((binToDec(flipped) + 1) & 0b1111, 4);
      return {
        prompt: `Encode ${num} into 4-bit Two's Complement binary.\n(Hint: ${positive} is ${posBin} -> flip -> add 1)`,
        answer: result,
      };
    },
  },
  {
    id: 542,
    topic: "Signed Integers",
    subtopic: "Two's Complement Encoding",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(-15, -1);
      const bits = 5;
      const positive = Math.abs(num);
      const posBin = decToBin(positive, bits);
      const flipped = posBin
        .split("")
        .map((b) => (b === "0" ? "1" : "0"))
        .join("");
      const mask = (1 << bits) - 1;
      const result = decToBin((binToDec(flipped) + 1) & mask, bits);
      return {
        prompt: `Encode ${num} into 5-bit Two's Complement binary.\n(Hint: ${positive} is ${posBin})`,
        answer: result,
      };
    },
  },

  // --- Two's Complement Decoding ---
  {
    id: 546,
    topic: "Signed Integers",
    subtopic: "Two's Complement Decoding",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(-8, -1);
      const binary = decToBin(num & 0b1111, 4);
      return {
        prompt: `What is the decimal value of the signed 4-bit binary number ${binary}?`,
        answer: String(num),
      };
    },
  },
  {
    id: 547,
    topic: "Signed Integers",
    subtopic: "Two's Complement Decoding",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(1, 7);
      const binary = decToBin(num, 4);
      return {
        prompt: `What is the decimal value of the signed 4-bit binary number ${binary}?`,
        answer: String(num),
      };
    },
  },
  {
    id: 548,
    topic: "Signed Integers",
    subtopic: "Two's Complement Decoding",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(-16, -1);
      const binary = decToBin(num & 0b11111, 5);
      return {
        prompt: `What is the decimal value of the signed 5-bit binary number ${binary}?`,
        answer: String(num),
      };
    },
  },

  // ========== BIT MANIPULATION ==========

  // --- Sign Extension ---
  {
    id: 551,
    topic: "Bit Manipulation",
    subtopic: "Sign Extension",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(-8, -1);
      const bin4 = decToBin(num & 0b1111, 4);
      const bin8 = decToBin(num & 0xff, 8);
      return {
        prompt: `Sign-extend the 4-bit signed number ${bin4} to 8 bits.`,
        answer: bin8,
      };
    },
  },
  {
    id: 552,
    topic: "Bit Manipulation",
    subtopic: "Sign Extension",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(1, 7);
      const bin4 = decToBin(num, 4);
      const bin8 = decToBin(num, 8);
      return {
        prompt: `Sign-extend the 4-bit signed number ${bin4} to 8 bits.`,
        answer: bin8,
      };
    },
  },

  // --- Zero Extension ---
  {
    id: 553,
    topic: "Bit Manipulation",
    subtopic: "Zero Extension",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(8, 15);
      const bin4 = decToBin(num, 4);
      const bin8 = "0000" + bin4;
      return {
        prompt: `Zero-extend the 4-bit unsigned number ${bin4} to 8 bits.`,
        answer: bin8,
      };
    },
  },
  {
    id: 554,
    topic: "Bit Manipulation",
    subtopic: "Zero Extension",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(1, 3);
      const bin2 = decToBin(num, 2);
      const bin4 = "00" + bin2;
      return {
        prompt: `Zero-extend the 2-bit unsigned number ${bin2} to 4 bits.`,
        answer: bin4,
      };
    },
  },

  // ========== RANGES & LIMITS ==========

  // --- Signed Ranges ---
  {
    id: 556,
    topic: "Ranges & Limits",
    subtopic: "Signed Ranges",
    prompt: "",
    answer: "",
    generate: () => {
      const bits = randomElement([4, 5, 6, 7]);
      const min = -(1 << (bits - 1));
      return {
        prompt: `What is the lowest (most negative) number representable in ${bits}-bit signed arithmetic?`,
        answer: String(min),
      };
    },
  },
  {
    id: 557,
    topic: "Ranges & Limits",
    subtopic: "Signed Ranges",
    prompt: "",
    answer: "",
    generate: () => {
      const bits = randomElement([4, 5, 6, 7]);
      const max = (1 << (bits - 1)) - 1;
      return {
        prompt: `What is the highest (max) number representable in ${bits}-bit signed arithmetic?`,
        answer: String(max),
      };
    },
  },

  // --- Unsigned Ranges ---
  {
    id: 558,
    topic: "Ranges & Limits",
    subtopic: "Unsigned Ranges",
    prompt: "",
    answer: "",
    generate: () => {
      const bits = randomElement([6, 7, 8, 10]);
      const max = (1 << bits) - 1;
      return {
        prompt: `What is the highest number representable in ${bits}-bit unsigned arithmetic?`,
        answer: String(max),
      };
    },
  },
  {
    id: 559,
    topic: "Ranges & Limits",
    subtopic: "Unsigned Ranges",
    prompt:
      "What is the lowest number representable in 8-bit unsigned arithmetic?",
    answer: "0",
  },

  // --- Overflow ---
  {
    id: 560,
    topic: "Ranges & Limits",
    subtopic: "Overflow Concepts",
    prompt:
      "In signed arithmetic, if you add two positive numbers and the result has a 1 in the sign bit, this is called ______.",
    answer: "overflow",
  },
];

// ============================================================================
// MODULE 2: Data Representation & Encoding
// ============================================================================

export const archModule2Questions: Question[] = [
  // ========== ADVANCED NUMBER SYSTEMS ==========

  // --- Two's Complement (8-bit) Binary to Decimal ---
  {
    id: 601,
    topic: "Advanced Number Systems",
    subtopic: "Two's Complement (Binary → Decimal)",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(1, 127);
      const binary = decToBin(num, 8);
      return {
        prompt: `Convert the signed (two's complement) binary number ${binary} to decimal:`,
        answer: String(num),
      };
    },
  },
  {
    id: 602,
    topic: "Advanced Number Systems",
    subtopic: "Two's Complement (Binary → Decimal)",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(-128, -1);
      const binary = decToBin(num & 0xff, 8);
      return {
        prompt: `Convert the signed (two's complement) binary number ${binary} to decimal:`,
        answer: String(num),
      };
    },
  },

  // --- Decimal to Two's Complement ---
  {
    id: 603,
    topic: "Advanced Number Systems",
    subtopic: "Decimal → Two's Complement",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(1, 127);
      const binary = decToBin(num, 8);
      return {
        prompt: `Convert the decimal number ${num} to an 8-bit signed (two's complement) binary number:`,
        answer: binary,
      };
    },
  },
  {
    id: 604,
    topic: "Advanced Number Systems",
    subtopic: "Decimal → Two's Complement",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(-128, -1);
      const binary = decToBin(num & 0xff, 8);
      return {
        prompt: `Convert the decimal number ${num} to an 8-bit signed (two's complement) binary number:`,
        answer: binary,
      };
    },
  },

  // --- Hex Arithmetic ---
  {
    id: 605,
    topic: "Advanced Number Systems",
    subtopic: "Hex Arithmetic",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(0x10000, 0xfffff);
      const hex = decToHex(num);
      const before = decToHex(num - 1);
      return {
        prompt: `What is the hexadecimal number BEFORE ${hex}?`,
        answer: before,
      };
    },
  },
  {
    id: 606,
    topic: "Advanced Number Systems",
    subtopic: "Hex Arithmetic",
    prompt: "",
    answer: "",
    generate: () => {
      const num = randomInt(0x10000, 0xfffff);
      const hex = decToHex(num);
      const after = decToHex(num + 1);
      return {
        prompt: `What is the hexadecimal number AFTER ${hex}?`,
        answer: after,
      };
    },
  },

  // ========== CHARACTER ENCODING ==========

  // --- ASCII Encoding ---
  {
    id: 607,
    topic: "Character Encoding",
    subtopic: "ASCII Encoding",
    prompt: "",
    answer: "",
    generate: () => {
      const words = ["Hi!", "CPU", "RAM", "GPU", "USB", "YES", "NO!"];
      const text = randomElement(words);
      const hex = Array.from(text)
        .map((c) => c.charCodeAt(0).toString(16).toUpperCase())
        .join("");
      return {
        prompt: `Encode the following text (no leading/trailing spaces) to ASCII hex sequence:\n${text}`,
        answer: hex,
      };
    },
  },
  {
    id: 608,
    topic: "Character Encoding",
    subtopic: "ASCII Encoding",
    prompt: "",
    answer: "",
    generate: () => {
      const words = ["OK", "BYE", "HEX", "BIT", "SSD"];
      const text = randomElement(words);
      const hex = Array.from(text)
        .map((c) => c.charCodeAt(0).toString(16).toUpperCase())
        .join("");
      return {
        prompt: `Encode the following text (no leading/trailing spaces) to ASCII hex sequence:\n${text}`,
        answer: hex,
      };
    },
  },

  // --- ASCII Decoding ---
  {
    id: 609,
    topic: "Character Encoding",
    subtopic: "ASCII Decoding",
    prompt: "",
    answer: "",
    generate: () => {
      const words = ["Hello", "World", "Code", "Data", "Byte"];
      const text = randomElement(words);
      const hex = Array.from(text)
        .map((c) => c.charCodeAt(0).toString(16).toUpperCase())
        .join("");
      return {
        prompt: `Decode the text from the ASCII hex sequence:\n${hex}`,
        answer: text,
      };
    },
  },
  {
    id: 610,
    topic: "Character Encoding",
    subtopic: "ASCII Decoding",
    prompt: "",
    answer: "",
    generate: () => {
      const words = ["Test", "Loop", "Disk", "Port", "Chip"];
      const text = randomElement(words);
      const hex = Array.from(text)
        .map((c) => c.charCodeAt(0).toString(16).toUpperCase())
        .join("");
      return {
        prompt: `Decode the text from the ASCII hex sequence:\n${hex}`,
        answer: text,
      };
    },
  },

  // ========== ERROR DETECTION ==========

  // --- Hamming Code Encoding ---
  {
    id: 611,
    topic: "Error Detection",
    subtopic: "Hamming Code Encoding",
    prompt: "",
    answer: "",
    generate: () => {
      const d1 = randomInt(0, 1);
      const d2 = randomInt(0, 1);
      const d3 = randomInt(0, 1);
      const d4 = randomInt(0, 1);
      const data = `${d1}${d2}${d3}${d4}`;
      const p1 = d1 ^ d2 ^ d4;
      const p2 = d1 ^ d3 ^ d4;
      const p4 = d2 ^ d3 ^ d4;
      const hamming = `${p1}${p2}${d1}${p4}${d2}${d3}${d4}`;
      return {
        prompt: `What is the Hamming(7,4) code for the data: ${data}`,
        answer: hamming,
      };
    },
  },
  {
    id: 612,
    topic: "Error Detection",
    subtopic: "Hamming Code Encoding",
    prompt: "",
    answer: "",
    generate: () => {
      const d1 = randomInt(0, 1);
      const d2 = randomInt(0, 1);
      const d3 = randomInt(0, 1);
      const d4 = randomInt(0, 1);
      const data = `${d1}${d2}${d3}${d4}`;
      const p1 = d1 ^ d2 ^ d4;
      const p2 = d1 ^ d3 ^ d4;
      const p4 = d2 ^ d3 ^ d4;
      const hamming = `${p1}${p2}${d1}${p4}${d2}${d3}${d4}`;
      return {
        prompt: `What is the Hamming(7,4) code for the data: ${data}`,
        answer: hamming,
      };
    },
  },

  // --- Hamming Code Decoding ---
  {
    id: 613,
    topic: "Error Detection",
    subtopic: "Hamming Code Decoding",
    prompt: "",
    answer: "",
    generate: () => {
      const d1 = randomInt(0, 1);
      const d2 = randomInt(0, 1);
      const d3 = randomInt(0, 1);
      const d4 = randomInt(0, 1);
      const data = `${d1}${d2}${d3}${d4}`;
      const p1 = d1 ^ d2 ^ d4;
      const p2 = d1 ^ d3 ^ d4;
      const p4 = d2 ^ d3 ^ d4;
      const hamming = `${p1}${p2}${d1}${p4}${d2}${d3}${d4}`;
      return {
        prompt: `What is the data if you receive the following Hamming(7,4) code: ${hamming}`,
        answer: data,
      };
    },
  },
  {
    id: 614,
    topic: "Error Detection",
    subtopic: "Hamming Code Decoding",
    prompt: "",
    answer: "",
    generate: () => {
      const d1 = randomInt(0, 1);
      const d2 = randomInt(0, 1);
      const d3 = randomInt(0, 1);
      const d4 = randomInt(0, 1);
      const data = `${d1}${d2}${d3}${d4}`;
      const p1 = d1 ^ d2 ^ d4;
      const p2 = d1 ^ d3 ^ d4;
      const p4 = d2 ^ d3 ^ d4;
      const hamming = `${p1}${p2}${d1}${p4}${d2}${d3}${d4}`;
      return {
        prompt: `What is the data if you receive the following Hamming(7,4) code: ${hamming}`,
        answer: data,
      };
    },
  },

  // --- Luhn Checksum ---
  {
    id: 615,
    topic: "Error Detection",
    subtopic: "Luhn Checksum",
    prompt: "",
    answer: "",
    generate: () => {
      const length = randomInt(10, 12);
      let num = "";
      for (let i = 0; i < length; i++) {
        num += randomInt(0, 9);
      }
      let sum = 0;
      let alternate = false;
      for (let i = num.length - 1; i >= 0; i--) {
        let digit = parseInt(num[i]);
        if (alternate) {
          digit *= 2;
          if (digit > 9) digit -= 9;
        }
        sum += digit;
        alternate = !alternate;
      }
      const checksum = (10 - (sum % 10)) % 10;
      return {
        prompt: `Calculate the Luhn checksum (single digit) of the number: ${num}`,
        answer: String(checksum),
      };
    },
  },

  // ========== COLOR REPRESENTATION ==========

  // --- RGB to Hex ---
  {
    id: 616,
    topic: "Color Representation",
    subtopic: "RGB to Hex",
    prompt: "",
    answer: "",
    generate: () => {
      const r = randomInt(0, 100);
      const g = randomInt(0, 100);
      const b = randomInt(0, 100);
      const rHex = Math.round((r * 255) / 100).toString(16).toUpperCase().padStart(2, "0");
      const gHex = Math.round((g * 255) / 100).toString(16).toUpperCase().padStart(2, "0");
      const bHex = Math.round((b * 255) / 100).toString(16).toUpperCase().padStart(2, "0");
      return {
        prompt: `If the red, green and blue components of a color are ${r}%, ${g}% and ${b}%; what is the 6-hex string representing the color?`,
        answer: rHex + gHex + bHex,
      };
    },
  },

  // --- Hex to RGB ---
  {
    id: 617,
    topic: "Color Representation",
    subtopic: "Hex to RGB",
    prompt: "",
    answer: "",
    generate: () => {
      const r = randomInt(0, 255);
      const g = randomInt(0, 255);
      const b = randomInt(0, 255);
      const hex =
        r.toString(16).padStart(2, "0").toUpperCase() +
        g.toString(16).padStart(2, "0").toUpperCase() +
        b.toString(16).padStart(2, "0").toUpperCase();
      const rPercent = Math.round((r * 100) / 255);
      const gPercent = Math.round((g * 100) / 255);
      const bPercent = Math.round((b * 100) / 255);
      return {
        prompt: `What are the percentages of red, green and blue components of the color ${hex} (in HEX)? Round to integers and separate with spaces.`,
        answer: `${rPercent} ${gPercent} ${bPercent}`,
      };
    },
  },

  // ========== INFORMATION THEORY ==========

  // --- Entropy ---
  {
    id: 618,
    topic: "Information Theory",
    subtopic: "Entropy",
    prompt: "",
    answer: "",
    generate: () => {
      const powers = [4, 5, 6, 7, 8, 9, 10];
      const power = randomElement(powers);
      const outcomes = 1 << power;
      return {
        prompt: `What is the entropy (in bits) of a system with ${outcomes} equally likely outcomes?`,
        answer: String(power),
      };
    },
  },

  // --- Minimum Yes/No Questions ---
  {
    id: 619,
    topic: "Information Theory",
    subtopic: "Minimum Yes/No Questions",
    prompt: "",
    answer: "",
    generate: () => {
      const possibilities = randomElement([5, 9, 17, 33, 65, 100, 129, 256, 500, 1000]);
      const questions = Math.ceil(Math.log2(possibilities));
      return {
        prompt: `What is the minimum number of yes/no questions required to identify one outcome among ${possibilities} possibilities?`,
        answer: String(questions),
      };
    },
  },

  // ========== IEEE FLOATING POINT ==========

  {
    id: 620,
    topic: "IEEE Floating Point",
    subtopic: "Special Values",
    prompt:
      "In IEEE-754 single precision, what value is represented when exponent is all 1s and fraction is all 0s with sign bit 0?",
    answer: "+infinity",
  },
  {
    id: 621,
    topic: "IEEE Floating Point",
    subtopic: "Special Values",
    prompt:
      "In IEEE-754 single precision, what value is represented when exponent is all 1s and fraction is all 0s with sign bit 1?",
    answer: "-infinity",
  },
  {
    id: 622,
    topic: "IEEE Floating Point",
    subtopic: "Special Values",
    prompt:
      "In IEEE-754 single precision, what value is represented when exponent is all 1s and fraction is NOT all 0s?",
    answer: "nan",
  },
  {
    id: 623,
    topic: "IEEE Floating Point",
    subtopic: "Special Values",
    prompt:
      "In IEEE-754 single precision, what kind of number is represented when exponent is all 0s and fraction is NOT all 0s?",
    answer: "subnormal",
  },
  {
    id: 624,
    topic: "IEEE Floating Point",
    subtopic: "Special Values",
    prompt:
      "In IEEE-754 single precision, what value is represented when exponent is all 0s and fraction is all 0s with sign bit 0?",
    answer: "0",
  },
];

// ============================================================================
// MODULE 3: MIPS Instructions & Floating Point
// ============================================================================

// Helper: build memory/register snapshot string (used by BH-6 questions)
function makeSnapshot(
  memBase: number,
  memVals: number[],
  regNames: string[],
  regVals: number[]
): string {
  const memAddrs = Array.from({ length: 5 }, (_, i) => memBase + i * 4);
  return (
    `Numbers are in decimals unless EXPLICITLY stated otherwise.\n` +
    `Given the following snapshot of the contents of the memory cells:\n` +
    `   adr: .... ${memAddrs.join(" ")} ....\n` +
    `   mem: .... ${memVals.join(" ")} ....\n` +
    `Given the following snapshot of the contents of the registers:\n` +
    `   adr: ....  ${regNames.join("  ")} ....\n` +
    `   reg: .... ${regVals.map((v) => String(v).padStart(4, "0")).join(" ")} ....\n`
  );
}

const answerNote = `What will be the effect of executing the instruction:     `;

const formatNote =
  `\nPossible forms of answer:\n` +
  `    1232 567           <==== The memory cell at 1232 will have value 567\n` +
  `    $12 4567           <==== The register $12 will have value 4567\n` +
  `    goto label/next    <==== Will fetch instruction at location: label/next\n` +
  `Your answer MUST have EXACTLY one space in the middle; NO leading zeros in numbers!`;

// Helper: random register bank (5 consecutive from $11–$20)
function randomRegBank(): { names: string[]; vals: number[] } {
  const start = randomInt(11, 16);
  const names = Array.from({ length: 5 }, (_, i) => `$${start + i}`);
  const vals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
  return { names, vals };
}

// Register name table (standard MIPS ABI) — used by machine instruction decoding
const MIPS_REGS: Record<number, string> = {
  0: "$zero", 1: "$at",
  2: "$v0",   3: "$v1",
  4: "$a0",   5: "$a1",  6: "$a2",  7: "$a3",
  8: "$t0",   9: "$t1", 10: "$t2", 11: "$t3",
  12: "$t4", 13: "$t5", 14: "$t6", 15: "$t7",
  16: "$s0", 17: "$s1", 18: "$s2", 19: "$s3",
  20: "$s4", 21: "$s5", 22: "$s6", 23: "$s7",
  24: "$t8", 25: "$t9",
  26: "$k0", 27: "$k1",
  28: "$gp", 29: "$sp", 30: "$fp", 31: "$ra",
};

// R-type funct codes
const R_FUNCTS: Record<number, string> = {
  0x20: "add",
  0x22: "sub",
  0x24: "and",
  0x25: "or",
  0x26: "xor",
  0x27: "nor",
  0x2a: "slt",
  0x00: "sll",
  0x02: "srl",
  0x03: "sra",
};

export const archModule3Questions: Question[] = [
  // ========== DECIMAL TO BINARY FRACTIONS ==========

  {
    id: 301,
    topic: "Floating Point",
    subtopic: "Decimal to Binary - 7 bits",
    prompt: "",
    answer: "",
    generate: () => {
      const decimal = randomInt(100, 900) / 1000;
      const binary = decimalFractionToBinary(decimal, 7);
      return {
        prompt: `Convert the decimal fraction to binary, include exactly 7 bits such as 0.0101010 in your answer:\n${decimal.toFixed(3)}`,
        answer: binary,
      };
    },
  },
  {
    id: 302,
    topic: "Floating Point",
    subtopic: "Decimal to Binary - 8 bits",
    prompt: "",
    answer: "",
    generate: () => {
      const decimal = randomInt(100, 900) / 1000;
      const binary = decimalFractionToBinary(decimal, 8);
      return {
        prompt: `Convert the decimal fraction ${decimal.toFixed(3)} to binary, include exactly 8 bits after the 'decimal' point in your answer. Example answer: 0.10110110`,
        answer: binary,
      };
    },
  },

  // ========== MANTISSA EXTRACTION ==========

  {
    id: 303,
    topic: "Floating Point",
    subtopic: "10-bit Mantissa Extraction",
    prompt: "",
    answer: "",
    generate: () => {
      const intPart = randomInt(2, 7);
      const intBits = intPart.toString(2);
      let fracBits = "";
      for (let i = 0; i < 10; i++) fracBits += randomInt(0, 1);
      const fullBinary = `${intBits}.${fracBits}`;
      const normalized = intBits + fracBits;
      const mantissa = normalized.substring(1, 11);
      return {
        prompt: `Find the 10-bit mantissa of the binary decimal ${fullBinary}. The answer is a string of 10 bits (0 and 1 only, no other char).`,
        answer: mantissa,
      };
    },
  },
  {
    id: 304,
    topic: "Floating Point",
    subtopic: "10-bit Mantissa Extraction",
    prompt: "",
    answer: "",
    generate: () => {
      const leadingZeros = randomInt(1, 3);
      let fracBits = "0.";
      for (let i = 0; i < leadingZeros; i++) fracBits += "0";
      for (let i = 0; i < 12; i++) fracBits += randomInt(0, 1);
      const allBits = fracBits.replace("0.", "");
      const firstOne = allBits.indexOf("1");
      const mantissa = allBits.substring(firstOne + 1, firstOne + 11).padEnd(10, "0");
      return {
        prompt: `Find the 10-bit mantissa of the binary decimal ${fracBits}. The answer is a string of 10 bits (0 and 1 only, no other char).`,
        answer: mantissa,
      };
    },
  },

  // ========== DECIMAL TO UNSIGNED BINARY ==========

  {
    id: 305,
    topic: "Binary Conversion",
    subtopic: "Decimal to Unsigned Binary",
    prompt: "",
    answer: "",
    generate: () => {
      const decimal = randomInt(500, 1000);
      const binary = decimal.toString(2);
      return {
        prompt: `Convert the decimal ${decimal} to unsigned binary, using as many bits as exactly required. The answer is a string of 0 and 1 only, no other char. The first bit is a 1.`,
        answer: binary,
      };
    },
  },

  // ========== DECIMAL TO 12-BIT BINARY ==========

  {
    id: 306,
    topic: "Binary Conversion",
    subtopic: "Decimal to 12-bit Binary",
    prompt: "",
    answer: "",
    generate: () => {
      const intPart = randomInt(50, 250);
      const fracPart = randomInt(100, 900) / 1000;
      const decimal = intPart + fracPart;
      const intBinary = intPart.toString(2);
      const fracBinary = decimalFractionToBinary(fracPart, 12 - intBinary.length).replace("0.", "");
      const fullBinary = `${intBinary}.${fracBinary}`;
      return {
        prompt: `Convert the decimal ${decimal.toFixed(3)} to 12-bit binary. Example answer: 11010.1011010 (12 count of 0 and 1, and a 'decimal' point).`,
        answer: fullBinary,
      };
    },
  },

  // ========== BIASED EXPONENT ==========

  {
    id: 307,
    topic: "Floating Point",
    subtopic: "8-bit Biased Exponent",
    prompt: "",
    answer: "",
    generate: () => {
      const exponentValue = randomInt(1, 7);
      let binary = "";
      for (let i = 0; i < exponentValue; i++) binary += randomInt(0, 1);
      binary = "1" + binary.padEnd(exponentValue, "0");
      const fracBits = Array(4).fill(0).map(() => randomInt(0, 1)).join("");
      const fullBinary = `${binary}.${fracBits}`;
      const biased = exponentValue + 127;
      const biasedBinary = biased.toString(2).padStart(8, "0");
      return {
        prompt: `Find the 8-bit biased exponent (hint: bias=127) of ${fullBinary} (which is already binary). Example answer: 10011001 (8 count of 0 and 1 only, no other char)`,
        answer: biasedBinary,
      };
    },
  },

  // ========== BITWISE OPERATIONS ==========

  {
    id: 308,
    topic: "MIPS Instructions",
    subtopic: "Bitwise NAND",
    prompt: "",
    answer: "",
    generate: () => {
      const regs = shuffle(["$10", "$11", "$12", "$13", "$14", "$15", "$16", "$17"]);
      const [rd, rs, rt] = regs;
      const val1 = randomHex(4);
      const val2 = randomHex(4);
      const result = ~(hexToInt(val1) & hexToInt(val2));
      return {
        prompt: `The value of ${rs} is ${val1}. The value of ${rt} is ${val2}. The value of ${rd} is ${randomHex(4)}. The MIPS instruction is:\n          nand ${rd}, ${rs}, ${rt}\nThe new value of affected register is (8 upper-case-hex-digits without spaces):`,
        answer: intToHex(result, 4),
      };
    },
  },
  {
    id: 309,
    topic: "MIPS Instructions",
    subtopic: "Bitwise AND",
    prompt: "",
    answer: "",
    generate: () => {
      const regs = shuffle(["$10", "$11", "$12", "$13", "$14", "$15", "$16", "$17"]);
      const [rd, rs, rt] = regs;
      const val1 = randomHex(4);
      const val2 = randomHex(4);
      const result = hexToInt(val1) & hexToInt(val2);
      return {
        prompt: `The value of ${rs} is ${val1}. The value of ${rt} is ${val2}. The value of ${rd} is ${randomHex(4)}. The MIPS instruction is:\n          and ${rd}, ${rs}, ${rt}\nThe new value of affected register is (8 upper-case-hex-digits without spaces):`,
        answer: intToHex(result, 4),
      };
    },
  },
  {
    id: 310,
    topic: "MIPS Instructions",
    subtopic: "Bitwise NOR",
    prompt: "",
    answer: "",
    generate: () => {
      const regs = shuffle(["$10", "$11", "$12", "$13", "$14", "$15", "$16", "$17"]);
      const [rd, rs, rt] = regs;
      const val1 = randomHex(4);
      const val2 = randomHex(4);
      const result = ~(hexToInt(val1) | hexToInt(val2));
      return {
        prompt: `The value of ${rs} is ${val1}. The value of ${rt} is ${val2}. The value of ${rd} is ${randomHex(4)}. The MIPS instruction is:\n          nor ${rd}, ${rs}, ${rt}\nThe new value of affected register is (8 upper-case-hex-digits without spaces):`,
        answer: intToHex(result, 4),
      };
    },
  },
  {
    id: 311,
    topic: "MIPS Instructions",
    subtopic: "Bitwise NOT",
    prompt: "",
    answer: "",
    generate: () => {
      const regs = shuffle(["$10", "$11", "$12", "$13", "$14", "$15", "$16", "$17"]);
      const [rd, rs] = regs;
      const val = randomHex(4);
      const result = ~hexToInt(val);
      return {
        prompt: `The value of ${rs} is ${val}. The value of ${randomHex(4)} is ${randomHex(4)}. The value of ${rd} is ${randomHex(4)}. The MIPS instruction is:\n          not ${rd}, ${rs}\nThe new value of affected register is (8 upper-case-hex-digits without spaces):`,
        answer: intToHex(result, 4),
      };
    },
  },
  {
    id: 312,
    topic: "MIPS Instructions",
    subtopic: "Bitwise XOR",
    prompt: "",
    answer: "",
    generate: () => {
      const regs = shuffle(["$10", "$11", "$12", "$13", "$14", "$15", "$16", "$17"]);
      const [rd, rs, rt] = regs;
      const val1 = randomHex(4);
      const val2 = randomHex(4);
      const result = hexToInt(val1) ^ hexToInt(val2);
      return {
        prompt: `The value of ${rs} is ${val1}. The value of ${rt} is ${val2}. The value of ${rd} is ${randomHex(4)}. The MIPS instruction is:\n          xor ${rd}, ${rs}, ${rt}\nThe new value of affected register is (8 upper-case-hex-digits without spaces):`,
        answer: intToHex(result, 4),
      };
    },
  },
  {
    id: 313,
    topic: "MIPS Instructions",
    subtopic: "Bitwise OR",
    prompt: "",
    answer: "",
    generate: () => {
      const regs = shuffle(["$10", "$11", "$12", "$13", "$14", "$15", "$16", "$17"]);
      const [rd, rs, rt] = regs;
      const val1 = randomHex(4);
      const val2 = randomHex(4);
      const result = hexToInt(val1) | hexToInt(val2);
      return {
        prompt: `The value of ${rs} is ${val1}. The value of ${rt} is ${val2}. The value of ${rd} is ${randomHex(4)}. The MIPS instruction is:\n          or ${rd}, ${rs}, ${rt}\nThe new value of affected register is (8 upper-case-hex-digits without spaces):`,
        answer: intToHex(result, 4),
      };
    },
  },

  // ========== SHIFT OPERATIONS ==========

  {
    id: 315,
    topic: "MIPS Instructions",
    subtopic: "Shift Left Logical",
    prompt: "",
    answer: "",
    generate: () => {
      const regs = shuffle(["$10", "$11", "$12", "$13", "$14", "$15", "$16", "$17"]);
      const [rd, rt] = regs;
      const val = randomHex(4);
      const shamt = randomInt(3, 12);
      const result = (hexToInt(val) << shamt) >>> 0;
      return {
        prompt: `The value of ${rt} is ${val}. The value of ${rd} is ${randomHex(4)}. The MIPS instruction is:\n          sll ${rd}, ${rt}, ${shamt}\nThe new value of affected register is (8 upper-case-hex-digits without spaces):`,
        answer: intToHex(result, 4),
      };
    },
  },
  {
    id: 316,
    topic: "MIPS Instructions",
    subtopic: "Shift Right Logical",
    prompt: "",
    answer: "",
    generate: () => {
      const regs = shuffle(["$10", "$11", "$12", "$13", "$14", "$15", "$16", "$17"]);
      const [rd, rt] = regs;
      const val = randomHex(4);
      const shamt = randomInt(3, 9);
      const result = hexToInt(val) >>> shamt;
      return {
        prompt: `The value of ${rt} is ${val}. The value of ${rd} is ${randomHex(4)}. The MIPS instruction is:\n          srl ${rd}, ${rt}, ${shamt}\nThe new value of affected register is (8 upper-case-hex-digits without spaces):`,
        answer: intToHex(result, 4),
      };
    },
  },
  {
    id: 317,
    topic: "MIPS Instructions",
    subtopic: "Shift Right Arithmetic",
    prompt: "",
    answer: "",
    generate: () => {
      const regs = shuffle(["$10", "$11", "$12", "$13", "$14", "$15", "$16", "$17"]);
      const [rd, rt] = regs;
      const val = randomHex(4);
      const shamt = randomInt(3, 8);
      const result = hexToInt(val) >> shamt;
      return {
        prompt: `The value of ${rt} is ${val}. The value of ${rd} is ${randomHex(4)}. The MIPS instruction is:\n          sra ${rd}, ${rt}, ${shamt}\nThe new value of affected register is (8 upper-case-hex-digits without spaces):`,
        answer: intToHex(result, 4),
      };
    },
  },

  // ========== DIVISION & MULTIPLICATION (HI/LO) ==========

  {
    id: 318,
    topic: "MIPS Instructions",
    subtopic: "Division HI/LO",
    prompt: "",
    answer: "",
    generate: () => {
      const bits = randomInt(6, 8);
      const divisor = randomInt(10, 20);
      const quotient = randomInt(3, 10);
      const dividend = divisor * quotient + randomInt(0, divisor - 1);
      const remainder = dividend % divisor;
      const quot = Math.floor(dividend / divisor);
      return {
        prompt: `The division of two positive ${bits}-bit integers on a ${bits}-bit CPU produces two ${bits}-bit integers, which are stored in the two special-purpose ${bits}-bit registers: HI and LO. Find the values (in decimals) of HI and LO, based on your experience with similar operation on MIPS:\n      [HI,LO]     <----     ${dividend} / ${divisor}\n\nGive your answer (in the order of HI,LO) as two decimal integers separated by a comma (without any space).\n\nExample:       17,4`,
        answer: `${remainder},${quot}`,
      };
    },
  },
  {
    id: 319,
    topic: "MIPS Instructions",
    subtopic: "Multiplication HI/LO",
    prompt: "",
    answer: "",
    generate: () => {
      const bits = randomInt(6, 8);
      const maxVal = Math.pow(2, bits) - 1;
      const num1 = randomInt(10, Math.min(50, maxVal));
      const num2 = randomInt(10, Math.min(50, maxVal));
      const product = num1 * num2;
      const lo = product & maxVal;
      const hi = product >> bits;
      return {
        prompt: `The multiplication of two positive ${bits}-bit integers on a ${bits}-bit CPU produces two ${bits}-bit integers, which are stored in the two special-purpose ${bits}-bit registers: HI and LO. Find the values (in decimals) of HI and LO, based on your experience with similar operation on MIPS:\n      [HI,LO]     <----     ${num1} * ${num2}\n\nGive your answer (in the order of HI,LO) as two decimal integers separated by a comma (without any space).\n\nExample:       17,4`,
        answer: `${hi},${lo}`,
      };
    },
  },
  {
    id: 320,
    topic: "Arithmetic Operations",
    subtopic: "Simple Division",
    prompt: "",
    answer: "",
    generate: () => {
      const divisor = randomInt(8, 15);
      const quotient = randomInt(8, 15);
      const remainder = randomInt(0, divisor - 1);
      const dividend = divisor * quotient + remainder;
      return {
        prompt: `What are the quotient and remainder when you perform the operation:    ${dividend} / ${divisor}?\nGive your answer (in the order of Quotient,Remainder) as two decimal integers separated by a comma (without any space).\n\nExample:       17,4`,
        answer: `${quotient},${remainder}`,
      };
    },
  },

  // ========== MIPS EXECUTION SIMULATION ==========

  // --- BEQ (original) ---
  {
    id: 321,
    topic: "MIPS Execution",
    subtopic: "Branch Instructions",
    prompt: "",
    answer: "",
    generate: () => {
      const regs = shuffle(["$12", "$13", "$14", "$15", "$16", "$17", "$18", "$19", "$20"]);
      const [rs, rt] = regs;
      const equal = randomInt(0, 1) === 1;
      const val1 = randomInt(1000, 9000);
      const val2 = equal ? val1 : randomInt(1000, 9000);
      const label = `br${randomInt(50, 99)}`;
      const answer = equal ? `goto ${label}` : "goto next";
      const memBase = randomInt(3000, 8000);
      const memAddrs = Array.from({ length: 5 }, (_, i) => memBase + i * 4);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const regBase = 12;
      const regAddrs = Array.from({ length: 5 }, (_, i) => `$${regBase + i}`);
      const regVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const rsIdx = parseInt(rs.substring(1)) - regBase;
      const rtIdx = parseInt(rt.substring(1)) - regBase;
      if (rsIdx >= 0 && rsIdx < regVals.length) regVals[rsIdx] = val1;
      if (rtIdx >= 0 && rtIdx < regVals.length) regVals[rtIdx] = val2;
      return {
        prompt: `Numbers are in decimals unless EXPLICITLY stated otherwise.\nGiven the following snapshot of the contents of the memory cells:\n   adr: .... ${memAddrs.join(" ")} ....\n   mem: .... ${memVals.join(" ")} ....\nGiven the following snapshot of the contents of the registers:\n   adr: ....  ${regAddrs.join("  ")} ....\n   reg: .... ${regVals.map((v) => String(v).padStart(4, "0")).join(" ")} ....\nWhat will be the effect of executing the instruction:     beq ${rs}, ${rt}, ${label}\nPossible forms of answer:\n    1232 567           <==== The memory cell at 1232 will have value 567\n    $12 4567           <==== The register $12 will have value 4567\n    goto label/next    <==== Will fetch instruction at location: label/next\nYour answer MUST have EXACTLY one space in the middle; NO leading zeros in numbers!`,
        answer,
      };
    },
  },

  // ========== BH-6: SINGLE-INSTRUCTION EXECUTION (NEW) ==========

  // --- BGE ---
  {
    id: 400,
    topic: "MIPS Execution",
    subtopic: "Branch Instructions",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      const memBase = randomInt(3000, 8000);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const [rs, rt] = shuffle(names).slice(0, 2);
      const rsIdx = names.indexOf(rs);
      const rtIdx = names.indexOf(rt);
      const branch = randomInt(0, 1) === 1;
      if (branch) {
        vals[rsIdx] = randomInt(vals[rtIdx], vals[rtIdx] + 3000);
      } else {
        vals[rsIdx] = randomInt(1000, vals[rtIdx] - 1);
      }
      const label = `br${randomInt(50, 99)}`;
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `bge ${rs}, ${rt}, ${label}` + formatNote,
        answer: branch ? `goto ${label}` : "goto next",
      };
    },
  },

  // --- BGT ---
  {
    id: 401,
    topic: "MIPS Execution",
    subtopic: "Branch Instructions",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      const memBase = randomInt(3000, 8000);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const [rs, rt] = shuffle(names).slice(0, 2);
      const rsIdx = names.indexOf(rs);
      const rtIdx = names.indexOf(rt);
      const branch = randomInt(0, 1) === 1;
      if (branch) {
        vals[rsIdx] = vals[rtIdx] + randomInt(1, 3000);
      } else {
        vals[rsIdx] = randomInt(1000, vals[rtIdx]);
      }
      const label = `br${randomInt(50, 99)}`;
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `bgt ${rs}, ${rt}, ${label}` + formatNote,
        answer: branch ? `goto ${label}` : "goto next",
      };
    },
  },

  // --- BLE ---
  {
    id: 402,
    topic: "MIPS Execution",
    subtopic: "Branch Instructions",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      const memBase = randomInt(3000, 8000);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const [rs, rt] = shuffle(names).slice(0, 2);
      const rsIdx = names.indexOf(rs);
      const rtIdx = names.indexOf(rt);
      const branch = randomInt(0, 1) === 1;
      if (branch) {
        vals[rsIdx] = randomInt(1000, vals[rtIdx]);
      } else {
        vals[rsIdx] = vals[rtIdx] + randomInt(1, 3000);
      }
      const label = `br${randomInt(50, 99)}`;
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `ble ${rs}, ${rt}, ${label}` + formatNote,
        answer: branch ? `goto ${label}` : "goto next",
      };
    },
  },

  // --- BLT ---
  {
    id: 403,
    topic: "MIPS Execution",
    subtopic: "Branch Instructions",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      const memBase = randomInt(3000, 8000);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const [rs, rt] = shuffle(names).slice(0, 2);
      const rsIdx = names.indexOf(rs);
      const rtIdx = names.indexOf(rt);
      const branch = randomInt(0, 1) === 1;
      if (branch) {
        vals[rsIdx] = randomInt(1000, vals[rtIdx] - 1 > 1000 ? vals[rtIdx] - 1 : 1001);
      } else {
        vals[rsIdx] = vals[rtIdx] + randomInt(0, 3000);
      }
      const label = `br${randomInt(50, 99)}`;
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `blt ${rs}, ${rt}, ${label}` + formatNote,
        answer: branch ? `goto ${label}` : "goto next",
      };
    },
  },

  // --- BNE ---
  {
    id: 404,
    topic: "MIPS Execution",
    subtopic: "Branch Instructions",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      const memBase = randomInt(3000, 8000);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const [rs, rt] = shuffle(names).slice(0, 2);
      const rsIdx = names.indexOf(rs);
      const rtIdx = names.indexOf(rt);
      const notEqual = randomInt(0, 1) === 1;
      if (!notEqual) vals[rsIdx] = vals[rtIdx];
      const label = `br${randomInt(50, 99)}`;
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `bne ${rs}, ${rt}, ${label}` + formatNote,
        answer: notEqual ? `goto ${label}` : "goto next",
      };
    },
  },

  // --- ADDI ---
  {
    id: 405,
    topic: "MIPS Execution",
    subtopic: "Arithmetic Instructions",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      const memBase = randomInt(3000, 8000);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const [rd, rs] = shuffle(names).slice(0, 2);
      const rsIdx = names.indexOf(rs);
      const imm = randomInt(-500, 500);
      const result = vals[rsIdx] + imm;
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `addi ${rd}, ${rs}, ${imm}` + formatNote,
        answer: `${rd} ${result}`,
      };
    },
  },

  // --- ADD ---
  {
    id: 406,
    topic: "MIPS Execution",
    subtopic: "Arithmetic Instructions",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      const memBase = randomInt(3000, 8000);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const [rd, rs, rt] = shuffle(names).slice(0, 3);
      const result = vals[names.indexOf(rs)] + vals[names.indexOf(rt)];
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `add ${rd}, ${rs}, ${rt}` + formatNote,
        answer: `${rd} ${result}`,
      };
    },
  },

  // --- SUB ---
  {
    id: 407,
    topic: "MIPS Execution",
    subtopic: "Arithmetic Instructions",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      const memBase = randomInt(3000, 8000);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const [rd, rs, rt] = shuffle(names).slice(0, 3);
      const result = vals[names.indexOf(rs)] - vals[names.indexOf(rt)];
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `sub ${rd}, ${rs}, ${rt}` + formatNote,
        answer: `${rd} ${result}`,
      };
    },
  },

  // --- MUL ---
  {
    id: 408,
    topic: "MIPS Execution",
    subtopic: "Arithmetic Instructions",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      vals.forEach((_, i) => { vals[i] = randomInt(10, 99); });
      const memBase = randomInt(3000, 8000);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const [rd, rs, rt] = shuffle(names).slice(0, 3);
      const result = vals[names.indexOf(rs)] * vals[names.indexOf(rt)];
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `mul ${rd}, ${rs}, ${rt}` + formatNote,
        answer: `${rd} ${result}`,
      };
    },
  },

  // --- SW ---
  {
    id: 409,
    topic: "MIPS Execution",
    subtopic: "Store Instruction",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      const memBase = randomInt(3000, 8000);
      const memAddrs = Array.from({ length: 5 }, (_, i) => memBase + i * 4);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const addrIdx = randomInt(0, 4);
      const targetAddr = memAddrs[addrIdx];
      const [rt, base] = shuffle(names).slice(0, 2);
      vals[names.indexOf(base)] = targetAddr;
      const storedVal = vals[names.indexOf(rt)];
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `sw ${rt}, 0(${base})` + formatNote,
        answer: `${targetAddr} ${storedVal}`,
      };
    },
  },

  // --- LW ---
  {
    id: 410,
    topic: "MIPS Execution",
    subtopic: "Load Instruction",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      const memBase = randomInt(3000, 8000);
      const memAddrs = Array.from({ length: 5 }, (_, i) => memBase + i * 4);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const addrIdx = randomInt(0, 4);
      const targetAddr = memAddrs[addrIdx];
      const [rt, base] = shuffle(names).slice(0, 2);
      vals[names.indexOf(base)] = targetAddr;
      const loadedVal = memVals[addrIdx];
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `lw ${rt}, 0(${base})` + formatNote,
        answer: `${rt} ${loadedVal}`,
      };
    },
  },

  // --- J ---
  {
    id: 411,
    topic: "MIPS Execution",
    subtopic: "Jump Instruction",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      const memBase = randomInt(3000, 8000);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const label = `br${randomInt(50, 99)}`;
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `j ${label}` + formatNote,
        answer: `goto ${label}`,
      };
    },
  },

  // --- SLT ---
  {
    id: 412,
    topic: "MIPS Execution",
    subtopic: "Set Less Than",
    prompt: "",
    answer: "",
    generate: () => {
      const { names, vals } = randomRegBank();
      const memBase = randomInt(3000, 8000);
      const memVals = Array.from({ length: 5 }, () => randomInt(1000, 9000));
      const [rd, rs, rt] = shuffle(names).slice(0, 3);
      const result = vals[names.indexOf(rs)] < vals[names.indexOf(rt)] ? 1 : 0;
      return {
        prompt: makeSnapshot(memBase, memVals, names, vals) + answerNote + `slt ${rd}, ${rs}, ${rt}` + formatNote,
        answer: `${rd} ${result}`,
      };
    },
  },

  // ========== BH-5: MACHINE INSTRUCTION DECODING (NEW) ==========

  {
    id: 413,
    topic: "MIPS Instructions",
    subtopic: "Machine Instruction Decoding",
    prompt: "",
    answer: "",
    generate: () => {
      const funct = randomElement(Object.keys(R_FUNCTS).map(Number));
      const mnemonic = R_FUNCTS[funct];
      const isShift = funct === 0x00 || funct === 0x02 || funct === 0x03;
      const regPool = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
      const rd = randomElement(regPool);
      const rs = isShift ? 0 : randomElement(regPool);
      const rt = randomElement(regPool);
      const shamt = isShift ? randomInt(1, 15) : 0;
      const word = (0 << 26) | (rs << 21) | (rt << 16) | (rd << 11) | (shamt << 6) | funct;
      const hex = word.toString(16).toUpperCase().padStart(8, "0");
      const assembly = isShift
        ? `${mnemonic} ${MIPS_REGS[rd]}, ${MIPS_REGS[rt]}, ${shamt}`
        : `${mnemonic} ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}`;
      return {
        prompt: `Decode the MIPS machine instruction ${hex} into assembly.\nAnswer format examples: "add $s2, $t5, $v1"  or  "sll $v0, $t2, 5"`,
        answer: assembly,
      };
    },
  },
  {
    id: 414,
    topic: "MIPS Instructions",
    subtopic: "Machine Instruction Decoding",
    prompt: "",
    answer: "",
    generate: () => {
      const funct = randomElement(Object.keys(R_FUNCTS).map(Number));
      const mnemonic = R_FUNCTS[funct];
      const isShift = funct === 0x00 || funct === 0x02 || funct === 0x03;
      const regPool = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
      const rd = randomElement(regPool);
      const rs = isShift ? 0 : randomElement(regPool);
      const rt = randomElement(regPool);
      const shamt = isShift ? randomInt(1, 15) : 0;
      const word = (0 << 26) | (rs << 21) | (rt << 16) | (rd << 11) | (shamt << 6) | funct;
      const hex = word.toString(16).toUpperCase().padStart(8, "0");
      const assembly = isShift
        ? `${mnemonic} ${MIPS_REGS[rd]}, ${MIPS_REGS[rt]}, ${shamt}`
        : `${mnemonic} ${MIPS_REGS[rd]}, ${MIPS_REGS[rs]}, ${MIPS_REGS[rt]}`;
      return {
        prompt: `Decode the MIPS machine instruction ${hex} into assembly.\nAnswer format examples: "add $s2, $t5, $v1"  or  "sll $v0, $t2, 5"`,
        answer: assembly,
      };
    },
  },
];

// ============================================================================
// MODULE 4: MIPS Program Simulation (BH 8–12)
// ============================================================================

export const archModule4Questions: Question[] = [

  // ========== addi / add / beq / sw / j ==========
  {
    id: 800,
    topic: "MIPS Program Simulation",
    subtopic: "addi / add / beq / sw / j",
    prompt: "",
    answer: "",
    generate: () => {
      const memBase = randomInt(1000, 5000) * 4;
      const valB = randomInt(10, 80);
      const valC = randomInt(10, 150);
      const mem0 = randomInt(100, 999);
      const mem4 = randomInt(100, 999);
      const mem8 = randomInt(100, 999);

      let regA = memBase;
      let regB = valB;
      let regC = valC;
      let memP = mem0;
      let memQ = mem4;
      const memR = mem8;
      let steps = 3; // addi x3

      regB = regB + regB; steps++; // add
      steps++; // beq
      if (regC === regB) {
        memQ = regB; steps++; // sw J
        regA = regA + regA; steps++; // add G
      } else {
        memP = regC; steps++; // sw
        steps++; // j G
        regA = regA + regA; steps++; // add G
      }

      const initA = randomInt(10, 99);
      const initB = randomInt(10, 99);
      const initC = randomInt(10, 99);

      return {
        prompt:
          `Execute the following MIPS program and fill in the result table.\n\n` +
          `1    addi $21, $zero, ${memBase}\n` +
          `2    addi $13, $zero, ${valB}\n` +
          `3    addi $18, $zero, ${valC}\n` +
          `4    add $13, $13, $13\n` +
          `5    beq $18, $13, J\n` +
          `6    sw $18, 0($21)\n` +
          `7    j G\n` +
          `8 J: sw $13, 4($21)\n` +
          `9 G: add $21, $21, $21\n\n` +
          `Initial: $21=${initA}, $13=${initB}, $18=${initC}, ` +
          `mem[${memBase}]=${mem0}, mem[${memBase+4}]=${mem4}, mem[${memBase+8}]=${mem8}\n\n` +
          `Give answers as: stepCnt | regA($21) | regB($13) | regC($18) | memP(${memBase}) | memQ(${memBase+4}) | memR(${memBase+8})`,
        answer:
          `stepCnt: ${steps} | regA($21): ${regA} | regB($13): ${regB} | regC($18): ${regC} | memP(${memBase}): ${memP} | memQ(${memBase+4}): ${memQ} | memR(${memBase+8}): ${memR}`,
      };
    },
  },

  // ========== lw / slt / beq / mul / sw ==========
  {
    id: 801,
    topic: "MIPS Program Simulation",
    subtopic: "lw / slt / beq / mul / sw",
    prompt: "",
    answer: "",
    generate: () => {
      const base = randomInt(1000, 3000) * 4;
      const memA = randomInt(5, 30);
      const memB = randomInt(5, 30);
      const mem2 = randomInt(10, 99);

      let regA = memA;
      let regB = memB;
      let regC: number;
      let steps = 2; // lw lw

      const sltVal = regA < regB ? 1 : 0;
      regC = sltVal;
      steps++; // slt
      steps++; // beq

      if (sltVal === 0) {
        regC = regA; steps++; // J: add C = A
      } else {
        regC = regB; steps++; // add C = B
        steps++; // j C
      }

      regC = regC * regC; steps++; // mul
      steps++; // sw
      const memR = regC;

      return {
        prompt:
          `Execute the following MIPS program and fill in the result table.\n\n` +
          `1    lw $9, 0($11)\n` +
          `2    lw $14, 4($11)\n` +
          `3    slt $19, $9, $14\n` +
          `4    beq $19, $zero, J\n` +
          `5    add $19, $zero, $14\n` +
          `6    j C\n` +
          `7 J: add $19, $zero, $9\n` +
          `8 C: mul $19, $19, $19\n` +
          `9    sw $19, 8($11)\n\n` +
          `Initial: $9=${randomInt(100,9999)}, $14=${randomInt(100,9999)}, $19=${randomInt(100,9999)}, $11=${base}, ` +
          `mem[${base}]=${memA}, mem[${base+4}]=${memB}, mem[${base+8}]=${mem2}\n\n` +
          `Give answers as: stepCnt | regA($9) | regB($14) | regC($19) | regD($11) | memP(${base}) | memQ(${base+4}) | memR(${base+8})`,
        answer:
          `stepCnt: ${steps} | regA($9): ${regA} | regB($14): ${regB} | regC($19): ${regC} | regD($11): ${base} | memP(${base}): ${memA} | memQ(${base+4}): ${memB} | memR(${base+8}): ${memR}`,
      };
    },
  },

  // ========== Loops (ble / bne) ==========
  {
    id: 802,
    topic: "MIPS Program Simulation",
    subtopic: "Loops (ble / bne)",
    prompt: "",
    answer: "",
    generate: () => {
      const initA = randomInt(1, 10);
      const initB = randomInt(15, 25);
      const regCInit = randomInt(100, 999);
      const K = randomInt(500, 999);
      let regA = initA;
      let regB = initB;
      let regC = regCInit;
      let steps = 0;

      while (true) {
        regA += 4; steps++;
        regB -= 3; steps++;
        steps++;
        if (regA <= regB) continue;
        break;
      }

      regC = regA - regB; steps++;
      steps++;
      if (regC !== 0) {
        regC = 3; steps++;
      } else {
        steps++;
      }

      while (true) {
        regC -= 1; steps++;
        steps++;
        if (regC !== 0) continue;
        break;
      }

      regA += K; steps++;
      regC = regB + regA; steps++;

      return {
        prompt:
          `Execute the following MIPS program and fill in the result table.\n\n` +
          `1  L: addi $10, $10, 4\n` +
          `2     addi $19, $19, -3\n` +
          `3     ble $10, $19, L\n` +
          `4     sub $18, $10, $19\n` +
          `5     bne $18, $zero, F\n` +
          `6     j H\n` +
          `7  F: addi $18, $zero, 3\n` +
          `8  H: addi $18, $18, -1\n` +
          `9     bne $18, $zero, H\n` +
          `10    addi $10, $10, ${K}\n` +
          `11    add $18, $19, $10\n\n` +
          `Initial: $10=${initA}, $19=${initB}, $18=${regCInit}\n\n` +
          `Give answers as: stepCnt | regA($10) | regB($19) | regC($18)`,
        answer:
          `stepCnt: ${steps} | regA($10): ${regA} | regB($19): ${regB} | regC($18): ${regC}`,
      };
    },
  },

  // ========== jal / jr (Subroutines) ==========
  {
    id: 803,
    topic: "MIPS Program Simulation",
    subtopic: "jal / jr (Subroutines)",
    prompt: "",
    answer: "",
    generate: () => {
      const INC = randomInt(20, 50);
      const ADD = randomInt(30, 60);
      const memBase = randomInt(1000, 4000) * 4;
      const mem0Init = randomInt(1000, 9999);
      const mem4Init = randomInt(1000, 9999);
      const regBInit = randomInt(20, 60);

      let regA = 4;
      let regB = regBInit + regBInit;
      let reg31 = 0;
      let mem0 = mem0Init;
      let mem4 = mem4Init;
      let steps = 2; // addi, add

      reg31 = 4; steps++; // jal H
      regB += INC; steps++;
      regA += ADD; steps++;
      steps++; // jr

      mem0 = regB; steps++; // sw line 4

      reg31 = 6; steps++; // jal H
      regB += INC; steps++;
      regA += ADD; steps++;
      steps++; // jr

      mem0 = regB; steps++; // sw line 6
      steps++; // j K

      mem4 = regA; steps++; // sw line 11

      return {
        prompt:
          `Execute the following MIPS program and fill in the result table.\n\n` +
          `1     addi $12, $zero, 4\n` +
          `2     add $14, $14, $14\n` +
          `3     jal H\n` +
          `4     sw $14, 0($18)\n` +
          `5     jal H\n` +
          `6     sw $14, 0($18)\n` +
          `7     j K\n` +
          `8  H: addi $14, $14, ${INC}\n` +
          `9     addi $12, $12, ${ADD}\n` +
          `10    jr $31\n` +
          `11 K: sw $12, 4($18)\n\n` +
          `Initial: $12=50, $14=${regBInit}, $18=${memBase}, $31=${randomInt(100,999)}, ` +
          `mem[${memBase}]=${mem0Init}, mem[${memBase+4}]=${mem4Init}\n\n` +
          `Give answers as: stepCnt | regA($12) | regB($14) | regC($18) | regD($31) | memP(${memBase}) | memQ(${memBase+4})`,
        answer:
          `stepCnt: ${steps} | regA($12): ${regA} | regB($14): ${regB} | regC($18): ${memBase} | regD($31): 6 | memP(${memBase}): ${mem0} | memQ(${memBase+4}): ${mem4}`,
      };
    },
  },
];

// ============================================================================
// MODULE 5: C to Assembly & Memory (BH-12)
// ============================================================================

export const archModule5Questions: Question[] = [

  // ========== 1D ARRAY ADDRESS ==========
  {
    id: 900,
    topic: "Array Address Calculation",
    subtopic: "1D Array",
    prompt: "",
    answer: "",
    generate: () => {
      const base = randomInt(1000, 9000);
      const entrySize = randomElement([1, 2, 3, 4, 6, 7, 8]);
      const index = randomInt(10, 60);
      return {
        prompt:
          `The base address of array x is ${base}, entry size is ${entrySize} bytes.\n` +
          `Calculate the address of x[${index}]:`,
        answer: String(base + index * entrySize),
      };
    },
  },
  {
    id: 901,
    topic: "Array Address Calculation",
    subtopic: "1D Array",
    prompt: "",
    answer: "",
    generate: () => {
      const base = randomInt(1000, 9000);
      const entrySize = randomElement([1, 2, 3, 4, 6, 7, 8]);
      const index = randomInt(5, 50);
      return {
        prompt:
          `The base address of array x is ${base}, entry size is ${entrySize} bytes.\n` +
          `Calculate the address of x[${index}]:`,
        answer: String(base + index * entrySize),
      };
    },
  },

  // ========== 2D ARRAY ADDRESS — ROW MAJOR ==========
  {
    id: 902,
    topic: "Array Address Calculation",
    subtopic: "2D Array (Row Major)",
    prompt: "",
    answer: "",
    generate: () => {
      const base = randomInt(1000, 9000);
      const entrySize = randomElement([2, 3, 4, 5, 6, 8]);
      const rows = randomInt(10, 30);
      const cols = randomInt(10, 30);
      const r = randomInt(0, rows - 1);
      const c = randomInt(0, cols - 1);
      return {
        prompt:
          `The base address of array x is ${base}, entry size is ${entrySize} bytes, ` +
          `${rows} rows and ${cols} columns, r=${r}, c=${c}, row major.\n` +
          `Calculate address of x[r][c]:`,
        answer: String(base + (r * cols + c) * entrySize),
      };
    },
  },
  {
    id: 903,
    topic: "Array Address Calculation",
    subtopic: "2D Array (Row Major)",
    prompt: "",
    answer: "",
    generate: () => {
      const base = randomInt(1000, 9000);
      const entrySize = randomElement([2, 3, 4, 5, 6, 8]);
      const rows = randomInt(10, 30);
      const cols = randomInt(10, 30);
      const r = randomInt(0, rows - 1);
      const c = randomInt(0, cols - 1);
      return {
        prompt:
          `The base address of array x is ${base}, entry size is ${entrySize} bytes, ` +
          `${rows} rows and ${cols} columns, r=${r}, c=${c}, row major.\n` +
          `Calculate address of x[r][c]:`,
        answer: String(base + (r * cols + c) * entrySize),
      };
    },
  },

  // ========== 2D ARRAY ADDRESS — COLUMN MAJOR ==========
  {
    id: 904,
    topic: "Array Address Calculation",
    subtopic: "2D Array (Column Major)",
    prompt: "",
    answer: "",
    generate: () => {
      const base = randomInt(1000, 9000);
      const entrySize = randomElement([2, 3, 4, 5, 6, 8]);
      const rows = randomInt(10, 30);
      const cols = randomInt(10, 30);
      const r = randomInt(0, rows - 1);
      const c = randomInt(0, cols - 1);
      return {
        prompt:
          `The base address of array x is ${base}, entry size is ${entrySize} bytes, ` +
          `${rows} rows and ${cols} columns, r=${r}, c=${c}, column major.\n` +
          `Calculate address of x[r][c]:`,
        answer: String(base + (c * rows + r) * entrySize),
      };
    },
  },
  {
    id: 905,
    topic: "Array Address Calculation",
    subtopic: "2D Array (Column Major)",
    prompt: "",
    answer: "",
    generate: () => {
      const base = randomInt(1000, 9000);
      const entrySize = randomElement([2, 3, 4, 5, 6, 8]);
      const rows = randomInt(10, 30);
      const cols = randomInt(10, 30);
      const r = randomInt(0, rows - 1);
      const c = randomInt(0, cols - 1);
      return {
        prompt:
          `The base address of array x is ${base}, entry size is ${entrySize} bytes, ` +
          `${rows} rows and ${cols} columns, r=${r}, c=${c}, column major.\n` +
          `Calculate address of x[r][c]:`,
        answer: String(base + (c * rows + r) * entrySize),
      };
    },
  },

  // ========== jal / jr / bgt program ==========
  {
    id: 906,
    topic: "MIPS Program Simulation",
    subtopic: "jal / jr / bgt",
    prompt: "",
    answer: "",
    generate: () => {
      const LIMIT = randomInt(30, 70);
      const inc = randomInt(5, 20);
      const init21 = randomInt(1, 10);
      const memBase = randomInt(1000, 4000) * 4;
      const mem0Init = randomInt(1000, 9999);
      const mem4Init = randomInt(1000, 9999);
      const init31 = randomInt(100, 999);

      let reg20 = LIMIT;
      let reg21 = init21;
      const reg12 = inc;
      const reg19 = memBase;
      let mem0 = mem0Init;
      let mem4 = mem4Init;
      let steps = 0;

      steps++; // addi line 1
      steps++; // jal H → $31 = 3

      while (true) {
        reg21 += reg12; steps++; // add
        steps++; // bgt check
        if (reg21 > reg20) {
          steps++; // jr
          break;
        } else {
          steps++; // j H
        }
      }

      mem0 = reg12; steps++; // sw line 3
      steps++; // j C
      mem4 = reg21; steps++; // sw line 9

      return {
        prompt:
          `Execute the following MIPS program and fill in the result table.\n\n` +
          `1     addi $20, $zero, ${LIMIT}\n` +
          `2     jal H\n` +
          `3     sw $12, 0($19)\n` +
          `4     j C\n` +
          `5  H: add $21, $21, $12\n` +
          `6     bgt $21, $20, J\n` +
          `7     j H\n` +
          `8  J: jr $31\n` +
          `9  C: sw $21, 4($19)\n\n` +
          `Initial: $20=${randomInt(10,29)}, $21=${init21}, $12=${inc}, $19=${memBase}, $31=${init31}, ` +
          `mem[${memBase}]=${mem0Init}, mem[${memBase+4}]=${mem4Init}\n\n` +
          `Give answers as: stepCnt | regA($20) | regB($21) | regC($12) | regD($19) | regE($31) | memP(${memBase}) | memQ(${memBase+4})`,
        answer:
          `stepCnt: ${steps} | regA($20): ${reg20} | regB($21): ${reg21} | regC($12): ${reg12} | regD($19): ${reg19} | regE($31): 3 | memP(${memBase}): ${mem0} | memQ(${memBase+4}): ${mem4}`,
      };
    },
  },
];