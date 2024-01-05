const myButton = document.querySelector("#button") as HTMLButtonElement;
const myInputHeight = document.querySelector("#altura") as HTMLInputElement;
const myInputWeight = document.querySelector("#peso") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLDivElement;
const imcResult = document.querySelector("#imc") as HTMLDivElement;

myButton.addEventListener('click', ():void => {
    if(myInputHeight.value === '' || myInputWeight.value === '') {
        window.alert('ERRO - Os campos não podem estar vazios');
    } else {
        const height = parseFloat(myInputHeight.value);
        const weight = parseFloat(myInputWeight.value);
        if(isNaN(height) || isNaN(weight)) {
            window.alert('insira valores numéricos corretos');
        } else {
            let IMC: number = weight / (height * height);
    
            imcResult.style.display = 'block';
            imcResult.textContent = `O seu IMC é: ${IMC.toFixed(2)}`
        }
    }
})