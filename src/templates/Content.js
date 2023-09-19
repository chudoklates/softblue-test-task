import React from "react";
import Section from "../components/Section";
import styled from "styled-components";

const TwoColumnText = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 45px;
`;

/**
 *
 * @param {import('gatsby').PageProps<any, import('../types').ContentPageContext>} props
 * @returns
 */
const Content = ({ pageContext }) => {
  const { title } = pageContext;

  return (
    <main>
      <Section subtitle={title} title="Lorem Ipsum">
        <TwoColumnText>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
            nunc est. Nunc ut libero tempor, bibendum diam non, ultrices tortor.
            Nam convallis sem a consequat pellentesque. Praesent facilisis
            laoreet magna, id auctor tellus consequat ac. Integer maximus
            pharetra mollis. Quisque eu blandit lacus. Aliquam ut massa sed
            risus pellentesque vestibulum ut rhoncus enim. Sed eget ullamcorper
            dui. Sed mollis lorem eu egestas fringilla. Sed nec felis vel dui
            porta faucibus vestibulum quis nibh. Integer efficitur dui sit amet
            suscipit aliquet.
          </p>
          <p>
            Nulla sit amet massa vel turpis finibus ultricies quis quis ligula.
            Donec nec venenatis mi. Etiam sed tellus eget tellus gravida
            accumsan. Nunc at erat dictum, gravida enim in, placerat nulla.
            Aenean sed ligula vestibulum mi placerat lobortis a nec turpis. Cras
            placerat ex vel nisl egestas elementum in quis enim. Donec fermentum
            quis neque vel pretium. Integer odio urna, tristique sed libero vel,
            fringilla maximus sem.
          </p>
          <p>
            Morbi laoreet ante at massa molestie, quis egestas dui fermentum.
            Sed faucibus purus velit, scelerisque congue nunc pharetra eget.
            Fusce nulla magna, elementum sed diam in, scelerisque laoreet
            turpis. In accumsan quis erat eu efficitur. In egestas pulvinar
            porta. Donec commodo iaculis diam, in semper mauris dignissim ac.
            Aliquam erat volutpat. Duis odio mauris, interdum sed varius eu,
            sollicitudin a enim. Duis et elementum ex. Nunc faucibus velit
            interdum velit venenatis, vel lobortis odio euismod. Vivamus ut
            congue nibh. Nulla sit amet hendrerit dolor. Duis sagittis rutrum
            scelerisque. Suspendisse volutpat est nec rutrum volutpat.
          </p>
          <p>
            Curabitur ipsum diam, venenatis id lorem eget, sodales elementum
            leo. Quisque pellentesque, dolor ac sodales efficitur, orci justo
            placerat neque, non aliquam lorem ex ut eros. In eleifend nisi in
            magna blandit porta. Vivamus interdum sapien cursus, tempus est ut,
            facilisis velit. Suspendisse accumsan magna nisi, sed dapibus urna
            hendrerit sed. Donec aliquet, nisi congue porttitor vestibulum,
            purus erat placerat lectus, at commodo ligula felis ut dui. Etiam
            sagittis lectus et gravida efficitur. Cras placerat sit amet risus
            aliquet lobortis. Praesent facilisis diam eleifend, venenatis enim
            ac, vestibulum est. Phasellus varius ante eu mollis viverra. Sed
            lobortis, orci a venenatis luctus, magna massa bibendum odio, nec
            faucibus enim metus at sem.
          </p>
          <p>
            Duis sit amet vestibulum metus. Duis rutrum suscipit lobortis. Duis
            imperdiet erat sed ullamcorper congue. Proin cursus scelerisque
            tellus, non accumsan neque pretium nec. Duis dapibus tortor lacinia
            mattis fringilla. Nulla quis metus turpis. Morbi eget elementum
            massa, sit amet scelerisque nisl.
          </p>
          <p>
            Nulla facilisi. Curabitur rutrum, nunc vehicula luctus ornare,
            tortor urna rhoncus tellus, in volutpat urna massa id orci. Vivamus
            ut eleifend nulla. Mauris nec ex tortor. Morbi consequat sagittis
            iaculis. Vestibulum molestie aliquam lectus, non viverra sem
            pharetra in. Vestibulum imperdiet laoreet mauris, a ullamcorper
            massa fringilla et. Nam id velit sem. Donec vel odio nibh. Aliquam
            dapibus nulla non urna tincidunt venenatis. Praesent nec quam sed mi
            vulputate laoreet. Sed porta fermentum interdum. Sed vitae elit
            tellus. Aliquam id ante ac dolor tempor posuere eget ullamcorper
            justo. Phasellus interdum nisi non erat condimentum lobortis. Etiam
            placerat efficitur mi, a lacinia odio iaculis vitae.
          </p>
          <p>
            Nulla lacus eros, vestibulum a felis sit amet, blandit faucibus est.
            Vivamus tristique est sit amet sem tempus consequat. Curabitur
            interdum, nunc vitae iaculis lacinia, est diam tempus justo, eu
            sollicitudin ante purus vitae justo. Donec faucibus commodo ipsum,
            eget blandit lectus porttitor in. Nam justo leo, tristique sed est
            a, scelerisque lobortis mauris. Morbi enim augue, porta quis auctor
            at, accumsan id nunc. Suspendisse nibh massa, imperdiet ac nisl eu,
            hendrerit euismod massa.
          </p>
          <p>
            Pellentesque a mauris odio. Phasellus ut vestibulum felis, in
            iaculis massa. Mauris lobortis purus viverra enim lacinia finibus.
            Ut porta bibendum est. Phasellus ullamcorper eu ante ut viverra. Sed
            sed nibh dapibus, tincidunt dui et, lobortis eros. Donec fermentum
            scelerisque vestibulum. Sed id finibus quam, ac ultrices risus.
            Curabitur mauris purus, tristique ac porttitor et, iaculis non nunc.
            Integer ac sem vel lorem sagittis congue. Sed faucibus urna vel
            velit luctus, vel blandit justo porta. Phasellus molestie suscipit
            nunc vel ultricies. Vivamus a tellus tempor, efficitur justo at,
            luctus lacus. Etiam quis lectus ac dui imperdiet faucibus. Maecenas
            sagittis vitae leo ut fringilla. In consequat in erat rhoncus
            pharetra.
          </p>
        </TwoColumnText>
      </Section>
    </main>
  );
};

export default Content;
