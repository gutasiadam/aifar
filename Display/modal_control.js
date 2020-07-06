window.setTimeout(function(){

  localStorageItemName = "readingCat";
  var displayDelay = 1;

    categoryDict = {"Ajánló" : ajanlo}; 
    // First check, if localStorage is supported.
    if(localStorage.getItem(localStorageItemName)){
    viewedCategoriesObject = JSON.parse(localStorage.getItem(localStorageItemName));
    viewedCategories = viewedCategoriesObject.viewCount;
    var viewRecord = Object.keys(viewedCategories).map(function(key) {
    return [key, viewedCategories[key]];
  });

    dataToSplit = viewRecord[0]+"";
    optimalAd = dataToSplit.split(",")
    
    document.getElementById("idokoz").innerHTML = displayDelay;
    document.getElementById("Reklamkat").innerHTML = optimalAd[0];
      if (window.localStorage) {
      var d = new Date()
      document.getElementById("dateObj").innerHTML = d.setMinutes(d.getMinutes());
          // Get the expiration date of the previous popup.
          var nextPopup = localStorage.getItem( 'nextNewsletter' );
      document.getElementById("allapot").innerHTML = nextPopup;
          if (nextPopup > new Date()) {
        console.log("ERR001 - még nem telt le elég idő!");
              return;
          }
  
          // Store the expiration date of the current popup in localStorage.
          var expires = new Date();
          expires = expires.setMinutes(expires.getMinutes() + displayDelay);
  
          localStorage.setItem( 'nextNewsletter', expires );
        }
  
    
    if (categoryDict[optimalAd[0]]){console.log("Category exists."); $(categoryDict[optimalAd[0]]).modal()}
      else{ ($("#alap").modal());}
    //DiviArea.show('#get-newsletter');
    localStorage.removeItem(localStorageItemName);
    console.log("show!, next popup at "+expires+" ms")
    document.getElementById("allapot").innerHTML = expires;}
    else {
      console.log("ERR002 - Nincs localstorage");
      document.getElementById("idokoz").innerHTML = displayDelay;
      document.getElementById("Reklamkat").innerHTML = "Nincs megtekintett weboldal!";
    }
  }, 200);
  
  function override_displayModal(name){
    $("#"+name).modal();
  }