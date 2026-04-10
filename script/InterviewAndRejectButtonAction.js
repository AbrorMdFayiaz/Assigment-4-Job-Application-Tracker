// document.getElementsByTagName("main")[0].addEventListener("click",interviewButtonAction)

// let

// function interviewButtonAction (event){
//     if(event.target.closest(".interview-button")){
//         // event.target.parentElement.parentElement.closest(".job-item").remove();
//         document.getElementById("interview-section").appendChild(event.target.parentElement.parentElement.cloneNode(true));
//         console.log(99);
//     }
//     if(event.target.closest(".reject-button")){
//         // event.target.parentElement.parentElement.closest(".job-item").remove();
//         document.getElementById("reject-section").appendChild(event.target.parentElement.parentElement.cloneNode(true));
//         console.log(99);
//     }
// }









// individual buttons ( interview , reject )


document.getElementsByTagName("main")[0].addEventListener("click",interviewAndRejectButtonAction)


function interviewAndRejectButtonAction (event){
    // interview part
    if(event.target.closest(".interview-button")){
        // event.target.parentElement.parentElement.closest(".job-item").remove();
        // event.target.parentElement.parentElement.parentElement.parentElement.classList.add("interview-chosen") ;
        event.target.closest(".job-item").classList.add("interview-chosen") ;
        event.target.closest(".job-item").classList.remove("reject-chosen") ;


        event.target.parentElement.parentElement.children[2].innerText="INTERVIEW";
        event.target.parentElement.parentElement.children[2].classList.add("bg-green-300/50");
        event.target.parentElement.parentElement.children[2].classList.remove("bg-red-300/50");
        console.log(9789);

        updateInterviewCounter() ;
        updateRejectCounter();


        if (lastPortionShower === 1 )
         {
            AllPortionShower();
            
        } else if (lastPortionShower === 2){
            InterviewPortionShower();
        }
        else{
            RejectPortionShower();
        }
    }
    // reject part
     if(event.target.closest(".reject-button")){
        // event.target.parentElement.parentElement.closest(".job-item").remove();
        // event.target.parentElement.parentElement.parentElement.parentElement.classList.add("reject-chosen") ;
        event.target.closest(".job-item").classList.add("reject-chosen") ;
        event.target.closest(".job-item").classList.remove("interview-chosen")




        event.target.parentElement.parentElement.children[2].innerText="REJECTED";
        event.target.parentElement.parentElement.children[2].classList.add("bg-red-300/50");
        event.target.parentElement.parentElement.children[2].classList.remove("bg-green-300/50");
        console.log(99);


        updateInterviewCounter() ;
        updateRejectCounter();




        if (lastPortionShower === 1 )
         {
            AllPortionShower();
            
        } else if (lastPortionShower === 2){
            InterviewPortionShower();
        }
        else{
            RejectPortionShower();
        }
    }
}
