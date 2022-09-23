//popularidad=1 hasta 5

let productos=[

    {
        nombre: "Aceite Desmaquillante",
        precio: 25.000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/AceiteDesmaquillante.webp?alt=media&token=0d5be198-1983-44d4-b933-42d9092ae141', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/AceiteDesmaquillante1.webp?alt=media&token=4cb02607-dfc1-4218-b209-2a2563775109'],
        descripcion: 'El Aceite Desmaquillante elimina perfectamente el maquillaje (en especial el waterproof), los cuerpos grasos y otras impurezas acumuladas a lo largo del día.'
    },
    {
        nombre: "Base",
        precio: 30.000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/base.webp?alt=media&token=d14431a2-8676-4c23-a4f4-a0134753db7c', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/base1.webp?alt=media&token=3876b41d-2165-4414-a11c-b11c2bc26898'],
        descripcion: 'La base es un maquillaje líquido, en crema o en polvo que se aplica en la cara y el cuello para crear un color uniforme en la tez, cubrir imperfecciones y, a veces, cambiar el tono natural de la piel.'

    },
    {
        nombre: "Polvo Suelto",
        precio: 20.000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/polvo.webp?alt=media&token=dae4bf82-498c-413f-a90a-f58f4c73a88c', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/polvo1.webp?alt=media&token=75084b3b-b5bd-43c1-863e-f89c3f626b50'],
        descripcion: 'El Polvo Suelto es un cosmético aplicado en nuestro rostro para lograr un acabado uniforme, fresco y sin rastro de grasa. Un producto ideal para matizar el brillo que pueda aparecer sin ningún inconveniente.'
    },
    {
        nombre: "Agua Miselar",
        precio: 20.000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/aguamiselar.jpg?alt=media&token=19dcd3a4-ba0b-47fa-b71a-d865d9393b68', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/aguamiselar1.png?alt=media&token=0791c6c5-286d-496c-a777-d949019a1cd5'],
        descripcion: 'El agua micelar o solución micelar es un producto dermofarmacéutico destinado al cuidado y la limpieza facial, te ayuda para desmaquillarte y mantener hidratada tu piel.'
    },
    {
        nombre: "Beauty Blender",
        precio: 10.000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/BeautyBlender.jpg?alt=media&token=eb778724-ebd5-4476-9e15-472b33f29f6c', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/BeautyBlender1.jpg?alt=media&token=a56b4af3-f144-4f11-869f-05e74e5d057e'],
        descripcion: ''
    },
    {
        nombre: "Brochas",
        precio: 30.000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/brochas.jpg?alt=media&token=8cb2f8e1-da19-44f0-b17b-d1f2ba016955', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/brochas1.webp?alt=media&token=85990020-6afe-4d1b-a503-b3dd5a9fa3e2'],
        descripcion: 'Brochas diferentes para sus diferentes requisitos, y perfectamente perfecto para todo tipo de maquillaje. Desde Brochas de sombra de ojos de precisión hasta Brochas de contorno, encontrará todo lo que necesita en este conjunto diverso.'
    },
    {
        nombre: "Labial Mate",
        precio: 10.000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/labialmate.jpg?alt=media&token=22afbac9-a336-4dea-a1a6-218a44928e39', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/labialmate1.jpg?alt=media&token=6d6bee82-5a27-4dd8-9f8c-e4a3189a5079'],
        descripcion: 'El labial mate te proporciona un color intenso, opaco y sin brillos, es decir, mate. Crean un efecto satinado que resulta cautivador.'
    },
    {
        nombre: "Rubor",
        precio: 15.000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/rubor.webp?alt=media&token=5bdd706b-08b6-472f-8e3e-423e977a0e54', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/rubor1.webp?alt=media&token=2ff3cf65-f9da-4c60-9777-19de137b2561'],
        descripcion: 'Un blush que le da color y luminosidad a tu cara, dejando en tu piel el balance perfecto entre color y luz. Este rubor larga duración cuenta con una textura suave y acabado luminoso. '
    },
    {
        nombre: "Contorno",
        precio: 15.000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/contorno1.jpg?alt=media&token=ac7d9604-1ab7-48c4-828e-03922e84c550', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/contorno.jpg?alt=media&token=beebc348-d879-48fa-9031-69e20c3caddf'],
        descripcion: 'Puedes realizar la tecnica que consiste en esculpir tu cara con la ayuda de luces y sombras para que los rasgos se vean mucho más definidos. Con esta técnica puedes resaltar o disimular algunas áreas como la nariz, el mentón, la frente, los pómulos y la mandíbula.'
    },
    {
        nombre: "Pestañina",
        precio: 18.000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/pesta%C3%B1ina1.webp?alt=media&token=07ab240a-a57a-4891-86a1-58415d02a63e', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/pesta%C3%B1ina.webp?alt=media&token=30fae009-9e5d-4a16-b588-716d29c31651'],
        descripcion: 'No hay nada como una buena pestañina para aumentar el volumen de nuestras pestañas al instante ¿Verdad? Para lograrlo como toda una profesional y con resultados increíbles te recomendamos estas Pestañinas '
    },
    {
        nombre: "Betun Cejas",
        precio: 18.000,
        cantidad: 0,
        fotos: ['https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/vetuncejas.jpeg?alt=media&token=da7547c6-911f-4bee-b7cf-1484a97f6912', 'https://firebasestorage.googleapis.com/v0/b/tiendaprofe-1b04a.appspot.com/o/betundecejas1.webp?alt=media&token=55be3c58-2955-4796-ac66-fdb102980958'],
        descripcion: 'pomada para cejas ayuda a dar un color mucho más intenso, brinda cuerpo y cierto volumen a las cejas, es el más recomendado para cejas escasas o con huecos.'
    }

]