# Svendeprøve – Dogus Benjamin Batbayli

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
under min kodning process har der ikke veret så mange undervejelser i løbet af de 5 fem dage til at kode i, der var derimod nogle få undervejelser jeg ændte med at truffe som jeg er tilfræds med, fx jeg har lavet selve headeren statisk da jeg helere gerne ville have at den blev stående over det hele istedet for at den blev stående alle de andre sider lige undtagen forsiden hvor det var den skulle have noget animation hvor det var at den kom up lige så snart at man scrollede ned, endnu en valg jeg endte med at beslutte mig over var at have mere fokus på de sider der havde brug for funktionaliteter der interager med selve api'et istedet for at have fokus på animationer som man så kan se på selve siden, det gøre jo så at der ikke er så meget animation at se lige så snart man er inde i selve siden , men derimod er der massere funktionaliteter at arbejde og lege med  når man er inde i selve siden. 

Udover det har jeg så brugt pakker som jeg  har bekendtskab til som gjøre det meget næmt at få løst opgaven på en effektiv og hurtig måde der gav mig en funktionel og fin hjemmeside

## Tilføjelser

- Hvis en bruger ikke er logget ind og prøver at gå ind i reservations vil man blive redirected til en side der vil bede dig om at logge ind før du går ind i reservations
- Jeg har tilføjet en "Opret profil" mulighed for at tillade nye brugere. Jeg tænker det giver mening at en bruger har mulighed for at oprette en profil hvis de ikke allerede har en.
- Jeg har tilføjet små detaljer som en 404-side, info-beskeder hvis der er tomme sider (fx hvis man ikke har søgt på noget endnu på Søg-siden)
- Jeg har tilføjet en "Tilbage"-knap til aktivitets-detaljer-siden og på holdoversigt-siden, så brugeren nemt kan gå tilbage til den side de kom fra.


# Arbejdsgang

Jeg har arbejdet hårdt hele ugen og har været fuldt fokuseret på opgaven. Første dag brugte jeg meget tid på at opsætte min [projektstyring](https://github.com/orgs/rts-cmk-wu07/projects/19/views/1) og det har hjulpet mig med at prioritere senere på ugen.  
Jeg prøvede at prioritere min tid, så jeg fulgte en brugers flow i appen. Derfor startede jeg fx med at lave en velkomst-side, bagefter gik jeg til aktivitetssiden osv.

# Fremtidens Landrup Dans

I fremtiden kan Landrup Dans udvide med nye funktioner til deres app. Man kunne fx tilføje muligheden for at filtrere aktiviteter efter aldersgrænse og type.  
Man kunne også integrere sociale features så man kan følge hinanden og se hvilke aktiviteter man går til.

Når Landrup dans vokser sig større og får flere brugere er det også vigtigt at sørge for at siden kører problemfrit. Det er fx vigtigt at hjemmesiden ligger på forskellige servere så den kan håndtere mange brugere samtidigt. Det kan fx være ved at opgradere til et højere plan på Netlify, der giver mulighed for det.

# Kodeeksempler

## Auth

Dette er min auth context. Der sker lidt forskellige ting i dette stykke. Fordi brugeren kan vælge at blive husket, tjekker jeg både efter en key i mine cookies og i sessionStorage. Jeg bruger så en `useEffectOnce` fra react-use for at sætte min context til enten min cookie eller "session".

I min useEffect tjekker jeg at hvis min context ændrer sig skal den opdatere min cookie eller sessionstorage. Dette sikrer at jeg altid har den helt opdaterede auth i min cookie eller sessionstorage. Hvis jeg til gengæld sætter min auth context til at have en `action`-key til at være 'delete', så ved jeg at den skal slettes og derfor logges ud.

```js
export const AuthContext = createContext()

export default function AuthProvider({ children }) {
	const [authCookie, setAuthCookie] = useCookie('auth')
	const [authSession, setAuthSession] = useSessionStorage('auth')
	const [rememberMe, setRememberMe] = useState(false)

	const [auth, setAuth] = useState({})

	useEffectOnce(() => {
		if (authCookie) {
			setAuth(JSON.parse(authCookie))
			setRememberMe(true)
		} else if (authSession) {
			setAuth(JSON.parse(authSession))
		}
	})

	useEffect(() => {
		if (auth.action === 'delete') {
			if (rememberMe) {
				setAuthCookie(null, { days: -1 })
			} else {
				setAuthSession(null)
			}
			setRememberMe(false)
			return
		}
		if (Object.keys(auth).length > 0) {
			if (rememberMe) {
				setAuthCookie(JSON.stringify(auth), {
					days: formatDateToDays(auth.validUntil),
				})
			} else {
				setAuthSession(JSON.stringify(auth))
			}
		}
	}, [auth])

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			<RememberMeContext.Provider value={{ rememberMe, setRememberMe }}>
				{children}
			</RememberMeContext.Provider>
		</AuthContext.Provider>
	)
}
```