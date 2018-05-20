
$(document).ready(function(){

    
    // $("#submitBtn").on("click", function(){
    //     $("#weatherDisplay").empty();
    //     var cityName = $("#userSearch").val().trim();
    //     var date = $("#userDate").val().trim();
            
    //     var queryURL =      ("https://api.apixu.com/v1/current.json?key=8225062d1e5b43cb95f234551181605&q=" + cityName + "&dt=" + date);
    //     console.log(queryURL);

    //     $.ajax({
    //         url:queryURL,
    //         method:"GET",
    //     }).
    //         then(function(response){
    //                 // get the page IDs
	            

    //         var weatherInfo=$("<div>");
    //             weatherInfo.addClass("card mt-3 p-3");
    //         var name=$("<h4>");
    //             name.text(response.location.name);
    //             console.log(response.current.cloud);
    //         var localTime=$("<p>");
    //             localTime.text("Local Time is: " + response.location.localtime);
    //             console.log("Local Time is: " + response.location.localtime);
    //         var condition=$("<p>");
    //             condition.text("Condition is: " + response.current.condition.text);
    //         var clouds=$("<p>");
    //             clouds.text("Cloud: " + response.current.cloud);
    //         var visibility=$("<p>");
    //             visibility.text("Visibility: " + response.current.vis_miles + " miles.");
            

                
    //             weatherInfo.append(name);
    //             weatherInfo.append(localTime);
    //             weatherInfo.append(condition);
    //             weatherInfo.append(clouds);
    //             weatherInfo.append(visibility);

    //         $("#weatherDisplay").html(weatherInfo);



    //     })
    // });

    $("#submitBtn").on("click", function(){
        $("#weatherDisplay").empty();
            var lattitude = $("#latSearch").val().trim();
            var longtitude = $("#longSearch").val().trim();
            var queryURL = ("https://api.openweathermap.org/data/2.5/forecast?lat=" + lattitude + "&lon=" + longtitude + "&appid=764202827fb596fa8957502051063c79" );
             console.log(queryURL);

        $.ajax({
            url:queryURL,
            method:"GET",
        }).
            then(function(response){
                    // get the page IDs        

            var weatherInfo=$("<div>");
                weatherInfo.addClass("card mt-3 p-3");
            var name=$("<h4>");
                name.text("The Country is: " + response.city.name);
                console.log("The Country is: " + response.city.name);
            var date=$("<p>");
                date.text("Date: " + response.list[0].dt_txt);
                console.log("Date: " + response.list[0].dt_txt);
                
            var weather=$("<p>");
                weather.text("Local Weather is: " + response.list[0].weather[0].description);
                console.log("Local Weather is: " + response.list[0].weather[0].description);    
            var condition=$("<p>");
                condition.text(" The Cloud is: " + response.list[0].clouds.all + "%");
                console.log(" The Cloud is: " + response.list[0].clouds.all + "%");
            var wind=$("<p>");
                wind.text(" The Wind is: " + response.list[0].wind.speed);
                console.log(" The Wind is: " + response.list[0].wind.speed);
            var date1=$("<p>");
                date1.text("Date: " + response.list[8].dt_txt);
                console.log("Date: " + response.list[8].dt_txt);
            var weather1=$("<p>");
                weather1.text("Local Weather is: " + response.list[8].weather[0].description);
                console.log("Local Weather is: " + response.list[8].weather[0].description);
            var condition1=$("<p>");
                condition1.text(" The Cloud is: " + response.list[8].clouds.all + "%");
                console.log(" The Cloud is: " + response.list[8].clouds.all + "%");
            var wind1=$("<p>");
                wind1.text(" The Wind is: " + response.list[8].wind.speed);
                console.log(" The Wind is: " + response.list[8].wind.speed);
            var date2=$("<p>");
                date2.text("Date: " + response.list[16].dt_txt);
                console.log("Date: " + response.list[16].dt_txt);
            var weather2=$("<p>");
                weather2.text("Local Weather is: " + response.list[16].weather[0].description);
                console.log("Local Weather is: " + response.list[16].weather[0].description);
            var condition2=$("<p>");
                condition2.text(" The Cloud is: " + response.list[16].clouds.all + "%");
                console.log(" The Cloud is: " + response.list[16].clouds.all + "%");
            var wind2=$("<p>");
                wind2.text(" The Wind is: " + response.list[16].wind.speed);
                console.log(" The Wind is: " + response.list[16].wind.speed);
            var date3=$("<p>");
                 date3.text("Date: " + response.list[24].dt_txt);
                 console.log("Date: " + response.list[24].dt_txt);
            var weather3=$("<p>");
                weather3.text("Local Weather is: " + response.list[24].weather[0].description);
                console.log("Local Weather is: " + response.list[24].weather[0].description);
            var condition3=$("<p>");
                condition3.text(" The Cloud is: " + response.list[24].clouds.all + "%");
                console.log(" The Cloud is: " + response.list[24].clouds.all + "%");
            var wind3=$("<p>");
                wind3.text(" The Wind is: " + response.list[24].wind.speed);
                console.log(" The Wind is: " + response.list[24].wind.speed);
            var date4=$("<p>");
                date4.text("Date: " + response.list[32].dt_txt);
                console.log("Date: " + response.list[32].dt_txt);
            var weather4=$("<p>");
                weather4.text("Local Weather is: " + response.list[32].weather[0].description);
                console.log("Local Weather is: " + response.list[32].weather[0].description);
            var condition4=$("<p>");
                condition4.text(" The Cloud is: " + response.list[32].clouds.all + "%");
                console.log(" The Cloud is: " + response.list[32].clouds.all + "%");
            var wind4=$("<p>");
                wind4.text(" The Wind is: " + response.list[32].wind.speed);
                console.log(" The Wind is: " + response.list[32].wind.speed);

            // var visibility=$("<p>");
            //     visibility.text("Visibility: " + response.current.vis_miles + " miles.");
            weatherInfo.append(name);
            weatherInfo.append(date);
            weatherInfo.append(weather);
            weatherInfo.append(condition);
            weatherInfo.append(wind);
            weatherInfo.append(date1);
            weatherInfo.append(weather1);
            weatherInfo.append(condition1);
            weatherInfo.append(wind1);
            weatherInfo.append(date2);
            weatherInfo.append(weather2);
            weatherInfo.append(condition2);
            weatherInfo.append(wind2);
            weatherInfo.append(date3);
            weatherInfo.append(weather3);
            weatherInfo.append(condition3);
            weatherInfo.append(wind3);
            weatherInfo.append(date4);
            weatherInfo.append(weather4);
            weatherInfo.append(condition4);
            weatherInfo.append(wind4);
            $("#weatherDisplay").html(weatherInfo);

    });
})


    })