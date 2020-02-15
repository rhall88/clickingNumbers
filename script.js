var data = [
  {
    name:"green",
    number:-1
  },
  {
    name:"yellow",
    number:0
  },
  {
    name:"red",
    number:0
  },
];

var colorNums=[];

function colorNum(name, number){
  var that =this;
  this.name=name;
  this.number=number;
  this.ele=document.createElement("div");
  
  
  this.ele.innerHTML=this.name+" "+this.number;
  this.ele.style.height = "100px";
  this.ele.style.width = "200px";
  this.ele.style.backgroundColor = this.name;
  this.ele.style.borderRadius = "10px";
  this.ele.style.fontSize = "18px";
  this.ele.style.textAlign = "center";
  this.ele.style.verticalAlign = "middle";
  this.ele.style.lineHeight = "100px";
  
  
  this.ele.addEventListener("click", function(){
    that.increaseNumber();
  })
  
  document.body.appendChild(this.ele);
}

colorNum.prototype.increaseNumber = function(){
  this.number=this.number+1;
  this.ele.innerHTML=this.name+" "+this.number;
}

for(var i=0; i<data.length; i++){
  colorNums.push(new colorNum(data[i].name, data[i].number))
}


colorNums[0].increaseNumber();