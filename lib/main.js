class Channel {
  constructor(id) {
    this.id = id;
    this.key = "AIzaSyAxoImyXMesvuFGzTBtgi1FsY7VWlgaAa0";
  }

  getSubCount(name) {
    var request = new XMLHttpRequest();
    request.open("GET",
    "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="
    + this.id
    + "&fields=items/statistics/subscriberCount&key="
    + this.key, true);
    request.send();
    request.onload = function () {
      var data = JSON.parse(request.responseText);
      var subcount = parseInt(data.items[0].statistics.subscriberCount);
      document.getElementById(name + "-sub-count").innerHTML = subcount; 
    }
  }
}

function updateCounter()
{
  setInterval(function () {
    var pewdiepie = new Channel("UC-lHJZR3Gqxm24_Vd_AJ5Yw");
    var tseries = new Channel("UCq-Fj5jknLsUf-MWSy4_brA");
    pewdiepie.getSubCount("pewdiepie");
    tseries.getSubCount("t-series");
    var p_subs = document.getElementById("pewdiepie-sub-count").innerHTML;
    var t_subs = document.getElementById("t-series-sub-count").innerHTML;
    document.getElementById("gap").innerHTML = "<p>" + (parseInt(p_subs) - parseInt(t_subs)) + "</p>";
  }, 3000);
}

window.onload = function()
{
  updateCounter();
}