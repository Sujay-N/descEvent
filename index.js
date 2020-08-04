

addDes = () =>{
    console.log("Click")
    var desc = document.getElementById("desc").value;
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
}