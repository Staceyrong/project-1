
$(document).ready(function(){

    $("#weathBtn").on("click", function(){
        $("#weatherDisplay").empty();
            var lattitude = $("#latSearch").val().trim();
            var longtitude = $("#longSearch").val().trim();
            var cityName = $("#userSearch").val().trim();
            var queryURL = ("https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&lat=" + lattitude + "&lon=" + longtitude + "&appid=764202827fb596fa8957502051063c79" );
             console.log(queryURL);

        $.ajax({
            url:queryURL,
            method:"GET",
        }).
            then(function(response){
                    // get the page IDs        

            var weatherInfo=$("<table>");
                weatherInfo.addClass("card mt-3 p-3");
            var name=$("<h4>");
                name.text("The Country is: " + response.city.name);
                console.log("The Country is: " + response.city.name);
            weatherInfo.append(name);       
            for (var i = 0; i <=32; i+=8) {
                var date=$("<p>");
                    date.text("Date: " + response.list[i].dt_txt);
                    console.log("Date: " + response.list[i].dt_txt);  
                var weather=$("<p>");
                    weather.text("Local Weather is: " + response.list[i].weather[0].description);
                    console.log("Local Weather is: " + response.list[i].weather[0].description);    
                var condition=$("<p>");
                    condition.text(" The Cloud is: " + response.list[i].clouds.all + "%");
                    console.log(" The Cloud is: " + response.list[i].clouds.all + "%");
                var wind=$("<p>");
                    wind.text(" The Wind is: " + response.list[i].wind.speed);
                    console.log(" The Wind is: " + response.list[i].wind.speed);
                weatherInfo.append(date);
                weatherInfo.append(weather);
                weatherInfo.append(condition);
                weatherInfo.append(wind);
                
           
            }
        
               $("#weatherDisplay").html(weatherInfo);  
      
            });
});

    $("#mapsBtn").on("click", function(){
        $("#weatherDisplay").hide();

    });
    $("#satBtn").on("click", function(){
        $("#weatherDisplay").hide();

    });
    $("#weathBtn").on("click", function(){
        $("#weatherDisplay").show();

    });


    });