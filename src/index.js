import Mirador from 'mirador/dist/es/src/index';


let params = new URL(document.location).searchParams;
let  encodedArk;
let manifestURL = "";
let initializedManifest = params.get('manifest');
if(initializedManifest) {
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
}



const config = {
  id: 'mirador-viewer',
  windows: [
    {
      manifestId: manifestURL,
    }
  ],
};

//console.log("check the url "+encodeURIComponent(config.windows[0].manifestId))
Mirador.viewer(config);
