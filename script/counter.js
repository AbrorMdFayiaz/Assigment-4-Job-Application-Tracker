function updateAllCounter () {
    let container = document.getElementById("all-section");
    
    let allCounter=0;
    for (const element of container.children) {
        allCounter++;
    }
    console.log(allCounter);
    document.getElementById("total-counter").innerText=allCounter;

    
}


function updateInterviewCounter () {
    let container = document.getElementById("all-section");
    
    let interviewCounter=0;
    for (const element of container.children) {
        if (element.classList.contains("interview-chosen")) {
            interviewCounter++;
        }
    }
    document.getElementById("interview-counter").innerText=interviewCounter;
}
function updateRejectCounter () {
    let container = document.getElementById("all-section");
    
    let rejectCounter=0;
    for (const element of container.children) {
        if (element.classList.contains("reject-chosen")) {
            rejectCounter++;
        }
    }
    document.getElementById("reject-counter").innerText=rejectCounter;
}









function sideCounter(lastPortionShower) {
//             if (lastPortionShower === 1 )
//             {
//                 let allCounter=0;
            
//                 for (const element of container.children) {
//                 allCounter++;
//             }
//     document.getElementById("side-counter").innerText=allCounter;
            
//     }
//              else if (lastPortionShower === 2){

//             let interviewCounter=0;
//             for (const element of container.children) {
//                 if (element.classList.contains("interview-chosen")) {
//                         interviewCounter++;
//         }
//     }
//             document.getElementById("side-counter").innerText=interviewCounter;
//         }
//         else{

//             let container = document.getElementById("all-section");
    
//             let rejectCounter=0;
//             for (const element of container.children) {
//                 if (element.classList.contains("reject-chosen")) {
//                     rejectCounter++;
//             }
//             document.getElementById("side-counter").innerText=rejectCounter;
//         }
// }

        let container = document.getElementById("all-section");
        let sideCounter=0;

        for (const element of container.children) {
            if (element.classList.contains("hidden")) {
                continue;
            }
            else{
                sideCounter++;
            }
        }


        document.getElementById("side-counter").innerText=sideCounter;


        if (sideCounter===0) {
            document.getElementById("empty-section").classList.remove("hidden");
        }
        else{
            document.getElementById("empty-section").classList.add("hidden");
        }


}