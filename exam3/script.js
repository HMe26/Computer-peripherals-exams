const questions = [
  // Question 1: Choose the nearest correct answer (20 points, 1 point each)
  {
    type: "mcq",
    question: "1- Processing information involves:",
    options: {
      A: "accepting information from the outside world.",
      B: "communication with another computer.",
      C: "performing arithmetic or logical operations on information that is input.",
      D: "All of these answers are forms of processing information.",
    },
    correctAnswer: "D",
    points: 1,
  },
  {
    type: "mcq",
    question: "2- The primary output device for computers is a:",
    options: {
      A: "video monitor.",
      B: "printer.",
      C: "keyboard.",
      D: "mouse.",
    },
    correctAnswer: "A",
    points: 1,
  },
  {
    type: "mcq",
    question:
      '3- The hardware device commonly referred to as the "brain" of the computer is the:',
    options: {
      A: "RAM chip.",
      B: "data input.",
      C: "CPU.",
      D: "secondary storage.",
    },
    correctAnswer: "C",
    points: 1,
  },
  {
    type: "mcq",
    question: "4- RAM is also known as:",
    options: {
      A: "secondary storage.",
      B: "the central processing unit.",
      C: 'the "brain" of the computer.',
      D: "primary storage.",
    },
    correctAnswer: "D",
    points: 1,
  },
  {
    type: "mcq",
    question: "5- Storage devices include all of the following EXCEPT:",
    options: {
      A: "a recordable CD.",
      B: "RAM.",
      C: "a hard drive.",
      D: "a DVD drive.",
    },
    correctAnswer: "B",
    points: 1,
  },
  {
    type: "mcq",
    question: "6- The input, output, and storage devices are known as:",
    options: {
      A: "peripheral devices.",
      B: "secondary storage devices.",
      C: "firmware.",
      D: "hardware drivers.",
    },
    correctAnswer: "A",
    points: 1,
  },
  {
    type: "mcq",
    question:
      "7- The permanently etched program in ROM that automatically begins executing the computer's instructions is the:",
    options: {
      A: "BIOS.",
      B: "ROM.",
      C: "CMOS.",
      D: "RAM.",
    },
    correctAnswer: "A",
    points: 1,
  },
  {
    type: "mcq",
    question: "8- The groups of wires that transfer data are known as the:",
    options: {
      A: "CPU.",
      B: "system clock.",
      C: "system buses.",
      D: "CMOS.",
    },
    correctAnswer: "C",
    points: 1,
  },
  {
    type: "mcq",
    question:
      "9- Which of the following is defined by the number of dots present in the frame?",
    options: {
      A: "Resolution",
      B: "Depth",
      C: "Height",
      D: "None of the above",
    },
    correctAnswer: "A",
    points: 1,
  },
  {
    type: "mcq",
    question:
      "10- Type of device in which a paper is held on a rotating drum and lines are drawn with pen movements is classified as:",
    options: {
      A: "Printer",
      B: "Plotter",
      C: "Output device",
      D: "Input device",
    },
    correctAnswer: "B",
    points: 1,
  },
  {
    type: "mcq",
    question: "11- What best describes how an inkjet printer prints an image?",
    options: {
      A: "One dot at a time to form a character",
      B: "Spray-painting a character",
      C: "Striking an inked ribbon",
      D: "Dropping ink onto the paper",
    },
    correctAnswer: "D",
    points: 1,
  },
  {
    type: "mcq",
    question: "12- What is another name for a dot-matrix printer?",
    options: {
      A: "Impact printer",
      B: "Page printer",
      C: "Spray printer",
      D: "USB",
    },
    correctAnswer: "A",
    points: 1,
  },
  {
    type: "mcq",
    question:
      "13- On which one of the following output devices is hard copy often displayed?",
    options: {
      A: "Monitor",
      B: "Scanner",
      C: "Printer",
      D: "Keyboard",
    },
    correctAnswer: "C",
    points: 1,
  },
  {
    type: "mcq",
    question:
      "14- These devices refer to the identity verification of a living person using their physical characteristics.",
    options: {
      A: "RFID",
      B: "MICR",
      C: "Biometric",
      D: "OMR",
    },
    correctAnswer: "C",
    points: 1,
  },
  {
    type: "mcq",
    question:
      "15- This device is used to detect the presence or absence of marks in a specific position.",
    options: {
      A: "RFID",
      B: "MICR",
      C: "Biometric",
      D: "OMR",
    },
    correctAnswer: "D",
    points: 1,
  },
  {
    type: "mcq",
    question: "16- These are intelligent cards with a chip inside it.",
    options: {
      A: "Magnetic stripe cards",
      B: "Dumb card",
      C: "Intelligent card",
      D: "Smart card",
    },
    correctAnswer: "D",
    points: 1,
  },
  {
    type: "mcq",
    question:
      "17- It is an ID system that uses small radio frequency identification devices.",
    options: {
      A: "RFID",
      B: "MICR",
      C: "Biometric",
      D: "OMR",
    },
    correctAnswer: "A",
    points: 1,
  },
  {
    type: "mcq",
    question:
      "18- Input Output Interface provides a method for transferring information between storage and ....... I/O devices",
    options: {
      A: "internal, external",
      B: "external, internal",
      C: "CPU, internal",
      D: "CPU, external",
    },
    correctAnswer: "D",
    points: 1,
  },
  {
    type: "mcq",
    question:
      "19- Due to the differences between central computer and peripherals a ........ of signal values may be needed.",
    options: {
      A: "summation",
      B: "multiplication",
      C: "conversion",
      D: "all above",
    },
    correctAnswer: "C",
    points: 1,
  },
  {
    type: "mcq",
    question:
      "20- The data transfer rate of peripherals is usually ........ the transfer rate of CPU.",
    options: {
      A: "higher than",
      B: "equal to",
      C: "slower than",
      D: "any of the above",
    },
    correctAnswer: "C",
    points: 1,
  },

  // Question 2: For the following statements choose (T) if the statement is True and otherwise choose (F): (5 points, 0.5 points each)
  {
    type: "true_false",
    question:
      "1. Biometric system depends on physical characteristics of a person.",
    correctAnswer: "T",
    points: 0.5,
  },
  {
    type: "true_false",
    question:
      "2. Magnetic cards are intelligent cards which have inbuilt electronics and memory storage.",
    correctAnswer: "F",
    points: 0.5,
  },
  {
    type: "true_false",
    question: "3. The voice recognition system accepts a voice as an input.",
    correctAnswer: "T",
    points: 0.5,
  },
  {
    type: "true_false",
    question: "4. RFID and Bar code reader system are the same.",
    correctAnswer: "F",
    points: 0.5,
  },
  {
    type: "true_false",
    question:
      "5. The typical link between the processor and peripherals is the memory bus.",
    correctAnswer: "T",
    points: 0.5,
  },
  {
    type: "true_false",
    question: "6. Clock pulses are used for data transfer synchronization.",
    correctAnswer: "T",
    points: 0.5,
  },
  {
    type: "true_false",
    question:
      "7. A peripheral can interrupt the CPU executing a program by means of a hardware signal called data request.",
    correctAnswer: "T",
    points: 0.5,
  },
  {
    type: "true_false",
    question:
      "8. When the DMA terminates the transfer, it disables the Bus Request (BR) line.",
    correctAnswer: "T",
    points: 0.5,
  },
  {
    type: "true_false",
    question:
      "9. Data codes and formats in the peripherals are the same as the word format in the CPU and memory.",
    correctAnswer: "F",
    points: 0.5,
  },
  {
    type: "true_false",
    question:
      "10. When BG=0 the RD and WR are input lines allowing the CPU to communicate with the internal DMA registers.",
    correctAnswer: "T",
    points: 0.5,
  },

  // Question 3: Answer The following questions: (Open-ended, not scored in this automated version)
  {
    type: "text",
    question:
      "1. Compare between primary and secondary storage devices. Give examples. (5 points)",
  },
  {
    type: "text",
    question:
      "2. State some physical characteristics of a person and the Biometric devices depending on them. (5 points)",
  },
  {
    type: "text",
    question: "3. Write about: MICR-RFID-OMR (5 points)",
  },
  {
    type: "text",
    question:
      "4. What are the major differences between Central Computer and Peripherals? How are these differences resolved? (5 points)",
  },
  {
    type: "text",
    question:
      "5. The I/O data transfer can be handled by various modes, name the modes and explain in detail one of them. (5 points)",
  },
];

const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-quiz");
const resultContainer = document.getElementById("result-container");
const scoreSpan = document.getElementById("score");
const feedbackDiv = document.getElementById("feedback");
const timerSpan = document.getElementById("timer");

const EXAM_DURATION_MINUTES = 120; // Set the exam duration to 120 minutes
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
    // Prepend the question number, handling the change from 1-based indexing in array to 1-based display
    questionText.textContent = `${q.question}`; // Questions already numbered in the PDF text
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
