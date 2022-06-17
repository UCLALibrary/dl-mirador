import Mirador from 'mirador/dist/es/src/index';
import miradorImageToolsPlugin from 'mirador-image-tools/es/plugins/miradorImageToolsPlugin';

/*let params = new URL(document.location).searchParams;
let  encodedArk;
let manifestURL ='https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz1dr49h5/manifest?_ga=2.7592304.311075434.1655140054-1414255438.1650661792';
let initializedManifest = params.get('manifest');
if (initializedManifest) {
  let splitURL = initializedManifest.split("ark:");
  if(splitURL.length > 1){
    encodedArk = "ark:" + splitURL[1].substring(0,splitURL[1].lastIndexOf("/")).replaceAll("/","%2F");
    console.log("Ark ENCODED "+encodedArk);
    manifestURL = splitURL[0] + encodedArk + splitURL[1].substring(splitURL[1].lastIndexOf("/"));
    console.log("URL ENCODED "+manifestURL);
  } else {
    manifestURL = initializedManifest;
    console.log("URL ENCODED "+manifestURL);
  }
}*/

const config = {
  id: 'mirador-viewer',

  window: {
    imageToolsEnabled: true,
    // imageToolsOpen: true,
  },
    
  workspace: {
    isWorkspaceAddVisible: true 
  },

  catalog: [
    { manifestId: 'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz1dr49h5/manifest?_ga=2.7592304.311075434.1655140054-1414255438.1650661792', provider: "Wahon Literacies Collection, UCLA Library Digital Collections"},
    { manifestId: 'https://digital.blb-karlsruhe.de/i3f/v20/4590945/manifest', provider: "St. Gall Collection, UCLA Library Digital Collections (via Badische Landesbibliothek Karlsruhe)"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz001pz6h6/manifest?_ga=2.246332486.311075434.1655140054-1414255438.1650661792", provider: "Ethiopic Manuscripts, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0026hvf3/manifest?_ga=2.78492118.311075434.1655140054-1414255438.1650661792", provider: "Armenian Manuscripts, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz001hfwjk/manifest?_ga=2.207967696.311075434.1655140054-1414255438.1650661792", provider: "Tulancingo (Hildalgo, Mexico) Manuscript Collection, 1567-1882, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz002hjqt1/manifest?_ga=2.246398022.311075434.1655140054-1414255438.1650661792", provider: "Sachtleben (William Lewis) Papers. Collection 1841, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz1cg1cj7/manifest?_ga=2.45406822.311075434.1655140054-1414255438.1650661792", provider: "Collection of Material about Japanese American Incarceration, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz002k6tf4/manifest?_ga=2.2986482.311075434.1655140054-1414255438.1650661792", provider: "Orsini Family Papers, ca. 1150-1950, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz002cfgv5/manifest?_ga=2.79664470.311075434.1655140054-1414255438.1650661792", provider: "Henry J. Bruman Map Collection, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz002h75hm/manifest?_ga=2.49311972.311075434.1655140054-1414255438.1650661792", provider: "Henry J. Bruman Map Collection, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz002k6gpx/manifest?_ga=2.242259008.311075434.1655140054-1414255438.1650661792", provider: "Takamura (Kango) Paintings, 1942-1945, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0017966n/manifest?_ga=2.243686471.311075434.1655140054-1414255438.1650661792", provider: "Richard and Dion Neutra Papers, 1925-1970, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz001bkxsd/manifest?_ga=2.50256228.311075434.1655140054-1414255438.1650661792", provider: "Urquhart (Brian) Collection of Material about Ralph Bunche, ca. 1932-1972, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz1jt180t/manifest?_ga=2.44988646.311075434.1655140054-1414255438.1650661792", provider: "Quinn, Alfred Thomas Collection, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz1gn06jf/manifest?_ga=2.78485078.311075434.1655140054-1414255438.1650661792", provider: "Villages of Sulaimani (1960-1980) Collection, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz002k348j/manifest?_ga=2.79058390.311075434.1655140054-1414255438.1650661792", provider: "Bake/Jairazbhoy Digital Archive of South Asian Traditional Music and Arts, UCLA Library Digital Collections"},
    { manifestId: "https://ingest.iiif.library.ucla.edu/ark%3A%2F21198%2Fzz0002s37j/manifest?_ga=2.204903762.311075434.1655140054-1414255438.1650661792", provider: "Los Angeles Times Photographic Collection, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz1515rv0/manifest?_ga=2.208631248.311075434.1655140054-1414255438.1650661792", provider: "Medu Art Ensemble Collection, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz1rn528k/manifest?_ga=2.7762288.311075434.1655140054-1414255438.1650661792", provider: "Carteles de Cine, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz1qj99sc/manifest?_ga=2.45136230.311075434.1655140054-1414255438.1650661792", provider: "Carteles de Cine, UCLA Library Digital Collections"},
    { manifestId: "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fz15h9fjk/manifest?_ga=2.37179746.311075434.1655140054-1414255438.1650661792", provider: "Soviet Armenian Posters, UCLA Library Digital Collections"},
  ]
  
};

//console.log("check the url "+encodeURIComponent(config.windows[0].manifestId))
Mirador.viewer(config, [
    ...miradorImageToolsPlugin]);
