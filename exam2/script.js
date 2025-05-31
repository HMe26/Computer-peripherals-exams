const questions = [
  // Question 1: Select the best Answer (13 points)
  {
    type: "mcq",
    question:
      "1) Which of the following memory groups are in order based on speed (slowest to fastest):",
    options: {
      a: "registers, cache, RAM",
      b: "cache, registers, RAM",
      c: "cache, RAM, registers",
      d: "RAM, cache, registers",
    },
    correctAnswer: "d", // RAM, cache, registers [cite: 36] (common knowledge that registers are fastest, then cache, then RAM)
    points: 1,
  },
  {
    type: "mcq",
    question: "2) The CPU is also known as the:",
    options: {
      a: "microprocessor.",
      b: "random access memory.",
      c: "primary storage.",
      d: "microunit.",
    },
    correctAnswer: "a", // microprocessor [cite: 37]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "3) If a user needs information instantly available to the CPU, it should be stored:",
    options: {
      a: "in the CPU.",
      b: "in RAM.",
      c: "in secondary storage.",
      d: "on a CD.",
    },
    correctAnswer: "b", // in RAM [cite: 38]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "4) Which of the following is defined by the number of dots present in the frame?",
    options: {
      a: "Resolution",
      b: "Depth",
      c: "Height",
      d: "None of the above",
    },
    correctAnswer: "a", // Resolution [cite: 39]
    points: 1,
  },
  {
    type: "mcq",
    question: "5) What best describes how an inkjet printer prints an image?",
    options: {
      a: "One dot at a time to form a character",
      b: "Spray-painting a character",
      c: "Striking an inked ribbon",
      d: "Dropping ink onto the paper",
    },
    correctAnswer: "d", // Dropping ink onto the paper [cite: 40]
    points: 1,
  },
  {
    type: "mcq",
    question: "6) What is another name for a dot-matrix printer?",
    options: {
      a: "Impact printer",
      b: "Page printer",
      c: "Spray printer",
      d: "USB",
    },
    correctAnswer: "a", // Impact printer [cite: 41]
    points: 1,
  },
  {
    type: "mcq",
    question:
      "7) Type of device in which a paper is held on a rotating drum and lines are drawn with pen movements is classified as:",
    options: {
      a: "Printer",
      b: "Plotter",
      c: "Output device",
      d: "Input device",
    },
    correctAnswer: "b", // Plotter [cite: 42]
    points: 1,
  },
  {
    type: "mcq",
    question: "8) Which of the following is an example of an input device?",
    options: {
      a: "Monitor",
      b: "Printer",
      c: "Keyboard",
      d: "Speaker",
    },
    correctAnswer: "c", // Keyboard [cite: 43]
    points: 1,
  },
  {
    type: "mcq",
    question: "9) A joystick is a(n) ____ device.",
    options: {
      a: "input",
      b: "output",
      c: "storage",
      d: "processing",
    },
    correctAnswer: "a", // input [cite: 44]
    points: 1,
  },
  {
    type: "mcq",
    question: "10) Which of the following is an example of an output device?",
    options: {
      a: "Scanner",
      b: "Microphone",
      c: "Printer",
      d: "Mouse",
    },
    correctAnswer: "c", // Printer [cite: 45]
    points: 1,
  },
  {
    type: "mcq",
    question: "11) Which of the following is NOT a type of non-impact printer?",
    options: {
      a: "Inkjet printer",
      b: "Laser printer",
      c: "Thermal printer",
      d: "Dot-matrix printer",
    },
    correctAnswer: "d", // Dot-matrix printer [cite: 46]
    points: 1,
  },
  {
    type: "mcq",
    question: "12) Which of the following is a volatile memory?",
    options: {
      a: "RAM",
      b: "ROM",
      c: "Hard Disk",
      d: "CD-ROM",
    },
    correctAnswer: "a", // RAM [cite: 47]
    points: 1,
  },
  {
    type: "mcq",
    question: "13) The smallest unit of digital data is a:",
    options: {
      a: "Byte",
      b: "Kilobyte",
      c: "Bit",
      d: "Megabyte",
    },
    correctAnswer: "c", // Bit [cite: 48]
    points: 1,
  },

  // Question 2: Write (T) for True and (F) for False (12 points)
  {
    type: "true_false",
    question: "1) RAM is a type of volatile memory.",
    correctAnswer: "T", // [cite: 50] (Common knowledge in computer science)
    points: 1,
  },
  {
    type: "true_false",
    question: "2) A scanner is an output device.",
    correctAnswer: "F", // [cite: 51] (A scanner is an input device)
    points: 1,
  },
  {
    type: "true_false",
    question:
      "3) The resolution of a monitor refers to the clarity of the image displayed on the screen.",
    correctAnswer: "T", // [cite: 52] (Definition of resolution)
    points: 1,
  },
  {
    type: "true_false",
    question: "4) ROM is typically used for long-term storage of data.",
    correctAnswer: "T", // [cite: 53] (ROM is non-volatile and used for permanent storage)
    points: 1,
  },
  {
    type: "true_false",
    question: "5) An inkjet printer uses toner to create images.",
    correctAnswer: "F", // [cite: 54] (Inkjet printers use ink; laser printers use toner)
    points: 1,
  },
  {
    type: "true_false",
    question: "6) A mouse is an input device.",
    correctAnswer: "T", // [cite: 55] (A mouse is an input device)
    points: 1,
  },
  {
    type: "true_false",
    question: "7) A printer is an input device.",
    correctAnswer: "F", // [cite: 56] (A printer is an output device)
    points: 1,
  },
  {
    type: "true_false",
    question: "8) USB stands for Universal Serial Bus.",
    correctAnswer: "T", // [cite: 57] (Definition of USB)
    points: 1,
  },
  {
    type: "true_false",
    question: "9) The CPU is the 'brain' of the computer.",
    correctAnswer: "T", // [cite: 58] (Common analogy)
    points: 1,
  },
  {
    type: "true_false",
    question: "10) Cache memory is slower than RAM.",
    correctAnswer: "F", // [cite: 59] (Cache memory is faster than RAM)
    points: 1,
  },
  {
    type: "true_false",
    question: "11) A hard disk drive is a type of primary storage.",
    correctAnswer: "F", // [cite: 60] (Hard disk drives are secondary storage)
    points: 1,
  },
  {
    type: "true_false",
    question: "12) Plotters are used for printing large graphics.",
    correctAnswer: "T", // [cite: 61] (Definition of plotter)
    points: 1,
  },

  // Question 3: Short answer questions (Open-ended, not scored in this automated version)
  {
    type: "text",
    question: "1) Define Computer Peripherals. (3 points)", // [cite: 62]
  },
  {
    type: "text",
    question: "2) List two input devices and two output devices. (4 points)", // [cite: 63]
  },
  {
    type: "text",
    question:
      "3) Explain the difference between impact and non-impact printers. (3 points)", // [cite: 64]
  },
];

const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-quiz");
const resultContainer = document.getElementById("result-container");
const scoreSpan = document.getElementById("score");
const feedbackDiv = document.getElementById("feedback");
const timerSpan = document.getElementById("timer");

const EXAM_DURATION_MINUTES = 60; // Set the exam duration to 60 minutes [cite: 34]
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
