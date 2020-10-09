
function gradeCalc() {
  var sumOfNums = 0;
  nums = document.getElementById("numbers").value.split(",");
  for (i = 0; i < nums.length; i++) {
    sumOfNums += parseInt(nums[i]);
  }
  document.getElementById("sum").innerHTML = sumOfNums;


          if (sumOfNums >= 60 && sumOfNums <=69) {
            document.getElementById("final_grade").innerHTML = "D";
     
             } else if (sumOfNums >= 70 && sumOfNums <= 79) {
             document.getElementById("final_grade").innerHTML = "C";
     
             } else if (sumOfNums >= 80 && sumOfNums <= 89) {
             document.getElementById("final_grade").innerHTML = "B";
     
             } else if (sumOfNums >= 90) {
             document.getElementById("final_grade").innerHTML = "A";
     
             } else {
             document.getElementById("final_grade").innerHTML = "F";
             }
                       
            var display=document.getElementById('final_grade');
            
            }

            