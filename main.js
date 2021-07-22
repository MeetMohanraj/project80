var name_of_gest_array = [];
function submit(){
    var Gest_name = document.getElementById("Enter_name").value;
    name_of_gest_array.push(Gest_name);
    document.getElementById("sumbit").innerHTML =name_of_gest_array;
    console.log(name_of_gest_array);
    var lenth_of_the_array = name_of_gest_array;
    console.log(lenth_of_the_array)
}
