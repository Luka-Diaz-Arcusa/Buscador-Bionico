let container = document.getElementById("contenedor")


let letra = document.querySelector(".daLetra")


let canciones = [
    //Tan biónica
    {nombre: 'La melodía de Dios', album:'Destinología', lyrics:
    `Todas las mañanas del mundo y esta angustia barata. <br> 
    El reloj amenaza y retrasa <br> 
    Y la falta que haces en la casa <br> <br> 

    Cada cosa que no decís <br>
    Porque te está haciendo daño <br> 
    En el nombre de mi desengaño <br> 
    A la noche te extraño, te extraño <br> <br> 

    Vivo como siempre <br> 
    Desarmado sobre mí <br> <br> 

    Con vos es 4 de noviembre cada media hora <br> 
    Atrasaré las horas, horas, horas <br> 
    Que algo te libre de las penas acompañadoras <br> 
    Cuando te sientas sola, sola, sola <br> <br> 

    Toda tu mesita de luz <br> 
    Lleva el color de tu esencia <br> 
    Las mañanas exigen clemencia <br> 
    La catástrofe que hizo tu ausencia <br> 
    Cuando se libere mi alma <br> 
    De tus ojos de encanto <br> 
    Cuando el frío no enfríe tanto <br> 
    Los domingos y jueves de espanto <br> <br> 

    Vivo como siempre <br> 
    Desarmado sobre mí <br> 
    Yo buscaré algún sol ahí <br> <br> 

    Con vos es 4 de noviembre cada media hora <br> 
    Atrasaré las horas, horas, horas <br> 
    Que algo te libre de las penas acompañadoras <br> 
    Cuando te sientas sola, sola, sola <br> <br> 

    Cuando me faltes este otoño y se despinten solas <br> 
    Tus acuarelas todas, todas, todas <br> 
    No quiero nada más sin vos, no quiero estar a solas <br> 
    No quiero Barcelona dijo "Hola" <br> <br> 

    Con vos es 4 de noviembre cada media hora <br> 
    Atrasaré las horas, horas, horas <br> 
    Que algo te libre de las penas acompañadoras <br> 
    Cuando te sientas sola, sola, sola <br> 
    Cuando me faltes este otoño y se despinten solas <br> 
    Tus acuarelas todas, todas, todas <br> 
    No quiero nada más sin vos, no quiero estar a solas <br> 
    No quiero Barcelona dijo "Hola" <br> <br> 

    Atrasaré las horas, horas, horas <br> 
    (Atrasaré las horas, atrasaré las horas) <br> 
    Atrasaré las horas, horas, horas <br> 
    (Atrasaré las horas, atrasaré las horas) <br> 
    Atrasaré las horas, horas, horas <br> 
    (Atrasaré las horas, atrasaré las horas) <br> 
    Atrasaré las horas, horas, horas `},


    {nombre: 'Ella', album:'Obsesionario', lyrics: 
    `Después de 24 meses sin dormir <br> 
    Sostiene su entereza con gotitas de marfil <br> 
    Me tira una mirada que no puedo resistir <br> 
    Se aleja con un Johnny que la ayuda a revivir <br> 
    Despliega movimientos energéticos <br> 
    Frenéticos, eléctricos <br> <br> 

    Ella tiene un look, tiene un look <br> 
    Ella dibuja mi destino con rouge <br> 
    Ella tiene swing, tiene swing <br> 
    Tiene todo lo que necesita de mí <br> <br> 

    Y está saliendo el sol, para vos <br> 
    Y está bailando mi corazón <br> 
    Y estas tratando de sentirte mejor 
    <br> Y está bailando mi corazón <br> <br> 
    Princesa de la noche, heredera de Caín <br> 
    Duplica en ese espejo y se arrepiente de salir <br> 
    Y come bombos electrónicos <br> 
    Psicóticos, agónico <br> <br> 

    Ella tiene un look, tiene un look <br> 
    Ella dibuja mi destino con rouge <br> 
    Ella tiene swing, tiene swing <br> 
    Tiene todo lo que necesita de mí <br> <br> 

    Y está saliendo el sol, oh <br> 
    Y está bailando mi corazón <br> 
    Estas tratando de sentirse mejor <br> 
    Y está bailando mi corazón <br> <br> 

    Pensar que hay noches, nena, que soy como vos 
    <br> Y está bailando mi corazón 
    <br> Estas tratando de sentirse mejor 
    <br> Y está bailando mi corazón <br> <br>  

    Y está saliendo el sol, oh <br> 
    Y está bailando mi corazón <br> 
    Estas tratando de sentirse mejor <br> 
    Y está bailando mi corazón `},

    {nombre: 'Ciudad Mágica', album:'Destinología', lyrics:
    `Intento seguirte pero no doy más <br> 
    Sospecho que el tiempo se nos va a acabar <br>
    Estás algo loca y sos tan clásica <br>
    Dejá que la noche nos proponga más <br><br>

    Decime que sí, hacé como yo, a ver si sos tan genial <br>
    Persigo tus ojos por la capital <br>
    Me gusta que seas tan dramática <br>
    Tus ojos dibujan una eternidad <br><br>

    Y está muy bien así <br>
    Por hoy no pienses más <br>
    Yo sé que lo necesitás <br><br>

    Me quedo con vos, yo sigo de largo, voy a buscarte <br>
    Qué noche mágica ciudad de Buenos Aires <br>
    Se queman las horas, de esta manera nadie me espera <br>
    Cómo me gusta verte caminar así <br><br>

    Me quedo con vos, yo sigo de largo, voy a buscarte <br>
    Me mata cómo te movés por todas partes <br>
    Se queman las horas, de esta manera nadie me espera <br>
    Cómo me gusta verte caminar así <br>
    Algunos momentos de esta eternidad <br>
    Me son suficientes para recordar <br>
    Tus piernas bailando son tan mágicas <br>
    La noche se presta para mucho más <br><br>

    Y está muy bien así <br>
    Por hoy no pienses más <br>
    Yo sé que lo necesitás <br><br>

    Me quedo con vos, yo sigo de largo, voy a buscarte <br>
    Qué noche mágica ciudad de Buenos Aires <br>
    Se queman las horas, de esta manera nadie me espera <br>
    Cómo me gusta verte caminar así <br>
    Me quedo con vos, yo sigo de largo, voy a buscarte <br>
    Me mata cómo te movés por todas partes <br>
    Se queman las horas, de esta manera nadie me espera <br>
    Cómo me gusta verte caminar así <br><br>

    Qué noche mágica ciudad de Buenos Aires <br>
    Cómo me gusta verte caminar así <br>
    Me quedo con vos, yo sigo de largo, voy a buscarte <br>
    Me mata cómo te movés por todas partes. <br>
    Se queman las horas, de esta manera nadie me espera <br>
    Cómo me gusta verte caminar así. `},

    {nombre: 'Obsesionario en La mayor', album:'Obsesionario', lyrics: 
    `No hay como cantar Obsesionario <br>
    Con el corazón en la mano <br><br>

    Después de la lluvia, del perfume de la angustia <br>
    Y el sonido del silencio que dejás cuando te vas <br>
    Despues de no sobrevivir a las mañanas de ese abril <br>
    Nubladas como rotas <br><br>

    Viajo bien adentro a la ciudad del desencuentro <br>
    Capital del nuevo centro del vacío existencial <br>
    Cómo me desilusionás cuando amagas y tiroteás <br>
    Sin terminar las cosas<br><br>

    Libertad <br>
    Mi casa es un desastre; mi vida, un poco más <br>
    Corazón <br>
    Qué caros son los precios del amor, oh-oh-oh <br><br>

    No te encontré en el centro hoy <br>
    Y una secuencia de terror <br>
    Y soñé pasiones locas con vos <br>
    Y simplemente pasa que <br>
    Tengo ganas de verte <br>
    Y simplemente pasa que <br><br>

    Algo habré perdido y algo habré perdido que ando tan comprometido <br>
    En buscar adentro tuyo algo que está dentro mío <br>
    Y algo para poder tapar <br>
    Mi gran agujero espiritual, mis ilusiones rotas <br><br>

    Creo que buscarte es menos digno que pensarte <br>
    Más difícil que encontrarte y menos triste que olvidarte <br>
    Me preguntaste: ¿no tomás? Te dije: "ya no lo hago más" <br>
    Y te aburrió la historia <br><br>

    Libertad <br>
    Mi casa es un desastre; mi vida, un poco más <br>
    (Corazón) ¡precioso! <br>
    Qué caros son los precios del amor, oh-oh-oh <br><br>

    No te encontré en el centro hoy <br>
    Y una secuencia de terror <br>
    Y no sé qué está pasando con vos <br>
    Que simplemente pasa que <br><br>

    Tengo ganas de verte <br>
    Que simplemente pasa que <br>
    No te encontré en el centro hoy <br>
    Y una secuencia de terror <br>
    Y lloré la noche del apagón <br>
    Y simplemente pasa que <br>
    Tengo ganas de verte <br>
    Y simplemente pasa que (uh-uh-uh, uh) <br><br>

    No te encontré en el centro hoy <br>
    Y una secuencia de terror <br>
    Y soñé pasiones locas con vos <br>
    Y simplemente pasa que <br><br>

    Tengo ganas de verte <br>
    Y simplemente pasa que <br>
    Tengo ganas de verte <br>
    Tengo ganas de verte <br>
    ¡Gracias! `},

    {nombre: 'Mis noches de enero', album:'Destinología', lyrics: 
    `Se detuvo el tiempo y la lluvia no llovió <br>
    Cuando por el cielo de Palermo apareció <br>
    Vengo atravesado por un lunes de terror <br>
    Y no lamento, otra tardecita sin sol <br><br>

    Tengo algún recuerdo del lugar dónde nací <br>
    Tengo la sospecha de que también fui feliz <br>
    Tengo tantas ganas de parar y de seguir <br>
    O de fugarme por algunos siglos de mí <br><br>

    Y a cada noche que anocheció <br>
    Su cancioncita triste <br>
    Me llevó <br>
    Me llevó <br><br>

    Y a coquetear con demonios no <br>
    Su bailecito torpe <br>
    Me llevó <br>
    Me llevó <br><br>

    Yo buscaré en mis recuerdos otra vez <br>
    Tus ojos primero, mis noches de enero <br>
    Yo viajaré, aprendiendo a seguir <br><br>

    Abocado al arte <br>
    De necesitarte <br>
    Quiero recordarte así <br><br>

    Y a cada noche que anocheció <br>
    Su cancioncita triste <br>
    Me llevó <br>
    Me llevó <br><br>

    Y a coquetear con demonios no <br>
    Su bailecito torpe <br>
    Me llevó <br>
    Me llevó <br><br>

    Yo buscaré en mis recuerdos otra vez <br>
    Tus ojos primero, mis noches de enero <br>
    Yo viajaré, aprendiendo a seguir <br><br>

    Abocado al arte <br>
    De necesitarte <br>
    Quiero recordarte así <br><br>

    Yo viajaré, aprendiendo a seguir <br>
    Tus ojos primero, mis noches de enero <br>
    Yo viajaré, aprendiendo a seguir <br>
    Tus ojos primero, mis noches de enero <br><br>

    Yo buscaré en mis recuerdos otra vez <br>
    Tus ojos primero, mis noches de enero <br>
    Yo buscaré <br>
    Tus ojos primero, mis noches de enero <br><br>

    Yo buscaré (Qué poco nos queda) <br>
    Tus ojos primero, mis noches de enero <br>
    Yo viajaré (Qué poco nos queda )<br>
    Tus ojos primero, mis noches de enero <br><br>

    Yo viajaré, aprendiendo a seguir <br>
    Tus ojos primero, mis noches de enero <br>
    Yo viajaré, aprendiendo a seguir <br>
    Tus ojos primero, mis noches de enero <br><br>

    Yo buscaré (Qué poco nos queda) <br>
    Tus ojos primero, mis noches de enero <br>
    Yo viajaré, aprendiendo a seguir <br>
    Tus ojos primero, mis noches de enero. `},

    {nombre: 'Beautiful', album:'Obsesionario', lyrics: 
    `Ella es el hada perdida que un día dormida en mi vida cayó <br>
    Sale del baño desnuda, se prueba vestidos, no pide perdón <br>
    Ama los inconvenientes, se enoja conmigo y me habla en francés <br>
    Baila como la princesa del reino neurótico de mi niñez <br>
    Ella dice: "beautiful" <br>
    Suena como libertad <br><br>

    Toda esa noche borracho creía encontrarla, pero la perdí <br>
    Tuve que hacer algún duelo, cortar mi deseo con un bisturí <br>
    Quise buscar en la gota del último whisky que nunca bebí <br>
    Tuve un amor anterior en la noche del día después que te vi <br>
    Ella dice: "beautiful" <br>
    Suena como libertad <br><br>

    Nuestro amor es una cama de hojalata <br>
    Que te corta cuando te querés dormir <br>
    Que nos hace involucrarnos y perdernos <br>
    Que nos une la desgracia de existir <br>
    Y este amor es como un helado caliente <br>
    Que te quema cuando lo querés chupar<br>
    Que se empeña en no dejar sobrevivientes <br>
    Que es mentira, pero también es verdad <br>
    Ella dice: "beautiful" <br><br>

    Ella florece en el seco jardín corrosivo de mi soledad <br>
    Nada en el mundo me gusta más que abrazarte y después despertar <br>
    Tengo un pasado terrible y algunos secretos para confesar <br>
    Tengo algún brindis pendiente que un día inconsciente lo voy a brindar <br>
    Ella dice: "beautiful "<br>
    Suena como libertad <br><br>

    Y este amor es como flores de aluminio <br>
    Que se oxidan cuando las querés rega r<br>
    Que nos hace encapricharnos como chicos <br>
    Que llora porque extraña a la mamá <br><br>

    Y este amor es como un tango del polaco <br>
    Porque no hay milonga ni aceleración <br>
    Porque me hace sentir vivo en la tragedia <br>
    Porque es autodestructivo como yo <br><br>

    Y este amor es una cama de hojalata <br>
    Que te corta cuando te querés dormir <br>
    Que nos hace involucrarnos y perdernos <br>
    Que nos une la desgracia de existir <br><br>

    Ella dice: "beautiful" <br>
    Ella dice: "beautiful" <br>
    Ella dice: "beautiful" <br>
    Ella dice: "beautiful" <br><br>

    Ella dice: "beautiful" <br>
    Ella dice: "beautiful" <br>
    Ella dice: "beautiful" <br>
    Ella dice: "beautiful" `},

    {nombre: 'Loca', album:'Obsesionario', lyrics: 
    `Loca, vos no entendés nada de vivir <br>
    Se fueron con septiembre tus ganas de mí <br>
    Y una forma errante de permanecer <br>
    Llenó de noches todo nuestro amanecer <br><br>

    Oh-oh <br>
    Oh-oh <br>
    Oh-oh <br>
    Oh-oh-oh-oh <br>
    Oh-oh, oh-oh <br><br>

    Loca, vos no entendés nada del amor <br>
    Yo no puedo cantar Blackbird como Paul <br>
    Loca, tengo ganas locas de volver <br>
    Como flores que volvieron a crecer <br><br>

    Loca, me gustas así de loca <br>
    Inestable y caprichosa <br>
    Mucho mejores que el vino <br>
    Son los besos de tu boca <br><br>

    Y tal vez es porque vivo <br>
    De la forma en que mal vivo <br>
    Que te digo lo que digo <br>
    Que me encuentro tan perdido <br><br>

    Loca, sólo lo que escribo es lo que soy <br>
    Y no tengo mucha energía para hoy <br>
    Loca, tengo ganas locas de volver <br>
    Como flores que volvieron a crecer <br><br>

    Me gustas así de loca <br>
    Me gustas así de loca <br>
    Inestable y caprichosa <br>
    Mucho mejores que el vino <br>
    Son los besos de tu boca <br>
    Y tal vez es porque vivo <br>
    De la forma en que mal vivo <br>
    Que te digo lo que digo <br>
    Que me encuentro tan perdido <br><br>

    La nostalgia es un espejo <br>
    Que duplica lo vivido <br>
    Rescatando nuestro tiempo <br>
    De las garras del olvido <br><br>

    Porque no tengo más nadie <br>
    Que pelear más que conmigo <br>
    Porque eternos como el tiempo <br>
    Son las noches y el vacío<br> <br>
    Porque nado hasta encontrarte <br>
    En este salvaje río <br>
    Porque no me queda nada <br>
    Que perder que lo vivido <br><br>

    Loca, vos no entendés nada de vivir <br>
    Uh-uh-uh, ah <br>
    Loca, vos no entendés nada de vivir <br>
    Uh-uh-uh, ah <br>
    Loca, vos no entendés nada de vivir <br>
    Uh-uh-uh, ah <br>
    Loca, vos no entendés nada de vivir `},

    {nombre: 'Arruinarse', album:'Canciones del huracán', lyrics: 
    `Te burlaste de mis sueños, siempre me trataste mal <br>
    Te miraba, me veía, y eso me gustaba tanto <br>
    Me acerqué, quise hablar, pero vos querías pelear <br>
    Y a mí tanto me gustó que no te duré ni un round <br><br>

    Y a veces pienso, cuando me quedo solo <br>
    Te extraño, te lloro, qué lindo arruinarse con vos <br><br>

    Y el día estuvo mal (hoy te soñé) <br>
    No quiero recordarte más (no me hace bien) <br>
    Quisiera comprender <br>
    Que estás muy lejos y que no te importa nada de lo que me pasa <br>
    Y cada vez que pienso en vos (quiero volver) <br>
    Y el brillo de tus ojos rojos (yo quiero ver) <br>
    Detesto no saber <br>
    Si te acordás de mí o no te importa nada de lo que me pasa <br><br>

    Estoy un poco ansioso y se termina el día <br>
    Ando buscando un poquitito de tu adrenalina <br>
    Y, en mi cabeza, encuentro sólo resignaciones <br>
    Estoy pagando el precio de mis buenas intenciones <br><br>

    ¿En qué estaba pensando cuando me vine acá? <br>
    Tiene que haber alguna buena forma de escapar <br>
    Si bien algunas cosas pudieron mejorar <br>
    Me está aburriendo esta mentira de la libertad <br><br>

    Y a veces pienso, cuando me quedo solo <br>
    Te extraño, te lloro, qué lindo arruinarse con vos <br>
    Te juro, linda, me está costando mucho <br>
    Termino los días cansado de extrañarte <br><br>

    Y el día estuvo mal (hoy te soñé) <br>
    Odiabas el amanecer (y yo también) <br>
    Quisiera comprendr <br>
    Que estás muy lejos y que no te importa nada de lo que me pasa <br>
    Y cada vez que pienso en vos (quiero volver) <br>
    Y el brillo de tus ojos rojos (yo quiero ver) <br>
    Detesto no saber <br>
    Si te acordás de mí o no te importa nada de lo que me pasa <br><br>

    Y el día estuvo mal (hoy te soñé) <br>
    Las noches con el huracán (hoy me acordé) <br>
    Quisiera comprender<br>
    Que estás muy lejos y que no te importa nada de lo que me pasa <br>
    Y cada vez que pienso en vos (quiero volver) <br>
    Y el brillo de tus ojos rojos (yo quiero ver) <br>
    Detesto no saber <br>
    Si te acordás de mí o no te importa nada de lo que me pasa `},

    {nombre: 'Hola mi vida', album:'Hola mundo', lyrics: 
    `En tu cielo imaginario <br>
    Derretiste escenarios <br>
    Y las noches de verano <br>
    De los días estrellados <br><br>

    Hola, mi vida, no desconfíes de la música <br>
    No me molesta tu acento, me alucina <br>
    Si te parece, puedo pasarte a buscar <br>
    Te llevo y te prometo una noche tremenda <br><br>

    Yo nunca te dije que no te entendí <br>
    Vos me deliraste como un fantasy <br>
    Si te cabe que te pique como vos a mí <br>
    No pretendas que me preste como me pedís <br><br>

    Son las dos de la mañana <br>
    Y mordimos las manzanas <br>
    Todo lo que pienses y lo que sentís <br>
    A las siete, se convierte en un infierno hostil <br><br>

    Tantos necesarios <br>
    Los desastres temerarios <br>
    De las noches de verano <br>
    De los días estrellados <br><br>

    Hola, mi vida, no desconfíes de la música <br>
    Si algo te tira, te, te, te, te levantás <br>
    Si te parece, puedo pasarte a buscar <br>
    Te llevo y te prometo una noche tremenda <br><br>

    Bailo porque todavía no perdí la libertad <br>
    Mientras esquivo planetas, me levantás <br>
    Si te parece, puedo pasarte a buscar <br>
    Te llevo y te prometo una noche tremenda <br><br>

    Hola, mi vida <br>
    Hola, mi vida <br><br>

    Hola, mi vida, no desconfíes de la música <br>
    Hola, mi vida, no desconfíes de la música <br>
    Hola, mi vida, no desconfíes de la música <br>
    Hola, hola, hola, hola <br><br>

    Hola, mi vida, no desconfíes de la música <br>
    Que te convierto en princesa de América <br>
    Si te parece, puedo pasarte a buscar <br>
    Te llevo y te prometo una noche tremenda <br><br>

    Bailo en este bondi lunático que es mi ciudad <br>
    Si algo te tira, te, te, te, te levantás <br>
    Si te parece, puedo pasarte a buscar <br>
    Te llevo y te prometo una noche tremenda <br><br>

    Tremenda <br>
    Tremenda <br>
    Tremenda `},

    {nombre: 'Las cosas que pasan', album:'Hola mundo', lyrics: 
    `Cada mañana de suerte, aunque esta ya no cuente <br>
    Voy a contarla como un día más que no viví <br>
    Tu ausencia contra fuerte, multiplica la muerte <br>
    Se apoderó de todo el cielo de nuestro jardín <br><br>

    Princesa amanecida, estás oscurecida <br>
    Soñé escribirte dentro de un terceto que rompí <br>
    Píntate tus colores, te pido que no llors <br>
    Que no te olvides de todo lo que nos hizo así <br><br>

    Y así, me fui <br><br>

    Ay, yo mismo te preparé tus cosas <br>
    Las horas penosas a su lugar <br>
    Será el perfume secreto de las rosas <br>
    Me duelen las cosas que pasan <br><br>

    Tenerte y desatarte de tus peores partes <br>
    No significa que te alejes de tu vida así <br>
    Deja de ensimismarte, perderte y empatarte <br>
    Que hay una luna para cada noche de París <br><br>

    Y así, me fui <br>
    Y así, perdí <br><br>

    Ay, yo mismo te preparé tus cosas <br>
    Las horas penosas a su lugar <br>
    Me faltarán tus mañanas caprichosas <br>
    Me duelen las cosas que pasan <br><br>

    Ay, yo mismo me preparé la fosa <br>
    No quiero perderte ni mucho más <br>
    Me ayudarán enfermeras milagrosas <br>
    Me duelen las cosas que pasan<br> <br>
    Ay, yo mismo te preparé tus cosas <br>
    Las horas penosas a su lugar <br>
    Será el perfume secreto de las rosas <br>
    Me duelen las cosas que pasan <br><br>

    Ay, yo mismo me preparé mi fosa <br>
    No quiero perderte ni mucho más <br>
    Me ayudarán enfermeras milagrosas <br>
    Me duelen las cosas que pasan <br>
    Me duelen las cosas que pasan <br>
    Me duelen las cosas que pasan <br>
    Me gustan las cosas que pasan `},

    {nombre: 'Pastillas del olvido', album:'Obsesionario', lyrics: 
    `En una esquina de mi barrio hay una tienda <br>
    Que vende unas pastillas para olvidar <br>
    Los vecinos aseveran que su efecto prolifera <br>
    Pero yo no las quise ni probar <br><br>

    Pastillitas del olvido tengan el recuerdo vivo <br>
    De la noche que la vi bailar <br>
    Se movía como loca inestable y caprichosa <br>
    Y era triste como mi ciudad, como mi ciudad <br><br>
    
    Y yo que te di todas mis noches a vos <br>
    Sin lamento ni reproches <br>
    Te di en las noches y los días <br>
    Mis mejores melodías <br>
    En las horas mas tremendas de mi vida <br><br>

    Yo te espero todavía <br>
    Yo creo que el olvido es una fantasía <br>
    Y así destinado a padecerte <br>
    Sigo loco como siempre <br>
    Inventando lo que sea para verte <br><br>

    En un rincón de mi memoria sobran noches de tristeza <br>
    Poca gloria y soledad <br>
    Y en el hueco de los años mas dorados <br>
    Caben tus ojos prestados y un adiós para olvidar <br>
    Pastillitas del olvido tengan el recuerdo vivo <br>
    De la noche que la vi bailar <br>
    Se movía como loca inestable y caprichosa <br>
    Y era triste como mi ciudad, como mi ciudad <br><br>

    Y yo que te di todas mis noches a vos <br>
    Sin lamento ni reproche <br>
    Te di en las noches y los días <br>
    Mis mejores melodías <br>
    En las horas más tremendas de mi vida <br><br>

    Yo te espero todavía <br>
    Yyo creo que el olvido es una fantasía <br>
    Y así destinado a padecerte <br>
    Sigo loco como siempre <br>
    Inventando lo que sea para verte <br><br>

    Y yo que te di todas mis noches a vos <br>
    Sin lamento ni reproche <br>
    Baila tu milonga preferida <br>
    Que esta oscuro todavía <br>
    Que amanece y se nos acaba la vida <br><br>

    Yo te espero todavía <br>
    Yo creo que el olvido es una fantasía <br>
    Y así destinado a padecerme <br>
    Sigo loco como siempre <br>
    Inventando lo que sea para verte `},

    {nombre: 'Un poco perdido', album:'Hola mundo', lyrics: 
    `Si esta canción funciona para salvarte <br>
    Para mirar al cielo y resucitar <br>
    Para ligar las partes <br>
    Después de encender la luz en la oscuridad <br><br>

    Si este versito ayuda para traerte <br>
    Las esperanzas puedes recuperar <br>
    Que nacen del sol de Oriente <br>
    Y bajan en melodías de libertad <br><br>

    Todos los días <br>
    Tienen sol y tormenta <br>
    Si pudieras volver a confiar <br><br>

    Anoche resucitaron los inmortales <br>
    Se escucha nuestra orquestita en los arrabales <br>
    Que toca algunos yeites sentimentales <br>
    Estoy un poco perdido, y lo saben <br><br>

    Si esta canción enciende nuestras alarmas <br>
    Que todavía quedan por escuchar <br>
    Para bajar las armas <br>
    Regálame tus ojitos una vez más <br><br>

    Si algún milagro nace de estos lamentos <br>
    Voy a tocar la música de cristal <br>
    Para soñar los sueños <br>
    Que alguna vez olvidamos sin despertar <br><br>

    Todos los días <br>
    Tienen sol y tormenta <br>
    Si pudieras volver a confiar <br><br>

    Anoche soñé un infierno de soledades <br>
    Perdí por seis, jugué para mis rivales <br>
    Mirá que yo entiendo mucho de saltos mortales <br>
    Estoy un poco perdido, y lo saben <br><br>

    De nuevo resucitaron los inmortales <br>
    Se escucha nuestra orquestita en los arrabales <br>
    Que toca algunas fibras sentimentales <br>
    Estoy un poco perdido, encontrame <br><br>

    No quiero verte, demonio sin tolerancia <br>
    Te cambio mi libertad por esta abundancia <br>
    Espero que venga Dios con sus ambulancias <br>
    Estoy un poco mareado y sin vigilancia <br><br>

    Baila la muerte en la luna de carnavales <br>
    Las musiquitas agónicas, infernales <br>
    Y suelta unos pasitos emocionales <br>
    Estoy un poco perdido, y lo saben <br><br>

    Estoy un poco perdido, encontrame <br>
    Estoy un poco perdido, y lo saben <br>
    Estoy un poco perdido, y me cabe. `},

    {nombre: 'La suerte está hechada', album:'Hola mundo', lyrics: 
    `Dicen que para olvidarte, tengo que viajar a Marte <br>
    Hacer 300 años de terapia <br>
    Y decidir, dejar que pase el mes de Abril <br>
    Juntar todas las hojas del otoño <br><br>

    Dicen que para olvidarte hay que tener en el bolsillo <br>
    Un almanaque sin domingos, un crucero <br>
    Y navegar en un océano sin mar <br>
    Tomarse toda el agua de la lluvia <br><br>

    Y en realidad, hay cosas que no voy a olvidar <br>
    Como tus ojos de soledad <br>
    La tarde que los hice llorar <br><br>

    Y escucho voces dentro de mi casa <br>
    A veces pienso que es tu fantasma <br>
    Tus amenazas, mis escapadas <br>
    Retrato de mi clandestinidad <br><br>

    Dicen que juntando cuatro patas de conejo <br>
    Con sal gruesa, y repitiendo ante el espejo <br>
    Voy a olvidar, tal vez yo pueda deshacer <br>
    El nudo que nos ata en este hechizo<br>
    Dicen que del día en que te fuiste <br>
    No hago mas que despedirte inventándome un presente <br>
    Para sentir que estoy haciendo algo por mi <br>
    Construyo sobre arenas movedizas <br><br>

    Y en realidad, hay cosas que no quiero olvidar <br>
    Como tus ojos de soledad <br>
    La tarde que los hice llorar <br><br>

    Y escucho voces dentro de mi casa <br>
    A veces pienso que es tu fantasma <br>
    Tus amenazas mis escapadas <br>
    Retrato de mi clandestinidad <br><br>

    Si no te olvido, dicen que puede <br>
    Doler mucho más de lo que duel <br>
    Cuando te tengo en mi memoria <br>
    Estás acá `},

    {nombre: 'Dominguicidio', album:'Obsesionario', lyrics: 
    `¿Qué pasó anoche?, No sé <br>
    ¿Qué pasó anoche?, No sé <br>
    Mi alma hizo las valijas y se fue <br>
    Mi alma hizo las valijas y se fue <br><br>

    La lluvia ácida, y el frío cínico <br>
    Las hojas muertas, y mi delirio <br>
    Y cuando vos no estás se siente fuerte <br>
    Me pongo loco y cuando duerme Buenos Aires <br>
    Desespero por volver a verte <br><br>

    Ando metido en un domingo delirante <br>
    Amanecido, loco en este desastre <br>
    Y escucho voces, que me dicen "Ándate" <br>
    Y a donde vaya, siempre voy a llevarme <br><br>

    Esta aturdida la consciencia que perdí <br>
    Estoy perdiendo en esta guerra contra mi <br>
    Atormentado sin paciencia ni fe <br>
    Mi alma hizo las valijas y se fue <br><br>

    ¿Qué pasó anoche?, No sé <br>
    ¿Qué pasó anoche?, No sé <br>
    Mi alma hizo las valijas y se fue <br>
    Mi alma hizo las valijas y se fue <br>
    Estoy buscando una esperanza <br>
    O algo que perdí de mi <br>
    Yo no sabia que esta noche iba a terminar así <br><br>

    Ando metido en un domingo delirante <br>
    Amanecido, loco en este desastre <br>
    Y escucho voces, que me dicen "Ándate" <br>
    Y a donde vaya, siempre voy a llevarme <br><br>

    Esta aturdida la consciencia que perdí <br>
    Estoy perdiendo en esta guerra contra mi <br>
    Atormentado sin paciencia ni fe <br><br>

    ¿Qué pasó anoche?, No sé <br><br>

    Ando metido en un domingo delirante <br>
    Amanecido, loco en este desastre <br>
    Y escucho voces, que me dicen "Ándate" <br>
    Y a donde vaya, siempre voy a llevarme <br><br>

    ¿Qué pasó anoche?, No sé `},

    {nombre: 'Tus horas mágicas', album:'Hola mundo', lyrics: 
    `Sueño con los días que te pudiste regresar <br>
    De ese pasado tan accidental <br>
    La lluvia nos provoca lo habitual <br>
    Planta nostalgias automáticas <br><br>

    Viajo por los días que nacen de casualidad <br>
    Suena en la radio esa canción fatal <br>
    Mientras el cielo más sentimental <br>
    Escupe lluvias para amenazar <br><br>

    Qué más quisiera que robar al pasado <br>
    Tus horas mágicas, tus cielos nublados <br>
    Pero tus ojos tienen todo el verano <br>
    No es tarde, ni temprano para más <br><br>

    Perdí la fe en esos ayeres que fuimos <br>
    Voy entendiendo mientras hago el camino <br>
    Mientras repito la palabra destino <br>
    Te traigo y me imagino, lo demás <br><br>

    Entro y salgo de horas de nervios y tranquilidad <br>
    Ninguna ausencia para lamentar <br>
    Y una oportunidad crepuscular <br>
    Para pensar a dónde aterrizar <br><br>

    Sueño que regreso de donde nunca quise estar <br>
    Tarda la primavera en la ciudad <br>
    La vida nos devuelve un hola y chau <br>
    Y algunas almas que regresarán <br><br>

    Que más quisiera que robar al pasado <br>
    Tus horas mágicas, tus cielos nublados <br>
    Pero tus ojos tienen todo el verano <br>
    No es tarde, ni temprano para más<br> <br>
    Perdí la fe en esos ayeres que fuimos <br>
    Voy entendiendo mientras hago el camino <br>
    Mientras repito la palabra destino <br>
    Te traigo y me imagino, lo demás `},

    {nombre: 'Pétalos', album:'Obsesionario', lyrics: 
    `Lo poco de este abril, fugándose de mí <br>
    El agua de la lluvia oxida el sol de mi país <br>
    Tratando de oprimir mi roto porvenir <br>
    El cuento del destino no lo puedo reescribir <br><br>

    Tratándose de vos, tratándose de mí <br>
    Tratándose de noches enteras sin dormir <br><br>

    Los años que perdí, pasaron sin pesar <br>
    Los chicos de mi barrio leen libros para atrás <br>
    Persigo una verdad, escrita en un papel <br>
    De un sueño amenazado como el cielo de Babel <br><br>

    Tratándose de vos, tratándose de mí <br>
    Tratándose de historias de enanos de jardín <br><br>

    Mi punto de partida <br>
    Los años de mi vida <br>
    Puse te extraño tanto en el diario del espanto <br>
    Cuando mis horas queman <br>
    Lloran las macarenas <br>
    Penas arrabaleras <br>
    Pétalos de flores de alelí <br><br>

    Prendido a este congojo <br>
    Pasé mis años locos <br>
    Y un triste desencanto <br>
    Soñaba pianos blancos <br>
    De noche en las veredas <br>
    Damas cambalacheras <br>
    Dejaban comedidas <br>
    Algo de sus vidas para mi <br><br>

    Uh, la, la, la, la, la <br>
    Uh, la, la, la, la, la <br>
    Uh, algo de sus vidas <br>
    Uh, hm <br>
    Hm, hm `},

    {nombre: 'Mis madrugaditas', album:'Canciones del huracán', lyrics: 
    `Jueves a la noche de la porquería <br>
    Y mi costado de policía <br>
    El que gobierna últimamente <br>
    Está dormido, no se despierta <br>
    Está esperando el juicio a la otra parte del alma <br>
    Que injustamente seguro pierdo y después lloro <br>
    Por perder el control, lo pierdo todo <br><br>

    Y vuelvo al infierno para ir a buscarte <br>
    Y vuelvo al pasado para complicarte <br><br>

    Santo gobierno de la pereza <br>
    Está Dionisio que no me deja <br>
    Arrodillarme a los excesos de esos fantasmas que no están presos <br>
    Porque están sueltos, en mi cabeza <br>
    Van destapando otra cerveza <br>
    Van derrochando esa tristeza <br>
    Y empapándome de mis carencias <br><br>

    La bala perdida que nunca encontraste <br>
    Está en tu cabeza, sacándote sangre <br>
    Para tus ojos, quiero cantarte <br>
    Salir esta noche para emborracharme <br>
    Rendirme al futuro que vaticinaste <br>
    Mis madrugaditas fuertes son, como para contarte <br><br>

    Vos dirás, ya sabes, toda mi miseria ya la conoces <br>
    Destapando, despacito, mi madrugadita sin calma <br>
    Más buscas, más lloras, hay una cabeza que no tiene paz <br>
    Destapando, despacito mi nochecita del huracán <br><br>

    Dejáselo al tiempo, lo que necesita <br>
    Baila como siempre, volvete loquita <br>
    Que el tiempo transforma el ocio en el tedio <br>
    Yo extraño esas noches, corazón, no tengo remedio <br><br>

    Vos dirás, ya sabes, toda mi miseria ya la conoces <br>
    Destapando, despacito, mi nochecita del huracán <br>
    Y no entendés y no escuchas y tanto tropi que te tumbas <br>
    Destapando, despacito mi madrugadita sin calma <br>
    Vos dirás, ya sabes, toda mi miseria ya la conoces <br>
    Destapando, despacito, mi madrugadita sin calma <br><br>

    Y no entendés y no escuchas, hay unos ojitos que van a llorar <br>
    Destapando, despacito, mi nochecita del huracán <br>
    Vos dirás, ya sabes, toda mi miseria la conoces <br>
    Destapando, despacito, mi nochecita del huracán <br>
    Y no entendés y no escuchas y tanto tropi que te tumbas <br>
    Destapando, despacito, mi madrugadita sin calma <br><br>

    Nochecitas cotidianas <br>
    Me hago el muerto <br>
    Como el huracán <br>
    No me extrañes, ni me llores <br>
    Sálvame de mis terrores `},

    {nombre: 'Lunita de tucumán', album:'Canciones del huracán', lyrics: 
    `Es el invierno, la ventana <br>
    Y tu carita de reventada <br>
    Disfrutamos madrugadas <br>
    Bukowski y chinos y carcajadas <br>
    Pero no me importa <br>
    No me arrepiento <br>
    De haber perdido <br>
    La libertad <br><br>

    Si lo que viene después te asusta <br>
    Mejor te canto lo que te gusta <br>
    Y si volvemos al pasado <br>
    Te pido tu corazón prestado <br>
    Pero no me importa <br>
    No me arrepiento <br>
    De que me guste (la noche) <br><br>

    La noche empieza y no va a poder parar <br>
    Porque hace tiempo que no quiere llorar <br>
    "La cocaína seca las lágrimas" <br>
    Y es el combustible de mi ciudad <br>
    Yo te cantaba Lunita de Tucumán <br>
    Para que duela menos cada día más <br><br>

    La noche empieza y no va a poder parar <br>
    Porque hace tiempo que no quiere llorar <br>
    "La cocaína seca las lágrimas" <br>
    Y es el combustible del huracán <br>
    Yo te cantaba Lunita de Tucumán <br>
    Para que duela menos cada día más <br><br>

    Si esta locura nos hizo comprender <br>
    Que la alegría no supo consolar <br>
    Deja que lloren tus ojos, corazón <br>
    Que tu tristeza es el sol de mi ciudad <br>
    Y esta violencia, regalo de mi papá <br>
    Me está doliendo mucho cada día más <br><br>

    Yo quiero verte perfumadita <br>
    Con tu boquita pintada <br>
    Que me llene de alegría <br>
    Que se apague mi dolor <br>
    Y los efectos que nunca siento <br>
    Son los rebotes del viento <br>
    Que atrapa sueños <br><br>

    Yo quiero verte perfumadita <br>
    Con tu boquita pintada <br>
    Que me llene de alegría <br>
    Que se apague mi dolor <br>
    Y los efectos que nunca siento <br>
    Son los rebotes del viento <br>
    Que atrapa sueños <br><br>

    Yo quiero verte perfumadita <br>
    Con tu boquita pintad a<br>
    Que me llene de alegría <br>
    Que se apague mi dolor <br>
    Y los efectos que nunca siento <br>
    Son los rebotes del vient o<br>
    Que atrapa sueños <br><br>

    Yo quiero el beso perfumadito <br>
    De tu boquita pintada <br>
    Que me llene de alegría <br>
    Que se apague mi dolor <br>
    Y los efectos que nunca siento <br>
    Son los rebotes del viento <br>
    Que atrapa sueños <br><br>

    Chau... `},

    {nombre: 'Tus ojos mil', album:'Destinología', lyrics: 
    `Retrocedo como el tiempo <br>
    Cuánto queda para mí <br>
    Cuando vuelva del infierno <br>
    Tus ojos mil <br><br>

    En el último tormento <br>
    Del veranito de San Juan <br>
    Mariposas con lamento <br>
    Volaban La Paternal <br><br>

    Y ando mejor a veces <br>
    Cuando no sé dónde ir <br>
    Cuando no ataca el sueño <br>
    Y me da por escribir <br><br>

    Se niega el sol a salir <br>
    Hoy no te pongas así <br>
    Yo ya no hablo de mi destino <br>
    Tus ojos mil <br><br>

    En el fondo, en el alma, en el fin <br>
    En lo que queda de mí <br>
    En el efecto melancolía <br>
    Tus ojos mil <br><br>

    La nostalgia del verano <br>
    Llega con puntualidad <br>
    Y mis sueños demorados <br>
    Pateaban la Capital <br><br>

    Los fantasmas del pasado <br>
    Ruegan un volver atrás <br>
    No me olvides, que me apago <br>
    Que no lo puedo evitar <br><br>

    Algunas pocas veces <br>
    Reconozco padecer <br>
    Los cielos con tormentas <br>
    Que se olvidan de llover <br><br>

    Si estás tan lejos de mí <br>
    Hoy no te pongas así <br>
    No tengo nada que ver conmigo <br>
    Tus ojos mil <br><br>

    En el fondo, en el alma, en el fin <br>
    En lo que queda de mí <br>
    En el efecto melancolía <br>
    Tus ojos mil <br><br>

    En el fondo, en el alma, en el fin <br>
    En lo que queda de mí <br>
    Yo no te quise matar, febrero <br>
    Tus ojos mil <br>
    Tus ojos mil <br><br>

    ¡Yo no te quise matar, febrero! <br><br>

    Yo no te quise matar, febrero <br>
    Tus ojos mil. `},

    {nombre: 'La otra manera', album:'Hola mundo', lyrics: 
    `Un secreto inevitable en el jardín <br>
    Me arruinó tu mirada más darkie <br>
    Y sacaste una foto del cielo <br>
    Del penoso desconsuelo de encerrarte y revivir <br><br>

    ¿Quién te dio lugar y porvenir <br>
    En la obra que estaba terminada? <br>
    Mi canción esconde otra bien guardada <br>
    Inevitable y agotada, como el don de tu nariz <br><br>

    Viven tus ojos vidas ajenas <br>
    Y hacés que esta muerte valga la pena <br><br>

    Lo que pasa es que te quiero, uh-uh-uh-uh <br><br>

    Mi regreso significa que me fui <br>
    Caprichosa aprendiz de hechicera <br>
    Mi ridículo esfuerzo en primavera <br>
    Que al llover se desespera y soñamos con salir <br><br>

    El olvido interminable oscureció <br>
    Tu milagro mágico del tiempo <br>
    Me ayudó a reformular estos versos <br>
    Que retratan el lamento del encierro y del dolor <br><br>

    Viven tus ojos vidas ajenas <br>
    Y hacés que esta muerte valga la pena<br> <br>
    Lo que pasa es que te quiero, uh-uh-uh-uh <br>
    Lo que pasa es que te quiero, uh-uh-uh-uh <br>
    A través de vos, me veo, uh-uh-uh-uh <br>
    Esperame y yo te espero, uh-uh-uh-uh <br><br>

    Yo te busqué entre las mujeres de Dios <br>
    Y tus ojitos me llevaron a vos <br>
    I think you're freaky and I like you a lot <br>
    Es un asunto entre la luna y el sol <br><br>

    Lo que pasa es que te quiero, uh-uh-uh-uh <br>
    Lo que pasa es que te quiero, uh-uh-uh-uh <br>
    A través de vos, me veo, uh-uh-uh-uh <br>
    Esperame y yo te espero, uh-uh-uh-uh <br><br>

    Lo que pasa es que te quiero, uh-uh-uh-uh <br>
    Lo que pasa es que te quiero, uh-uh-uh-uh <br>
    A través de vos, me veo, uh-uh-uh-uh <br>
    Esperame y yo te espero, uh-uh-uh-uh <br><br>

    Yo te busqué entre las mujeres de Dios <br>
    Y tus ojitos me llevaron a vos <br>
    I think you're freaky and I like you a lot <br>
    Es un asunto entre la luna y el sol <br><br>

    Yo te busqué entre las mujeres de Dios <br>
    Y tus ojitos me llevaron a vos <br>
    I think you're freaky and I like you a lot <br>
    Es un asunto entre la luna y el sol <br><br>

    Viven tus ojos vidas ajenas <br>
    Y hacés que esta muerte valga la pena <br>
    Viven tus ojos vidas ajenas <br>
    Y hacés que esta muerte valga la pena <br><br>

    Lo que pasa es que te quiero, uh-uh-uh-uh <br>
    Lo que pasa es que te quiero, uh-uh-uh-uh <br>
    A través de vos, me veo, uh-uh-uh-uh <br>
    Esperame y yo te espero, uh-uh-uh-uh `},

    {nombre: 'Música', album:'Destinología', lyrics: 
    `Todos mis ataques pasajeros <br>
    Me sorprenden a la hora de cenar <br>
    Porque flotan en el vaso <br>
    De la lluvia de febrero <br>
    Que no mojan, ni entristecen la ciudad <br><br>

    Cada momento de duelo, cada tormento primero <br>
    Cada pesar, consuelo, cada dolor pasajero <br>
    Cada manía o apego, cada lamento sincero <br>
    Cada domingo fulero, cada lunes de miedo <br>
    Todos los días de enero <br><br>

    Yo y mi look de pordiosero <br>
    Todas las capas del cielo <br>
    Todas las cosas que quiero <br>
    Todos los días del mundo existe una forma <br>
    De resucitar <br><br>

    Cada noche en cada lugar <br>
    Los momentos que nos quedan <br>
    Una absurda oportunidad de vivir <br>
    Revivir mi vida <br><br>

    Música, mientras caemos hay música <br>
    Aunque ahí afuera esté todo mal <br>
    Es el parlante de mi ciudad dramá-má-má-má-má-mática <br>
    La hora de la pena y nadie tiene paz <br>
    Yo sigo sin escuchar <br><br>

    Momentos, infinitos, los minutos del invierno <br>
    Se diluyen en la boca de un diablo charlatán <br>
    Porque solo me llevo la gloria <br>
    De tener en la memoria una mágica historia <br>
    En tus horas de euforia <br>
    Todos los días del mundo existe una forma <br>
    De resucitar <br><br>

    Cada noche en cada lugar <br>
    Los momentos que nos quedan <br>
    Una absurda oportunidad de vivir <br>
    Revivir mi vida <br><br>

    Música, mientras caemos hay música <br>
    Aunque ahí afuera esté todo mal <br>
    Es el parlante de mi ciudad dramá-má-má-má-má-mática <br>
    La hora de la pena y nadie tiene paz <br>
    Yo sigo sin escuchar <br><br>

    Las voces de la angustia y la soledad <br>
    La ausencia indeclinable de la libertad <br>
    Yo vivo las rutinas más fanáticas <br>
    Que nacen de mañanas problemáticas <br>
    Que sigo sin despertar `},

    {nombre: 'El duelo', album:'Obsesionario', lyrics: 
    `¿Cómo te animás cuando bailás a desafiar al tiempo? <br>
    ¿Cómo te olvidás de lo que pasa si te estás moviendo? <br>
    ¿Cómo te reís y me mentís? ¿Cómo te vas perdiendo? <br>
    ¿Cómo despegás del suelo? ¿Cómo transitás el duelo? <br><br>

    No di más <br>
    Y le di noches exóticas <br>
    A mis ideas neurótica s<br>
    Para poder encontrarme <br><br>

    No hay un consuelo para el duelo (No, no, no, no, no) <br>
    Más que la resignación <br>
    Es el dolor o el olvido (No, no, no, no, no) <br>
    Y este vacío soy yo <br><br>

    Y se me fue y se me fue y se lo llevó <br>
    Y se me fue y se me fue y se lo llevó <br>
    Y se me fue y se me fue y se lo llevó <br>
    Y se me fue y se me fue y se lo llevó <br><br>

    ¿Cómo te animás cuando bailás a desafiar al tiempo? <br>
    ¿Cómo te olvidás de lo que pasa si te estás moviendo? <br>
    ¿Cómo te reís y me mentís? ¿Cómo te vas perdiendo? <br>
    ¿Cómo despegás del suelo? ¿Cómo transitás el duelo? <br><br>

    No di más <br>
    Y le di noches exóticas <br>
    A mis ideas neuróticas <br>
    Para poder encontrarme <br><br>

    No hay un consuelo para el duelo (No, no, no, no, no) <br>
    Más que la resignación <br>
    Es el dolor o el olvido (No, no, no, no, no) <br>
    Y este vacío soy yo <br><br>

    Y en nuestros actos más secretos (No, no, no, no, no) <br>
    Nos detenemos a pensar <br>
    Yo anduve algún tiempo muerto (No, no, no, no, no) <br>
    Me gusta resucitar, así <br><br>
    Y se me fue y se me fue y se lo llevó <br>
    Y se me fue y se me fue y se lo llevó <br>
    Y se me fue y se me fue y se lo llevó <br>
    Y se me fue y se me fue y se lo llevó <br><br>

    No di más <br>
    Y le di noches exóticas <br>
    A mis ideas neuróticas <br>
    Para poder encontrarme <br><br>

    No di más <br>
    Y le di noches exóticas <br>
    A mis ideas neuróticas <br>
    Para poder encontrarme <br><br>

    No di más <br>
    Y le di noches exóticas <br>
    A mis ideas neuróticas <br>
    Para poder encontrarme `},

    {nombre: 'El color de ayer', album:'Obsesionario', lyrics: 
    `El cielo de esta mañana <br>
    Tiene el color del ayer <br>
    Persigue, desaforada <br>
    Las marcas de su recuerdo sobre mi piel <br><br>

    En unos ojos perdidos <br>
    Viven ojeras sin maquillar <br>
    Y en este roto destino <br>
    Mi alma se fue moviendo a otro lugar <br><br>

    Y eso que ves <br>
    También soy yo <br>
    El vacío que deja la noche y la desilusión <br><br>

    Si esta tormenta dejó solo tristeza <br>
    Si este silencio me aturdió la cabeza <br>
    Ya me ganó la depresión por knockout <br>
    Y las noches de insomnio violentas me quieren matar <br>
    Estoy buscando y está todo perdido <br>
    Soy una huella en el camino del olvido <br>
    Y en Buenos Aires se complica más <br>
    Y no hay nada en el mundo más triste que esta soledad <br><br>

    En esta nueva mañana <br>
    Voy a salir a buscar <br>
    Yo no me olvido de nada <br>
    ¿Quién se llevó la tristeza de este lugar? <br><br>

    Estoy pensando un poco en vos <br>
    Es tan ridícula mi desolación <br>
    Espero quieto la razón <br>
    Que me presente alguna revelación <br><br>

    Y eso que ves <br>
    También soy yo <br>
    El vacío que deja la noche y la desilusión <br><br>

    Yo necesito eso que alguna vez me diste <br>
    Es un remedio para mi corazón triste <br>
    Es una forma de resucitar <br>
    De pasar el invierno, pararme y salir a buscar <br><br>

    Si esta canción no funcionó de pretexto <br>
    Ya no sé bien como seguir más con esto <br>
    Yo creo en eso de volver a empezar <br>
    Una noche cualquiera, princesa, no puedo encontrar <br>
    Estoy buscando y está todo perdido <br>
    Soy una huella en el camino del olvido <br>
    Y en Buenos Aires se complica más <br>
    Y no hay nada en el mundo más triste <br><br>

    Y no hay nada en el mundo más triste que mi soledad `},

    {nombre: 'Víctimas', album:'Hola mundo', lyrics: 
    `Llevo tus días de niebla <br>
    Tus caras de piedra <br>
    Tus tecitos chai <br><br>

    Tu adiós, tus tres y cuarenta <br>
    Tu boca de tormenta <br>
    De nunca acabar <br><br>

    Llevo la herida podrida <br>
    De alguna mordida <br>
    Con seguridad <br><br>

    Tengo las horas vacías <br>
    Por todas las mentiras <br>
    Que quise contar <br><br>
    Y es inevitable ir para atrás <br><br>

    Somos tan víctmas y victimarios <br>
    Nos fracturó el invierno solitario <br>
    Psicopateás porque sabés que te extraño y me ves <br>
    Y no hay renuncias eternas sin libertad <br><br>

    Llevo la cara de empate <br>
    Tu frente de ataque <br>
    Y alguna señal <br><br>

    Quiero tener un rescate <br>
    Para que me desaten <br>
    La soga final <br><br>

    Sueño con volver a respirar<br> <br>
    Somos tan víctmas y victimarios <br>
    Nos fracturó el invierno solitario <br>
    Psicopateás porque sabés que te extraño y me ves <br>
    Y no hay renuncias eternas sin libertad <br><br>

    Cómo encontrarte si estoy tan perdido <br>
    Nadie regresa vivo del olvido <br>
    Sin vos muñeca, no tiene sentido y sabés <br>
    Que no hay renuncias eternas sin libertad <br><br>

    Vas a iluminar la pena misma <br>
    Luna solitaria de arrabal <br>
    Son inevitables los olores <br>
    Que destiñen los colores <br>
    Que pintás y despintás <br><br>

    Y a dónde no conozco, ya no viajo <br>
    Por un camino largo y sin atajos <br>
    Mientras te extraño, me vengo abajo y sabés <br>
    Que hay mil recuerdos no nacidos por recordar <br><br>

    Cómo encontrarte, si estoy tan perdido <br>
    Nadie regresa vivo del olvido <br>
    Sin vos muñeca, no tiene sentido y sabés <br>
    Que no hay renuncias eternas sin libertad <br><br>

    Llevo tus días de niebla <br>
    Tus caras de piedra <br>
    Tus tecitos chai. `},

    {nombre: 'La manera que eligió para matarme', album:'Hola mundo', lyrics: 
    `Creí entender su forma pura <br>
    Y la pensé una eternidad <br>
    Mientras oculta su locura <br>
    Va a sonreírme y caminar <br><br>

    Va a preparar un cigarrillo <br>
    Con su tabaco de liar <br>
    Va a ser tan dulce su amarillo, tan dantesco su capricho <br>
    Cuando dejemos de fumar <br><br>

    Y esta es la manera que eligió para matarme <br><br>

    Elige simple su manera <br>
    De hacerse siempre recordar <br>
    Se disfrazó de primavera para no manchar de sangre <br>
    La soñé por el rabal <br><br>

    Cuando sus ojos justifiquen <br>
    Cada milagro artificial <br>
    Mentiras y Vampire Weekend, con detalles de algún tiempo <br>
    Que no quiero recordar <br><br>

    Pienso en ti <br>
    Pienso en mí <br>
    Pienso en ti <br>
    Pienso en mí <br><br>

    Pienso en ti <br>
    Pienso en mí <br>
    Pienso en ti <br>
    Pienso en mí <br><br>

    Pienso en ti <br>
    Pienso en mí <br>
    Pienso en ti <br>
    Pienso en mí <br><br>

    Pienso en ti y <br>
    Pienso en mí <br>
    Pienso en ti <br>
    Pienso en mí <br><br>

    Y esta es la manera que eligió para matarme <br><br>

    Pienso en ti <br>
    Pienso en mí <br>
    Y esta es la manera que eligió para matarme <br><br>

    Pienso en ti <br>
    Pienso en mí <br>
    Y esta es la manera que eligió para matarme <br><br>

    Pienso en ti <br>
    Pienso en mí <br>
    Y esta es la manera que eligió para matarme `},

    {nombre: 'No me atreví a sugerirte que te mueras', album:'Hola mundo', lyrics: 
    `No es un pasillo oscuro urgente <br>
    Ni una flor maravillosa es <br>
    Yo lo pensaba porque te duele <br>
    Y a mí también <br><br>

    Ni los que saben mover montañas <br>
    Ni con la fe de San Agustín <br>
    Los que soñamos mesopotamias <br>
    Esquivan en fin <br><br>

    Yo no sé bien a dónde te fuiste <br>
    Solo espero que estés feliz <br>
    Que haya jardines con bailarinas, café y pastis <br><br>

    Otro cantado lamento tonto <br>
    No te termino de abandonar <br>
    Yo no te quiero cruzar muy pronto, salir ni entrar <br><br>

    Yo no sé nada de las galaxias <br>
    Ni dónde paran los que no están <br>
    Los que mentimos en la terapia, los nunca más <br><br>

    Y ahora que se nos termina todo <br>
    Que una sopresa te deje en paz <br>
    Yo te prometo tenerte todo perdido, chau `},

    {nombre: 'Hola noviembre', album:'Destinología', lyrics: 
    `Se anochecieron las tardes <br>
    De los días que pasamos <br>
    De algunos pocos veranos <br>
    Que tuvimos de prestado <br><br>

    Y cada vez que hablas así <br>
    En la boca se te nota <br>
    Que me escondes las sombras <br>
    Justo atrás de mis derrotas <br><br>

    No me hagas más los ojitos <br>
    De los viernes, los feriados <br>
    Ni me invites a la boda <br>
    De la hija del diablo <br><br>

    Si estas pensando en mí <br>
    Y abril no funcionó <br>
    Pero te extraño aunque <br>
    No nos estemos entendiendo <br>
    Tener o no tener <br>
    Volver o no volver <br>
    Ayer y antes de ayer <br>
    Tuvimos un hermoso tiempo <br><br>

    Llenaste nuestra habitación de ausencia <br>
    Hola noviembre <br>
    Quien va a sacar del comedor la angustia <br>
    Hola noviembre <br><br>

    Si andas por todos los cielos <br>
    Menos el de nuestro barrio <br>
    Se te perdieron los años <br>
    Anteanoche como a diario <br><br>

    Yo voy a perder esta guerra <br>
    Tan temprano <br>
    Yo busco en todas las flores <br>
    Tu perfume de verano <br><br>

    Si estás pensando en mí <br>
    Y abril no funcionó <br>
    Pero te extraño aunque <br>
    No nos estemos entendiendo <br>
    Tener o no tener <br>
    Volver o no volver <br>
    Ayer y antes de ayer <br>
    Tuvimos un hermoso tiempo <br><br>

    Llenaste nuestra habitación de ausencia <br>
    Hola noviembre <br>
    Quién va a sacar del comedor la angustia <br>
    Hola noviembre <br>
    Hola noviembre <br>
    Hola noviembre <br><br>

    Si estás pensando en mí <br>
    Y abril no funcionó <br>
    Ayer y antes de ayer <br>
    Hola noviembre <br>
    Llenaste nuestra habitación de ausencia <br>
    Hola noviembre <br>
    Quién va a sacar del comedor la angustia <br>
    Hola noviembre <br><br>

    Si estás pensando en mí <br>
    Y abril no funciono <br>
    Hola noviembre <br>
    Tener o no tener <br>
    Volver o no volver <br>
    Hola noviembre `},

    {nombre: 'Chica biónica', album:'Canciones del huracán', lyrics: 
    `Sobreviví, mi novia biónica empolva su nariz <br>
    En duras tardes cotidianas <br>
    Canta la capital, la radio anuncia las 14:00 <br>
    Y la ciudad va recogiendo mis pedazos <br><br>

    La noche avisa que se acerca en elegancia <br>
    Juntá tus cosas que tenemos que salir <br><br>

    Quiere que la dejen en paz <br>
    Para que se pueda acostar <br>
    Y música electrónica <br>
    Su noche no termina más <br>
    Y música electrónica <br>
    Está buscando alguna forma de escapar <br><br>

    Baila sin parar, contagia amor, delirio, insomnio y ansiedad <br>
    Y cuando quiere, te hipnotiza <br>
    Grita nada más, consigue siempre lo que quiere y sin parar <br>
    No sabe de mis convicciones <br><br>

    La noche avisa que se acerca en elegancia <br>
    Juntá tus cosas que tenemos que salir <br><br>

    Sueña que la dejen en paz <br>
    Para que se pueda acostar <br>
    Y música electrónica <br>
    Su noche no termina más <br>
    Y música electrónica <br>
    La pone tan biónica <br><br>

    Y no me acerques al peligro <br>
    No te vayas otra vez <br>
    Ya estoy cansado de perder <br><br>

    Quiere que la dejen en paz <br>
    Para que se pueda acostar <br>
    Y música electrónica <br>
    Su noche no termina más <br>
    Soplaba como el huracán <br>
    Está buscando alguna forma de escapar <br><br>

    Sueña que la dejen en paz <br>
    Para que se pueda acostar <br>
    Y música electrónica <br>
    Soplaba como el huracán <br>
    Y música electrónica <br>
    La pone tan biónica `},

    {nombre: 'Momentos de mi vida', album:'Destinología', lyrics: 
    `Dale, no me podés tratar así en este martes medio gris <br>
    La luna es una cosa que se pierde en la penosa <br>
    Madrugada silenciosa del cielo de San Martín <br><br>

    Todo amanecer que estés acá, con esas ganas de llorar <br>
    La pena es un recuerdo moribundo que se guarda <br>
    Bien profundo en el submundo, inmundo de mi ser <br><br>

    Es la hora de tomar nota, de pagarte todas las cuotas <br>
    De reconocer las derrotas y la habilidad de perderte <br><br>

    Todo lo que fui que ya no soy <br>
    Creo que perdí la conexión <br>
    De momentos de mi vida <br>
    Si ya no me espera nadie hoy <br>
    Me gusta perder la dirección <br>
    Mañana es otro día <br><br>

    Loca, si estás tan sola como yo, yo te comparto este dolor <br>
    Las cosas del destino no se miden con la esencia <br>
    Ni el idioma de la ausencia que deja tu aparecer <br><br>

    Es la hora de tomar nota, de pagarte todas las cuotas <br>
    De reconocer las derrotas y la habilidad de perderte <br><br>

    Todo lo que fui que ya no soy <br>
    Creo que perdí la conexión <br>
    De momentos de mi vida <br>
    Si ya no me espera nadie hoy <br>
    Me gusta perder la dirección <br>
    Mañana es otro día <br><br>

    Todo lo que fui que ya no soy <br>
    Creo que perdí la conexión <br>
    De momentos de mi vida <br>
    Si ya no me espera nadie hoy <br>
    Me gusta perder la dirección <br>
    Mañana es otro día <br><br>

    Uh-uh, uh-uh, uh-uh-uh-uh-uh, woh <br>
    De momentos de mi vida, woh <br>
    Uh-uh, uh-uh, uh-uh-uh-uh-uh, woh <br>
    Mañana es otro día `},

    {nombre: 'La comunidad', album:'Obsesionario', lyrics: 
    `Esta es la comunidad <br>
    Y es el grito de la ciudad <br>
    Chicos, chicas, vienen y van <br>
    Esta es la comunidad <br><br>

    Si estamos de una, un eje para arrancar <br>
    Es importante que puedas aceptar <br>
    Que estás planteando una problemática existencial <br>
    Que algunas noches me cuesta asimilar <br><br>

    Prefiero que hoy evitaras cuestionar <br>
    No más estúpidos juicios de moral <br>
    Vení a engañarte con mi lógica falaz <br>
    Es divertido y parece racional <br><br>

    Es una noche psicótica ligera <br>
    Tus amiguitas perdidas fantasmean <br>
    Y hay una en club, que mira y tirotea <br>
    Son las primeras impresiones verdaderas <br><br>

    Es una noche psicótica ligera <br>
    Y hay caminitos que persiguen a cualquiera <br>
    Mirá a esas chicas alcohólicas y reas <br>
    Son las primeras impresiones verdaderas <br><br>

    El eterno retorno al centro de mi verdad <br>
    Es nada más que otra forma de ocultar <br>
    Ya soy esclavo de esta personalidad <br>
    Que es otra forma de clandestinidad <br><br>

    La noche me llama para ver la muerte del sol <br>
    Es el idioma del deseo, corazón <br>
    Soy vulnerable a esta eterna tentación <br>
    Soy todo lo que describe esta canción <br><br>

    Esta es la comunidad <br>
    Y es el grito del a ciudad <br><br>

    Es una noche psicótica ligera <br>
    Y hay caminitos que persiguen a cualquiera <br>
    Mirá a esas chicas alcohólicas y reas <br>
    Son las primeras impresiones verdaderas <br><br>

    Tengo una noche psicótica ligera <br>
    Tus amiguitas perdidas fantasmean <br>
    Y hay una en club que mira y tirotea <br>
    Son las primeras impresiones verdaderas <br><br>

    Es una noche psicótica ligera <br>
    Y hay caminitos que persiguen a cualquiera <br>
    Mirá a esas chicas alcohólicas y reas <br>
    Son las primeras impresiones verdaderas <br><br>

    Tengo una noche psicótica ligera <br>
    Y hay caminitos que persiguen a cualquiera <br>
    Mirá a esas chicas alcohólicas y reas <br>
    Son las primeras impresiones verdaderas `},

    {nombre: 'Vidas perfectas', album:'Canciones del huracán', lyrics: 
    `Cada noche bailo un ritmo nuevo <br>
    Es la danza de las sociedades <br>
    Cada trago mal tomado es muerte <br>
    Porque vivo en la cuerda floja <br>
    El rondón de la cruz no es joda <br>
    La mortal de las apariencias <br>
    El veneno de la nueva moda <br>
    Y un montón de viejas de felicidad. <br>
    Me traen bienestar y no me dejan ver <br>
    Tengo que salir a ver. <br>
    Cada noche bailo un ritmo nuevo <br>
    Es la danza de las sociedades <br>
    Cada trago mal tomado es muerte <br>
    Porque vivo en la cuerda floja <br>
    El rondón de la cruz no es joda <br>
    La mortal de las apariencias <br>
    El veneno de la nueva moda <br>
    Y un montón de viejas de felicidad. <br>
    Me traen bienestar y no me dejan ver <br>
    Tengo que salir a ver. <br>
    Voy decidido a buscarte <br>
    Y hoy vivo por encontrarte, nada más <br>
    Para pasar las malas fronteras <br>
    Mañana un poco más. <br>
    Vidas perfectas, emociones iguales <br>
    Voy siempre donde me llames, para estar <br>
    Para elegir el mismo camino <br>
    Mañana un poco más. <br>
    Cada noche bailo un ritmo nuevo <br>
    Es la danza de las sociedades <br>
    Cada trago mal tomado es muerte <br>
    Porque vivo en la cuerda floja <br>
    El cantar de las malas lenguas <br>
    Pone triste a mi Buenos Aires <br>
    Y mirarte un poco más de cerca <br>
    Puede ser que veas a tu ofensiva. <br>
    Manera de pensar, miradas trancesivas <br>
    No tengo que mirar atrás. <br>
    Voy decidido a buscarte <br>
    Y hoy vivo por encontrarte, nada más <br>
    Para pasar las malas fronteras <br>
    Mañana un poco más. <br>
    Llegaste justo y ya casi no entiendo <br>
    Cómo cambió mi vida por completo hoy <br>
    Acostumbrado a mis nochecitas <br>
    Voy emparchando mis fisuritas <br>
    Ponele el sol a mis mañanitas <br>
    Mañana un poco más.`},

    {nombre: '700 toneladas', album:'Hola mundo', lyrics: 
    `Yo te vi <br>
    Yo te vi <br>
    En cada recuadro de imágenes <br>
    Que cabe en mi jardín <br><br>

    Comprendí <br>
    Algo así <br>
    Que en cada minuto que vuela <br>
    Hay algo para mí <br><br>

    Una en mil <br>
    Más sutil <br>
    Para mi sufrir <br>
    Ya no se trata de salir <br><br>

    Corazón <br>
    Mi canción <br>
    Escupe milagros melancólicos <br>
    Del fin de la razón <br><br>

    Si me ves <br>
    Esta vez <br>
    Ignora los rayos que nacen <br>
    Del sur de Santa Fe <br><br>

    Una en mil <br>
    Más sutil <br>
    Para mi sufrir <br>
    Ya no se trata de salir <br><br>

    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br>
    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br>
    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br>
    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br><br>

    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br>
    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br>
    Votre âme soulage la souffrance, votre âme soulage la souffrance <br>
    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br><br>

    El cielo amaneció cristalizado y esta vez <br>
    Las horas me pusieron al derecho y al revés <br>
    Para no extrañarte <br><br>

    El ácido del líquido que activa tu recuerdo <br>
    Las huellas que imprimiste sobre cada movimiento <br>
    Y necesitarte <br><br>

    Que alguna de esas miles de botellas me emborrache <br>
    Que crezcan tus azules sobre grises y azabaches <br>
    Soy un cachivache <br><br>

    Que lluevan setecientas toneladas de nostalgia <br>
    Que vuelvan esos jueves encantados con tu magia <br>
    Para levantarme <br><br>

    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br>
    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br>
    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br>
    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br><br>

    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br>
    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance <br>
    Votre âme soulage la souffrance, votre âme soulage la souffrance <br>
    Votre âme soulage, soulage, soulage, soulage, soulage la souffrance `},




    // Chano solista
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
    {nombre:'', album:'', lyrics: ``},
   

]


//const vacio = ''

letra.addEventListener('change', ()=>{
    if (letra.value.trim()!=='') {

        container.innerHTML= ''
        
         //  letra.value = `${vacio} ${letra.value} ${vacio}`

       
        let resultado = canciones.filter((wesa) => wesa.lyrics.toLocaleLowerCase().includes(letra.value))

         if (resultado==false) {
            container.innerHTML= `<div class='cajita'><h2>No encontré canciones que contengan esa palabra</h2> <br> 
            <h3> Quizás sea porque: <br><br>
            -No hay canciones de Tan Biónica que tengan esa palabra <br>
            -Si la palabra lleva tilde tenés que ponérsela <br>
            -No pongas mayúsculas<br><br>
            
            Faltan agregar las de chano solista y arrelgar algunas cositas, cuando tenga tiempo actualizo la pag xd <br> <br>
            Cualquier error o sugerencia mandarla a luka.diazarcusa <img src="styles/img/insta.svg"> <br><br>

            Errores que tengo que arreglar pero que todavía no sé porque programadorn't: <br><br>
            - Detecta no solo palabras sino también todo lo que coincida (Por ej si ponés "ola" detecta ola y hola, debería detectar solo ola)<br>

            - Las palabras que coincidan deberían ponerse en negrita, pero solo se pone la primera que coincida y no todas.<br>

            - Escribir mayúsculas hace que no funcione <br>
            </h3><div>`
        }
        
        for(encontrado of resultado){
        let boldeado =  encontrado.lyrics.replace(`${letra.value}`, `<b>${letra.value}</b>`)
        
        container.innerHTML += `<div class='cajita'><h2>${encontrado.nombre}</h2><h3>Album: ${encontrado.album}</h3><p>${boldeado}</p></div>`
       
        }   
    }
    else {
       
    }
       
    }
)

