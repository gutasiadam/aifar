// SETTINGS:
localStorageItemName = "readingCat";
websiteCategoriesClass = "visCat";

//
    try{
        //checking LocalStorage
        localStorage.getItem(localStorageItemName); // Bármi
        if(JSON.parse(localStorage.getItem(localStorageItemName)) == null){
            throw 001;
        }else{
            viewedCategoriesObject = JSON.parse(localStorage.getItem(localStorageItemName));
        };
        console.log("AIFAR - Done Loading locally stored object.");
    }catch (e){
        console.log("AIFAR - Created new view object.");
        var viewedCategoriesObject = {
        viewCount:
        {Ajánló : 0 },
        timestamp: new Date().getTime()
    };
    }
    var elements = document.getElementsByClassName(websiteCategoriesClass); // Element
    for (var i=0; i<elements.length; i++) {
        viewedElement = elements[i].innerText;
        if (viewedCategoriesObject.viewCount.hasOwnProperty(viewedElement)){
            viewedCategoriesObject.viewCount[viewedElement] += 1;
        }
        else{
            viewedCategoriesObject.viewCount[viewedElement] = 1;
        }
    }
    localStorage.setItem(localStorageItemName, JSON.stringify(viewedCategoriesObject));
    console.log("AIFAR - Local Data modification successful.");