const questions = [
  // Consolidated MCQs (1 point each)
  {
    type: "mcq",
    question:
      "1. Which one of the following would not be attached to a motherboard?",
    options: {
      a: "Processor",
      b: "Video card",
      c: "RAM",
      d: "FLOP",
    },
    correctAnswer: "d",
    points: 1,
  },
  {
    type: "mcq",
    question:
      '2. The hardware device commonly referred to as the "brain" of the computer is the:',
    options: {
      A: "RAM chip.",
      B: "data input.",
      C: "CPU.",
      D: "secondary storage.",
    },
    correctAnswer: "C", // Consistent with previous (Final Exam) and Quiz 1 Group 3 model answer [cite: 31]
    points: 1,
  },
  {
    type: "mcq",
    question: "3. The CPU is also known as the:",
    options: {
      A: "microprocessor.",
      B: "random access memory.",
      C: "primary storage.",
      D: "microunit.",
    },
    correctAnswer: "A", // Based on Quiz 1 Group 3 model answer [cite: 32]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "4. If a user needs information instantly available to the CPU, it should be stored:",
    options: {
      A: "in the CPU.",
      B: "in RAM.",
      C: "in secondary storage.",
      D: "on a CD.",
    },
    correctAnswer: "B", // Based on Quiz 1 Group 3 model answer [cite: 34]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "5. Type of device in which a paper is held on a rotating drum and lines are drawn with pen movements is classified as:",
    options: {
      A: "Printer",
      B: "Plotter",
      C: "Output device",
      D: "Input device",
    },
    correctAnswer: "B", // Based on Quiz 1 Group 3 model answer [cite: 35]
    points: 1,
  },
  {
    type: "mcq",
    question: "6. What best describes how an inkjet printer prints an image?",
    options: {
      A: "One dot at a time to form a character",
      B: "Spray-painting a character",
      C: "Striking an inked ribbon",
      D: "Dropping ink onto the paper",
    },
    correctAnswer: "D", // Prioritizing general accuracy for inkjet printers, despite conflicting source answers [cite: 36, 48]
    points: 1,
  },
  {
    type: "mcq",
    question: "7. What is another name for a dot-matrix printer?",
    options: {
      A: "Impact printer",
      B: "Page printer",
      C: "Spray printer",
      D: "USB",
    },
    correctAnswer: "A", // Based on Quiz 1 Group 3 model answer [cite: 37]
    points: 1,
  },
  {
    type: "mcq",
    question: "8. Producing output involves:",
    options: {
      A: "accepting information from the outside world.",
      B: "communication with another computer.",
      C: "moving and storing information.",
      D: "communicating information to the outside world.",
    },
    correctAnswer: "D", // Based on Quiz 1 Group 2 model answer [cite: 42]
    points: 1,
  },
  {
    type: "mcq",
    question: "9. The most common input devices include:",
    options: {
      A: "monitors and keyboards.",
      B: "monitors and mice.",
      C: "mice and keyboards.",
      D: "printer and mice.",
    },
    correctAnswer: "C", // Based on Quiz 1 Group 2 model answer [cite: 43]
    points: 1,
  },
  {
    type: "mcq",
    question: "10. RAM is also known as:",
    options: {
      A: "secondary storage.",
      B: "the central processing unit.",
      C: 'the "brain" of the computer.',
      D: "primary storage.",
    },
    correctAnswer: "D", // Based on Quiz 1 Group 2 model answer [cite: 45]
    points: 1,
  },
  {
    type: "mcq",
    question: "11. The groups of wires that transfer data are known as the:",
    options: {
      A: "CPU.",
      B: "system clock.",
      C: "system buses.",
      D: "CMOS.",
    },
    correctAnswer: "C", // Based on Quiz 1 Group 2 model answer [cite: 46]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "12. The permanently etched program in ROM that automatically begins executing the computer's instructions is the:",
    options: {
      A: "BIOS.",
      B: "ROM.",
      C: "CMOS.",
      D: "RAM.",
    },
    correctAnswer: "B", // Based on Quiz 1 Group 2 model answer [cite: 47]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "13. The primary difference between RAM and secondary storage devices is",
    options: {
      A: "The length of time data is stored.",
      B: "RAM is permanent and secondary storage is temporary.",
      C: "RAM accepts input; secondary storage devices do not.",
      D: "The way data is stored to them.",
    },
    correctAnswer: "A", // Based on Quiz 1 Group 1 model answer [cite: 52]
    points: 1,
  },
  {
    type: "mcq",
    question: "14. Storage devices include all of the following EXCEPT:",
    options: {
      A: "a recordable CD.",
      B: "RAM.",
      C: "a hard drive.",
      D: "a DVD drive.",
    },
    correctAnswer: "B", // Based on Quiz 1 Group 1 model answer [cite: 55]
    points: 1,
  },
  {
    type: "mcq",
    question: "15. The input, output, and storage devices are known as:",
    options: {
      A: "peripheral devices.",
      B: "secondary storage devices.",
      C: "firmware.",
      D: "hardware drivers.",
    },
    correctAnswer: "A", // Based on Quiz 1 Group 1 model answer [cite: 56]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "16. Which of the following is defined by the number of dots present in the frame?",
    options: {
      A: "Resolution",
      B: "Depth.",
      C: "Height.",
      D: "None of the above",
    },
    correctAnswer: "A", // Based on Quiz 1 Group 1 model answer [cite: 58]
    points: 1,
  },
  {
    type: "mcq",
    question: "17. Daisy wheel printer is what type of printer?",
    options: {
      A: "Non-impact printer",
      B: "Impact printer",
      C: "Laser",
      D: "Color",
    },
    correctAnswer: "B", // Based on Quiz 1 Group 1 model answer [cite: 59]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "18. On which one of the following output devices is hard copy often displayed?",
    options: {
      A: "Monitor",
      B: "Scanner",
      C: "Printer",
      D: "Keyboard",
    },
    correctAnswer: "C", // Corrected for accuracy, as printers produce hard copies. Source said 'B' [cite: 60]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "19. Peripherals connected to a computer need...... communication links for them with the central processing unit.",
    options: {
      A: "general, connecting",
      B: "special, interfacing",
      C: "good, synchronizing",
      D: "any of the above",
    },
    correctAnswer: "B", // Based on Quiz 2 Group 1 [cite: 81]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "20. The data transfer rate of peripherals is usually .......... the transfer rate of CPU.",
    options: {
      A: "higher than",
      B: "equal to",
      C: "slower than",
      D: "any of the above",
    },
    correctAnswer: "C", // Based on Quiz 2 Group 1 [cite: 82]
    points: 1,
  },
  {
    type: "mcq",
    question: "21. I/O bus consists of",
    options: {
      A: "data lines",
      B: "address lines",
      C: "control lines",
      D: "all above",
    },
    correctAnswer: "D", // General computer knowledge
    points: 1,
  },
  {
    type: "mcq",
    question:
      "22. Due to the differences between central computer and peripherals a ........ of signal values may be needed.",
    options: {
      A: "summation",
      B: "multiplication",
      C: "conversion",
      D: "all above",
    },
    correctAnswer: "C", // Based on Quiz 2 Group 1 [cite: 87]
    points: 1,
  },
  {
    type: "mcq",
    question: "23. The I/O bus from the processor is attached to peripherals",
    options: {
      A: "some, hardware",
      B: "most, interface",
      C: "all, terminals",
      D: "all, interface",
    },
    correctAnswer: "D", // Based on Quiz 2 Group 1 [cite: 87]
    points: 1,
  },
  {
    type: "mcq",
    question: "24. One of the commands referred to as I/O commands is:",
    options: {
      A: "Status command",
      B: "Control command",
      C: "Data output command - Data input command.",
      D: "Any of the above",
    },
    correctAnswer: "D", // Based on Quiz 2 Group 1 [cite: 88]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "25. Input Output Interface provides a method for transferring information between .... storage and ....... I/O devices",
    options: {
      A: "internal, external",
      B: "external, internal",
      C: "CPU, internal",
      D: "CPU, external",
    },
    correctAnswer: "D", // Based on Quiz 2 Group 1 [cite: 92]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "26. The data transfer rate of peripherals is different than the transfer rate of CPU, and consequently mechanism may be needed.",
    options: {
      A: "an equalization",
      B: "a connection",
      C: "an adaptation",
      D: "a synchronization",
    },
    correctAnswer: "C", // Based on Quiz 2 Group 1 [cite: 93]
    points: 1,
  },
  {
    type: "mcq",
    question: "27. Which of the following the main function of the interface?",
    options: {
      a: "Buffering",
      b: "Data",
      c: "Information",
      d: "None of the above",
    },
    correctAnswer: "a", // Based on Assignment 3 [cite: 26]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "28. The external block diagram module generates the different signals:",
    options: {
      a: "Control logic signal",
      b: "Status signal",
      c: "Control signal",
      d: "All the above",
    },
    correctAnswer: "d", // Based on Assignment 2 and 3 [cite: 28]
    points: 1,
  },

  // Consolidated True/False Questions (1 point each)
  {
    type: "true_false",
    question:
      "29. The primary function of I/O peripherals is to facilitate computer-to-computer data transmission",
    correctAnswer: "T", // Based on Quiz 1 & Assignment 1+2 ANS.pdf [cite: 7]
    points: 1,
  },
  {
    type: "true_false",
    question:
      "30. Data codes and formats in the peripherals differ from the word format in the CPU and memory.",
    correctAnswer: "T", // Based on Quiz 2 Group 1 [cite: 83]
    points: 1,
  },
  {
    type: "true_false",
    question: "31. Clock pulses are used for data transfer synchronization.",
    correctAnswer: "T", // Based on Quiz 2 Group 1 [cite: 84]
    points: 1,
  },
  {
    type: "true_false",
    question:
      "32. When the DMA terminates the transfer, it disables the Bus Request (BR) line.",
    correctAnswer: "T", // Based on Quiz 2 Group 1 [cite: 85]
    points: 1,
  },
  {
    type: "true_false",
    question:
      "33. When BG=1, the RD and WR are output lines from the DMA controller to the random access memory to specify the read or write operation of data.",
    correctAnswer: "T", // Based on Quiz 2 Group 1 [cite: 86]
    points: 1,
  },
  {
    type: "true_false",
    question:
      "34. The operating modes of peripherals are different from each other and must be controlled so as not to disturb the operation of other peripherals connected to the CPU.",
    correctAnswer: "T", // Based on Quiz 2 Group 1 [cite: 89]
    points: 1,
  },
  {
    type: "true_false",
    question: "35. Clock pulses are used for data transfer asynchronization.",
    correctAnswer: "F", // Based on Quiz 2 Group 1 [cite: 90]
    points: 1,
  },
  {
    type: "true_false",
    question:
      "36. When BG=0 the RD and WR are input lines allowing the CPU to communicate with the internal DMA registers.",
    correctAnswer: "T", // Based on Quiz 2 Group 1
    points: 1,
  },
  {
    type: "true_false",
    question:
      "37. The typical link between the processor and peripherals is the memory bus.",
    correctAnswer: "F", // Based on Quiz 2 Group 1 [cite: 94]
    points: 1,
  },

  // Consolidated Open-Ended Questions (Not auto-graded)
  {
    type: "text",
    question:
      "38. What is the different category of external device? In addition, give the example for each category?",
  },
  {
    type: "text",
    question:
      "39. Mention the different characteristics of Computer peripherals?",
  },
  {
    type: "text",
    question:
      "40. Why one does not connect peripherals directly to the system bus?",
  },
  {
    type: "text",
    question:
      "41. What does it mean Computer peripherals? List the computer peripheral's function?",
  },
  {
    type: "text",
    question:
      "42. What is the interface? List the main functions of an interface",
  },
  {
    type: "text",
    question: "43. What is an interface? State the Five standard interface.",
  },
  {
    type: "text",
    question:
      "44. Describe what is happening from pushing the computer power switch on till displaying the desktop front page of the operating system.",
  },
  {
    type: "text",
    question:
      "45. What are functions of different input devices? Give examples.",
  },
  {
    type: "text",
    question:
      "46. Inputting/outputting data to/from computer passing with three steps. Explain.",
  },
  {
    type: "text",
    question:
      "47. Draw a general block diagram of a computer system. What is the function of each block?",
  },
  {
    type: "text",
    question:
      "48. Explain the meaning of interfacing. What is the interface between computer and the user?",
  },
  {
    type: "text",
    question:
      "49. Give some examples of output devices. State the function of each device.",
  },
  {
    type: "text",
    question: "50. What is the purpose of I/O communication link?",
  },
  {
    type: "text",
    question:
      "51. Draw a block diagram to illustrate the operation of data transfer from I/O device to CPU",
  },
  {
    type: "text",
    question:
      "52. What are the major differences between Central Computer and Peripherals? How are these differences resolved?",
  },
];

const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-quiz");
const resultContainer = document.getElementById("result-container");
const scoreSpan = document.getElementById("score");
const feedbackDiv = document.getElementById("feedback");
const timerSpan = document.getElementById("timer");

const EXAM_DURATION_MINUTES = 90; // Set the exam duration to 90 minutes
let timeRemaining = EXAM_DURATION_MINUTES * 60;
let timerInterval;
let userAnswers = {}; // To store user's selected answers

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeRemaining--;
    timerSpan.textContent = formatTime(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Time's up! Your exam will be submitted automatically.");
      submitQuiz();
    }
  }, 1000);
}

function loadQuiz() {
  quizContainer.innerHTML = ""; // Clear previous questions
  questions.forEach((q, index) => {
    const questionBlock = document.createElement("div");
    questionBlock.classList.add("question-block");

    const questionText = document.createElement("h3");
    questionText.textContent = q.question;
    questionBlock.appendChild(questionText);

    if (q.type === "mcq") {
      const optionsDiv = document.createElement("div");
      optionsDiv.classList.add("options");
      for (const key in q.options) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question-${index}`;
        input.value = key;
        input.dataset.questionIndex = index; // Store index for easy lookup
        input.addEventListener("change", storeAnswer);

        const optionSpan = document.createElement("span");
        optionSpan.textContent = q.options[key];
        label.appendChild(input);
        label.appendChild(optionSpan);
        optionsDiv.appendChild(label);
      }
      questionBlock.appendChild(optionsDiv);
    } else if (q.type === "true_false") {
      const optionsDiv = document.createElement("div");
      optionsDiv.classList.add("true-false");

      const trueLabel = document.createElement("label");
      const trueInput = document.createElement("input");
      trueInput.type = "radio";
      trueInput.name = `question-${index}`;
      trueInput.value = "T";
      trueInput.dataset.questionIndex = index;
      trueInput.addEventListener("change", storeAnswer);
      trueLabel.appendChild(trueInput);
      trueLabel.appendChild(document.createTextNode("T (True)"));
      optionsDiv.appendChild(trueLabel);

      const falseLabel = document.createElement("label");
      const falseInput = document.createElement("input");
      falseInput.type = "radio";
      falseInput.name = `question-${index}`;
      falseInput.value = "F";
      falseInput.dataset.questionIndex = index;
      falseInput.addEventListener("change", storeAnswer);
      falseLabel.appendChild(falseInput);
      falseLabel.appendChild(document.createTextNode("F (False)"));
      optionsDiv.appendChild(falseLabel);

      questionBlock.appendChild(optionsDiv);
    } else if (q.type === "text") {
      const textarea = document.createElement("textarea");
      textarea.rows = 4;
      textarea.cols = 50;
      textarea.placeholder = "Your answer here...";
      textarea.name = `question-${index}`;
      textarea.dataset.questionIndex = index;
      questionBlock.appendChild(textarea);
    }

    quizContainer.appendChild(questionBlock);
  });
  startTimer();
}

function storeAnswer(event) {
  const questionIndex = event.target.dataset.questionIndex;
  userAnswers[questionIndex] = event.target.value;
}

function submitQuiz() {
  clearInterval(timerInterval); // Stop the timer

  let score = 0;
  feedbackDiv.innerHTML = ""; // Clear previous feedback

  questions.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const questionElement = quizContainer.children[index]; // Get the corresponding question block

    if (q.type === "mcq" || q.type === "true_false") {
      if (userAnswer === q.correctAnswer) {
        score += q.points;
        const feedbackP = document.createElement("p");
        feedbackP.classList.add("correct-answer");
        feedbackP.textContent = `Question ${index + 1}: Correct!`;
        feedbackDiv.appendChild(feedbackP);
      } else {
        const feedbackP = document.createElement("p");
        feedbackP.classList.add("wrong-answer");
        feedbackP.textContent = `Question ${
          index + 1
        }: Incorrect. The correct answer was ${q.correctAnswer}.`;
        feedbackDiv.appendChild(feedbackP);
      }
      // Disable all inputs for this question after submission
      const inputs = questionElement.querySelectorAll('input[type="radio"]');
      inputs.forEach((input) => (input.disabled = true));
    } else if (q.type === "text") {
      const feedbackP = document.createElement("p");
      feedbackP.textContent = `Question ${
        index + 1
      }: This is an open-ended question and requires manual grading.`;
      feedbackDiv.appendChild(feedbackP);
      const textarea = questionElement.querySelector("textarea");
      if (textarea) textarea.disabled = true;
    }
  });

  scoreSpan.textContent = score;
  resultContainer.classList.remove("hidden");
  submitButton.disabled = true; // Prevent multiple submissions
}

submitButton.addEventListener("click", submitQuiz);

// Initialize the quiz when the page loads
document.addEventListener("DOMContentLoaded", loadQuiz);
