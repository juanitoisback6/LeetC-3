let ss = "abcabcbb"; 
 
function lengthOfLongestSubstring (s) {
  console.log(s.length);
  
  
  //empty array to save the output
  let output = "";
  
  // switch to cut loop character
  let onoff = false;
  
  //loop to iterate between each 
  
  for(let i=0; i<s.length; i++){
    
        for(let o = i+1; o< s.length; o++){
          
       if(s[i]!=s[o] ){
         
         output += s[i] + s[o]
       } else if ( s[i]===s[o]){
         onoff=true;
         break;
       } 
    }
     if(onoff){
            break;
          }
    
  
   
  }
  
  return output
  
  
};

console.log(lengthOfLongestSubstring (ss))
 
