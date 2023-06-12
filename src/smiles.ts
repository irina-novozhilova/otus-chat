export function initSmiles() {
  const smiles = document.querySelectorAll(".smiles a");
  const inputMessage: HTMLInputElement | null =
    document.querySelector(".inputMessage");

  smiles.forEach((element) => {
    element.addEventListener("click", function click(event) {
      event.preventDefault();
      if (inputMessage) {
        inputMessage.value = `${inputMessage.value}##${this.getAttribute(
          "href"
        )}##`;
        inputMessage.focus();
      }
    });
  });
}

export function parseSmiles(message: string) {
  let parsedMessage = message;
  const regex = /##(.+?)##/gi;
  if (parsedMessage) {
    parsedMessage = parsedMessage.replace(
      regex,
      '<img src="images/$1.svg" alt="">'
    );
  }

  return parsedMessage;
}
