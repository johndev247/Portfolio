import React from "react";
import {
  CopyRight,
  Facebook,
  GitHub,
  Icons,
  Instagram,
  SocialIcons,
  Twitter,
  FooterItems,
} from "../Footer/footer.style";
import {FooterGrid} from "../../../styles/grid.style";

import {FooterBox} from "./footer.style";
import {Links} from "../../../styles/globalStyles";

const Footer = () => {
  return (
    <>
      <FooterGrid>
        <FooterBox>
          <FooterItems>
            <CopyRight> &copy; John {new Date().getFullYear()}</CopyRight>
            <SocialIcons>
              <Icons>
                <Links target="blank" href="https://facebook.com/johndev247">
                  <Facebook />
                </Links>
              </Icons>
              <Icons>
                <Links target="blank" href="https://www.instagram.com/johndev_247/">
                  <Instagram />
                </Links>
              </Icons>
              <Icons>
                <Links target="blank" href="https://twitter.com/johndev247">
                  <Twitter />
                </Links>
              </Icons>
              <Icons>
                <Links target="blank" href="https://github.com/johndev247">
                  <GitHub />
                </Links>
              </Icons>
            </SocialIcons>
          </FooterItems>
        </FooterBox>
      </FooterGrid>
    </>
  );
};

export default Footer;
