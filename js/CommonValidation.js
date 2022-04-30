
$(function () {
    $('.numberVal').keypress(function (event) {

        //var key = event.charCode ? event.which : event.charCode;
        
        //if ((key != 46 || $(this).val().indexOf('.') != -1) && (key < 48 || key > 57)) {
         
        //    if (key != 0 && key != 8) { //exception         
                 
        //       event.preventDefault();
        //    }
        //}
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
      return true;
    });
    $(".DecimalVal").keypress(function (event) {
        var key = (event.which) ? event.which : event.charCode;
        if ((key != 46 || $(this).val().indexOf('.') != -1) && (key < 48 || key > 57)) {
            if (key !== 0 && key !== 8 && key !== 46 && $(this).val() != '0.00') { //exception
               
                event.preventDefault();
            }
        }
        if (($(this).val().indexOf('.') != -1) && ($(this).val().substring($(this).val().indexOf('.'), $(this).val().indexOf('.').length).length > 2)) {
            if (key !== 0 && key !== 8 && key !== 46 && $(this).val() != '0.00') { //exception
               // alert('B');
                event.preventDefault();
            }
        }
    });
    $("input[type='text'],input[type='email'],input[type='number'],input[type='textarea'] , input[type='password']").keypress(function (event) {
        var keychar = String.fromCharCode(event.charCode ? event.which : event.charCode);
        //if (keychar == "'" || keychar == "`" || keychar == "!" || keychar == "#" || keychar == "$" || keychar == "%" || keychar == "^" || keychar == "&" || keychar == "*" || keychar == "(" || keychar == ")" || keychar == "-" || keychar == "_" || keychar == "+" || keychar == "=" || keychar == "/" || keychar == "~" || keychar == "<" || keychar == ">" || keychar == "," || keychar == ";" || keychar == ":" || keychar == "|" || keychar == "?" || keychar == "{" || keychar == "}" || keychar == "[" || keychar == "]" || keychar == "¬" || keychar == "£" || keychar == '"' || keychar == "\\")
        var re = /^[<>#"'?^*;\\+=~`]*$/
        if (re.test(keychar)) {
            event.preventDefault();
        }  
    });
    $(".Address").keypress(function (event) {
        var keychar = String.fromCharCode(event.charCode ? event.which : event.charCode);
        var re = /^[#":'<>?^*]*$/
        if (re.test(keychar)) {
            event.preventDefault();
        }
    });
    $(".StrVal").keypress(function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        var keychar = String.fromCharCode(event.charCode ? event.which : event.charCode);
        if (/[^A-Za-z() \d\b\n\r]+$/.test(keychar) && charCode != 9) {
            event.preventDefault();
        }
    });
    $(".StrVal2").keypress(function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        var keychar = String.fromCharCode((event.which) ? event.which : event.keyCode);
         
        if (/[^A-Za-z() ,-\d\b\n\r]+$/.test(keychar) && charCode != 9) {
                event.preventDefault();
            }
    });
    
});