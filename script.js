//creating counter
		
const headEl=document.querySelector("#heading");
const table=document.querySelector("#table1");
let totalExpense = 0;
headEl.textContent = totalExpense;

//array for desc
const allExpense=[];
//function of adding
function addExpense(){
console.clear();
const inputelement=document.querySelector("#num");
//value of input 
const inputval = inputelement.value;
const amount = parseFloat(inputval);
const descl=document.querySelector("#desc");
//value of input 
const descp= descl.value;
const date1=document.querySelector("#date1");
var dat=date1.value.toString();


console.log(dat);

//object creation
const  obj={};
obj.amount=amount;
obj.desc=descp;
obj.moment=new Date();
obj.mon=new Date(dat);
console.log(obj);
console.log(obj.mon);
allExpense.push(obj);

console.table(allExpense)
//console.log({expense})
totalExpense=totalExpense+amount;
//console.log({totalExpense})
headEl.textContent = "TOTAL: $"+totalExpense.toFixed(2);
render(allExpense);

var form = document.getElementById("myForm");
form.reset();
   }
   function render(newarr)
   {
      const allExpenseHtml= newarr.map(expense=>	 retExp(expense))
            const allExpenseStr = allExpenseHtml.join("");
         table.innerHTML=allExpenseStr;
   }
   function deletefunc(dateVal)
   { 
      console.log(dateVal);
      for(let i=0;i<allExpense.length;i++)
      {
         if(allExpense[i].moment.valueOf()===dateVal)
         {	totalExpense=totalExpense-allExpense[i].amount;
            headEl.textContent = "TOTAL: "+totalExpense.toFixed(2);
            let newarr=allExpense.splice(i,1);  
         }
      }
      render(allExpense);
      console.log(totalExpense.toFixed(2));
   }

   function getString(moment)
   {
      return moment.toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'});
   }
   function retExp({amount,desc,moment,mon})
   {
      return `

         <div id="table1" class="row mx-2 expense-item mb-4 py-1">

            <div class="col-1 col-sm-0 col-md-0 d-flex align-items-center justify-content-center">
               <button type="button" class="btn btn-danger btn-sm" onclick="deletefunc(${moment.valueOf()})">
                  <i class="fas fa-trash-alt"></i>
               </button>
            </div>

				<div class="col-sm-1 col-md-2 p-3 d-none d-sm-block">
					<button type="button" class="expense-category btn px-lg-3 py-3 ml-lg-3">
						${getString(mon)}
					</button>
				</div>

				<div class="col-8 col-sm-2 col-md-5 d-flex justify-content-center flex-column py-2">
					<h2 class="expense-title">${desc}</h2>
				</div>

				<div class="col-4 col-sm-0 col-md-0 d-flex align-items-center justify-content-center">
					<span class="expense-amount">$ ${amount.toFixed(2)}</span>
				</div>

			</div>
							`					
					}
		//readng the element
		const element = document.querySelector("#butid");
		//listening to the event
		element.addEventListener("click",addExpense,false);
		function val()
		{
			const no = document.querySelector("#num");
			const numval = no.value;
			const numb=parseInt("numval");
			if(numval==null||numval==''||numval==' ')
			{

				alert("enter valid amount");
			
				return false;
			}
		}
function val2()
		{
			const descl=document.querySelector("#desc");
		}