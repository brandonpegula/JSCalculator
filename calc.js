function insert(num){ //Function to insert selected number or value.
    document.form.textview.value = document.form.textview.value+num
    
};

function equal(){ //Function to solve entered equation.
    var equation = document.form.textview.value;
    if (equation) {
        document.form.textview.value = eval(equation)
    }
};

function clean(){ //Function to reset calculator.
    document.form.textview.value = "";
};

function back(){ //Function to move one space back in textview.
    var equation = document.form.textview.value;
    document.form.textview.value = equation.substring(0,equation.length-1);
};

function percent(){
    var equation = document.form.textview.value;
    if (equation) {
        document.form.textview.value = eval(equation/100)
    }
};