let productos=[
    
    {
        nombre: "Cleansing Oil",
        precio: 25000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/AceiteDesmaquillante.webp?alt=media&token=0d5be198-1983-44d4-b933-42d9092ae141', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/AceiteDesmaquillante1.webp?alt=media&token=4cb02607-dfc1-4218-b209-2a2563775109'],
        descripcion: 'The Cleansing Oil perfectly removes make-up (especially waterproof), oily bodies and other impurities accumulated throughout the day.'
    },
    {
        nombre: "Makeup base",
        precio: 30000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/base.webp?alt=media&token=d14431a2-8676-4c23-a4f4-a0134753db7c', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/base1.webp?alt=media&token=3876b41d-2165-4414-a11c-b11c2bc26898'],
        descripcion: 'Foundation is a liquid, cream, or powder makeup applied to the face and neck to create an even color across the complexion, cover imperfections, and sometimes change the natural skin tone.'

    },
    {
        nombre: "loose powder",
        precio: 20000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/polvo.webp?alt=media&token=dae4bf82-498c-413f-a90a-f58f4c73a88c', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/polvo1.webp?alt=media&token=75084b3b-b5bd-43c1-863e-f89c3f626b50'],
        descripcion: 'Loose Powder is a cosmetic applied to our face to achieve a uniform, fresh finish without a trace of fat. An ideal product to nuance the brightness that may appear without any inconvenience.'
    },
    {
        nombre: "Micellar water",
        precio: 20000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/aguamiselar.jpg?alt=media&token=19dcd3a4-ba0b-47fa-b71a-d865d9393b68', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/aguamiselar1.png?alt=media&token=0791c6c5-286d-496c-a777-d949019a1cd5'],
        descripcion: 'Micellar water or micellar solution is a dermopharmaceutical product intended for facial care and cleansing, it helps you remove make-up and keep your skin hydrated.'
    },
    {
        nombre: "Beauty Blender",
        precio: 10000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/BeautyBlender.jpg?alt=media&token=eb778724-ebd5-4476-9e15-472b33f29f6c', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/BeautyBlender1.jpg?alt=media&token=a56b4af3-f144-4f11-869f-05e74e5d057e'],
        descripcion: ''
    },
    {
        nombre: "Makeup Brushes",
        precio: 30000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/brochas.jpg?alt=media&token=8cb2f8e1-da19-44f0-b17b-d1f2ba016955', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/brochas1.webp?alt=media&token=85990020-6afe-4d1b-a503-b3dd5a9fa3e2'],
        descripcion: 'Different brushes for your different requirements, and perfectly perfect for all kinds of makeup. From Precision Eyeshadow Brushes to Contour Brushes, youll find everything you need in this diverse set.'
    },
    {
        nombre: "Matte Lipstick",
        precio: 10000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/labialmate.jpg?alt=media&token=22afbac9-a336-4dea-a1a6-218a44928e39', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/labialmate1.jpg?alt=media&token=6d6bee82-5a27-4dd8-9f8c-e4a3189a5079'],
        descripcion: 'The matte lipstick provides you with an intense, opaque color without shine, that is, matte. They create a satin effect that is captivating.'
    },
    {
        nombre: "Blush",
        precio: 15000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/rubor.webp?alt=media&token=5bdd706b-08b6-472f-8e3e-423e977a0e54', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/rubor1.webp?alt=media&token=2ff3cf65-f9da-4c60-9777-19de137b2561'],
        descripcion: 'A blush that gives color and luminosity to your face, leaving your skin with the perfect balance between color and light. This long-wearing blush has a smooth texture and a luminous finish.'
    },
    {
        nombre: "Outline",
        precio: 15000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/contorno1.jpg?alt=media&token=ac7d9604-1ab7-48c4-828e-03922e84c550', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/contorno.jpg?alt=media&token=beebc348-d879-48fa-9031-69e20c3caddf'],
        descripcion: 'You can perform the technique that consists of sculpting your face with the help of lights and shadows so that the features look much more defined. With this technique you can highlight or hide some areas such as the nose, chin, forehead, cheekbones and jaw.'
    },
    {
        nombre: "eyelash",
        precio: 18000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/pesta%C3%B1ina1.webp?alt=media&token=07ab240a-a57a-4891-86a1-58415d02a63e', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/pesta%C3%B1ina.webp?alt=media&token=30fae009-9e5d-4a16-b588-716d29c31651'],
        descripcion: 'There is nothing like a good lash to instantly increase the volume of our eyelashes, right? To achieve it like a professional and with incredible results, we recommend these Eyelashes.'
    },
    {
        nombre: "Eyebrow Pomade",
        precio: 18000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/vetuncejas.jpeg?alt=media&token=da7547c6-911f-4bee-b7cf-1484a97f6912', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/betundecejas1.webp?alt=media&token=55be3c58-2955-4796-ac66-fdb102980958'],
        descripcion: 'Eyebrow pomade helps to give a much more intense color, gives body and a certain volume to the eyebrows, it is the most recommended for sparse or hollow eyebrows.'
    },    
    {
        nombre: "lip tints",
        precio: 23900,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/Tintas.jpg?alt=media&token=92f10953-2c8f-479d-897e-5305e97c5dae', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/Tintas1.jpg?alt=media&token=ef3dbcf5-03ca-4730-a669-370359b624e1'],
        descripcion: 'The tints temporarily tint your lips and add an extra touch of color to their natural shade.'
    }
]


let fila=document.getElementById("fila")

//RECORRIENDO EL ARREGLO
productos.forEach(function(producto){
    
    //creando un div desde JS
    let columna=document.createElement("div")
    columna.classList.add("col")

    //creando una tarjeta
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow","text-center","h-100","p-5")

    //creando una IMAGEN
    let imagen=document.createElement("img")
    imagen.classList.add("img-fluid","w-100")
    imagen.src=producto.fotos[0]

    //DETECTANDO EVENTO DE MOUSE
    imagen.addEventListener("mouseover",function(){
        imagen.src=producto.fotos[1]
    })
    imagen.addEventListener("mouseleave",function(){
        imagen.src=producto.fotos[0]
    })


    //crear el nombre
    let nombre=document.createElement("h3")
    nombre.classList.add("fw-bold")
    nombre.textContent=producto.nombre

    //crear el precio
    let precio=document.createElement("h2")
    precio.textContent="$"+producto.precio

    //creando la descripcion
    let descripcion=document.createElement("p")
    descripcion.classList.add("text-danger","d-none")
    descripcion.textContent=producto.descripcion

    //definiendo padres e hijos
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)

})