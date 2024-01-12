//Variables
    let inputOutput = document.getElementById("inputOutput")
    let num0 = document.getElementById("0")
    let num1 = document.getElementById("1")
    let num2 = document.getElementById("2")
    let num3 = document.getElementById("3")
    let num4 = document.getElementById("4")
    let num5 = document.getElementById("5")
    let num6 = document.getElementById("6")
    let num7 = document.getElementById("7")
    let num8 = document.getElementById("8")
    let num9 = document.getElementById("9")
    let plus = document.getElementById("plus")
    let minus = document.getElementById("minus")
    let times = document.getElementById("times")
    let divide = document.getElementById("divide")
    let equals = document.getElementById("equals")
    let clear = document.getElementById("clear")
    let result = 0
//Buttons Event Listeners
        //numbers
    num0.addEventListener('click', () => appendToInput('0'))
    num1.addEventListener('click', () => appendToInput('1'))
    num2.addEventListener('click', () => appendToInput('2'))
    num3.addEventListener('click', () => appendToInput('3'))
    num4.addEventListener('click', () => appendToInput('4'))
    num5.addEventListener('click', () => appendToInput('5'))
    num6.addEventListener('click', () => appendToInput('6'))
    num7.addEventListener('click', () => appendToInput('7'))
    num8.addEventListener('click', () => appendToInput('8'))
    num9.addEventListener('click', () => appendToInput('9'))
        //operations
    plus.addEventListener('click', () => appendToInput('+'))
    minus.addEventListener('click', () => appendToInput('-'))
    times.addEventListener('click', () => appendToInput('*'))
    divide.addEventListener('click', () => appendToInput('/'))

    clear.addEventListener('click', clearInput)
    equals.addEventListener('click', calculator)

function appendToInput(value){
    inputOutput.value += value;
}
function clearInput(){
    inputOutput.value = '';
}
function calculator(){
    if(inputOutput.value !== ''){
        /*
        try, throw, and catch are similar to if statements but basically say if
        x happens, we're good. If anthing else happens wtf, and it throws it 
        (else-ish) it so it might catch (else)
        */
        //try attempts to use the code, and might trigger throw or catch
        try{
            result = eval(inputOutput.value);
            inputOutput.value = result;
            //check if divided by 0
            if (!isFinite(result)){
                //throw makes exceptions in the code can be noticed by try if applies
                throw new Error("Err, Divide by 0")
            }
        //catches any exceptions thrown at it
        }catch (error) {
            inputOutput.value ='Err'
        }
    }else{
        inputOutput.value = 'Err'
    }
}
