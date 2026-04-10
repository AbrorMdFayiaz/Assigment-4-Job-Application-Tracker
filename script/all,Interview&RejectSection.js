let lastPortionShower = 1 ;

document.getElementById("all-section-button").addEventListener("click",AllPortionShower)


function AllPortionShower (event){

        // if (event.target===document.getElementById("all-section-button")) {


        // }
        //     document.getElementById("all-section").classList.add("hidden")
        //     document.getElementById("interview-section").classList.add("hidden")
        //     document.getElementById("reject-section").classList.add("hidden")

        //     document.getElementById("all-section").classList.remove("hidden")


        console.log(78889)

        lastPortionShower = 1 ;
        // 1 = all section shower 


        let container = document.getElementById("all-section");

        for (const element of container.children) {
            element.classList.remove("hidden")
        }



        document.getElementById("all-section-button").classList.add("bg-info");
        document.getElementById("all-section-button").classList.add("text-base-100");


        document.getElementById("all-section-button").classList.remove("text-[#64748B]");

        document.getElementById("interview-section-button").classList.remove("text-base-100");
        document.getElementById("interview-section-button").classList.remove("bg-info");
        document.getElementById("reject-section-button").classList.remove("text-base-100");
        document.getElementById("reject-section-button").classList.remove("bg-info");



        sideCounter(lastPortionShower);
}





document.getElementById("interview-section-button").addEventListener("click",InterviewPortionShower)

function InterviewPortionShower (event){

        //     if (event.target===document.getElementById("interview-section-button")) {

           
        // }
        //  document.getElementById("all-section").classList.add("hidden")
        //     document.getElementById("interview-section").classList.add("hidden")
        //     document.getElementById("reject-section").classList.add("hidden")

        //     document.getElementById("interview-section").classList.remove("hidden")
        console.log(55);


        lastPortionShower = 2 ;
        // 2 = interview section shower 


        let container = document.getElementById("all-section");

        for (const element of container.children) {
            if (element.classList.contains("interview-chosen")) {
                
                element.classList.remove("hidden");
            }
            else{
                element.classList.add("hidden");
            }
        }






        document.getElementById("interview-section-button").classList.add("bg-info");
        document.getElementById("interview-section-button").classList.add("text-base-100");

        document.getElementById("interview-section-button").classList.remove("text-[#64748B]");

        document.getElementById("all-section-button").classList.remove("text-base-100");
        document.getElementById("all-section-button").classList.remove("bg-info");
        document.getElementById("reject-section-button").classList.remove("text-base-100");
        document.getElementById("reject-section-button").classList.remove("bg-info");





        sideCounter(lastPortionShower);

}






document.getElementById("reject-section-button").addEventListener("click",RejectPortionShower)

function RejectPortionShower (event){
    // if (event.target===document.getElementById("reject-section-button")) {

    //         document.getElementById("all-section").classList.add("hidden")
    //         document.getElementById("interview-section").classList.add("hidden")
    //         document.getElementById("reject-section").classList.add("hidden")

    //         document.getElementById("reject-section").classList.remove("hidden")
    //     }


    lastPortionShower = 3 ;
    // 3 = reject section shower 

    let container = document.getElementById("all-section");
            for (const element of container.children) {
            if (element.classList.contains("reject-chosen")) {
                
                element.classList.remove("hidden");
            }
            else{
                element.classList.add("hidden");
            }
        }







        document.getElementById("reject-section-button").classList.add("bg-info");
        document.getElementById("reject-section-button").classList.add("text-base-100");

        document.getElementById("reject-section-button").classList.remove("text-[#64748B]");

        document.getElementById("all-section-button").classList.remove("text-base-100");
        document.getElementById("all-section-button").classList.remove("bg-info");
        document.getElementById("interview-section-button").classList.remove("text-base-100");
        document.getElementById("interview-section-button").classList.remove("bg-info");







        sideCounter(lastPortionShower);
}