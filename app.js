const form = document.getElementById('form');
form.addEventListener('submit',(e)=>{
    let extend=0,marketValue=0,structureValue=0,agricultureValue=0,treeValue=0,days=0;
    extend = parseFloat(document.getElementById('extend').value);
    marketValue = parseFloat(document.getElementById('marketValue').value);
    structureValue = parseFloat(document.getElementById('structureValue').value);
    agricultureValue = parseFloat(document.getElementById('agricultureValue').value);
    treeValue = parseFloat(document.getElementById('treeValue').value);
    days = parseFloat(document.getElementById('days').value);

    let basicMktValue  = extend  * marketValue;
    let basicMktMultipleFactor = basicMktValue * 1.2;
    let totalValueOfAsset = structureValue + agricultureValue + treeValue;
    let totalLandAndAssets = basicMktMultipleFactor + totalValueOfAsset;
    let solatium= totalLandAndAssets;
    let increase = (basicMktValue * 0.12 * days)/365;
    let totalCompenstation = totalLandAndAssets + solatium  + increase;

    document.getElementById('assetsAttached').innerHTML = totalValueOfAsset.toFixed(2);
    document.getElementById('landAndAsset').innerHTML = totalLandAndAssets.toFixed(2) ;
    document.getElementById('solatium').innerHTML = solatium.toFixed(2);
    document.getElementById('amoutDetermined').innerHTML = increase.toFixed(2);
    document.getElementById('compenstation').innerHTML = Math.round(totalCompenstation);
    e.preventDefault();
});

const clear = document.getElementById('clear');
clear.addEventListener('click',()=>{
    form.reset();
    document.getElementById('assetsAttached').innerHTML = 0;
    document.getElementById('landAndAsset').innerHTML = 0;
    document.getElementById('solatium').innerHTML = 0;
    document.getElementById('amoutDetermined').innerHTML = 0;
    document.getElementById('compenstation').innerHTML = 0;
})

