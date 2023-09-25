const repeatString = function(string, num) {

    if(num>0){
            stringTemp=string;
        for(let i=0;i<num-1;i++){
            
            string+=stringTemp;
            }
            return string;
    }else if(num<0){
        return string="ERROR"
    }
    else{
        return string='';
    }
    
    
};

// Do not edit below this line
module.exports = repeatString;
