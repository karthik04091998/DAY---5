// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.
class Movie {
    // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
        constructor(title,studio,rating='PG'){
            this.title = title;
            this.studio = studio;
            this.rating = rating;
        }
    // /c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.    
            getPG(){
                let getrating = {
                    "Adult":"PG13",
                    "Child":"PG",
                }
                return getrating[this.rating];
            }
      toString() {
          console.log(`The Movie ${this.title} was from ${this.studio} and it's rated ${this.getPG()}`);
      }
    }
    let Movies = [];
    
    Movies.push(new Movie('The Fault In Our Stars','Flawless Studio','Adult'));
    Movies.push(new Movie('The Notebook','2K Media','Child'));
    Movies.push(new Movie('A Walk To Remember','Zero Media','Adult'));
    Movies.push(new Movie('Interstellar','Gravity Studio','Child'));
    Movies.push(new Movie('Remember Me','Pixar Studio','Child'));
    // d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
    // the studio “Eon Productions”, and the rating “PG­13”
    Movies.push(new Movie( "CasinoRoyal Adult", "Eon Productions",'Adult'));
    
    for (let index = 0; index < Movies.length; index++){
        Movies[index].toString();
    }