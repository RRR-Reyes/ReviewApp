import {
  binaryTree,
  bstMaxTraversal,
  inorderTraversal,
  binarySearchTrees,
  maximumNodes,
  hash,
  heap,
  heapmcq,
  priorityheap,
  huffman,
  searchtree,
  rbt,
  nodesupport,
  DijkstraActivity, 
  DijkstraExample, 
  graphexample, 
  BSTDeleteCase3, 
  amortizedanalysis, 
  Trie, 
  huffmancab,
} from "./imageData";

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

/* ------------------------------------------------- */

export const questionsByChapter: Record<string, Question[]> = {
  "Chapter 1: Java Primer": [
    {
      id: 1,
      topic: "Chapter 1: Java Primer",
      title: "🔅Java Interface",
      question:
        "Which of the below are true about a Java Interface definition?",
      options: [
        "A. Interfaces can contain instance variables and constructors",
        "B. Interfaces can only declare methods (no bodies), cannot be instantiated, and a class implementing an interface must implement all of its methods",
        "C. Interfaces can have private methods with bodies",
        "D. A class can extend multiple interfaces using the extends keyword",
      ],
      explanation:
        "A Java interface may contain only constants (public static final) and method signatures (public abstract) until Java 8+. It cannot have instance variables, constructors, or concrete instance methods (except default/static). Therefore B is the only statement that is completely true.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 2,
      topic: "Chapter 1: Java Primer",
      title: "Java Packages",
      question:
        "Which of the following best describes the purpose of packages in Java?",
      options: [
        "A. To improve runtime performance of the code",
        "B. To organize related classes into a logical structure, prevent naming conflicts using reverse domain naming, and correspond to directory structure",
        "C. To allow multiple inheritance in Java",
        "D. To automatically manage memory and garbage collection",
      ],
      explanation:
        "Packages provide name-space management (avoiding naming collisions), mirror the directory structure, and group related classes. They do not affect runtime speed, memory management, or inheritance rules, so only B is correct.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 3,
      topic: "Chapter 1: Java Primer",
      title: "Java Packages",
      question:
        "Which of the following package names follows the correct Java naming convention and best avoids naming collisions?",
      options: [
        "A. com.deSU.cs210.portfolio",
        "B. edu.desu.portfolio",
        "C. Portfolio.tools.java",
        "D. Java.util.MyCode",
      ],
      explanation:
        "Java packages should be all-lowercase and use reverse-domain order to prevent collisions. 'edu.desu.portfolio' is the only choice that satisfies both rules.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 4,
      topic: "Chapter 1: Java Primer",
      title: "JSON Data Types",
      question: "Which of these is NOT a valid JSON data type?",
      options: ["A. String", "B. Null", "C. Tuple", "D. Object"],
      explanation:
        "JSON supports string, number, boolean, null, array, and object. Tuples do not exist in JSON.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 5,
      topic: "Chapter 1: Java Primer",
      title: "MongoDB Storage",
      question:
        "MongoDB stores documents internally in which binary format that extends JSON with extra data types?",
      options: ["A. UBJSON", "B. BSON", "C. MessagePack", "D. SMILE"],
      explanation:
        "BSON (Binary JSON) adds types such as Date and binary data while maintaining JSON-like semantics.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 6,
      topic: "Chapter 1: Java Primer",
      title: "FRED API Response Format",
      question:
        "When querying the Federal Reserve FRED API for economic time-series data, the default response format delivered over HTTP is:",
      options: ["A. Plain text CSV", "B. BSON", "C. JSON", "D. XML"],
      explanation:
        "FRED's web service returns data in JSON by default (with optional XML or CSV via format parameter).",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 138,
      topic: "Chapter 1: Java Primer",
      title: "🔅JVM Object Storage",
      question:
        "In the Java Virtual Machine (JVM) architecture, where are all Java objects, including instances of classes and arrays, primarily stored during runtime?",
      options: [
        "A. The Method Stack",
        "B. The Program Counter",
        "C. The Heap",
        "D. The Registers",
      ],
      explanation:
        "The Heap is the JVM memory area where all objects and arrays are allocated. The stack holds local variables and references, not the objects themselves.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 139,
      topic: "Chapter 1: Java Primer",
      title: "🔅Random Number Range",
      question:
        "Knowing that nextDouble returns a random double (real number; floating-type) between 0 (inclusive) and 1 (exclusive), what is the range of values that randlowertoupper will have when the above code is run?",
      options: [
        "A. 0 to 8 inclusive",
        "B. 1 to 9 inclusive",
        "C. 1 to 8 inclusive",
        "D. 1 to 10 inclusive",
      ],
      explanation:
        "nextDouble() ∈ [0,1). Multiplying by 8 gives [0,8). Adding 1 shifts to [1,9). The upper bound 9 is exclusive.",
      code: `public class RandomRange {
        public static void main(String[] args) {
            java.util.Random rand = new java.util.Random();
            rand.setSeed(System.currentTimeMillis());
            double rand0to1 = rand.nextDouble();
            int lowerrandom = 1;
            int randomrange = 9;
            int randlowertoupper = (int)(lowerrandom + rand0to1 * randomrange);
            System.out.println(randlowertoupper);
        }
    }`,
      answer: "B",
      image: "",
    },
    {
      id: 140,
      topic: "Chapter 1: Java Primer",
      title: "🔅Garbage Collector Purpose",
      question: "What is the main purpose of the Garbage Collector (GC)?",
      options: [
        "A. To manage the method call stack and prevent stack overflow",
        "B. To automatically detect and reclaim memory occupied by objects that are no longer reachable or referenced",
        "C. To compile Java bytecode into machine code at runtime",
        "D. To optimize the order of instructions for faster execution",
      ],
      explanation:
        "The GC automatically reclaims heap memory from objects with no live references. It does not manage stacks, compile bytecode, or optimize instructions.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 154,
      topic: "Chapter 1: Java Primer",
      title: "🔅Garbage Collection Roots",
      question:
        "Which objects are considered GC roots that keep other objects alive?",
      options: [
        "A. Objects stored in arrays only.",
        "B. Objects referenced by local variables on the stack.",
        "C. Objects that have finalize() methods.",
        "D. Objects created with the new operator.",
      ],
      explanation:
        "GC roots include local variables and parameters on the JVM stack; any object reachable from a root is deemed live and is not collected.",
      code: "",
      answer: "B",
      image: "",
    },
  ],
  "Chapter 2: Object-Oriented Design": [
    {
      id: 7,
      topic: "Chapter 2: Object-Oriented Design",
      title: "Interface vs Abstract Class",
      question:
        "Which statement is TRUE about a Java interface when compared with an abstract class?",
      options: [
        "A. An interface can contain instance variables and constructors.",
        "B. A class may extend multiple interfaces but only one abstract class.",
        "C. An abstract class may not contain any concrete method bodies.",
        "D. An interface is instantiated with the new keyword.",
      ],
      explanation:
        "Java allows multiple interface implementation but only single inheritance for classes. Interfaces cannot have constructors or instance variables, and they cannot be instantiated.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 8,
      topic: "Chapter 2: Object-Oriented Design",
      title: "Comparator Sorting by Two Keys",
      question:
        "You need to sort a List<Stock> first by symbol alphabetically and then by shares descending. Which approach is correct?",
      options: [
        "A. Implement Comparable<Stock> with one compareTo method.",
        "B. Create two separate Comparator classes and chain them with thenComparing.",
        "C. Call Collections.sort(list) twice, once for each field.",
        "D. Use a lambda that subtracts shares and symbols.",
      ],
      explanation:
        "Comparators can be chained with thenComparing to impose multiple orderings in one sort pass.",
      code: `list.sort(
      Comparator.comparing(Stock::getSymbol)
                .thenComparing(Stock::getShares).reversed()
  );`,
      answer: "B",
      image: "",
    },
  ],
  "Chapter 3: Fundamental Data Structures": [
    {
      id: 9,
      topic: "Chapter 3: Fundamental Data Structures",
      title: "ArrayList vs LinkedList",
      question:
        "You must frequently remove elements by index from the middle of a very large list. Which implementation is more efficient and why?",
      options: [
        "A. ArrayList, because it provides O(1) random access.",
        "B. LinkedList, because it avoids shifting elements after removal.",
        "C. ArrayList, because it uses less memory per element.",
        "D. LinkedList, because it stores elements contiguously.",
      ],
      explanation:
        "LinkedList removal by index is O(1) once the node is reached (no shifting), whereas ArrayList must shift all subsequent elements, making it O(n).",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 10,
      topic: "Chapter 3: Fundamental Data Structures",
      title: "Array-Based Binary Tree",
      question:
        "In an array-based representation of a binary tree, the right child of the node stored at index p is located at which index?",
      options: ["A. 2*p", "B. 2*p + 1", "C. 2*p + 2", "D. p/2"],
      explanation:
        "Array layout uses rank(root)=0, left=2*p+1, right=2*p+2, parent=floor((p-1)/2).",
      code: "",
      answer: "C",
      image: "",
    },
  ],
  "Chapter 4: Algorithm Analysis": [
    {
      id: 11,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Big-Oh Definition",
      question:
        "Which of the following best describes what Big-Oh notation expresses?",
      options: [
        "The exact running time of an algorithm measured in milliseconds on a reference machine",
        "The best-case running time of an algorithm for a specific input",
        "An upper bound on the growth rate of an algorithm's running time as a function of input size, disregarding constant factors",
        "The average running time of an algorithm measured across all possible inputs",
      ],
      answer: "C",
      explanation:
        "Big-Oh notation is an industry-standard way of expressing time complexity. It describes how running time grows as input size n approaches infinity, focusing on the dominant term and discarding constant factors and lower-order terms. For example, 7n − 2 simplifies to O(n) because the constant 7 is ignored in asymptotic analysis.",
    },
    {
      id: 12,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Identifying Big-Oh from Code",
      question: "Consider the following method. What is its time complexity?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
      answer: "C",
      explanation:
        "Each iteration of the while loop halves the value of ourtest. For an array of length n, the loop runs approximately log₂(n) times before ourtest reaches 1. This halving pattern is the signature of O(log n) growth — the same pattern seen in binary search.",
      code: `public static int runCounts(int[] inputArray) {
    int totalruns = 0;
    int ourtest = inputArray.length;
    while (ourtest > 1) {
        ourtest = ourtest / 2;
        totalruns++;
    }
    return totalruns;
}`,
    },
    {
      id: 13,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Doubling Input Size Impact",
      question:
        "An algorithm has O(n²) time complexity. If the input size is doubled from n to 2n, by approximately what factor does the running time increase?",
      options: ["2x", "4x", "8x", "The running time stays the same"],
      answer: "B",
      explanation:
        "When input size doubles, the growth factor depends on the Big-Oh class: O(n) → 2x, O(n log n) → slightly over 2x, O(n²) → 4x (since (2n)² = 4n²), O(n³) → 8x. This doubling-input analysis is a practical way to reason about scalability. An O(n²) algorithm processing 1,000 items takes 4 times as long for 2,000 items.",
    },
    {
      id: 14,
      topic: "Chapter 4: Algorithm Analysis",
      title: "🔆Big-Oh Simplification",
      question:
        "What is the correct Big-Oh classification for the function f(n) = 3n³ + 20n² + 5?",
      options: ["O(n²)", "O(n³ + n²)", "O(n³)", "O(20n²)"],
      answer: "C",
      explanation:
        "Big-Oh keeps only the highest-order (dominant) term and drops all constant multipliers and lower-order terms. In 3n³ + 20n² + 5, the n³ term dominates as n grows large, so the function is O(n³). We can verify: choose c = 4 and n₀ = 21, and 3n³ + 20n² + 5 ≤ 4n³ holds for all n ≥ 21.",
    },
    {
      id: 15,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Comparing Algorithm Performance",
      question:
        "Consider the following method. What is its time complexity, and what would be the value of totalruns if called with an array of 8 elements?",
      options: [
        "O(n), totalruns = 8",
        "O(n log n), totalruns = 24",
        "O(n²), totalruns = 64",
        "O(n³), totalruns = 512",
      ],
      answer: "C",
      explanation:
        "Two nested loops each iterating over all n elements result in n × n = n² total iterations, giving O(n²) time complexity. For n = 8: 8 × 8 = 64. This nested loop pattern is the signature of quadratic growth and is the same structure used by insertion sort and selection sort.",
      code: `public static int runCounts(int[] inputArray) {
    int totalruns = 0;
    int arraylen = inputArray.length;
    for (int i = 0; i < arraylen; i++) {
        for (int j = 0; j < arraylen; j++) {
            totalruns++;
        }
    }
    return totalruns;
}`,
    },
    {
      id: 16,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Theoretical vs Experimental Analysis",
      question:
        "Which of the following is TRUE about theoretical algorithm analysis using Big-Oh notation?",
      options: [
        "It requires running the algorithm on actual hardware to measure performance accurately",
        "It depends on the specific programming language used to implement the algorithm",
        "It characterizes running time as a function of input size and is independent of hardware or language",
        "It only applies to sorting algorithms and not to search algorithms",
      ],
      answer: "C",
      explanation:
        "Theoretical analysis uses mathematical techniques and pseudocode to characterize an algorithm's efficiency, making it independent of hardware platform, programming language, and implementation details. This is its key advantage over experimental studies. It expresses running time as a function of input size n, allowing algorithms to be compared on a universal basis.",
    },
    {
      id: 17,
      topic: "Chapter 4: Algorithm Analysis",
      title: "🔆Sorting and Searching Complexity",
      question:
        "Which of the following correctly ranks the given algorithms from BEST (fastest) to WORST (slowest) time complexity?",
      options: [
        "O(1) → O(log n) → O(n) → O(n log n) → O(n²) → O(n³) → O(2ⁿ)",
        "O(log n) → O(1) → O(n log n) → O(n) → O(n²) → O(2ⁿ) → O(n³)",
        "O(n) → O(log n) → O(1) → O(n log n) → O(n²) → O(n³) → O(2ⁿ)",
        "O(1) → O(n) → O(log n) → O(n²) → O(n log n) → O(n³) → O(2ⁿ)",
      ],
      answer: "A",
      explanation:
        "The seven standard growth functions in order from best to worst are: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n) n-log-n, O(n²) quadratic, O(n³) cubic, O(2ⁿ) exponential. Real algorithm examples: O(1) = primitive operations, O(log n) = binary search, O(n) = linear search, O(n log n) = merge sort/heap sort, O(n²) = insertion sort/selection sort, O(n³) = three-way set disjointness.",
    },
    {
      id: 18,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Big(O) Time Complexity",
      question:
        "The method waitOneSecond() will cause the code to wait for one second before continuing execution. When the main above is run, what is the value of totalrunCounts at the end of the run (and the implied time complexity of the method runCounts)?",
      options: [
        "A. 1: Time complexity O(1)",
        "B. 3: Time complexity log(n)",
        "C. 8: Time complexity O(n)",
        "D. 64: Time complexity O(n^2)",
      ],
      explanation:
        "The loop halves ourtest (8 → 4 → 2 → 1) and increments totalruns each iteration. After 3 iterations ourtest becomes 1 and the loop stops, so totalrunCounts = 3 and the complexity is O(log n).",
      code: `public class GrowthExample {
    static class HelperStaticMethods { static void waitOneSecond(){} }
    public static int runCounts(int[] inputArray) {
        int totalruns = 0;
        int ourtest = inputArray.length;
        while (ourtest > 1) {
            ourtest = ourtest / 2;
            HelperStaticMethods.waitOneSecond();
            totalruns++;
        }
        return totalruns;
    }
    public static void main (String[] args) {
        int[] inputArray = {0, 1, 2, 3, 4, 5, 6, 7};
        int totalrunCounts = runCounts(inputArray);
        System.out.println("Total run counts is: " + totalrunCounts);
     }
}`,
      answer: "B",
      image: "",
    },
    {
      id: 19,
      topic: "Chapter 4: Algorithm Analysis",
      title: "🔆In-Place vs Out-of-Place",
      question:
        "Which of the following sorting algorithms is NOT in-place and requires O(n) extra memory?",
      options: [
        "A. Insertion sort",
        "B. Selection sort",
        "C. Merge sort",
        "D. Quick sort (in-place version)",
      ],
      explanation:
        "Merge-sort needs a temporary array for merging; the others can be implemented in-place.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 65,
      topic: "Chapter 4: Algorithm Analysis",
      title: "⭐ Cubic Growth Doubling Impact",
      question:
        "If the growth time of an algorithm is said to be cubic with relationship to input size n (meaning O(n^3), a doubling of the input size n would cause the running time to multiply by how many times?",
      options: ["A.\tnlogn", "B.\t1", "C.\t2", "D.\t8"],
      explanation:
        "For O(n³) complexity, when input size doubles (n → 2n), the running time increases by 2³ = 8 times. This is because (2n)³ = 8n³, showing cubic growth scales by the cube of the input size multiplier.",
      code: "",
      answer: "D",
      image: "",
    },
    {
      id: 68,
      topic: "Chapter 4: Algorithm Analysis",
      title: "⭐ Linear Growth Doubling Impact",
      question:
        "If an algorithm is said to be linear (O(n)) in growth, what would be expected to happen to the algorithm running time if we doubled the size of the algorithm input?",
      options: [
        "A.\tThe algorithm would take approximately twice as long to run.",
        "B.\tThe algorithm would take 2^n times as long to run.",
        "C.\tThe algorithm would run very fast.",
        "D.\tThe algorithm would exceed the java heap size.",
      ],
      explanation:
        "Linear time complexity O(n) means running time grows proportionally with input size. Doubling the input size n → 2n results in approximately double the running time.",
      code: "",
      answer: "A",
      image: "",
    },
    {
      id: 71,
      topic: "Chapter 4: Algorithm Analysis",
      title: "⭐ Big-Oh of Polynomial Function",
      question:
        "A software engineer looks at an algorithm and says that the performance (in milliseconds or any units) follows the equation:\n\n3n^2 + 2n + 1\n\nwhere n is the number of inputs to the algorithm, and the total value of the equation represents low-level constant-time operations.\n\nWhat is the big-Oh of the equation?",
      options: ["A.\tO(3)", "B.\tO(1)", "C.\tO(n^2)", "D.\tO(3n^2 + 2n)"],
      explanation:
        "Big-Oh notation keeps only the dominant term and drops constants and lower-order terms. In 3n² + 2n + 1, the n² term dominates as n grows large, so the complexity is O(n²).",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 72,
      topic: "Chapter 4: Algorithm Analysis",
      title: "⭐ Logarithmic Time Complexity Detection",
      question:
        "Given the below code, what is the time complexity of the runCounts method? Note that for the main function given, the returned value from runCounts is 3. Assume only powers of 2 are used for the input array size as a simplifying assumption.",
      options: ["A.\tO(1)", "B.\tO(log n)", "C.\tO(n)", "D.\tO(n log n)"],
      explanation:
        "The while loop halves ourtest each iteration (ourtest = ourtest/2), which is characteristic of logarithmic time complexity O(log n). For an array of size 8, it takes 3 iterations (8→4→2→1), which is log₂(8) = 3.",
      code: `public class GrowthExample {

    public static int runCounts (int[] inputArray) {
        int totalwhile = 0;
        int ourtest = inputArray.length;

        while (ourtest > 1) {
            ourtest = ourtest/2;
            totalwhile++;
        }

        return totalwhile;
    }

    public static void main (String[] args) {
        int[] inputArray = {0, 1, 2, 3, 4, 5, 6, 7};
        int totalruns = runCounts(inputArray);
        System.out.println(totalruns);
    }
}`,
      answer: "B",
      image: "",
    },
    {
      id: 73,
      topic: "Chapter 4: Algorithm Analysis",
      title: "⭐ Array Access Time Complexity",
      question:
        'Given an array of Integers in Java, what is the worst-time "Big-Oh" of the operation to access an element at any index i of the array (i.e. array[i])?',
      options: ["A.\tO(1)", "B.\tO(n)", "C.\tO(log n)", "D.\tO(n^2)"],
      explanation:
        "Array access by index is a direct memory access operation that takes constant time O(1), regardless of the array size or the index being accessed.",
      code: "",
      answer: "A",
      image: "",
    },
    {
      id: 74,
      topic: "Chapter 4: Algorithm Analysis",
      title: "⭐ Quadratic Growth Doubling Impact",
      question:
        "If the growth time of an algorithm is said to be quadratic (O(n^2)) with relationship to input size n, a doubling of the input size n would cause the running time to multiply by how many times?",
      options: ["A.\t1", "B.\t2", "C.\t4", "D.\t8"],
      explanation:
        "For O(n²) complexity, when input size doubles (n → 2n), the running time increases by 2² = 4 times, since (2n)² = 4n².",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 77,
      topic: "Chapter 4: Algorithm Analysis",
      title: "⭐ Cubic Time Complexity Triple Nested Loop",
      question:
        'Given the following code, what would be the expected "Big-Oh" notation describing the growth in running time of the algorithm as the input size of inputArray increases?',
      options: ["A.\tO(n)", "B.\tO(N^3)", "C.\tO(log n)", "D.\tO(1)"],
      explanation:
        "The code contains three nested loops, each iterating n times (where n is the array length). This results in n × n × n = n³ total operations, giving O(n³) cubic time complexity.",
      code: `    public static int runCounts(int[] inputArray) {
        int totalruns = 0;
        int arraylen = inputArray.length;
        for (int i = 0; i < arraylen; i++) {
            for (int j = 0; j < arraylen; j++) {
                for (int k = 0; k < arraylen; k++) {
                    // Additional primitive operations here
                    totalruns++;
                }
            }
        }`,
      answer: "B",
      image: "",
    },
    {
      id: 82,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Big-Omega vs Big-Oh Notation",
      question:
        "Which of the following statements correctly describes the difference between Big-Omega (Ω) and Big-Oh (O) notation?",
      options: [
        "A.\tBig-Omega describes an upper bound on growth rate, while Big-Oh describes a lower bound.",
        "B.\tBig-Omega describes a lower bound on growth rate, while Big-Oh describes an upper bound.",
        "C.\tBig-Omega describes a tight bound, while Big-Oh describes an average-case bound.",
        "D.\tBig-Omega and Big-Oh are equivalent notations that both describe exact running times.",
      ],
      answer: "B",
      explanation:
        "Big-Omega (Ω) describes a lower bound (asymptotically greater than or equal), while Big-Oh (O) describes an upper bound (asymptotically less than or equal). Big-Theta (Θ) describes a tight bound when a function is both O(g(n)) and Ω(g(n)).",
      code: "",
      image: "",
    },
    {
      id: 83,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Big-Oh Formal Definition Constants",
      question:
        "To prove that f(n) = 3n³ + 20n² + 5 is O(n³) using the formal definition, which constants c and n₀ satisfy the requirement that f(n) ≤ c · n³ for all n ≥ n₀?",
      options: [
        "A.\tc = 3 and n₀ = 1",
        "B.\tc = 4 and n₀ = 21",
        "C.\tc = 20 and n₀ = 5",
        "D.\tNo such constants exist because the 20n² term dominates.",
      ],
      answer: "B",
      explanation:
        "To prove 3n³ + 20n² + 5 is O(n³), we need constants c > 0 and n₀ ≥ 1 such that 3n³ + 20n² + 5 ≤ c·n³ for all n ≥ n₀. Choosing c = 4 works because for n ≥ 21, the inequality 3n³ + 20n² + 5 ≤ 4n³ holds (the n³ term dominates as n grows).",
      code: "",
      image: "",
    },
    {
      id: 96,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Big-Theta Notation Definition",
      question:
        "Given the function f(n) = (n+1)/2, which of the following statements is TRUE?",
      options: [
        "A.\tf(n) is O(n) but not Ω(n).",
        "B.\tf(n) is Ω(n) but not O(n).",
        "C.\tf(n) is Θ(n) because it is both O(n) and Ω(n).",
        "D.\tf(n) is O(n²) but not O(n).",
      ],
      answer: "C",
      explanation:
        "f(n) = (n+1)/2 = n/2 + 1/2. It is O(n) because for c=1 and n₀=1, f(n) ≤ n. It is Ω(n) because for c=1/2 and n₀=1, f(n) ≥ (1/2)n. Since it is both O(n) and Ω(n), it is Θ(n) (tight bound).",
      code: "",
      image: "",
    },
    {
      id: 97,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Cubic Growth Doubling Impact Calculation",
      question:
        "If an algorithm has a time complexity of O(n³) and currently takes 1 second to process 1,000 elements, approximately how long will it take to process 2,000 elements?",
      options: [
        "A.\t2 seconds",
        "B.\t4 seconds",
        "C.\t8 seconds",
        "D.\t1 second (the time remains constant regardless of input size)",
      ],
      answer: "C",
      explanation:
        "For O(n³), doubling the input size (2n) results in (2n)³ = 8n³, meaning the running time increases by a factor of 8. Thus, 1 second becomes approximately 8 seconds.",
      code: "",
      image: "",
    },
    {
      id: 114,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Conditional Nested Loop Complexity",
      question:
        "What is the time complexity of the following method?\n\npublic int conditionalSum(int[] arr) {\n    int n = arr.length;\n    int sum = 0;\n    for (int i = 0; i < n; i++) {\n        if (arr[i] < 0) {\n            for (int j = 0; j < n; j++) {\n                sum += arr[i] * arr[j];\n            }\n        }\n    }\n    return sum;\n}",
      options: [
        "A. O(n²) because the nested loop structure dominates",
        "B. O(n) because the if-condition prevents the inner loop from always executing",
        "C. O(n) in the best case (no negative elements), O(n²) in the worst case (all negative elements)",
        "D. O(1) because array access is constant time",
      ],
      answer: "C",
      explanation:
        "The time complexity depends on the input data distribution. The outer loop always runs n times. The inner loop only executes when arr[i] < 0, running n times for each negative element. If no elements are negative, we have n iterations with O(1) work each → O(n) total. If all n elements are negative, we have n outer iterations each triggering n inner iterations → O(n²) total. This demonstrates that conditional statements can create input-dependent complexity that varies between best and worst cases. We characterize this as O(n) best case, O(n²) worst case, and O(n²) worst-case overall guarantee.",
      code: "",
      image: "",
    },
    {
      id: 115,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Primitive Operations Complexity",
      question: "Which of the following operations is NOT O(1) constant time?",
      options: [
        "A. Accessing an element at a specific index in an array: arr[i]",
        "B. Adding two integers: a + b",
        "C. Assigning a value to a variable: x = 5",
        "D. Finding the maximum element in an unsorted array of size n",
      ],
      answer: "D",
      explanation:
        "Array access by index, arithmetic operations, and variable assignment are primitive atomic operations that execute in constant time O(1) regardless of data size. However, finding the maximum element in an unsorted array requires examining every element at least once to ensure no larger value exists, resulting in O(n) time complexity. This is a linear scan operation that grows proportionally with input size. The key distinction is that primitive operations work on fixed-size data (integers, references), while searching requires processing variable-sized collections.",
      code: "",
      image: "",
    },
    {
      id: 116,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Halving Loop Pattern",
      question:
        "What is the time complexity of the following search method?\n\npublic int binarySearchStyle(int[] arr, int target) {\n    int left = 0;\n    int right = arr.length - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (arr[mid] == target) {\n            return mid;\n        } else if (arr[mid] < target) {\n            left = mid + 1;\n        } else {\n            right = mid - 1;\n        }\n    }\n    return -1;\n}",
      options: [
        "A. O(n) because it may need to check every element",
        "B. O(log n) because the search space is halved each iteration",
        "C. O(n²) because there are multiple conditional branches",
        "D. O(1) because it returns immediately when the target is found",
      ],
      answer: "B",
      explanation:
        "This is the classic binary search pattern with O(log n) complexity. Each iteration halves the search space by comparing the target to the middle element and eliminating half the remaining elements. Starting with n elements, after one iteration we have n/2, after two iterations n/4, and after k iterations n/2^k. The loop terminates when n/2^k ≤ 1, meaning k ≥ log₂(n). Thus we perform at most log₂(n) iterations, each with O(1) work, giving O(log n) total time. This is exponentially faster than linear search's O(n) for large datasets.",
      code: "",
      image: "",
    },
    {
      id: 117,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Single Loop with Constant Work",
      question:
        'What is the time complexity of the following method?\n\npublic void processArray(int[] arr) {\n    int n = arr.length;\n    int sum = 0;\n    int product = 1;\n    for (int i = 0; i < n; i++) {\n        sum += arr[i];\n        product *= arr[i];\n    }\n    System.out.println("Sum: " + sum + ", Product: " + product);\n}',
      options: [
        "A. O(n²) because there are two operations inside the loop",
        "B. O(2n) which simplifies to O(n)",
        "C. O(n) because the loop runs n times with O(1) work per iteration",
        "D. O(1) because both sum and product are primitive operations",
      ],
      answer: "C",
      explanation:
        "The method contains a single loop that iterates exactly n times, performing a constant amount of work per iteration (two arithmetic operations and two assignments). Even though two operations occur inside the loop, constant factors are dropped in Big-Oh notation, so O(2n) becomes O(n). The key pattern is one loop iterating over all n elements with no nested loops or recursive calls. The work grows linearly with input size—double the array size, double the execution time. The print statement outside the loop is O(1) and does not affect the overall complexity.",
      code: "",
      image: "",
    },
    {
      id: 141,
      topic: "Chapter 4: Algorithm Analysis",
      title: "🔅Linear Search Comparisons",
      question:
        "Given the following array of unsorted integers: [6 4 3 7 4 5 1 6]:\nIf we perform a linear search on the above array for the value 2 (which is not in the array) how many compares do we need to perform to find out that the value 2 is not in the array?",
      options: ["A. 2", "B. 4", "C. 6", "D. 8"],
      explanation:
        "Linear search checks each element sequentially. When the target is absent, all 8 elements must be examined to confirm it is not found.",
      code: "",
      answer: "D",
      image: "",
    },
    {
      id: 142,
      topic: "Chapter 4: Algorithm Analysis",
      title: "🔅Binary Search Function Calls",
      question:
        "Binary search on {1, 3, 4, 5, 7, 8, 10, 12} for target = 5. How many TOTAL times is the function binarySearch actually called to provide a boolean answer?",
      options: ["A. 1", "B. 2", "C. 3", "D. 4"],
      explanation:
        "Binary search halves the search space each call. For this 8-element array and target 5, three recursive calls are needed to locate the target at index 3.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 143,
      topic: "Chapter 4: Algorithm Analysis",
      title: "🔆Linear Search Worst Case",
      question:
        "Given an array of 8 unsorted elements, how may comparison operations have to be performed to conclude that a given target element is not in the array (as in a linear search)?",
      options: ["A. 2", "B. 4", "C. 8", "D. 16"],
      explanation:
        "When the target is absent, linear search must compare against every element. For 8 elements, exactly 8 comparisons are required in the worst case.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 144,
      topic: "Chapter 4: Algorithm Analysis",
      title: "🔆Binary Search Trace",
      question:
        "If the main method is run, how many TOTAL times is the function binarySearch actually called to provide a boolean answer of True?\nNOTE: this total should include the initial call from the main shown above, and include all recursive calls.",
      options: ["A. 0", "B. 1", "C. 2", "D. 4"],
      explanation:
        "The initial call examines the midpoint. If the target is found immediately, only one call is needed. The best-case behavior is O(1) when the target is at the first midpoint.",
      code: `import java.util.Arrays;

public class BinSearch {

    public static boolean binarySearch(int[] data, int target, int low, int high) {
        System.out.println("binarySearch called: " +
                "inputArray: " + Arrays.toString(data) +
                " target:" + target + " low:" +  low + " high:" + high);
        if (low > high)
            return false;  // interval empty; no match
        else {
            int mid = (low + high) / 2; // truncating division
            if (target == data[mid])
                return true;            // found a match
            else if (target < data[mid])
                return binarySearch(data, target, low, mid - 1);   // recur left of the middle
            else
                return binarySearch(data, target, mid + 1, high);  // recur right of the middle
        }
    }

    public static void main(String[] args) {
        int[] inputArray = {2, 4, 6, 8};
        int target = 2;
        boolean myAnswer = binarySearch(inputArray, target, 0, 3);
        System.out.println("myAnswer is: " + myAnswer);
    }
}`,
      answer: "B",
      image: "",
    },
    {
      id: 146,
      topic: "Chapter 4: Algorithm Analysis",
      title: "🔆Sorting and Searching Statements",
      question:
        "Which of the following statements about sorting and searching are NOT true:",
      options: [
        'A. Sorting is important to perform prior to frequent lookup of map "keys" because it drastically improves the time required to find a key from O(n) problem (on unsorted data) to an O(log n) problem (on sorted data).',
        "B. Searching performance is far higher when using linear search on unsorted data than when using binary search on sorted data.",
        "C. Using merge-sort instead of insertion sort reduces the sorting time complexity from O(n^2) to O(n log n).",
        "D. Insertion sort performance has a best-case performance of O(n) growth for datasets that are already sorted.",
      ],
      explanation:
        "Statement B is false. Binary search on sorted data runs in O(log n), which is exponentially faster than linear search's O(n) on unsorted data. Statement A is true — sorting enables binary search. Statement C is true — merge-sort is O(n log n) versus insertion sort's O(n²). Statement D is true — insertion sort achieves O(n) when data is already sorted.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 160,
      topic: "Chapter 4: Algorithm Analysis",
      title: "Amortized ArrayList Growth",
      question:
        "An ArrayList doubles its capacity when full. Why is the average cost per insertion O(1) despite occasional expensive resizes?",
      options: [
        "A. Resizes happen in constant time",
        "B. Resize costs are spread across many cheap insertions",
        "C. The array never actually needs resizing",
        "D. Java pre-allocates infinite memory",
      ],
      explanation:
        "Amortized analysis shows that expensive O(n) resizes occur rarely (only at powers of 2). The cost is spread over O(n) cheap O(1) insertions, yielding O(1) average per operation.",
      code: "",
      answer: "B",
      image: "amortizedanalysis",
    },
  ],
  "Chapter 5: Recursion": [
    {
      id: 20,
      topic: "Chapter 5: Recursion",
      title: "🔅Recursion",
      question: "Which of the following code segments uses recursion?",
      options: [
        "A. A method that uses a while loop to repeat until a condition is met",
        "B. A method that calls itself directly or indirectly",
        "C. A method that uses a for loop to iterate over an array",
        "D. A method that calls a different helper method in the same class",
      ],
      explanation:
        "Recursion is defined by a method that calls itself (either directly or through another helper). Choices A and C use loops, while D never turns the call back on itself. Only B satisfies the self-call requirement.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 21,
      topic: "Chapter 5: Recursion",
      title: "🔅Factorial Recursion",
      question:
        'Consider the following sections of code that compute factorials:\n\nHow many TOTAL times is the function "computeFactorial" called to execute the code and produce the answer of 6?',
      options: ["A. 1", "B. 3", "C. 4", "D. 6"],
      explanation:
        "computeFactorial(3) → 3 * computeFactorial(2)\ncomputeFactorial(2) → 2 * computeFactorial(1)\ncomputeFactorial(1) → 1 (base case hit).\nThat is 3 active calls recurses.",
      code: `public class Factorial {
    public static int computeFactorial(int n) {
        System.out.println("computeFactorial called");
        if (n == 1) return 1;
        else return n * computeFactorial(n - 1);
    }
    public static void main(String[] args) {
        System.out.println(computeFactorial(3));
    }
}`,
      answer: "B",
      image: "",
    },
    {
      id: 22,
      topic: "Chapter 5: Recursion",
      title: "🔅Infinite Recursion",
      question:
        "Given the following Java code, what will happen when this code is run?",
      options: [
        "A. The recursive calls will end and the final code of 5 will be returned.",
        'B. The code has no valid terminal condition for the recursive call to testRecur; it will result in an infinite recursion and will eventually cause a "stack overflow" error.',
        "C. The code will not compile properly because Java doesn't allow recursion.",
        'D. The code will print "Hello World" when it completes.',
      ],
      explanation:
        "The method testRecur calls itself with the same arguments and has no base-case branch that stops the recursion. The call stack will grow until the JVM throws a StackOverflowError.",
      code: `public class InfiniteRecursion {
    public static void testRecur(int a, int b) {
        System.out.println("testRecur called");
        testRecur(4, 5);
    }
    public static void main(String[] args) {
        try { testRecur(4, 5); }
        catch (StackOverflowError e) { System.out.println("Error: " + e.getMessage()); }
    }
}`,
      answer: "B",
      image: "",
    },
  ],
  "Chapter 6: Stacks, Queues, and Deques": [
    {
      id: 23,
      topic: "Chapter 6: Stacks, Queues, and Deques",
      title: "🔅Stack ADT Final",
      question:
        "Consider an empty stack, following the Stack Abstract Data Type (ADT). What is the final state of the stack after the following sequence of operations?\npush(10);\npush(20);\npop();\npush(30);\npush(40);\npop();\npop();",
      options: ["A. [10, 30]", "B. [10]", "C. [30]", "D. Empty"],
      explanation:
        "Trace: push(10)→[10], push(20)→[10,20], pop()→[10], push(30)→[10,30], push(40)→[10,30,40], pop()→[10,30], pop()→[10].",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 24,
      topic: "Chapter 6: Stacks, Queues, and Deques",
      title: "🔅Stack Application",
      question:
        "Which of the following applications is NOT appropriate for a stack ADT?",
      options: [
        "A. Undo feature in a text editor",
        "B. Function call tracking in the JVM",
        "C. Page-visited history in a web browser",
        "D. Serving customers in a call center where the caller waiting the longest is served next",
      ],
      explanation:
        "Stacks are LIFO. A call-center must serve the caller who waited longest (FIFO), which requires a Queue.",
      code: "",
      answer: "D",
      image: "",
    },
    {
      id: 25,
      topic: "Chapter 6: Stacks, Queues, and Deques",
      title: "🔅Deque ADT Final",
      question:
        'Given the following operations on a Deque, what is the final structure?\nAddFirst ("Tom");\nAddFirst ("John");\nAddLast ("Renee");\nAddFirst ("Fred");\nAddLast ("Jim");',
      options: [
        "A. Fred, John, Tom, Renee, Jim",
        "B. Fred, Jim, Renee, Tom, John",
        "C. Jim, Renee, Tom, John, Fred",
        "D. Tom, John, Fred, Renee, Jim",
      ],
      explanation:
        "AddFirst adds to front, AddLast adds to back. Final: [Fred, John, Tom, Renee, Jim].",
      code: "",
      answer: "A",
      image: "",
    },
    {
      id: 26,
      topic: "Chapter 6: Stacks, Queues, and Deques",
      title: "🔅Array Stack",
      question:
        "Which of the following statements would be FALSE about a Java Stack implementation using an array?",
      options: [
        "A. The stack grows from left to right in the array",
        "B. A variable t tracks the index of the top element",
        "C. push() operation can throw an exception when the array is full",
        "D. The pop() operation always runs in O(n) time because elements must be shifted",
      ],
      explanation:
        "In an array stack, pop() only involves decrementing an index, which is O(1). No shifting is required.",
      code: "",
      answer: "D",
      image: "",
    },
    {
      id: 27,
      topic: "Chapter 6: Stacks, Queues, and Deques",
      title: "🔆Deque ADT Final",
      question:
        'Given the following operations on a Deque, what is the final structure?\nAddFirst ("Jane");\nAddLast ("Joe");\nAddFirst ("John");\nAddFirst ("Charles");\nAddLast ("Fred");',
      options: [
        "A. Charles, Fred, Jane, Joe, John",
        "B. Charles, Joe, John, Jane, Fred",
        "C. Charles, John, Jane, Joe, Fred",
        "D. John, Joe, Jane, Fred, Charles",
      ],
      explanation: "Final Order: [Charles, John, Jane, Joe, Fred].",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 28,
      topic: "Chapter 6: Stacks, Queues, and Deques",
      title: "🔆Queue Application",
      question:
        "Which of the following applications would be appropriate for a programmer to use the Queue Abstract Data Type?",
      options: [
        "A. A tree application taking into account data organization",
        "B. A call center application where the longest waiting caller is served next.",
        "C. A dictionary-type application with key-value lookups.",
        "D. A recursion tracking application.",
      ],
      explanation:
        "Queues are FIFO (First-In-First-Out), perfect for call centers.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 29,
      topic: "Chapter 6: Stacks, Queues, and Deques",
      title: "🔅Deque ADT",
      question:
        "Which of the following statements about a Deque ADT is NOT true?",
      options: [
        "A. The Java Collections Framework includes a Deque interface.",
        "B. The Deque ADT includes the functionality of a Stack ADT.",
        "C. The Deque ADT includes the functionality of a Queue ADT.",
        "D. The Deque ADT includes the functionality of a List ADT.",
      ],
      explanation:
        "Deques do not provide O(1) random positional access like Lists do.",
      code: "",
      answer: "D",
      image: "",
    },
    {
      id: 30,
      topic: "Chapter 6: Stacks, Queues, and Deques",
      title: "🔆Stack ADT Scenario",
      question:
        "Which of the following scenarios is an appropriate application of a stack data structure?",
      options: [
        "A. Managing print jobs in a printer queue.",
        "B. Tracking dependencies in a project build system.",
        "C. Storing customer information for quick access by account number.",
        'D. Implementing an "undo" mechanism in a text editor.',
      ],
      explanation: "Undo mechanisms require LIFO (Last-In-First-Out) logic.",
      code: "",
      answer: "D",
      image: "",
    },
    {
      id: 31,
      topic: "Chapter 6: Stacks, Queues, and Deques",
      title: "🔅Stack ADT",
      question:
        'Push("Search"); \nPush("Sort"); \nPush("ArrayMax"); \nPush("Append"); \nPop(); What is returned by Pop()?',
      options: [
        "A. Method: Search",
        "B. Method: Append",
        "C. Method: Sort",
        "D. Method: ArrayMax",
      ],
      explanation:
        "The last item pushed was 'Append', so it is the first to be popped.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 32,
      topic: "Chapter 6: Stacks, Queues, and Deques",
      title: "Stack Simulation of Method Calls",
      question:
        "During recursion, which stack operation is performed when a recursive call returns?",
      options: ["A. push", "B. pop", "C. peek", "D. size"],
      explanation:
        "Returning from a call removes the frame from the top of the stack.",
      code: "",
      answer: "B",
      image: "",
    },
  ],
  "Chapter 7: List and Iterator ADTs": [
    {
      id: 33,
      topic: "Chapter 7: List and Iterator ADTs",
      title: "🔆Infinite DoublyLinkedList",
      question:
        "Given the code provided, what is printed out when the main is run?",
      options: [
        "A. Size of doubly linked list is: 8",
        "B. Size of doubly linked list is: 16",
        "C. The code results in a stack overflow error.",
        "D. The code results in a Java.Lang.OutOfMemoryError.",
      ],
      explanation:
        "The loop condition (thisCount > -1) is always true, eventually exhausting the heap memory.",
      code: `public class TestDoublyLinkedLists {
        static class DoublyLinkedList<T> {
            int size = 0;
            void addFirst(T x){ size++; }
        }
        public static DoublyLinkedList buildDoublyLinkedList(int size){
            int thisCount = 0;
            DoublyLinkedList<Integer> myDoublyLinkedList = new DoublyLinkedList<>();
            while (thisCount > -1) {
                myDoublyLinkedList.addFirst(thisCount);
                thisCount++;
            }
            return myDoublyLinkedList;
        }
        public static void main (String[] args) {
            try {
                DoublyLinkedList<Integer> myDoublyLinkedList = buildDoublyLinkedList(8);
                int size = myDoublyLinkedList.size;
                System.out.println("Size of doubly linked list is: " + size);
            } catch (OutOfMemoryError e) {
                System.out.println("Error: " + e.getMessage());
            }
        }
    }`,
      answer: "D",
      image: "",
    },
  ],
  "Chapter 8: Trees": [
    {
      id: 34,
      topic: "Chapter 8: Trees",
      title: "🔆Binary Tree",
      question: "Which of the trees shown is NOT a binary tree?",
      options: [
        "A. Decision Tree",
        "B. Corporate Organization Tree",
        "C. Binary Heap",
        "D. Search Tree",
      ],
      explanation:
        "Corporate charts can have many children per node, while binary trees are limited to two.",
      code: "",
      answer: "B",
      image: binaryTree,
    },
    {
      id: 35,
      topic: "Chapter 8: Trees",
      title: "🔆Inorder Traversal",
      question:
        "In what order are elements visited when performing an inorder traversal of the following tree?",
      options: ["A. LNPSTWX", "B. LNPSWXT", "C. LNSPTXW", "D. TLNPSWX"],
      explanation: "In-order: Left, Root, Right.",
      code: "",
      answer: "C",
      image: inorderTraversal,
    },
    {
      id: 36,
      topic: "Chapter 8: Trees",
      title: "🔆Maximum Nodes",
      question:
        "What is the maximum number of nodes at level 5 of a binary tree (root = level 0)?",
      options: ["A. 16", "B. 32", "C. 64", "D. 128"],
      explanation: "Nodes at level k = 2^k. 2^5 = 32.",
      code: "",
      answer: "B",
      image: maximumNodes,
    },
    {
      id: 37,
      topic: "Chapter 8: Trees",
      title: "🔆Maximum Node Height",
      question:
        "What is the maximum number of nodes in a binary tree of height 3 (root = height 0)?",
      options: ["A. 7", "B. 16", "C. 14", "D. 15"],
      explanation: "Max nodes = 2^(h+1) - 1. 2^4 - 1 = 15.",
      code: "",
      answer: "D",
      image: "",
    },
    {
      id: 38,
      topic: "Chapter 8: Trees",
      title: "Tree Math",
      question:
        "In a proper binary tree, if internal nodes i = 10, how many leaf nodes e exist?",
      options: ["A. 9", "B. 10", "C. 11", "D. 12"],
      explanation: "In proper binary trees, e = i + 1.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 99,
      topic: "Chapter 8: Trees",
      title: "Proper Binary Tree Node Relationship",
      question:
        "What is the mathematical relationship between the number of internal nodes (i) and external nodes (leaves, e) in a proper binary tree?",
      options: ["A.\te = i - 1", "B.\te = i + 1", "C.\te = 2i", "D.\te = i²"],
      answer: "B",
      explanation:
        "In a proper binary tree (where every internal node has exactly two children), the number of external nodes (leaves) is always exactly one more than the number of internal nodes: e = i + 1. This is a fundamental property of proper binary trees.",
      code: "",
      image: "",
    },
  ],
  "Chapter 9: Priority Queues": [
    {
      id: 39,
      topic: "Chapter 9: Priority Queues",
      title: "Priority Queue ADT",
      question:
        "Which of the following scenarios is NOT an appropriate application of a Priority Queue ADT?",
      options: [
        "An air traffic control landing queue where aircraft with a critical fuel emergency are served first",
        "A Huffman encoding algorithm for text compression",
        "A web browser history where the most recently visited page is returned first",
        "A hospital triage waiting queue where the most critically ill patient is treated next",
      ],
      answer: "C",
      explanation:
        "A Priority Queue ranks entries by priority (lowest key = highest priority), not by arrival order. Hospital triage, air traffic control, and Huffman encoding all require processing by importance rather than simple order. A web browser history returns the most recent page first, which is LIFO behavior — suited to a Stack, not a Priority Queue.",
    },
    {
      id: 40,
      topic: "Chapter 9: Priority Queues",
      title: "Priority Queue Operations",
      question:
        "Given an empty priority queue, the following operations are performed:\ninsert(5, A); \ninsert(9, C); \ninsert(3, B); \nremoveMin(); \ninsert(7, D); \nremoveMin();\nWhat is the current state of the priority queue after all operations?",
      options: [
        "{ (3,B), (5,A), (9,C) }",
        "{ (7,D), (9,C) }",
        "{ (5,A), (9,C) }",
        "{ (3,B), (7,D) }",
      ],
      answer: "B",
      explanation:
        "Trace the operations: insert(5,A) → {(5,A)}; insert(9,C) → {(5,A),(9,C)}; insert(3,B) → {(3,B),(5,A),(9,C)}; removeMin() removes (3,B) → {(5,A),(9,C)}; insert(7,D) → {(5,A),(7,D),(9,C)}; removeMin() removes (5,A) → {(7,D),(9,C)}.",
    },
    {
      id: 41,
      topic: "Chapter 9: Priority Queues",
      title: "Heap Properties",
      question:
        "Which of the following statements about a binary min-heap is FALSE?",
      options: [
        "Every parent node has a key value less than or equal to both of its children",
        "The minimum element is always located at the root and can be retrieved in O(1) time",
        "A binary heap is always a fully sorted structure in the same sense as a binary search tree",
        "All tree levels are full except possibly the highest, where values are pushed to the left (complete binary tree)",
      ],
      answer: "C",
      explanation:
        "A min-heap guarantees the heap-order property (parent ≤ children) and the complete binary tree shape property. However, it is NOT fully sorted like a BST — the ordering between siblings and across branches is not enforced. The minimum is always at the root (O(1) access), but finding an arbitrary element requires O(n) time.",
    },
    {
      id: 42,
      topic: "Chapter 9: Priority Queues",
      title: "Heap Array Mapping",
      question:
        "In an array-based representation of a binary heap, a node is stored at index i. Which of the following correctly identifies the index of its left child?",
      options: ["2i", "2i + 1", "2i + 2", "(i - 1) / 2"],
      answer: "B",
      explanation:
        "Array-based heaps use the following index formula with the root at index 0: left child = 2i + 1, right child = 2i + 2, parent = floor((i - 1) / 2). Links between nodes are not explicitly stored — they are computed from the index, making this representation efficient in both time and memory.",
    },
    {
      id: 43,
      topic: "Chapter 9: Priority Queues",
      title: "Priority Queue Run Times",
      question:
        "Which of the following correctly compares the worst-case time complexity of the insert and removeMin operations across all three Priority Queue implementations?",
      options: [
        "Unsorted list: insert O(n), removeMin O(1); Sorted list: insert O(1), removeMin O(n); Heap: both O(log n)",
        "Unsorted list: insert O(1), removeMin O(n); Sorted list: insert O(n), removeMin O(1); Heap: both O(log n)",
        "Unsorted list: insert O(log n), removeMin O(log n); Sorted list: both O(1); Heap: both O(1)",
        "All three implementations have O(n) insert and O(1) removeMin",
      ],
      answer: "B",
      explanation:
        "An unsorted list allows fast O(1) insertion but requires scanning all elements to find the minimum, so removeMin is O(n). A sorted list maintains order so removeMin is O(1) from the front, but insertion must find the correct position at O(n). A binary heap balances both operations at O(log n) via upheap and downheap bubbling, and is generally the optimal implementation.",
    },
    {
      id: 44,
      topic: "Chapter 9: Priority Queues",
      title: "Heap Sort",
      question:
        "Which of the following correctly describes the two phases of Heap Sort and its overall time complexity?",
      options: [
        "Phase 1 loads elements into a sorted array in O(n) time; Phase 2 binary searches for each element in O(log n) time; total O(n log n)",
        "Phase 1 loads elements into a heap using insert operations in O(n log n) time; Phase 2 reads elements off via repeated removeMin operations in O(n log n) time; total O(n log n)",
        "Phase 1 loads elements into a heap in O(n²) time; Phase 2 reads elements off in O(n) time; total O(n²)",
        "Both phases run in O(n) time for a total complexity of O(n)",
      ],
      answer: "B",
      explanation:
        "Heap Sort works in two clear phases. First, n elements are each inserted into a heap — since each insert costs O(log n), this phase costs O(n log n). Second, n elements are removed one at a time via removeMin — also O(log n) each — for another O(n log n). The total is O(n log n). Note: Bottom-up heap construction can reduce Phase 1 to O(n), adding a small improvement.",
    },
    {
      id: 45,
      topic: "Chapter 9: Priority Queues",
      title: "Sorting Algorithm Comparison",
      question:
        "Which of the following statements about sorting algorithm selection is TRUE?",
      options: [
        "Insertion sort is always preferred over heap sort for large datasets because it requires no extra memory",
        "Heap sort should be preferred for datasets in the range of 1K–1M elements because it runs in O(n log n) time in-place",
        "Merge sort is the best choice for all data sizes because it is the fastest sorting algorithm in all cases",
        "Selection sort and insertion sort both run in O(n log n) time, making them suitable for large datasets",
      ],
      answer: "B",
      explanation:
        "The sorting algorithm summary: selection sort and insertion sort are O(n²) and suited only for small data (< 1K elements); heap sort is O(n log n), in-place, and well suited for large data (1K–1M); merge sort is O(n log n) and best for huge datasets (> 1M) because it uses sequential data access, though it requires O(n) extra space unlike heap sort.",
    },
    {
      id: 62,
      topic: "Chapter 9: Priority Queues",
      title: "⭐ Priority Queue Aircraft Landing Scenario",
      question:
        "Which of the following scenarios is most appropriate for a priority queue implementation?",
      options: [
        "A.\tManaging an aircraft landing sequence where planes with low fuel or medical emergencies must land before those with longer holding times.",
        "B.\tManaging a customer service line at a motor vehicle agency where individuals are served strictly in the order of their arrival.",
        "C.\tManaging a music playlist where a user needs to jump to specific song numbers or manually reorder the entire sequence at any time.",
        'D.\tManaging the "undo" or "back" function in a text editor to revert the most recent changes in reverse chronological order.',
      ],
      explanation:
        "Priority queues are designed for scenarios where elements are processed based on priority (emergency landings) rather than FIFO order (B), random access (C), or LIFO order (D). Aircraft with emergencies require priority-based handling.",
      code: "",
      answer: "A",
      image: "",
    },
    {
      id: 63,
      topic: "Chapter 9: Priority Queues",
      title: "⭐ Heap Array Implementation Properties",
      question:
        "Given the below figure showing how a heap structure for a priority queue is mapped into an array for implementation, which of the following statements about the array-based implementation is TRUE after all heap-related adjustments are complete (no adjustments in-progress):",
      options: [
        "A.\tThe array is always fully-sorted with the lowest key numbers (the highest priority items) aligned with the lowest array indices.",
        "B.\tThe array always maintains the next item to be popped out of the priority queue (with the lowest integer value) stored in array reference 0 (in this case 4,C).",
        "C.\tThere is never a need to extend the size of the array since the heap model does not allow an array overrun.",
        "D.\tThe array implementation of the priority queue is not compatible with the heap model and is not implementable in Java.",
      ],
      explanation:
        "In a min-heap array implementation, the root (minimum element) is always at index 0. The array is not fully sorted (only heap-ordered), and dynamic resizing may still be needed if the heap grows beyond current capacity.",
      code: "",
      answer: "B",
      image: heap,
    },
    {
      id: 76,
      topic: "Chapter 9: Priority Queues",
      title: "⭐ Heap Array Child Index Formulas",
      question:
        "Consider the diagram below of a heap for a priority queue mapped to an array:\n\nGiven a heap node number and corresponding array index number in the above (0-12 in the figure), which of the following formulas represent the array indices for the left and right child of that node?",
      options: ["A.\t9i; 7i", "B.\t9i; 7i", "C.\t2i+1; 2i+2", "D.\t2i-1; 2i-2"],
      explanation:
        "In array-based heap representation with root at index 0, the left child is at index 2i+1 and the right child is at 2i+2. This arithmetic mapping eliminates the need for explicit pointers.",
      code: "",
      answer: "C",
      image: heap,
    },
    {
      id: 78,
      topic: "Chapter 9: Priority Queues",
      title: "⭐ Heap Property Violations",
      question:
        "Which of the following diagrams representing heaps violates at least one of the two required heap properties?",
      options: [
        "A.\tTree A and Tree B",
        "B.\tTree A and Tree C",
        "C.\tTree B and Tree C",
        "D.\tTree C and Tree D",
      ],
      explanation:
        "Heaps must satisfy two properties: (1) the heap-order property (parent ≤ children for a min-heap), and (2) the structural property (complete binary tree with all levels filled left-to-right). Tree A violates heap-order: node (38,D) has a left child (35,C) where 35 < 38, meaning the parent is larger than its child. Tree C violates the structural property: it is not a complete binary tree because node (55,T) has no children while nodes to its right (like 44,B) do have children, creating a gap in the last level. Trees B and D are valid min-heaps that satisfy both properties.",
      code: "",
      answer: "B",
      image: heapmcq,
    },
    {
      id: 81,
      topic: "Chapter 9: Priority Queues",
      title: "⭐ Heap removeMin Result",
      question:
        "Given the following heap structure representing a priority queue, what is the new root element of the heap after a removeMin (remove next priority element) removes the top element (39, 0) and the readjustment (down-heap bubbling) of the heap is complete?",
      options: ["A.\t(85, G)", "B.\t(1, A)", "C.\t(43, B)", "D.\t(50, A)"],
      explanation:
        "After removing the minimum element from a min-heap, the heap is restructured through down-heap bubbling (percolate down) to maintain the heap-order property. The new root will be the next smallest element in the heap.",
      code: "",
      answer: "C",
      image: priorityheap,
    },
    {
      id: 84,
      topic: "Chapter 9: Priority Queues",
      title: "Up-Heap Bubbling Swaps Count",
      question:
        "Given a min-heap represented as an array, when performing an insert(2, X) operation on the following heap, how many swaps occur during the up-heap bubbling phase?\n\nCurrent heap array: [(4,A), (5,B), (6,C), (15,D), (9,E), (7,F), (20,G)]",
      options: [
        "A.\t0 swaps (the element stays at the end)",
        "B.\t1 swap",
        "C.\t2 swaps",
        "D.\t3 swaps",
      ],
      answer: "D",
      explanation:
        "Inserting (2,X) adds it to index 7 (left child of 15). Up-heap bubbling: 2<15 (swap 1, now at index 3), 2<5 (swap 2, now at index 1), 2<4 (swap 3, now at index 0/root). The new root is (2,X), requiring 3 swaps total.",
      code: "",
      image: "",
    },
    {
      id: 85,
      topic: "Chapter 9: Priority Queues",
      title: "Bottom-Up Heap Construction Advantage",
      question:
        "Which of the following describes the primary advantage of using bottom-up heap construction when building a heap from an existing array of n elements?",
      options: [
        "A.\tIt improves the time complexity from O(n log n) to O(n) for the initial construction.",
        "B.\tIt allows the heap to maintain a fully sorted order like a binary search tree.",
        "C.\tIt eliminates the need for the down-heap bubbling operation during removeMin.",
        "D.\tIt changes the heap from a complete binary tree to a perfectly balanced binary tree.",
      ],
      answer: "A",
      explanation:
        "Bottom-up heap construction builds the heap in O(n) time by starting from the last non-leaf node and heapifying down, rather than inserting n elements individually which would take O(n log n). It does not affect the heap's sorting properties or structure requirements.",
      code: "",
      image: "",
    },
    {
      id: 86,
      topic: "Chapter 9: Priority Queues",
      title: "Down-Heap Bubbling After removeMin",
      question:
        "After performing removeMin() on a min-heap, the last element in the array is moved to the root position. What operation restores the heap-order property?",
      options: [
        "A.\tUp-heap bubbling (percolate up)",
        "B.\tDown-heap bubbling (percolate down)",
        "C.\tLinear probing",
        "D.\tMerge operation",
      ],
      answer: "B",
      explanation:
        "Down-heap bubbling (also called percolate down or sift down) compares the new root with its children and swaps it with the smaller child until the heap-order property (parent ≤ children) is restored. Up-heap bubbling is used during insertion.",
      code: "",
      image: "",
    },
    {
      id: 91,
      topic: "Chapter 9: Priority Queues",
      title: "Priority Queue vs Map Distinction",
      question:
        "Which statement correctly distinguishes a Priority Queue from a Map, given both use key-value pairs?",
      options: [
        "A.\tBoth data structures use keys for exact lookup operations.",
        "B.\tA Priority Queue uses keys as priorities for ordering removal, while a Map uses keys as unique identifiers for retrieval.",
        "C.\tA Map requires O(log n) insertion while a Priority Queue requires O(1) insertion.",
        "D.\tPriority Queues allow duplicate keys, while Maps do not allow any duplicate values.",
      ],
      answer: "B",
      explanation:
        "In a Priority Queue, the key represents priority (min or max), determining removal order. In a Map, the key is an identifier for exact lookup. Maps have O(1) or O(log n) insertion depending on implementation; Priority Queues typically have O(log n) insertion.",
      code: "",
      image: "",
    },
    {
      id: 95,
      topic: "Chapter 9: Priority Queues",
      title: "Java PriorityQueue Implementation Internals",
      question:
        "Which of the following is TRUE about the Java PriorityQueue implementation?",
      options: [
        "A.\tIt uses a linked list structure to store elements.",
        "B.\tIt is backed by an array that represents a binary heap.",
        "C.\tIt maintains elements in fully sorted order at all times.",
        "D.\tIt provides O(n) time complexity for the removeMin operation.",
      ],
      answer: "B",
      explanation:
        "Java's PriorityQueue is implemented as a binary heap backed by an array (or resizable array). It does not maintain fully sorted order (only heap-order), and removeMin operates in O(log n) time, not O(n).",
      code: "",
      image: "",
    },
    {
      id: 149,
      topic: "Chapter 9: Priority Queues",
      title: "🌟PriorityQueue Poll Operation",
      question:
        "Given a Java PriorityQueue containing the elements {5, 1, 3, 2, 4}, if poll() is called twice and the result of the second poll() is printed, what value is output?",
      options: ["A. 1", "B. 2", "C. 3", "D. 5"],
      explanation:
        "Java's PriorityQueue is a min-heap by default. The first poll() removes and returns the smallest element (1). The second poll() then removes and returns the next smallest element (2), which is what gets printed.",
      code: "",
      answer: "B",
      image: "",
    },
  ],
  "Chapter 10: Maps, Hash Tables, and Skip Lists": [
    {
      id: 46,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Map ADT",
      question:
        "Which of the following best describes the Map Abstract Data Type (ADT)?",
      options: [
        "A collection that allows duplicate keys and stores values in sorted order",
        "A searchable collection of key-value entries where each key is unique, supporting search, insert, and delete operations",
        "A collection that only supports sequential access to elements",
        "An ordered list of values without any associated keys",
      ],
      answer: "B",
      explanation:
        "A map models a searchable collection of key-value entries. The critical rule is that multiple entries with the same key are NOT allowed. Common applications include address books and student-record databases where each key (like a student ID) maps to one unique value.",
    },
    {
      id: 47,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Map Implementations",
      question:
        "Which of the following Java Map implementations maintains elements in the order they were inserted?",
      options: ["HashMap", "TreeMap", "LinkedHashMap", "WeakHashMap"],
      answer: "C",
      explanation:
        "Java provides several Map implementations: HashMap offers no ordering guarantee, TreeMap sorts elements by key, LinkedHashMap maintains insertion order, and WeakHashMap uses only weak references to keys. Knowing which to choose depends on whether ordering or performance matters most.",
    },
    {
      id: 48,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Hash Table",
      question:
        "A hash table is designed with array size N = 100 and uses the hash function h(x) = x mod 100. Where would the key 4821 be stored?",
      options: ["Index 48", "Index 21", "Index 82", "Index 4"],
      answer: "B",
      explanation:
        "The hash function h(x) = x mod N maps a key to an integer in the range [0, N-1]. For x = 4821 and N = 100: 4821 mod 100 = 21. This is the array index where that key-value pair would be stored.",
    },
    {
      id: 49,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "HashMap vs TreeMap",
      question:
        "You are building an application that stores time-sequenced financial events and frequently needs to retrieve all events that occurred between two dates. Which Java Map implementation is most appropriate?",
      options: [
        "HashMap, because it provides O(1) lookup time",
        "TreeMap, because it maintains sorted order and supports range queries via the SubMap method",
        "LinkedHashMap, because it preserves insertion order",
        "WeakHashMap, because it automatically removes unused entries",
      ],
      answer: "B",
      explanation:
        "HashMap provides O(1) exact lookups but lacks the ability to find 'nearby' elements, making it unsuitable for range queries. TreeMap is backed by a sorted binary tree structure, supports O(log n) search and insert, and crucially includes a SubMap method that enables efficient retrieval of keys within a given range — exactly what time-sequenced event queries require.",
    },
    {
      id: 50,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Set vs Multimap",
      question:
        "Which of the following statements correctly distinguishes a Set, a Multiset, and a Multimap?",
      options: [
        "A Set allows duplicates; a Multiset does not; a Multimap maps one key to exactly one value",
        "A Set is an unordered collection without duplicates; a Multiset (bag) allows duplicates; a Multimap allows the same key to map to multiple values",
        "A Set and a Multiset are identical; a Multimap is the same as a standard Map",
        "A Multimap cannot be implemented using a standard Map",
      ],
      answer: "B",
      explanation:
        "These three data structures are closely related but distinct. A Set is an unordered collection with no duplicates — its elements are like map keys without values. A Multiset (also called a bag) relaxes the no-duplicate rule. A Multimap extends the map concept by allowing the same key to associate with multiple values, such as a book index where one term maps to many page locations.",
    },
    {
      id: 51,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Hash Table Collision Handling",
      question:
        "Which of the following is NOT a valid strategy for handling collisions in a hash table?",
      options: [
        "Using an alternate hash function",
        "Marking the array element with a collision indicator",
        "Using a bucket array with a secondary container",
        "Increasing the size of the key values being stored",
      ],
      answer: "D",
      explanation:
        "Hash table collisions occur when two keys hash to the same array index. Valid strategies include using alternate hash functions, marking cells with collision indicators, and using bucket arrays (chaining) where each cell holds a secondary container. Increasing key values does not change where keys hash and therefore does not resolve collisions.",
    },
    {
      id: 52,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Generic Merge for Set Operations",
      question:
        "When using the generic merge algorithm on two sorted lists A and B to compute their intersection, which elements are added to the result set S?",
      options: [
        "All elements from both A and B, with duplicates removed",
        "Only elements that appear in A but not in B",
        "Only elements that appear in both A and B (duplicates across lists)",
        "All elements from A followed by all elements from B",
      ],
      answer: "C",
      explanation:
        "The generic merge algorithm processes two sorted lists simultaneously and uses helper methods (aIsLess, bIsLess, bothAreEqual) to decide what to do at each step. For intersection, only the bothAreEqual case copies an element to S, so the result contains only elements present in both lists. For union, all three cases contribute elements but duplicates are excluded. All generic merge set operations run in O(nA + nB) time.",
    },
    {
      id: 64,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "⭐ Hash Table SSN Collision Design",
      question:
        "A programmer is implementing a hash table to store (SSN, Name) entries, where the SSN is a positive integer (Social Security Number). The hash table uses an array of size N=10,000 and a hash function that uses the last four digits of the SSN to determine the index (see figure below).\n\nWhat is the primary implementation challenge the programmer must address with this design?",
      options: [
        "A.\tThe array size of 10,000 exceeds the memory capacity of most modern computers.",
        'B.\tCollisions will frequently occur (multiple SSNs with the same last four digits) and must be managed through separate chaining (a "bucket" array or similar) or linear probing.',
        "C.\tThe hash function will not work for all possible Social Security Numbers.",
        "D.\tThe time complexity of the hash function's calculation grows quadratically (O(n^2)) with the size of the input SSN.",
      ],
      explanation:
        "Using only the last four digits of SSN as a hash function maps all SSNs with the same last four digits to the same bucket, causing frequent collisions. The implementation must handle collisions using chaining or open addressing.",
      code: "",
      answer: "B",
      image: hash,
    },
    {
      id: 66,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "⭐ Hash Function String Length Performance",
      question:
        "A developer implements a hash table to map musical artist names (keys) to their songs (values). For the hash function, the developer chooses to use the length of the artist's name (number of characters) as the hash value. Which of the following best describes the primary performance issue with this implementation?",
      options: [
        "A.\tCalculating the string length is an O(n^2) operation, making the hash function too slow for practical use.",
        "B.\tThe hash table will require excessive memory because string lengths can be arbitrarily large.",
        "C.\tThe implementation will suffer from a high collision rate and poor distribution, causing search time to degrade toward O(n).",
        "D.\tThe hash function is not deterministic, meaning the same artist name could hash to different indices over time.",
      ],
      explanation:
        "Using string length as a hash function maps all names of the same length to the same bucket, causing many collisions and poor distribution. This degrades hash table performance from O(1) to O(n) in the worst case.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 69,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "⭐ Java HashMap Properties",
      question:
        "Which of the following is FALSE about the Java Hashmap implementation (and Hash Tables in general)?",
      options: [
        "A.\tThe Java Hashmap implementation provides generally O(1) access time to lookup a key.",
        "B.\tThe Java Hashmap implementation (and hashmap implementations in general) maintains keys in a sorted order.",
        "C.\tThe Java Hashmap implementation implements the Java Map interface and includes map data type functionality.",
        "D.\tThe Java Hashmap implementation is considred direct-access for keys.",
      ],
      explanation:
        "HashMap does not maintain keys in sorted order; it provides no ordering guarantees. TreeMap is the implementation that maintains sorted order. HashMap provides O(1) average-case lookup and implements the Map interface.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 75,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "⭐ Map Data Structure Properties",
      question:
        "Which statement below about the Map data structure (as described in the book) is NOT true?",
      options: [
        "A.\tA Map is a data type that stores key-value pairs (example: Key is student ID, Value is student name).",
        "B.\tA Map allows multiple values with the same key.",
        "C.\tA Map is typically implemented either as a hash table (supporting direct access and O(1) performance) or as a sorted list (providing near O(log n) performance)",
        'D.\tThe sorted implementation of a Map has the advantage that it can easily support queries for a range of "nearby" values.',
      ],
      explanation:
        "Maps do not allow duplicate keys; each key maps to exactly one value. Attempting to insert a duplicate key typically overwrites the previous value or is rejected, depending on the implementation.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 79,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "⭐ TreeMap Code Output",
      question:
        "Given the following code demonstrating use of a Java Map:\n\nWhat will be the output of the above code?",
      options: [
        "A.\tCher:#15 Believe\nElton John:#11 Candle in the Wind\nElton John:#521 Goodbye Yellow Brick Road\nIrene Cara:#10 Flashdance",
        "B.\tCher:#15 Believe\nElton John:#521 Goodbye Yellow Brick Road\nIrene Cara:#10 Flashdance",
        "C.\tCher:#15 Believe\nIrene Cara:#10 Flashdance",
        "D.\tElton John:#11 Candle in the Wind\nElton John:#521 Goodbye Yellow Brick Road",
      ],
      explanation:
        "TreeMap sorts entries by key in natural order. When 'Elton John' is put twice, the second value overwrites the first. The iteration prints keys in sorted order: Cher, Elton John, Irene Cara.",
      code: `import java.util.Map;
import java.util.TreeMap;

public class TestSongMap {

    public static void main(String[] args) {

        // Create the Map
        Map<String, String> testKeyValuePairs = new TreeMap<>();

        // Add elements to the map
        testKeyValuePairs.put("Elton John", "#11 Candle in the Wind");
        testKeyValuePairs.put("Irene Cara", "#10 Flashdance");
        testKeyValuePairs.put("Cher", "#15 Believe");
        testKeyValuePairs.put("Elton John", "#521 Goodbye Yellow Brick Road");

        // Now print the map
        testKeyValuePairs.forEach((key, value) -> System.out.print(key + ":" + value + "\\n"));
        System.out.println();
    }
}`,
      answer: "B",
      image: "",
    },
    {
      id: 87,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Separate Chaining Disadvantage",
      question:
        "In a hash table using separate chaining to resolve collisions, what is the primary disadvantage compared to using a perfectly uniform hash function with no collisions?",
      options: [
        "A.\tThe table cannot support deletion operations.",
        "B.\tThe worst-case search time degrades to O(n) if all keys hash to the same bucket.",
        "C.\tThe memory usage is reduced to O(1) regardless of the number of elements.",
        "D.\tThe hash function must be recomputed for every insertion.",
      ],
      answer: "B",
      explanation:
        "Separate chaining uses linked lists (or other structures) at each bucket. If all keys collide (worst case), the hash table degenerates into a linked list with O(n) search time. Deletion is supported, memory is O(n), and hash functions are not recomputed per insertion.",
      code: "",
      image: "",
    },
    {
      id: 88,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Linear Probing Definition",
      question:
        "Which collision resolution strategy stores colliding elements in the same array at the next available slot, rather than using a secondary data structure?",
      options: [
        "A.\tSeparate chaining",
        "B.\tLinear probing",
        "C.\tDouble hashing",
        "D.\tBucket hashing",
      ],
      answer: "B",
      explanation:
        "Linear probing is an open addressing technique where collisions are resolved by sequentially searching for the next empty slot in the array. Separate chaining uses secondary containers (like linked lists) at each bucket. Double hashing uses a second hash function to determine the probe sequence.",
      code: "",
      image: "",
    },
    {
      id: 89,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Generic Merge Intersection Condition",
      question:
        "When using the generic merge algorithm to compute the intersection of two sorted lists A and B, under what condition is an element added to the result set?",
      options: [
        "A.\tWhen the current element in A is less than the current element in B",
        "B.\tWhen the current element in B is less than the current element in A",
        "C.\tWhen the current elements in A and B are equal",
        "D.\tWhen both lists have been exhausted",
      ],
      answer: "C",
      explanation:
        "The generic merge algorithm uses helper methods (aIsLess, bIsLess, bothAreEqual). For intersection, only the bothAreEqual case copies an element to the result set S, meaning elements appear in both lists. If a < b, we advance A; if b < a, we advance B.",
      code: "",
      image: "",
    },
    {
      id: 90,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Generic Merge Time Complexity",
      question:
        "What is the time complexity of the generic merge algorithm when merging two sorted lists of sizes n_A and n_B?",
      options: [
        "A.\tO(n_A · n_B)",
        "B.\tO(n_A + n_B)",
        "C.\tO(log n_A + log n_B)",
        "D.\tO(n_A² + n_B²)",
      ],
      answer: "B",
      explanation:
        "Generic merge processes each element of both lists exactly once using a linear scan, similar to the merge step in merge sort. This results in linear O(n_A + n_B) time complexity, provided the helper methods run in O(1) time.",
      code: "",
      image: "",
    },
    {
      id: 94,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "TreeMap vs HashMap for Range Queries",
      question:
        "For which scenario is a TreeMap preferred over a HashMap in Java?",
      options: [
        "A.\tWhen you need O(1) lookup time for exact key matches.",
        "B.\tWhen you need to retrieve all entries with keys in a specific range (e.g., all dates between January and March).",
        "C.\tWhen you want to allow duplicate keys in the map.",
        "D.\tWhen memory usage must be minimized at all costs.",
      ],
      answer: "B",
      explanation:
        "TreeMap maintains keys in sorted order and supports range queries via the subMap() method. HashMap provides O(1) exact lookups but cannot efficiently find 'nearby' elements. Neither allows duplicate keys; HashMap generally uses less memory than TreeMap.",
      code: "",
      image: "",
    },
    {
      id: 98,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Multiset Definition",
      question:
        "Which of the following correctly describes a Multiset (also known as a Bag)?",
      options: [
        "A.\tA collection that does not allow duplicate elements and maintains sorted order.",
        "B.\tA set-like container that allows duplicate elements.",
        "C.\tA map that associates multiple keys with a single value.",
        "D.\tA priority queue that uses FIFO ordering instead of priority ordering.",
      ],
      answer: "B",
      explanation:
        "A Multiset (or Bag) is a set-like data structure that relaxes the no-duplicates rule, allowing multiple instances of the same element. It does not necessarily maintain sorted order (that's a SortedSet), nor is it a Map or Queue.",
      code: "",
      image: "",
    },
    {
      id: 100,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Compression Function Properties",
      question:
        "Which of the following is FALSE regarding the compression function in hash tables?",
      options: [
        "A.\tIt maps hash codes to valid array indices in the range [0, N-1].",
        "B.\tIt typically uses the modulo operation (h(x) mod N).",
        "C.\tIt guarantees that no two different keys will ever collide.",
        "D.\tIt is necessary because raw hash codes can be any integer value.",
      ],
      answer: "C",
      explanation:
        "The compression function (e.g., h(x) mod N) maps arbitrary hash codes to array indices but does NOT prevent collisions. Collisions occur when different keys map to the same index, which must be handled separately via chaining or probing.",
      code: "",
      image: "",
    },
    {
      id: 101,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Multimap Put Behavior",
      question:
        'Given a Multimap implemented as Map<K, List<V>>, where key "CS" maps to ["211", "212", "220"] and key "MATH" maps to ["201"], what happens when you execute put("CS", "240") if the implementation overwrites existing values?',
      options: [
        'A.\tThe key "CS" now maps to ["211", "212", "220", "240"].',
        'B.\tThe key "CS" now maps to ["240"], replacing the previous list.',
        "C.\tThe operation throws an IllegalArgumentException.",
        'D.\tA new key "CS_2" is created to store "240".',
      ],
      answer: "B",
      explanation:
        "In a standard Map implementation (like Java's HashMap), put() overwrites the existing value associated with the key. If the Multimap is implemented as Map<K, List<V>> and put() is called directly on the map (not an add() method), it replaces the entire list value, not appends to it.",
      code: "",
      image: "",
    },
    {
      id: 134,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Bad Hash Function Identification",
      question:
        "A programmer implements a hash table for storing employee records keyed by 9-digit employee ID. Which hash function would likely cause the MOST collisions?",
      options: [
        "A. h(id) = id mod 1000 (using the last 3 digits)",
        "B. h(id) = (id / 1000000) mod 1000 (using the middle 3 digits)",
        "C. h(id) = id.hashCode() mod 1000",
        "D. h(id) = (id * 31 + 17) mod 1000",
      ],
      answer: "A",
      explanation:
        "Using only the last 3 digits (id mod 1000) often causes clustering if IDs are assigned sequentially.",
      code: "",
      image: "",
    },
    {
      id: 135,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "TreeMap vs HashMap Capabilities",
      question:
        "An application needs to retrieve all employee records with IDs between 10000 and 20000. Which Java Map implementation is appropriate and why?",
      options: [
        "A. HashMap, because it provides O(1) lookup for individual keys",
        "B. TreeMap, because it maintains sorted order and supports range queries via subMap()",
        "C. LinkedHashMap, because it preserves insertion order",
        "D. WeakHashMap, because it automatically removes unused entries",
      ],
      answer: "B",
      explanation:
        "TreeMap is backed by a Red-Black Tree that maintains sorted order, supporting range queries via subMap() in O(log n + k) time.",
      code: "",
      image: "",
    },
    {
      id: 136,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Java Map Duplicate Key Rule",
      question:
        "What happens when you call put(key, value) on a Java HashMap or TreeMap where the key already exists?",
      options: [
        "A. The new value is added to a list of values for that key",
        "B. The existing value is replaced by the new value, and the old value is returned",
        "C. An IllegalArgumentException is thrown",
        "D. A new entry is created with a modified key",
      ],
      answer: "B",
      explanation:
        "Java's Map interface replaces the old value with the new one when a key already exists.",
      code: "",
      image: "",
    },
    {
      id: 137,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Hash Function Distribution Importance",
      question:
        "Why is uniform distribution critical for hash function performance?",
      options: [
        "A. It reduces the memory required for the hash table",
        "B. It minimizes collisions, keeping operations near O(1) rather than degrading toward O(n)",
        "C. It ensures keys are stored in sorted order",
        "D. It enables the hash table to support range queries",
      ],
      answer: "B",
      explanation:
        "Uniform distribution minimizes collisions, keeping search, insert, and delete at O(1) average time.",
      code: "",
      image: "",
    },
    {
      id: 102,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Skip List Structure S0 vs Sh",
      question:
        "In a skip list with height h, which of the following correctly describes the contents of S0 (the base level) versus Sh (the top level)?",
      options: [
        "A. S0 contains only the special ±∞ sentinels, while Sh contains all keys in sorted order",
        "B. S0 contains all keys in sorted order, while Sh contains only the special ±∞ sentinels",
        "C. Both S0 and Sh contain all keys in sorted order",
        "D. S0 contains all keys in unsorted order, while Sh contains only ±∞ sentinels",
      ],
      answer: "B",
      explanation:
        "S0 is the base level containing all keys in sorted order. Sh contains only the special ±∞ sentinels used as boundary markers.",
      code: "",
      image: "",
    },
    {
      id: 103,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Skip List Time Complexity",
      question:
        "What is the expected time complexity for search, insert, and delete operations in a skip list with n elements?",
      options: [
        "A. O(n) in all cases",
        "B. O(log n) expected, O(n) worst case",
        "C. O(log n) expected and worst case",
        "D. O(n log n) expected",
      ],
      answer: "B",
      explanation:
        "Skip lists provide O(log n) expected time but can degrade to O(n) worst-case if randomization is poor.",
      code: "",
      image: "",
    },
    {
      id: 104,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Skip List Tradeoffs",
      question:
        "Which of the following is a primary disadvantage of skip lists compared to red-black trees?",
      options: [
        "A. Skip lists have O(n) search time while red-black trees have O(log n)",
        "B. Skip lists are more complex to implement and harder to debug",
        "C. Skip lists are space-inefficient due to storing multiple pointers per node across levels",
        "D. Skip lists cannot support concurrent access while red-black trees can",
      ],
      answer: "C",
      explanation:
        "Skip lists store multiple levels of pointers per node, creating O(n) extra space overhead.",
      code: "",
      image: "",
    },
    {
      id: 105,
      topic: "Chapter 10: Maps, Hash Tables, and Skip Lists",
      title: "Skip List Express Lane Concept",
      question:
        "How does the 'express lane' concept in skip lists improve search performance?",
      options: [
        "A. By storing frequently accessed elements in a separate hash table for O(1) access",
        "B. By creating progressively sparser upper levels that allow skipping over large segments of the list",
        "C. By maintaining a sorted array at the top level for binary search",
        "D. By using a priority queue to always access the minimum element first",
      ],
      answer: "B",
      explanation:
        "Sparser upper levels allow skipping segments of the list during search, similar to an express subway.",
      code: "",
      image: "",
    },
  ],
  "Chapter 11: Search Trees": [
    {
      id: 53,
      topic: "Chapter 11: Search Trees",
      title: "🔆Binary Search Trees",
      question:
        "Which of the following binary trees violates the sorted binary tree property?",
      options: ["A. Tree A", "B. Tree B", "C. Tree C", "D. Tree D"],
      explanation:
        "Tree C places a larger value in a left subtree, violating BST rules.",
      code: "",
      answer: "C",
      image: binarySearchTrees,
    },
    {
      id: 54,
      topic: "Chapter 11: Search Trees",
      title: "🔆BST Maximum Traversal",
      question:
        "What is the HIGHEST number of nodes traversed to find a value in the pictured tree?",
      options: ["A. 2", "B. 3", "C. 6", "D. 9"],
      explanation: "Worst case is the depth of the tree, which is 6.",
      code: "",
      answer: "C",
      image: bstMaxTraversal,
    },
    {
      id: 55,
      topic: "Chapter 11: Search Trees",
      title: "🔆Node Insertion",
      question:
        "Where would a new key with a value of 77 be added in the provided BST?",
      options: [
        "A. As the left child of node 80.",
        "B. As the right child of node 97.",
        "C. As the right child of node 54",
        "D. As the left child of node 76.",
      ],
      explanation: "Following BST logic, 77 falls to the left of 80.",
      code: "",
      answer: "A",
      image: bstMaxTraversal,
    },
    {
      id: 56,
      topic: "Chapter 11: Search Trees",
      title: "Binary Search Tree Nodes",
      question:
        "A BST is initialized with 12 distinct keys. How many nodes will the tree have?",
      options: ["A. 16", "B. 20", "C. 12", "D. 10"],
      explanation: "Every distinct key in a BST gets its own node.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 57,
      topic: "Chapter 11: Search Trees",
      title: "Building a BST from Sorted Array",
      question:
        "In the array [2, 5, 11, 13, 17, 23, 29], which element becomes the root of a balanced BST?",
      options: ["A. 2", "B. 11", "C. 13", "D. 17"],
      explanation: "13 is the middle element, ensuring optimal balance.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 92,
      topic: "Chapter 11: Search Trees",
      title: "BST vs Heap for Range Queries",
      question:
        "Why is a Binary Search Tree (BST) preferred over a Binary Heap when the application requires finding all elements within a specific range (e.g., all values between 50 and 100)?",
      options: [
        "A.\tBSTs guarantee O(1) access to the minimum element.",
        "B.\tBSTs maintain a total ordering that supports efficient range queries, while heaps only maintain partial ordering (parent-child).",
        "C.\tHeaps do not support the removeMin operation.",
        "D.\tBSTs use less memory than heaps for the same number of elements.",
      ],
      answer: "B",
      explanation:
        "BSTs maintain a total ordering (left < root < right), allowing efficient in-order traversal and range queries (e.g., using subMap). Heaps only guarantee heap-order (parent ≤ children), not ordering between siblings or branches, making range queries inefficient.",
      code: "",
      image: "",
    },
    {
      id: 118,
      topic: "Chapter 11: Search Trees",
      title: "BST Deletion Leaf Node",
      question:
        "In a Binary Search Tree, what is the correct procedure for deleting a leaf node (a node with no children)?",
      options: [
        "A. Replace it with its in-order successor",
        "B. Simply remove it by setting its parent's corresponding child reference to null",
        "C. Replace it with its in-order predecessor",
        "D. Perform a rotation to rebalance the tree",
      ],
      answer: "B",
      explanation:
        "Removing a leaf is done by setting the parent's reference to null.",
      code: "",
      image: "",
    },
    {
      id: 119,
      topic: "Chapter 11: Search Trees",
      title: "BST Deletion One Child",
      question:
        "When deleting a BST node with exactly one child, what is the correct approach?",
      options: [
        "A. Replace the node with its in-order successor and delete the successor",
        "B. Replace the node with its child, effectively bypassing the deleted node",
        "C. Perform a trinode restructuring to restore balance",
        "D. Set the node to null and leave the child disconnected",
      ],
      answer: "B",
      explanation:
        "Bypass the deleted node by setting the parent's reference directly to the node's child.",
      code: "",
      image: "",
    },
    {
      id: 120,
      topic: "Chapter 11: Search Trees",
      title: "BST Deletion Two Children Successor",
      question:
        "When deleting a BST node with two children, where does the replacement node come from?",
      options: [
        "A. The root of the left subtree (maximum value in left subtree)",
        "B. The root of the right subtree (minimum value in right subtree, the in-order successor)",
        "C. The parent of the node being deleted",
        "D. A newly created node with the average value of the two children",
      ],
      answer: "B",
      explanation:
        "The node is replaced by its in-order successor—the smallest value in the right subtree.",
      code: "",
      image: "",
    },
    {
      id: 121,
      topic: "Chapter 11: Search Trees",
      title: "BST Deletion Trace Through",
      question:
        "Consider a BST with root 50, left child 30 (with right child 40), and right child 70. If we delete 50, which node becomes the new root?",
      options: [
        "A. 30, because it is the left child",
        "B. 40, because it is the in-order predecessor (maximum of left subtree)",
        "C. 70, because it is the right child",
        "D. 60, because it would be the average of 30 and 70",
      ],
      answer: "B",
      explanation:
        "The in-order predecessor (the maximum of the left subtree) is 40, which replaces 50 as the new root.",
      code: "",
      image: "",
    },
    {
      id: 122,
      topic: "Chapter 11: Search Trees",
      title: "Single vs Double Rotation",
      question:
        "When performing trinode restructuring in an AVL tree, how do you determine whether to use a single rotation or a double rotation?",
      options: [
        "A. Single rotation when the imbalance is on the outer grandchild, double rotation when on the inner grandchild",
        "B. Always use double rotation for safety",
        "C. Single rotation when the tree height exceeds log n, double rotation otherwise",
        "D. Use single rotation for insertion, double rotation for deletion",
      ],
      answer: "A",
      explanation:
        "Straight line (outer) patterns use single rotations; zigzag (inner) patterns use double rotations.",
      code: "",
      image: "",
    },
    {
      id: 123,
      topic: "Chapter 11: Search Trees",
      title: "Rotation Purpose",
      question:
        "What is the primary purpose of trinode restructuring (tree rotations) in balanced BSTs?",
      options: [
        "A. To sort the tree elements in ascending order",
        "B. To reduce the height of an imbalanced subtree while maintaining the BST ordering property",
        "C. To delete nodes more efficiently",
        "D. To convert the tree into a linked list",
      ],
      answer: "B",
      explanation:
        "Rotations restore O(log n) height while preserving BST properties.",
      code: "",
      image: "",
    },
    {
      id: 124,
      topic: "Chapter 11: Search Trees",
      title: "Rotation Type Identification",
      question:
        "In an AVL tree, node A has balance factor +2 (left-heavy), and its left child B has balance factor +1 (also left-heavy). Which rotation type is needed?",
      options: [
        "A. Single right rotation at A",
        "B. Single left rotation at A",
        "C. Double rotation: left at B, then right at A",
        "D. No rotation needed, the tree is balanced",
      ],
      answer: "A",
      explanation:
        "A left-left (LL) straight pattern (+2, +1) requires a single right rotation at node A.",
      code: "",
      image: "",
    },
    {
      id: 125,
      topic: "Chapter 11: Search Trees",
      title: "Restructuring Performance Impact",
      question:
        "How does trinode restructuring improve search performance in a BST that has become unbalanced?",
      options: [
        "A. It changes the tree to a hash table for O(1) lookups",
        "B. It reduces the tree height from potentially O(n) worst case toward O(log n)",
        "C. It sorts all elements to enable binary search on an array",
        "D. It adds extra pointers to skip over nodes",
      ],
      answer: "B",
      explanation:
        "Restructuring ensures search examines at most log n nodes rather than O(n) nodes.",
      code: "",
      image: "",
    },
    {
      id: 126,
      topic: "Chapter 11: Search Trees",
      title: "Red-Black Tree Properties",
      question:
        "Which of the following is NOT a required property of Red-Black Trees?",
      options: [
        "A. Every node is either red or black",
        "B. The root is always black",
        "C. All leaves (NIL/null) are black",
        "D. Every red node must have at least one red child",
      ],
      answer: "D",
      explanation:
        "Red nodes must have black children (no double-red property).",
      code: "",
      image: "",
    },
    {
      id: 127,
      topic: "Chapter 11: Search Trees",
      title: "Red-Black Tree Uncle Color Decision",
      question:
        "During Red-Black Tree insertion, a double-red violation occurs (new red node has red parent). The uncle of the new node is black. What is the correct fix?",
      options: [
        "A. Recolor the parent and uncle to black, grandparent to red, and propagate upward",
        "B. Perform a restructure (rotation) at the grandparent, then recolor appropriately",
        "C. Change the new node to black and stop",
        "D. Delete the new node and reinsert it",
      ],
      answer: "B",
      explanation:
        "A black uncle requires a physical restructuring (rotation) at the grandparent node.",
      code: "",
      image: "",
    },
    {
      id: 128,
      topic: "Chapter 11: Search Trees",
      title: "Red-Black Tree Recoloring Propagation",
      question:
        "In Red-Black Tree insertion, when does a double-red fix require propagating the fix upward to the grandparent?",
      options: [
        "A. When the uncle is black, requiring a restructure",
        "B. When the uncle is red, requiring recoloring that may create a new double-red at the grandparent",
        "C. When the new node is the root",
        "D. When the tree height exceeds log n",
      ],
      answer: "B",
      explanation:
        "Recoloring when the uncle is red can create a new double-red at the grandparent level.",
      code: "",
      image: "",
    },
    {
      id: 129,
      topic: "Chapter 11: Search Trees",
      title: "Maximum Restructures Needed",
      question:
        "What is the maximum number of restructure operations needed to rebalance a Red-Black Tree after a single insertion?",
      options: [
        "A. O(log n) restructures may be needed in the worst case",
        "B. At most 1 restructure is ever needed",
        "C. Up to 2 restructures for a double rotation case",
        "D. No restructures are needed, only recoloring",
      ],
      answer: "B",
      explanation:
        "Red-Black Trees require at most one restructure per insertion.",
      code: "",
      image: "",
    },
    {
      id: 145,
      topic: "Chapter 11: Search Trees",
      title: "🔆BST Node Count from Sequential Keys",
      question:
        'The following keys are to be initialized in a new binary search tree: (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12). How many nodes will the resulting binary search tree have (don\'t count "empty" leaves)?',
      options: ["A. 16", "B. 20", "C. 12", "D. 10"],
      explanation:
        "A BST contains exactly one node per distinct key. With 12 distinct keys inserted, the tree will always have exactly 12 nodes regardless of insertion order or tree shape.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 150,
      topic: "Chapter 11: Search Trees",
      title: "🌟Red-Black Tree Double Red Fix",
      question:
        "In a Red-Black Tree, when a 'double red' violation occurs (a red node has a red parent), which of the following correctly describes how it is resolved?",
      options: [
        "A. Always perform a rotation at the grandparent node.",
        "B. Always recolor the parent and grandparent nodes.",
        "C. If the uncle is red, recolor; if the uncle is black, restructure (rotate).",
        "D. Remove the red node and reinsert it as a black node.",
      ],
      explanation:
        "A double red violation is resolved based on the uncle node's color. If the uncle is red, recolor the parent, uncle, and grandparent. If the uncle is black, perform a trinode restructure (rotation) and recolor appropriately.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 151,
      topic: "Chapter 11: Search Trees",
      title: "🌟Red-Black Tree Primary Purpose",
      question: "What is the primary purpose of a Red-Black Tree?",
      options: [
        "A. To allow duplicate keys to be stored efficiently.",
        "B. To guarantee O(log n) worst-case time for search, insertion, and deletion by maintaining approximate balance.",
        "C. To sort elements in O(n) time using tree traversal.",
        "D. To store key-value pairs with O(1) average lookup time.",
      ],
      explanation:
        "A Red-Black Tree is a self-balancing BST that uses color properties to ensure the tree remains approximately balanced, guaranteeing O(log n) worst-case performance for search, insertion, and deletion.",
      code: "",
      answer: "B",
      image: "",
    },
  ],
  "Chapter 12: Sorting and Selection": [
    {
      id: 58,
      topic: "Chapter 12: Sorting and Selection",
      title: "🌟Insertion Sort",
      question:
        "In [B, C, A, D, E], how many characters shift right when 'A' is processed by insertion sort?",
      options: ["A. 0", "B. 1", "C. 2", "D. 3"],
      explanation:
        "Both B and C must shift right to accommodate A at the front.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 59,
      topic: "Chapter 12: Sorting and Selection",
      title: "🔅Merge Sort",
      question:
        "What is the sequence immediately BEFORE the final merge in Merge-sort for: 55 21 89 5 3 34 13 8?",
      options: [
        "A. 55 21 89 5 3 34 13 8",
        "B. 5 21 55 89 3 8 13 34",
        "C. 5 12 55 89 3 8 31 34",
        "D. 3 5 21 55 88 13 34 89",
      ],
      explanation:
        "The two sorted halves are merged last: [5 21 55 89] and [3 8 13 34].",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 60,
      topic: "Chapter 12: Sorting and Selection",
      title: "Merge Sort Application",
      question: "🔅Which of the following is FALSE about Merge-sort?",
      options: [
        "A. It divides the array recursively.",
        "B. Worst-case complexity is O(n log n).",
        "C. It is an in-place sorting algorithm.",
        "D. It is a stable sort.",
      ],
      explanation:
        "Merge-sort is NOT in-place; it requires O(n) auxiliary space.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 67,
      topic: "Chapter 12: Sorting and Selection",
      title: "⭐ Insertion Sort Performance Characteristics",
      question:
        "For Insertion Sort (code provided below):\n\nWhich of the following statements about Insertion Sort is FALSE?",
      options: [
        "A.\tIt achieves linear time complexity (O(n)) only if the input data is already fully sorted.",
        'B.\tIts overall runtime performance is always the same regardless of the initial order or "sortedness" of the input data.',
        "C.\tIt has an average-case time complexity of O(n^2).",
        "D.\tIt exhibits O(n^2) time complexity when the input data is in reverse-sorted order (worst-case).",
      ],
      explanation:
        "Insertion sort performance varies significantly based on input sortedness: O(n) for already sorted, O(n²) for reverse sorted, and O(n²) average case. Statement B is false because the runtime depends heavily on the initial order.",
      code: `/** Insertion-sort of an array of characters into nondecreasing order */
public static void insertionSort(char[] data) {
    int n = data.length;
    for (int k=1; k < n; k++) {                   // begin with second character
        char cur = data[k];              
        // time to insert cur=data[k]
        int j = k;                                // find correct index j for cur
        while (j > 0 && data[j-1] > cur) {        // thus, data[j-1] must go after cur
            data[j] = data[j-1];                   // slide data[j-1] rightward
            j--;                                  // and consider previous j for cur
        }
        data[j] = cur;   
        // this is the proper place for cur
    }
}`,
      answer: "B",
      image: "",
    },
    {
      id: 70,
      topic: "Chapter 12: Sorting and Selection",
      title: "⭐ Insertion Sort Shift Count",
      question:
        "When insertion-sort is executed on the sequence\n[B, C, A, D, E]\nhow many characters are shifted rightward when A is the current character being processed?",
      options: ["A.\t0", "B.\t1", "C.\t2", "D.\t3"],
      explanation:
        "When processing 'A', both 'B' and 'C' must shift one position to the right to make space for 'A' at the beginning of the sorted portion.",
      code: "",
      answer: "C",
      image: "",
    },
    {
      id: 80,
      topic: "Chapter 12: Sorting and Selection",
      title: "⭐ Merge-Sort Time Complexity",
      question:
        "Which of the following best describes the time complexity of the Merge-Sort algorithm?",
      options: [
        "A.\tMerge-sort time complexity is O(n^2).",
        "B.\tMerge-sort time complexity is O(n log n).",
        "C.\tMerge-sort time complexity is O(n^3) (cubic).",
        "D.\tMerge-sort time complexity is O(n).",
      ],
      explanation:
        "Merge-sort divides the array in half recursively (log n levels) and merges each level in O(n) time, resulting in O(n log n) time complexity in all cases.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 93,
      topic: "Chapter 12: Sorting and Selection",
      title: "Sorting Algorithm Selection Criteria",
      question:
        "You need to sort a dataset of 50,000 integers that is already nearly sorted (only a few elements are out of place). Memory is constrained and you cannot allocate significant additional space. Which algorithm is most appropriate?",
      options: [
        "A.\tMerge Sort, because it is O(n log n) in all cases.",
        "B.\tHeap Sort, because it is in-place and O(n log n).",
        "C.\tInsertion Sort, because it achieves O(n) time on nearly sorted data.",
        "D.\tSelection Sort, because it always performs exactly n² comparisons regardless of input order.",
      ],
      answer: "C",
      explanation:
        "For small to medium datasets (< 1K to 50K) that are nearly sorted, Insertion Sort performs in O(n) time with minimal shifts. Heap Sort is better for larger datasets (1K–1M) where the data is not nearly sorted. Merge Sort requires O(n) extra space.",
      code: "",
      image: "",
    },
    {
      id: 106,
      topic: "Chapter 12: Sorting and Selection",
      title: "Quick Sort Partitioning",
      question:
        "Which of the following best describes the partitioning step in Quick Sort?",
      options: [
        "A. Dividing the array into two equal halves recursively like Merge Sort",
        "B. Rearranging elements so all values less than a pivot are on its left and all greater values are on its right",
        "C. Merging two sorted subarrays into a single sorted array",
        "D. Inserting each element into its correct position in a growing sorted portion",
      ],
      answer: "B",
      explanation:
        "Partitioning places the pivot in its final position with smaller elements on the left and larger on the right.",
      code: "",
      image: "",
    },
    {
      id: 107,
      topic: "Chapter 12: Sorting and Selection",
      title: "Quick Sort Worst Case",
      question:
        "When does Quick Sort exhibit O(n²) worst-case time complexity?",
      options: [
        "A. When the input array is already sorted and the pivot is always chosen as the first element",
        "B. When the input array contains all duplicate elements",
        "C. When the input array is in random order",
        "D. When the pivot is always chosen as the median element",
      ],
      answer: "A",
      explanation:
        "O(n²) occurs when partitions are highly unbalanced, such as using the first element as a pivot on a sorted array.",
      code: "",
      image: "",
    },
    {
      id: 108,
      topic: "Chapter 12: Sorting and Selection",
      title: "Sorting Algorithm Tradeoffs Comparison",
      question:
        "A developer must sort a large dataset of 100,000 random integers with limited memory. Which algorithm choice is most appropriate and why?",
      options: [
        "A. Merge Sort, because it guarantees O(n log n) worst-case and is stable",
        "B. Quick Sort, because it is in-place with O(log n) stack space and averages O(n log n)",
        "C. Insertion Sort, because it achieves O(n) on nearly sorted data",
        "D. Selection Sort, because it always performs exactly n² comparisons",
      ],
      answer: "B",
      explanation:
        "Quick Sort is preferred for large datasets with memory limits because it sorts in-place.",
      code: "",
      image: "",
    },
    {
      id: 109,
      topic: "Chapter 12: Sorting and Selection",
      title: "Quick Sort vs Merge Sort Memory",
      question:
        "Which statement correctly compares the space complexity of Quick Sort and Merge Sort?",
      options: [
        "A. Both require O(n) auxiliary space for temporary arrays",
        "B. Quick Sort requires O(n) auxiliary space while Merge Sort uses O(log n) stack space",
        "C. Merge Sort requires O(n) auxiliary space while Quick Sort uses O(log n) stack space",
        "D. Both are in-place sorts requiring only O(1) extra space",
      ],
      answer: "C",
      explanation:
        "Merge Sort needs O(n) space for temporary arrays; Quick Sort needs only O(log n) stack space.",
      code: "",
      image: "",
    },
    {
      id: 110,
      topic: "Chapter 12: Sorting and Selection",
      title: "Merge Sort Consistency",
      question:
        "Why is Merge Sort described as having consistent O(n log n) performance across best, average, and worst cases?",
      options: [
        "A. Because it always performs exactly n log n comparisons regardless of input order",
        "B. Because the divide-and-conquer approach always splits the array in half, creating log n levels with O(n) work per level",
        "C. Because it uses a priority queue to ensure balanced processing",
        "D. Because it detects nearly sorted input and switches to Insertion Sort automatically",
      ],
      answer: "B",
      explanation:
        "Merge Sort consistently splits the array in half, leading to log n levels of O(n) work.",
      code: "",
      image: "",
    },
    {
      id: 111,
      topic: "Chapter 12: Sorting and Selection",
      title: "Selection Sort Consistency",
      question:
        "Why does Selection Sort always run in O(n²) time regardless of whether the input is sorted, reverse sorted, or random?",
      options: [
        "A. Because it always scans the entire unsorted partition to find the minimum element",
        "B. Because it performs swaps even when elements are already in correct position",
        "C. Because it uses nested loops where the inner loop always runs n times",
        "D. Because it cannot detect when the array becomes sorted early",
      ],
      answer: "A",
      explanation:
        "Selection Sort must scan the entire unsorted partition to find the minimum for each position.",
      code: "",
      image: "",
    },
    {
      id: 112,
      topic: "Chapter 12: Sorting and Selection",
      title: "Nearly Sorted Data Performance",
      question:
        "Which sorting algorithm degrades the LEAST when processing nearly sorted data (where only a few elements are out of place)?",
      options: [
        "A. Selection Sort, because it always performs the same number of comparisons",
        "B. Insertion Sort, because it makes minimal shifts when elements are nearly in correct position",
        "C. Merge Sort, because it divides the array regardless of sortedness",
        "D. Quick Sort, because random pivots handle nearly sorted data efficiently",
      ],
      answer: "B",
      explanation:
        "Insertion Sort approaches O(n) time on nearly sorted data by reducing shifts.",
      code: "",
      image: "",
    },
    {
      id: 113,
      topic: "Chapter 12: Sorting and Selection",
      title: "Code Reading Loop Pattern",
      question:
        "Consider the following sorting method. What is its time complexity?\n\npublic void mysterySort(int[] arr) {\n    int n = arr.length;\n    for (int i = 0; i < n - 1; i++) {\n        int minIdx = i;\n        for (int j = i + 1; j < n; j++) {\n            if (arr[j] < arr[minIdx]) {\n                minIdx = j;\n            }\n        }\n        int temp = arr[i];\n        arr[i] = arr[minIdx];\n        arr[minIdx] = temp;\n    }\n}",
      options: [
        "A. O(n) because it finds the minimum efficiently",
        "B. O(n log n) because it divides the problem like Merge Sort",
        "C. O(n²) because the nested loops result in n(n-1)/2 comparisons",
        "D. O(log n) because it uses a binary search approach",
      ],
      answer: "C",
      explanation:
        "This is Selection Sort, where nested loops result in n(n-1)/2 comparisons.",
      code: "",
      image: "",
    },
  ],
  "Chapter 13: Text Processing": [
    {
      id: 61,
      topic: "Chapter 13: Text Processing",
      title: "CSV vs JSON",
      question:
        "When would you choose to maintain data in CSV files instead of JSON files?",
      options: [
        "A. When you need to represent data with nested structures like lists of users with addresses.",
        "B. When you need to represent simple, tabular data that requires minimal overhead and spreadsheet compatibility.",
        "C. When your data contains complex objects and diverse data types.",
        "D. When you need to store binary data directly in the file.",
      ],
      explanation:
        "CSV is lightweight and perfect for flat, tabular data, whereas JSON is better for hierarchical data.",
      answer: "B",
    },
    {
      id: 130,
      topic: "Chapter 13: Text Processing",
      title: "Huffman Tree Encoding Derivation",
      question:
        "Consider a Huffman tree where the path to character 'A' is left-left-right (0-0-1) and the path to 'B' is left-right (0-1). What is the encoded bit string for \"AB\"?",
      options: ["A. 00101", "B. 0010", "C. 01001", "D. 00101"],
      answer: "A",
      explanation:
        "'A' = 001 and 'B' = 01. Concatenating them results in 00101.",
      code: "",
      image: "",
    },
    {
      id: 131,
      topic: "Chapter 13: Text Processing",
      title: "Huffman Internal Node Values",
      question:
        "Why does every internal node in a Huffman tree store the sum of frequencies of all characters in its subtree?",
      options: [
        "A. To enable faster tree traversal during encoding",
        "B. Because the Huffman algorithm merges the two lowest-frequency trees by creating a new parent node with frequency equal to the sum of its children",
        "C. To verify that the tree is balanced",
        "D. Because internal nodes represent actual characters with combined frequencies",
      ],
      answer: "B",
      explanation:
        "Huffman repeatedly merges the two lowest-frequency nodes, setting the parent frequency to their sum.",
      code: "",
      image: "",
    },
    {
      id: 132,
      topic: "Chapter 13: Text Processing",
      title: "Huffman Priority Queue Usage",
      question:
        "Why is a priority queue (min-heap) essential for constructing Huffman trees efficiently?",
      options: [
        "A. To sort characters alphabetically",
        "B. To repeatedly and efficiently access and remove the two lowest-frequency nodes for merging",
        "C. To store the final encoded bit strings",
        "D. To enable breadth-first traversal of the tree",
      ],
      answer: "B",
      explanation:
        "Min-heaps allow O(log n) access to the minimum element for merge steps.",
      code: "",
      image: "",
    },
    {
      id: 133,
      topic: "Chapter 13: Text Processing",
      title: "Huffman Prefix-Free Property",
      question:
        "Which property of Huffman trees guarantees that encoded messages can be uniquely decoded without separators between characters?",
      options: [
        "A. The tree is a complete binary tree",
        "B. The tree is a full binary tree where all characters are stored at leaf nodes (prefix-free code)",
        "C. The tree is balanced with height O(log n)",
        "D. The internal nodes store frequency sums",
      ],
      answer: "B",
      explanation:
        "Storing all characters at leaves ensures no code is a prefix of another.",
      code: "",
      image: "",
    },
    {
      id: 147,
      topic: "Chapter 13: Text Processing",
      title: "🌟Huffman Tree Encoding of 'bar'",
      question:
        'Using the Huffman tree shown, what is the binary encoding for the word "bar"?',
      options: [
        "A. 010101111",
        "B. 10110101011",
        "C. 0101111101",
        "D. 11001010011",
      ],
      explanation:
        "In Huffman encoding, each character is assigned a binary code based on its path from the root (left = 0, right = 1). Locate each character (b, a, r) in the tree and trace the path from root to leaf to derive each code, then concatenate them.",
      code: "",
      answer: "B",
      image: huffman,
    },
    {
      id: 148,
      topic: "Chapter 13: Text Processing",
      title: "🌟Huffman Coding FALSE Statement",
      question:
        "Which of the following statements about Huffman coding is NOT true?",
      options: [
        "A. Huffman coding assigns shorter codes to more frequently occurring characters.",
        "B. Huffman coding always produces a unique encoding tree regardless of character frequencies.",
        "C. Huffman coding is a prefix-free encoding scheme.",
        "D. Huffman coding uses a priority queue (min-heap) during tree construction.",
      ],
      explanation:
        "Statement B is false. Huffman coding can produce different valid trees when characters have equal frequencies, meaning the tree is not always unique. All other statements are true properties of Huffman coding.",
      code: "",
      answer: "B",
      image: "",
    },
    {
      id: 161,
      topic: "Chapter 13: Text Processing",
      title: "Trie Prefix Prediction",
      question:
        "Why are tries ideal for autocomplete compared to hash tables?",
      options: [
        "A. Tries store characters in sorted order",
        "B. Tries allow O(L) prefix search where L is prefix length, independent of dictionary size",
        "C. Tries use less memory than hash tables",
        "D. Tries support duplicate keys",
      ],
      explanation:
        "Tries physically map prefix relationships. Searching for a prefix of length L takes O(L) time — same whether the dictionary has 100 or 100 million words. Hash tables cannot efficiently enumerate keys with a given prefix.",
      code: "",
      answer: "B",
      image: "Trie",
    },
    {
      id: 164,
      topic: "Chapter 13: Text Processing",
      title: "Huffman Decoding",
      question:
        "Using the Huffman tree where a=0, b=10, c=110, d=111, decode 110010.",
      options: [
        "A. ad",
        "B. cab",
        "C. ac",
        "D. bd",
      ],
      explanation:
        "Trace the tree: 110=c, 0=a, 10=b. Result: 'cab'. Each code is prefix-free, so decoding is unambiguous.",
      code: "",
      answer: "B",
      image: "huffmancab",
    },
    {
      id: 152,
      topic: "Chapter 11: Search Trees",
      title: "BST Structure for Efficient Search",
      question:
        "Given 8 nodes in a Binary Search Tree, which tree structure provides the most efficient performance for random search operations?",
      options: ["A. Tree A", "B. Tree B", "C. Tree C", "D. Tree D"],
      explanation:
        "A complete balanced binary tree minimizes the height to O(log n), giving the best worst-case search time. Degenerate trees degrade to O(n) for search, equivalent to a linked list.",
      code: "",
      answer: "A",
      image: nodesupport,
    },
    {
      id: 153,
      topic: "Chapter 11: Search Trees",
      title: "🌟Red-Black Tree Insertion Result",
      question:
        "After inserting key 2 into the Red-Black Tree shown, which of the following trees correctly represents the result?",
      options: ["A. Option A", "B. Option B", "C. Option C", "D. Option D"],
      explanation:
        "When inserting into a Red-Black Tree, the new node is initially colored red. If a double-red violation occurs, resolve it by recoloring or restructuring based on the uncle's color, then verify all Red-Black properties are maintained.",
      code: "",
      answer: "C",
      image: rbt,
    },
    {
      id: 159,
      topic: "Chapter 11: Search Trees",
      title: "BST Deletion Two Children",
      question:
        "Deleting node 88 with two internal children from a BST. What is the correct replacement strategy?",
      options: [
        "A. Replace with the minimum from the right subtree",
        "B. Replace with the maximum from the left subtree (predecessor)",
        "C. Delete both children and reconnect",
        "D. Replace with the root of the tree",
      ],
      explanation:
        "For Case 3 (two children), find the predecessor — the maximum key in the left subtree. Move it to the deleted node's position, then promote its subtree. This maintains BST ordering.",
      code: "",
      answer: "B",
      image: "BSTDeleteCase3",
    },
    {
      id: 163,
      topic: "Chapter 11: Search Trees",
      title: "AVL vs Red-Black",
      question:
        "Why might AVL trees be preferred over Red-Black trees in read-heavy applications?",
      options: [
        "A. AVL trees have faster insertions and deletions",
        "B. AVL trees enforce stricter balance, keeping height closer to log₂(n)",
        "C. AVL trees use less memory",
        "D. AVL trees allow duplicate keys",
      ],
      explanation:
        "AVL trees maintain balance factor ≤ 1, resulting in height ~1.44 log n vs Red-Black's ~2 log n. Fewer node traversals per search make AVL faster for lookups, though more rotations are needed for updates.",
      code: "",
      answer: "B",
      image: "",
    },
  ],
  "Chapter 14: Graph Algorithms": [
    {
      id: 155,
      topic: "Chapter 14: Graph Algorithms",
      title: "Dijkstra's Algorithm Priority Queue",
      question:
        "In Dijkstra's algorithm, all vertices are initially added to the priority queue. The source s has distance 0, and all others start at infinity. What happens during each pass?",
      options: [
        "A. The vertex with maximum distance is removed and finalized",
        "B. The vertex with minimum distance estimate is removed and considered final",
        "C. All vertices adjacent to the source are processed simultaneously",
        "D. The queue is emptied and refilled with updated estimates",
      ],
      explanation:
        "Dijkstra's algorithm always extracts the vertex with the smallest distance label from the priority queue. This vertex is then considered 'finalized' — its shortest path from the source is now known.",
      code: "",
      answer: "B",
      image: "DijkstraActivity",
    },
    {
      id: 156,
      topic: "Chapter 14: Graph Algorithms",
      title: "Dijkstra's Relaxation Step",
      question:
        "When a vertex u is finalized in Dijkstra's algorithm, outgoing edges are checked to improve distance estimates. What condition triggers an update to vertex v's estimate?",
      options: [
        "A. D[u] + w(u,v) > D[v]",
        "B. D[u] + w(u,v) < D[v]",
        "C. D[u] < D[v]",
        "D. w(u,v) < D[v]",
      ],
      explanation:
        "The relaxation step updates D[v] only if the path through u is shorter: D[u] + w(u,v) < D[v]. This is the core comparison that finds shorter paths.",
      code: "",
      answer: "B",
      image: "DijkstraExample",
    },
    {
      id: 157,
      topic: "Chapter 14: Graph Algorithms",
      title: "Dijkstra's Termination",
      question:
        "Dijkstra's algorithm ends when the last vertex is removed from the priority queue. In the example graph, why did v's estimate not improve when t was finalized?",
      options: [
        "A. v was already finalized before t",
        "B. The edge from t to v had weight greater than v's current estimate",
        "C. The graph was disconnected",
        "D. Dijkstra's algorithm does not process edges from t",
      ],
      explanation:
        "When t is finalized, the algorithm checks if D[t] + w(t,v) < D[v]. Since v already had a shorter path (through u), no update occurred. The existing path s→u→v was shorter than any path through t.",
      code: "",
      answer: "B",
      image: "DijkstraExample",
    },
    {
      id: 158,
      topic: "Chapter 14: Graph Algorithms",
      title: "Graph Representations",
      question:
        "A flight network has 500 airports and 2,000 routes. Which representation is most space-efficient while allowing O(1) edge lookup?",
      options: [
        "A. Edge list",
        "B. Adjacency matrix (500×500)",
        "C. Adjacency map (hash map of hash maps)",
        "D. Adjacency list with linked lists",
      ],
      explanation:
        "An adjacency map uses O(E) space (2,000 entries) and provides O(1) average-case lookup via hashing. An adjacency matrix wastes space with 250,000 cells for only 2,000 edges.",
      code: "",
      answer: "C",
      image: "graphexample",
    },
  ],
  "Chapter 15: Memory Management and B-Trees": [
    {
      id: 162,
      topic: "Chapter 15: Memory Management and B-Trees",
      title: "B-Tree Purpose",
      question:
        "What is the primary advantage of B-Trees for database indexing?",
      options: [
        "A. They guarantee O(1) insertion",
        "B. They minimize disk I/O by matching node size to disk blocks",
        "C. They use less memory than binary search trees",
        "D. They automatically sort data on insertion",
      ],
      explanation:
        "B-Trees store many keys per node, sized to match disk blocks (e.g., 4KB). This reduces the number of expensive disk reads/writes needed to find a key.",
      code: "",
      answer: "B",
      image: "",
    },
  ],
};
