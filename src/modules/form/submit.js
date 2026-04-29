import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
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

  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente");
    }

    // recuperar o horário selecionado
    const hourSelected = document.querySelector(".hour-selected");

    // Recupera o horário selecionado
    if (!hourSelected) {
      return alert("Selecione a hora.");
    }

    // Recuperar somente a hora
    const [hour, _] = hourSelected.innerText.split(":");

    //Inserir a hora na data

    const when = dayjs(selectedDate.value).add(hour, "hour");

    // Gerar um ID
    const id = new Date().getTime();
    console.log({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Não foi possível realizar o agendamento.");
    console.log(error);
  }
};
