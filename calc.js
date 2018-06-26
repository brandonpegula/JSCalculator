function insert(num){
    document.form.textview.value = document.form.textview.value+num
    
};

function equal(){
    var equation = document.form.textview.value;
    if (equation) {
        document.form.textview.value = eval(equation)
    }
};

function clean(){
    document.form.textview.value = "";
};

function back(){
    var equation = document.form.textview.value;
    document.form.textview.value = equation.substring(0,equation.length-1);
};