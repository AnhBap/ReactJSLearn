//Cho trước 1 mảng các trainee như sau:
const traineeIterator = [
  {
    id: 1,
    firtName: 'A',
    lastName: 'Nguyen',
    className: 'CGO-RJ2201R1',
    grade: 'C'
  },
  {
    id: 2,
    firtName: 'B',
    lastName: 'Tran',
    className: 'CGO-RJ2201R1',
    grade: 'D'
  },
  {
    id: 3,
    firtName: 'C',
    lastName: 'Dinh',
    className: 'CGO-RJ2201R1',
    grade: 'A'
  },
  {
    id: 4,
    firtName: 'D',
    lastName: 'Le',
    className: 'CGO-RJ2201R1',
    grade: 'B'
  },
  {
    id: 5,
    firtName: 'D',
    lastName: 'Hoang',
    className: 'CGO-RJ2201R1',
    grade: 'F'
  },
  {
    id: 6,
    firtName: 'E',
    lastName: 'Pham',
    className: 'CGO-RJ2201R1',
    grade: 'E'
  }
];

//1. Sử dụng forEach(), hãy console.log() ra full name (firstName + lastName) của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *

traineeIterator.forEach(function(item,index){
  console.log(`${item.firtName} ${item.lastName}`);
});

//2. Sử dụng forEach(), hãy console.log() ra điểm số (grade) + full name (trong cùng 1 string, format: D Hoang / F) 
//của tất cả các phần từ trong mảng trên
// *YOUR CODE HERRE *
traineeIterator.forEach(function(item,index){
  console.log(`${item.firtName} ${item.lastName} / ${item.grade}`);
});


//3. Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi expectedTraineeArray, 
//trong đó các props của từng phần tử được đổi như sau:
// - newId: className-id
// - fullName: firstName lastName
// - rank: grade
//ex: {
//  newId: 'CGO-RJ2201R1-5,
//  fullName: 'D Hoang',
//  rank: 'F'
//}
// *YOUR CODE HERRE *

let expectedTraineeArray = {
  newId: 'CGO-RJ2201R1-5',
  fullName: 'D Hoang',
  rank: 'F'
}

let mapExpectedTraineeArray = new Map(Object.entries(expectedTraineeArray));

//4, Sử dụng map(), hãy tạo ra 1 mảng mới với tên gọi newTraineeArray,
//trong đó các props của từng phần tử được đổi như sau:
// - id: id
// - codeName: [className] - firstName lastName
// - classification: xét điều kiện:
// -> nếu đạt A grade trả về: 'Excellent'
// -> nếu đạt B grade trả về: 'Good'
// -> nếu đạt C grade trả về: 'Medium'
// -> nếu đạt D grade trả về: 'Weak'
// -> nếu đạt E grade trả về: 'Poor'
// -> nếu đạt F grade trả về: 'Disbanded'
// => tip: tạo ra 1 hàm, với đầu vào là grade, trả về giá trị tương ứng, không xét điều kiện trong forEach() body
// *YOUR CODE HERRE *

function checkClassIfication(grade){
  let classification ='';
  if(grade === 'A'){
    classification = 'Excellent';
  } else if(grade === 'B'){
    classification = 'Good';
  }
  else if(grade === 'C'){
    classification = 'Medium';
  }
  else if(grade === 'D'){
    classification = 'Weak';
  }
  else if(grade === 'E'){
    classification = 'Poor';
  }
  else if(grade === 'F'){
    classification = 'Disbanded';
  }

  return classification;
}

let newTraineeArray = [];
traineeIterator.map(function(item){
  console.log(item);
  let classification = checkClassIfication(item.grade);
  let obclassification = {
    classification : classification
  }
  item['classification'] = classification;
  newTraineeArray.push(item);
});
console.log(newTraineeArray);







//5. Lọc ra các trainee với grade dưới B
// *YOUR CODE HERRE *
let arrayB = [];
newTraineeArray.forEach(function(traineeB,index){
  if(traineeB.grade !== 'A' && traineeB.grade != 'B'){
    arrayB.push(traineeB);
  }
});
console.log(arrayB);

//6. Lọc ra các trainee với grade trên C, sau đố xét điều kiện sau:
// -> nếu số các trainee với grade trên C >= 50% sĩ số lớp, alert ra "Effective training!"
// -> nếu số các trainee với grade trên C < 30% sĩ số lớp, alert ra "Average training!"
// -> nếu số các trainee với grade trên C = 0, alert ra "Failed training!"
// *YOUR CODE HERRE *

let arrayC = [];
let countC = 0;
newTraineeArray.forEach(function(traineeC,index){
  if(traineeC.grade == 'C'){
    countC++;
  }
});
console.log(`C : ${countC}`);
if(countC/newTraineeArray.length*100 >= 50){
  alert(`Effective training!`);
} else if(countC/newTraineeArray.length*100 < 30){
  alert(`Average training!`);
}else if(countC/newTraineeArray.length*100 == 0){
  alert(`Failed training!`);
}

//7. Tìm ra thành viên có grade A, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *

newTraineeArray.forEach(function(traineeA,index){
  if(traineeA.grade == 'A'){
    alert(`${traineeA.firtName} ${traineeA.lastName}`);
  } 
});


//8. Tìm ra thành viên có grade F, alert ra tên đầy đủ của thành viên đó
// *YOUR CODE HERRE *

newTraineeArray.forEach(function(traineeA,index){
  if(traineeA.grade == 'F'){
    alert(`${traineeA.firtName} ${traineeA.lastName}`);
  } 
});


//9. Sử dụng reduce, hãy tạo ra 1 string cấu thành từ điểm số của các thành viên trong mảng đã cho
// *YOUR CODE HERRE *

let stringReduce = traineeIterator.reduce((c,n)=>[n.firtName],[]);

const stringReduce = traineeIterator.reduce((item, name) => {
  let {firtName} = name;
  console(`${item[firtName]}`);
}, {});


console.log(stringReduce);

//10. (optional) Sử dụng reduce, hãy tạo ra 1 hàm tính được giai thừa của 1 số đầu vào. Ex: input 6 => 1*2*3*4*5*6 = 720
// *YOUR CODE HERRE *
function funcGt(num) {
  for (i = 1; i <= num; i++) {
    array.push(i);
  }  
  return array.reduce(function(a, b) {
    return a * b;
  },1)
};

//11. (optional) Hãy tạo ra 1 mảng mới, sử dụng 1 trong các cấu trúc lặp đã học, trong đó có các phần tử 
// - grade thấp nhất
// - grade cao nhất
// - grade trung bình dạng số, biết các giá trị tương ứng của từng grade như sau: A=1, B=2, ... , F=5
// *YOUR CODE HERRE *



