const questions = [
  // Question 1: Choose the nearest correct answer (10 points)
  {
    type: "mcq",
    question: "1- The most common input devices include:",
    options: {
      A: "monitors and keyboards.",
      B: "monitors and mice.",
      C: "mice and keyboards.",
      D: "printer and mice.",
    },
    correctAnswer: "C",
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
      "3- On which one of the following output devices is hard copy often displayed?",
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
    question: "4- Storage devices include all of the following EXCEPT:",
    options: {
      A: "recordable CD.",
      B: "RAM.",
      C: "a hard drive.",
      D: "a DVD drive",
    },
    correctAnswer: "B",
    points: 1,
  },
  {
    type: "mcq",
    question:
      "5- Which of the following is defined by the number of dots present in the frame?",
    options: {
      A: "Resolution",
      B: "Depth.",
      C: "Height.",
      D: "None of the above",
    },
    correctAnswer: "A",
    points: 1,
  },
  {
    type: "mcq",
    question: "6- What is another name for a dot-matrix printer?",
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
      "7- Type of device in which a paper is held on a rotating drum and lines are drawn with pen movements is classified as:",
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
    question:
      "8- These devices refer to the identity verification of a living person using their physical characteristics.",
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
    question: "9- These are intelligent cards with a chip inside it.",
    options: {
      A: "Magnetic stripe cards",
      B: "Dumb cards",
      C: "Intelligent cards",
      D: "Smart cards",
    },
    correctAnswer: "D",
    points: 1,
  },
  {
    type: "mcq",
    question: "10- RAM is also known as:",
    options: {
      A: "secondary storage.",
      B: "the central processing unit.",
      C: 'the "brain" of the computer.',
      D: "primary storage.",
    },
    correctAnswer: "D",
    points: 1,
  },

  // Question 2: Write (T) for True and (F) for False (8 Points)
  {
    type: "true_false",
    question: "1. RFID and Bar code reader system are the same.",
    correctAnswer: "F",
    points: 1,
  },
  {
    type: "true_false",
    question: "2. Peripheral devices are attached to the CPU.",
    correctAnswer: "T",
    points: 1,
  },
  {
    type: "true_false",
    question: "3. The term OMR stands for Original Mark Reader.",
    correctAnswer: "F",
    points: 1,
  },
  {
    type: "true_false",
    question:
      "4. The MICR machine reads the special characters printed (like on a cheque) in a standard font using an ink that contain iron oxide.",
    correctAnswer: "T",
    points: 1,
  },
  {
    type: "true_false",
    question:
      "5. Magnetic cards are intelligent cards which have inbuilt electronics and memory storage.",
    correctAnswer: "F",
    points: 1,
  },
  {
    type: "true_false",
    question:
      "6. Lots of data like name, address, blood group type etc. can be stored on smart cards.",
    correctAnswer: "T",
    points: 1,
  },
  {
    type: "true_false",
    question: "7. The RFID tag can be used in the identity cards of students.",
    correctAnswer: "T",
    points: 1,
  },
  {
    type: "true_false",
    question: "8. RFID and Bar code reader system are the same.", // This is a repeat, keeping as per source
    correctAnswer: "F",
    points: 1,
  },

  // Question 3: Answer the following questions (Open-ended, not scored in this automated version)
  // For these, we'll just display them. Scoring for these would require manual grading.
  {
    type: "text",
    question:
      "1- Inputting/outputting data to/from computer passing with three steps. Explain. (3 points)",
    // No correctAnswer as it's open-ended
  },
  {
    type: "text",
    question:
      "2- Compare between primary and secondary storage devices. Give examples. (2 points)",
    // No correctAnswer as it's open-ended
  },
  {
    type: "text",
    question:
      "3- State some physical characteristics of a person and the Biometric systems depending on them. (2 points)",
    // No correctAnswer as it's open-ended
  },
];

const quizContainer = document.getElementById("quiz-container");
const submitButton = document.getElementById("submit-quiz");
const resultContainer = document.getElementById("result-container");
const scoreSpan = document.getElementById("score");
const feedbackDiv = document.getElementById("feedback");
const timerSpan = document.getElementById("timer");

const EXAM_DURATION_MINUTES = 45; // Set the exam duration to 45 minutes
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
      // No direct score for text answers, but could store input if needed
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
        // Add visual feedback to the question block
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
      // For open-ended questions, just display a note that they are not auto-graded
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
