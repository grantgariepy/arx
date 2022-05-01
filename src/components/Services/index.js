import React from "react";
import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from "./ServicesElements.js";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>password manager</ServicesH2>
          <ServicesP>store your encrypted passwords</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>web3</ServicesH2>
          <ServicesP>no account needed</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>decentralized</ServicesH2>
          <ServicesP>d</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
