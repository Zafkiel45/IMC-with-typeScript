var myButton = document.querySelector("#button");
var myInputHeight = document.querySelector("#altura");
var myInputWeight = document.querySelector("#peso");
var result = document.querySelector("#result");
myButton.addEventListener('click', function () {
    var IMC = Number(myInputWeight.value) / Number(myInputHeight.value);
    result.style.display = 'block';
    result.textContent = "SEU IMC \u00C9 - ".concat(IMC.toFixed(2));
});
//# sourceMappingURL=script.js.map