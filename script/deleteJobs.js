document.getElementsByTagName("main")[0].addEventListener("click",deleteThisJob)

function deleteThisJob(event){
    if(event.target.closest(".btn-circle")){
        event.target.parentElement.parentElement.closest(".job-item").remove();
    }
    
    
    updateAllCounter();
    updateInterviewCounter() ;
    updateRejectCounter();
    sideCounter();
}