// ------------------------------------------------------------------------------------------------------------------------------

const employeeName1 = {
    empName : `Virat Kohli`,
    age : 36,
    greet: function() {
        // console.log(`${empName}, Good Morning`)
        console.log(this)           // { empName: 'Virat Kohli', age: 36, greet: [Function: greet] }
    }
}

employeeName1.greet();       // <--- ReferenceError: empName is not defined


// ------------------------------------------------------------------------------------------------------------------------------


const employeeName2 = {
    empName : `Virat Kohli`,
    age : 36,
    greet: function() {
        console.log(`${this.empName}, Good Morning`)
        console.log(this)           // { empName: 'Virat Kohli', age: 36, greet: [Function: greet] }
    }
}

employeeName2.greet();              // Virat Kohli, Good Morning


// ------------------------------------------------------------------------------------------------------------------------------


const employeeName3 = {
    empName : `Virat Kohli`,
    age : 36,
    greet: function() {
        this.empName = `Sachin Tendulker`
        console.log(`${this.empName}, Good Morning`)
        console.log(this)           // { empName: 'Sachin Tendulker', age: 36, greet: [Function: greet] }
    }
}

employeeName3.greet();              // Sachin Tendulker, Good Morning


// ------------------------------------------------------------------------------------------------------------------------------


const employeeName4 = {
    empName : `Virat Kohli`,
    age : 36,
    greet: function() {
        empName = `Sachin Tendulker`
        console.log(`${this.empName}, Good Morning`)
        console.log(this)           // { empName: 'Virat Kohli', age: 36, greet: [Function: greet] }
    }
}

employeeName4.greet();              // Virat Kohli, Good Morning


// -------------------------- In Node Environemnt ----------------------------------------------------------------------------


console.log(this);                  // {}

// ---------------------------In Browser -------------------------------------------------------------------------------------


console.log(this);               
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
// 0 : Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// JSCompiler_renameProperty : ƒ (t,e)
// clearTimeout : ƒ clearTimeout()
// clientInformation : Navigator {vendorSub: '', productSub: '20030107', vendor: 'Google Inc.', maxTouchPoints: 1, scheduling: Scheduling, …}
// close: ƒ close()
// closed : false
// confirm : ƒ confirm()
// cookieStore : CookieStore {onchange: null}
// cr : {webUIResponse: ƒ, webUIListenerCallback: ƒ}
// createImageBitmap : ƒ createImageBitmap()
// credentialless : false
// crossOriginIsolated : false
// ...
// ...
// crypto : Crypto {subtle: SubtleCrypto}ƒ XRAnchorSet()
// XRBoundedReferenceSpace : ƒ XRBoundedReferenceSpace()
// XRCPUDepthInformation : ƒ XRCPUDepthInformation()
// XRCamera : ƒ XRCamera()
// XRDOMOverlayState : ƒ XRDOMOverlayState()
// XRDepthInformation : ƒ XRDepthInformation()
// XRFrame : ƒ XRFrame()
// XRHand : ƒ XRHand()
// XRHitTestResult : ƒ XRHitTestResult()
// webkitURL : ƒ URL()
// [[Prototype]] : Window

// ------------------------------------------------------------------------------------------------------------------------------