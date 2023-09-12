const display=document.querySelector('#display');
const buttons=document.querySelectorAll('button');
buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=='clear'){
            display.innerText='';
        }
        else if(item.id=='backspace')
        {
            let s=display.innerText.toString();
            display.innerText=s.substr(0,s.length-1);
        }
        else if(item.id=='equal'&&display.innerText=="")
        {
              display.innerText="Empty!";
              setTimeout(() => (display.innerText = ""), 2000);

        }
        else if(item.id=='equal'&&display.innerText!="")
        {
            display.innerText=eval(display.innerText)
        }
    
        else{
            display.innerText +=item.id;
        }
    };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const toggleIcon = document.querySelector(".toggler-icon");
const calculator = document.querySelector(".calculator");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
