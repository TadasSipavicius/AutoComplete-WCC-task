

AutoComplete filter task

Sukurkite paieškos autocomplete web komponentą, kurio pagalba vartotojas galės pasirinkti kino filmą iš įvestos frazės atitikmenų. Paieškos komponentas turi bendrauti su filmų informacijos API.

Norint sėkmingai atlikti užduotį, nebūtina turėti patirties su moderniais JavaScript karkasais. Stenkitės rašyti kuo paprastesnį ir aiškesnį kodą. Akademijos tikslas yra kartu išmokti geriausių programavimo praktikų, todėl nesidrovėkite atsiųsti bet kokios savo darbo versijos.

Pradiniai reikalavimai
Dizainą įgyvendinti kuo panašesnį į pateiktą žemiau. Pikselių nematuosime, tačiau į centravimą ir bendrą išdėstymą atsižvelgsime.
Stiliaus aprašus stenkitės išlaikyti tvarkingus, vengiant nereikalingų komandų.
Paieškos langas turi leisti įvesti paieškos tekstą ir pateikti galimus variantus ( gali būti ir be API pajungimo, tiesiog statiniai duomenys)
Papildomi reikalavimai
Stilių aprašams naudoti modernius stiliaus įrankius kaip PostCSS ar SASS.
Komponentas turi naudoti informaciją, gaunamą dinamiškai iš filmų duomenų API: GET: https://api.themoviedb.org/3/search/movie?api_key=**{api_raktas}**&language=en-US&query=**{paieškos_tekstas}**
Pasirinkus vieną iš rezultatų, komponento įvesties tekstas turi atsinaujinti pagal pasirinkimą.
Maksimalus rodomas dinaminės paieškos rezultatų kiekis - 8 filmų įrašai.
Minimalus simbolių kiekis, aktyvuojantis dinaminę paiešką - 3. Jeigu ši sąlyga tenkinama, bet koks simbolio pakeitimas panaikina buvusius rezultatus ir iš naujo aktyvuoja dinaminę paiešką.
Papildomas pliusas bus jeigu naudosite debounce funkciją apsisaugot nuo nereikalingų užklausų į filmų bazę. Taip pat papildomi taškai gali būt skiriami, jei padarysite error handling ar loadinimą.
Instrukcijos
Naudokite šią Github repozitoriją kaip pradinį užduoties tašką. Tai galite padaryti naudodami Github Fork funkciją.
KAYAK WCC academy paskaitų projekte naudosime React.js, todėl rekomenduojame užduotį atlikti naudojant šią technologiją, tačiau šiam namų darbui technologijos nėra ribojamos ir galima pasirinkti savo nuožiūra. Galite naudoti create-react-app ar Angular CLI ir kitus bibliotekų aplinkos generatorius.
Nenaudokite NPM dependencies, kurios padaro visą autocomplete logiką už jus.
Iškilus klausimams dėl užduoties formuluočių, pateikite klausimą Github Issues skiltyje ir mes kaip galima greičiau atsakysime.
Pabaigus užduotį, atsiųskite savo Github repozitorijos adresą kartu su registracijos forma.
Kaip gauti api_key skirtą themoviedb api
Einame į https://www.themoviedb.org/
Užsiregistruojame
Patvirtiname email'ą
Prisijungiame
Spaudžiame ant avataro, einame į settings
Pasirenkame API sekciją
Susikuriame API key, spaudžiame create ir užpildome reikiamą informaciją sekdami vedlį
Gauname api_key

![1st](https://user-images.githubusercontent.com/74046943/108624329-f9aaf800-744c-11eb-9cb0-457e1251d7b7.png)
![2nd](https://user-images.githubusercontent.com/74046943/108624330-fadc2500-744c-11eb-9d42-d273756367cb.png)
![3rd](https://user-images.githubusercontent.com/74046943/108624332-fc0d5200-744c-11eb-8f85-c1034d633042.png)
![4th](https://user-images.githubusercontent.com/74046943/108624334-fd3e7f00-744c-11eb-9521-324367a380b1.png)
