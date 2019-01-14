import React from "react";
import { storiesOf } from "@storybook/react";

import {
  ScrollMarkerContainer,
  ScrollMarkerLink,
  ScrollMarkerSection
} from "./index";

storiesOf("Overview", module).add("full example", () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "auto auto"
    }}
  >
    <ScrollMarkerContainer>
      <nav>
        <ul>
          <li>
            <ScrollMarkerLink id="history">
              {({ isActive, onClick }) => (
                <a
                  href="#history"
                  style={{ borderLeft: isActive ? "3px solid blue" : "" }}
                  onClick={onClick}
                >
                  History
                </a>
              )}
            </ScrollMarkerLink>
          </li>
          <li>
            <ScrollMarkerLink id="organization">
              {({ isActive, onClick }) => (
                <a
                  href="#organization"
                  style={{ borderLeft: isActive ? "3px solid blue" : "" }}
                  onClick={onClick}
                >
                  Organization
                </a>
              )}
            </ScrollMarkerLink>
          </li>
        </ul>
      </nav>
      <main style={{ height: "100vh", overflowY: "auto" }}>
        <h1>Binghamton University</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit
          amet aliquam odio, et sollicitudin diam. Proin pulvinar neque quis
          justo tempus tincidunt. Pellentesque tempor, sapien id sagittis porta,
          neque metus aliquam dolor, ut aliquam libero tellus tincidunt dui.
          Nullam ut placerat nulla. Phasellus malesuada gravida sagittis.
          Praesent sit amet feugiat libero. Etiam in velit massa. Nullam ut eros
          molestie, scelerisque velit a, interdum massa. Nunc accumsan volutpat
          lectus, ut lobortis arcu porta in. Nam mollis non eros blandit
          ultrices.
        </p>

        <p>
          Nullam facilisis justo nec felis interdum, sed iaculis purus porta.
          Pellentesque nec tellus condimentum, varius ipsum ac, vulputate urna.
          Aliquam a bibendum sapien. Cras varius eu turpis id ultricies. Morbi
          porttitor erat libero, in malesuada purus tristique vel. Maecenas
          sapien nisl, condimentum at sodales a, efficitur feugiat enim. Aliquam
          sit amet nibh ligula. Ut tortor nunc, molestie et arcu vitae, aliquam
          mattis neque. Nam iaculis, lacus eu commodo rutrum, nisi dui tempor
          nisi, non fringilla augue lectus eu augue. Maecenas ac scelerisque
          elit. Donec mollis ex scelerisque pellentesque lobortis. Phasellus id
          viverra sapien. Integer ultricies, urna non blandit consectetur, ex
          erat lobortis dui, ut sollicitudin diam justo sed metus. Nunc vel nunc
          cursus, euismod ex eget, ullamcorper turpis. Fusce at dignissim
          ligula.
        </p>

        <ScrollMarkerSection id="history">
          <h2>History</h2>

          <p>
            Nullam facilisis justo nec felis interdum, sed iaculis purus porta.
            Pellentesque nec tellus condimentum, varius ipsum ac, vulputate
            urna. Aliquam a bibendum sapien. Cras varius eu turpis id ultricies.
            Morbi porttitor erat libero, in malesuada purus tristique vel.
            Maecenas sapien nisl, condimentum at sodales a, efficitur feugiat
            enim. Aliquam sit amet nibh ligula. Ut tortor nunc, molestie et arcu
            vitae, aliquam mattis neque. Nam iaculis, lacus eu commodo rutrum,
            nisi dui tempor nisi, non fringilla augue lectus eu augue. Maecenas
            ac scelerisque elit. Donec mollis ex scelerisque pellentesque
            lobortis. Phasellus id viverra sapien. Integer ultricies, urna non
            blandit consectetur, ex erat lobortis dui, ut sollicitudin diam
            justo sed metus. Nunc vel nunc cursus, euismod ex eget, ullamcorper
            turpis. Fusce at dignissim ligula.
          </p>

          <h3>Establishment</h3>

          <p>
            Nullam facilisis justo nec felis interdum, sed iaculis purus porta.
            Pellentesque nec tellus condimentum, varius ipsum ac, vulputate
            urna. Aliquam a bibendum sapien. Cras varius eu turpis id ultricies.
            Morbi porttitor erat libero, in malesuada purus tristique vel.
            Maecenas sapien nisl, condimentum at sodales a, efficitur feugiat
            enim. Aliquam sit amet nibh ligula. Ut tortor nunc, molestie et arcu
            vitae, aliquam mattis neque. Nam iaculis, lacus eu commodo rutrum,
            nisi dui tempor nisi, non fringilla augue lectus eu augue. Maecenas
            ac scelerisque elit. Donec mollis ex scelerisque pellentesque
            lobortis. Phasellus id viverra sapien. Integer ultricies, urna non
            blandit consectetur, ex erat lobortis dui, ut sollicitudin diam
            justo sed metus. Nunc vel nunc cursus, euismod ex eget, ullamcorper
            turpis. Fusce at dignissim ligula.
          </p>

          <h3>Presidents</h3>

          <p>
            Nullam facilisis justo nec felis interdum, sed iaculis purus porta.
            Pellentesque nec tellus condimentum, varius ipsum ac, vulputate
            urna. Aliquam a bibendum sapien. Cras varius eu turpis id ultricies.
            Morbi porttitor erat libero, in malesuada purus tristique vel.
            Maecenas sapien nisl, condimentum at sodales a, efficitur feugiat
            enim. Aliquam sit amet nibh ligula. Ut tortor nunc, molestie et arcu
            vitae, aliquam mattis neque. Nam iaculis, lacus eu commodo rutrum,
            nisi dui tempor nisi, non fringilla augue lectus eu augue. Maecenas
            ac scelerisque elit. Donec mollis ex scelerisque pellentesque
            lobortis. Phasellus id viverra sapien. Integer ultricies, urna non
            blandit consectetur, ex erat lobortis dui, ut sollicitudin diam
            justo sed metus. Nunc vel nunc cursus, euismod ex eget, ullamcorper
            turpis. Fusce at dignissim ligula.
          </p>
        </ScrollMarkerSection>

        <ScrollMarkerSection id="organization">
          {({ id }) => (
            <section>
              <h2 id={id}>Organization</h2>

              <p>
                Nullam facilisis justo nec felis interdum, sed iaculis purus
                porta. Pellentesque nec tellus condimentum, varius ipsum ac,
                vulputate urna. Aliquam a bibendum sapien. Cras varius eu turpis
                id ultricies. Morbi porttitor erat libero, in malesuada purus
                tristique vel. Maecenas sapien nisl, condimentum at sodales a,
                efficitur feugiat enim. Aliquam sit amet nibh ligula. Ut tortor
                nunc, molestie et arcu vitae, aliquam mattis neque. Nam iaculis,
                lacus eu commodo rutrum, nisi dui tempor nisi, non fringilla
                augue lectus eu augue. Maecenas ac scelerisque elit. Donec
                mollis ex scelerisque pellentesque lobortis. Phasellus id
                viverra sapien. Integer ultricies, urna non blandit consectetur,
                ex erat lobortis dui, ut sollicitudin diam justo sed metus. Nunc
                vel nunc cursus, euismod ex eget, ullamcorper turpis. Fusce at
                dignissim ligula.
              </p>

              <h3>University leadership</h3>

              <p>
                Nullam facilisis justo nec felis interdum, sed iaculis purus
                porta. Pellentesque nec tellus condimentum, varius ipsum ac,
                vulputate urna. Aliquam a bibendum sapien. Cras varius eu turpis
                id ultricies. Morbi porttitor erat libero, in malesuada purus
                tristique vel. Maecenas sapien nisl, condimentum at sodales a,
                efficitur feugiat enim. Aliquam sit amet nibh ligula. Ut tortor
                nunc, molestie et arcu vitae, aliquam mattis neque. Nam iaculis,
                lacus eu commodo rutrum, nisi dui tempor nisi, non fringilla
                augue lectus eu augue. Maecenas ac scelerisque elit. Donec
                mollis ex scelerisque pellentesque lobortis. Phasellus id
                viverra sapien. Integer ultricies, urna non blandit consectetur,
                ex erat lobortis dui, ut sollicitudin diam justo sed metus. Nunc
                vel nunc cursus, euismod ex eget, ullamcorper turpis. Fusce at
                dignissim ligula.
              </p>

              <h3>Colleges and schools</h3>

              <p>
                Nullam facilisis justo nec felis interdum, sed iaculis purus
                porta. Pellentesque nec tellus condimentum, varius ipsum ac,
                vulputate urna. Aliquam a bibendum sapien. Cras varius eu turpis
                id ultricies. Morbi porttitor erat libero, in malesuada purus
                tristique vel. Maecenas sapien nisl, condimentum at sodales a,
                efficitur feugiat enim. Aliquam sit amet nibh ligula. Ut tortor
                nunc, molestie et arcu vitae, aliquam mattis neque. Nam iaculis,
                lacus eu commodo rutrum, nisi dui tempor nisi, non fringilla
                augue lectus eu augue. Maecenas ac scelerisque elit. Donec
                mollis ex scelerisque pellentesque lobortis. Phasellus id
                viverra sapien. Integer ultricies, urna non blandit consectetur,
                ex erat lobortis dui, ut sollicitudin diam justo sed metus. Nunc
                vel nunc cursus, euismod ex eget, ullamcorper turpis. Fusce at
                dignissim ligula.
              </p>
            </section>
          )}
        </ScrollMarkerSection>
      </main>
    </ScrollMarkerContainer>
  </div>
));
