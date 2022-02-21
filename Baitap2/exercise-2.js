//Cho các đối tượng sau
const obj = {
  id: 1,
  name: 'Trainer',
  age: 33,
  skills: ['Javascript', 'React', 'NextJS', 'Typescript']
};

const anotherObj = {
  id: 2,
  name: 'Trainee',
  age: 22,
  isFinite: false,
  isBeingTrained: true
};

//1. Hãy clone 2 đối tượng trên bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *
const cloned = Object.assign({}, obj);
const copied = { ...obj };
const copied2 = Object.create(obj);

const anotherObjCloned = Object.assign({}, anotherObj);
const anotherObjCopied = { ...anotherObj };
const copied3 = Object.create(anotherObj);


//2. Đoán thử kết quả sau đây, không chạy thử
const copiedObj = obj;
copiedObj.skills = ['React', 'Typescript'];
console.log(obj.skills);
// * YOUR ANSWER HERE *

//Tra ve 1 mang


//3. Hãy merge 2 đối tượng đã cho thành 1 đối tượng mới bằng tất cả các cách mà bạn biết
// *YOUR CODE HERRE *
const newOb = Object.assign({}, obj, anotherObj);
console.log(newOb);

//4.  Sử dụng Map trong ES6, hãy tạo ra 1 biến có giá trị như sau:
/*
[
  ["whole numbers": [1 ,2 ,3 ,4]],
  ["Decimal numbers": [1.1, 1.2, 1.3, 1.4]],
  ["negative numbers": [-1, -2, -3, -4]]
]
*/
// *YOUR CODE HERRE *
let map = new Map();
map.set('whole numbers',[1 ,2 ,3 ,4]);
map.set('Decimal numbers',[1.1, 1.2, 1.3, 1.4]);
map.set('negative numbers',[-1, -2, -3, -4]);
console.log(map);


//5. Sử dụng Map trong ES6, hãy tạo ra 1 map từ 2 đối tượng đã cho trên
// *YOUR CODE HERRE *
let mapobj = new Map(Object.entries(obj));
let mapanotherObj = new Map(Object.entries(anotherObj));



