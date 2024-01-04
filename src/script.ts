const myButton = document.querySelector("#button") as HTMLButtonElement;
const myInputHeight = document.querySelector("#altura") as HTMLInputElement;
const myInputWeight = document.querySelector("#peso") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLDivElement;

myButton.addEventListener('click', ():void => {
    const IMC: number = Number(myInputWeight.value) / Number(myInputHeight.value);
    result.style.display = 'block';
    result.textContent = `SEU IMC É - ${IMC.toFixed(2)}`
})