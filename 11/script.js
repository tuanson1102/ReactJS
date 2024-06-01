function repeat(n, text) {
    let repeatText = '';
    for(let i = 0; i < n ; i++){
       repeatText += text + '-'; 
    }
    return repeatText;
  }
  
  console.log(repeat(50,'a'));
  
  function totalNumber(){
    let total = 0;
    for(let i = 0 ; i<100; i++){
      if (i % 5 == 0) {
        total += i
      }
    }
    return total;
  }
  
  console.log(`tổng các số chia hết cho 5 từ 0 -> 100 là:`,totalNumber());
  
  function theTichHinhCau(r) {
    if (r <= 0) {
      console.log("Bán kính phải là số dương");
    }
  
    const theTich = (4/3) * Math.PI * Math.pow(r, 3);
    return theTich;
  }
  console.log(`Thể tích hình cầu với bán kính ${3} là: `,theTichHinhCau(3));
  
  
  function totalTwoNumber(a ,b){
    let total = 0;
    if (a < b) {
      for(let i = a + 1 ; i< b; i++){
        total += i;
      }
      return total;
    }else{
      for(let i = b + 1 ; i< a; i++){
        total += i;
      }
      return total;
    }
  }
  console.log(`tổng của khoảng cách từ ${8} đến ${3} là:`,totalTwoNumber(8,3));
  
  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  const num = 13;
  console.log(`${num} có phải là số nguyên tố?` ,isPrime(num));