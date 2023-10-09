# NightClub Svendeprøve – Dogus Benjamin Batbayli

#####  WU08

##### Uddannelse: Webudvikler

##### Uddannelsessted: Roskilde Tekniske Skole

##### email til login: benjaminbatbayli@gmail.com

##### password til login: 123456

##### projekt url: https://github.com/rts-cmk-wu08/night-club-svendeproeve-djbenjamin2001


## Indholdsfortegnelse
- [Tech Stack](#tech-stack)
- [Overvejelser og Valg](#overvejelser-og-valg)
- [Arbejdsgang](#arbejdsgang)
- [Skalering](#fremtidens-landrup-dans)
- [Kodeeksempler](#kodeeksempler)

# Tech Stack
Til min svendeprøve har jeg valgt følgende stack:
- [Nextjs](#nextjs)
- [Formik](#formik)
- [Yup](#yup)
- [cookies-next](#cookies-next)
- [TailwindCSS](#tailwindcss)
- [Swiper](#swiper)


## Nextjs
Next er en populer framework der er baseret på react biblioteken der bliver brugt til at skabe full stack webapplikationer, selvom nextjs er baseret på react biblioteket er nextjs designet til at opbygge hurtige og moderne hjemmesider eller applikation der bliveret generet med serverside rendering, men den kan også lave normal statisk data ved hjælp af "use client" som giver os mulighed får at bruge npm pakker der typisk kun vil virke via client siden som formik osv, oven i det har nextjs også en nemere tid med routes, da dens routing er dynamisk og mappe baseret.

## formik
Formik er en af verdnens mest populær open source formular bibliotek, som giver dig en intuitiv og simpel Formular der kan blive brugt til at skabe forskellige formularer som man kan have nytte af(fx hvis man skulle til at lave en registrering formular), med dette npm pakke har man oveni en nemmere og meget mere clusterfree kodning oplevelse når skal til at opbygge selve formularen til de forskellige sider der har brug for det.

## Yup
Yup er et validerings schema-bibliotek, som jeg brugte til at validere form med ved at lave schemas for mine inputs, der er selvfølig andre validations biblioteker jeg kunne have brugt til at validere med som zod, men da yup har en bedre og nemere intergration med formik brugte jeg den istedet.

## cookies-next
Cookies-next er en client based nextjs npm pakke der giver dig muligheden for at skabe, indlæse og slætte de småkager du har sættet ind i cookies under din applikation hvis du fx bruger chrome, Cookies-next bliver brugt i sammentid med Formik i denne projekt da det hjælper med at indlæse, skabe og endnu engang slette dine cookies du har, nogle eksempler vil være i register siden fx hvor vi skaber cookies der indeholder vores data som vil blive brugt til at logge ind senere og sætter den inde i apiet via en POST request.
Der er derimod også mulighed for at bruge nextJs eget dedikeret cookies, men da den kun kan blive eksikveret i serversiden, besluttede jeg mig kun at bruge den til en side, da alle de andre sider havde brug for cookies-next da de bruger client-side rendering.

## TailwindCSS
TailwindCSS er et utility-first CSS framework og en af kode verdnens mæst populereste css frameworks, som gøre næmt og hurtigt at style på mine komponenter ved at style direkte på dem ved at lave en classname inde i de tags men forksellige komponenter har, og det viser hvor fleksibelt tailwind css er i dele hele taget, fordi når jeg bruger tailwind css har jeg en følelse af at jeg skriver css bare på en meget hurtigere og simplere måde der gøre css nemmere at forstå, der er jo så andre css frameworks jeg kunne have brugt som **Foundation** men jeg besluttede mig for at bruge tailwind istedet da de andre frameworks har en bestemt måde de gerne vil styles på, imens tailwind er customizeable og fleksibel til brugerens behov.
Endnu en af Tailwinds positiveter som der gjørde den endnu bedre at bruge er at den har massere extension/plugins man kan bruge, i min tilfælde besluttede jeg mig for at installere tailwind animated, som jeg brugte til at animere siden med da det var en vigtig del af opgaven, tailwind animated giver en premade animationer med forskælige niveur af komplexitet som man kan bruge til at opbygge animeret hjemmesider hvor man oveni animationerne stadigvæk kan skrive sin tilgendlige css properties ind så det passer til ens side.

## Swiper
Swiper er en moderne gratis opensource billed slider som bliver brugt i hjemmesider der har behov for billed slideshows og for at skabe dem, da det er en npm pakke der bliver installeret og brugt til at opbygge slidersne. 
swiper har mange positiviter der gøre den meget næm at bruge til hvis man skal opbygge en slider som dens responsiveness og modules der giver dig mulighed til at customize din slider lige på den måde du har løst til.

#  Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven
under min kodning process har der ikke veret så mange undervejelser i løbet af de 5 fem dage til at kode i, der var derimod nogle få undervejelser jeg ændte med at træffe som jeg er tilfræds med, fx jeg har lavet selve headeren statisk da jeg helere gerne ville have at den blev stående over det hele istedet for at den blev stående alle de andre sider lige undtagen forsiden hvor det var den skulle have noget animation hvor det var at den kom up lige så snart at man scrollede ned.

Endnu en valg jeg endte med at beslutte mig over for var at have mere fokus på de sider der havde brug for funktionaliteter der interager med selve api'et istedet for at have fokus på animationer som man så kan se på selve siden, det gøre jo så at der ikke er så meget animation at se lige så snart man er inde i selve siden , men derimod er der massere funktionaliteter at arbejde og lege med  når man er inde i selve siden.

Udover det har jeg så brugt pakker som jeg  har bekendtskab til som gjøre det meget næmt at få løst opgaven på en effektiv og hurtig måde der gav mig en funktionel og fin hjemmeside jeg har kunne arbejde med.

## Tilføjelser

- Hvis en bruger ikke er logget ind og prøver at gå ind i reservations vil man blive redirected til login siden der gøre at lige så snart du er logget ind så vil linken til reservations vise frem i navigationen
- Jeg har tilføjet en tak for din tilmælding og tak for din booking side som man bliver direkte sendt videre til lige så snart man booker og tilmelder sig nyheds brevet


# Arbejdsgang

I løbet af de fem dage vi fik til at arbejde har jeg arbejdet og knoklet hårdt med at få funktionerne til at virke sammen med de npm pakker jeg installerede, og heldigvis kom det hele til at køre, selvom jeg fik alle de funktionelle sider til at køre optimalt nåede jeg ikke fuldkommen at lave alle de animationer der skulle laves på forsiden, men det var ikke så vigtigt da jeg helere ville få booking siden og reservation siden til at køre optimalt og det gøre det heldigvis.
der var også nogle få dele af de funktionelle sider hvor jeg blev nåd til at sidde ned og analysere tidligere projekter som jeg arbejdede med for at kunne få de små road bumps mine funktionaliteter havde væk.

Så alt i alt det der gik godt var: sider på hjemmesiden der havde brug for at få sendt data ind i databasen, og få det vist frem på selve siden, siderne der havde brug for nogle funktionalitet så det kunne køre uden fejl, 
hvad der gik skidt: mangel af massere animarede underpunkter i forsiden.

# Fremtidens Benjamin
I fremtiden vil jeg jeg udvide sider som disse med flere funktioner og animationer så det både virker optimalt og funktionelt.
jo mere kodningverdnen udvikler sig og giver nye frameworks, pakker og løsninger ville jeg kunne bruge dem til at opbygge sider der mindes eller ses bedre ud om denne her jeg har lavet nu.

# Kodeeksempl

## booking
Dette er funktionen jeg bruger til at sætte min reservation/booking inde i apiet/databasen, når man klikker på reserve. 
jeg vil forklare mere om dette til selve prøven
```js
<Formik
          initialValues={{
            table: "",
            name: "",
            email: "",
            guests: "",
            phone: "",
            date: "",
            textarea: "",
           
          }}
          validationSchema={loginSchema}
          onSubmit={(values, { setStatus, setSubmitting }) => {
            fetch("http://localhost:4000/reservations", {
              method: "POST",
             headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
             },
              body: JSON.stringify({
                userId: userId, 
                name:values.name,
                email:values.email,
                phone:values.phone,
                guests:values.guests,
                table:values.table,
                date:values.date,
                textarea:values.textarea
              }),
            })
              .then((res) => {
                if (!res.ok) {
                  setStatus(res.json());
                  setSubmitting(false);
                } else {
                  return res.json();
                } 
               
              }) 
               router.push("/takforbooking")
          }}
```