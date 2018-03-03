import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'



class Weather extends Component {
    constructor(props) {
        super(props);
    };
    state = { citylist: "" }
    render() {

        return (
            <View><Text></Text></View>
        )
    }

    componentDidMount() {
        this.fetchCityList();
    }
    fetchCityList = () => {

        const responce = fetch(
            "http://openweathermap.org/help/city_list.txt").then(onfulfilled, onrejected);




        function onfulfilled(data) {
            const resStringify = JSON.stringify(data);


            // const resBody=resStringify.slice(resStringify.indexOf('countryCode')+
            // "countryCode".length+"\\n".length,resStringify.length);

            // object of cities
            const resBody = data._bodyInit;
            // console.log("resBody = "+resBody);
            // array of cities
            var resArr = new Array();
            resArr = resBody.split('\n');

            console.log("resArr[0] = " + resArr[0]);
            console.log("resArr[1] = " + resArr[1]);


            //convert array of cities to array of json-objects 
            var citiesArr = "";
            for (var i = 1; i < resArr.length - 1; i++) {
                //city string
                let element = resArr[i];

                let cityArr = element.split('\t');
                // city object
                let cityString =
                    "{ id:".concat(cityArr[0]).concat(",nm:").concat(cityArr[1]).
                        concat(",lat:").concat(cityArr[2]).concat(",lon:").concat(cityArr[3]).
                        concat(",countryCode:").concat(cityArr[4]).concat(" }");
                citiesArr = citiesArr + cityString;
            }
           
            //  citiesArr = citiesArr.slice(0, citiesArr.lastIndexOf(','));
            // console.log("citiesArr end= " + citiesArr.slice(citiesArr.lastIndexOf("id"), citiesArr.lastIndexOf('}')+1));
            //  console.log("citiesArr  = " + citiesArr );
            //put list of objects into array
            citiesArr = "[" + citiesArr + "]";
            var citiesJson = JSON.stringify(citiesArr);
            //final object           
            var citiesObj = {};
            citiesObj.body = JSON.parse(citiesJson);
            //store object 
              setCityList(citiesObj);
              getCityById();
            // console.log("citiesObj  = " + citiesObj );
            console.log("citiesObj body = " + citiesObj.body);
        }
        function onrejected(error) {
            console.log("error = " + error);
        }
        setCityList = async (value) => {
            try {
                for (var i = 0; i < citiesObj.body.length; i++) {
                    await AsyncStorage.setItem('city'+i, citiesObj.body[i]);
                }
            } catch (error) {
                console.log("error = " + error);
            }
        }
        getCityList = async () => {
            try {
                await AsyncStorage.getItem('cities', (error, result) => {
                    console.log("error = " + error);
                    console.log("result = " + result);
                });
            } catch (error) {
                console.log("error = " + error);
            }
        }
    }
}
export default Weather