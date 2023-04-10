function student(sno,name){
    this.sno=sno
    this.name=name
    console.log(this)
}
student
a=new student(1,'abc')
b = new student(2, 'def')