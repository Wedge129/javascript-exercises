const getTheTitles = function(arrayOfBooks) {

    arrayOfTitles= arrayOfBooks.map(getTitles);

    function getTitles(item){
        //console.log(item.title);
        return[item.title];
    }
    return arrayOfTitles;
   
};
// const books = [
//     {
//       title: 'Book',
//       author: 'Name'
//     },
//     {
//       title: 'Book2',
//       author: 'Name2'
//     }
//   ]
// getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;
