
function formatDate(date) {
    let formatedDate = new Date().toISOString();
    return formatedDate;
}

function dateConverter(date){
    let newDate = new Date().toLocaleDateString();
    return newDate;
}
// module.exports = formatDate     
module.exports = {formatDate,dateConverter}

