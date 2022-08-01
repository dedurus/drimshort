let counter_date = {
    date: ''
}

var cd_date = new Date("Nov 12, 2020 23:23:59").getTime();

setInterval(function () {
    var now = new Date().getTime();
    var diff = cd_date - now;
    var d = Math.floor(diff / (1000 * 60 * 60 * 24));
    var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((diff % (1000 * 60)) / 1000);
    counter_date.date =  d + "d " + h + "h " + m + "m " + s + "s ";
})

export default counter_date;
