import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { CarouselContainer } from "../containers/carousel";
import { JumbotronContainer } from "../containers/jumbotron";



const FAQ = () => {
  return (
<> 
    <div class="container">
        <div class="row">
            <div class="col-sm-5">
        
              <span>
                <h1>À propos de nous</h1>
                <hr/>
              </span>

            </div>
          </div>
        </div>

 <h2>À propos de nous</h2>
  <p>
  E-7imayati tacle deux problématiques dans le domaine de la sécurité, dont la Sécurité publique la sécurité sanitaire .
  La sécurité est un problème alarmant dans les grandes villes d’où l’utilité d’une plateforme web qui permet à l'administration d’un compound privé
   ou à l’autorité d'une ville d’identifier les personnes suspectes ou d’identifier des enfants perdus. Quant à la sécurité sanitaire, 
   la pollution de l’air est un problème environnemental majeur, qui a, en surcroit, un impact important sur le climat à l'échelle globale.
  </p>

  
  <h2>Rencontrer l'équipe</h2>

    <CarouselContainer />
  
  <h2>Nos Services</h2>

    <JumbotronContainer />


    <FaqsContainer />

      </>
  );
};

export default FAQ;
