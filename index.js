
addDes = () =>{
  
    console.log("Click")
    let desc = document.getElementById("sendingData").value;
    console.log(desc);

    window.parent.postMessage(JSON.stringify({
        event_code: 'ym-client-event', data: JSON.stringify({
            event: {
                code: "description",
                data: {
                    description : desc
                }
            }
        })
    }), '*');

    document.getElementById("sendingData").value=""
}