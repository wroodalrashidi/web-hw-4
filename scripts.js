
function gradeCalc() {
  var sumOfNums = 0;
  nums = document.getElementById("numbers").value.split(",");
  for (i = 0; i < nums.length; i++) {
    sumOfNums += parseInt(nums[i]);
  }
  document.getElementById("sum").innerHTML = sumOfNums;
  let image = document.createElement("hello");

          if (sumOfNums >= 60 && sumOfNums <=69 ) {
            document.getElementById("hello").innerHTML = "<img src='https://media1.giphy.com/media/26xBPEGoTAWdsZ8K4/giphy.gif' />";
     
             } else if (sumOfNums >= 70 && sumOfNums <= 79) {
             document.getElementById("hello").innerHTML = "<img src='https://i.gifer.com/2zH3.gif' />";
             } else if (sumOfNums >= 80 && sumOfNums <= 89) {
              document.getElementById("hello").innerHTML = "<img src='https://i.gifer.com/2eSf.gif' />";
     
             } else if (sumOfNums >= 90) {
              document.getElementById("hello").innerHTML = "<img src='https://i.gifer.com/2a9y.gif' />";
     
             } else {
              document.getElementById("hello").innerHTML = "<img src='https://media2.giphy.com/media/l3q2PG0N4D2kUua3e/giphy.gif' />";

             }
                       
            var display=document.getElementById('final_grade');
            
            }

           