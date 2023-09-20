let counter=0; //inittalizing an para with 0
const count=document.getElementById("counter"); //getting the para with id and storing in an value

function countPara(){
    count.textContent=counter; //taking the para and giving it with 0 initially and storing in an function
}
countPara();
function increment(){
    counter++; //now the para 0 value will increment whenever we click on buttonn
    countPara(); //then storing and callin countpara() function

}

function decrement(){
    counter--; //
    countPara(); //then decrement
}