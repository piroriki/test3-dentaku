/*計算結果、データ入力用の変数を用意する*/
let result = "";
let is_calc = false;

/*液晶画面の初期設定をする*/
window.onload = function(){
 result = document.getElementById("result");
};

/*ACキーを押下したら、液晶画面の数値を０に、計算結果にfalseを入れる*/
 function AC_click(){
  result.value = "0";
  is_calc = false;
 }
 
 /*数字キーを押下して、条件分岐をさせる*/
 function num_click(val){
  if(is_calc)result.value = "0";
  is_calc = false;
  
  if(result.value == "0" && val == "0"){
    result.value="0";
  }else if(result.value == "0" && val == "."){
    result.value="0.";
  }else if(result.value == "0"){
    result.value = val;
  }else{
    result.value += val;
  }
 }
 
 /*演算子キーを押下した際に、計算式の最後が演算子の場合には最後に入力したものと入れ替える*/
 function ope_click(val){
  if(is_calc)is_calc = false;
  
  if(is_ope_last()){
   result.value = result.value.slice(0,-1) + val;
  }else{
   result.value += val;
  }
  }
  
  /*＝キーを押下した際に最後の入力が演算子なら取り除く、それ以外なら計算式を実行する*/
  function equal_click(){
   if(is_ope_last()) result.value = result.value.slice(0,-1);
   
   let temp = new Function("return " + result.value.replaceAll("×","*").replaceAll("÷","/"))();
   
   if(temp == Infinity || Number.isNaN(temp)){
    result.value = "Error";
   }else{
    result.value = temp;
    is_calc = true;
    }
  }
  
  /*is_op_last()関数で、計算式の最後が演算子かどうかを判断させる*/
  function is_ope_last(){
   return["+","-","×","÷","."].includes(result.value.toString().slice(-1));
  }