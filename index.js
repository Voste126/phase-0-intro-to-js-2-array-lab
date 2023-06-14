// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
//.push function
//cats.push = ["Milo", "Otis", "Garfield"];
// arraay functions
//adds a cat at the end 
function destructivelyAppendCat(name){
    return cats.push(name);
}
//adds a cat at the beginning
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
//removes the last cat 
function destructivelyRemoveLastCat(){
    return cats.pop();
}
//removes the first cat
function  destructivelyRemoveFirstCat(){
    return cats.shift();
}
//1) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function  appendCat(name){
      // Create a new array that includes all the elements from the original cats array
  const newCats = [...cats];
  
  // Append the new cat to the new array
  newCats.push(name);
  
  // Return the new array
  return newCats;
    //return cats.push(name);
}
//prepends the function
function  prependCat(name){
         // Create a new array that includes all the elements from the original cats array
  const newCats = [...cats];
  
  // Append the new cat to the new array
  newCats.unshift(name);
  
  // Return the new array
  return newCats;
    //return cats.push(name);
}
//removes the last cat from the array 
function removeLastCat(){
            // Create a new array that includes all the elements from the original cats array
  const newCats = [...cats];
  
  // Append the new cat to the new array
  newCats.pop();
  
  // Return the new array
  return newCats;
    //return cats.push(name);
}
// removes the fisrt cat in the array
function removeFirstCat(){
                // Create a new array that includes all the elements from the original cats array
  const newCats = [...cats];
  
  // Append the new cat to the new array
  newCats.shift();
  
  // Return the new array
  return newCats;
    //return cats.push(name);

}