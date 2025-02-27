import countryFacts from "/src/API/CountryData.json"

export const Country = () =>{

    return(
        <section className="section-about container">
        <h2 className="container-title"> Here are the Intersting Facts <br/> we're pround of Cintizen of Bangladesh. </h2>   

<div className="gradient-cards">
   {
       countryFacts.map((country)=>{
           const {id,countryName,capital,population,interestingFact,liberationDate,politicalParties,fatherOfTheNation,fifaChampionsYear,cricketChampionsYear} = country

           return(
               <div className="card" key={id}>
               <div className="container-card bg-blue-box">
                   <p className="cart-title">{countryName}
                   </p>
                   <p>
                       <span className="card-description"> Capital City: 
      
                       </span>
       {capital}
                   </p>
       
                   <p>
                       <span className="card-description"> Population:   
        
                       </span>
                       {population} Million
                   </p>
       
                   <p>
                       <span className="card-description"> Interesting-Facts: 
      
                       </span>
                       {interestingFact}
                   </p>
       
       
                   <p>
                       <span className="card-description"> Date of Liberation: 
     
                       </span>
       {liberationDate}
                   </p>
       
                   <p>
                       <span className="card-description"> Political Parties:  
      
                       </span>
                       {politicalParties.join(', ')}
                   </p>
       
       
       
                   <p>
                       <span className="card-description"> Father of The Nation:  
       
                       </span>
       {fatherOfTheNation}
                   </p>
       
       
       
                   {/* <p>
                       <span className="card-description"> FIFA Champions Year:  
       
                       </span>
       {fifaChampionsYear.join(', ')}
                   </p>
       
       
                   <p>
                       <span className="card-description"> Cricket World-Cup Champions Year:  
       XXXX
                       </span>
       
                   </p> */}
       
                   </div> 
                   </div>
           )

       })
   }
  


</div>
       </section>
    )
}