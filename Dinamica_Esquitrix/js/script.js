function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["París", "Londres", "Madrid"],
        correct: 0,
        comment: " París es la capital de Francia."
    },
    {
        question: "¿En qué año se fundó Google?",
        options: ["2000", "1995", "1998"],
        correct: 2,
        comment: " Google se fundó en 1998."
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Océano Atlántico", "Océano Pacífico", "Océano Índico"],
        correct: 1,
        comment: " El Océano Pacífico es el océano más grande del mundo."
    },
    {
        question: "¿Quién escribió 'Don Quijote de la Mancha'?",
        options: ["Miguel de Cervantes", "Garcilaso de la Vega", "Federico García Lorca"],
        correct: 0,
        comment: " 'Don Quijote de la Mancha' fue escrito por Miguel de Cervantes."
    },
    {
        question: "¿En qué año se llevó a cabo la Revolución Rusa?",
        options: ["1917", "1905", "1923"],
        correct: 0,
        comment: "La Revolución Rusa tuvo lugar en 1917. "
    },
    {
        question: "¿Cuál es el elemento químico más abundante en la Tierra?",
        options: ["Carbono", "Oxígeno", "Hierro"],
        correct: 1,
        comment: "El elemento químico más abundante en la Tierra es el oxígeno."
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: [ "Misisipi", "Nilo","Amazonas"],
        correct: 2,
        comment: "El río más largo del mundo es el Amazonas."
    },
    {
        question: "¿Cuál es el autor de la obra 'Hamlet'?",
        options: [ "Leo Tolstoy", "Charles Dickens", "William Shakespeare"],
        correct: 2,
        comment: "'Hamlet' es una famosa obra de teatro escrita por William Shakespeare."
    },
    {
        question: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
        options: ["1776", "1789", "1794"],
        correct: 0,
        comment: "La Declaración de Independencia de los Estados Unidos fue firmada el 4 de julio de 1776."
    },
    {
        question: "¿Cuál es el número atómico del hidrógeno?",
        options: ["1", "2", "3"],
        correct: 0,
        comment: "El número atómico del hidrógeno es 1."
    },
    {
        question: "¿Quién pintó 'La última cena'?",
        options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh"],
        correct: 1,
        comment: "'La última cena' es una famosa pintura renacentista creada por Leonardo da Vinci."
    },
    {
        question: "¿Cuál es el componente principal del aire que respiramos?",
        options: ["Nitrógeno", "Oxígeno", "Dióxido de carbono"],
        correct: 1,
        comment: "El componente principal del aire que respiramos es el oxígeno."
    },
    {
        question: "¿Cuál es el segundo planeta más cercano al Sol?",
        options: ["Mercurio", "Venus", "Marte"],
        correct: 1,
        comment: "Venus es el segundo planeta más cercano al Sol en nuestro sistema solar. "
    },
    {
        question: "¿Cuál es la montaña más alta del mundo?",
        options: [ "Monte Kilimanjaro","Monte Everest", "Monte McKinley"],
        correct: 1,
        comment: "El Monte Everest es la montaña más alta del mundo, con una altitud de 8,848 metros sobre el nivel del mar."
    },
    {
        question: "¿En qué año se celebró la primera Copa Mundial de la FIFA?",
        options: ["1930", "1932", "1935"],
        correct: 0,
        comment: "La primera Copa Mundial de la FIFA se celebró en 1930 en Uruguay."
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: [ "Mario Vargas Llosa","Gabriel García Márquez", "Julio Cortázar"],
        correct: 1,
        comment: "'Cien años de soledad' es una novela escrita por el colombiano Gabriel García Márquez."
    },
    {
        question: "¿Cuál es el quinto planeta del sistema solar?",
        options: ["Júpiter", "Saturno", "Urano"],
        correct: 0,
        comment: "Júpiter es el quinto planeta del sistema solar."
    },
    {
        question: "¿Cuál es el metal más abundante en la corteza terrestre?",
        options: [ "Cobre", "Oro","Aluminio"],
        correct: 2,
        comment: "El metal más abundante en la corteza terrestre es el aluminio."
    },
    {
        question: "¿Cuál es el autor de 'Guerra y paz'?",
        options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov"],
        correct: 1,
        comment: "El autor de la novela épica Guerra y paz es Leo Tolstoy, una de las obras literarias más destacadas de la literatura rusa."
    },
    {
        question: "¿Cuál es el valor de la constante de Planck h?",
        options: ["6.626 x 10^(-34) Js", "9.81 m/s²", "3 x 10^8 m/s"],
        correct: 0,
        comment: " La constante de Planck (h) es un valor fundamental en la física cuántica y su valor es aproximadamente 6.626 x 10^(-34) joule segundo (Js)."
    },
    {
        question: "¿Cuál es el segundo elemento más abundante en la Tierra?",
        options: ["Hierro", "Silicio", "Aluminio"],
        correct: 1,
        comment: "El silicio es el segundo elemento más abundante en la Tierra después del oxígeno."
    },
    {
        question: "¿En qué país se encuentra la Gran Pirámide de Giza?",
        options: ["Egipto", "Libia", "India"],
        correct: 0,
        comment: "La Gran Pirámide de Giza se encuentra en Egipto y es una de las estructuras más emblemáticas y antiguas del mundo."
    },
    {
        question: "¿Quién fue el primer presidente de los Estados Unidos?",
        options: [ "Thomas Jefferson","George Washington", "John Adams"],
        correct: 1,
        comment: "El primer presidente de los Estados Unidos fue George Washington."
    },
    {
        question: "¿Qué famosa pintura fue creada por Leonardo da Vinci y se encuentra en el Louvre?",
        options: ["La Noche Estrellada", "El Grito", "La Mona Lisa"],
        correct: 2,
        comment: "La famosa pintura creada por Leonardo da Vinci que se encuentra en el Louvre es La Mona Lisa"
    },
    {
        question: "¿En qué año terminó la Segunda Guerra Mundial?",
        options: [ "1939","1945", "1941"],
        correct: 1,
        comment: "La Segunda Guerra Mundial terminó en 1945 después de seis años de conflicto."
    },
    {
        question: "¿Cuál es la capital de Japón?",
        options: ["Pekín", "Seúl", "Tokio"],
        correct: 2,
        comment: "La capital de Japón es Tokio."
    },
    {
        question: "¿Qué río es conocido como el río de la vida en Egipto?",
        options: ["Nilo", "Amazonas", "Misisipi"],
        correct: 0,
        comment: "El río Nilo es conocido como el río de la vida en Egipto debido a su importante papel historico en la agricultura."
    },
    {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Canberra"],
        correct: 2,
        comment: "La capital de Australia es Canberra."
    },
    {
        question: "¿En qué año se llevó a cabo la primera misión tripulada a la Luna?",
        options: ["1961", "1969", "1975"],
        correct: 1,
        comment: "La primera misión tripulada a la Luna, conocida como el Apolo 11, tuvo lugar en 1969, con la famosa frase 'Un pequeño paso para el hombre, un gran salto para la humanidad.'"
    },
    {
        question: "¿Cuál es la capital de Sudáfrica?",
        options: ["Pretoria", "Ciudad del Cabo", "Johannesburgo"],
        correct: 0,
        comment: "Pretoria es una de las tres capitales de Sudáfrica y es la sede del poder ejecutivo del gobierno sudafricano."
    },
    {
        question: "¿Quién es el mejor jugador de la historia de la NBA?",
        options: ["Kobe Bryant", "Lebron James", "Michael Jordan"],
        correct: 2,
        comment: "Michael Jordan se considera el mejor de la NBA debido a sus múltiples campeonatos, premios MVP y su impacto cultural."
    },
    {
        question: "¿De qué color es la luz del Sol?",
        options: ["Amarillo", "Blanco", "Rojo"],
        correct: 1,
        comment: "La luz del sol es Blanco y es la atmósfera lo que le da ese tono amarillento"
    },
    {
        question: "¿Cuál es el órgano más pesado del cuerpo humano en términos de masa? ",
        options: ["Higado", "Piel", "Intestino"],
        correct: 0,
        comment: "El hígado es el órgano más pesado debido a su papel vital en el procesamiento de nutrientes y desintoxicación."
    },

];

let currentRound = 0;
let questionsToAnswer = [];
let questionsAnswered = [];
const maxQuestionsToShow = 5; 

shuffleArray(questions); 

function startGame() {
    questionsToAnswer = questions.slice(0, maxQuestionsToShow);
    showQuestion();
}

function showQuestion() {
    if (questionsToAnswer.length > 0) {
        const questionElement = document.getElementById("question");
        const optionsElements = document.querySelectorAll(".option");
        const currentQuestion = questionsToAnswer[0];
        questionElement.textContent = currentQuestion.question;
        const options = currentQuestion.options;
        for (let i = 0; i < optionsElements.length; i++) {
            optionsElements[i].textContent = options[i];
        }
        
    }
}

function checkAnswer(option) {
    if (questionsToAnswer.length === 0) {
        return; 
    }

    const selectedAnswer = Array.from(option.parentNode.children).indexOf(option);
    const currentQuestion = questionsToAnswer[0];

    if (selectedAnswer === currentQuestion.correct) {
        document.getElementById("result").textContent = "¡Respuesta correcta!";
        questionsAnswered.push(questionsToAnswer.shift());

        if (questionsAnswered.length === maxQuestionsToShow) {
            displayCongratulations();
        } else {
            setTimeout(() => {
                showQuestion();
                document.getElementById("result").textContent = "";
                document.getElementById("comment").textContent = "";
            }, 1000);
        }
    } else {
        document.getElementById("comment").textContent = "Respuesta: " + currentQuestion.comment;
        gameOver();
    }
}



function displayCongratulations() {
    document.getElementById("question").textContent = "¡Felicidades! Has respondido a las cinco preguntas.";
    document.querySelector(".options").style.display = "none";
    document.getElementById("congratulations-overlay").style.display = "block";
}

function gameOver() {
    document.getElementById("result").style.display = "none";
    document.getElementById("game-over-overlay").style.display = "block";
}

function resetGame() {
    currentRound = 0;
    questionsToAnswer = questions.slice(0, maxQuestionsToShow);
    questionsAnswered = [];
    showQuestion();
    document.getElementById("result").textContent = "";
    document.getElementById("game-over-overlay").style.display = "none";
    document.getElementById("comment").textContent = ""; // Limpia el comentario
}


function redirectToRoulette() {
    window.location.href = "../Ruleta_Esquitrix/index.html";
}

startGame();
