let ss = "abcabcbb"; 
 
function lengthOfLongestSubstring (s) {
  console.log(s.length);
  
  
  //empty array to save the output
  let output = [];
  
  // switch to cut loop character
  var onoff = false;
  
  //main array to save all the arrays
  
  var mainArray = [];
  
  //dummy array to save temporaly arrays in the second loop
  var dummyArray = [];
  
  //for(let ini = 0;ini<s.length; ini++ ){
  
  //first loop to iterate through the string
  for(let i=0; i<s.length; i++){
    
    //first push of the array
    
    dummyArray.push(s[i]);
    
        for(let o = i + 1; o < s.length ; o++){
          
           if( s[i] != s[o] ){
         
             dummyArray.push(s[o]);
              
                 }
                else if ( s[i] === s[o]) {
                     
                  mainArray.push(dummyArray);
                  dummyArray=[];
                  
                     break;
                                      } 
                                               } //end of the second loop
              // if(onoff){
                //  break;
                  //      }
  
    
                              }
      
                                  //  }
  
  return mainArray
  
  
};

console.log(lengthOfLongestSubstring (ss))



let principal = [];
let secundario = [4, 5, 6];
let terci = [4, 5, 6];

principal.push(secundario);
principal.push(terci);
console.log(principal); 


 
