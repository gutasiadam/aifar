# AIFAR

## Mi az AIFAR?

Az AIFAR ( Automatikus Időzített Felugró Ablak Rendszer ) célja az oldalon belül meglátogatott "kategóriák"-hoz igazított legoptimálisabb felugró ablakok, reklámok megjelenítése, időzítése és kezelése.


## Hogyan működik?
AIFAR a következő adatokat tárolja a felhasználóról:

 - legutóbbi látogatás időpontja
 - látogatások száma kategóriák szerint rendezve egy JSON fájlba.

Az adatok a felhasználó helyi tárhelyén kerülnek tárolásra (**LocalStorage**). A weboldal/alkalmazás üzemeltetője így nem fér hozzá direkt módon a látogatási adatokhoz.

## Felépítés
A projekt két fő mappába van rendezve:
|Data collection|Display|
|-----|------|
|Adatgyűjtés, mentés a tárhelyre| A begyűjtött adatok segítségével a megfelelő felugró ablak megjelölése, majd előhívása |

# Data collection
## A tárolt adat felépítése
A fent említett JSON fájl így néz ki: (példa)

    {"viewCount":{"Ajánló":12, "Közlemény":4},"timestamp":1594071654239}
a **viewCount** számolja az adott kategóriákhoz tartozó látogatások számát, míg a **timestamp** a legutóbbi látogatást mutatja ms-ban

## collector.js
Ez a fájl végzi az épp látogatott weboldalról származó fontos adatok begyűjtését.
A következő változók állíthatók a megfelelő beágyazáshoz:

    localStorageItemName
   Ez fogja meghatározni, mi legyen a helyi tárolt JSON változó neve.

    websiteCategoriesClass
   Ez pedig,  hogy honnan szerezze meg az oldal kategóriáinak nevét a kód.
   

> A kód eredetileg Wordpress rendszerű oldalhoz lett tervezve, ahol jellemző, hogy az oldalon valahol feltűnik az adott oldal kategóriájának neve. Ha ez nincs az oldalon, érdemes a következő kódrészletet cserélni: `var  elements  =  document.getElementsByClassName(websiteCategoriesClass);`

## dummy.php
Egy tesztoldal, ahol csak egy *"*Ajánló*"* felirat olvasható, illetve be van importálva a **collector.js** fájl. Ezzel tesztelhető a kód.

# Display
## modal_control.js
Ez a kód felelős a helyi tárhelyen található kód előhívásához, elemzéséhez. Ha minden feltétel megfelel ( a látogható megtekintett oldalakat és letelt az előre megszabott idő **percben**, akkor megjeleníti a felugró *modal*-t.

> Bármikor előhívható egy adott modal az `override_displayModal(nev)` funkció segítégével.

A következő változók állíthatók a megfelelő beágyazáshoz:

    categoryDict

Ez a JSON objektum köti össze a helyi tárhelyen levő kategóriák nevét a megfelelő modal-al. Új modal hozzáadása után ne felejtsük el annak id-jét beírni ide.

    localStorageItemName
Fontos, hogy ugyan arra állítsok, mint a **collector.js** fájlban, hogy a kód megtalálhassa a tárolt adatokat.

    displayDelay
Két felugró ablak megjelenítése közti minimu idő. **percben** adandó meg.

## ./popups/modals.php

A lehetséges felugró ablakokat itt kell megszerkeszteni. A modal-ok a Bootstrap szintaktikáját hazsnálják, de ez változtatható. Az **id** viszont fontos, ez alapján dönti el a *collector.js* fájl, hogy melyik modal-t kell megjeleníteni.

Példa egy modal kódjára ( megtalálható a kódban ):

    <div class="modal fade" id="ajanlo" tabindex="-1" role="dialog" aria-labelledby="ajanlo_Label" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="exampleModal3Label">Ajánló kategória felugró ablaka</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    </button>
    </div>
    <div class="modal-body">
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-danger" data-dismiss="modal">Bezárás</button>
    </div>
    </div>
    </div>
    </div>

### index.php
Ez az oldal segíthet kicsit megérteni a rendszer működését. Kellemes felffedezést ;) 

# Jövőbeli tervek, észrevételek
Mivel AIFAK eredetileg egy Worpdres-t használó oldalhoz készült, később valószínűleg egy Wordpres pluginné fog alakulni a projekt.
A kóddal kapcsolatos kérdések, észrevételek esetén keress meg bátran, illetve [jelents be egy hibát.](https://github.com/d3rang3/aifar/issues)
