let nombre=prompt ("Ingrese su NOMBRE y APELLIDO por favor")
if(nombre==""){
  alert(" No ingresaste tu nombre y apellido")}
else{
  alert(" Bienvenido a la pagina "  + ' ' +  nombre)
}
console.log("BIENVENIDO A LA PAGINA!! HOY TENEMOS SUPER PROMOS....")

const tienetatuaje='si'
const edad=parseInt
(prompt("Ingrese su edad por favor:"))
if(edad>=18){true
alert("BUENISIMOO! podes tatuarte")}
alert("EY!! NO podes tatuarte")


alert("NUESTROS TATUADORES")
console.log("NUESTROS TATUADORES PROFESIONALES EN EL LOCAL Y EN A DOMICILIO")
function tatuadores(tatuador,edad,localidad,experiencia,adomicilio,montoadomicilio) {
  this.tatuador =tatuador;
  this.edad=edad;
  this.localidad=localidad;
  this.experiencia=experiencia;
  this.adomicilio=adomicilio;
  this.montoadomicilio=montoadomicilio;
  this.saludar=function(){console.log("MUY BUENOS DIAS!!! Te saluda" + " " + this.tatuador)}
  }
  
   const tatuador1= new tatuadores(" juan Manuel Perez"," 38 años", "Almagro","8 años", "si,tatuador a domicilio", "+$4000")
   console.log("TATUADOR PROFESIONAL",tatuador1)
  tatuador1.saludar();

   const tatuador2= new tatuadores("Adrian Andres Tauro", "28 años", "Palermo","5 años", "si, tatuador a domicilio", "+$4000")
  console.log("TATUADOR PROFESIONAL", tatuador2)
tatuador2.saludar();

  const tatuadora3=new tatuadores("Ana Maria Soto", "40 años", "Flores","10 años", "tatuadora en el local")
  console.log("TATUADORA PROFESIONAL", tatuadora3)
tatuadora3.saludar();

  const tatuadora4=new tatuadores("Sabrina Jazmin Pericoppi", "38 años","Flores","4 años", "trabaja en el local")
  console.log ("TATUADORA PROFESIONAL", tatuadora4)
tatuadora4.saludar();

  const tatuador5=new tatuadores("Martin Ezequiel Pericoppi", "42 años","Flores","12 años", "trabaja en el local")
  console.log ("TATUADOR PROFESIONAL", tatuador5)
 tatuador5.saludar();


const tatuaje=prompt("YA TE ATENDISTE EN ESTE LOCAL!?")//si
{console.log("GRACIAS POR ELEGIRNOS!!")}
const laprimeravez='no'
alert("BIENVENIDO Al TATTOOROZ!!")//no

if(tienetatuaje==tatuaje)
alert("Que modelos buscas!!??")
console.log("NUESTROS DISEÑOS DE TATTTOO")
let modelos=parseInt
(prompt("1- GATOS; / 2- BRUJAS; / 3- FANTASMA; / 4- NAVIDEÑO; / 5- COMBINAR / OTRO NUMERO PARA CANCELAR"))
switch (modelos)
{case 1:console.log("TATTOO DE GATOS:")
break
case 2:console.log("TATTOO DE BRUJAS:")
break
case 3:console.log("TATTO DE FANTASMA:")
break
case 4:console.log("TATTOO NAVIDEÑO")
break
case 5:console.log("TATTOO COMBINADOS")
break
default:console.log("cancelar el pedido!!")
break
}



const fecha=prompt("Ingrese el DIA")
if(fecha=='domingo')
alert("LOCAL CERRADO!!")
else{console.log("LOCAL ABIERTO!!!")}
console.log("DISPONIBLE")


let tatuajes=parseInt
(prompt("1: SIN COLOR; / 2: COMBINACION DE DOS O MAS, SIN COLOR; / 3: CON COLOR; / 4: COMBINACION DE DOS O MAS COLORES; /5: PROMO NAVIDEÑOS; / OTRO NUMERO PARA SALIR"))
switch (tatuajes)
{case 1:console.log("TATTOO SIN COLOR:")
break
case 2:console.log("TATTOO COMBINADO DE 2 O MAS SIN COLOR:")
break
case 3:console.log("TATTOO CON COLOR:")
break
case 4:console.log("TATTOO COMBINADO DE 2 O MAS COLORES")
break
case 5:console.log("PROMO NAVIDEÑO")
break
default:console.log("CANCELAR el PEDIDO!!")
break
}


console.log ("PRECIO SIN COLOR")
var precioTotal =8000;
var cantidad = 1;
var precioPorUnidad = precioTotal * cantidad;
console.log("El precio por unidad es: " + precioPorUnidad);
var precioTotal =8000;
for (var i =1; i <= 1; i++){
  var precioPorUnidad = precioTotal * i;
  console.log("El precio por unidad de " + i + " el total es: " + precioPorUnidad);

}


console.log ("PRECIO DE COMBINACION DE TATUAJES SIN COLOR")
var precioTotal =8000;
var cantidad = 1;
var precioPorUnidad = precioTotal * cantidad;
console.log("El precio por unidad es: " + precioPorUnidad);
var precioTotal =16000;
for (var i =2; i <= 10; i++) {
  var precioPorUnidad = precioTotal * i;
  console.log("El precio por unidad de " + i + " el total es: " + precioPorUnidad);

}
console.log ("PRECIO CON COLOR")
var precioTotal =10000;
var cantidad = 1;
var precioPorUnidad = precioTotal * cantidad;
console.log("El precio por unidad es: " + precioPorUnidad);
var precioTotal =10000;
for (var i =1; i <=1; i++) {
  var precioPorUnidad = precioTotal * i;
  console.log("El precio por unidad de " + i + " el total es: " + precioPorUnidad);

}

console.log ("PRECIO DE 2 COLORES O MAS")
var precioTotal =12000;
var cantidad = 1;
var precioPorUnidad = precioTotal * cantidad;
console.log("El precio por unidad es: " + precioPorUnidad);
var precioTotal =12000;
for (var i =2; i <= 10; i++) {
  var precioPorUnidad = precioTotal * i;
  console.log("El precio por unidad de " + i + "el total es: " + precioPorUnidad);

}
alert("SUPER PROMO NAVIDEÑO")

console.log("PROMO NAVIDEÑO")

console.log("TATUADORES/PERFORADORES")
const perforadores=["Juaquin Ayala Benitez","Juan Manuel Perez","Marcela Alejandra Alvarez"]
const joinString=perforadores.join()
console.log("PERFORADORES PROFESIONALES",perforadores)
console.log("MONTO ADOMICILIO ES + $4000")

const perforador1={
  nombre:"Juaquin Ayala",
  apellido:"Benitez"
}

const perforadora2={
  nombre:"Marcela Alejandra",
  apellido:"Alvarez"
}

const perforador3={
  nombre:"Juan Manuel",
  apellido:"Perez"
}

const adomicilioo=[perforadora2,perforador3]
console.log("perforadores a domicilio")
for(let i=0; i <  adomicilioo.length; i++){
  console.log(adomicilioo[i])
}


const horario={
    dia:"Lunes",
    horario:"14 a 18hs"
    
  }
  
  const horario1={
    dia:"Martes",
    horario:"15 a 18hs"
  }
  
  const horario2={
    dia:"Miercoles",
    horario:"15 a 17hs"
  }

  const horario3={
    dia:"Jueves",
    horario:"no disponible"
  }

  const horario4={
    dia:"Viernes",
    horario:"no disponible"
  }

const horarios=[horario, horario1, horario2, horario3, horario4 ]
console.log("HORARIO DISPONIBLE A DOMICILIO")
for(let i=0; i<horarios.length;i++){
  console.log(horarios[i])
}


alert("TENES TIEMPO HASTA EL 22/01/2024")

const finalizacioon=new Date ("2024, january, 22")
const hoy=new Date("2023, december, 20");
const finalizacioon1=(finalizacioon.getTime()-new Date().getTime())
console.log("FECHA DE FINALIZACION DE PROMO",finalizacioon)

console.log(" ¡¡LAS PROMOS!! ")
const promo=[
  {numero:1,
    promos:"Un tattoo sin color" + " "+ "y un piercing",
precio:12000},

{ numero:2,
  promos:"un tattoo con color" + " " + "y un piercing",
precio:15000
},

{numero:3,
  promos:"3 piercing",
precio:13000},

{numero:4,
  promos:"2 piercing",
precio:10000},

{numero:5,
  promos:"2 piercing" + " " + "y 2 tattoo sin color",
precio:25000
},]


promo.forEach((promo)=>{
  console.log(promo)
  console.log(promo.promos+ ":precio$"+ promo.precio)
})




const today=new Date("12/22/2023");
const localeTime=today.toLocaleDateString()
console.log("FINALIZA LAS PROMOS",localeTime)
const finalizacion=new Date("enero 22, 2024")



let recomendacion=
prompt ("ES RECOMENDABLE NUESTRO SERVICIO?? (si/no)")
if (recomendacion=="si")
{continuar=false
console.log("Genial RECOMIENDANOS!!!")

}



constgracias=prompt ("INGRESE EL PUNTAJE DE NUESTRO SERVICIO")
const GRACIASPORVISITARNOS='GRACIAS POR VISITARNOS'
const graciass='¡'+ GRACIASPORVISITARNOS +' ' +'!' 
console.log(graciass)
