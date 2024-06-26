let bar1=document.getElementById("bar1");
let bar2=document.getElementById("bar2");
let bar3=document.getElementById("bar3");
let con1=document.getElementById("con1");
let con2=document.getElementById("con2");
let con3=document.getElementById("con3");
let bar=[bar1,bar2,bar3];
let bar_con=[con1,con2,con3];

function but1(x)
{
   
    bar[x].style.background="aqua";
    bar[x].style.color="black";
    bar[x].style.transition="0.7s";
    bar_con[x].style.display="block";
    
    for(i=0;i<3;i++)
        {
            if(i != x)
                {
                    bar[i].style.background="black";
                    bar[i].style.color="white";
                    bar_con[i].style.display="none";
                }
        }
       
}



// this code is for slide navigation

  



// college links

vtu=()=>
    {
        window.open("https://vtu.ac.in/");
    }
sap=()=>
    {
        window.open("https://sacollegenaregal.edu.in/about-college/");
    }
jnv=()=>
    {
        window.open("https://www.navodaya.gov.in/nvs/nvs-school/GADAG/en/about_us/About-JNV/");
    }
  
  