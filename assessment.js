/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftCollection = [];  //or you  can use const nftCollection=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, category, origin, value) {
   const nftMetadata = {
      name: name,
      category: category,
      origin: origin,
      value: value
  };
  nftCollection.push(nftMetadata);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for (let i = 0; i < nftCollection.length; i++) {
      console.log("Name: \t\t" + nftCollection[i].name);
      console.log("Category: \t" + nftCollection[i].category);
      console.log("Origin: \t" + nftCollection[i].origin);
      console.log("Value: \t\t" + nftCollection[i].value);
      console.log('------------------------');
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   return nftCollection.length;
}

// call your functions below this line
mintNFT("Ancient Relic", "Artifact", "Egypt", "$5,000");
mintNFT("Solar Flare", "Astrology", "Outer Space", "$10,000");
mintNFT("Oceanic Depths", "Marine Life", "Pacific Ocean", "$8,000");
// Listing all NFTs
listNFTs();
// Printing the total supply of NFTs
console.log("Total NFTs minted: " + getTotalSupply());
