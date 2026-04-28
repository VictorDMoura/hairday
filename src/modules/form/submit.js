import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

// Data atual para o formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// Carrega a data atual
selectedDate.value = inputToday;

// Define a dara mínima como sendo a data atual
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  //Previne o comportamente do formulário (recarregar a página)
  event.preventDefault();

  console.log("ENVIADO");
};
