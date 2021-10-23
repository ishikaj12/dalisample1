// this is the javascript code that controls the interactive portion of switching between the sign in and sign up tabs
// this section was more worked on by the other members of the group rather than me

let activeChange = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");

for(let i=0;i<activeChange.length;i++){
  activeChange[i].addEventListener("click",function(){
    // makes everything that was active unactive by removing active label
    document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
    activeChange[i].classList.add("active");
    
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
    document.getElementsByClassName("tab-content")[0].getElementsByClassName("tab-body")[i].classList.add("active");
  });
}