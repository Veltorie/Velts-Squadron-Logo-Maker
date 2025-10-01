/*==================== const ====================*/
var logosetting = 'LOGOBACKGROUND';
var colourselected = [51,51,51];
var logoset = "0" ;
var LOGOBACKGROUND         = "0" ;
var LOGOBACKGROUNDCOLOUR   = [51,51,51] ;
var LOGOMIDDLEGROUND       = "0" ;
var LOGOMIDDLEGROUNDCOLOUR = [51,51,51] ;
var LOGOFORGROUND          = "0" ;
var LOGOFORGROUNDCOLOUR    = [51,51,51] ;

/*===== Functions =====*/
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function switchgrounding(p1){
    logosetting = p1;
    if (p1 == 'LOGOBACKGROUND'){
        logoset = LOGOBACKGROUND;
        colourselected = LOGOBACKGROUNDCOLOUR;
    } else if (p1 == 'LOGOMIDDLEGROUND'){
        logoset = LOGOMIDDLEGROUND;
        colourselected = LOGOMIDDLEGROUNDCOLOUR;
    } else if (p1 == 'LOGOFORGROUND'){
        logoset = LOGOFORGROUND;
        colourselected = LOGOFORGROUNDCOLOUR;
    }
}

async function updatecanvas() {
    if (logosetting == 'LOGOBACKGROUND'){
        LOGOBACKGROUND = logoset;
        LOGOBACKGROUNDCOLOUR = colourselected;
    } else if (logosetting == 'LOGOMIDDLEGROUND'){
        LOGOMIDDLEGROUND = logoset;
        LOGOMIDDLEGROUNDCOLOUR = colourselected;
    } else if (logosetting == 'LOGOFORGROUND'){
        LOGOFORGROUND = logoset;
        LOGOFORGROUNDCOLOUR = colourselected;
    }
    document.getElementById("LOGOSETTING").src = `https://github.com/Veltorie/Velts-Squadron-Logo-Maker/blob/main/assets/img/${logoset}.png?raw=true`;
    const c = document.getElementById(logosetting);
    const c2nd = document.getElementById(`${logosetting}FINAL`);
    const ctx = c.getContext("2d");
    await sleep(50);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(document.getElementById("LOGOSETTING"), 0, 0);
    const imgData = ctx.getImageData(0, 0, c.width, c.height);

    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = colourselected[0];
        imgData.data[i+1] = colourselected[1];
        imgData.data[i+2] = colourselected[2];
    }
    ctx.putImageData(imgData, 0, 0);
    c2nd.getContext("2d").clearRect(0, 0, c2nd.width, c2nd.height);
    c2nd.getContext("2d").putImageData(imgData, 0, 0);
}
