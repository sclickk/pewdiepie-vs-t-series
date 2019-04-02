var googleAPIKey = "AIzaSyAxoImyXMesvuFGzTBtgi1FsY7VWlgaAa0";

class Channel {
  constructor(id) {
    this.id = id;
  }

  getSubCount(name) {
    var request = new XMLHttpRequest();
    request.open("GET",
    "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="
    + this.id
    + "&fields=items/statistics/subscriberCount&key="
    + googleAPIKey, true);
    request.send();
    request.onload = function () {
      var data = JSON.parse(request.responseText);
      var subcount = parseInt(data.items[0].statistics.subscriberCount);
      return subcount; 
    }
  }
}

function updateCounter()
{
  setInterval(function () {
    var pewdiepie = new Channel("UdsghC-lHJZR3Gqxm24_Vd_AJ5Yw");
    var tseries = new Channel("UCq-Fj5jknLsUf-MWSy4_brA");
    $("#pewdiepie-sub-count").text(pewdiepie.getSubCount());
    $("#t-series-sub-count").text(tseries.getSubCount());
    $("#gap").text("<p>" + (parseInt(pewdiepie.getSubCount()) - parseInt(tseries.getSubCount())) + "</p>");
  }, 3000);
}

window.onload = function()
{
  updateCounter();
}