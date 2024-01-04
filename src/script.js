var myButton = document.querySelector("#button");
var myInputHeight = document.querySelector("#altura");
var myInputWeight = document.querySelector("#peso");
var result = document.querySelector("#result");
var imcResult = document.querySelector("#imc");
myButton.addEventListener('click', function () {
    if (myInputHeight.value === '' || myInputWeight.value === '') {
        window.alert('ERRO - Os campos não podem estar vazios');
    }
    else {
        var height = parseFloat(myInputHeight.value);
        var weight = parseFloat(myInputWeight.value);
        var IMC = weight / (height * height);
        imcResult.style.display = 'block';
        imcResult.textContent = "O seu IMC \u00E9: - ".concat(IMC.toFixed(2));
    }
});
//# sourceMappingURL=script.js.map