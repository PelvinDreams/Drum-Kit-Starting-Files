let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    let buttonInnerHtml = this.innerHTML;

      switch (buttonInnerHtml) {
        case "w":
            let tom1 = new Audio ("sounds/tom-1.mp3");  
            tom1.play();
            // this.style.color = "#ccc";
            break;
      
            case "a":
                let tom2 = new Audio ("sounds/tom-2.mp3");
                 tom2.play();
                //  this.style.color = "black";
                 break;

            case "s":
                let tom3 = new Audio ("sounds/tom-3.mp3");
               tom3.play();
               break;

               case "d":
                let tom4 = new Audio ("sounds/tom-4.mp3");
                tom4.play();
                break;

                case "j":
                    let snare = new Audio ("sounds/snare.mp3");
                   snare.play();
                   break;

                   case "k":
                    let crash = new Audio ("sounds/crash.mp3");
                     crash.play();
                     break;

                     case "l":
                        let kick_bass = new Audio ("sounds/kick-bass.mp3");
                          kick_bass.play();
                         break;


                        default: console.log(buttonInnerHtml);
                }

        
    });
}

     document.addEventListener("keypress", function(event) {
       console.log(event);

});






