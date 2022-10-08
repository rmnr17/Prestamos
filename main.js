function validar(){
    let nom=document.getElementById("nombre").value
    localStorage.setItem("nombre", nom.toUpperCase())
    let ape=document.getElementById("apellido").value
    localStorage.setItem("apellido", ape.toUpperCase())
    let fec=document.getElementById("fechan").value
    localStorage.setItem("fechaNacimiento", fec)
    let doc=document.getElementById("documento").value
    localStorage.setItem("documento", doc)
    let ing=document.getElementById("ingresos").value
    localStorage.setItem("ingresos", ing)
    let pro=document.getElementById("provincia").value
    localStorage.setItem("provincia", pro)
    let ema=document.getElementById("email").value
    localStorage.setItem("email", ema)
    let ema2=document.getElementById("email2").value
    localStorage.setItem("email", ema2)
    if (nom=="") alert("debe ingresar su nombre")
    if (ape=="") alert("debe ingresar su apellido")
    if (doc>100000000||doc<=0) alert("ingrese un número de documento válido")
    if (ing==0) alert("se requiere un monto válido de ingreso mensual")
    if (pro==="Selecciona una") alert("ingrese una provincia")
    if ((ema.indexOf("@") == -1)||(ema.indexOf(".")==-1)) alert("ingrese una dirección válida de email")
    if (ema!==ema2) alert("las direcciones de email no coinciden")
    if ((fec.substr(0,4)==="")||(fec.substr(5,2)==="")||(fec.substr(8,2)==="")) alert("ingrese una fecha de nacimiento válida") 
    var aNac = parseInt(fec.substr(0,4))
    var mNac = parseInt(fec.substr(5,2))
    var fecha = new Date()
    var aAct = fecha.getFullYear()
    var mAct = 1+fecha.getMonth()
    if (((aAct-aNac)>80)||((aAct-aNac)==80) && (mAct>=mNac)) alert("debe tener menos de 80 años al momento de la solicitud")
    if (((aAct-aNac)<18)||((aAct-aNac)==18) && (mAct<mNac)) alert("debe tener 18 años cumplidos")
    if ((nom!="")&&(ape!="")&&(doc<100000000&&doc>0)&&(ing!=00)&&(pro!=="Selecciona una")&&
    (ema===ema2)&&(fec.substr(0,4)!=="")&&(fec.substr(5,2)!=="")&&(fec.substr(8,2)!=="")&&
    !(((aAct-aNac)>80)||((aAct-aNac)==80) && (mAct>=mNac))&&!(((aAct-aNac)<18)||((aAct-aNac)==18) && (mAct<mNac))) 
    alert("SU SOLICITUD SE HA ENVIADO CORRECTAMENTE")
}
function limpiar(){
    document.getElementById("nombre").value=""
    localStorage.setItem("nombre", "")
    document.getElementById("apellido").value=""
    localStorage.setItem("apellido", "")
    document.getElementById("fechan").value=""
    localStorage.setItem("fechaNacimiento", "")
    document.getElementById("documento").value=null
    localStorage.setItem("documento", 0)
    document.getElementById("ingresos").value=null
    localStorage.setItem("ingresos", 0)
    document.getElementById("provincia").value="Selecciona una"
    localStorage.setItem("provincia", "Selecciona una")
    document.getElementById("email").value=""
    localStorage.setItem("email", "")
    ema2=document.getElementById("email2").value=""
    localStorage.setItem("email", "")
}